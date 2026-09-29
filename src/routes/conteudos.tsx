import { createFileRoute } from "@tanstack/react-router";

import cursoImage from "@/assets/curso-nautico.jpg";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { resources, siteConfig } from "@/config/siteConfig";

const title = `Conteúdos e materiais — ${siteConfig.name}`;
const description =
  "Videoaulas, apostilas, simulados e ambiente EAD para apoiar a preparação dos alunos da Nortão Náutica.";

export const Route = createFileRoute("/conteudos")({
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
  component: ConteudosPage,
});

function ConteudosPage() {
  return (
    <>
      <Hero
        size="compact"
        eyebrow="Conteúdos"
        image={cursoImage}
        imageAlt="Lancha e jet ski usados na formação náutica"
        title="Materiais de apoio ao seu aprendizado"
        subtitle="Espaço reservado para videoaulas, apostilas, simulados e o ambiente EAD. Os acessos serão publicados aqui."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </Section>

      <CTASection
        title="Quer acesso aos materiais?"
        description="Fale com a nossa equipe pelo WhatsApp e saiba como acessar os conteúdos."
        message="Olá! Gostaria de saber como acessar os conteúdos e materiais."
      />
    </>
  );
}
