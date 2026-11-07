import Link from "next/link";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { IconeSeta } from "@/components/Icones";
import { ListaItens } from "@/components/ListaItens";
import { POSTS } from "@/lib/posts";
import { metadados } from "@/lib/seo";
import { ADMINISTRACAO } from "@/lib/site";

export const metadata = metadados({
  titulo: "Administração de obras",
  descricao:
    "Administração e gestão completa de obras residenciais, comerciais e corporativas: planejamento, cronograma, controle financeiro, fornecedores e supervisão da execução.",
  caminho: "/administracao-de-obras",
});

const post = POSTS.find((p) => p.slug === "gestao-de-obras-reduzir-desperdicios")!;

export default function Administracao() {
  return (
    <>
      <CabecalhoPagina
        titulo="Administração de obras"
        trilha={[
          { nome: "Serviços", href: "/servicos" },
          { nome: "Administração de obras", href: "/administracao-de-obras" },
        ]}
        resumo={ADMINISTRACAO.resumo}
        foto={{ nome: "edificio-portico-madeira", alt: "Edifício comercial com pórtico revestido em madeira" }}
      />

      <section aria-labelledby="escopo-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <h2 id="escopo-titulo" className="titulo text-4xl sm:text-5xl">
            O que a gestão cobre
          </h2>
          <div className="mt-10">
            <ListaItens itens={ADMINISTRACAO.itens} rotulo="Etapas da administração de obras" />
          </div>
        </div>
      </section>

      <section aria-labelledby="artigo-titulo" className="bg-white py-16">
        <div className="container-site grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 id="artigo-titulo" className="text-2xl font-bold [font-stretch:112%]">
            Por que contratar uma gestão especializada
          </h2>
          <div>
            <p className="texto-corrido text-grafite">
              Um dos maiores desafios de qualquer obra é manter o equilíbrio entre prazo, qualidade e orçamento. Sem
              planejamento adequado, atrasos, retrabalhos e desperdícios acabam impactando diretamente os custos do
              projeto.
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center gap-2 py-2 font-semibold text-marca hover:text-floresta"
            >
              Leia o artigo completo
              <IconeSeta className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <ChamadaOrcamento />
    </>
  );
}
