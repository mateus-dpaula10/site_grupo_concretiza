import Image from "next/image";
import dimensoes from "@/lib/imagens.gerado.json";

type Props = {
  nome: string;
  alt: string;
  className?: string;
  /** Largura responsiva (atributo sizes). Use quando a imagem muda de tamanho com a tela. */
  sizes?: string;
  /** Largura fixa em px na tela (logos). Gera só 1x/2x no srcset, em vez da lista inteira. */
  largura?: number;
  /** "lcp": a imagem principal da dobra (alta prioridade); "cedo": visível no topo, sem lazy-load. */
  prioridade?: "lcp" | "cedo";
  /** Preenche o contêiner pai (que precisa ter position e tamanho). */
  fill?: boolean;
};

const mapa = dimensoes as Record<string, { w: number; h: number }>;

// Imagem responsiva servida pelas variantes WebP de public/img (ver scripts/otimizar-imagens.mjs).
export function Foto({ nome, alt, sizes, largura, className, prioridade: nivel, fill }: Props) {
  const d = mapa[nome];
  if (!d) throw new Error(`Imagem sem variantes geradas: ${nome}. Rode npm run imagens.`);
  const src = `/img/${nome}`;
  const prioridade =
    nivel === "lcp" ? { loading: "eager" as const, fetchPriority: "high" as const } : nivel === "cedo" ? { loading: "eager" as const } : {};
  if (fill) return <Image src={src} alt={alt} sizes={sizes} className={className} fill {...prioridade} />;
  if (largura) {
    const altura = Math.round((largura * d.h) / d.w);
    return <Image src={src} alt={alt} width={largura} height={altura} className={className} {...prioridade} />;
  }
  return <Image src={src} alt={alt} sizes={sizes} className={className} width={d.w} height={d.h} {...prioridade} />;
}
