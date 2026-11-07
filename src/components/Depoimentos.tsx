"use client";

import { useState } from "react";
import { Foto } from "@/components/Foto";
import { v } from "@/lib/medidas";

// Depoimentos reais (avaliações no Google publicadas no Instagram da empresa), no formato
// do slider de depoimentos do original: citação, autor e setas verde-limão.
const DEPOIMENTOS = [
  {
    nome: "Cátia Ribeiro",
    texto:
      "“Desde o primeiro contato, através do Eng. Érico Vicentin, fui atendida com muita atenção, profissionalismo e respeito. Percebi uma equipe tecnicamente preparada, comprometida com os prazos e atenta aos detalhes durante toda a execução.”",
  },
  {
    nome: "Ednaldo Silva",
    texto:
      "“Os serviços contratados foram executados seguindo os requisitos do projeto e dentro das normas e padrões da construção civil, a empresa cumpriu fielmente o cronograma estabelecido. Seguramente recomendaria e também contrataria novamente.”",
  },
];

function Seta({ dir, onClick, rotulo }: { dir: "esq" | "dir"; onClick: () => void; rotulo: string }) {
  return (
    <button type="button" onClick={onClick} className="grid size-[32px] place-items-center rounded-full bg-lima text-oliva hover:bg-white">
      <svg aria-hidden viewBox="0 0 16 16" className={`w-[14px] ${dir === "esq" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M2 8h12M9 3l5 5-5 5" />
      </svg>
      <span className="sr-only">{rotulo}</span>
    </button>
  );
}

export function Depoimentos() {
  const [i, setI] = useState(0);
  const d = DEPOIMENTOS[i];
  const ir = (n: number) => setI((n + DEPOIMENTOS.length) % DEPOIMENTOS.length);
  return (
    <div className="tab:grid tab:grid-cols-[1fr_var(--w)] tab:gap-[var(--g)]" style={{ "--w": v(410), "--g": v(141) } as React.CSSProperties}>
      <figure className="tab:pl-[var(--pl)] tab:pt-[var(--pt)]" style={{ "--pl": v(6), "--pt": v(52) } as React.CSSProperties} aria-live="polite">
        <blockquote className="font-display text-[18px] font-medium leading-[1.6] tab:text-[length:var(--f)]" style={{ "--f": v(22.5) } as React.CSSProperties}>
          {d.texto}
        </blockquote>
        <figcaption className="mt-[28px] flex items-center gap-[22px] tab:mt-[var(--m)]" style={{ "--m": v(46) } as React.CSSProperties}>
          <span aria-hidden className="grid size-[80px] place-items-center rounded-[12px] bg-teal font-display text-[28px] font-semibold tab:size-[var(--a)]" style={{ "--a": v(114) } as React.CSSProperties}>
            {d.nome
              .split(" ")
              .map((p) => p[0])
              .join("")}
          </span>
          <span>
            <span className="block font-display text-[18px] font-medium tab:text-[length:var(--f)]" style={{ "--f": v(22.5) } as React.CSSProperties}>
              {d.nome}
            </span>
            <span className="block text-[16px] text-cinza tab:text-[length:var(--f2)]" style={{ "--f2": v(18) } as React.CSSProperties}>
              Avaliação no Google
            </span>
          </span>
        </figcaption>
        <div className="mt-[30px] flex gap-[12px] tab:mt-[var(--m)]" style={{ "--m": v(78) } as React.CSSProperties}>
          <Seta dir="esq" onClick={() => ir(i - 1)} rotulo="Depoimento anterior" />
          <Seta dir="dir" onClick={() => ir(i + 1)} rotulo="Próximo depoimento" />
        </div>
      </figure>
      <div className="relative mt-[30px] h-[400px] overflow-hidden rounded-[20px] tab:mt-0 tab:h-[var(--h)]" style={{ "--h": v(472) } as React.CSSProperties}>
        <Foto nome="casa-oliveira-sala" alt="Sala da Casa Oliveira aberta para a piscina" fill sizes="(min-width: 751px) 29vw, 351px" className="object-cover" />
      </div>
    </div>
  );
}
