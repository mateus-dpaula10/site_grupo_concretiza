import Link from "next/link";
import type { ReactNode } from "react";
import { IconeSeta } from "@/components/Icones";
import { v } from "@/lib/medidas";

type Props = {
  href: string;
  children: ReactNode;
  /** "cheio": limão no celular e menta no desktop; "lima": limão sempre; "contorno": borda menta. */
  variante: "cheio" | "lima" | "contorno";
  /** Largura fixa do botão no original: [celular, desktop em 1440px]. */
  largura: [number, number];
  /** Botões secundários do original: texto 15px verde-oliva (os do topo usam 16px). */
  escuro?: boolean;
  externo?: boolean;
  /** Botões do topo da home: no Wix têm largura fixa em px por faixa de tela e não escalam. */
  fixo?: { celular: number; tablet: number; desktop: number };
};

// Botão em pílula com a seta diagonal do original. No celular o Wix usa verde-limão
// no botão cheio; no desktop, verde-menta.
export function BotaoSeta({ href, children, variante, largura, escuro, externo, fixo }: Props) {
  const cheio = variante !== "contorno";
  const fundo = variante === "lima" ? "bg-lima" : fixo ? "bg-lima desk:bg-menta" : "bg-lima tab:bg-menta";
  const classes = [
    "inline-flex h-[45px] w-[var(--wm)] items-center justify-center gap-[7px] rounded-full text-[14px] transition-colors",
    fixo ? "tab:w-[var(--wt)] desk:h-[50px] desk:w-[var(--wd)] desk:text-[16px]" : "tab:h-[var(--h)] tab:w-[var(--wd)]",
    fixo ? "" : escuro ? "tab:text-[length:var(--f15)]" : "tab:text-[length:var(--f16)]",
    cheio
      ? `${fundo} hover:bg-white ${escuro ? "text-oliva" : "text-tinta"}`
      : "border border-menta text-menta hover:bg-menta/10",
  ].join(" ");
  const variaveis: Record<string, string> = fixo
    ? { "--wm": `${fixo.celular}px`, "--wt": `${fixo.tablet}px`, "--wd": `${fixo.desktop}px`, "--s": "16px" }
    : { "--wm": `${largura[0]}px`, "--wd": v(largura[1]), "--h": v(50), "--f15": v(15), "--f16": v(16), "--s": v(16) };
  const estilo = variaveis as React.CSSProperties;
  const conteudo = (
    <>
      <span>{children}</span>
      <IconeSeta className="size-[16px] tab:size-[var(--s)]" />
    </>
  );
  return externo ? (
    <a href={href} target="_blank" rel="noopener" className={classes} style={estilo}>
      {conteudo}
    </a>
  ) : (
    <Link href={href} className={classes} style={estilo}>
      {conteudo}
    </Link>
  );
}
