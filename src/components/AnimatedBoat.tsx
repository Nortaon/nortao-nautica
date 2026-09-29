import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

/**
 * AnimatedBoat
 *
 * Arquitetura:
 * - `useScroll` (progresso global da página) alimenta um `useSpring`, que suaviza o valor.
 * - `useTransform` deriva: posição horizontal (parallax), leve balanço vertical e inclinação.
 * - Nenhum listener de scroll manual: tudo roda em valores de motion (sem re-render por frame).
 * - `prefers-reduced-motion` desliga o movimento e mantém apenas o barco estático.
 * - A animação vive isolada neste componente; as páginas apenas o posicionam.
 */
export function AnimatedBoat({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion();
  const motionReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 24, mass: 0.6 });
  const x = useTransform(progress, [0, 1], ["-6%", "86%"]);
  const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, -8, 4, -6, 0]);
  const rotate = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-1.5, 1.2, -1, 1.4, -0.6]);
  const wake = useTransform(progress, [0, 0.1, 1], [0, 0.45, 0.6]);

  useEffect(() => setMounted(true), []);

  const still = reducedMotion || motionReduced || !mounted;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-x-0 select-none", className)}
    >
      <motion.div
        className="relative w-24 sm:w-32"
        style={still ? { x: "12%" } : { x, y, rotate }}
      >
        <motion.span
          className="absolute top-1/2 right-full mr-1 h-[2px] w-24 rounded-full hairline-gold sm:w-36"
          style={still ? { opacity: 0.35 } : { opacity: wake }}
        />
        <BoatMark />
      </motion.div>
    </div>
  );
}

function BoatMark() {
  return (
    <svg viewBox="0 0 120 60" className="w-full text-primary" fill="none" role="presentation">
      <path d="M58 6 L58 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 8 L92 32 L60 32 Z" fill="currentColor" opacity="0.85" />
      <path d="M56 12 L34 32 L56 32 Z" fill="currentColor" opacity="0.45" />
      <path
        d="M14 36 H106 L94 50 Q92 53 88 53 H32 Q28 53 26 50 Z"
        fill="currentColor"
        opacity="0.95"
      />
    </svg>
  );
}

export default AnimatedBoat;
