"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { IconeEmail, IconeWhatsapp } from "@/components/Icones";
import { EMPRESA, whatsappUrl } from "@/lib/site";

// O site é estático (sem servidor), então o formulário não grava nada: ele monta a
// mensagem e abre o WhatsApp da empresa ou o e-mail do visitante com o texto pronto.
// Mesmos campos do formulário do site antigo (Wix).
const campo =
  "mt-1.5 block w-full rounded-sm border border-grafite/40 bg-white px-3.5 py-3 text-base text-tinta placeholder:text-grafite/70 focus:border-marca focus:outline-none focus:ring-2 focus:ring-marca/40";
const rotulo = "block text-sm font-semibold text-tinta";

export function FormContato() {
  const [status, setStatus] = useState<null | { canal: "whatsapp" | "email"; link: string }>(null);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const canal = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value") === "email" ? "email" : "whatsapp";
    const nome = `${dados.get("nome") ?? ""} ${dados.get("sobrenome") ?? ""}`.trim();
    const telefone = String(dados.get("telefone") ?? "").trim();
    const identificacao = [nome && `Nome: ${nome}`, `E-mail: ${dados.get("email")}`, telefone && `Telefone: ${telefone}`]
      .filter(Boolean)
      .join("\n");
    const texto = [
      "Olá! Vim pelo site e gostaria de falar sobre um projeto.",
      identificacao,
      String(dados.get("mensagem") ?? "").trim(),
    ].join("\n\n");

    const link =
      canal === "whatsapp"
        ? whatsappUrl(texto)
        : `mailto:${EMPRESA.email}?subject=${encodeURIComponent(`Contato pelo site${nome ? `: ${nome}` : ""}`)}&body=${encodeURIComponent(texto)}`;
    if (canal === "whatsapp") window.open(link, "_blank", "noopener");
    else window.location.href = link;
    setStatus({ canal, link });
  }

  return (
    <form onSubmit={enviar} className="grid gap-5 sm:grid-cols-2" aria-describedby="form-aviso">
      <div>
        <label htmlFor="nome" className={rotulo}>
          Nome
        </label>
        <input id="nome" name="nome" autoComplete="given-name" className={campo} />
      </div>
      <div>
        <label htmlFor="sobrenome" className={rotulo}>
          Sobrenome
        </label>
        <input id="sobrenome" name="sobrenome" autoComplete="family-name" className={campo} />
      </div>
      <div>
        <label htmlFor="email" className={rotulo}>
          E-mail <span className="font-normal text-grafite">(obrigatório)</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={campo} />
      </div>
      <div>
        <label htmlFor="telefone" className={rotulo}>
          Telefone
        </label>
        <input id="telefone" name="telefone" type="tel" autoComplete="tel" inputMode="tel" className={campo} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="mensagem" className={rotulo}>
          Mensagem <span className="font-normal text-grafite">(obrigatório)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Conte o tipo de obra, a cidade e o prazo que você tem em mente."
          className={campo}
        />
      </div>
      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button
          type="submit"
          value="whatsapp"
          className="inline-flex items-center gap-2 rounded-full bg-marca px-6 py-3.5 font-semibold text-white hover:bg-floresta"
        >
          <IconeWhatsapp className="size-5" />
          Enviar pelo WhatsApp
        </button>
        <button
          type="submit"
          value="email"
          className="inline-flex items-center gap-2 rounded-full border border-marca px-6 py-3.5 font-semibold text-marca hover:bg-marca hover:text-white"
        >
          <IconeEmail className="size-5" />
          Enviar por e-mail
        </button>
      </div>
      <p id="form-aviso" className="text-sm text-grafite sm:col-span-2">
        Os dados vão direto para a conversa com a nossa equipe e são usados só para responder ao seu contato.{" "}
        <Link href="/politica-de-privacidade" className="underline underline-offset-2 hover:text-marca">
          Política de privacidade
        </Link>
        .
      </p>
      <p role="status" className="text-sm font-semibold text-marca sm:col-span-2">
        {status &&
          (status.canal === "whatsapp" ? (
            <>
              Abrimos o WhatsApp com a sua mensagem pronta.{" "}
              <a href={status.link} target="_blank" rel="noopener" className="underline underline-offset-2">
                Abrir de novo
              </a>
            </>
          ) : (
            <>
              Abrimos o seu aplicativo de e-mail. Se ele não abriu, escreva para{" "}
              <a href={`mailto:${EMPRESA.email}`} className="underline underline-offset-2">
                {EMPRESA.email}
              </a>
              .
            </>
          ))}
      </p>
    </form>
  );
}
