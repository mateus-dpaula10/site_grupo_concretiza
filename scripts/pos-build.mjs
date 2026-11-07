// Ajuste pós-build do export estático (roda sozinho via "postbuild").
//
// O Next 16.4 grava os payloads de prefetch por segmento em pastas aninhadas
// (out/contato/__next.contato/__PAGE__.txt), mas o roteador do navegador pede o nome
// "achatado" (/contato/__next.contato.__PAGE__.txt). Sem isso, cada <Link> visível gera
// um 404 no console e a navegação perde o prefetch. Aqui criamos a cópia achatada.
// Quando o Next corrigir, este script passa a não encontrar nada para fazer.
import fs from "node:fs";
import path from "node:path";

const out = path.resolve(import.meta.dirname, "..", "out");
if (!fs.existsSync(out)) process.exit(0);

let copias = 0;
function percorrer(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const caminho = path.join(dir, item.name);
    if (!item.isDirectory()) continue;
    if (item.name.startsWith("__next.")) achatar(caminho, dir, [item.name]);
    else percorrer(caminho);
  }
}
function achatar(dir, base, partes) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const caminho = path.join(dir, item.name);
    if (item.isDirectory()) achatar(caminho, base, [...partes, item.name]);
    else {
      const destino = path.join(base, [...partes, item.name].join("."));
      if (!fs.existsSync(destino)) {
        fs.copyFileSync(caminho, destino);
        copias++;
      }
    }
  }
}
percorrer(out);
console.log(`pos-build: ${copias} payloads de prefetch achatados`);
