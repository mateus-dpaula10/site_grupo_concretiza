import { FormContato } from "@/components/FormContato";
import { IconeEmail, IconeLocal, IconeTelefone, IconeWhatsapp } from "@/components/Icones";
import { EMPRESA, MAPS_URL, WHATSAPP_ORCAMENTO } from "@/lib/site";

// Seção "Vamos construir juntos?" com os canais diretos e o formulário.
// `nivelTitulo` permite usá-la como H1 na página /contato.
export function BlocoContato({ nivelTitulo = "h2" }: { nivelTitulo?: "h1" | "h2" }) {
  const Titulo = nivelTitulo;
  const Subtitulo = nivelTitulo === "h1" ? "h2" : "h3";
  const e = EMPRESA.endereco;
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="bg-concreto-escuro">
      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1fr_1.35fr] lg:py-24">
        <div>
          <Titulo id="contato-titulo" className="titulo text-4xl sm:text-5xl">
            Vamos construir juntos?
          </Titulo>
          <p className="texto-corrido mt-5 text-grafite">
            Conte-nos sobre o seu projeto e entraremos em contato para transformar a sua ideia em realidade.
          </p>
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-floresta px-6 py-4 font-semibold text-white hover:bg-marca"
          >
            <IconeWhatsapp className="size-6 text-menta" />
            WhatsApp {EMPRESA.whatsapp}
          </a>
          <ul className="mt-8 grid gap-4 text-tinta">
            <li>
              <a href={`tel:${EMPRESA.telefoneE164}`} className="flex items-center gap-3 hover:text-marca">
                <IconeTelefone className="size-5 text-marca" />
                {EMPRESA.telefone}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMPRESA.email}`} className="flex items-center gap-3 break-all hover:text-marca">
                <IconeEmail className="size-5 shrink-0 text-marca" />
                {EMPRESA.email}
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="flex items-start gap-3 hover:text-marca">
                <IconeLocal className="mt-0.5 size-5 shrink-0 text-marca" />
                <span>
                  {e.rua}, {e.bairro}, {e.cidade} ({e.uf})
                  <span className="block text-sm text-grafite underline underline-offset-2">Ver no mapa</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 sm:p-10">
          <Subtitulo className="text-2xl font-bold [font-stretch:110%]">Contate-nos</Subtitulo>
          <div className="mt-6">
            <FormContato />
          </div>
        </div>
      </div>
    </section>
  );
}
