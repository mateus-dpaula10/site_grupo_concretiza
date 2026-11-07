"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Faixa que rola sozinha. O HTML traz uma cópia das fotos só; a segunda cópia (necessária
// para o loop contínuo) é clonada no navegador depois do load, para não pesar a página.
export function Rolagem({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const lista = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const ul = lista.current;
    if (!ul || ul.dataset.clonado) return;
    const iniciar = () => {
      for (const li of [...ul.children]) {
        const c = li.cloneNode(true) as HTMLElement;
        c.setAttribute("aria-hidden", "true");
        c.querySelectorAll("img").forEach((img) => img.setAttribute("alt", ""));
        ul.appendChild(c);
      }
      ul.dataset.clonado = "1";
      ul.classList.add("rolagem-continua");
    };
    if (document.readyState === "complete") iniciar();
    else window.addEventListener("load", iniciar, { once: true });
    return () => window.removeEventListener("load", iniciar);
  }, []);
  return (
    <ul ref={lista} className={className} style={style}>
      {children}
    </ul>
  );
}
