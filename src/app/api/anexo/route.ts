import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import { ANEXO } from "@/lib/anexo";

// Anexo do formulário de contato (pedido do cliente em 25/11/2026).
// O arquivo não passa por aqui: o navegador pede uma autorização (client token) a esta rota e
// envia direto para o Vercel Blob (store "concretiza-anexos", pública, região GRU1). Assim não
// vale o limite de 4,5 MB do corpo das funções da Vercel. O link do arquivo vai na mensagem do
// WhatsApp. Precisa da variável BLOB_READ_WRITE_TOKEN (criada ao conectar a store ao projeto).

// Só aceita pedidos vindos do próprio site (barreira simples contra uso da rota por terceiros).
function origemPermitida(origem: string | null) {
  if (!origem) return false;
  try {
    const { hostname } = new URL(origem);
    return (
      hostname === "localhost" ||
      hostname.endsWith("grupoconcretiza.com.br") ||
      (hostname.startsWith("site-grupo-concretiza") && hostname.endsWith(".vercel.app")) ||
      hostname.startsWith("sitegrupoconcretiza")
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!origemPermitida(request.headers.get("origin"))) {
    return NextResponse.json({ erro: "Origem não permitida." }, { status: 403 });
  }
  const body = (await request.json()) as HandleUploadBody;
  try {
    const resposta = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        const extensao = pathname.split(".").pop()?.toLowerCase() ?? "";
        if (!pathname.startsWith(`${ANEXO.pasta}/`) || !(extensao in ANEXO.tipos)) {
          throw new Error("Tipo de arquivo não aceito.");
        }
        return {
          allowedContentTypes: [...new Set(Object.values(ANEXO.tipos))],
          maximumSizeInBytes: ANEXO.maxBytes,
          addRandomSuffix: true, // o link fica impossível de adivinhar
          ttlDays: ANEXO.dias, // a Vercel apaga o arquivo sozinha depois desse prazo
        };
      },
    });
    return NextResponse.json(resposta);
  } catch (e) {
    return NextResponse.json({ erro: e instanceof Error ? e.message : "Falha no envio." }, { status: 400 });
  }
}
