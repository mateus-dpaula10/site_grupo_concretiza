import Link from "next/link";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { Foto } from "@/components/Foto";
import { IconeSeta } from "@/components/Icones";
import { ListaItens } from "@/components/ListaItens";
import { metadados } from "@/lib/seo";
import { ENERGIA } from "@/lib/site";

export const metadata = metadados({
  titulo: "Concretiza Energia: carregadores para veículos elétricos",
  descricao:
    "Projetos e instalação de estações de carregamento de veículos elétricos para condomínios, empresas, lojas e empreendimentos, com gestão inteligente da energia.",
  caminho: "/energia",
});

export default function Energia() {
  return (
    <>
      <CabecalhoPagina
        titulo="Concretiza Energia"
        trilha={[
          { nome: "Serviços", href: "/servicos" },
          { nome: "Energia", href: "/energia" },
        ]}
        resumo={ENERGIA.resumo}
      >
        <Foto
          nome="logo-concretiza-energia-branco"
          alt="Logotipo Concretiza Energia"
          largura={240}
          className="mt-10 h-auto w-[240px] opacity-90"
        />
      </CabecalhoPagina>

      <section aria-labelledby="solucoes-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <h2 id="solucoes-titulo" className="titulo text-4xl sm:text-5xl">
            Soluções
          </h2>
          <div className="mt-10">
            <ListaItens itens={ENERGIA.itens} rotulo="Soluções da Concretiza Energia" />
          </div>
        </div>
      </section>

      <section aria-labelledby="condominios-titulo" className="bg-white py-16 lg:py-24">
        <div className="container-site grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <h2 id="condominios-titulo" className="titulo text-3xl sm:text-4xl">
            Condomínios: a infraestrutura está preparada?
          </h2>
          <div className="texto-corrido grid gap-5 text-grafite">
            <p>
              Quando vários veículos carregam ao mesmo tempo, a demanda sobre a infraestrutura elétrica aumenta e uma
              instalação sem dimensionamento, proteção e gestão adequados pode colocar o condomínio em risco.
            </p>
            <p>
              Por isso, antes de simplesmente instalar um carregador na garagem, o condomínio precisa pensar em
              infraestrutura, segurança e gestão inteligente da energia. É possível controlar a demanda, organizar o
              carregamento dos veículos e evitar que todos os carregadores operem simultaneamente no limite da
              instalação.
            </p>
            <p className="font-semibold text-tinta">
              Síndicos e administradoras: a mobilidade elétrica já chegou. Fale com a nossa equipe e conheça uma solução
              inteligente para a gestão de carregadores de veículos elétricos.
            </p>
            <Link
              href="/blog/carregamento-de-carros-eletricos"
              className="inline-flex items-center gap-2 py-2 font-semibold text-marca hover:text-floresta"
            >
              Carregamento de carros elétricos: o que sua empresa precisa saber
              <IconeSeta className="size-5 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      <ChamadaOrcamento />
    </>
  );
}
