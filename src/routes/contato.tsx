import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";

import docsImage from "@/assets/documentacao.jpg";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/siteConfig";

const title = `Contato — ${siteConfig.name}`;
const description = `Fale com a ${siteConfig.name} pelo WhatsApp ${siteConfig.whatsapp.display} ou por e-mail. Atendimento em ${siteConfig.region}.`;

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Contato"
        image={docsImage}
        title="Fale com a Nortão Náutica"
        subtitle="O WhatsApp é o caminho mais rápido para tirar dúvidas sobre cursos, documentação e projetos náuticos."
        actions={<WhatsAppButton variant="hero" size="xl" />}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Canais" title="Como falar com a gente" />
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a
                  href={`tel:+${siteConfig.whatsapp.number}`}
                  className="surface-panel flex items-center gap-3 rounded-xl px-5 py-4 text-foreground transition-colors hover:border-primary/40"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="surface-panel flex items-center gap-3 rounded-xl px-5 py-4 text-foreground transition-colors hover:border-primary/40"
                >
                  <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">CNPJ {siteConfig.cnpj}</p>
          </div>

          <div className="grid gap-6">
            {siteConfig.locations.map((location) => (
              <LocationCard key={location.city} {...location} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
