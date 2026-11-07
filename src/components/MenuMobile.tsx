"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { IconeFechar, IconeMenu, IconeSeletor } from "@/components/Icones";
import { LinkMenu } from "@/components/LinkMenu";
import { MENU } from "@/lib/site";

// Menu do celular igual ao do Wix: painel verde-oliva vindo da direita, caixa do menu
// verde translúcida, Serviços expansível (Construtora > obras, Energia).
export function MenuMobile() {
  const [aberto, setAberto] = useState(false);
  const [servicos, setServicos] = useState(false);
  const pathname = usePathname();
  const id = useId();

  const [ultimaRota, setUltimaRota] = useState(pathname);
  if (ultimaRota !== pathname) {
    setUltimaRota(pathname);
    setAberto(false);
  }

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto]);

  const fechar = () => setAberto(false);
  const s = MENU.servicos;

  return (
    <>
      <button type="button" aria-expanded={aberto} aria-controls={id} onClick={() => setAberto(true)} className="grid size-[40px] place-items-center">
        <IconeMenu className="w-[26px]" />
        <span className="sr-only">Abrir menu</span>
      </button>
      <div id={id} hidden={!aberto} className="fixed inset-0 z-50">
        <div className="absolute inset-0 bg-black/50" onClick={fechar} aria-hidden />
        <nav aria-label="Principal" className="absolute bottom-0 right-0 top-0 w-[90%] overflow-y-auto bg-oliva pt-[89px]">
          <button type="button" onClick={fechar} className="absolute right-[12px] top-[20px] grid size-[40px] place-items-center">
            <IconeFechar className="w-[22px]" />
            <span className="sr-only">Fechar menu</span>
          </button>
          <ul className="ml-[20px] w-[264px] rounded-[8px] bg-menta/40 p-[14px] text-[18px] leading-[1.6]">
            {MENU.itens.map((item) => (
              <li key={item.href} className="py-[5px]">
                <LinkMenu href={item.href} onClick={fechar} className="inline-block px-[14px] py-[1px]">
                  {item.rotulo}
                </LinkMenu>
              </li>
            ))}
            <li className="py-[5px]">
              <button
                type="button"
                aria-expanded={servicos}
                onClick={() => setServicos((v) => !v)}
                className={`inline-flex items-center gap-[8px] rounded-full px-[14px] py-[1px] ${servicos ? "bg-menta/40" : ""}`}
              >
                {s.rotulo}
                <IconeSeletor className={`w-[10px] transition-transform ${servicos ? "rotate-180" : ""}`} />
              </button>
              {servicos && (
                <div className="pb-[10px] pl-[36px] pt-[12px]">
                  <p className="text-[15px] text-[#263017]/70">{s.grupo}</p>
                  <ul className="mt-[6px] text-[14px] leading-[24px] text-fundo">
                    {s.obras.map((o) => (
                      <li key={o.href}>
                        <Link href={o.href} onClick={fechar} className="-ml-[4px] block">
                          {o.rotulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.energia.href} onClick={fechar} className="mt-[16px] block text-[15px] text-[#263017]/70">
                    {s.energia.rotulo}
                  </Link>
                </div>
              )}
            </li>
            {MENU.finais.map((item) => (
              <li key={item.href} className="py-[5px]">
                <LinkMenu href={item.href} onClick={fechar} className="inline-block px-[14px] py-[1px]">
                  {item.rotulo}
                </LinkMenu>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
