// Nota e avaliações reais do perfil "Grupo Concretiza - Construtora" no Google (pedido do cliente
// em 25/11/2026), pela Places API (New), projeto "concretiza-site" no Google Cloud.
// - A chave fica só no servidor (variável GOOGLE_PLACES_KEY na Vercel), nunca vai para o navegador.
// - Pedir "reviews" cai no SKU "Place Details Enterprise + Atmosphere": 1.000 consultas grátis/mês.
//   Para nunca passar disso (pedido do usuário em 26/11/2026), a resposta é reaproveitada por
//   2 horas: no máximo 12 consultas/dia, ~360/mês, mais 1 por deploy. Não baixar sem refazer a conta.
// - Regras do Google ao exibir: nome e foto do autor, link para a avaliação no Google Maps e o
//   crédito "Google Maps" (ver AvaliacoesGoogle.tsx).
// Sem a chave ou com erro na API, devolve null e o site mostra o selo sem números.

export const GOOGLE_PLACE_ID = "ChIJMTvfTeDX7JQRaYA44HjFegs";
// 2 horas. A home usa o mesmo valor em "export const revalidate" (lá precisa ser número literal).
const INTERVALO_SEGUNDOS = 7200;

export type Avaliacao = {
  autor: string;
  fotoAutor?: string;
  perfilAutor?: string;
  nota: number;
  quando: string;
  texto: string;
  link?: string;
};

export type DadosGoogle = {
  nota: number;
  total: number;
  linkPerfil: string;
  avaliacoes: Avaliacao[];
};

type RespostaPlaces = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    googleMapsUri?: string;
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }[];
};

export async function buscarAvaliacoesGoogle(): Promise<DadosGoogle | null> {
  const chave = process.env.GOOGLE_PLACES_KEY;
  if (!chave) return null;
  try {
    const resposta = await fetch(`https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=pt-BR&regionCode=BR`, {
      headers: {
        "X-Goog-Api-Key": chave,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      next: { revalidate: INTERVALO_SEGUNDOS },
    });
    if (!resposta.ok) return null;
    const d = (await resposta.json()) as RespostaPlaces;
    if (typeof d.rating !== "number" || !d.userRatingCount || !d.googleMapsUri) return null;
    return {
      nota: d.rating,
      total: d.userRatingCount,
      linkPerfil: d.googleMapsUri,
      avaliacoes: (d.reviews ?? [])
        .map((r) => ({
          autor: r.authorAttribution?.displayName ?? "Cliente no Google",
          fotoAutor: r.authorAttribution?.photoUri,
          perfilAutor: r.authorAttribution?.uri,
          nota: r.rating ?? 0,
          quando: r.relativePublishTimeDescription ?? "",
          texto: (r.text?.text ?? r.originalText?.text ?? "").trim(),
          link: r.googleMapsUri,
        }))
        .filter((a) => a.texto),
    };
  } catch {
    return null;
  }
}
