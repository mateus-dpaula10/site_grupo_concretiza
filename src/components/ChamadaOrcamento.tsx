import Link from "next/link";
import { IconeWhatsapp } from "@/components/Icones";
import { WHATSAPP_ORCAMENTO } from "@/lib/site";

// Faixa de chamada para orçamento, usada no fim das páginas internas.
export function ChamadaOrcamento({ titulo = "Vamos construir juntos?" }: { titulo?: string }) {
  return (
    <section aria-labelledby="chamada-titulo" className="sobre-escuro bg-marca text-white">
      <div className="container-site flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="chamada-titulo" className="titulo text-3xl sm:text-4xl">
            {titulo}
          </h2>
          <p className="mt-3 max-w-xl text-white/90">
            Conte-nos sobre o seu projeto e entraremos em contato para transformar a sua ideia em realidade.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-floresta hover:bg-menta"
          >
            <IconeWhatsapp className="size-5" />
            Chamar no WhatsApp
          </a>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border border-white/70 px-6 py-3.5 font-semibold hover:border-white hover:bg-white/10"
          >
            Enviar mensagem
          </Link>
        </div>
      </div>
    </section>
  );
}
