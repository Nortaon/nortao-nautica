import { createFileRoute } from "@tanstack/react-router";

import docsImage from "@/assets/documentacao.jpg";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { faq, services, siteConfig } from "@/config/siteConfig";

const title = `Serviços náuticos — ${siteConfig.name}`;
const description =
  "Regularização e documentação de embarcações, serviços náuticos, projetos e soluções para casas flutuantes em Sinop-MT e região.";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Serviços"
        image={docsImage}
        title="Regularização, renovação e soluções náuticas"
        subtitle="Conduzimos processos e orientamos proprietários para manter a documentação da embarcação em dia e avançar em seus projetos."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <FAQ items={faq} />
        </div>
      </Section>

      <CTASection
        title="Precisa resolver a documentação?"
        description="Explique seu caso pelo WhatsApp e receba a orientação do próximo passo."
        message="Olá! Preciso de ajuda com regularização/documentação náutica."
      />
    </>
  );
}
