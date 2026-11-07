"use client";

import { useState, type ReactNode } from "react";

// Vídeo carregado só no clique: até lá, mostra a capa (children) e um botão de play.
// Nada do arquivo de vídeo é baixado antes da interação.
export function VideoFacade({ src, titulo, children }: { src: string; titulo: string; children: ReactNode }) {
  const [tocando, setTocando] = useState(false);

  if (tocando) {
    return (
      <video
        src={src}
        controls
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full bg-black object-contain"
        aria-label={titulo}
      />
    );
  }

  return (
    <button type="button" onClick={() => setTocando(true)} className="group absolute inset-0 block h-full w-full text-left">
      {children}
      <span aria-hidden className="absolute inset-0 bg-floresta/35 transition-colors group-hover:bg-floresta/20" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="flex items-center gap-3 rounded-full bg-white py-3 pl-4 pr-6 font-semibold text-floresta shadow-lg transition-transform group-hover:scale-105">
          <svg aria-hidden viewBox="0 0 24 24" className="size-8 fill-marca">
            <circle cx="12" cy="12" r="12" />
            <path d="M10 8l6 4-6 4z" fill="#fff" />
          </svg>
          Assistir ao vídeo institucional
        </span>
      </span>
      <span className="sr-only">{titulo}</span>
    </button>
  );
}
