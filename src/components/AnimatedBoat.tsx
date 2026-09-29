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
  const x = useTransform(progress, [0, 1], ["-8rem", "calc(100vw - 4rem)"]);
  const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, -8, 4, -6, 0]);
  const rotate = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [-1.5, 1.2, -1, 1.4, -0.6]);
  const wake = useTransform(progress, [0, 0.08, 1], [0.2, 0.65, 0.8]);

  useEffect(() => setMounted(true), []);

  const still = reducedMotion || motionReduced || !mounted;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-x-0 select-none", className)}
    >
      <motion.div
        className="relative w-28 drop-shadow-[0_8px_18px_color-mix(in_oklab,var(--navy-deep)_70%,transparent)] sm:w-36"
        style={still ? { x: "12%" } : { x, y, rotate }}
      >
        <motion.div
          className="absolute top-[58%] right-[72%] w-28 sm:w-40"
          style={still ? { opacity: 0.35 } : { opacity: wake }}
        >
          <WaveTrail />
        </motion.div>
        <JetSkiMark still={still} />
      </motion.div>
    </div>
  );
}

function JetSkiMark({ still }: { still: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 140 72"
      className="w-full text-primary"
      fill="none"
      role="presentation"
      animate={still ? undefined : { y: [0, -3, 1, 0], rotate: [0, 1.5, -0.7, 0] }}
      transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M45 25c7-8 17-12 29-11l13 1 10 17-17 2-12-9-15 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="68" cy="12" r="7" fill="currentColor" />
      <path d="M49 34h58l18 9-12 12c-4 4-9 6-15 6H43c-9 0-17-4-23-10l-5-6 29-3 5-8Z" fill="currentColor" />
      <path d="M80 34h29l10 8-35 1-4-9Z" fill="currentColor" opacity="0.55" />
      <path d="M26 59c19 7 62 8 91 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </motion.svg>
  );
}

function WaveTrail() {
  return (
    <svg viewBox="0 0 180 46" className="w-full text-primary" fill="none" role="presentation">
      {[0, 12, 24].map((offset, index) => (
        <motion.path
          key={offset}
          d={`M4 ${8 + offset}c18-9 34 9 52 0s34-9 52 0 34 9 52 0`}
          stroke="currentColor"
          strokeWidth={index === 0 ? 3 : 2}
          strokeLinecap="round"
          opacity={0.75 - index * 0.18}
          animate={{ pathLength: [0.35, 1, 0.35], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

export default AnimatedBoat;
