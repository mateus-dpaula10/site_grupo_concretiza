import { CabecalhoPagina } from "@/components/CabecalhoPagina";
import { metadados } from "@/lib/seo";
import { EMPRESA } from "@/lib/site";

// TODO (jurídico do cliente): o site antigo tinha os links "Política de privacidade" e "LGPD"
// no rodapé, mas sem página. Este texto descreve só o que ESTE site faz com dados
// (nada é gravado; o formulário abre WhatsApp/e-mail). Precisa de revisão e da razão social/CNPJ.

export const metadata = metadados({
  titulo: "Política de privacidade",
  descricao: "Como o site do Grupo Concretiza trata os dados de quem entra em contato, em conformidade com a LGPD.",
  caminho: "/politica-de-privacidade",
});

export default function Privacidade() {
  return (
    <>
      <CabecalhoPagina
        titulo="Política de privacidade"
        trilha={[{ nome: "Política de privacidade", href: "/politica-de-privacidade" }]}
        resumo="Como tratamos os dados de quem entra em contato pelo site."
      />
      <div className="container-site py-14 lg:py-20">
        <div className="texto-corrido grid gap-5 text-tinta">
          <h2 className="text-2xl font-bold [font-stretch:112%]">Quais dados recebemos</h2>
          <p>
            O formulário de contato pede nome, sobrenome, e-mail, telefone e uma mensagem. O site não grava essas
            informações: ao enviar, elas são abertas no seu WhatsApp ou no seu aplicativo de e-mail, e só chegam à nossa
            equipe quando você confirma o envio por lá.
          </p>
          <h2 className="mt-6 text-2xl font-bold [font-stretch:112%]">Para que usamos</h2>
          <p>
            Usamos os dados apenas para responder ao seu contato e preparar orçamentos. Não vendemos nem compartilhamos
            essas informações com terceiros para fins de marketing.
          </p>
          <h2 className="mt-6 text-2xl font-bold [font-stretch:112%]">Cookies e rastreamento</h2>
          <p>Este site não usa cookies de rastreamento nem ferramentas de análise de terceiros.</p>
          <h2 id="lgpd" className="mt-6 text-2xl font-bold [font-stretch:112%]">
            Seus direitos (LGPD)
          </h2>
          <p>
            Pela Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode pedir a confirmação, o acesso, a correção
            ou a exclusão dos seus dados a qualquer momento. Basta escrever para{" "}
            <a href={`mailto:${EMPRESA.email}`} className="font-semibold text-marca underline underline-offset-2">
              {EMPRESA.email}
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
