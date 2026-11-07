import type { Metadata } from "next";
import Link from "next/link";
import { WHATSAPP_ORCAMENTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NaoEncontrada() {
  return (
    <section className="container-site py-24 lg:py-32">
      <p className="titulo-condensado text-3xl text-marca">Erro 404</p>
      <h1 className="titulo mt-3 max-w-3xl text-5xl sm:text-6xl">Esta página não existe ou mudou de endereço.</h1>
      <p className="texto-corrido mt-6 text-grafite">
        O site foi reorganizado. Use o menu acima ou siga por um dos caminhos abaixo.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-full bg-floresta px-6 py-3.5 font-semibold text-white hover:bg-marca">
          Ir para a página inicial
        </Link>
        <Link href="/servicos" className="rounded-full border border-floresta px-6 py-3.5 font-semibold hover:bg-white">
          Ver serviços
        </Link>
        <a href={WHATSAPP_ORCAMENTO} target="_blank" rel="noopener" className="rounded-full border border-floresta px-6 py-3.5 font-semibold hover:bg-white">
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
