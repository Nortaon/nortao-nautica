import { useReducedMotion } from "motion/react";

/**
 * Retorna true quando o usuário pediu menos animações no sistema.
 * Sempre false na primeira renderização (SSR-safe).
 */
export function usePrefersReducedMotion() {
  return Boolean(useReducedMotion());
}
