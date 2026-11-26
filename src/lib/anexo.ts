// Regras do anexo do formulário, usadas no navegador (FormContato) e na rota /api/anexo.
// Limites pensados para caber no plano grátis do Vercel Blob (1 GB guardado por mês):
// 20 MB por arquivo e exclusão automática depois de 60 dias.
export const ANEXO = {
  pasta: "anexos",
  maxBytes: 20 * 1024 * 1024,
  dias: 60,
  // extensão → tipo do arquivo. DWG não tem tipo padrão nos navegadores, por isso o tipo é
  // definido aqui pela extensão (e não pelo que o navegador informa).
  tipos: {
    pdf: "application/pdf",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    heic: "image/heic",
    dwg: "image/vnd.dwg",
    zip: "application/zip",
  } as Record<string, string>,
};

export const ANEXO_ACCEPT = Object.keys(ANEXO.tipos)
  .map((e) => `.${e}`)
  .join(",");

// Nome seguro para a URL: sem acentos, espaços ou símbolos (a Vercel acrescenta um sufixo aleatório).
export function caminhoAnexo(nomeArquivo: string) {
  const partes = nomeArquivo.split(".");
  const extensao = (partes.length > 1 ? partes.pop()! : "").toLowerCase();
  const base =
    partes
      .join(".")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-zA-Z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase()
      .slice(0, 60) || "arquivo";
  return { caminho: `${ANEXO.pasta}/${base}.${extensao}`, extensao };
}
