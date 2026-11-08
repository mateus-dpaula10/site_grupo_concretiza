import { CartoesBlog } from "@/components/CartoesBlog";
import { ChamadasFinais } from "@/components/ChamadasFinais";
import { TopoPagina } from "@/components/TopoPagina";
import { metadados } from "@/lib/seo";
import { v } from "@/lib/medidas";

// No Wix, /blog dá erro 400 no desktop e, no celular, mostra o topo do template em inglês
// ("Let's Connect") com "Verifique em breve" no lugar dos posts. Aqui: o mesmo topo das
// páginas internas, em pt-BR, e a lista real dos 3 posts no formato dos cartões da home.
export const metadata = metadados({
  titulo: "Blog",
  descricao:
    "Conteúdo sobre arquitetura, engenharia e construção civil: gestão de obras, obras rápidas para lojas e infraestrutura para carros elétricos.",
  caminho: "/blog",
});

export default function Blog() {
  return (
    <>
      <TopoPagina
        titulo="Construindo com Conhecimento"
        texto="Conteúdo sobre arquitetura, engenharia e construção civil para quem quer se inspirar e se informar."
        pagina={{ nome: "Blog", href: "/blog" }}
        foto={{ nome: "interior-alto-padrao", alt: "Sala de estar de alto padrão com escada de vidro" }}
      />
      <section
        className="degrade-base pb-[60px] pt-[40px] tab:pb-[var(--p)] tab:pt-[var(--p)]"
        style={{ "--p": v(101), "--inicio": "60%", "--fim": "#1e2612" } as React.CSSProperties}
      >
        <div className="caixa">
          <CartoesBlog nivel="h2" />
        </div>
      </section>
      <ChamadasFinais />
    </>
  );
}
