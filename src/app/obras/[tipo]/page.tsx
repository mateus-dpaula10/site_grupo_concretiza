import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { SegmentoInterativo } from "@/components/SegmentoInterativo";
import { metadados } from "@/lib/seo";
import { TIPOS_OBRA } from "@/lib/site";
import "./segmento.css";

// No site original, cada página de obras é um HTML próprio dentro de um iframe do Wix
// (menu interno, slider, números, diferenciais, portfólio, processo e formulário).
// O conteúdo foi importado de lá (scripts e handlers removidos) e é renderizado aqui
// direto na página, sem iframe. Ver conteudo/*.html e segmento.css.

export const dynamicParams = false;

export function generateStaticParams() {
  return TIPOS_OBRA.map((t) => ({ tipo: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/obras/[tipo]">) {
  const { tipo } = await params;
  const t = TIPOS_OBRA.find((x) => x.slug === tipo);
  if (!t) return {};
  return metadados({ titulo: t.titulo, descricao: t.descricaoSeo, caminho: `/obras/${t.slug}` });
}

const pasta = path.join(process.cwd(), "src/app/obras/[tipo]/conteudo");

function montarHtml(tipo: string) {
  let html = fs.readFileSync(path.join(pasta, `${tipo}.html`), "utf8");
  let primeiraFoto = "";
  let n = 0;
  // Slides do hero: só o primeiro carrega com a página; os outros entram depois (data-bg).
  html = html.replace(/(<div class="slide[^"]*" style=")background-image:url\('__IMG__([a-z]+-\d+)__'\);?("[^>]*>)/g, (_m, a, nome, b) => {
    const url = `/img/seg-${nome}-1440.webp`;
    if (n++ === 0) {
      primeiraFoto = url;
      return `${a}background-image:url('${url}')${b}`;
    }
    return `${a.replace(' style="', ' data-bg="' + url + '" style="')}${b}`;
  });
  html = html.replace(/<img src="__IMG__([a-z]+-\d+)__"/g, (_m, nome) => `<img src="/img/seg-${nome}-1080.webp" decoding="async" loading="lazy"`);
  html = html.replace(/loading="lazy" loading="lazy"/g, 'loading="lazy"');
  return { html, primeiraFoto };
}

export default async function PaginaObras({ params }: PageProps<"/obras/[tipo]">) {
  const { tipo } = await params;
  const t = TIPOS_OBRA.find((x) => x.slug === tipo);
  if (!t) notFound();
  const { html, primeiraFoto } = montarHtml(t.slug);
  if (primeiraFoto) preload(primeiraFoto, { as: "image", fetchPriority: "high" });
  return (
    <>
      <JsonLd
        dados={dadosBreadcrumb([
          { nome: "Serviços", href: "/#servicos" },
          { nome: t.titulo, href: `/obras/${t.slug}` },
        ])}
      />
      <SegmentoInterativo html={html} />
    </>
  );
}
