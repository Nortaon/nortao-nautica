import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Wrapper de seção com espaçamento e largura consistentes. */
export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "deep";
}) {
  return (
    <section
      id={id}
      className={cn("px-4 py-20 sm:px-6 lg:px-8", tone === "deep" && "bg-navy-deep", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export default Section;
