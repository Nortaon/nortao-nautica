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
  audience: string;
  objective: string;
  benefits: string[];
};

export const courseExamInfo =
  "As provas dos cursos de formação são feitas junto à Capitania dos Portos de Santa Catarina.";

export const courses: Course[] = [
  {
    slug: "arrais-amador",
    to: "/cursos/arrais-amador",
    title: "Arrais-Amador",
    shortTitle: "Arrais-Amador",
    description:
      "Habilitação para conduzir embarcações de esporte e recreio em águas interiores. Preparação completa, do conteúdo teórico à prova.",
    audience: "Para quem quer conduzir embarcações de esporte e recreio em águas interiores.",
    objective: "Preparar o aluno para avançar com segurança em sua formação náutica.",
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
    audience: "Para quem quer conduzir motos aquáticas com preparo e orientação.",
    objective: "Oferecer uma preparação clara para a jornada de habilitação de Motonauta.",
    benefits: [
      "Conteúdo objetivo e direto ao ponto",
      "Material de apoio incluso",
      "Simulados para fixação",
      "Suporte durante todo o processo",
    ],
  },
  {
    slug: "mestre-amador",
    to: "/cursos/mestre-amador",
    title: "Mestre Amador",
    shortTitle: "Mestre Amador",
    description:
      "Formação para quem deseja avançar na jornada náutica e ampliar sua preparação como condutor amador.",
    audience: "Para quem já quer dar o próximo passo em sua formação náutica.",
    objective: "Preparar o aluno para avançar com conteúdo organizado e orientação especializada.",
    benefits: [
      "Mais de 10 horas de videoaulas",
      "Aulas EAD",
      "Apostila impressa",
      "Simulados online",
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
  {
    title: "Orientação especializada",
    description: "Apoio profissional para entender cada etapa da sua jornada náutica.",
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
      "A Nortão oferece formação para Motonauta, Arrais-Amador e Mestre Amador, com aulas EAD, videoaulas, apostila impressa, simulados online e recursos complementares.",
  },
  {
    question: "Qual a diferença entre Motonauta, Arrais-Amador e Mestre Amador?",
    answer:
      "Motonauta é a formação voltada a quem deseja conduzir motos aquáticas. Arrais-Amador atende quem quer conduzir embarcações de esporte e recreio em águas interiores. Mestre Amador é o próximo passo para quem deseja avançar na formação náutica. Para entender qual opção corresponde ao seu objetivo, fale com a equipe.",
  },
  {
    question: "Como funciona a preparação para as provas?",
    answer: `${courseExamInfo} A preparação reúne aulas EAD, mais de 10 horas de videoaulas, apostila impressa, simulados online e recursos complementares.`,
  },
  {
    question: "As aulas são EAD?",
    answer: "Sim. Os cursos contam com aulas EAD e acesso flexível ao conteúdo de estudo.",
  },
  {
    question: "O que está incluído no material de estudo?",
    answer:
      "A preparação inclui mais de 10 horas de videoaulas, apostila impressa, simulados online e recursos complementares.",
  },
  {
    question: "Vocês trabalham com regularização e renovação de documentação?",
    answer:
      "Sim. A Nortão atua com regularização, renovação e orientação documental para embarcações. Explique seu caso à equipe para receber a orientação adequada.",
  },
  {
    question: "Vocês atendem Sinop-MT e região?",
    answer: `Sim. Atendemos ${siteConfig.region}, com filial em ${siteConfig.locations[1].city}.`,
  },
  {
    question: "Vocês trabalham com casas flutuantes?",
    answer:
      "Sim. A Nortão atua com projetos e regularização de casas flutuantes. Entre em contato para conversar sobre a sua ideia e entender os próximos passos.",
  },
];
