# Grupo Concretiza — site

Reescrita em Next.js do site grupoconcretiza.com.br (antes no Wix).
Next 16 (App Router) + TypeScript + Tailwind 4, gerado como **site estático** (`out/`).

## Rodar

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # gera out/ (e roda scripts/pos-build.mjs)
npm run start      # serve out/ em http://localhost:3000
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

Importar o repositório na Vercel, sem variáveis de ambiente. Os redirects 301 das URLs antigas ficam
em `vercel.json`, gerado por `npm run redirects` a partir de `src/lib/redirects.mjs`.

## Publicar (aaPanel, nginx)

O site é estático: basta servir a pasta `out/`. No vhost:

```nginx
root /www/wwwroot/grupoconcretiza.com.br/out;
include /www/wwwroot/grupoconcretiza.com.br/deploy/nginx-redirects.conf;
location / { try_files $uri $uri.html $uri/ =404; }
error_page 404 /404.html;
gzip on; gzip_types text/plain text/css application/javascript application/json image/svg+xml application/manifest+json;
location ~* ^/(_next/static|img|video)/ { expires 1y; add_header Cache-Control "public, immutable"; }
```

Para rodar com servidor Node (PM2) em vez de estático: `NEXT_MODO=servidor npm run build`
e `npm run start:servidor`; nesse modo os redirects 301 saem do próprio Next.
