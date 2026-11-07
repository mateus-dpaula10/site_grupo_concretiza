import { PaginaLista } from "@/components/PaginaLista";
import { metadados } from "@/lib/seo";
import { ENERGIA } from "@/lib/site";

export const metadata = metadados({
  titulo: "Energia",
  descricao:
    "Concretiza Energia: projetos e instalação de estações de carregamento de veículos elétricos para condomínios, empresas, lojas e empreendimentos.",
  caminho: "/energia",
});

export default function Energia() {
  return (
    <PaginaLista
      titulo={ENERGIA.titulo}
      texto={ENERGIA.resumo}
      itens={ENERGIA.itens}
      // Exceção: no original a faixa usa foto do banco do Wix (carro carregando); aqui vai foto
      // do cliente (fachada da concessionária Drugovich) com o mesmo logo por cima.
      foto={{ nome: "fachada-drugovich", alt: "Fachada da concessionária Drugovich" }}
      logo={{ nome: "logo-concretiza-energia-branco", alt: "Concretiza Energia" }}
      trilha={[
        { nome: "Serviços", href: "/#servicos" },
        { nome: "Energia", href: "/energia" },
      ]}
    />
  );
}
