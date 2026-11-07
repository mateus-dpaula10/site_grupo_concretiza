"use client";

import { useEffect, useRef, useState } from "react";
import { Foto } from "@/components/Foto";

type Props = { poster: string; webm: string; mp4: string; titulo: string };

// Vídeo em loop sem áudio que só baixa quando chega perto da tela (e depois do load).
// Até lá mostra a foto de capa. Com prefers-reduced-motion ou Save-Data, fica só a foto.
// Tem botão de pausa (WCAG 2.2.2), como o player do Wix.
export function VideoAoVer({ poster, webm, mp4, titulo }: Props) {
  const caixa = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [ativo, setAtivo] = useState(false);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    const conexao = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || conexao?.saveData) return;
    const el = caixa.current;
    if (!el) return;
    let obs: IntersectionObserver | undefined;
    const observar = () => {
      obs = new IntersectionObserver(
        (entradas) => {
          if (entradas.some((e) => e.isIntersecting)) {
            setAtivo(true);
            obs?.disconnect();
          }
        },
        { rootMargin: "200px" },
      );
      obs.observe(el);
    };
    if (document.readyState === "complete") observar();
    else window.addEventListener("load", observar, { once: true });
    return () => {
      obs?.disconnect();
      window.removeEventListener("load", observar);
    };
  }, []);

  function alternar() {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPausado(false);
    } else {
      v.pause();
      setPausado(true);
    }
  }

  return (
    <div ref={caixa} className="absolute inset-0">
      <Foto nome={poster} alt={titulo} fill sizes="(min-width: 751px) 90vw, 100vw" className="object-cover" />
      {ativo && (
        <>
          <video ref={video} aria-hidden muted loop playsInline autoPlay preload="none" className="absolute inset-0 h-full w-full object-cover">
            <source src={webm} type="video/webm" />
            <source src={mp4} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={alternar}
            className="absolute bottom-[12px] left-[12px] grid size-[40px] place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
          >
            {pausado ? (
              <svg aria-hidden viewBox="0 0 60 60" className="w-[34px]" fill="currentColor">
                <path d="M41.5,30l-17,10V20L41.5,30z" />
              </svg>
            ) : (
              <svg aria-hidden viewBox="0 0 40 40" className="w-[30px]" fill="currentColor">
                <rect x="13" y="10" width="5" height="20" />
                <rect x="22" y="10" width="5" height="20" />
              </svg>
            )}
            <span className="sr-only">{pausado ? "Reproduzir vídeo" : "Pausar vídeo"}</span>
          </button>
        </>
      )}
    </div>
  );
}
