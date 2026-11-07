import Link from "next/link";
import { BlocoContato } from "@/components/BlocoContato";
import { CartoesPosts } from "@/components/CartoesPosts";
import { Clientes } from "@/components/Clientes";
import { Depoimentos, Estrelas } from "@/components/Depoimentos";
import { Foto } from "@/components/Foto";
import { IconeInstagram, IconeSeta, IconeWhatsapp } from "@/components/Icones";
import { Numeros } from "@/components/Numeros";
import { VideoHero } from "@/components/VideoHero";
import { metadados } from "@/lib/seo";
import { EMPRESA, ESPECIALIDADES, TIPOS_OBRA, WHATSAPP_ORCAMENTO, whatsappUrl } from "@/lib/site";

export const metadata = metadados({
  titulo: "Grupo Concretiza | Engenharia e execução de obras",
  tituloAbsoluto: true,
  descricao:
    "Soluções completas em engenharia e execução de obras corporativas, comerciais, industriais e residenciais de alto padrão. Mais de 747 projetos e 20 anos de experiência.",
  caminho: "/",
});

const DESTAQUES = [
  {
    titulo: "Casa Oliveira",
    tipo: "Residencial alto padrão",
    foto: { nome: "casa-oliveira-fachada", alt: "Casa Oliveira: esquina envidraçada com oliveira no jardim" },
    href: "/obras/residenciais",
  },
  {
    titulo: "Majestic Hall",
    tipo: "Centro de eventos",
    foto: { nome: "majestic-hall", alt: "Fachada curva em vermelho do Majestic Hall refletida no espelho d'água" },
    href: "/obras/corporativas",
  },
  {
    titulo: "Empório Francesca",
    tipo: "Comercial, Maringá (PR)",
    foto: { nome: "emporio-francesca", alt: "Fachada do Empório Francesca com tijolos aparentes e toldo preto" },
    href: "/obras/comerciais",
  },
  {
    titulo: "Hotel Prime Executive",
    tipo: "Hotelaria, Campos Novos (SC)",
    foto: { nome: "hotel-prime-executive", alt: "Fachada do Hotel Prime Executive com varandas de vidro" },
    href: "/obras/corporativas",
  },
];

