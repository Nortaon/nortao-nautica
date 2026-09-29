# Plano técnico — navegação global da Nortão Náutica

## Estado confirmado
- `AnimatedBoat` existe apenas na Home, posicionado pela própria página e ligado ao progresso global do scroll.
- O elemento atual combina, no mesmo arquivo, lógica de movimento, desenho SVG do jet ski e esteira.
- O layout compartilhado já envolve todas as páginas em `src/routes/__root.tsx`, sendo o ponto adequado para manter o elemento náutico vivo durante a navegação.
- A rota `/sobre` existe em `src/routes/sobre.tsx`, está registrada com `createFileRoute("/sobre")` e corresponde ao link do menu.
- O projeto já usa `motion/react`, restauração de scroll e uma preferência de movimento reduzido tratada após a hidratação.

## Implementação proposta

### 1. Separar visual e movimento do veículo
Alterar `src/components/AnimatedBoat.tsx` para funcionar como controlador de movimento, sem conhecer os detalhes do desenho.

Criar:
- `src/components/nautical/JetSkiVisual.tsx`: visual SVG atual, isolado e substituível.
- `src/components/nautical/WakeTrail.tsx`: ondas/esteira independentes.
- `src/components/nautical/types.ts`: contrato simples para qualquer visual futuro de embarcação.

O controlador receberá um `visual` ou variante visual. Assim, uma futura imagem realista poderá substituir o SVG sem mudar parallax, balanço, inclinação, acessibilidade ou redução de movimento.

### 2. Criar uma camada náutica global
Criar `src/components/nautical/NauticalJourney.tsx` e montá-la uma única vez em `src/routes/__root.tsx`, fora do conteúdo que troca entre rotas.

Comportamento:
- **Home:** deslocamento horizontal vinculado ao scroll, parallax, balanço vertical, inclinação e esteira animada.
- **Páginas internas:** posição discreta junto à borda da tela, movimento ambiente lento e pequena reação à entrada da rota.
- O componente terá `pointer-events: none`, `aria-hidden`, limites de largura e zonas seguras para não bloquear textos, botões ou o WhatsApp.
- A posição será calculada por contexto de rota, não configurada separadamente em cada página.

Remover a montagem local de `AnimatedBoat` de `src/routes/index.tsx` depois que a camada global estiver ativa.

### 3. Transição elegante entre páginas
Criar `src/components/PageTransition.tsx` e usá-lo ao redor do `<Outlet />` em `src/routes/__root.tsx`.

A troca de rota usará o caminho atual como chave e combinará:
- entrada curta com deslocamento horizontal leve;
- pequena oscilação vertical e fade;
- uma faixa de onda sutil na passagem, sem cobrir o conteúdo;
- duração curta e curva suave para sugerir flutuação, sem atrasar a navegação.

O `NauticalJourney` ficará fora desse invólucro para preservar continuidade visual enquanto a página muda.

### 4. Desktop, mobile e acessibilidade
- Desktop: trajetória mais ampla e cinematográfica, mantendo o veículo nas margens durante áreas densas.
- Mobile: reduzir tamanho, amplitude, esteira e frequência; usar uma faixa inferior segura e evitar o botão flutuante do WhatsApp.
- Com `prefers-reduced-motion: reduce`: eliminar parallax, loop, inclinação e transição deslizante; manter apenas estado estático ou fade instantâneo.
- Unificar a decisão de redução de movimento para evitar controles duplicados entre o hook próprio e `motion/react`.

### 5. Estilos e desempenho
Alterar `src/styles.css` apenas para tokens/utilitários globais das camadas de onda, profundidade e zonas seguras.

Cuidados técnicos:
- usar transformações e opacidade, evitando animações que provoquem recálculo de layout;
- continuar usando valores de movimento derivados do scroll, sem listeners manuais e sem renderização React a cada frame;
- manter SVG/ondas leves e carregar uma futura imagem realista com dimensões fixas e formato otimizado;
- não adicionar bibliotecas, já que `motion/react` atende ao fluxo.

## SSR e hydration no TanStack Start
- A leitura de rota será feita pelos hooks do TanStack Router dentro de componentes, sem acessar `window` durante renderização.
- `matchMedia` continuará restrito ao efeito no cliente, com saída inicial determinística no servidor e no primeiro render do navegador.
- O HTML inicial do barco será estável; os valores animados entram somente após hidratação.
- Nenhuma medida de viewport, scroll ou elemento será calculada em escopo de módulo.
- A transição será montada no layout raiz sem condicionar ou remover o `<Outlet />`, preservando a arquitetura de rotas.

## Arquivos envolvidos
**Criar**
- `src/components/PageTransition.tsx`
- `src/components/nautical/NauticalJourney.tsx`
- `src/components/nautical/JetSkiVisual.tsx`
- `src/components/nautical/WakeTrail.tsx`
- `src/components/nautical/types.ts`

**Alterar**
- `src/components/AnimatedBoat.tsx`
- `src/routes/__root.tsx`
- `src/routes/index.tsx`
- `src/hooks/usePrefersReducedMotion.ts`
- `src/styles.css`
- `AGENTS.md` para registrar a separação entre lógica de movimento e representação visual.

## Validação após implementação
- Navegar entre todas as rotas do menu, incluindo `/sobre`, confirmando continuidade e ausência de sobreposição.
- Testar Home no topo, meio e fim do scroll.
- Verificar desktop e mobile, inclusive menu e botão do WhatsApp.
- Repetir com redução de movimento habilitada.
- Confirmar ausência de erros de hydration, console e compilação, além de estabilidade visual durante troca de páginas.

Não haverá alteração de conteúdo comercial, preços ou informações da empresa.
