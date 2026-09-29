import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, ArrowRight, Compass, FileCheck2, House, MapPin, Wrench } from "lucide-react";

import casaImage from "@/assets/casa-flutuante.jpg";
import cursoImage from "@/assets/cursos-lancha-jetski.jpg";
import docsImage from "@/assets/documentacao.jpg";
import heroImage from "@/assets/hero-river.jpg";
import jetskiImage from "@/assets/jetski-rio.jpg";
import { CourseCard } from "@/components/CourseCard";
import { DifferentialCard } from "@/components/DifferentialCard";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JourneyPathCard } from "@/components/JourneyPathCard";
import { JourneySteps } from "@/components/JourneySteps";
import { ResourceCard } from "@/components/ResourceCard";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  courseExamInfo,
  courses,
  differentials,
  faq,
  resources,
  services,
  siteConfig,
} from "@/config/siteConfig";

const title = "Nortão Náutica | Cursos e soluções náuticas em Sinop-MT e Colíder-MT";
const description =
  "Cursos de Motonauta, Arrais-Amador e Mestre Amador, regularização e documentação, serviços para embarcações e casas flutuantes em Sinop-MT e Colíder-MT.";

const courseImages = [cursoImage, jetskiImage, heroImage];

const pathOptions = [
  {
    title: "Quero me habilitar para navegar",
    description: "Encontre a formação que combina com o seu próximo passo na água.",
    to: "/cursos" as const,
    image: cursoImage,
    imageAlt: "Lancha e jet ski navegando em águas abertas",
    icon: Compass,
  },
  {
    title: "Preciso regularizar ou renovar",
    description: "Receba orientação documental para manter sua embarcação em dia.",
    to: "/servicos" as const,
    image: docsImage,
    imageAlt: "Documentação náutica organizada sobre mesa de trabalho",
    icon: FileCheck2,
  },
  {
    title: "Preciso de serviços para minha embarcação",
    description: "Entenda o que a Nortão pode resolver para a sua embarcação.",
    to: "/embarcacoes" as const,
    image: jetskiImage,
    imageAlt: "Jet ski sofisticado navegando em rio",
    icon: Wrench,
  },
  {
    title: "Quero uma casa flutuante",
    description: "Converse sobre projeto e regularização para tirar sua ideia do papel.",
    to: "/casas-flutuantes" as const,
    image: casaImage,
    imageAlt: "Casa flutuante sofisticada sobre águas calmas",
    icon: House,
  },
];

const formationSteps = [
  { title: "Escolha sua formação" },
  { title: "Prepare-se" },
  { title: "Faça sua prova" },
  { title: "Avance na jornada náutica" },
];

