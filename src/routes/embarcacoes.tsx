import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/hero-river.jpg";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { services, siteConfig } from "@/config/siteConfig";

const service = services[1] ?? {
  slug: "embarcacoes",
  title: "Serviços para embarcações",
  description: "Suporte técnico e administrativo para proprietários de embarcações.",
  to: "/embarcacoes",
  highlights: [],
};
const title = `Serviços para embarcações — ${siteConfig.name}`;
const description =
  "Suporte técnico e administrativo para proprietários de embarcações em Sinop-MT e região: orientação, acompanhamento e regularização.";

export const Route = createFileRoute("/embarcacoes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: EmbarcacoesPage,
});

function EmbarcacoesPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Embarcações"
        image={heroImage}
        title="Serviços para embarcações"
        subtitle={service.description}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionTitle
            eyebrow="Como ajudamos"
            title="Apoio do início ao documento em mãos"
            description="Acompanhamos processos e orientamos o proprietário sobre as exigências aplicáveis à sua embarcação."
          />
          <ul className="space-y-3 text-sm text-foreground/85">
            {service.highlights.map((item) => (
              <li key={item} className="surface-panel rounded-xl px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle
          eyebrow="Galeria"
          title="Espaço reservado para as fotos da Nortão"
          description="Assim que as imagens dos atendimentos forem enviadas, elas aparecem aqui."
        />
        <Gallery className="mt-12" items={[{}, {}, {}]} />
      </Section>

      <CTASection
        title="Sua embarcação em dia."
        description="Fale com a nossa equipe e entenda o que é necessário no seu caso."
        message="Olá! Preciso de serviços para a minha embarcação."
      />
    </>
  );
}
