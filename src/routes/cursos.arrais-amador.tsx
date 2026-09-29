import { createFileRoute } from "@tanstack/react-router";

import cursoImage from "@/assets/cursos-lancha-jetski.jpg";
import { CTASection } from "@/components/CTASection";
import { DifferentialCard } from "@/components/DifferentialCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { courseExamInfo, courses, differentials, siteConfig } from "@/config/siteConfig";

const course = courses[0] ?? {
  slug: "arrais-amador",
  to: "/cursos/arrais-amador",
  title: "Arrais-Amador",
  shortTitle: "Arrais-Amador",
  description: "Habilitação para conduzir embarcações de esporte e recreio em águas interiores.",
  audience: "Para quem quer conduzir embarcações em águas interiores.",
  objective: "Preparação para a jornada de habilitação.",
  benefits: [],
};
const title = `Curso Arrais-Amador — ${siteConfig.name}`;
const description = course.description;

export const Route = createFileRoute("/cursos/arrais-amador")({
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
  component: ArraisPage,
});

function ArraisPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Curso"
        image={cursoImage}
        imageAlt="Lancha e jet ski navegando em rio"
        title="Arrais-Amador"
        subtitle={course.description}
        actions={
          <WhatsAppButton
            label="Quero me inscrever"
            variant="hero"
            size="xl"
            message="Olá! Tenho interesse no curso de Arrais-Amador."
          />
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionTitle
            eyebrow="Para quem é"
            title="Para quem quer conduzir embarcações de esporte e recreio"
            description="Indicado a quem deseja navegar com a própria embarcação em águas interiores, com segurança e documentação em dia."
          />
          <ul className="space-y-3 text-sm text-foreground/85">
            {course.benefits.map((benefit) => (
              <li key={benefit} className="surface-panel rounded-xl px-5 py-4">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-l border-primary/50 pl-5 text-sm leading-relaxed text-muted-foreground">
          {courseExamInfo}
        </p>
      </Section>

      <Section tone="deep">
        <SectionTitle eyebrow="Estrutura" title="Recursos que acompanham o curso" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <DifferentialCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Comece pelo Arrais-Amador."
        description="Fale com a nossa equipe e receba as orientações sobre turmas, material e prova."
        message="Olá! Gostaria de informações sobre o curso de Arrais-Amador."
      />
    </>
  );
}
