// Dados da empresa e do conteúdo do site. Tudo aqui foi extraído do site atual
// (grupoconcretiza.com.br, Wix) ou das publicações do Instagram oficial exibidas nele.
// O que não existia no site original está marcado com TODO.

// TODO: confirmar o domínio final (canonical). Hoje o Wix responde em www.
export const SITE_URL = "https://www.grupoconcretiza.com.br";

export const EMPRESA = {
  nome: "Grupo Concretiza",
  nomeCurto: "Concretiza",
  slogan: "Projetando ideias, concretizando sonhos.",
  desde: 2006,
  email: "contato@grupoconcretiza.com.br",
  telefone: "(44) 3040-4121",
  telefoneE164: "+554430404121",
  whatsapp: "(44) 99173-6776",
  whatsappNumero: "5544991736776",
  endereco: {
    rua: "Av. Getúlio Vargas, 72, Sobreloja 02",
    // Texto exatamente como aparece no rodapé do site original.
    rodape: "Av Getúlio Vargas, 72 - Sobreloja 02 - Zona 01",
    bairro: "Zona 01",
    // Cidade confirmada pelo mapa do rodapé do site original (Maringá).
    // TODO: informar o CEP.
    cidade: "Maringá",
    uf: "PR",
    cep: "",
  },
  instagram: "https://www.instagram.com/grupoconcretiza/",
  // O site antigo apontava para /admin/dashboard/ (painel interno); aqui vai a página pública.
  linkedin: "https://www.linkedin.com/company/11764579/",
  avaliacaoGoogle: { nota: 5, total: 100 },
} as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Grupo Concretiza, Av. Getúlio Vargas, 72, Zona 01, Maringá - PR");
export const MAPS_EMBED =
  "https://www.google.com/maps?output=embed&z=14&q=" +
  encodeURIComponent("Av. Getúlio Vargas, 72, Zona 01, Maringá - PR");

