import Link from "next/link";
import { notFound } from "next/navigation";
import { Foto } from "@/components/Foto";
import { JsonLd, ORGANIZACAO_ID, dadosBreadcrumb } from "@/components/JsonLd";
import { POSTS, dataCurta, type Bloco } from "@/lib/posts";
import { metadados } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { v } from "@/lib/medidas";

// Réplica da página de post do Wix: "All Posts", autor, título grande, texto em coluna de
// 740px, foto, e "Posts recentes". No original os subtítulos saem na cor do fundo
// (invisíveis); aqui ficam brancos. Contadores de visualização, curtidas e comentários
// do Wix não foram replicados.

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return metadados({ titulo: p.titulo, descricao: p.resumo, caminho: `/blog/${p.slug}`, tipo: "article", publicado: p.publicado, atualizado: p.atualizado });
}

function Corpo({ blocos }: { blocos: Bloco[] }) {
  return blocos.map((b, i) => {
    if (b.tipo === "h2")
      return (
        <h2 key={i} className={`font-display text-[22px] font-semibold leading-[1.4] text-white tab:text-[28px] ${i === 0 ? "" : "mt-[6px]"}`}>
          {b.texto}
        </h2>
      );
    if (b.tipo === "h3")
      return (
        <h3 key={i} className="mt-[6px] font-display text-[18px] font-semibold text-white tab:text-[20px]">
          {b.texto}
        </h3>
      );
    if (b.tipo === "lista")
      return (
        <ul key={i} className="list-disc pl-[36px]">
          {b.itens.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    return <p key={i}>{b.texto}</p>;
  });
}

export default async function Artigo({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const outros = POSTS.filter((x) => x.slug !== p.slug);

  return (
    <article className="degrade-base pb-[60px] pt-[40px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(117), "--pb": v(100), "--inicio": "70%", "--fim": "#1e2612" } as React.CSSProperties}>
      <JsonLd
        dados={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.titulo,
          description: p.resumo,
          datePublished: p.publicado,
          dateModified: p.atualizado ?? p.publicado,
          author: { "@type": "Person", name: p.autor },
          publisher: { "@id": ORGANIZACAO_ID },
          mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
          image: `${SITE_URL}/opengraph-image.jpg`,
          inLanguage: "pt-BR",
        }}
      />
      <JsonLd dados={dadosBreadcrumb([{ nome: "Blog", href: "/blog" }, { nome: p.titulo, href: `/blog/${p.slug}` }])} />
      <div className="caixa">
        <Link href="/blog" className="text-[14px] text-lima hover:underline tab:ml-[var(--ml)]" style={{ "--ml": v(20) } as React.CSSProperties}>
          Todos os posts
        </Link>
        <div className="mx-auto mt-[24px] max-w-[740px] tab:mt-[var(--m)] tab:w-[var(--w)] tab:max-w-none" style={{ "--m": v(117), "--w": v(740) } as React.CSSProperties}>
          <div className="flex items-center gap-[12px] text-[14px] text-cinza">
            {p.avatar ? (
              <Foto nome={p.avatar} alt="" largura={32} className="size-[32px] rounded-full object-cover" />
            ) : (
              <span aria-hidden className="grid size-[32px] place-items-center rounded-full bg-teal text-[13px] font-semibold text-white">
                {p.autor[0]}
              </span>
            )}
            <span>{p.autor}</span>
            <span aria-hidden>·</span>
            <time dateTime={p.publicado}>{dataCurta(p.publicado)}</time>
            <span aria-hidden>·</span>
            <span>1 min de leitura</span>
          </div>
          <h1 className="mt-[22px] font-display text-[32px] font-semibold leading-[1.2] tab:text-[59px]">{p.titulo}</h1>
          <div className="mt-[28px] grid gap-[6px] text-[16px] leading-[1.6] text-cinza tab:text-[18px]">
            <Corpo blocos={p.corpo} />
          </div>
          <div className="relative mt-[40px] aspect-[740/493] overflow-hidden">
            <Foto nome={p.capa.nome} alt={p.capa.alt} fill sizes="(min-width: 751px) 52vw, 351px" className="object-cover" />
          </div>
        </div>

        <section aria-labelledby="recentes" className="mx-auto mt-[60px] max-w-[940px] border-t border-white/10 pt-[24px] tab:w-[var(--w2)] tab:max-w-none" style={{ "--w2": v(940) } as React.CSSProperties}>
          <div className="flex items-baseline justify-between">
            <h2 id="recentes" className="text-[18px] text-cinza">
              Posts recentes
            </h2>
            <Link href="/blog" className="text-[14px] text-cinza hover:text-white">
              Ver tudo
            </Link>
          </div>
          <ul className="mt-[20px] grid gap-[24px] tab:grid-cols-3">
            {outros.map((o) => (
              <li key={o.slug} className="group relative border border-white/10">
                <div className="relative aspect-[289/162] overflow-hidden">
                  <Foto nome={o.capa.nome} alt={o.capa.alt} fill sizes="(min-width: 751px) 20vw, 351px" className="object-cover" />
                </div>
                <h3 className="p-[24px] font-display text-[18px] font-semibold leading-[1.3]">
                  <Link href={`/blog/${o.slug}`} className="after:absolute after:inset-0 group-hover:text-menta">
                    {o.tituloOriginal}
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
