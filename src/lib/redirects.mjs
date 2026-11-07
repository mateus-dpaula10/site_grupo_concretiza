// Redirects 301 das URLs antigas do site Wix para as novas URLs em pt-BR.
// Fonte única: usada pelo next.config.ts (modo servidor) e por
// scripts/gerar-nginx-redirects.mjs (export estático, gera deploy/nginx-redirects.conf).
// `de` dos posts antigos vai em forma percent-encoded (é como o navegador pede).
export const REDIRECTS = [
  { de: "/site", para: "/" },
  { de: "/home", para: "/" },
  { de: "/about-us", para: "/sobre" },
  { de: "/about-us-1", para: "/obras/corporativas" },
  { de: "/about-us-1-1", para: "/obras/comerciais" },
  { de: "/about-us-1-1-1", para: "/obras/industriais" },
  { de: "/about-us-1-1-1-1", para: "/obras/residenciais" },
  { de: "/about-us-1-1-1-1-1", para: "/energia" },
  { de: "/about-us-1-2", para: "/administracao-de-obras" },
  { de: "/properties-1", para: "/#servicos" },
  // Página /servicos e blog retirados a pedido do cliente (07/11/2026): o template tinha preços e
  // serviços que o grupo não pratica, e o blog não tinha conteúdo próprio.
  { de: "/servicos", para: "/#servicos" },
  { de: "/blog", para: "/" },
  { de: "/blog/carregamento-de-carros-eletricos", para: "/energia" },
  { de: "/blog/gestao-de-obras-reduzir-desperdicios", para: "/administracao-de-obras" },
  { de: "/blog/obras-rapidas-para-lojas", para: "/obras/comerciais" },
  { de: "/post/____g", para: "/energia" },
  { de: "/post/c%C3%B3pia-de-qual-%C3%A9-o-tema-do-seu-blog", para: "/administracao-de-obras" },
  { de: "/post/seu-t%C3%ADtulo-qual-%C3%A9-o-tema-do-seu-blog", para: "/obras/comerciais" },
  { de: "/blog-feed.xml", para: "/" },
];
