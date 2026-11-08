import { EMPRESA, SITE_URL } from "@/lib/site";

export function JsonLd({ dados }: { dados: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}

export const ORGANIZACAO_ID = `${SITE_URL}/#organizacao`;

export function dadosOrganizacao() {
  const e = EMPRESA.endereco;
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": ORGANIZACAO_ID,
    name: EMPRESA.nome,
    alternateName: EMPRESA.nomeCurto,
    legalName: EMPRESA.razaoSocial,
    taxID: EMPRESA.cnpj,
    slogan: EMPRESA.slogan,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/opengraph-image.jpg`,
    email: EMPRESA.email,
    telephone: EMPRESA.telefoneE164,
    foundingDate: String(EMPRESA.desde),
    address: {
      "@type": "PostalAddress",
      streetAddress: e.rua,
      addressLocality: e.cidade,
      addressRegion: e.uf,
      addressCountry: "BR",
      ...(e.cep ? { postalCode: e.cep } : {}),
    },
    areaServed: "BR",
    sameAs: [EMPRESA.instagram, EMPRESA.linkedin],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: EMPRESA.telefoneE164,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
      {
        "@type": "ContactPoint",
        telephone: `+${EMPRESA.whatsappNumero}`,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    ],
  };
}

export function dadosBreadcrumb(itens: { nome: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ nome: "Home", href: "/" }, ...itens].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nome,
      item: `${SITE_URL}${it.href === "/" ? "" : it.href}`,
    })),
  };
}
