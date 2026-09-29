import { createFileRoute } from "@tanstack/react-router";

import cursoImage from "@/assets/hero-river.jpg";
import { CTASection } from "@/components/CTASection";
import { DifferentialCard } from "@/components/DifferentialCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { courseExamInfo, courses, differentials, siteConfig } from "@/config/siteConfig";

const course = courses.find((item) => item.slug === "mestre-amador") ?? {
  slug: "mestre-amador",
  to: "/cursos/mestre-amador",
  title: "Mestre Amador",
  shortTitle: "Mestre Amador",
  description: "Formação para avançar na jornada náutica.",
  audience: "Para quem quer avançar na formação náutica.",
  objective: "Preparação para o próximo passo na jornada náutica.",
  benefits: [],
};
const title = `Curso Mestre Amador — ${siteConfig.name}`;
const description = `${course.description} Formação EAD com recursos de estudo e orientação da Nortão Náutica.`;

export const Route = createFileRoute("/cursos/mestre-amador")({
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
  component: MestreAmadorPage,
});

function MestreAmadorPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Curso"
        image={cursoImage}
        imageAlt="Embarcação navegando em rio amplo ao entardecer"
        title="Mestre Amador"
        subtitle={course.description}
        actions={
          <WhatsAppButton
            label="Quero saber mais"
            variant="hero"
            size="xl"
            message="Olá! Tenho interesse no curso de Mestre Amador."
          />
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionTitle
            eyebrow="Para quem é"
            title="Para quem quer avançar na formação náutica"
            description="Uma formação voltada a quem deseja seguir para o próximo passo da sua jornada como condutor amador."
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
          {courseExamInfo} Para confirmar detalhes específicos da formação e da prova, fale com a
          equipe da Nortão.
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
        title="Avance na sua jornada náutica."
        description="Fale com a equipe para conhecer a preparação do curso Mestre Amador."
        message="Olá! Gostaria de informações sobre o curso de Mestre Amador."
      />
    </>
  );
}