export default function Home() {
  return (
    <>
      {/* Abertura */}
      <section className="sobre-escuro relative overflow-hidden bg-floresta text-white">
        <div className="container-site grid gap-10 pb-12 pt-10 lg:min-h-[min(46rem,calc(100dvh-4.5rem))] lg:grid-cols-[1.15fr_1fr] lg:items-center lg:pb-16 lg:pt-12">
          <div className="relative z-10">
            <p className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-2">
                <Estrelas className="text-menta" />
                Nota 5,0 no Google
              </span>
              <span>500+ clientes</span>
            </p>
            <h1 className="titulo mt-6 text-[2.5rem] xs:text-[2.9rem] sm:text-6xl xl:text-[4.6rem]">
              Soluções completas em engenharia e execução de obras.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Planejamento, agilidade e compromisso para entregar obras com precisão e alto padrão.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_ORCAMENTO}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-menta px-7 py-4 font-semibold text-floresta hover:bg-white"
              >
                <IconeWhatsapp className="size-5" />
                Orçamento de projetos
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center rounded-full border border-white/60 px-7 py-4 font-semibold hover:border-white hover:bg-white/10"
              >
                Contato
              </Link>
            </div>
          </div>
          <div className="relative -mx-4 aspect-[4/3] sm:mx-0 lg:aspect-auto lg:h-full lg:min-h-[34rem]">
            <Foto
              nome="obra-guindaste"
              alt="Edifício em construção com guindaste, fôrmas e andaimes sob céu azul"
              fill
              prioridade="lcp"
              sizes="(min-width: 1248px) 540px, (min-width: 1024px) 44vw, 100vw"
              className="object-cover lg:rounded-sm"
            />
            <VideoHero />
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section aria-labelledby="resultados-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 id="resultados-titulo" className="titulo text-4xl sm:text-5xl">
              Resultados que constroem confiança
            </h2>
            <p className="texto-corrido text-grafite lg:pt-2">
              Em mais de duas décadas de atuação, a Concretiza construiu uma trajetória sólida de Campos Novos ao
              Paraná, de residências a grandes complexos comerciais. Cada obra entregue carrega o compromisso de quem
              projeta com técnica, executa com rigor e entrega com orgulho.
            </p>
          </div>
          <div className="mt-14 lg:mt-20">
            <Numeros />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section aria-labelledby="servicos-titulo" className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="servicos-titulo" className="titulo text-4xl sm:text-5xl">
              Nossos serviços
            </h2>
            <Link href="/servicos" className="inline-flex items-center gap-2 py-2 font-semibold text-marca hover:text-floresta">
              Todos os serviços
              <IconeSeta className="size-5" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {TIPOS_OBRA.map((t) => (
              <li key={t.slug} className="group relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-concreto">
                  <Foto
                    nome={t.foto.nome}
                    alt={t.foto.alt}
                    fill
                    sizes="(min-width: 1248px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-bold [font-stretch:112%]">
                  <Link href={`/obras/${t.slug}`} className="after:absolute after:inset-0 group-hover:text-marca">
                    {t.tituloCurto}
                  </Link>
                </h3>
                <p className="mt-2 text-grafite">{t.resumo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Especialidades */}
      <section aria-labelledby="especialidades-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 id="especialidades-titulo" className="titulo text-4xl sm:text-5xl">
              Nossas especialidades
            </h2>
            <div className="lg:pt-2">
              <p className="texto-corrido text-grafite">
                Do projeto à entrega, cada obra carrega a nossa assinatura: a precisão de quem projeta com cuidado,
                constrói com técnica e entrega com orgulho.
              </p>
              <a
                href={whatsappUrl("Olá! Gostaria de falar com um especialista da Concretiza.")}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-flex items-center gap-2 py-2 font-semibold text-marca hover:text-floresta"
              >
                Fale com um de nossos especialistas
                <IconeSeta className="size-5" />
              </a>
            </div>
          </div>
          <ul className="mt-12 border-t border-linha">
            {ESPECIALIDADES.map((e) => (
              <li key={e.titulo} className="group relative grid gap-5 border-b border-linha py-8 sm:grid-cols-[1fr_12rem] sm:items-center lg:grid-cols-[1.1fr_1.3fr_14rem] lg:gap-10">
                <h3 className="text-3xl font-bold leading-tight [font-stretch:115%] sm:text-[2.1rem]">
                  <Link href={e.href} className="after:absolute after:inset-0 group-hover:text-marca">
                    {e.titulo}
                  </Link>
                </h3>
                <p className="text-lg text-grafite sm:col-start-1 lg:col-start-2 lg:row-start-1">{e.texto}</p>
                <div className="relative aspect-[3/2] overflow-hidden sm:col-start-2 sm:row-span-2 sm:row-start-1 lg:col-start-3 lg:row-span-1">
                  <Foto nome={e.foto.nome} alt={e.foto.alt} fill sizes="(min-width: 640px) 224px, 100vw" className="object-cover" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Obras em destaque */}
      <section aria-labelledby="obras-titulo" className="sobre-escuro bg-floresta py-16 text-white lg:py-24">
        <div className="container-site">
          <h2 id="obras-titulo" className="titulo max-w-3xl text-4xl sm:text-5xl">
            Obras que levam a nossa assinatura
          </h2>
          <ul className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {DESTAQUES.map((d) => (
              <li key={d.titulo} className="group relative w-[78%] shrink-0 snap-start sm:w-auto">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Foto
                    nome={d.foto.nome}
                    alt={d.foto.alt}
                    fill
                    sizes="(min-width: 1248px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold [font-stretch:110%]">
                  <Link href={d.href} className="after:absolute after:inset-0 group-hover:text-menta">
                    {d.titulo}
                  </Link>
                </h3>
                <p className="text-white/75">{d.tipo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" aria-labelledby="clientes-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 id="clientes-titulo" className="titulo text-4xl sm:text-5xl">
              Nossos clientes
            </h2>
            <p className="texto-corrido text-grafite lg:pt-2">
              Grandes marcas e histórias reais que confiam na Concretiza para construir o que importa.
            </p>
          </div>
          <div className="mt-12">
            <Clientes />
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section aria-labelledby="depoimentos-titulo" className="bg-concreto-escuro py-16 lg:py-24">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <h2 id="depoimentos-titulo" className="titulo text-4xl sm:text-5xl">
              A confiança de quem já construiu com a Concretiza
            </h2>
            <p className="texto-corrido flex flex-wrap items-center gap-3 text-grafite lg:pt-2">
              <Estrelas className="text-[#8a5a12]" />
              {EMPRESA.avaliacaoGoogle.nota} estrelas no Google e mais de {EMPRESA.avaliacaoGoogle.total} avaliações.
            </p>
          </div>
          <div className="mt-12">
            <Depoimentos />
          </div>
        </div>
      </section>

      {/* Presença */}
      <section aria-labelledby="presenca-titulo" className="sobre-escuro bg-floresta-2 text-white">
        <div className="container-site grid items-center gap-8 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 id="presenca-titulo" className="titulo text-4xl sm:text-5xl">
              Presença que constrói confiança em todo o Brasil
            </h2>
            <p className="texto-corrido mt-5 text-white/85">
              Obras realizadas em diversas cidades comprovam a solidez e a credibilidade da Concretiza.
            </p>
          </div>
          <Foto
            nome="mapa-brasil"
            alt="Mapa do Brasil com marcações nas cidades onde a Concretiza realizou obras, concentradas no Sul e no Sudeste"
            sizes="(min-width: 1024px) 600px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* Blog */}
      <section aria-labelledby="blog-titulo" className="py-16 lg:py-24">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="blog-titulo" className="titulo text-4xl sm:text-5xl">
                Construindo com conhecimento
              </h2>
              <p className="texto-corrido mt-4 text-grafite">
                Conteúdo sobre arquitetura, engenharia e construção civil para quem quer se inspirar e se informar.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 py-2 font-semibold text-marca hover:text-floresta">
              Ver todos os artigos
              <IconeSeta className="size-5" />
            </Link>
          </div>
          <div className="mt-10">
            <CartoesPosts />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section aria-labelledby="instagram-titulo" className="border-t border-linha">
        <div className="container-site flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="instagram-titulo" className="text-3xl font-bold [font-stretch:115%]">
              Conecte-se com a Concretiza
            </h2>
            <p className="mt-2 text-grafite">Siga nosso Instagram e acompanhe de perto cada etapa das nossas obras.</p>
          </div>
          <a
            href={EMPRESA.instagram}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 self-start rounded-full border border-tinta px-6 py-3.5 font-semibold hover:bg-tinta hover:text-white md:self-auto"
          >
            <IconeInstagram className="size-5" />
            @grupoconcretiza
          </a>
        </div>
      </section>

      <BlocoContato />
    </>
  );
}
