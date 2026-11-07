import { PaginaLista } from "@/components/PaginaLista";
import { metadados } from "@/lib/seo";
import { ADMINISTRACAO } from "@/lib/site";

// Página "ADM de Obras" do original (fora do menu, como lá).
export const metadata = metadados({
  titulo: "ADM de Obras",
  descricao:
    "Administradora de obras: administração e gestão completa de obras residenciais, comerciais e corporativas, do planejamento à supervisão da execução.",
  caminho: "/administracao-de-obras",
});

export default function Administracao() {
  return (
    <PaginaLista
      titulo={ADMINISTRACAO.titulo}
      texto={ADMINISTRACAO.resumo}
      itens={ADMINISTRACAO.itens}
      // Exceção: no original a faixa usa foto do banco do Wix (escavadeira); aqui vai foto de obra do cliente.
      foto={{ nome: "galpao-em-obra", alt: "Galpão em construção com estrutura de concreto" }}
      trilha={[{ nome: "ADM de Obras", href: "/administracao-de-obras" }]}
    />
  );
}
