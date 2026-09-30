import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { navLinks, siteConfig } from "@/config/siteConfig";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label={siteConfig.name}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-secondary text-primary transition-all duration-300 group-hover:border-primary group-hover:shadow-[var(--shadow-gold)]">
        <svg
          viewBox="0 0 40 40"
          className="h-7 w-7 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-3"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13 17c3-4 7-5 11-4l5 7-8 1-5-4-4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="21" cy="10" r="2.5" fill="currentColor" />
          <path d="M10 22h19l5 3-5 6H16c-5 0-8-2-10-5l4-4Z" fill="currentColor" />
          <path
            d="M5 34c6-3 10 3 16 0s10 3 15 0"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl tracking-wide text-foreground">
          Nortão <span className="text-gradient-gold">Náutica</span>
        </span>
        {!compact ? (
          <span className="mt-1 block text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
            {siteConfig.region}
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 shadow-[0_10px_30px_color-mix(in_oklab,var(--navy-deep)_42%,transparent)] backdrop-blur-md">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/55 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton className="hidden sm:inline-flex" variant="hero" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outlineGold"
                size="icon"
                className="xl:hidden"
                aria-label="Abrir menu"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm border-border bg-card p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-border px-6 py-6">
                  <Logo compact />
                </div>
                <ul className="flex-1 overflow-y-auto px-4 py-4">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        activeOptions={{ exact: link.to === "/" }}
                        activeProps={{ className: "text-primary" }}
                        className="block rounded-md px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-secondary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border p-4">
                  <WhatsAppButton className="w-full" variant="hero" size="lg" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
