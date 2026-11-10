import type { ReactNode } from "react";
import { BotaoSeta } from "@/components/BotaoSeta";
import { FormContato } from "@/components/FormContato";
import { IconeEmail, IconeLocal, IconeTelefone, IconeWhatsapp } from "@/components/Icones";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { metadados } from "@/lib/seo";
import { EMAIL_FORNECEDOR, EMPRESA, LINK_FORNECEDOR, MAPS_URL, SETORES, type Setor, soDigitos, whatsappSetorUrl, whatsappUrl } from "@/lib/site";
import { v } from "@/lib/medidas";

// Página que não existe no original (lá o contato é só uma seção da home). Desde 07/11/2026 é o
// destino do botão "Contato" (topo da home, menu e rodapé): reúne todos os canais, os e-mails por
// setor e o "Seja nosso fornecedor", com o formulário de orçamento no fim.
export const metadata = metadados({
  titulo: "Contato",
  descricao:
    "Fale com o Grupo Concretiza: WhatsApp (44) 99173-6776, telefone (44) 3040-4121 ou contato@grupoconcretiza.com.br. Peça o orçamento do seu projeto ou cadastre-se como fornecedor.",
  caminho: "/contato",
});

function Canal({ href, icone, titulo, children, externo }: { href: string; icone: ReactNode; titulo: string; children: ReactNode; externo?: boolean }) {
  return (
    <li>
      <a
        href={href}
        target={externo ? "_blank" : undefined}
        rel={externo ? "noopener" : undefined}
        className="flex h-full items-start gap-[14px] rounded-[20px] bg-[#16423a] p-[20px] transition-colors hover:bg-[#1c5047] tab:p-[var(--p)]"
        style={{ "--p": v(28) } as React.CSSProperties}
      >
        <span className="grid size-[44px] shrink-0 place-items-center rounded-[6px] border-[3px] border-[#3a4a2b] bg-menta-escuro text-oliva">{icone}</span>
        <span className="min-w-0">
          <span className="block font-display text-[18px] font-semibold leading-[1.3] text-white">{titulo}</span>
          <span className="mt-[4px] block break-words text-[14px] leading-[1.5] text-cinza tab:text-[15px]">{children}</span>
        </span>
      </a>
    </li>
  );
}

// Cartão de setor: WhatsApp (prioridade pedida pelo cliente) antes do e-mail; cada canal é um link.
function CartaoSetor({ setor, whatsapp, telefone, email }: Setor) {
  const linha = "flex items-center gap-[10px] text-[14px] leading-[1.5] text-cinza hover:text-white tab:text-[15px]";
  return (
    <li className="rounded-[20px] bg-[#16423a] p-[20px] tab:p-[var(--p)]" style={{ "--p": v(28) } as React.CSSProperties}>
      <p className="font-display text-[18px] font-semibold leading-[1.3] text-white">{setor}</p>
      <div className="mt-[12px] grid gap-[10px]">
        {whatsapp && (
          <a href={whatsappSetorUrl(whatsapp)} target="_blank" rel="noopener" className={linha}>
            <IconeWhatsapp className="size-[20px] shrink-0 text-oliva" />
            <span>{whatsapp}</span>
          </a>
        )}
        {telefone && (
          <a href={`tel:+${soDigitos(telefone)}`} className={linha}>
            <IconeTelefone className="size-[20px] shrink-0 text-oliva" />
            <span>{telefone}</span>
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className={linha}>
            <IconeEmail className="size-[20px] shrink-0 text-oliva" />
            <span className="min-w-0 break-words">{email}</span>
          </a>
        )}
      </div>
    </li>
  );
}

