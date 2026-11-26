# Grupo Concretiza — site

Reescrita em Next.js do site grupoconcretiza.com.br (antes no Wix).
Next 16 (App Router) + TypeScript + Tailwind 4, publicado na Vercel. As páginas são pré-geradas no
build; só a rota `/api/anexo` (anexo do formulário) roda sob demanda. Até 26/11/2026 era export estático (`out/`).

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start      # serve o build em http://localhost:3000
```

## Onde mexer

- Textos, contatos, menu, obras, clientes: `src/lib/site.ts`
- Posts do blog: `src/lib/posts.ts`
- Redirects das URLs antigas do Wix: `src/lib/redirects.mjs` (depois rode `npm run redirects`)

## Imagens e vídeos

- Originais do cliente ficam em `images/` (fora do git e do build).
- Fotos/logos usados no site ficam em `assets/fotos` e `assets/logos` (masters até 2400 px).
  Depois de trocar ou incluir uma imagem: `npm run imagens` (gera os WebP em `public/img`
  em 8 larguras e o mapa de dimensões `src/lib/imagens.gerado.json`).
- Favicon, ícones do manifest e imagem de compartilhamento: `npm run icones`.
- Vídeos comprimidos em `public/video` (gerados com ffmpeg a partir de `images/`):
  `hero.mp4/.webm` (6 s de concretiza.mp4, 1280x720, sem áudio, carregado após o load só no desktop) e
  `institucional-loop.mp4/.webm` (12 s do vídeo institucional, sem áudio, carregado quando aparece na tela).
- Páginas de obras: no Wix eram HTMLs próprios dentro de iframes. O conteúdo importado está em
  `src/app/obras/[tipo]/conteudo/*.html` (texto e estrutura) e `segmento.css` (estilo com escopo `.seg`).

## Publicar (Vercel)

Projeto `site_grupo_concretiza` na Vercel, com deploy automático a cada push na `main`. Os redirects 301
das URLs antigas ficam em `vercel.json`, gerado por `npm run redirects` a partir de `src/lib/redirects.mjs`
(e valem também pelo `next.config.ts`). `deploy/nginx-redirects.conf` é legado do plano de usar o aaPanel.

## Anexo do formulário (Vercel Blob)

O campo de anexo do formulário de contato envia o arquivo direto do navegador para o Vercel Blob
(store `concretiza-anexos`, pública, região GRU1) e o link vai na mensagem do WhatsApp.
A rota `src/app/api/anexo/route.ts` só autoriza o envio; as regras (tipos aceitos, 20 MB por arquivo,
exclusão automática em 60 dias) ficam em `src/lib/anexo.ts`. Precisa da variável `BLOB_READ_WRITE_TOKEN`
no projeto da Vercel (criada ao conectar a store). Plano grátis: 1 GB guardado e 2.000 envios por mês;
se passar, a Vercel bloqueia o Blob por 30 dias (não cobra).

Para testar localmente, copie o token para `.env.local` (fora do git) e rode `npm run dev`.
