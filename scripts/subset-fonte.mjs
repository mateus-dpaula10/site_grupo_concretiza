// Gera src/fonts/archivo-variavel.woff2: Archivo variável (Google Fonts, OFL) reduzida aos
// caracteres do português e às faixas de eixo usadas no site (peso 400–800, largura 80–125%).
// Caiu de 88 KB para 60 KB. Só precisa rodar de novo se o site passar a usar outro
// peso/largura ou caractere fora da lista.
//
// Uso (subset-font não é dependência fixa do projeto):
//   npm i --no-save subset-font@2
//   node scripts/subset-fonte.mjs <Archivo-latin.woff2 original> src/fonts/archivo-variavel.woff2
import fs from "node:fs";
import subsetFont from "subset-font";

const [entrada, saida] = process.argv.slice(2);
if (!entrada || !saida) {
  console.error("uso: node scripts/subset-fonte.mjs <entrada.woff2> <saida.woff2>");
  process.exit(1);
}
let texto = "";
for (let c = 0x20; c <= 0x7e; c++) texto += String.fromCharCode(c);
texto += "ÁÀÂÃÄÇÉÈÊËÍÌÎÏÑÓÒÔÕÖÚÙÛÜáàâãäçéèêëíìîïñóòôõöúùûüºª°–—‘’“”…•©®·×€£§¹²³½ ";

const resultado = await subsetFont(fs.readFileSync(entrada), texto, {
  targetFormat: "woff2",
  variationAxes: { wght: { min: 400, max: 800 }, wdth: { min: 80, max: 125 } },
});
fs.writeFileSync(saida, resultado);
console.log(`${saida}: ${Math.round(resultado.length / 1024)} KB`);
