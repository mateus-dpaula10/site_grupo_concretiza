import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { metadados } from "@/lib/seo";
import { EMPRESA } from "@/lib/site";
import { v } from "@/lib/medidas";

// TODO (jurídico do cliente): o site antigo tinha os links "Política de privacidade" e "LGPD"
// no rodapé, mas sem página. Este texto descreve só o que ESTE site faz com dados.
// Precisa de revisão. Fica fora do menu, acessível pelo rodapé.

export const metadata = metadados({
  titulo: "Política de privacidade",
  descricao: "Como o site do Grupo Concretiza trata os dados de quem entra em contato, em conformidade com a LGPD.",
  caminho: "/politica-de-privacidade",
});

const h2 = "mt-[32px] font-display text-[22px] font-semibold";

export default function Privacidade() {
  return (
    <section className="pb-[60px] pt-[31px] tab:pb-[var(--p)] tab:pt-[var(--p)]" style={{ "--p": v(87) } as React.CSSProperties}>
      <JsonLd dados={dadosBreadcrumb([{ nome: "Política de privacidade", href: "/politica-de-privacidade" }])} />
      <div className="caixa max-w-[900px] text-[16px] leading-[1.7] text-cinza">
        <h1 className="t-h2 text-white">Política de privacidade</h1>
        <p className="mt-[16px]">
          Este site é mantido por {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}.
        </p>
        <h2 className={`${h2} text-white`}>Quais dados recebemos</h2>
        <p className="mt-[8px]">
          Os formulários do site pedem nome, e-mail, telefone e uma mensagem. O site não grava essas informações: ao enviar, elas
          são abertas no seu WhatsApp, e só chegam à nossa equipe quando você confirma o envio por lá.
        </p>
        <h2 className={`${h2} text-white`}>Para que usamos</h2>
        <p className="mt-[8px]">
          Usamos os dados apenas para responder ao seu contato e preparar orçamentos. Não vendemos nem compartilhamos essas
          informações com terceiros para fins de marketing.
        </p>
        <h2 className={`${h2} text-white`}>Cookies e serviços de terceiros</h2>
        <p className="mt-[8px]">
          Este site não usa cookies de rastreamento nem ferramentas de análise. O mapa do rodapé é do Google Maps e só carrega
          quando você rola até ele; a partir daí valem as regras de privacidade do Google.
        </p>
        <h2 id="lgpd" className={`${h2} scroll-mt-[20px] text-white`}>
          Seus direitos (LGPD)
        </h2>
        <p className="mt-[8px]">
          Pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode pedir a confirmação, o acesso, a correção ou a exclusão
          dos seus dados a qualquer momento. Basta escrever para{" "}
          <a href={`mailto:${EMPRESA.email}`} className="text-menta underline underline-offset-2">
            {EMPRESA.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
