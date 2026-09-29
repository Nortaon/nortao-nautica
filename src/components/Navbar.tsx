import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Anchor, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { navLinks, siteConfig } from "@/config/siteConfig";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label={siteConfig.name}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-secondary text-primary transition-colors group-hover:border-primary">
        <Anchor className="h-5 w-5" aria-hidden="true" />
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
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
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
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
              <Button variant="outlineGold" size="icon" className="xl:hidden" aria-label="Abrir menu">
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
