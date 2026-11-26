"use client";

import { upload } from "@vercel/blob/client";
import { useState, type FormEvent } from "react";
import { ANEXO, ANEXO_ACCEPT, caminhoAnexo } from "@/lib/anexo";
import { whatsappUrl } from "@/lib/site";
import { v } from "@/lib/medidas";

// Mesmo formulário do Wix (Nome, Sobrenome, Email*, Telefone, Mensagem*, Enviar), mais
// "Endereço da obra" e o anexo pedidos pelo cliente em 25/11/2026. O envio monta a mensagem e
// abre o WhatsApp da empresa; se houver anexo, ele sobe antes para o Vercel Blob (/api/anexo)
// e o link do arquivo vai junto na mensagem.
const campo =
  "mt-[8px] block h-[40px] w-full border border-menta/60 bg-transparent px-[12px] text-[16px] text-white placeholder:text-white focus:border-menta focus:outline-none tab:mt-[9px]";
const rotulo = "block text-[14px] leading-[1.4] text-white";
const mb = (bytes: number) => `${Math.round(bytes / 1024 / 1024)} MB`;

type Estado =
  | { tipo: "parado" }
  | { tipo: "enviando"; pct: number }
  | { tipo: "erro"; msg: string }
  | { tipo: "pronto"; link: string };

export function FormContato() {
  const [estado, setEstado] = useState<Estado>({ tipo: "parado" });

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (estado.tipo === "enviando") return;
    const d = new FormData(e.currentTarget);
    const arquivo = d.get("arquivo");
    const temArquivo = arquivo instanceof File && arquivo.size > 0;

    let linkArquivo = "";
    let janela: Window | null = null;
    if (temArquivo) {
      const { caminho, extensao } = caminhoAnexo(arquivo.name);
      if (!(extensao in ANEXO.tipos)) return setEstado({ tipo: "erro", msg: "Tipo de arquivo não aceito. Envie PDF, imagem, DWG ou ZIP." });
      if (arquivo.size > ANEXO.maxBytes) return setEstado({ tipo: "erro", msg: `O arquivo passa de ${mb(ANEXO.maxBytes)}. Envie um menor ou mande pelo WhatsApp depois.` });
      // A aba do WhatsApp é aberta já no clique (depois do envio o navegador bloquearia o pop-up).
      janela = window.open("", "_blank");
      if (janela) janela.opener = null;
      setEstado({ tipo: "enviando", pct: 0 });
      try {
        const blob = await upload(caminho, arquivo, {
          access: "public",
          handleUploadUrl: "/api/anexo",
          contentType: ANEXO.tipos[extensao],
          multipart: arquivo.size > 8 * 1024 * 1024,
          onUploadProgress: ({ percentage }) => setEstado({ tipo: "enviando", pct: Math.round(percentage) }),
        });
        linkArquivo = blob.url;
      } catch {
        janela?.close();
        return setEstado({ tipo: "erro", msg: "Não conseguimos enviar o arquivo. Tente de novo ou envie sem anexo." });
      }
    }

    const nome = `${d.get("nome") ?? ""} ${d.get("sobrenome") ?? ""}`.trim();
    const tel = String(d.get("telefone") ?? "").trim();
    const endereco = String(d.get("endereco") ?? "").trim();
    const texto = [
      "Olá! Vim pelo site e gostaria de falar sobre um projeto.",
      [
        nome && `Nome: ${nome}`,
        `E-mail: ${d.get("email")}`,
        tel && `Telefone: ${tel}`,
        endereco && `Endereço da obra: ${endereco}`,
        linkArquivo && `Arquivo do projeto: ${linkArquivo}`,
      ]
        .filter(Boolean)
        .join("\n"),
      String(d.get("mensagem") ?? "").trim(),
    ].join("\n\n");
    const link = whatsappUrl(texto);
    if (janela) janela.location.href = link;
    else window.open(link, "_blank", "noopener");
    setEstado({ tipo: "pronto", link });
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
            {/* Bandeira e seta nas medidas do Wix. Só visual: aqui não há seletor de país. */}
            <span aria-hidden className="pointer-events-none absolute left-[13px] top-[12px] flex items-center">
              <svg viewBox="0 0 224 139" className="h-[13.9px] w-[22.4px]">
                <rect width="224" height="139" fill="#fff" />
                <rect x="4" y="4" width="216" height="131" fill="#3f9c40" />
                <path d="M40 69.5 112 17l72 52.5L112 122z" fill="#f5d327" />
                <circle cx="112" cy="69.5" r="33" fill="#2b2f7e" />
                <path d="M80 62q34-8 64 18" fill="none" stroke="#fff" strokeWidth="7" />
              </svg>
              <svg viewBox="0 0 20 20" className="size-[16px] text-white">
                <path d="M4.7 7 10.35 12.65 16 7" fill="none" stroke="currentColor" />
              </svg>
            </span>
            <input id="telefone" name="telefone" type="tel" placeholder="Telefone" autoComplete="tel" inputMode="tel" className={`${campo} pl-[54px]`} />
          </div>
        </div>
        {/* Pedido do cliente (25/11/2026). */}
        <div className="tab:col-span-2">
          <label htmlFor="endereco" className={rotulo}>
            Endereço da obra (opcional)
          </label>
          <input id="endereco" name="endereco" placeholder="Endereço da obra" autoComplete="street-address" className={campo} />
        </div>
        <div className="tab:col-span-2">
          <label htmlFor="mensagem" className={rotulo}>
            Mensagem *
          </label>
          <textarea id="mensagem" name="mensagem" required placeholder="Mensagem" rows={3} className={`${campo} h-[74px] resize-y py-[8px]`} />
        </div>
        <div className="tab:col-span-2">
          <label htmlFor="arquivo" className={rotulo}>
            Caso queira fazer uma análise do seu projeto, anexe o arquivo (opcional)
          </label>
          <input
            id="arquivo"
            name="arquivo"
            type="file"
            accept={ANEXO_ACCEPT}
            aria-describedby="arquivo-dica"
            className="mt-[8px] block w-full text-[14px] text-cinza file:mr-[12px] file:cursor-pointer file:border file:border-menta/60 file:bg-transparent file:px-[14px] file:py-[8px] file:text-[14px] file:text-white hover:file:border-menta tab:mt-[9px]"
          />
          <p id="arquivo-dica" className="mt-[6px] text-[12px] text-cinza">
            PDF, imagem, DWG ou ZIP, até {mb(ANEXO.maxBytes)}. O link do arquivo vai junto na mensagem do WhatsApp.
          </p>
        </div>
      </div>
      <button
        type="submit"
        disabled={estado.tipo === "enviando"}
        className="mt-[32px] h-[41px] w-full bg-menta text-[16px] text-white hover:bg-menta-escuro disabled:cursor-wait disabled:opacity-70 tab:mt-[var(--mt)] tab:w-[calc(50%-var(--gx)/2)]"
        style={{ "--mt": v(32), "--gx": v(37) } as React.CSSProperties}
      >
        {estado.tipo === "enviando" ? `Enviando arquivo… ${estado.pct}%` : "Enviar"}
      </button>
      <p role="status" className={`mt-[12px] text-[14px] empty:hidden ${estado.tipo === "erro" ? "text-lima" : "text-cinza"}`}>
        {estado.tipo === "erro" && estado.msg}
        {estado.tipo === "pronto" && (
          <>
            Abrimos o WhatsApp com a sua mensagem.{" "}
            <a href={estado.link} target="_blank" rel="noopener" className="underline">
              Abrir de novo
            </a>
          </>
        )}
      </p>
    </form>
  );
}
