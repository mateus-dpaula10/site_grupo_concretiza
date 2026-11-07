import Link from "next/link";
import { notFound } from "next/navigation";
import { CartoesPosts } from "@/components/CartoesPosts";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { IconeSeta } from "@/components/Icones";
import { JsonLd, ORGANIZACAO_ID, dadosBreadcrumb } from "@/components/JsonLd";
import { POSTS, formatarData, type Bloco } from "@/lib/posts";
import { metadados } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) return {};
  return metadados({
    titulo: p.titulo,
    descricao: p.resumo,
    caminho: `/blog/${p.slug}`,
    tipo: "article",
    publicado: p.publicado,
    atualizado: p.atualizado,
  });
}

function Corpo({ blocos }: { blocos: Bloco[] }) {
  return blocos.map((b, i) => {
    switch (b.tipo) {
      case "h2":
        return (
          <h2 key={i} className="mt-12 text-3xl font-bold leading-tight [font-stretch:112%]">
            {b.texto}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} className="mt-8 text-xl font-bold [font-stretch:108%]">
            {b.texto}
          </h3>
        );
      case "lista":
        return (
          <ul key={i} className="mt-4 grid list-disc gap-2 pl-6 marker:text-marca">
            {b.itens.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        );
      default:
        return (
          <p key={i} className="mt-4">
            {b.texto}
          </p>
        );
    }
  });
}

export default async function Artigo({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const p = POSTS.find((x) => x.slug === slug);
  if (!p) notFound();
  const outros = POSTS.filter((x) => x.slug !== p.slug);
  const url = `${SITE_URL}/blog/${p.slug}`;

  return (
    <>
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
          mainEntityOfPage: url,
          image: `${SITE_URL}/opengraph-image.jpg`,
          inLanguage: "pt-BR",
        }}
      />
      <JsonLd
        dados={dadosBreadcrumb([
          { nome: "Blog", href: "/blog" },
          { nome: p.titulo, href: `/blog/${p.slug}` },
        ])}
      />
      <article>
        <header className="sobre-escuro bg-floresta text-white">
          <div className="container-site pb-14 pt-8">
            <nav aria-label="Trilha de navegação">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-white/75">
                <li>
                  <Link href="/" className="hover:text-menta">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  <Link href="/blog" className="hover:text-menta">
                    Blog
                  </Link>
                </li>
              </ol>
            </nav>
            <p className="titulo-condensado mt-10 text-2xl text-menta">{p.tema}</p>
            <h1 className="titulo mt-3 max-w-4xl text-[2.1rem] sm:text-5xl lg:text-6xl">{p.titulo}</h1>
            <p className="mt-6 text-white/80">
              Por {p.autor}. Publicado em <time dateTime={p.publicado}>{formatarData(p.publicado)}</time>
              {p.atualizado && (
                <>
                  , atualizado em <time dateTime={p.atualizado}>{formatarData(p.atualizado)}</time>
                </>
              )}
              .
            </p>
          </div>
        </header>
        <div className="container-site py-14 lg:py-20">
          <div className="mx-auto max-w-[68ch] text-[1.125rem] leading-[1.75] text-tinta">
            <p className="text-xl leading-relaxed text-grafite">{p.resumo}</p>
            <Corpo blocos={p.corpo} />
            <Link
              href={p.servicoRelacionado.href}
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-floresta px-6 py-3.5 font-semibold text-white hover:bg-marca"
            >
              {p.servicoRelacionado.rotulo}
              <IconeSeta className="size-5" />
            </Link>
          </div>
        </div>
      </article>

      <section aria-labelledby="recentes-titulo" className="border-t border-linha py-16">
        <div className="container-site">
          <h2 id="recentes-titulo" className="titulo text-3xl sm:text-4xl">
            Posts recentes
          </h2>
          <div className="mt-8">
            <CartoesPosts posts={outros} />
          </div>
        </div>
      </section>

      <ChamadaOrcamento />
    </>
  );
}
