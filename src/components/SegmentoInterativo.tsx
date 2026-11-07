"use client";

import { useEffect, useRef } from "react";
import { whatsappUrl } from "@/lib/site";

// Recria o comportamento das páginas de obras do original (slider do hero, menu interno
// no celular, entrada dos blocos ao rolar e formulário) sobre o HTML estático importado.
export function SegmentoInterativo({ html }: { html: string }) {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const limpar: (() => void)[] = [];
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Slider: troca a cada 4 s; as fotos 2+ só baixam depois do load.
    const slides = [...el.querySelectorAll<HTMLElement>(".hero-slider .slide")];
    const pontos = [...el.querySelectorAll<HTMLButtonElement>(".sdot")];
    let atual = 0;
    let timer: number | undefined;
    const ir = (n: number) => {
      slides[atual]?.classList.remove("active");
      pontos[atual]?.classList.remove("active");
      atual = (n + slides.length) % slides.length;
      slides[atual]?.classList.add("active");
      pontos[atual]?.classList.add("active");
    };
    const carregarFotos = () => {
      for (const s of slides) {
        const bg = s.dataset.bg;
        if (bg) s.style.backgroundImage = `url('${bg}')`;
      }
      if (!reduzir && slides.length > 1) timer = window.setInterval(() => ir(atual + 1), 4000);
    };
    if (document.readyState === "complete") carregarFotos();
    else {
      window.addEventListener("load", carregarFotos, { once: true });
      limpar.push(() => window.removeEventListener("load", carregarFotos));
    }
    limpar.push(() => window.clearInterval(timer));
    pontos.forEach((p) => {
      const f = () => {
        carregarFotosSeFaltar();
        ir(Number(p.dataset.slide));
      };
      p.addEventListener("click", f);
      limpar.push(() => p.removeEventListener("click", f));
    });
    function carregarFotosSeFaltar() {
      for (const s of slides) if (s.dataset.bg && !s.style.backgroundImage) s.style.backgroundImage = `url('${s.dataset.bg}')`;
    }

    // Menu interno no celular.
    const botao = el.querySelector<HTMLButtonElement>("[data-toggle]");
    const menu = el.querySelector<HTMLElement>(".mobile-nav");
    if (botao && menu) {
      const f = () => {
        const aberto = menu.classList.toggle("open");
        botao.setAttribute("aria-expanded", String(aberto));
      };
      botao.addEventListener("click", f);
      limpar.push(() => botao.removeEventListener("click", f));
    }

    // Entrada dos blocos ao rolar (classe .v), como no original.
    const blocos = [...el.querySelectorAll<HTMLElement>(".reveal")];
    if (reduzir || !("IntersectionObserver" in window)) blocos.forEach((b) => b.classList.add("v"));
    else {
      const obs = new IntersectionObserver(
        (entradas) =>
          entradas.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("v");
              obs.unobserve(e.target);
            }
          }),
        { threshold: 0.1, rootMargin: "0px 0px -32px 0px" },
      );
      blocos.forEach((b) => obs.observe(b));
      limpar.push(() => obs.disconnect());
    }

    // Formulário: o original não enviava nada; aqui abre o WhatsApp com os dados.
    const form = el.querySelector<HTMLFormElement>("form[data-orcamento]");
    if (form) {
      const f = (ev: SubmitEvent) => {
        ev.preventDefault();
        const dados = new FormData(form);
        const linhas = [...dados.entries()].filter(([, v]) => String(v).trim()).map(([k, v]) => `${k}: ${v}`);
        const texto = [`Olá! Vim pelo site (obras ${form.dataset.orcamento}) e gostaria de um orçamento.`, ...linhas].join("\n");
        window.open(whatsappUrl(texto), "_blank", "noopener");
      };
      form.addEventListener("submit", f);
      limpar.push(() => form.removeEventListener("submit", f));
    }

    return () => limpar.forEach((fn) => fn());
  }, []);

  return <div ref={raiz} className="seg" dangerouslySetInnerHTML={{ __html: html }} />;
}
