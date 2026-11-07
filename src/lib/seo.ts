import type { Metadata } from "next";

// Imagem de compartilhamento gerada por scripts/gerar-icones.mjs (src/app/opengraph-image.jpg).
const IMAGEM = { url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Grupo Concretiza" };

type Opcoes = {
  titulo: string;
  descricao: string;
  caminho: string;
  /** Título sem o sufixo "| Grupo Concretiza" (usado na home). */
  tituloAbsoluto?: boolean;
  tipo?: "website" | "article";
  publicado?: string;
  atualizado?: string;
};

// Metadata por página: title, description, canonical, Open Graph e Twitter.
// O Open Graph é repetido inteiro porque o Next substitui (não mescla) o objeto do layout.
export function metadados({ titulo, descricao, caminho, tituloAbsoluto, tipo = "website", publicado, atualizado }: Opcoes): Metadata {
  return {
    title: tituloAbsoluto ? { absolute: titulo } : titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: tipo,
      locale: "pt_BR",
      siteName: "Grupo Concretiza",
      title: titulo,
      description: descricao,
      url: caminho,
      images: [IMAGEM],
      ...(tipo === "article" ? { publishedTime: publicado, modifiedTime: atualizado ?? publicado } : {}),
    },
    twitter: { card: "summary_large_image", title: titulo, description: descricao, images: [IMAGEM.url] },
  };
}
