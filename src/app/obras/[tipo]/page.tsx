import Link from "next/link";
import { notFound } from "next/navigation";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { Foto } from "@/components/Foto";
import { IconeSeta } from "@/components/Icones";
import { POSTS } from "@/lib/posts";
import { metadados } from "@/lib/seo";
import { TIPOS_OBRA, WHATSAPP_ORCAMENTO } from "@/lib/site";

// As 4 páginas de obras existiam no site antigo, mas sem conteúdo (só o menu).
// O texto vem da home e das publicações do Instagram da empresa.
// TODO: pedir ao cliente a lista de obras e as fotos de cada tipo para completar as galerias.

export const dynamicParams = false;

export function generateStaticParams() {
  return TIPOS_OBRA.map((t) => ({ tipo: t.slug }));
}

function buscar(slug: string) {
  return TIPOS_OBRA.find((t) => t.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/obras/[tipo]">) {
  const t = buscar((await params).tipo);
  if (!t) return {};
  return metadados({ titulo: t.titulo, descricao: t.descricaoSeo, caminho: `/obras/${t.slug}` });
}

export default async function PaginaObras({ params }: PageProps<"/obras/[tipo]">) {
  const t = buscar((await params).tipo);
  if (!t) notFound();
  const outros = TIPOS_OBRA.filter((o) => o.slug !== t.slug);
  const post = POSTS.find((p) => p.servicoRelacionado.href === `/obras/${t.slug}`);

  return (
    <>
      <CabecalhoPagina
        titulo={t.titulo}
        trilha={[
          { nome: "Serviços", href: "/servicos" },
          { nome: t.titulo, href: `/obras/${t.slug}` },
        ]}
        resumo={t.resumo}
        foto={t.foto}
      >
        <a
          href={WHATSAPP_ORCAMENTO}
          target="_blank"
          rel="noopener"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-menta px-7 py-4 font-semibold text-floresta hover:bg-white"
        >
          Pedir orçamento
        </a>
      </CabecalhoPagina>

      <section aria-labelledby="executamos-titulo" className="bg-white py-14">
        <div className="container-site grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-center">
          <h2 id="executamos-titulo" className="text-2xl font-bold [font-stretch:112%]">
            O que executamos
          </h2>
          <ul className="flex flex-wrap gap-3">
            {t.destaques.map((d) => (
              <li key={d} className="rounded-full border border-linha bg-concreto px-4 py-2 text-[0.95rem]">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="obras-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <h2 id="obras-titulo" className="titulo text-4xl sm:text-5xl">
            Obras realizadas
          </h2>
          <ul className="mt-12 grid gap-14">
            {t.obras.map((o, i) => (
              <li
                key={o.titulo}
                className={`grid gap-6 ${o.foto ? "lg:grid-cols-2 lg:items-center lg:gap-14" : "border-l-4 border-marca pl-6"}`}
              >
                {o.foto && (
                  <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                    <Foto
                      nome={o.foto.nome}
                      alt={o.foto.alt}
                      fill
                      sizes="(min-width: 1248px) 560px, (min-width: 1024px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-3xl font-bold leading-tight [font-stretch:115%]">{o.titulo}</h3>
                  {o.local && <p className="mt-1 font-semibold text-marca">{o.local}</p>}
                  <p className="texto-corrido mt-4 text-grafite">{o.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          {t.galeria.length > 0 && (
            <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3" aria-label="Galeria de fotos">
              {t.galeria.map((g) => (
                <li key={g.nome} className="relative aspect-[4/3] overflow-hidden">
                  <Foto
                    nome={g.nome}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1248px) 400px, (min-width: 1024px) 31vw, 50vw"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {post && (
        <section aria-labelledby="leia-titulo" className="border-t border-linha py-14">
          <div className="container-site">
            <h2 id="leia-titulo" className="text-sm font-semibold text-grafite">
              Leia também
            </h2>
            <Link href={`/blog/${post.slug}`} className="group mt-3 block max-w-3xl">
              <span className="text-2xl font-bold leading-snug [font-stretch:110%] group-hover:text-marca sm:text-3xl">
                {post.titulo}
              </span>
              <span className="mt-2 block text-grafite">{post.resumo}</span>
            </Link>
          </div>
        </section>
      )}

      <nav aria-labelledby="outras-titulo" className="bg-white py-14">
        <div className="container-site">
          <h2 id="outras-titulo" className="text-2xl font-bold [font-stretch:112%]">
            Outros tipos de obra
          </h2>
          <ul className="mt-6 grid gap-px bg-linha sm:grid-cols-3">
            {outros.map((o) => (
              <li key={o.slug} className="bg-white">
                <Link
                  href={`/obras/${o.slug}`}
                  className="flex items-center justify-between gap-3 py-5 pr-2 text-lg font-semibold hover:text-marca sm:px-5"
                >
                  {o.titulo}
                  <IconeSeta className="size-5 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <ChamadaOrcamento />
    </>
  );
}
