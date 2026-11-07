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
    bairro: "Zona 01",
    // Cidade deduzida do DDD 44, do bairro "Zona 01" e das publicações (#Maringá).
    // TODO: confirmar cidade e informar o CEP.
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

export function whatsappUrl(texto?: string) {
  const base = `https://wa.me/${EMPRESA.whatsappNumero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}

export const WHATSAPP_ORCAMENTO = whatsappUrl("Olá! Vim pelo site e gostaria de pedir um orçamento.");

export type ItemMenu = { href: string; rotulo: string; filhos?: ItemMenu[] };

export const MENU: ItemMenu[] = [
  { href: "/", rotulo: "Home" },
  { href: "/sobre", rotulo: "Sobre" },
  {
    href: "/servicos",
    rotulo: "Serviços",
    filhos: [
      { href: "/obras/corporativas", rotulo: "Obras corporativas" },
      { href: "/obras/comerciais", rotulo: "Obras comerciais" },
      { href: "/obras/industriais", rotulo: "Obras industriais" },
      { href: "/obras/residenciais", rotulo: "Obras residenciais" },
      { href: "/administracao-de-obras", rotulo: "Administração de obras" },
      { href: "/energia", rotulo: "Energia" },
    ],
  },
  { href: "/#clientes", rotulo: "Clientes" },
  { href: "/blog", rotulo: "Blog" },
  { href: "/contato", rotulo: "Contato" },
];

export const NUMEROS = [
  { valor: "+747", unidade: "projetos", texto: "Residências, edifícios e grandes complexos entregues." },
  { valor: "20", unidade: "anos", texto: "De experiência, inovação e compromisso com a excelência." },
  { valor: "500+", unidade: "clientes", texto: "A confiança de quem já construiu com a Concretiza." },
  { valor: "5,0", unidade: "no Google", texto: "Nota máxima e mais de 100 avaliações." },
];

export type Foto = { nome: string; alt: string };

export type TipoObra = {
  slug: "corporativas" | "comerciais" | "industriais" | "residenciais";
  titulo: string;
  tituloCurto: string;
  resumo: string;
  foto: Foto;
  descricaoSeo: string;
  destaques: string[];
  obras: { titulo: string; local?: string; texto: string; foto?: Foto }[];
  galeria: Foto[];
};

export const TIPOS_OBRA: TipoObra[] = [
  {
    slug: "corporativas",
    titulo: "Obras corporativas",
    tituloCurto: "Corporativas",
    resumo:
      "Execução de ambientes empresariais, escritórios e operações corporativas com foco em agilidade, planejamento e qualidade de entrega.",
    descricaoSeo:
      "Obras corporativas em Maringá e região: escritórios, hotéis, centros de eventos e obras hospitalares com planejamento, prazo e alto padrão de execução.",
    foto: { nome: "sala-reunioes", alt: "Sala de reuniões corporativa com mesa longa e janelas do piso ao teto" },
    destaques: [
      "Escritórios e ambientes empresariais",
      "Hotéis e centros de eventos",
      "Hospitais, clínicas e centros médicos",
      "Igrejas e sedes religiosas",
    ],
    obras: [
      {
        titulo: "Hotel Transamérica",
        local: "Paraná Park, Maringá (PR)",
        texto:
          "Em 2018, a Concretiza esteve à frente da construção do Hotel Transamérica, no complexo Paraná Park. Uma obra de grande porte, que exigiu planejamento, gestão e excelência na execução.",
      },
      {
        titulo: "Hotel Prime Executive",
        local: "Campos Novos (SC)",
        texto:
          "Uma obra executada com planejamento, agilidade e alto padrão de qualidade, reforçando o compromisso em entregar empreendimentos que fazem a diferença.",
        foto: { nome: "hotel-prime-executive", alt: "Fachada do Hotel Prime Executive em Campos Novos, Santa Catarina" },
      },
      {
        titulo: "Majestic Hall",
        texto:
          "Um amplo centro de eventos, pensado para receber momentos especiais com imponência, funcionalidade e excelência construtiva.",
        foto: { nome: "majestic-hall-aereo", alt: "Vista aérea do centro de eventos Majestic Hall com fachada vermelha curva e espelhos d'água" },
      },
      {
        titulo: "Obras para a saúde",
        texto:
          "Hospitais, clínicas e centros médicos envolvem normas específicas, instalações especiais e fluxos planejados. A Concretiza conduz cada etapa com responsabilidade, qualidade e compromisso com os prazos.",
      },
    ],
    galeria: [
      { nome: "hotel-palmeiras", alt: "Hotel com fachada de vidro cercado por palmeiras" },
      { nome: "nobile-suites", alt: "Fachada envidraçada do hotel Nobile Suites" },
      { nome: "academia", alt: "Academia de hotel com esteiras e equipamentos de musculação" },
    ],
  },
  {
    slug: "comerciais",
    titulo: "Obras comerciais",
    tituloCurto: "Comerciais",
    resumo:
      "Construção, retrofit e modernização de lojas, fachadas e espaços comerciais que fortalecem marcas e otimizam operações.",
    descricaoSeo:
      "Obras comerciais rápidas para lojas, franquias, farmácias e clínicas: construção, retrofit e fachadas com prazo cumprido e mínimo impacto na operação.",
    foto: { nome: "loja-eva-bella", alt: "Vitrine iluminada de loja de moda em shopping" },
    destaques: [
      "Lojas e franquias",
      "Farmácias",
      "Clínicas e estéticas",
      "Fachadas, retrofit e modernização",
    ],
    obras: [
      {
        titulo: "Giga+",
        local: "Maringá (PR)",
        texto:
          "30 dias entre o início da obra e a loja pronta para inaugurar: adequações elétricas e hidráulicas, infraestrutura para climatização, pisos, paredes e forros com isolamento acústico, vedação do telhado, fachada e reforço estrutural para a retirada de um pilar.",
      },
      {
        titulo: "Empório Francesca",
        local: "Maringá (PR)",
        texto:
          "Execução do projeto arquitetônico em um espaço comercial completo, com atenção aos detalhes e à qualidade construtiva. Hoje o Empório Francesca faz parte da rede Mercado Sophia.",
        foto: { nome: "emporio-francesca", alt: "Fachada do Empório Francesca com tijolos aparentes e toldo preto" },
      },
      {
        titulo: "Farmácias, lojas, clínicas e franquias",
        texto:
          "No mercado de franquias, cada dia conta. A Concretiza executa obras com foco em eficiência, qualidade e cumprimento de prazos para acelerar a abertura de novas unidades.",
        foto: { nome: "farmacia-sao-joao", alt: "Fachada de unidade das Farmácias São João recém-inaugurada" },
      },
    ],
    galeria: [
      { nome: "farmacia-interior", alt: "Interior de farmácia com gôndolas organizadas e iluminação linear" },
      { nome: "loja-eva-bella-vitrine", alt: "Entrada de loja de moda com portal claro e lustre" },
      { nome: "loja-luiza-fazzolli", alt: "Loja de moda com fachada em mármore e letreiro dourado" },
      { nome: "fashion-hall", alt: "Fachada de centro comercial Fashion Hall com palmeiras" },
      { nome: "fachada-drugovich", alt: "Fachada da concessionária Drugovich vista de baixo" },
      { nome: "loja-madri-belle", alt: "Vitrine da loja Madri Belle com manequins de vestidos de festa" },
      { nome: "loja-cechia", alt: "Loja Cechia com painel vazado de madeira e manequins na entrada" },
      { nome: "loja-desnude", alt: "Fachada da loja Desnude em shopping, com toldo preto" },
      { nome: "predio-comercial", alt: "Prédio comercial em reforma de fachada, com andaimes" },
    ],
  },
  {
    slug: "industriais",
    titulo: "Obras industriais",
    tituloCurto: "Industriais",
    resumo:
      "Execução de estruturas industriais, galpões e ambientes operacionais com eficiência técnica, segurança e precisão construtiva.",
    descricaoSeo:
      "Obras industriais e galpões com eficiência operacional, precisão técnica e execução de grande porte. Peça um orçamento ao Grupo Concretiza.",
    foto: { nome: "galpao-em-obra", alt: "Galpão em construção com estrutura de concreto e cobertura metálica" },
    destaques: [
      "Galpões e centros logísticos",
      "Estruturas industriais",
      "Ambientes operacionais",
      "Obras de grande porte",
    ],
    obras: [
      {
        titulo: "Obras rápidas de grande porte",
        texto:
          "Quando o prazo importa, experiência e eficiência fazem toda a diferença. Cada etapa é planejada para garantir agilidade na execução, sem abrir mão da qualidade e da segurança que uma grande obra exige.",
      },
    ],
    // TODO: o site atual não tem fotos de obras industriais. Pedir ao cliente.
    galeria: [{ nome: "obra-guindaste", alt: "Edifício em construção com guindaste e andaimes" }],
  },
  {
    slug: "residenciais",
    titulo: "Obras residenciais",
    tituloCurto: "Residenciais alto padrão",
    resumo:
      "Obras residenciais executadas com alto padrão de acabamento, funcionalidade e compromisso em cada detalhe.",
    descricaoSeo:
      "Construção de residências de alto padrão: acabamento, funcionalidade e prazo de entrega. Conheça obras como a Casa Oliveira.",
    foto: { nome: "residencia-piscina", alt: "Residência de alto padrão com piscina, deck e jardim tropical" },
    destaques: [
      "Residências de alto padrão",
      "Acabamentos especiais",
      "Integração entre arquitetura e paisagismo",
      "Prazo e transparência na obra",
    ],
    obras: [
      {
        titulo: "Casa Oliveira",
        texto:
          "Um projeto que traduz o alto padrão construtivo e valoriza a integração entre arquitetura e natureza, em perfeita harmonia com o entorno. Um espaço pensado para viver, receber e criar memórias.",
        foto: { nome: "casa-oliveira-fachada", alt: "Casa Oliveira: esquina envidraçada com oliveira no jardim e laje de concreto aparente" },
      },
      {
        titulo: "Residência alto padrão",
        texto:
          "Um projeto sofisticado transformado em realidade, unindo qualidade construtiva, atenção aos acabamentos e compromisso com o prazo de entrega.",
        foto: { nome: "residencia-piscina", alt: "Área de lazer com piscina e spa em residência de alto padrão" },
      },
    ],
    galeria: [
      { nome: "casa-oliveira-sala", alt: "Sala da Casa Oliveira aberta para a piscina por portas de vidro" },
      { nome: "interior-alto-padrao", alt: "Sala de estar com pé-direito duplo e escada de vidro" },
      { nome: "espelho-dagua", alt: "Jardim com espelho d'água e palmeiras" },
    ],
  },
];

export const ESPECIALIDADES = [
  {
    titulo: "Obras rápidas comerciais",
    texto: "Execução ágil para lojas, franquias e operações comerciais com mínimo impacto na operação.",
    foto: { nome: "farmacia-interior", alt: "Interior de farmácia pronta para inaugurar" },
    href: "/obras/comerciais",
  },
  {
    titulo: "Execução de empreendimentos",
    texto: "Da fundação ao acabamento, executamos empreendimentos com excelência técnica e previsibilidade.",
    foto: { nome: "edificio-portico-madeira", alt: "Edifício comercial com pórtico revestido em madeira" },
    href: "/obras/corporativas",
  },
  {
    titulo: "Obras industriais",
    texto: "Soluções industriais com eficiência operacional, precisão técnica e execução de grande porte.",
    foto: { nome: "galpao-em-obra", alt: "Galpão industrial em construção" },
    href: "/obras/industriais",
  },
];

export const ADMINISTRACAO = {
  titulo: "Administração de obras",
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

export const DEPOIMENTOS = [
  {
    nome: "Cátia Ribeiro",
    texto: [
      "Quero deixar registrado o quanto fiquei satisfeita com a experiência que tive com o Grupo Concretiza nos últimos dias.",
      "Desde o primeiro contato, através do Eng. Érico Vicentin, fui atendida com muita atenção, profissionalismo e respeito.",
      "Percebi uma equipe tecnicamente preparada, comprometida com os prazos e atenta aos detalhes durante toda a execução.",
      "Parabéns a todo o time e que continuem “Projetando Ideias e Concretizando Sonhos!”.",
    ],
  },
  {
    nome: "Ednaldo Silva",
    texto: [
      "Os serviços contratados foram executados seguindo os requisitos do projeto e dentro das normas e padrões da construção civil, a empresa cumpriu fielmente o cronograma estabelecido, além disso possui um corpo de engenheiros e profissionais especializados nas mais diversas frentes da construção civil.",
      "Seguramente recomendaria e também contrataria novamente uma prestação de serviços via Concretiza!",
    ],
  },
];

// Ordem e nomes conforme a seção "Nossos Clientes" do site atual.
export const CLIENTES: { nome: string; logo: string; claro?: boolean }[] = [
  { nome: "McDonald's", logo: "cliente-mcdonalds" },
  { nome: "Cacau Show", logo: "cliente-cacau-show" },
  { nome: "Caixa", logo: "cliente-caixa" },
  { nome: "Bradesco", logo: "cliente-bradesco" },
  { nome: "Jeep", logo: "cliente-jeep", claro: true },
  { nome: "Senac", logo: "cliente-senac" },
  { nome: "Ipiranga", logo: "cliente-ipiranga" },
  { nome: "Farmácias São João", logo: "cliente-farmacias-sao-joao" },
  { nome: "Coocam", logo: "cliente-coocam" },
  { nome: "Camargo Corrêa", logo: "cliente-camargo-correa", claro: true },
  { nome: "Paraná Moda Park", logo: "cliente-parana-moda-park" },
  { nome: "Copercampos", logo: "cliente-copercampos", claro: true },
  { nome: "Perdigão", logo: "cliente-perdigao" },
  { nome: "Magalu", logo: "cliente-magalu" },
  { nome: "Fiat", logo: "cliente-fiat" },
  { nome: "VestSul", logo: "cliente-vestsul", claro: true },
  { nome: "Senai", logo: "cliente-senai" },
  { nome: "Hospital Bom Samaritano", logo: "cliente-bom-samaritano" },
  { nome: "Além do Olhar", logo: "cliente-alem-do-olhar", claro: true },
  { nome: "Celesc", logo: "cliente-celesc" },
  { nome: "Empório Francesca", logo: "cliente-emporio-francesca" },
  { nome: "Avenida Fashion", logo: "cliente-avenida-fashion" },
  { nome: "Nobile Suites", logo: "cliente-nobile-suites" },
  { nome: "Drugovich", logo: "cliente-drugovich" },
  { nome: "Samae", logo: "cliente-samae", claro: true },
  { nome: "Enercan", logo: "cliente-enercan", claro: true },
];
