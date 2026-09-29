import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-river.jpg";
import { CTASection } from "@/components/CTASection";
import { DifferentialCard } from "@/components/DifferentialCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { differentials, siteConfig } from "@/config/siteConfig";

const title = `Diferenciais — ${siteConfig.name}`;
const description =
  "Atendimento focado na experiência do cliente, aulas EAD, apostila impressa, simulados online e mais de 10 horas de videoaulas.";

export const Route = createFileRoute("/diferenciais")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiferenciaisPage,
});

function DiferenciaisPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Diferenciais"
        image={heroImage}
        imageAlt="Embarcação navegando ao entardecer"
        title="O que torna a experiência Nortão diferente"
        subtitle="Estrutura de apoio e atendimento próximo para que cada cliente conclua o que veio buscar."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <DifferentialCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
