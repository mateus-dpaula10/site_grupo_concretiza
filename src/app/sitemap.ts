import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { SITE_URL, TIPOS_OBRA } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paginas: { caminho: string; prioridade: number }[] = [
    { caminho: "", prioridade: 1 },
    { caminho: "/servicos", prioridade: 0.9 },
    ...TIPOS_OBRA.map((t) => ({ caminho: `/obras/${t.slug}`, prioridade: 0.8 })),
    { caminho: "/administracao-de-obras", prioridade: 0.8 },
    { caminho: "/energia", prioridade: 0.8 },
    { caminho: "/sobre", prioridade: 0.7 },
    { caminho: "/contato", prioridade: 0.7 },
    { caminho: "/blog", prioridade: 0.6 },
    { caminho: "/politica-de-privacidade", prioridade: 0.2 },
  ];
  return [
    ...paginas.map((p) => ({ url: `${SITE_URL}${p.caminho}`, priority: p.prioridade })),
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.atualizado ?? p.publicado,
      priority: 0.5,
    })),
  ];
}
