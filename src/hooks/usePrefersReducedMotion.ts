import { useSyncExternalStore } from "react";

const mediaQuery = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(mediaQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(mediaQuery).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Retorna true quando o usuário pediu menos animações no sistema.
 * Sempre false na primeira renderização (SSR-safe).
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
