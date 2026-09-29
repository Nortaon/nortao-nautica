import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/Navbar";
import { footerLinks, siteConfig, whatsappLink } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm font-display text-lg leading-snug text-foreground/85">
            {siteConfig.sloganLines[0]}
            <br />
            {siteConfig.sloganLines[1]}
          </p>
          <p className="mt-6 text-sm text-muted-foreground">CNPJ {siteConfig.cnpj}</p>
        </div>

        <div>
          <h2 className="eyebrow">Contato</h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                WhatsApp {siteConfig.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.locations.map((location) => (
              <li key={location.city} className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {location.label}: {location.address} — {location.city}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Páginas</h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