export function whatsappUrl(texto?: string) {
  const base = `https://wa.me/${EMPRESA.whatsappNumero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

export const WHATSAPP_ORCAMENTO = whatsappUrl("Olá! Vim pelo site e gostaria de pedir um orçamento.");

// "Seja nosso fornecedor" (pedido do cliente em 07/11/2026). TODO: link do Google Forms do cliente.
// Enquanto estiver vazio, o botão abre um e-mail para o contato geral com o assunto pronto.
export const FORMULARIO_FORNECEDOR = "";
export const LINK_FORNECEDOR =
  FORMULARIO_FORNECEDOR || `mailto:${EMPRESA.email}?subject=${encodeURIComponent("Quero ser fornecedor do Grupo Concretiza")}`;

// E-mails por setor (pedido do cliente em 07/11/2026). TODO: preencher com os endereços reais.
// Setor com e-mail vazio não aparece no site, para não publicar endereço errado.
export const EMAILS_SETOR: { setor: string; email: string }[] = [
  { setor: "Suprimentos", email: "" },
  { setor: "Financeiro", email: "" },
  { setor: "Engenharia", email: "" },
].filter((s) => s.email);

// Menu idêntico ao do site original: Serviços abre "Construtora" (4 tipos de obra) e "Energia".
// "Clientes" leva à seção da home, como no Wix; "Contato" leva à página /contato (todos os canais).
export const MENU = {
  itens: [
    { href: "/", rotulo: "Home" },
    { href: "/sobre", rotulo: "Sobre" },
  ],
  servicos: {
    rotulo: "Serviços",
    grupo: "Construtora",
    obras: [
      { href: "/obras/corporativas", rotulo: "Obras Corporativas" },
      { href: "/obras/comerciais", rotulo: "Obras Comerciais" },
      { href: "/obras/industriais", rotulo: "Obras Industriais" },
      { href: "/obras/residenciais", rotulo: "Obras Residenciais" },
    ],
    energia: { href: "/energia", rotulo: "Energia" },
  },
  finais: [
    { href: "/#clientes", rotulo: "Clientes" },
    { href: "/contato", rotulo: "Contato" },
  ],
};

export type Foto = { nome: string; alt: string };

// Galeria que rola sozinha abaixo de "Resultados que constroem confiança" (mesma ordem do original).
export const GALERIA_HOME: Foto[] = [
  { nome: "nobile-suites", alt: "Fachada envidraçada do hotel Nobile Suites" },
  { nome: "loja-eva-bella-vitrine", alt: "Entrada da loja Eva Bella com portal claro e lustre" },
  { nome: "sala-reunioes", alt: "Sala de reuniões corporativa com janelas do piso ao teto" },
  { nome: "farmacia-interior", alt: "Interior de farmácia com gôndolas organizadas" },
  { nome: "fachada-drugovich", alt: "Fachada da concessionária Drugovich" },
  { nome: "loja-eva-bella", alt: "Vitrine iluminada da loja Eva Bella em shopping" },
  { nome: "majestic-hall-aereo", alt: "Vista aérea do centro de eventos Majestic Hall" },
  { nome: "loja-luiza-fazzolli", alt: "Loja Luiza Fazzolli com fachada em mármore" },
  { nome: "fashion-hall", alt: "Fachada do centro comercial Fashion Hall" },
  { nome: "edificio-portico-madeira", alt: "Edifício comercial com pórtico revestido em madeira" },
  { nome: "academia", alt: "Academia com esteiras e equipamentos de musculação" },
  { nome: "espelho-dagua", alt: "Jardim com espelho d'água e palmeiras" },
  { nome: "residencia-branca", alt: "Residência branca com garagem e jardim" },
  { nome: "render-edificio-curvo", alt: "Perspectiva de edifício com varandas curvas" },
  { nome: "interior-alto-padrao", alt: "Sala de estar de alto padrão com escada de vidro" },
];

export const SERVICOS_HOME = [
  {
    titulo: "Corporativas",
    href: "/obras/corporativas",
    icone: "corporativas",
    texto:
      "Execução de ambientes empresariais, escritórios e operações corporativas com foco em agilidade, planejamento e qualidade de entrega.",
  },
  {
    titulo: "Comerciais",
    href: "/obras/comerciais",
    icone: "comerciais",
    texto:
      "Construção, retrofit e modernização de lojas, fachadas e espaços comerciais que fortalecem marcas e otimizam operações.",
  },
  {
    titulo: "Industriais",
    href: "/obras/industriais",
    icone: "industriais",
    texto:
      "Execução de estruturas industriais, galpões e ambientes operacionais com eficiência técnica, segurança e precisão construtiva.",
  },
  {
    titulo: "Residenciais Alto Padrão",
    href: "/obras/residenciais",
    icone: "residenciais",
    texto: "Obras residenciais executadas com alto padrão de acabamento, funcionalidade e compromisso em cada detalhe.",
  },
] as const;

export const ESPECIALIDADES = [
  {
    titulo: "Obras Rápidas Comerciais",
    texto: "Execução ágil para lojas, franquias e operações comerciais com mínimo impacto na operação.",
    foto: { nome: "farmacia-sao-joao", alt: "Unidade das Farmácias São João recém-inaugurada" },
    href: "/obras/comerciais",
  },
  {
    titulo: "Execução de Empreendimentos",
    texto: "Da fundação ao acabamento, executamos empreendimentos com excelência técnica e previsibilidade.",
    foto: { nome: "hotel-palmeiras", alt: "Hotel de grande porte com fachada de vidro e palmeiras" },
    href: "/obras/corporativas",
  },
  {
    // Exceção: o original usava foto do banco do Wix (11062b); aqui vai foto de canteiro de obras.
    titulo: "Obras Industriais",
    texto: "Soluções industriais com eficiência operacional, precisão técnica e execução de grande porte.",
    foto: { nome: "obra-guindaste", alt: "Edifício em construção com guindaste e andaimes" },
    href: "/obras/industriais",
  },
];

// Logos da seção "Nossos Clientes", na ordem e no tamanho (em px, a 1440px) do original.
export const CLIENTES: { nome: string; logo: string; w: number }[] = [
  { nome: "McDonald's", logo: "cliente-mcdonalds", w: 145 },
  { nome: "Cacau Show", logo: "cliente-cacau-show", w: 250 },
  { nome: "Caixa", logo: "cliente-caixa", w: 216 },
  { nome: "Bradesco", logo: "cliente-bradesco", w: 220 },
  { nome: "Jeep", logo: "cliente-jeep", w: 145 },
  { nome: "Senac", logo: "cliente-senac", w: 166 },
  { nome: "Copercampos", logo: "cliente-copercampos", w: 240 },
  { nome: "Farmácias São João", logo: "cliente-farmacias-sao-joao", w: 230 },
  { nome: "Coocam", logo: "cliente-coocam", w: 236 },
  { nome: "Camargo Corrêa", logo: "cliente-camargo-correa", w: 160 },
  { nome: "Paraná Moda Park", logo: "cliente-parana-moda-park", w: 183 },
  { nome: "Ipiranga", logo: "cliente-ipiranga", w: 170 },
  { nome: "Perdigão", logo: "cliente-perdigao", w: 82 },
  { nome: "Magalu", logo: "cliente-magalu", w: 246 },
  { nome: "Fiat", logo: "cliente-fiat", w: 110 },
  { nome: "VestSul", logo: "cliente-vestsul", w: 183 },
  { nome: "Senai", logo: "cliente-senai", w: 236 },
  { nome: "Hospital Bom Samaritano", logo: "cliente-bom-samaritano", w: 150 },
  { nome: "Além do Olhar", logo: "cliente-alem-do-olhar", w: 221 },
  { nome: "Celesc", logo: "cliente-celesc", w: 80 },
  { nome: "Avenida Fashion", logo: "cliente-avenida-fashion", w: 208 },
  { nome: "Nobile Suites", logo: "cliente-nobile-suites", w: 268 },
  { nome: "Drugovich", logo: "cliente-drugovich", w: 118 },
  { nome: "Samae", logo: "cliente-samae", w: 183 },
  { nome: "Empório Francesca", logo: "cliente-emporio-francesca", w: 130 },
];

export const INSTAGRAM_POSTS: Foto[] = [
  { nome: "insta-01", alt: "A Concretiza executa obras comerciais, reformas e retrofits completos." },
  { nome: "insta-02", alt: "No mercado de franquias, cada dia conta: obras ágeis para franquias, farmácias, lojas e clínicas." },
  { nome: "insta-03", alt: "Hospitais e clínicas exigem atenção técnica, planejamento e cuidado em cada etapa da execução." },
  { nome: "insta-04", alt: "Casa Oliveira, residência de alto padrão construída pelo Grupo Concretiza." },
  { nome: "insta-05", alt: "Carregadores de carros elétricos em condomínios exigem infraestrutura e gestão de energia." },
  { nome: "insta-06", alt: "Hotel Transamérica, no complexo Paraná Park, em Maringá, construído pela Concretiza em 2018." },
  { nome: "insta-07", alt: "Avaliação 5 estrelas no Google de cliente da Concretiza." },
  { nome: "insta-08", alt: "Giga+: 30 dias entre o início da obra e a loja pronta para inaugurar." },
  { nome: "insta-09", alt: "Giga+: obra comercial concluída em 30 dias." },
  { nome: "insta-10", alt: "Projetar ideias é transformar possibilidades em projetos." },
  { nome: "insta-11", alt: "Giga+: transformação completa de espaço comercial." },
  { nome: "insta-12", alt: "Sua franquia pronta para operar no menor tempo possível." },
];

export type TipoObra = {
  slug: "corporativas" | "comerciais" | "industriais" | "residenciais";
  titulo: string;
  resumo: string;
  descricaoSeo: string;
};

// As 4 páginas de obras existiam no original só com cabeçalho e rodapé (vazias).
// O texto vem da própria home do site (descrição de cada tipo de obra).
export const TIPOS_OBRA: TipoObra[] = [
  {
    slug: "corporativas",
    titulo: "Obras Corporativas",
    resumo: SERVICOS_HOME[0].texto,
    descricaoSeo:
      "Obras corporativas: execução de ambientes empresariais, escritórios e operações corporativas com agilidade, planejamento e qualidade de entrega.",
  },
  {
    slug: "comerciais",
    titulo: "Obras Comerciais",
    resumo: SERVICOS_HOME[1].texto,
    descricaoSeo:
      "Obras comerciais: construção, retrofit e modernização de lojas, fachadas e espaços comerciais que fortalecem marcas e otimizam operações.",
  },
  {
    slug: "industriais",
    titulo: "Obras Industriais",
    resumo: SERVICOS_HOME[2].texto,
    descricaoSeo:
      "Obras industriais: estruturas industriais, galpões e ambientes operacionais com eficiência técnica, segurança e precisão construtiva.",
  },
  {
    slug: "residenciais",
    titulo: "Obras Residenciais",
    resumo: SERVICOS_HOME[3].texto,
    descricaoSeo:
      "Obras residenciais de alto padrão de acabamento, funcionalidade e compromisso em cada detalhe.",
  },
];

export const ADMINISTRACAO = {
  titulo: "Administradora de Obras",
  resumo: "Administração e gestão completa de obras residenciais, comerciais e corporativas.",
  itens: [
    "Planejamento de obra",
    "Gestão de cronograma",
    "Controle financeiro",
    "Gestão de equipes",
    "Compatibilização de projetos",
    "Acompanhamento técnico",
    "Controle de qualidade",
    "Gestão de fornecedores",
    "Supervisão de execução",
  ],
};

export const ENERGIA = {
  titulo: "Concretiza Energia",
  resumo:
    "Soluções inteligentes em infraestrutura para mobilidade elétrica, com projetos e instalações de carregamento para condomínios, empresas, lojas e empreendimentos.",
  itens: [
    "Estações de carregamento",
    "Infraestrutura elétrica",
    "Carregadores para condomínios",
    "Carregadores corporativos",
    "Soluções para varejo",
    "Instalação especializada",
    "Projetos elétricos",
    "Gestão de consumo energético",
    "Mobilidade elétrica sustentável",
  ],
};
