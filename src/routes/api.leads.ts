import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const limits = new Map<string, { count: number; resetAt: number }>();
const clean = (value: string) => value.trim().replace(/\s+/g, " ");
const optional = (max: number) => z.string().transform(clean).pipe(z.string().max(max)).optional().transform((v) => v || undefined);
const schema = z.object({
  name: z.string().transform(clean).pipe(z.string().min(2).max(100)),
  phone: z.string().transform(clean).pipe(z.string().min(8).max(30).regex(/^[+()\d\s.-]+$/)),
  email: optional(254).pipe(z.string().email().optional()),
  service: optional(100), message: optional(2000), source: optional(100),
}).strict();

function cors(request: Request) {
  const origin = request.headers.get("origin");
  const own = new URL(request.url).origin;
  const allowed = (process.env["FRONTEND_ORIGIN"] ?? "").split(",").map((v) => v.trim().replace(/\/$/, ""));
  const headers = new Headers({ "Cache-Control": "no-store", "Content-Type": "application/json; charset=utf-8", "Referrer-Policy": "no-referrer", "X-Content-Type-Options": "nosniff", "X-Frame-Options": "DENY" });
  if (origin && (origin === own || allowed.includes(origin))) {
    headers.set("Access-Control-Allow-Origin", origin); headers.set("Access-Control-Allow-Methods", "POST, OPTIONS"); headers.set("Access-Control-Allow-Headers", "Content-Type, Accept"); headers.set("Access-Control-Max-Age", "86400"); headers.set("Vary", "Origin");
  }
  return { headers, rejected: Boolean(origin && origin !== own && !allowed.includes(origin)) };
}
function error(request: Request, status: number, code: string, message: string, fields?: Record<string, string[]>) {
  const { headers } = cors(request);
  return Response.json({ success: false, data: null, error: fields ? { code, message, fields } : { code, message } }, { status, headers });
}
function ip(request: Request) { return request.headers.get("cf-connecting-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"; }

export const Route = createFileRoute("/api/leads")({ server: { handlers: {
  OPTIONS: async ({ request }) => { const { headers, rejected } = cors(request); return rejected ? error(request, 403, "ORIGIN_NOT_ALLOWED", "Origem não autorizada.") : new Response(null, { status: 204, headers }); },
  POST: async ({ request }) => {
    if (cors(request).rejected) return error(request, 403, "ORIGIN_NOT_ALLOWED", "Origem não autorizada.");
    const now = Date.now(), key = ip(request), current = limits.get(key);
    if (current && current.resetAt > now && current.count >= 5) { const response = error(request, 429, "RATE_LIMITED", "Muitas tentativas. Aguarde alguns minutos."); response.headers.set("Retry-After", String(Math.ceil((current.resetAt - now) / 1000))); return response; }
    limits.set(key, current && current.resetAt > now ? { ...current, count: current.count + 1 } : { count: 1, resetAt: now + 900000 });
    if (!(request.headers.get("content-type") ?? "").includes("application/json")) return error(request, 415, "UNSUPPORTED_MEDIA_TYPE", "Envie os dados em formato JSON.");
    let body: unknown;
    try { const raw = await request.text(); if (new TextEncoder().encode(raw).byteLength > 16384) return error(request, 413, "PAYLOAD_TOO_LARGE", "Conteúdo excede o limite."); body = JSON.parse(raw) as unknown; } catch { return error(request, 400, "INVALID_JSON", "Dados inválidos."); }
    const parsed = schema.safeParse(body);
    if (!parsed.success) return error(request, 400, "VALIDATION_ERROR", "Revise os campos informados.", parsed.error.flatten().fieldErrors);
    return Response.json({ success: true, data: { accepted: true }, error: null }, { status: 202, headers: cors(request).headers });
  },
} } });