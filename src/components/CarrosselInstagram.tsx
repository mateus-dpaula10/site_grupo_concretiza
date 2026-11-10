"use client";

import { useRef } from "react";
import { Foto } from "@/components/Foto";
import { EMPRESA, INSTAGRAM_POSTS } from "@/lib/site";
import { v } from "@/lib/medidas";

// Carrossel do feed do Instagram (o Wix usava o widget do Instagram, que carrega o feed
// ao vivo). Aqui são as mesmas publicações salvas localmente: sem script de terceiros.
export function CarrosselInstagram() {
  const trilho = useRef<HTMLUListElement>(null);
  const avancar = () => {
    const t = trilho.current;
    if (!t) return;
    const passo = (t.firstElementChild as HTMLElement | null)?.offsetWidth ?? 300;
    const fim = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    t.scrollTo({ left: fim ? 0 : t.scrollLeft + passo + 12, behavior: "smooth" });
  };
  return (
    <div className="relative">
      <ul ref={trilho} className="flex snap-x snap-mandatory gap-[12px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {INSTAGRAM_POSTS.map((p) => (
          <li key={p.nome} className="w-full shrink-0 snap-start tab:w-[var(--w)]" style={{ "--w": v(500) } as React.CSSProperties}>
            <a href={EMPRESA.instagram} target="_blank" rel="noopener" className="relative block aspect-square overflow-hidden">
              <Foto nome={p.nome} alt={p.alt} fill sizes="(min-width: 751px) 35vw, 100vw" className="object-cover" />
            </a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={avancar}
        className="absolute right-[20px] top-1/2 grid size-[24px] -translate-y-1/2 place-items-center rounded-full bg-white/60 text-fundo hover:bg-white tab:right-[var(--r)] tab:size-[var(--s)]"
        style={{ "--r": v(32), "--s": v(50) } as React.CSSProperties}
      >
        {/* Chevron fino, como no Wix (o triângulo cheio parecia botão de play de vídeo). */}
        <svg aria-hidden viewBox="0 0 60 60" className="w-[60%]" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 18l12 12-12 12" />
        </svg>
        <span className="sr-only">Próxima publicação</span>
      </button>
    </div>
  );
}
