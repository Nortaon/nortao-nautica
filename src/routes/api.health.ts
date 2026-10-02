import { createFileRoute } from "@tanstack/react-router";

const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };

export const Route = createFileRoute("/api/health")({
  server: { handlers: { GET: async () => Response.json({ success: true, data: { status: "ok" }, error: null }, { headers }) } },
});