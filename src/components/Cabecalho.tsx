import Link from "next/link";
import { Foto } from "@/components/Foto";
import { IconeSeletor, IconeWhatsapp } from "@/components/Icones";
import { MenuMobile } from "@/components/MenuMobile";
import { MENU, WHATSAPP_ORCAMENTO } from "@/lib/site";

export function Cabecalho() {
  return (
    <header className="sobre-escuro sticky top-0 z-40 bg-floresta text-white">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-floresta"
      >
        Pular para o conteúdo
      </a>
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link href="/" className="shrink-0" aria-label="Grupo Concretiza, página inicial">
          <Foto nome="logo-concretiza-branco" alt="" largura={168} prioridade="cedo" className="h-auto w-[148px] lg:w-[168px]" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[0.95rem]">
            {MENU.map((item) =>
              item.filhos ? (
                <li key={item.href} className="menu-grupo relative">
                  <Link href={item.href} className="flex items-center gap-1 rounded px-3 py-2 hover:text-menta" aria-haspopup="true">
                    {item.rotulo}
                    <IconeSeletor className="size-4" />
                  </Link>
                  <ul className="menu-sub invisible absolute left-0 top-full w-64 -translate-y-1 border-t-2 border-menta bg-white py-2 text-tinta opacity-0 shadow-xl transition duration-150">
                    {item.filhos.map((f) => (
                      <li key={f.href}>
                        <Link href={f.href} className="block px-4 py-2.5 hover:bg-concreto focus-visible:bg-concreto">
                          {f.rotulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded px-3 py-2 hover:text-menta">
                    {item.rotulo}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_ORCAMENTO}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 rounded-full bg-menta px-4 py-2.5 text-sm font-semibold text-floresta transition-colors hover:bg-white"
          >
            <IconeWhatsapp className="size-5" />
            <span className="hidden xs:inline">Pedir orçamento</span>
            <span className="xs:hidden">WhatsApp</span>
          </a>
          <MenuMobile itens={MENU} />
        </div>
      </div>
    </header>
  );
}
