import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cursos")({
  component: CursosLayout,
});

function CursosLayout() {
  return <Outlet />;
}
