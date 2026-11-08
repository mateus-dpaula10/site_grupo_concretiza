import { BotaoSeta } from "@/components/BotaoSeta";
import { Foto } from "@/components/Foto";
import { WHATSAPP_ORCAMENTO } from "@/lib/site";
import { v } from "@/lib/medidas";

const fim = (cor: string, inicio = "55%") => ({ "--inicio": inicio, "--fim": cor });

// Os dois cartões com foto e botão verde-limão do fim das páginas Serviços e Blog do original
// (no Wix ainda com texto do template em inglês; aqui com chamadas reais da empresa).
export function ChamadasFinais() {
  return (
        <section className="degrade-base pb-[60px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]" style={{ "--pt": v(101), "--pb": v(101), ...fim("#1e2612", "60%") } as React.CSSProperties}>
      <ul className="caixa grid gap-[20px] tab:grid-cols-2 tab:gap-[var(--g)]" style={{ "--g": v(34) } as React.CSSProperties}>
        {[
          {
            titulo: "Fale com um de nossos especialistas",
            texto: "Conte o que você precisa e receba a orientação da nossa equipe técnica.",
            botao: "Especialistas",
            href: WHATSAPP_ORCAMENTO,
            externo: true,
            foto: { nome: "majestic-hall", alt: "Majestic Hall ao entardecer" },
          },
          {
            titulo: "Vamos Construir Juntos?",
            texto: "Conte-nos sobre o seu projeto e entraremos em contato para transformar a sua ideia em realidade.",
            botao: "Contato",
            href: "/#contato",
            externo: false,
            foto: { nome: "majestic-hall-aereo", alt: "Vista aérea do Majestic Hall" },
          },
        ].map((c) => (
          <li key={c.titulo} className="relative grid h-[360px] place-items-center overflow-hidden rounded-[20px] px-[24px] text-center tab:h-[var(--h)]" style={{ "--h": v(550) } as React.CSSProperties}>
            <Foto nome={c.foto.nome} alt={c.foto.alt} fill sizes="(min-width: 751px) 44vw, 351px" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-fundo/55" />
            <div className="relative max-w-[480px]">
              <h3 className="font-display text-[20px] font-semibold leading-[1.3] tab:text-[length:var(--f)]" style={{ "--f": v(24.75) } as React.CSSProperties}>
                {c.titulo}
              </h3>
              <p className="t-lead mt-[10px]">{c.texto}</p>
              <div className="mt-[24px] flex justify-center tab:mt-[var(--m)]" style={{ "--m": v(32) } as React.CSSProperties}>
                <BotaoSeta href={c.href} externo={c.externo} variante="lima" largura={[160, 180]} escuro>
                  {c.botao}
                </BotaoSeta>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
