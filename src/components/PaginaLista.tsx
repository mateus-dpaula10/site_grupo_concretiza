import { Foto } from "@/components/Foto";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { v } from "@/lib/medidas";

export type Frente = { id: string; titulo: string; texto: string; itens?: readonly string[] };

type Props = {
  titulo: string;
  texto: string;
  itens?: readonly string[];
  /** Blocos com subtítulo e âncora própria (Energia: Eletropostos, Condomínios, Solar). */
  frentes?: readonly Frente[];
  foto: { nome: string; alt: string };
  /** Logo sobreposto à faixa de foto (Energia). */
  logo?: { nome: string; alt: string };
  trilha: { nome: string; href: string }[];
};

const fonteItem = "clamp(16px, calc(16px + 2 * ((100vw - 1100px) / 340)), 18px)";

function Lista({ itens, className = "" }: { itens: readonly string[]; className?: string }) {
  return (
    <ul
      className={`mx-[40px] grid gap-y-[40px] text-[16px] leading-[1.6] text-cinza tab:mx-[var(--mx)] tab:grid-cols-3 tab:gap-x-[var(--gx)] tab:gap-y-[var(--gy)] tab:text-[length:var(--f)] ${className}`}
      style={{ "--mx": v(90), "--gx": v(34), "--gy": v(45), "--f": fonteItem } as React.CSSProperties}
    >
      {itens.map((item) => (
        <li key={item} className="border-b border-fundo">
          {item}
        </li>
      ))}
    </ul>
  );
}

// Layout das páginas Energia e ADM de Obras do original: faixa de foto, bloco verde com
// título centralizado, texto e lista de itens em 3 colunas sublinhadas.
export function PaginaLista({ titulo, texto, itens, frentes, foto, logo, trilha }: Props) {
  return (
    <>
      <JsonLd dados={dadosBreadcrumb(trilha)} />
      <div className="relative mt-[31px] h-[103px] overflow-hidden tab:mt-0 tab:h-[var(--h)]" style={{ "--h": v(387) } as React.CSSProperties}>
        <Foto nome={foto.nome} alt={foto.alt} fill prioridade="lcp" sizes="100vw" className="object-cover" />
        {logo && (
          <div className="absolute left-1/2 top-1/2 w-[126px] -translate-x-1/2 -translate-y-1/2 tab:w-[var(--w)]" style={{ "--w": v(465) } as React.CSSProperties}>
            <Foto nome={logo.nome} alt={logo.alt} sizes="(min-width: 751px) 33vw, 126px" className="h-auto w-full" />
          </div>
        )}
      </div>
      <section className="bg-[#16423a] pb-[54px] pt-[41px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(91), "--pb": v(133) } as React.CSSProperties}>
        <div data-anima="fade" data-anima-agora className="caixa text-center">
          <h1 className="mx-auto max-w-[312px] [overflow-wrap:anywhere] font-display text-[60px] font-semibold leading-[1.3] tab:max-w-none tab:text-[length:var(--f)]" style={{ "--f": "clamp(47px, calc(47px + 13 * ((100vw - 1100px) / 340)), 60px)" } as React.CSSProperties}>
            {titulo}
          </h1>
          <p className="mx-auto mt-[22px] max-w-[278px] text-[16px] leading-[1.6] text-cinza tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(22), "--w": v(714) } as React.CSSProperties}>
            {texto}
          </p>
        </div>
        {itens && (
          <div className="mt-[52px] tab:mt-[var(--mt)]" style={{ "--mt": v(89) } as React.CSSProperties}>
            <Lista itens={itens} />
          </div>
        )}
        {frentes?.map((f) => (
          <div
            key={f.id}
            id={f.id}
            className="mt-[56px] scroll-mt-[calc(var(--altura-cabecalho)+24px)] tab:mt-[var(--mt)]"
            style={{ "--mt": v(96) } as React.CSSProperties}
          >
            <div className="caixa text-center">
              <h2 className="t-h2">{f.titulo}</h2>
              <p className="mx-auto mt-[12px] max-w-[320px] text-[16px] leading-[1.6] text-cinza tab:mt-[var(--m)] tab:max-w-[var(--w)] tab:text-[length:var(--f)]" style={{ "--m": v(16), "--w": v(714), "--f": fonteItem } as React.CSSProperties}>
                {f.texto}
              </p>
            </div>
            {f.itens && f.itens.length > 0 && <Lista itens={f.itens} className="mt-[36px] tab:mt-[48px]" />}
          </div>
        ))}
      </section>
    </>
  );
}
