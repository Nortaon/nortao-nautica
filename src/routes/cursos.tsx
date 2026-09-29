import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/cursos")({
  component: CursosLayout,
});

function CursosLayout() {
  useMatches();
  return <Outlet />;
}
