import Link from "next/link";
import { ChamadasFinais } from "@/components/ChamadasFinais";
import { Depoimentos } from "@/components/Depoimentos";
import { Foto } from "@/components/Foto";
import { IconeLocal } from "@/components/Icones";
import { TopoPagina } from "@/components/TopoPagina";
import { metadados } from "@/lib/seo";
import { ESPECIALIDADES, SERVICOS_HOME, WHATSAPP_ORCAMENTO, ENERGIA, ADMINISTRACAO } from "@/lib/site";
import { v } from "@/lib/medidas";

// TODO (revisar com o cliente): no Wix esta página ainda tinha o texto do template em inglês
// (imobiliária "Landora"). O layout é o mesmo do original; os textos foram trocados por
// conteúdo real da empresa, tirado da home, das páginas de obras e do Instagram.

export const metadata = metadados({
  titulo: "Serviços",
  descricao:
    "Obras corporativas, comerciais, industriais e residenciais, administração de obras e infraestrutura para carregamento de veículos elétricos. Conheça os serviços do Grupo Concretiza.",
  caminho: "/servicos",
});

const AREAS = [
  { ...SERVICOS_HOME[0], titulo: "Obras Corporativas", tag: "Construtora", foto: { nome: "sala-reunioes", alt: "Sala de reuniões corporativa" } },
  { ...SERVICOS_HOME[1], titulo: "Obras Comerciais", tag: "Construtora", foto: { nome: "loja-eva-bella", alt: "Vitrine da loja Eva Bella" } },
  { ...SERVICOS_HOME[2], titulo: "Obras Industriais", tag: "Construtora", foto: { nome: "galpao-em-obra", alt: "Galpão industrial em construção" } },
  { ...SERVICOS_HOME[3], titulo: "Obras Residenciais", tag: "Construtora", foto: { nome: "residencia-piscina", alt: "Residência de alto padrão com piscina" } },
  { titulo: "Administração de Obras", texto: ADMINISTRACAO.resumo, href: "/administracao-de-obras", tag: "Gestão", foto: { nome: "hotel-palmeiras", alt: "Hotel de grande porte" } },
  { titulo: ENERGIA.titulo, texto: ENERGIA.resumo, href: "/energia", tag: "Energia", foto: { nome: "capa-energia", alt: "Logotipo Concretiza Energia" } },
];

const fim = (cor: string, inicio = "55%") => ({ "--inicio": inicio, "--fim": cor });

