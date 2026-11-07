import Link from "next/link";
import { IconeEmail, IconeInstagram, IconeLinkedin, IconeLocal, IconeTelefone, IconeWhatsapp } from "@/components/Icones";
import { EMPRESA, MAPS_EMBED, whatsappUrl } from "@/lib/site";

const fluido = (a: number, b: number) => `clamp(${a}px, calc(${a}px + ${b - a} * ((100vw - 1100px) / 340)), ${b}px)`;

const REDES = [
  { href: whatsappUrl(), rotulo: "WhatsApp", Icone: IconeWhatsapp },
  { href: EMPRESA.instagram, rotulo: "Instagram", Icone: IconeInstagram },
  { href: EMPRESA.linkedin, rotulo: "LinkedIn", Icone: IconeLinkedin },
];

// Mesmos links do rodapé do original. "Orçamento" e "Contato" levam ao formulário da home;
// "Política de privacidade" e "LGPD" agora têm página (no Wix não levavam a lugar nenhum).
const MENU_RODAPE = [
  { href: "/", rotulo: "Home" },
  { href: "/servicos", rotulo: "Serviços" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/#contato", rotulo: "Orçamento" },
];
const RECURSOS = [
  { href: "/blog", rotulo: "Blog" },
  { href: "/contato", rotulo: "Contato" },
  { href: "/politica-de-privacidade", rotulo: "Política de privacidade" },
  { href: "/politica-de-privacidade#lgpd", rotulo: "LGPD" },
];

function Coluna({ titulo, links }: { titulo: string; links: { href: string; rotulo: string }[] }) {
  return (
    <nav aria-label={titulo}>
      <h3 className="font-display text-[20px] font-semibold leading-[1.3] tab:text-[length:var(--h3)]">{titulo}</h3>
      <ul className="mt-[18px] grid gap-[12px] text-[14px] leading-[1.2] text-cinza tab:mt-[22px] tab:text-[length:var(--link)]" style={{ rowGap: "var(--passo)" }}>
        {links.map((l) => (
          <li key={l.rotulo}>
            <Link href={l.href} className="hover:text-white">
              {l.rotulo}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Rodape() {
  const vars = {
    "--h3": fluido(22, 24.75),
    "--link": fluido(14, 18),
    "--passo": fluido(9, 12),
  } as React.CSSProperties;
  return (
    <footer className="caixa bg-floresta pb-[20px] pt-[31px] tab:pb-[30px] tab:pt-[87px]" style={vars}>
      <div className="grid gap-y-[32px] tab:grid-cols-[39.9%_17.4%_19.4%_1fr]">
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

        <Coluna titulo="Menu" links={MENU_RODAPE} />
        <Coluna titulo="Recursos" links={RECURSOS} />

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
            <p className="flex items-center gap-[11px] tab:gap-[18px]">
              <IconeLocal className="size-[20px] shrink-0 text-menta-escuro tab:size-[26px]" />
              <span className="max-w-[16em]">{EMPRESA.endereco.rodape}</span>
            </p>
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
