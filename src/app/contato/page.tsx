import { BlocoContato } from "@/components/BlocoContato";
import { JsonLd, dadosBreadcrumb } from "@/components/JsonLd";
import { metadados } from "@/lib/seo";

// Página nova (no site antigo o contato era só uma seção da home).
export const metadata = metadados({
  titulo: "Contato e orçamento",
  descricao:
    "Fale com o Grupo Concretiza: WhatsApp (44) 99173-6776, telefone (44) 3040-4121 ou contato@grupoconcretiza.com.br. Peça o orçamento do seu projeto.",
  caminho: "/contato",
});

export default function Contato() {
  return (
    <>
      <JsonLd dados={dadosBreadcrumb([{ nome: "Contato", href: "/contato" }])} />
      <BlocoContato nivelTitulo="h1" />
    </>
  );
}