export default function Servicos() {
  return (
    <>
      <TopoPagina
        titulo="Serviços"
        texto="Da fundação ao acabamento, soluções completas em engenharia e execução de obras."
        pagina={{ nome: "Serviços", href: "/servicos" }}
        foto={{ nome: "edificio-portico-madeira", alt: "Edifício comercial com pórtico revestido em madeira" }}
        respiro={62}
      />

      {/* Especialidades (no original: cards do Wix Bookings com preço e "Agendar") */}
      <section className="degrade-base pb-[60px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(101), "--pb": v(552), ...fim("#1e2612", "45%") } as React.CSSProperties}>
        <div className="caixa">
          <div className="text-center">
            <h2 className="t-h2">Nossas Especialidades</h2>
            <p className="t-lead mx-auto mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(17), "--w": v(700) } as React.CSSProperties}>
              Do projeto à entrega, cada obra carrega a nossa assinatura.
            </p>
          </div>
          <ul className="mt-[40px] grid gap-[25px] tab:-mx-[var(--mx)] tab:mt-[var(--mt)] tab:grid-cols-3 tab:gap-[var(--g)]" style={{ "--mt": v(70), "--g": v(25), "--mx": v(3) } as React.CSSProperties}>
            {ESPECIALIDADES.map((e) => (
              <li key={e.titulo} className="flex flex-col overflow-hidden rounded-[20px] border border-[#445032]/30 bg-oliva tab:min-h-[var(--ch)]" style={{ "--ch": v(714) } as React.CSSProperties}>
                <div className="relative aspect-square overflow-hidden rounded-[20px]">
                  <Foto nome={e.foto.nome} alt={e.foto.alt} fill sizes="(min-width: 751px) 29vw, 351px" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col px-[20px] pb-[24px] pt-[18px]">
                  <h3 className="t-card-titulo">
                    <Link href={e.href} className="hover:text-lima">
                      {e.titulo}
                    </Link>
                  </h3>
                  <p className="t-card-texto mt-[12px]">{e.texto}</p>
                  <div className="mt-auto border-t border-white/15 pt-[24px] tab:mt-[var(--m)]" style={{ "--m": v(40) } as React.CSSProperties}>
                    <a href={WHATSAPP_ORCAMENTO} target="_blank" rel="noopener" className="inline-flex h-[40px] items-center rounded-full bg-lima px-[18px] text-[16px] text-oliva hover:bg-white">
                      Pedir orçamento
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Áreas de atuação (no original: "Signature Locations" do template) */}
      <section className="degrade-base pb-[60px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(86), "--pb": v(87), ...fim("#1e2512", "70%") } as React.CSSProperties}>
        <div className="caixa">
          <div className="text-center">
            <h2 className="t-h2">Áreas de Atuação</h2>
            <p className="t-lead mx-auto mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(17), "--w": v(861) } as React.CSSProperties}>
              Construtora, administração de obras e infraestrutura para mobilidade elétrica.
            </p>
          </div>
          <ul className="mt-[40px] grid gap-[20px] tab:mt-[var(--mt)] tab:grid-cols-2 tab:gap-x-[var(--gx)] tab:gap-y-[var(--gy)]" style={{ "--mt": v(57), "--gx": v(28), "--gy": v(29) } as React.CSSProperties}>
            {AREAS.map((a) => (
              <li key={a.titulo} className="group relative h-[300px] overflow-hidden rounded-[20px] tab:h-[var(--h)]" style={{ "--h": v(460) } as React.CSSProperties}>
                <Foto nome={a.foto.nome} alt={a.foto.alt} fill sizes="(min-width: 751px) 44vw, 351px" className="object-cover" />
                <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,rgba(0,0,0,0.85)_100%)]" />
                <span
                  className="absolute right-[16px] top-[16px] inline-flex items-center gap-[8px] rounded-full border border-white/40 bg-white/70 px-[14px] py-[7px] text-[14px] text-black backdrop-blur tab:right-[var(--r)] tab:top-[var(--t)] tab:text-[length:var(--f)]"
                  style={{ "--r": v(40), "--t": v(24), "--f": v(15.75) } as React.CSSProperties}
                >
                  <IconeLocal className="size-[16px] text-[#5fa35f]" />
                  {a.tag}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-[20px] tab:px-[var(--px)] tab:pb-[var(--pb)]" style={{ "--px": v(23), "--pb": v(22) } as React.CSSProperties}>
                  <h3 className="font-display text-[20px] font-semibold leading-[1.3] tab:text-[length:var(--f)]" style={{ "--f": v(24.75) } as React.CSSProperties}>
                    <Link href={a.href} className="after:absolute after:inset-0 hover:text-lima">
                      {a.titulo}
                    </Link>
                  </h3>
                  <p className="mt-[6px] text-[14px] leading-[1.6] text-cinza tab:text-[length:var(--f2)]" style={{ "--f2": v(18) } as React.CSSProperties}>
                    {a.texto}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Depoimentos (no original: "What Our Clients Say" do template, com nomes fictícios) */}
      <section className="degrade-base pb-[60px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(86), "--pb": v(100), ...fim("#1e2512", "40%") } as React.CSSProperties}>
        <div className="caixa">
          <div className="text-center">
            <h2 className="t-h2">O Que Dizem Nossos Clientes</h2>
            <p className="t-lead mx-auto mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(17), "--w": v(566) } as React.CSSProperties}>
              A confiança de quem já construiu com a Concretiza: 5 estrelas no Google e mais de 100 avaliações.
            </p>
          </div>
          <div className="mt-[40px] tab:mt-[var(--mt)]" style={{ "--mt": v(68) } as React.CSSProperties}>
            <Depoimentos />
          </div>
        </div>
      </section>

      <ChamadasFinais />
    </>
  );
}
