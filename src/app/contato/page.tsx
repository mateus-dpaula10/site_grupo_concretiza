import { BotaoSeta } from "@/components/BotaoSeta";
import { FormContato } from "@/components/FormContato";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { metadados } from "@/lib/seo";
import { WHATSAPP_ORCAMENTO } from "@/lib/site";
import { v } from "@/lib/medidas";

// Página que não existe no original (lá o contato é só uma seção da home). Fica fora do
// menu, acessível pelo link "Contato" do rodapé, com o mesmo visual da seção da home.
export const metadata = metadados({
  titulo: "Contato",
  descricao:
    "Fale com o Grupo Concretiza: WhatsApp (44) 99173-6776, telefone (44) 3040-4121 ou contato@grupoconcretiza.com.br. Peça o orçamento do seu projeto.",
  caminho: "/contato",
});

export default function Contato() {
  return (
    <section
      className="bg-[linear-gradient(to_bottom,#0b2e27_0%,#0c231a_37%,#0f1309_100%)] pb-[32px] pt-[31px] tab:pb-[var(--pb)] tab:pt-[var(--pt)]"
      style={{ "--pt": v(87), "--pb": v(107) } as React.CSSProperties}
    >
      <JsonLd dados={dadosBreadcrumb([{ nome: "Contato", href: "/contato" }])} />
      <div className="caixa">
        <div className="tab:flex tab:items-end tab:justify-between">
          <div>
            <h1 className="t-h2">Vamos Construir Juntos?</h1>
            <p className="t-lead mt-[9px] tab:mt-[var(--m)] tab:max-w-[var(--w)]" style={{ "--m": v(16), "--w": v(675) } as React.CSSProperties}>
              Conte-nos sobre o seu projeto e entraremos em contato para transformar a sua ideia em realidade.
            </p>
          </div>
          <div className="mt-[36px] tab:mt-0">
            <BotaoSeta href={WHATSAPP_ORCAMENTO} externo variante="cheio" largura={[175, 191]} escuro>
              WhatsApp
            </BotaoSeta>
          </div>
        </div>
        <div className="mt-[46px] tab:mt-[var(--mt)]" style={{ "--mt": v(48) } as React.CSSProperties}>
          <FormContato />
        </div>
      </div>
    </section>
  );
}
