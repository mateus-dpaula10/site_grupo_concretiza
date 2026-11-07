// Loader do next/image para o export estático: aponta para as variantes WebP
// pré-geradas por scripts/otimizar-imagens.mjs (public/img/<nome>-<largura>.webp).
// `src` é sempre "/img/<nome>" (sem extensão).
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  return `${src}-${width}.webp`;
}
