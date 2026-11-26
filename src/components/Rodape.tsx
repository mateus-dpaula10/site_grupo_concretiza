import Link from "next/link";
import { IconeEmail, IconeGoogle, IconeInstagram, IconeLinkedin, IconeLocal, IconeTelefone, IconeWhatsapp } from "@/components/Icones";
import { EMPRESA, GOOGLE_PERFIL, LINK_FORNECEDOR, MAPS_EMBED, MAPS_URL, WHATSAPP_SITE } from "@/lib/site";

const fluido = (a: number, b: number) => `clamp(${a}px, calc(${a}px + ${b - a} * ((100vw - 1100px) / 340)), ${b}px)`;

const REDES = [
  { href: WHATSAPP_SITE, rotulo: "WhatsApp", Icone: IconeWhatsapp },
  { href: EMPRESA.instagram, rotulo: "Instagram", Icone: IconeInstagram },
  { href: EMPRESA.linkedin, rotulo: "LinkedIn", Icone: IconeLinkedin },
  { href: GOOGLE_PERFIL, rotulo: "Google (avaliações)", Icone: IconeGoogle },
];

// Rodapé revisto com o cliente em 25/11/2026: saíram a coluna "Menu", o título "Recursos", o link
// "Contato" e a razão social/CNPJ; "Seja nosso fornecedor" ficou grande e pulsando (.pulsar, globals.css).

export function Rodape() {
  const vars = {
    "--h3": fluido(22, 24.75),
    "--link": fluido(14, 18),
    "--passo": fluido(9, 12),
  } as React.CSSProperties;
  return (
    <footer className="caixa bg-floresta pb-[20px] pt-[31px] tab:pb-[30px] tab:pt-[87px]" style={vars}>
      <div className="grid gap-y-[32px] tab:grid-cols-2 tab:gap-x-[40px] desk:grid-cols-[39.9%_1fr_23.3%] desk:gap-x-0">
        <div>
          <p className="font-display text-[18px] font-medium leading-[1.6] tab:text-[length:var(--tagline)]" style={{ "--tagline": fluido(18, 22.5) } as React.CSSProperties}>
            <strong className="font-bold">Grupo Concretiza:</strong> Projetando ideias,
            <br className="hidden tab:inline" /> concretizando sonhos.
            <br />
            Desde {EMPRESA.desde} construindo história.
          </p>
          <ul className="mt-[24px] flex gap-[10px] tab:mt-[35px] tab:gap-[16px]" aria-label="Redes sociais">
            {REDES.map(({ href, rotulo, Icone }) => (
              <li key={rotulo}>
                <a href={href} target="_blank" rel="noopener" className="block size-[26px] tab:size-[36px]">
                  <Icone className="size-full" />
                  <span className="sr-only">{rotulo}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Fornecedores e privacidade" className="desk:pr-[40px]">
          <a
            href={LINK_FORNECEDOR}
            target="_blank"
            rel="noopener"
            className="pulsar inline-flex items-center rounded-full bg-lima px-[22px] py-[12px] font-display text-[18px] font-semibold leading-[1.2] text-fundo hover:bg-white tab:px-[28px] tab:py-[14px] tab:text-[length:var(--forn)]"
            style={{ "--forn": fluido(19, 23) } as React.CSSProperties}
          >
            Seja nosso fornecedor
          </a>
          <p className="mt-[22px] text-[14px] leading-[1.2] text-cinza tab:mt-[28px] tab:text-[length:var(--link)]">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Privacidade e LGPD
            </Link>
          </p>
        </nav>

        <div>
          <h3 className="font-display text-[20px] font-semibold leading-[1.3] tab:text-[length:var(--h3)]">Contato</h3>
          <address className="mt-[20px] grid gap-[14px] text-[14px] not-italic leading-[1.2] text-cinza tab:mt-[25px] tab:gap-[22px] tab:text-[length:var(--link)]">
            <a href={`mailto:${EMPRESA.email}`} className="flex items-center gap-[11px] hover:text-white tab:gap-[18px]">
              <IconeEmail className="size-[20px] shrink-0 text-menta-escuro tab:size-[26px]" />
              <span className="tab:text-[0.875em]">{EMPRESA.email}</span>
            </a>
            <a href={`tel:${EMPRESA.telefoneE164}`} className="flex items-center gap-[11px] hover:text-white tab:gap-[18px]">
              <IconeTelefone className="size-[20px] shrink-0 text-menta-escuro tab:size-[26px]" />
              {EMPRESA.telefone}
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="flex items-center gap-[11px] hover:text-white tab:gap-[18px]">
              <IconeLocal className="size-[20px] shrink-0 text-menta-escuro tab:size-[26px]" />
              <span className="max-w-[16em]">
                {EMPRESA.endereco.rodape}
                <br />
                CEP {EMPRESA.endereco.cep}
              </span>
            </a>
          </address>
          <div className="mt-[40px] aspect-[351/190] w-full overflow-hidden bg-[#3a3a3a] tab:mt-[48px] tab:aspect-[304/193] tab:max-w-[304px]">
            <iframe
              title="Mapa: Grupo Concretiza na Av. Getúlio Vargas, 72, Maringá"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0 grayscale-[0.9] invert-[0.92] hue-rotate-180"
            />
          </div>
        </div>
      </div>

      <div className="mt-[40px] border-t border-white/10 pt-[24px] text-center text-[16px] leading-[1.4] text-cinza tab:mt-[60px] tab:text-[length:var(--copy)]" style={{ "--copy": fluido(16, 20.25) } as React.CSSProperties}>
        <p>
          © 2026 by Grupo Concretiza.&nbsp; Desenvolvido por{" "}
          <a href="https://www.instagram.com/casa_publicidade/" target="_blank" rel="noopener" className="text-menta-escuro underline underline-offset-2">
            Casa Publicidade
          </a>
          <span className="text-lima">.</span>
        </p>
      </div>
    </footer>
  );
}
