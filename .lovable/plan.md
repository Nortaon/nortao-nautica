# API de leads e integração do contato

## Implementação

- Criar rotas TanStack `POST /api/leads` e `GET /api/health`, reutilizando o servidor atual.
- Validar o corpo com Zod, normalizar strings, impor limites, aplicar CORS por `FRONTEND_ORIGIN` e retornar JSON uniforme sem registrar dados pessoais.
- Integrar um formulário acessível à página `/contato`, mantendo o visual atual, com estados de envio, confirmação, WhatsApp e falha amigável.
- Centralizar a base da API em configuração: mesma origem por padrão e variável pública opcional para apontar ao Railway.
- Adicionar somente os scripts e arquivos de configuração necessários à execução de produção no Railway, preservando o deploy atual.

## Detalhes técnicos

- As rotas ficarão em `src/routes/api.leads.ts` e `src/routes/api.health.ts`; nenhum segundo servidor será criado.
- O endpoint não persistirá leads nem chamará serviços externos, conforme solicitado; ele confirmará apenas recebimento e validação.
- CORS aceitará a origem configurada e requisições de mesma origem; preflight será tratado explicitamente.
- A validação final cobrirá respostas válidas e inválidas, CORS, formulário, console, typecheck, build e lint.
- A sincronização com `Nortaon/nortao-nautica` ocorrerá somente se houver acesso real de escrita; o SHA será informado apenas após confirmação no GitHub.