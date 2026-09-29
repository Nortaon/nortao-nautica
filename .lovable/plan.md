# Plano — Home de alta conversão da Nortão Náutica

## Objetivo
Reestruturar a Home como uma jornada comercial clara — necessidade, orientação, soluções, formação, serviços, projetos e contato — preservando integralmente a identidade premium, a navegação animada global e todas as informações confirmadas.

## Implementação

### 1. Conteúdo central confirmado
- Atualizar `siteConfig` com o curso Mestre Amador, a informação de provas junto à Capitania dos Portos de Santa Catarina, textos de público/objetivo dos três cursos, FAQ ampliado e mensagens contextuais de WhatsApp.
- Manter somente serviços, endereços, recursos e diferenciais já confirmados.
- Não adicionar preços, resultados, garantias, depoimentos ou links externos inexistentes.

### 2. Nova jornada da Home
Recompor `src/routes/index.tsx` nesta ordem:
1. Hero com a oferta completa, região, WhatsApp primário e cursos secundário.
2. “Qual é o seu próximo passo?” com quatro caminhos visuais e links reais.
3. Identificação da dor/desejo com texto consultivo curto.
4. Três cursos destacados, informação das provas e microjornada em quatro passos.
5. Diferenciais convertidos em percepção de valor.
6. Regularização e documentação com CTA contextual.
7. Serviços para embarcações usando apenas o catálogo atual.
8. Casas flutuantes com imagem cinematográfica e WhatsApp contextual.
9. Processo em cinco etapas.
10. Recursos de estudo.
11. FAQ ampliado.
12. CTA final para WhatsApp.

### 3. Componentes e apresentação
- Ajustar `CourseCard` para exibir “para quem é”, objetivo e CTA solicitado sem duplicar conteúdo.
- Criar componentes pequenos para os quatro caminhos e para as etapas, usando ícones náuticos específicos e imagens já disponíveis.
- Reutilizar `Section`, `SectionTitle`, `Button`, `WhatsAppButton`, cards e tokens existentes.
- Refinar apenas os tokens/utilitários necessários em `styles.css`, sem mudar a linguagem visual global.

### 4. Oferta de cursos e rotas
- Adicionar `/cursos/mestre-amador` com conteúdo estritamente confirmado e CTA contextual.
- Atualizar `/cursos`, `/cursos/motonauta` e `/cursos/arrais-amador` para refletirem a oferta completa e a informação das provas, sem prometer aprovação, calendário ou requisitos.
- Manter todos os links tipados pelo TanStack Router.

### 5. Movimento e mobile
- Preservar `NauticalJourney`, `PageTransition`, jet ski, ondas, wake e parallax.
- Ajustar somente posição/opacidade do fio náutico se a nova composição exigir, mantendo-o fora de textos e CTAs.
- Garantir hero compreensível no primeiro viewport mobile, CTAs em largura confortável e cards escaneáveis.
- Manter `prefers-reduced-motion` e renderização inicial segura para SSR/hydration.

### 6. SEO e validação
- Atualizar title, description, Open Graph e headings da Home com os três cursos, documentação, embarcações, casas flutuantes e atuação regional, sem excesso de palavras-chave.
- Adicionar alt text descritivo às imagens significativas.
- Validar Home e todas as rotas solicitadas, links internos, WhatsApp contextual, desktop, mobile e redução de movimento.
- Rodar lint, checagem de tipos/build disponível e corrigir erros introduzidos; confirmar console e hydration no navegador.

## Arquivos principais
**Criar**
- `src/routes/cursos.mestre-amador.tsx`
- componentes específicos da nova jornada quando a reutilização atual não for suficiente.

**Alterar**
- `src/config/siteConfig.ts`
- `src/routes/index.tsx`
- `src/routes/cursos.index.tsx`
- `src/routes/cursos.motonauta.tsx`
- `src/routes/cursos.arrais-amador.tsx`
- `src/components/CourseCard.tsx`
- `src/styles.css` somente se novos tokens/utilitários forem necessários.
- `roadmap.md` para acompanhar a entrega.

## Premissa de conteúdo
“Mestre Amador” será apresentado em linguagem geral de formação e avanço na jornada náutica. Qualquer detalhe não fornecido sobre limites de navegação, requisitos, calendário ou prova será direcionado ao atendimento da Nortão.
