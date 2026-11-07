import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { CartoesPosts } from "@/components/CartoesPosts";
import { metadados } from "@/lib/seo";

export const metadata = metadados({
  titulo: "Blog: construindo com conhecimento",
  descricao:
    "Conteúdo sobre arquitetura, engenharia e construção civil: gestão de obras, obras rápidas para lojas e infraestrutura para carros elétricos.",
  caminho: "/blog",
});

export default function Blog() {
  return (
    <>
      <CabecalhoPagina
        titulo="Construindo com conhecimento"
        trilha={[{ nome: "Blog", href: "/blog" }]}
        resumo="Conteúdo sobre arquitetura, engenharia e construção civil para quem quer se inspirar e se informar."
      />
      <section aria-label="Artigos" className="py-16 lg:py-20">
        <div className="container-site">
          <CartoesPosts nivel="h2" />
        </div>
      </section>
    </>
  );
}
