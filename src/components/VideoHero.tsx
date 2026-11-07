"use client";

import { useEffect, useRef, useState } from "react";

// Vídeo de fundo do hero (corte de 6,8 s de concretiza.mp4, sem áudio, ~0,8 MB).
// A foto de capa continua sendo o LCP; o vídeo só é inserido depois do evento load,
// apenas em telas >= 1024px, e nunca com prefers-reduced-motion ou Save-Data.
// Botão de pausa visível por acessibilidade (WCAG 2.2.2: movimento automático > 5 s).
export function VideoHero() {
  const [ativo, setAtivo] = useState(false);
  const [visivel, setVisivel] = useState(false);
  const [pausado, setPausado] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const conexao = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const permitido =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !conexao?.saveData;
    if (!permitido) return;

    let cancelado = false;
    const iniciar = () => {
      const ocioso = window.requestIdleCallback ?? ((fn: () => void) => window.setTimeout(fn, 200));
      ocioso(() => !cancelado && setAtivo(true));
    };
    if (document.readyState === "complete") iniciar();
    else window.addEventListener("load", iniciar, { once: true });
    return () => {
      cancelado = true;
      window.removeEventListener("load", iniciar);
    };
  }, []);

  if (!ativo) return null;

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
    <>
      <video
        ref={video}
        aria-hidden
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        onPlaying={() => setVisivel(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 lg:rounded-sm ${visivel ? "opacity-100" : "opacity-0"}`}
      >
        <source src="/video/hero-obras.webm" type="video/webm" />
        <source src="/video/hero-obras.mp4" type="video/mp4" />
      </video>
      {visivel && (
        <button
          type="button"
          onClick={alternar}
          className="absolute bottom-4 right-4 rounded-full bg-floresta/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-floresta"
        >
          {pausado ? "Reproduzir vídeo" : "Pausar vídeo"}
        </button>
      )}
    </>
  );
}
