import { createFileRoute } from "@tanstack/react-router";

import cursoImage from "@/assets/cursos-lancha-jetski.jpg";
import jetskiImage from "@/assets/jetski-rio.jpg";
import heroImage from "@/assets/hero-river.jpg";
import { CTASection } from "@/components/CTASection";
import { CourseCard } from "@/components/CourseCard";
import { DifferentialCard } from "@/components/DifferentialCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { courseExamInfo, courses, differentials, siteConfig } from "@/config/siteConfig";

const title = `Cursos náuticos — ${siteConfig.name}`;
const description =
  "Cursos de Motonauta, Arrais-Amador e Mestre Amador com aulas EAD, apostila impressa, simulados online e mais de 10 horas de videoaulas.";

const courseImages = [cursoImage, jetskiImage, heroImage];

export const Route = createFileRoute("/cursos/")({
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
  component: CursosPage,
});

function CursosPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Cursos"
        image={cursoImage}
        imageAlt="Lancha e jet ski durante navegação em rio"
        title="Habilitação náutica com preparação de verdade"
        subtitle="Motonauta, Arrais-Amador e Mestre Amador para diferentes etapas da sua jornada, com recursos de estudo e orientação."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={course.slug}
              course={course}
              image={courseImages[index] ?? heroImage}
            />
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-border bg-card/50 p-6 text-sm leading-relaxed text-foreground/80">
          {courseExamInfo}
        </p>
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
