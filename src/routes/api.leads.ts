import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const limits = new Map<string, { count: number; resetAt: number }>();
const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const clean = (value: string) => value.trim().replace(/\s+/g, " ");
const optionalText = (max: number) =>
  z.string().transform(clean).pipe(z.string().max(max)).optional();

const schema = z
  .object({
    name: z.string().transform(clean).pipe(z.string().min(2).max(100)),
    phone: z
      .string()
      .transform(clean)
      .pipe(z.string().min(8).max(30).regex(/^[+()\d\s.-]+$/)),
    email: optionalText(254),
    service: optionalText(100),
    message: optionalText(2_000),
    source: optionalText(100),
  })
  .strict();

function cors(request: Request) {
  const origin = request.headers.get("origin");
  const ownOrigin = new URL(request.url).origin;
  const allowedOrigins = (process.env.FRONTEND_ORIGIN ?? "")
    .split(",")
    .map((value) => value.trim().replace(/\/$/, ""))
    .filter(Boolean);

  const headers = new Headers({
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });

  if (origin && (origin === ownOrigin || allowedOrigins.includes(origin))) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Accept");
    headers.set("Access-Control-Max-Age", "86400");
    headers.set("Vary", "Origin");
  }

  return {
    headers,
    rejected: Boolean(origin && origin !== ownOrigin && !allowedOrigins.includes(origin)),
  };
}

function jsonError(
  request: Request,
  status: number,
  code: string,
  message: string,
  fields?: Record<string, string[]>,
) {
  const { headers } = cors(request);
  return Response.json(
    {
      success: false,
      data: null,
      error: fields ? { code, message, fields } : { code, message },
    },
    { status, headers },
  );
}

function clientIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function validationFields(error: z.ZodError) {
  const fields: Record<string, string[]> = {};
  for (const [field, messages] of Object.entries(error.flatten().fieldErrors)) {
    if (messages?.length) fields[field] = messages;
  }
  return fields;
}

export const Route = createFileRoute("/api/leads")({
  server: {
    handlers: {
      OPTIONS: async ({ request }) => {
        const { headers, rejected } = cors(request);
        return rejected
          ? jsonError(request, 403, "ORIGIN_NOT_ALLOWED", "Origem não autorizada.")
          : new Response(null, { status: 204, headers });
      },
      POST: async ({ request }) => {
        const { rejected, headers } = cors(request);
        if (rejected) {
          return jsonError(request, 403, "ORIGIN_NOT_ALLOWED", "Origem não autorizada.");
        }

        const now = Date.now();
        const key = clientIp(request);
        const current = limits.get(key);

        if (current && current.resetAt > now && current.count >= RATE_LIMIT_MAX) {
          const response = jsonError(
            request,
            429,
            "RATE_LIMITED",
            "Muitas tentativas. Aguarde alguns minutos.",
          );
          response.headers.set(
            "Retry-After",
            String(Math.ceil((current.resetAt - now) / 1000)),
          );
          return response;
        }

        limits.set(
          key,
          current && current.resetAt > now
            ? { ...current, count: current.count + 1 }
            : { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS },
        );

        if (!(request.headers.get("content-type") ?? "").toLowerCase().includes("application/json")) {
          return jsonError(
            request,
            415,
            "UNSUPPORTED_MEDIA_TYPE",
            "Envie os dados em formato JSON.",
          );
        }

        let body: unknown;
        try {
          const raw = await request.text();
          if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
            return jsonError(
              request,
              413,
              "PAYLOAD_TOO_LARGE",
              "O conteúdo enviado excede o limite permitido.",
            );
          }
          body = JSON.parse(raw) as unknown;
        } catch {
          return jsonError(request, 400, "INVALID_JSON", "Não foi possível interpretar os dados enviados.");
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return jsonError(
            request,
            400,
            "VALIDATION_ERROR",
            "Revise os campos informados.",
            validationFields(parsed.error),
          );
        }

        void headers;
        return Response.json(
          { success: true, data: { accepted: true }, error: null },
          { status: 202, headers: cors(request).headers },
        );
      },
    },
  },
});
