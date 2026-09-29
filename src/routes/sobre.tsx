import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-river.jpg";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { LocationCard } from "@/components/LocationCard";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/config/siteConfig";

const title = `A Nortão — ${siteConfig.name}`;
const description = `Conheça a ${siteConfig.name}: cursos náuticos, regularização de embarcações e soluções para casas flutuantes em ${siteConfig.region}.`;

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="A Nortão"
        image={heroImage}
        title="Uma náutica completa para o norte de Mato Grosso"
        subtitle={`A ${siteConfig.name} atua em ${siteConfig.region}, unindo formação, documentação e soluções náuticas em um único atendimento.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionTitle
            eyebrow="Nosso propósito"
            title="Do documento à navegação"
            description="Acompanhamos o cliente desde a primeira dúvida sobre habilitação ou documentação até o momento de navegar — e, para quem sonha com uma casa flutuante, da ideia ao projeto."
          />
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              Trabalhamos com cursos náuticos, regularização e documentação de embarcações, serviços
              para embarcações e soluções para casas flutuantes.
            </p>
            <p>
              Nosso atendimento é focado na experiência do cliente: linguagem clara, orientação
              objetiva e acompanhamento em cada etapa do processo.
            </p>
            <p>CNPJ {siteConfig.cnpj}</p>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle eyebrow="Onde estamos" title="Atuação e filial" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {siteConfig.locations.map((location) => (
            <LocationCard key={location.city} {...location} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
