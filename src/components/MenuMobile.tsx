"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { IconeFechar, IconeMenu } from "@/components/Icones";
import type { ItemMenu } from "@/lib/site";

// Único pedaço interativo do cabeçalho: o menu do celular.
export function MenuMobile({ itens }: { itens: ItemMenu[] }) {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();
  const id = useId();

  // Fecha ao navegar para outra página.
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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={aberto}
        aria-controls={id}
        onClick={() => setAberto((v) => !v)}
        className="grid size-11 place-items-center rounded-full border border-white/25 hover:border-menta"
      >
        {aberto ? <IconeFechar className="size-6" /> : <IconeMenu className="size-6" />}
        <span className="sr-only">{aberto ? "Fechar menu" : "Abrir menu"}</span>
      </button>
      <nav
        id={id}
        aria-label="Principal"
        hidden={!aberto}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-floresta px-4 pb-10 pt-4"
      >
        <ul className="text-lg">
          {itens.map((item) => (
            <li key={item.href} className="border-b border-white/10">
              <Link href={item.href} onClick={() => setAberto(false)} className="block py-3.5 font-semibold">
                {item.rotulo}
              </Link>
              {item.filhos && (
                <ul className="-mt-1 mb-3 grid gap-0.5 border-l border-menta/50 pl-4 text-base text-white/85">
                  {item.filhos.map((f) => (
                    <li key={f.href}>
                      <Link href={f.href} onClick={() => setAberto(false)} className="block py-2">
                        {f.rotulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
