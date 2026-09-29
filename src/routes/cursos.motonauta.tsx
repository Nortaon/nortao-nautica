import { createFileRoute } from "@tanstack/react-router";

import cursoImage from "@/assets/jetski-rio.jpg";
import { CTASection } from "@/components/CTASection";
import { DifferentialCard } from "@/components/DifferentialCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { courses, differentials, siteConfig } from "@/config/siteConfig";

const course = courses[1];
const title = `Curso Motonauta — ${siteConfig.name}`;
const description = course.description;

export const Route = createFileRoute("/cursos/motonauta")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MotonautaPage,
});

function MotonautaPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Curso"
        image={cursoImage}
        title="Motonauta"
        subtitle={course.description}
        actions={
          <WhatsAppButton
            label="Quero me inscrever"
            variant="hero"
            size="xl"
            message="Olá! Tenho interesse no curso de Motonauta."
          />
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionTitle
            eyebrow="Para quem é"
            title="Para quem pilota motos aquáticas"
            description="Ideal para quem quer aproveitar a moto aquática com segurança e dentro das exigências da autoridade marítima."
          />
          <ul className="space-y-3 text-sm text-foreground/85">
            {course.benefits.map((benefit) => (
              <li key={benefit} className="surface-panel rounded-xl px-5 py-4">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
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
        title="Pilote com segurança e em dia."
        description="Fale com a nossa equipe e conheça o passo a passo do curso Motonauta."
        message="Olá! Gostaria de informações sobre o curso de Motonauta."
      />
    </>
  );
}
