import Link from "next/link";
import { Foto } from "@/components/Foto";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { v } from "@/lib/medidas";

type Props = {
  titulo: string;
  texto: string;
  pagina: { nome: string; href: string };
  foto: { nome: string; alt: string };
  /** Distância (px em 1440) entre o texto e a pílula da trilha. */
  respiro?: number;
};

// Topo das páginas internas do Wix (Sobre, Serviços, Blog): título e texto centralizados,
// pílula "Home / Página" e faixa de foto em largura total.
export function TopoPagina({ titulo, texto, pagina, foto, respiro = 57 }: Props) {
  return (
    <section className="pt-[31px] tab:pt-[var(--pt)]" style={{ "--pt": v(87) } as React.CSSProperties}>
      <JsonLd dados={dadosBreadcrumb([pagina])} />
      <div className="caixa text-center">
        <h1 className="t-h1">{titulo}</h1>
        <p className="t-lead mx-auto mt-[9px] max-w-[351px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(17), "--w": v(771) } as React.CSSProperties}>
          {texto}
        </p>
        <nav aria-label="Trilha de navegação" className="mt-[30px] tab:mt-[var(--m2)]" style={{ "--m2": v(respiro) } as React.CSSProperties}>
          <ol
            className="inline-flex items-center gap-[8px] rounded-full bg-teal px-[18px] py-[6px] text-[13px] tab:h-[var(--h)] tab:px-[var(--px)] tab:text-[length:var(--f)]"
            style={{ "--h": v(47), "--px": v(37), "--f": v(18) } as React.CSSProperties}
          >
            <li>
              <Link href="/" className="hover:text-lima">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-lima">
              {pagina.nome}
            </li>
          </ol>
        </nav>
      </div>
      <div className="relative mt-[38px] h-[230px] overflow-hidden tab:mt-[var(--m3)] tab:h-[var(--h2)]" style={{ "--m3": v(47), "--h2": v(456) } as React.CSSProperties}>
        <Foto nome={foto.nome} alt={foto.alt} fill prioridade="lcp" sizes="100vw" className="object-cover" />
        <div aria-hidden className="absolute inset-0 bg-fundo/30" />
      </div>
    </section>
  );
}
