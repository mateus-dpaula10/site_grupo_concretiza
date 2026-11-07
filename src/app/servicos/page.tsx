import Link from "next/link";
import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { Foto } from "@/components/Foto";
import { IconeSeta } from "@/components/Icones";
import { metadados } from "@/lib/seo";
import { ADMINISTRACAO, ENERGIA, ESPECIALIDADES, TIPOS_OBRA } from "@/lib/site";

// TODO (revisar com o cliente): a página "Serviços" do site antigo ainda tinha o texto do
// template do Wix em inglês. Este texto foi reescrito a partir dos serviços que a empresa
// descreve nas outras páginas (home, ADM de Obras, Energia).

export const metadata = metadados({
  titulo: "Serviços de engenharia e construção",
  descricao:
    "Obras corporativas, comerciais, industriais e residenciais, administração de obras e infraestrutura para carregamento de veículos elétricos. Conheça os serviços do Grupo Concretiza.",
  caminho: "/servicos",
});

export default function Servicos() {
  return (
    <>
      <CabecalhoPagina
        titulo="Serviços"
        trilha={[{ nome: "Serviços", href: "/servicos" }]}
        resumo="Da fundação ao acabamento, o Grupo Concretiza executa obras corporativas, comerciais, industriais e residenciais, administra obras do planejamento à entrega e implanta infraestrutura para mobilidade elétrica."
      />

      <section aria-labelledby="construtora-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <h2 id="construtora-titulo" className="titulo text-4xl sm:text-5xl">
            Construtora
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {TIPOS_OBRA.map((t, i) => (
              <li key={t.slug} className="group relative grid bg-white sm:grid-cols-[13rem_1fr]">
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-52">
                  <Foto
                    nome={t.foto.nome}
                    alt={t.foto.alt}
                    fill
                    prioridade={i === 0 ? "lcp" : undefined}
                    sizes="(min-width: 640px) 208px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-2xl font-bold [font-stretch:112%]">
                    <Link href={`/obras/${t.slug}`} className="after:absolute after:inset-0 group-hover:text-marca">
                      {t.titulo}
                    </Link>
                  </h3>
                  <p className="mt-2 text-grafite">{t.resumo}</p>
                  <span aria-hidden className="mt-auto flex items-center gap-2 pt-4 font-semibold text-marca">
                    Ver obras <IconeSeta className="size-5" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="especialidades-titulo" className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <h2 id="especialidades-titulo" className="titulo text-4xl sm:text-5xl">
            Especialidades
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {ESPECIALIDADES.map((e) => (
              <li key={e.titulo} className="border-t-4 border-marca pt-5">
                <h3 className="text-2xl font-bold [font-stretch:112%]">{e.titulo}</h3>
                <p className="mt-2 text-grafite">{e.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Outras frentes" className="py-16 lg:py-24">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <article className="group relative flex flex-col bg-floresta p-8 text-white sm:p-10">
            <h2 className="titulo text-3xl sm:text-4xl">
              <Link href="/administracao-de-obras" className="after:absolute after:inset-0 group-hover:text-menta">
                {ADMINISTRACAO.titulo}
              </Link>
            </h2>
            <p className="mt-4 text-lg text-white/85">{ADMINISTRACAO.resumo}</p>
            <p className="mt-4 text-white/70">{ADMINISTRACAO.itens.slice(0, 5).join(", ")} e mais.</p>
            <span aria-hidden className="mt-auto flex items-center gap-2 pt-8 font-semibold text-menta">
              Conhecer <IconeSeta className="size-5" />
            </span>
          </article>
          <article className="group relative flex flex-col bg-marca p-8 text-white sm:p-10">
            <h2 className="titulo text-3xl sm:text-4xl">
              <Link href="/energia" className="after:absolute after:inset-0 group-hover:text-floresta">
                {ENERGIA.titulo}
              </Link>
            </h2>
            <p className="mt-4 text-lg text-white/90">{ENERGIA.resumo}</p>
            <span aria-hidden className="mt-auto flex items-center gap-2 pt-8 font-semibold">
              Conhecer <IconeSeta className="size-5" />
            </span>
          </article>
        </div>
      </section>

      <ChamadaOrcamento />
    </>
  );
}
