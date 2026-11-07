import Link from "next/link";
import { Foto } from "@/components/Foto";
import { IconeSeletor } from "@/components/Icones";
import { LinkMenu } from "@/components/LinkMenu";
import { MenuMobile } from "@/components/MenuMobile";
import { MENU, whatsappUrl } from "@/lib/site";

// Medidas do cabeçalho do original: 111px de altura em 1440px e 91px em 1100px
// (escala com a largura), menu em "pílula" verde translúcida e Home destacada.
const fluido = (a: number, b: number) => `clamp(${a}px, calc(${a}px + ${b - a} * ((100vw - 1100px) / 340)), ${b}px)`;

export function Cabecalho() {
  const s = MENU.servicos;
  return (
    <header className="sticky top-0 z-[300] bg-fundo text-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-fundo"
      >
        Pular para o conteúdo
      </a>

      {/* Desktop (>= 1001px) */}
      <div className="relative hidden desk:block" style={{ height: fluido(91, 111) }}>
        <Link href="/" aria-label="Grupo Concretiza, página inicial" className="absolute left-[5%] top-1/2 -translate-y-1/2" style={{ width: fluido(183, 240) }}>
          <Foto nome="logo-concretiza-branco" alt="" largura={240} className="h-auto w-full" />
        </Link>

        <nav
          aria-label="Principal"
          className="absolute top-1/2 flex -translate-y-1/2 items-center rounded-full bg-menta/40 px-[13px]"
          style={{ left: fluido(353, 532), height: fluido(47, 53), fontSize: fluido(14, 18) }}
        >
          <ul className="flex items-center gap-[9px]">
            {MENU.itens.map((item) => (
              <li key={item.href}>
                <LinkMenu href={item.href} className="px-[0.8em] py-[0.2em] leading-[1.6]">
                  {item.rotulo}
                </LinkMenu>
              </li>
            ))}
            <li className="menu-grupo relative">
              <button type="button" aria-haspopup="true" className="flex items-center gap-[0.35em] rounded-full px-[0.8em] py-[0.2em] leading-[1.6] hover:text-menta">
                {s.rotulo}
                <IconeSeletor className="w-[0.55em]" />
              </button>
              <div className="menu-sub invisible absolute left-0 top-[calc(100%+12px)] w-[164px] rounded-[4px] bg-[#e3ebd3] p-[9px] text-[#263017] opacity-0 shadow-lg transition-opacity duration-150">
                <p className="rounded-full bg-white px-[11px] py-[5px] text-[17px]">{s.grupo}</p>
                <ul className="mt-[6px] px-[9px] text-[13px] leading-[22px]">
                  {s.obras.map((o) => (
                    <li key={o.href}>
                      <Link href={o.href} className="block hover:underline">
                        {o.rotulo}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={s.energia.href} className="mt-[10px] block px-[11px] pb-[4px] text-[17px] hover:underline">
                  {s.energia.rotulo}
                </Link>
              </div>
            </li>
            {MENU.finais.map((item) => (
              <li key={item.href}>
                <LinkMenu href={item.href} className="px-[0.8em] py-[0.2em] leading-[1.6]">
                  {item.rotulo}
                </LinkMenu>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          className="absolute left-[82.08%] top-1/2 -translate-y-1/2"
          style={{ width: fluido(98, 128) }}
        >
          <Foto nome="whatsapp-horizontal" alt="" largura={128} className="h-auto w-full" />
        </a>
      </div>

      {/* Celular e tablet (< 1001px) */}
      <div className="flex h-[71px] items-center justify-between px-[20px] desk:hidden">
        <Link href="/" aria-label="Grupo Concretiza, página inicial" className="block w-[66px]">
          <Foto nome="logo-concretiza-branco" alt="" largura={66} className="h-auto w-full" />
        </Link>
        <div className="flex items-center gap-[6px]">
          <a href={whatsappUrl()} target="_blank" rel="noopener" aria-label="WhatsApp" className="block w-[40px]">
            <Foto nome="whatsapp-horizontal" alt="" largura={40} className="h-auto w-full" />
          </a>
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
