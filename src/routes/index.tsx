import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-river.jpg";
import cursoImage from "@/assets/cursos-lancha-jetski.jpg";
import jetskiImage from "@/assets/jetski-rio.jpg";
import casaImage from "@/assets/casa-flutuante.jpg";
import { AnimatedBoat } from "@/components/AnimatedBoat";
import { CTASection } from "@/components/CTASection";
import { CourseCard } from "@/components/CourseCard";
import { DifferentialCard } from "@/components/DifferentialCard";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  courses,
  differentials,
  faq,
  resources,
  services,
  siteConfig,
} from "@/config/siteConfig";

const title = `${siteConfig.name} — Do documento à navegação`;
const description = siteConfig.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Hero
        eyebrow={siteConfig.region}
        image={heroImage}
        imageAlt="Embarcação navegando em rio ao entardecer"
        title={
          <>
            {siteConfig.sloganLines[0]}
            <br />
            <span className="text-gradient-gold">{siteConfig.sloganLines[1]}</span>
          </>
        }
        subtitle="A Nortão Náutica reúne cursos náuticos, regularização e documentação de embarcações, serviços náuticos e soluções para casas flutuantes — com acompanhamento em cada etapa."
        actions={
          <>
            <Button asChild variant="hero" size="xl">
              <Link to="/cursos">Conheça nossos cursos</Link>
            </Button>
            <WhatsAppButton
              label="Falar com um especialista"
              variant="outlineGold"
              size="xl"
              message="Olá! Gostaria de falar com um especialista da Nortão Náutica."
            />
          </>
        }
      />

      {/* Jet ski animado acompanha a navegação da página */}
      <div className="pointer-events-none fixed inset-x-0 top-1/2 z-10 hidden -translate-y-1/2 opacity-70 md:block">
        <AnimatedBoat />
      </div>

      <Section id="cursos">
        <SectionTitle
          eyebrow="Cursos"
          title="Habilitação náutica com preparação completa"
          description="Formação para quem quer navegar com segurança e dentro das exigências da autoridade marítima."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {courses.map((course, index) => (
            <CourseCard
              key={course.slug}
              course={course}
              image={index === 0 ? cursoImage : jetskiImage}
            />
          ))}
        </div>
      </Section>

      <Section tone="deep" id="servicos">
        <SectionTitle
          eyebrow="Serviços"
          title="Do papel à água, resolvemos o caminho"
          description="Documentação, suporte a embarcações, projetos e casas flutuantes com condução técnica."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Casas flutuantes"
              title="Da ideia à sua casa flutuante"
              description="Projetos, regularização e soluções para quem deseja viver a experiência de uma casa sobre a água."
            />
            <div className="mt-8">
              <Button asChild variant="outlineGold" size="lg">
                <Link to="/casas-flutuantes">Ver soluções para casas flutuantes</Link>
              </Button>
            </div>
          </div>
          <img
            src={casaImage}
            alt="Casa flutuante iluminada sobre rio calmo ao anoitecer"
            loading="lazy"
            width={1280}
            height={864}
            className="rounded-2xl border border-border object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </Section>

      <Section tone="deep" id="diferenciais">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Estrutura pensada para o aluno aprender e concluir"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <DifferentialCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section id="conteudos">
        <SectionTitle eyebrow="Conteúdos" title="Recursos de apoio ao seu aprendizado" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
          <FAQ items={faq} />
        </div>
      </Section>

      <CTASection />
    </div>
  );
}
