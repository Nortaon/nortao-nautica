/**
 * Configuração central da Nortão Náutica.
 * Nenhuma informação fixa da empresa deve ser escrita diretamente nos componentes.
 */

export const siteConfig = {
  name: "Nortão Náutica",
  shortName: "Nortão",
  slogan: "Do documento à navegação. Da ideia à sua casa flutuante.",
  sloganLines: ["Do documento à navegação.", "Da ideia à sua casa flutuante."],
  description:
    "Cursos náuticos, regularização e documentação de embarcações, serviços náuticos e soluções para casas flutuantes em Sinop-MT e região.",
  cnpj: "40.824.121/0001-72",
  email: "nortonautica@gmail.com",
  phone: "66 99219-1920",
  whatsapp: {
    display: "(66) 99219-1920",
    number: "5566992191920",
    defaultMessage: "Olá! Gostaria de falar com a Nortão Náutica.",
  },
  region: "Sinop-MT e região",
  locations: [
    {
      label: "Atuação",
      city: "Sinop - MT",
      address: "Sinop-MT e região",
      note: "Atendimento em toda a região norte de Mato Grosso.",
    },
    {
      label: "Filial",
      city: "Colíder - MT",
      address: "Av. Tancredo Neves, 468",
      note: "Atendimento presencial na filial.",
    },
  ],
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}

export const navLinks = [
  { label: "Início", to: "/" },
  { label: "A Nortão", to: "/sobre" },
  { label: "Cursos", to: "/cursos" },
  { label: "Serviços", to: "/servicos" },
  { label: "Embarcações", to: "/embarcacoes" },
  { label: "Casas Flutuantes", to: "/casas-flutuantes" },
  { label: "Conteúdos", to: "/conteudos" },
  { label: "Contato", to: "/contato" },
] as const;

export const footerLinks = [...navLinks, { label: "Diferenciais", to: "/diferenciais" }] as const;

export type Course = {
  slug: string;
  to: string;
  title: string;
  shortTitle: string;
  description: string;
  benefits: string[];
};

export const courses: Course[] = [
  {
    slug: "arrais-amador",
    to: "/cursos/arrais-amador",
    title: "Arrais-Amador",
    shortTitle: "Arrais-Amador",
    description:
      "Habilitação para conduzir embarcações de esporte e recreio em águas interiores. Preparação completa, do conteúdo teórico à prova.",
    benefits: [
      "Aulas EAD com acesso flexível",
      "Apostila impressa",
      "Simulados online",
      "Acompanhamento até a prova",
    ],
  },
  {
    slug: "motonauta",
    to: "/cursos/motonauta",
    title: "Motonauta",
    shortTitle: "Motonauta",
    description:
      "Habilitação para conduzir motos aquáticas com segurança, dentro das exigências da autoridade marítima.",
    benefits: [
      "Conteúdo objetivo e direto ao ponto",
      "Material de apoio incluso",
      "Simulados para fixação",
      "Suporte durante todo o processo",
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  to: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "regularizacao",
    title: "Regularização e documentação",
    description:
      "Condução completa dos processos de documentação de embarcações, do início ao documento em mãos.",
    to: "/servicos",
    highlights: ["Inscrição de embarcações", "Transferências", "Renovações e atualizações"],
  },
  {
    slug: "embarcacoes",
    title: "Serviços para embarcações",
    description:
      "Suporte técnico e administrativo para proprietários que querem navegar em dia com as exigências.",
    to: "/embarcacoes",
    highlights: ["Orientação técnica", "Acompanhamento de processos", "Apoio ao proprietário"],
  },
  {
    slug: "casas-flutuantes",
    title: "Casas flutuantes",
    description:
      "Da ideia ao projeto: soluções e regularização para quem deseja uma casa flutuante.",
    to: "/casas-flutuantes",
    highlights: ["Projetos", "Regularização", "Orientação completa"],
  },
  {
    slug: "projetos",
    title: "Projetos náuticos",
    description:
      "Planejamento e soluções sob medida para projetos náuticos, com foco em segurança e conformidade.",
    to: "/servicos",
    highlights: ["Análise do projeto", "Soluções personalizadas", "Acompanhamento"],
  },
];

export const differentials = [
  {
    title: "Atendimento focado na experiência",
    description:
      "Acompanhamento próximo e linguagem clara em cada etapa, do primeiro contato à conclusão.",
  },
  {
    title: "Recursos complementares",
    description: "Materiais de apoio que reforçam o aprendizado além das aulas.",
  },
  {
    title: "Simulados online",
    description: "Pratique quantas vezes precisar e chegue preparado para a prova.",
  },
  {
    title: "Aulas EAD",
    description: "Estude no seu ritmo, de onde estiver, com conteúdo organizado.",
  },
  {
    title: "Apostila impressa",
    description: "Material físico para estudar mesmo sem conexão.",
  },
  {
    title: "Mais de 10 horas de videoaulas",
    description: "Conteúdo em vídeo cobrindo o programa do curso.",
  },
];

export type Resource = {
  title: string;
  description: string;
  url: string;
};

export const resources: Resource[] = [
  {
    title: "Videoaulas",
    description: "Mais de 10 horas de conteúdo em vídeo para acompanhar no seu ritmo.",
    url: "",
  },
  {
    title: "Apostilas",
    description: "Material de estudo organizado, disponível também em versão impressa.",
    url: "",
  },
  {
    title: "Simulados",
    description: "Questões para praticar e medir sua preparação antes da prova.",
    url: "",
  },
  {
    title: "EAD",
    description: "Ambiente de estudo a distância com acesso flexível.",
    url: "",
  },
];

export const faq = [
  {
    question: "Quais cursos a Nortão Náutica oferece?",
    answer:
      "Atualmente oferecemos os cursos de Arrais-Amador e Motonauta, com material de apoio, simulados e aulas EAD.",
  },
  {
    question: "Vocês cuidam da documentação da embarcação?",
    answer:
      "Sim. Conduzimos processos de regularização e documentação de embarcações, orientando o proprietário em cada etapa.",
  },
  {
    question: "Atendem quais cidades?",
    answer: `Atendemos ${siteConfig.region}, com filial em ${siteConfig.locations[1].city}.`,
  },
  {
    question: "Como faço para tirar dúvidas ou começar?",
    answer:
      "O caminho mais rápido é o WhatsApp. Chame nossa equipe e explique seu caso — respondemos com as opções para você.",
  },
];
