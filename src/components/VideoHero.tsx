"use client";

import { useEffect, useState } from "react";

// Vídeo de fundo do topo: corte de 6 s de concretiza.mp4 (vídeo do cliente), sem áudio,
// ~0,75 MB. A foto de capa continua sendo o LCP; o vídeo só entra depois do evento load,
// em telas >= 1001px, e nunca com prefers-reduced-motion ou Save-Data.
export function VideoHero() {
  const [ativo, setAtivo] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const conexao = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const permitido =
      window.matchMedia("(min-width: 1001px)").matches &&
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
  return (
    <video
      aria-hidden
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      onPlaying={() => setVisivel(true)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${visivel ? "opacity-100" : "opacity-0"}`}
    >
      <source src="/video/hero.webm" type="video/webm" />
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}
