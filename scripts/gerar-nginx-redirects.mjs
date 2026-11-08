// Gera deploy/nginx-redirects.conf e vercel.json a partir de src/lib/redirects.mjs.
// O nginx compara `location =` com a URI já decodificada, então o caminho vai em UTF-8.
import fs from "node:fs";
import path from "node:path";
import { REDIRECTS } from "../src/lib/redirects.mjs";

const raiz = path.resolve(import.meta.dirname, "..");
const linhas = [
  "# Gerado por scripts/gerar-nginx-redirects.mjs. Não editar à mão.",
  "# Incluir dentro do bloco server {} do site (aaPanel > Site > Config), antes do location /.",
  "",
  ...REDIRECTS.map(({ de, para }) => `location = "${decodeURI(de)}" { return 301 ${para}; }`),
  "# Área de membros e páginas de sistema do Wix que não existem mais",
  "location ^~ /members-area/ { return 301 /; }",
  "",
];
fs.mkdirSync(path.join(raiz, "deploy"), { recursive: true });
fs.writeFileSync(path.join(raiz, "deploy", "nginx-redirects.conf"), linhas.join("\n"));
console.log(`deploy/nginx-redirects.conf: ${REDIRECTS.length + 1} regras`);

// O caminho vai nas duas formas (percent-encoded e UTF-8) para casar com qualquer uma.
const fontes = REDIRECTS.flatMap(({ de, para }) => [...new Set([de, decodeURI(de)])].map((source) => ({ source, para })));
const vercel = {
  redirects: [
    ...fontes.map(({ source, para }) => ({ source, destination: para, permanent: true })),
    { source: "/members-area/:caminho*", destination: "/", permanent: true },
  ],
};
fs.writeFileSync(path.join(raiz, "vercel.json"), JSON.stringify(vercel, null, 2) + "\n");
console.log(`vercel.json: ${vercel.redirects.length} regras`);
