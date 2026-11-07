import Link from "next/link";
import { Foto } from "@/components/Foto";
import { IconeEmail, IconeInstagram, IconeLinkedin, IconeLocal, IconeTelefone, IconeWhatsapp } from "@/components/Icones";
import { EMPRESA, MAPS_URL, whatsappUrl } from "@/lib/site";

const REDES = [
  { href: whatsappUrl(), rotulo: "WhatsApp", Icone: IconeWhatsapp },
  { href: EMPRESA.instagram, rotulo: "Instagram", Icone: IconeInstagram },
  { href: EMPRESA.linkedin, rotulo: "LinkedIn", Icone: IconeLinkedin },
];

const MENU_RODAPE = [
  { href: "/", rotulo: "Home" },
  { href: "/servicos", rotulo: "Serviços" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/contato", rotulo: "Orçamento" },
];

const RECURSOS = [
  { href: "/blog", rotulo: "Blog" },
  { href: "/contato", rotulo: "Contato" },
  { href: "/politica-de-privacidade", rotulo: "Política de privacidade" },
  { href: "/politica-de-privacidade#lgpd", rotulo: "LGPD" },
];

export function Rodape() {
  const e = EMPRESA.endereco;
  return (
    <footer className="sobre-escuro bg-floresta text-white/85">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Foto nome="logo-concretiza-branco" alt="Grupo Concretiza" largura={200} className="h-auto w-[200px]" />
          <p className="mt-5 max-w-xs text-white">
            <strong>Grupo Concretiza:</strong> {EMPRESA.slogan}
            <br />
            Desde {EMPRESA.desde} construindo história.
          </p>
          <ul className="mt-6 flex gap-2" aria-label="Redes sociais">
            {REDES.map(({ href, rotulo, Icone }) => (
              <li key={rotulo}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="grid size-11 place-items-center rounded-full border border-white/25 hover:border-menta hover:text-menta"
                >
                  <Icone className="size-5" />
                  <span className="sr-only">{rotulo}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="rodape-menu">
          <h2 id="rodape-menu" className="font-semibold text-white">
            Menu
          </h2>
          <ul className="mt-4 grid gap-1">
            {MENU_RODAPE.map((l) => (
              <li key={l.rotulo}>
                <Link href={l.href} className="inline-block py-1.5 hover:text-menta">
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="rodape-recursos">
          <h2 id="rodape-recursos" className="font-semibold text-white">
            Recursos
          </h2>
          <ul className="mt-4 grid gap-1">
            {RECURSOS.map((l) => (
              <li key={l.rotulo}>
                <Link href={l.href} className="inline-block py-1.5 hover:text-menta">
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-semibold text-white">Contato</h2>
          <address className="mt-4 grid gap-3 not-italic">
            <a href={`mailto:${EMPRESA.email}`} className="flex items-start gap-3 py-0.5 hover:text-menta">
              <IconeEmail className="mt-0.5 size-5 shrink-0 text-menta" />
              <span className="break-all">{EMPRESA.email}</span>
            </a>
            <a href={`tel:${EMPRESA.telefoneE164}`} className="flex items-start gap-3 py-0.5 hover:text-menta">
              <IconeTelefone className="mt-0.5 size-5 shrink-0 text-menta" />
              {EMPRESA.telefone}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="flex items-start gap-3 py-0.5 hover:text-menta">
              <IconeLocal className="mt-0.5 size-5 shrink-0 text-menta" />
              <span>
                {e.rua}, {e.bairro}
                <br />
                {e.cidade} ({e.uf})
              </span>
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-6 text-sm text-white/70">© {new Date().getFullYear()} Grupo Concretiza.</p>
      </div>
    </footer>
  );
}
