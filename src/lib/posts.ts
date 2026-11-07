// Posts do blog, transcritos do site atual (Wix). As datas vêm do próprio Wix
// (publicação e atualização); o ano não aparece na página, mas está no metadado do post.

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "lista"; itens: string[] };

export type Post = {
  slug: string;
  titulo: string;
  resumo: string;
  autor: string;
  publicado: string;
  atualizado?: string;
  tema: string;
  servicoRelacionado: { href: string; rotulo: string };
  corpo: Bloco[];
};

export const POSTS: Post[] = [
  {
    slug: "carregamento-de-carros-eletricos",
    titulo: "Carregamento de carros elétricos: o que sua empresa precisa saber",
    resumo:
      "O crescimento dos veículos elétricos no Brasil criou uma nova demanda: infraestrutura adequada para carregamento em empresas, condomínios e centros comerciais.",
    autor: "Bernardo Cassel",
    publicado: "2026-06-08",
    tema: "Energia",
    servicoRelacionado: { href: "/energia", rotulo: "Conheça a Concretiza Energia" },
    corpo: [
      { tipo: "h2", texto: "A mobilidade elétrica já é uma realidade" },
      {
        tipo: "p",
        texto:
          "O crescimento dos veículos elétricos no Brasil tem impulsionado uma nova demanda no mercado da construção civil: a instalação de infraestrutura adequada para carregamento de automóveis. Empresas, condomínios, centros comerciais e empreendimentos residenciais estão cada vez mais atentos a essa necessidade.",
      },
      {
        tipo: "p",
        texto:
          "Mais do que uma tendência, disponibilizar pontos de carregamento tornou-se um diferencial competitivo e um investimento que agrega valor ao imóvel.",
      },
      { tipo: "h2", texto: "Planejamento faz toda a diferença" },
      {
        tipo: "p",
        texto:
          "A instalação de carregadores exige análise da capacidade elétrica existente, adequação das instalações e definição estratégica dos pontos de recarga. Um projeto bem executado garante segurança, eficiência energética e preparação para futuras ampliações.",
      },
      {
        tipo: "p",
        texto:
          "Além disso, prever essa infraestrutura durante a obra reduz significativamente custos quando comparado à realização de adaptações posteriores.",
      },
      { tipo: "h2", texto: "Benefícios para empreendimentos" },
      { tipo: "p", texto: "Entre as principais vantagens estão:" },
      {
        tipo: "lista",
        itens: [
          "Valorização do imóvel;",
          "Maior atratividade para clientes e usuários;",
          "Adequação às tendências de mercado;",
          "Diferencial competitivo para empresas e condomínios;",
          "Preparação para o futuro da mobilidade.",
        ],
      },
      { tipo: "h2", texto: "Conte com especialistas" },
      {
        tipo: "p",
        texto:
          "Uma empresa especializada em gestão e execução de obras consegue integrar toda a infraestrutura necessária ao projeto, garantindo que a instalação atenda às normas técnicas e às necessidades específicas de cada empreendimento.",
      },
      {
        tipo: "p",
        texto:
          "Investir hoje em soluções para mobilidade elétrica é preparar seu patrimônio para as demandas dos próximos anos.",
      },
    ],
  },
  {
    slug: "gestao-de-obras-reduzir-desperdicios",
    titulo: "Gestão de obras: como reduzir desperdícios, economizar recursos e ganhar tempo",
    resumo:
      "Atrasos, retrabalho e desperdício pesam no custo de qualquer obra. Veja como uma gestão especializada mantém prazo, qualidade e orçamento em equilíbrio.",
    autor: "Érico Vicentin",
    publicado: "2026-03-10",
    atualizado: "2026-06-08",
    tema: "Gestão",
    servicoRelacionado: { href: "/administracao-de-obras", rotulo: "Conheça a administração de obras" },
    corpo: [
      { tipo: "h2", texto: "Construir bem vai muito além da execução" },
      {
        tipo: "p",
        texto:
          "Um dos maiores desafios de qualquer obra é manter o equilíbrio entre prazo, qualidade e orçamento. Sem planejamento adequado, atrasos, retrabalhos e desperdícios acabam impactando diretamente os custos do projeto.",
      },
      {
        tipo: "p",
        texto: "Por isso, cada vez mais empresas e investidores optam por contratar uma gestão especializada de obras.",
      },
      { tipo: "h2", texto: "O custo do improviso" },
      {
        tipo: "p",
        texto:
          "Materiais comprados em excesso, cronogramas mal planejados, mão de obra ociosa e falhas de comunicação são alguns dos fatores que geram prejuízos significativos durante uma construção.",
      },
      {
        tipo: "p",
        texto:
          "Muitas vezes, o valor perdido com desperdícios supera o investimento necessário para contar com uma equipe especializada na administração da obra.",
      },
      { tipo: "h2", texto: "Como uma gestão profissional gera economia" },
      { tipo: "p", texto: "Ao contratar uma empresa especializada, o cliente passa a contar com:" },
      { tipo: "h3", texto: "Planejamento detalhado" },
      { tipo: "p", texto: "Cronogramas bem estruturados evitam atrasos e garantem melhor aproveitamento dos recursos." },
      { tipo: "h3", texto: "Controle financeiro" },
      { tipo: "p", texto: "Acompanhamento constante dos custos para evitar desvios de orçamento." },
      { tipo: "h3", texto: "Gestão de fornecedores" },
      { tipo: "p", texto: "Melhor negociação, controle de compras e acompanhamento de entregas." },
      { tipo: "h3", texto: "Redução de desperdícios" },
      { tipo: "p", texto: "Materiais são utilizados de forma mais eficiente, reduzindo perdas e retrabalhos." },
      { tipo: "h3", texto: "Fiscalização técnica" },
      { tipo: "p", texto: "Garantia de qualidade em cada etapa da execução." },
      { tipo: "h2", texto: "Mais tempo para focar no seu negócio" },
      {
        tipo: "p",
        texto:
          "Enquanto a equipe especializada cuida do gerenciamento da obra, o cliente pode dedicar sua atenção às atividades estratégicas da empresa ou ao desenvolvimento do seu empreendimento.",
      },
      {
        tipo: "p",
        texto:
          "O resultado é uma obra mais organizada, com menos imprevistos, maior controle financeiro e entrega dentro dos padrões esperados.",
      },
    ],
  },
  {
    slug: "obras-rapidas-para-lojas",
    titulo: "Obras rápidas para lojas: como reduzir o tempo de implantação do seu negócio",
    resumo:
      "Loja em obra ainda não está vendendo. Planejamento antecipado, compatibilização de projetos e coordenação integrada encurtam o prazo sem pressa e sem retrabalho.",
    autor: "Érico Vicentin",
    publicado: "2026-03-10",
    atualizado: "2026-06-08",
    tema: "Obras comerciais",
    servicoRelacionado: { href: "/obras/comerciais", rotulo: "Conheça as obras comerciais" },
    corpo: [
      { tipo: "h2", texto: "Tempo é faturamento" },
      {
        tipo: "p",
        texto:
          "Quando uma loja está em construção, ela ainda não está vendendo. Por isso, reduzir o prazo de implantação é uma das principais preocupações de empresários, franqueados e investidores.",
      },
      { tipo: "p", texto: "Cada semana de atraso representa oportunidades perdidas e aumento dos custos operacionais." },
      { tipo: "h2", texto: "A importância do planejamento antecipado" },
      {
        tipo: "p",
        texto:
          "Obras rápidas não significam obras apressadas. Pelo contrário: quanto melhor o planejamento, mais eficiente será a execução.",
      },
      {
        tipo: "p",
        texto:
          "Um projeto bem coordenado permite que diversas etapas aconteçam simultaneamente, reduzindo significativamente o prazo total da obra.",
      },
      { tipo: "h2", texto: "Principais fatores para acelerar uma obra comercial" },
      { tipo: "h3", texto: "Compatibilização de projetos" },
      { tipo: "p", texto: "Evita conflitos entre elétrica, hidráulica, climatização e arquitetura." },
      { tipo: "h3", texto: "Cronograma executivo eficiente" },
      { tipo: "p", texto: "Permite maior controle das equipes e das entregas." },
      { tipo: "h3", texto: "Gestão de fornecedores" },
      { tipo: "p", texto: "Materiais chegam no momento certo, evitando paralisações." },
      { tipo: "h3", texto: "Acompanhamento constante" },
      { tipo: "p", texto: "Problemas são identificados e solucionados rapidamente." },
      { tipo: "h3", texto: "Coordenação integrada" },
      { tipo: "p", texto: "Todas as equipes trabalham alinhadas aos mesmos objetivos." },
      { tipo: "h2", texto: "Menos prazo, mais resultado" },
      {
        tipo: "p",
        texto:
          "Uma gestão profissional permite que lojas, escritórios, franquias e espaços comerciais sejam entregues com maior agilidade, sem comprometer a qualidade da execução.",
      },
      {
        tipo: "p",
        texto:
          "O objetivo é simples: transformar projetos em operações funcionando no menor tempo possível, permitindo que o investimento comece a gerar retorno mais rapidamente.",
      },
      {
        tipo: "p",
        texto:
          "Quando planejamento, gestão e execução caminham juntos, o resultado é uma obra eficiente, organizada e pronta para impulsionar o crescimento do negócio.",
      },
    ],
  },
];

export function formatarData(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}
