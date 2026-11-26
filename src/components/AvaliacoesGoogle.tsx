import { IconeGoogle } from "@/components/Icones";
import type { DadosGoogle } from "@/lib/google";
import { v } from "@/lib/medidas";

export const notaBR = (n: number) => n.toFixed(1).replace(".", ",");

function Estrelas({ nota }: { nota: number }) {
  const cheias = Math.round(nota);
  return (
    <span role="img" aria-label={`Nota ${nota} de 5`} className="text-[16px] leading-none tracking-[2px]">
      <span className="text-lima">{"★".repeat(cheias)}</span>
      <span className="text-white/25">{"★".repeat(5 - cheias)}</span>
    </span>
  );
}

// Avaliações reais do Google (pedido do cliente em 25/11/2026). Regras do Google para exibir
// avaliações fora de um mapa: nome e foto do autor (com link para o perfil dele), link para a
// avaliação no Google Maps e o crédito "Google Maps" sem tradução (translate="no").
export function AvaliacoesGoogle({ dados }: { dados: DadosGoogle }) {
  if (dados.avaliacoes.length === 0) return null;
  return (
    <section
      id="avaliacoes"
      className="scroll-mt-[20px] bg-[linear-gradient(to_bottom,#0f1309,#0b2e27)] pb-[44px] pt-[32px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
      style={{ "--pt": v(86), "--pb": v(90) } as React.CSSProperties}
    >
      <div className="caixa">
        <div className="tab:flex tab:items-end tab:justify-between">
          <div data-anima="sobe">
            <h2 className="t-h2">O que dizem nossos clientes</h2>
            <p className="t-lead mt-[9px] tab:mt-[var(--m)]" style={{ "--m": v(16) } as React.CSSProperties}>
              Nota {notaBR(dados.nota)} no Google, com {dados.total} avaliações.
            </p>
          </div>
          <a
            href={dados.linkPerfil}
            target="_blank"
            rel="noopener"
            className="mt-[24px] inline-flex items-center gap-[10px] rounded-full border border-menta px-[20px] py-[10px] text-[15px] hover:bg-menta/15 tab:mt-0"
          >
            <IconeGoogle className="size-[18px]" />
            Ver todas no Google
          </a>
        </div>

        <ul
          className="-mx-[20px] mt-[32px] flex snap-x snap-mandatory gap-[16px] overflow-x-auto px-[20px] pb-[12px] tab:mx-0 tab:mt-[var(--mt)] tab:px-0"
          style={{ "--mt": v(48) } as React.CSSProperties}
        >
          {dados.avaliacoes.map((a) => (
            <li key={a.autor + a.quando} className="flex w-[290px] shrink-0 snap-start flex-col rounded-[16px] bg-[#16423a] p-[22px] tab:w-[340px]">
              <div className="flex items-center gap-[12px]">
                {a.fotoAutor ? (
                  // Foto servida pelo Google; não passa pelo otimizador de imagens do site.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={a.fotoAutor} alt="" width={40} height={40} loading="lazy" referrerPolicy="no-referrer" className="size-[40px] rounded-full" />
                ) : (
                  <span aria-hidden className="grid size-[40px] place-items-center rounded-full bg-teal text-[18px]">
                    {a.autor.charAt(0)}
                  </span>
                )}
                <div className="min-w-0">
                  {a.perfilAutor ? (
                    <a href={a.perfilAutor} target="_blank" rel="noopener" className="block truncate font-semibold hover:underline">
                      {a.autor}
                    </a>
                  ) : (
                    <p className="truncate font-semibold">{a.autor}</p>
                  )}
                  <p className="text-[13px] text-cinza">{a.quando}</p>
                </div>
              </div>
              <div className="mt-[14px]">
                <Estrelas nota={a.nota} />
              </div>
              <p className="mt-[12px] line-clamp-6 text-[15px] leading-[1.55] text-cinza">{a.texto}</p>
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener" className="mt-auto pt-[14px] text-[14px] text-menta underline underline-offset-2">
                  Ler no Google Maps
                </a>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-[14px] text-[12px] text-cinza">
          Avaliações do <span translate="no">Google Maps</span>, mais relevantes primeiro.
        </p>
      </div>
    </section>
  );
}