export default function Contato() {
  const icone = "size-[22px]";
  return (
    <section
      className="bg-[linear-gradient(to_bottom,#0b2e27_0%,#0c231a_37%,#0f1309_100%)] pb-[32px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
      style={{ "--pt": v(87), "--pb": v(107) } as React.CSSProperties}
    >
      <JsonLd dados={dadosBreadcrumb([{ nome: "Contato", href: "/contato" }])} />
      <div className="caixa">
        <h1 className="t-h2">Fale com a Concretiza</h1>
        <p className="t-lead mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(16), "--w": v(675) } as React.CSSProperties}>
          Escolha o canal que preferir. Para orçamento, use o formulário no fim da página.
        </p>

        <ul className="mt-[36px] grid gap-[16px] tab:mt-[var(--mt)] tab:grid-cols-2 tab:gap-[var(--g)]" style={{ "--mt": v(48), "--g": v(20) } as React.CSSProperties}>
          <Canal href={whatsappUrl()} externo icone={<IconeWhatsapp className={icone} />} titulo="WhatsApp">
            {EMPRESA.whatsapp}
          </Canal>
          <Canal href={`tel:${EMPRESA.telefoneE164}`} icone={<IconeTelefone className={icone} />} titulo="Telefone (outros assuntos)">
            {EMPRESA.telefone}
          </Canal>
          <Canal href={`mailto:${EMPRESA.email}`} icone={<IconeEmail className={icone} />} titulo="E-mail">
            {EMPRESA.email}
          </Canal>
          <Canal href={MAPS_URL} externo icone={<IconeLocal className={icone} />} titulo="Endereço">
            {EMPRESA.endereco.rodape}, {EMPRESA.endereco.cidade} - {EMPRESA.endereco.uf}
          </Canal>
        </ul>

        <h2 className="mt-[48px] font-display text-[22px] font-semibold tab:mt-[var(--mt)] tab:text-[length:var(--f)]" style={{ "--mt": v(64), "--f": v(28) } as React.CSSProperties}>
          Fale direto com o setor
        </h2>
        <ul className="mt-[20px] grid gap-[16px] tab:grid-cols-2 tab:gap-[var(--g)] desk:grid-cols-3" style={{ "--g": v(20) } as React.CSSProperties}>
          {SETORES.map((s) => (
            <CartaoSetor key={s.setor} {...s} />
          ))}
        </ul>

        <div
          id="fornecedor"
          className="mt-[48px] scroll-mt-[20px] rounded-[20px] border border-menta/30 bg-white/5 p-[24px] tab:mt-[var(--mt)] tab:flex tab:items-center tab:justify-between tab:gap-[32px] tab:p-[var(--p)]"
          style={{ "--mt": v(64), "--p": v(40) } as React.CSSProperties}
        >
          <div>
            <h2 className="font-display text-[22px] font-semibold tab:text-[length:var(--f)]" style={{ "--f": v(28) } as React.CSSProperties}>
              Seja nosso fornecedor
            </h2>
            <p className="mt-[8px] max-w-[40em] text-[14px] leading-[1.6] text-cinza tab:text-[16px]">
              Fornece materiais, equipamentos ou serviços para obras? Cadastre a sua empresa e o nosso setor de suprimentos entra em
              contato.
            </p>
          </div>
          <div className="mt-[24px] shrink-0 tab:mt-0">
            <BotaoSeta href={LINK_FORNECEDOR} externo variante="cheio" largura={[200, 230]} escuro>
              Quero ser fornecedor
            </BotaoSeta>
            <a href={`mailto:${EMAIL_FORNECEDOR}`} className="mt-[12px] block text-[14px] text-cinza underline-offset-2 hover:text-white hover:underline">
              ou {EMAIL_FORNECEDOR}
            </a>
          </div>
        </div>

        <h2 className="mt-[48px] font-display text-[22px] font-semibold tab:mt-[var(--mt)] tab:text-[length:var(--f)]" style={{ "--mt": v(64), "--f": v(28) } as React.CSSProperties}>
          Peça seu orçamento
        </h2>
        <div className="mt-[20px] tab:mt-[var(--mt)]" style={{ "--mt": v(24) } as React.CSSProperties}>
          <FormContato />
        </div>
      </div>
    </section>
  );
}
