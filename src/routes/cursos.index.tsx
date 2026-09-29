import { createFileRoute } from "@tanstack/react-router";

import cursoImage from "@/assets/cursos-lancha-jetski.jpg";
import jetskiImage from "@/assets/jetski-rio.jpg";
import { CTASection } from "@/components/CTASection";
import { CourseCard } from "@/components/CourseCard";
import { DifferentialCard } from "@/components/DifferentialCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { courses, differentials, siteConfig } from "@/config/siteConfig";

const title = `Cursos náuticos — ${siteConfig.name}`;
const description =
  "Cursos de Arrais-Amador e Motonauta com aulas EAD, apostila impressa, simulados online e mais de 10 horas de videoaulas.";

export const Route = createFileRoute("/cursos/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CursosPage,
});

function CursosPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Cursos"
        image={cursoImage}
        title="Habilitação náutica com preparação de verdade"
        subtitle="Escolha o curso ideal para o seu perfil de navegação e conte com material de apoio, simulados e acompanhamento."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {courses.map((course, index) => (
            <CourseCard
              key={course.slug}
              course={course}
              image={index === 0 ? cursoImage : jetskiImage}
            />
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle eyebrow="Incluso" title="O que acompanha os nossos cursos" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <DifferentialCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Pronto para começar seu curso?"
        description="Fale com nossa equipe e entenda o passo a passo até a sua habilitação."
        message="Olá! Tenho interesse nos cursos náuticos da Nortão Náutica."
      />
    </>
  );
}
