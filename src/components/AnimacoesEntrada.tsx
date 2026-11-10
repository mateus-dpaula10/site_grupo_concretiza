"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Animações de entrada do Wix: cada elemento com data-anima="fade|fade-lento|sobe|cresce"
// anima quando entra na tela (o efeito, o tempo e a curva estão no globals.css). Os do topo
// usam data-anima-agora e animam no carregamento, só com CSS. Roda de novo a cada troca de
// página, porque a navegação do Next não recarrega o documento.
export function AnimacoesEntrada() {
  const caminho = usePathname();

  useEffect(() => {
    (window as Window & { __anima?: boolean }).__anima = true;
    const pendentes = document.querySelectorAll<HTMLElement>("[data-anima]:not([data-anima-agora]):not([data-anima-ok])");
    const mostrar = (el: Element) => el.setAttribute("data-anima-ok", "");
    if (!("IntersectionObserver" in window)) {
      pendentes.forEach(mostrar);
      return;
    }
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (!e.isIntersecting) continue;
          mostrar(e.target);
          obs.unobserve(e.target);
        }
      },
      // Dispara um pouco depois de a borda de baixo da tela alcançar o elemento, como no Wix.
      { rootMargin: "0px 0px -8% 0px" },
    );
    pendentes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [caminho]);

  return null;
}