const serviceSteps = [
  { title: "Conte o que você precisa", description: "Compartilhe seu objetivo ou situação atual." },
  { title: "Receba orientação", description: "A equipe ajuda a organizar o caminho possível." },
  { title: "Escolha a solução", description: "Defina a opção adequada à sua necessidade." },
  { title: "Resolva sua etapa náutica", description: "Conte com orientação durante o processo." },
  { title: "Siga para o próximo passo", description: "Continue sua jornada com mais clareza." },
];

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Hero
        eyebrow={siteConfig.region}
        image={heroImage}
        imageAlt="Embarcação navegando em rio amplo ao entardecer"
        className="min-h-[calc(100svh-4rem)]"
        title={
          <>
            DO DOCUMENTO À NAVEGAÇÃO.
            <br />
            <span className="text-gradient-gold">DA IDEIA À SUA CASA FLUTUANTE.</span>
          </>
        }
        subtitle="Formação náutica, documentação e regularização, serviços para embarcações e soluções para projetos e casas flutuantes — com orientação em cada etapa."
        actions={
          <>
            <WhatsAppButton
              label="Falar com a Nortão no WhatsApp"
              variant="hero"
              size="xl"
              className="w-full sm:w-auto"
              message="Olá! Gostaria de conversar com a Nortão Náutica sobre o meu próximo passo."
            />
            <Button asChild variant="outlineGold" size="xl" className="w-full sm:w-auto">
              <Link to="/cursos">Conhecer os cursos</Link>
            </Button>
          </>
        }
      >
        <div className="mt-7 flex items-center gap-2 text-sm text-foreground/75">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          {siteConfig.region}
        </div>
      </Hero>

      <Section id="proximo-passo">
        <SectionTitle
          eyebrow="Comece por aqui"
          title="Qual é o seu próximo passo?"
          description="Escolha o caminho que mais se aproxima do que você precisa hoje."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathOptions.map((option) => (
            <JourneyPathCard key={option.title} {...option} />
          ))}
        </div>
      </Section>

      <Section tone="deep" className="overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <p className="font-display text-3xl leading-tight text-foreground sm:text-5xl">
            A vontade de navegar começa antes de saber qual caminho seguir.
          </p>
          <div className="border-l border-primary/45 pl-6 sm:pl-9">
            <p className="text-lg leading-relaxed text-foreground/85">
              Talvez você queira começar a navegar, regularizar uma embarcação, resolver a
              documentação ou desenvolver um projeto. O primeiro passo é entender o seu momento.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A Nortão organiza as possibilidades e orienta sua decisão com clareza, atendimento
              humano e visão de toda a jornada náutica.
            </p>
          </div>
        </div>
      </Section>

      <Section id="cursos">
        <SectionTitle
          eyebrow="Formação náutica"
          title="Escolha como você quer avançar na água"
          description="Três formações para momentos diferentes da sua jornada, com preparação e recursos de estudo organizados."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={course.slug}
              course={course}
              image={courseImages[index] ?? heroImage}
            />
          ))}
        </div>
        <div className="mt-10 rounded-xl border border-border bg-card/40 p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-foreground/80">{courseExamInfo}</p>
            <Button asChild variant="outlineGold">
              <Link to="/cursos">Comparar os cursos</Link>
            </Button>
          </div>
          <div className="mt-7">
            <JourneySteps steps={formationSteps} compact />
          </div>
        </div>
      </Section>

      <Section tone="deep" id="diferenciais">
        <SectionTitle
          eyebrow="Por que fazer com a Nortão?"
          title="Preparação que valoriza a experiência do aluno"
          description="Conteúdo organizado, recursos úteis e orientação para você compreender cada etapa."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <DifferentialCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section id="regularizacao">
        <div className="grid overflow-hidden rounded-xl border border-border bg-card/50 lg:grid-cols-2">
          <img
            src={docsImage}
            alt="Documentos de regularização náutica preparados para análise"
            loading="lazy"
            width={1280}
            height={853}
            className="h-full min-h-72 w-full object-cover"
          />
          <div className="flex flex-col justify-center p-7 sm:p-12">
            <span className="eyebrow">Regularização e documentação</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-5xl">
              Sua embarcação em dia, com orientação em cada etapa.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Regularização, renovação e orientação documental para sua embarcação. A Nortão conduz
              os processos já atendidos pela equipe e ajuda você a entender o próximo passo.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
              {services[0]?.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Anchor className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <WhatsAppButton
                label="Quero regularizar minha embarcação"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                message="Olá! Quero orientação sobre regularização ou renovação da documentação da minha embarcação."
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="deep" id="servicos">
        <SectionTitle
          eyebrow="Serviços para embarcações"
          title="O que a Nortão pode resolver para sua embarcação?"
          description="Suporte técnico, administrativo e orientação para proprietários, usando os serviços já oferecidos pela Nortão."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-9">
          <WhatsAppButton
            label="Falar sobre minha embarcação"
            variant="outlineGold"
            size="lg"
            message="Olá! Preciso de um serviço para minha embarcação e gostaria de orientação."
          />
        </div>
      </Section>

      <Section className="overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Casas flutuantes"
              title="Da ideia à sua casa flutuante."
              description="Projetos e regularização para transformar uma ideia sobre a água em uma jornada bem orientada."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                label="Quero conversar sobre meu projeto"
                variant="hero"
                size="lg"
                message="Olá! Quero conversar sobre um projeto de casa flutuante."
              />
              <Button asChild variant="outlineGold" size="lg">
                <Link to="/casas-flutuantes">Conhecer esta solução</Link>
              </Button>
            </div>
          </div>
          <img
            src={casaImage}
            alt="Casa flutuante sofisticada iluminada sobre rio calmo"
            loading="lazy"
            width={1280}
            height={853}
            className="aspect-[4/3] w-full rounded-xl border border-border object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </Section>

      <Section tone="deep">
        <SectionTitle
          eyebrow="Como funciona"
          title="Um caminho simples para resolver sua etapa náutica"
          description="A orientação muda conforme a sua necessidade, sem complicar o começo."
        />
        <div className="mt-12">
          <JourneySteps steps={serviceSteps} />
        </div>
      </Section>

      <Section id="conteudos">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Conteúdos"
            title="Recursos que apoiam sua preparação"
            description="Materiais organizados para estudar, praticar e acompanhar a formação no seu ritmo."
          />
          <Button asChild variant="outlineGold">
            <Link to="/conteudos">
              Ver conteúdos
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionTitle
            eyebrow="Dúvidas frequentes"
            title="Informação clara antes do próximo passo"
            description="Se a sua dúvida depender de detalhes do seu caso, a equipe orienta pelo WhatsApp."
          />
          <FAQ items={faq} />
        </div>
      </Section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="surface-panel mx-auto max-w-6xl overflow-hidden rounded-xl">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-7 sm:p-12">
              <span className="eyebrow">Seu próximo passo</span>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-foreground sm:text-5xl">
                Conte onde você está. A Nortão ajuda a orientar o caminho.
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                Cursos, documentação, embarcações ou casas flutuantes: comece com uma conversa
                direta sobre o que você precisa.
              </p>
              <div className="mt-8">
                <WhatsAppButton
                  label="Falar com a Nortão no WhatsApp"
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto"
                  message="Olá! Quero orientação para o meu próximo passo na jornada náutica."
                />
              </div>
            </div>
            <img
              src={jetskiImage}
              alt="Jet ski navegando em rio ao entardecer"
              loading="lazy"
              width={960}
              height={720}
              className="h-full min-h-72 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
