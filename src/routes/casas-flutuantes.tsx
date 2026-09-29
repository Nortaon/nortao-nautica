import { createFileRoute } from "@tanstack/react-router";

import casaImage from "@/assets/casa-flutuante.jpg";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/config/siteConfig";

const title = `Casas flutuantes — ${siteConfig.name}`;
const description =
  "Projetos, regularização e soluções para casas flutuantes em Sinop-MT e região. Da ideia à sua casa sobre a água.";

export const Route = createFileRoute("/casas-flutuantes")({
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
  component: CasasFlutuantesPage,
});

const steps = [
  {
    title: "Ideia",
    description: "Entendemos o que você imagina e as condições do local de navegação.",
  },
  {
    title: "Projeto",
    description: "Soluções e encaminhamentos técnicos para viabilizar a casa flutuante.",
  },
  {
    title: "Regularização",
    description: "Condução do processo documental necessário para a sua casa flutuante.",
  },
];

function CasasFlutuantesPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Casas flutuantes"
        image={casaImage}
        imageAlt="Casa flutuante sofisticada sobre águas calmas"
        title="Da ideia à sua casa flutuante"
        subtitle="Projetos, regularização e soluções para quem quer transformar a vontade de morar sobre a água em realidade."
      />

      <Section>
        <SectionTitle eyebrow="Etapas" title="Como conduzimos o seu projeto" />
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="surface-panel rounded-2xl p-7">
              <span className="font-display text-4xl text-primary">0{index + 1}</span>
              <h3 className="mt-4 font-display text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep">
        <SectionTitle
          eyebrow="Galeria"
          title="Espaço preparado para as imagens dos projetos"
          description="As fotos reais das casas flutuantes serão publicadas aqui."
        />
        <Gallery className="mt-12" items={[{}, {}, {}]} />
      </Section>

      <CTASection
        title="Vamos tirar sua casa flutuante do papel."
        description="Conte sua ideia pelo WhatsApp e receba orientação sobre projeto e regularização."
        message="Olá! Gostaria de falar sobre um projeto de casa flutuante."
      />
    </>
  );
}
