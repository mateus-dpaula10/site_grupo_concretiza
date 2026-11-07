"use client";

import { useState, type FormEvent } from "react";
import { whatsappUrl } from "@/lib/site";
import { v } from "@/lib/medidas";

// Mesmo formulário do Wix (Nome, Sobrenome, Email*, Telefone, Mensagem*, Enviar).
// O site é estático, então o envio monta a mensagem e abre o WhatsApp da empresa.
const campo =
  "mt-[8px] block h-[40px] w-full border border-menta/60 bg-transparent px-[12px] text-[16px] text-white placeholder:text-white focus:border-menta focus:outline-none tab:mt-[9px]";
const rotulo = "block text-[14px] leading-[1.4] text-white";

export function FormContato() {
  const [enviado, setEnviado] = useState<string | null>(null);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nome = `${d.get("nome") ?? ""} ${d.get("sobrenome") ?? ""}`.trim();
    const tel = String(d.get("telefone") ?? "").trim();
    const texto = [
      "Olá! Vim pelo site e gostaria de falar sobre um projeto.",
      [nome && `Nome: ${nome}`, `E-mail: ${d.get("email")}`, tel && `Telefone: ${tel}`].filter(Boolean).join("\n"),
      String(d.get("mensagem") ?? "").trim(),
    ].join("\n\n");
    const link = whatsappUrl(texto);
    window.open(link, "_blank", "noopener");
    setEnviado(link);
  }

  return (
    <form
      onSubmit={enviar}
      className="border border-menta px-[26px] pb-[27px] pt-[24px] tab:px-[var(--px)] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
      style={{ "--px": v(25), "--pt": v(22), "--pb": v(25) } as React.CSSProperties}
    >
      <p className="text-[18px] leading-[1.5]">Contate-nos</p>
      <div className="mt-[32px] grid gap-y-[25px] tab:mt-[var(--mt)] tab:grid-cols-2 tab:gap-x-[var(--gx)] tab:gap-y-[var(--gy)]" style={{ "--mt": v(35), "--gx": v(37), "--gy": v(25) } as React.CSSProperties}>
        <div>
          <label htmlFor="nome" className={rotulo}>
            Nome
          </label>
          <input id="nome" name="nome" placeholder="Nome" autoComplete="given-name" className={campo} />
        </div>
        <div>
          <label htmlFor="sobrenome" className={rotulo}>
            Sobrenome
          </label>
          <input id="sobrenome" name="sobrenome" placeholder="Sobrenome" autoComplete="family-name" className={campo} />
        </div>
        <div>
          <label htmlFor="email" className={rotulo}>
            Email *
          </label>
          <input id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className={campo} />
        </div>
        <div>
          <label htmlFor="telefone" className={rotulo}>
            Telefone
          </label>
          <div className="relative">
            <svg aria-hidden viewBox="0 0 22 14" className="pointer-events-none absolute left-[12px] top-[21px] w-[22px] tab:top-[22px]">
              <rect width="22" height="14" fill="#009c3b" />
              <path d="M11 1.5 20.5 7 11 12.5 1.5 7z" fill="#ffdf00" />
              <circle cx="11" cy="7" r="3.2" fill="#002776" />
            </svg>
            <input id="telefone" name="telefone" type="tel" placeholder="Telefone" autoComplete="tel" inputMode="tel" className={`${campo} pl-[50px]`} />
          </div>
        </div>
        <div className="tab:col-span-2">
          <label htmlFor="mensagem" className={rotulo}>
            Mensagem *
          </label>
          <textarea id="mensagem" name="mensagem" required placeholder="Mensagem" rows={3} className={`${campo} h-[74px] resize-y py-[8px]`} />
        </div>
      </div>
      <button
        type="submit"
        className="mt-[32px] h-[41px] w-full bg-menta text-[16px] text-white hover:bg-menta-escuro tab:mt-[var(--mt)] tab:w-[calc(50%-var(--gx)/2)]"
        style={{ "--mt": v(32), "--gx": v(37) } as React.CSSProperties}
      >
        Enviar
      </button>
      <p role="status" className="mt-[12px] text-[14px] text-cinza empty:hidden">
        {enviado && (
          <>
            Abrimos o WhatsApp com a sua mensagem.{" "}
            <a href={enviado} target="_blank" rel="noopener" className="underline">
              Abrir de novo
            </a>
          </>
        )}
      </p>
    </form>
  );
}
