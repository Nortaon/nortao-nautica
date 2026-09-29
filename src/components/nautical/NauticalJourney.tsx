import { useLocation } from "@tanstack/react-router";

import { AnimatedBoat } from "@/components/AnimatedBoat";

/** Persistent decorative layer that stays mounted while route content changes. */
export function NauticalJourney() {
  const pathname = useLocation({ select: (location) => location.pathname });
  const isHome = pathname === "/";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
    >
      <AnimatedBoat
        key={isHome ? "home-journey" : pathname}
        mode={isHome ? "home" : "ambient"}
        className={
          isHome
            ? "top-[52%] hidden -translate-y-1/2 opacity-70 md:block"
            : "bottom-24 opacity-60 sm:bottom-20"
        }
      />
    </div>
  );
}

export default NauticalJourney;
