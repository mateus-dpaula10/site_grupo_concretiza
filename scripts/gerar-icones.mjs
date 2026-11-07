// Gera favicon, ícones do app/manifest e a imagem de compartilhamento (Open Graph)
// a partir do logo e de uma foto de obra. Rodar com `npm run icones`.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const raiz = path.resolve(import.meta.dirname, "..");
const app = path.join(raiz, "src", "app");
const pub = path.join(raiz, "public");
const FLORESTA = "#0c2b25";

// Símbolo "C" com a folha verde, recortado do arquivo original do cliente (Wix > Arquivos do site).
const simbolo = await sharp(path.join(raiz, "assets/logos/simbolo-concretiza.png")).png().toBuffer();

async function icone(tamanho, margem) {
  const interno = Math.round(tamanho * (1 - margem * 2));
  const s = await sharp(simbolo).resize(interno, interno, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  return sharp({ create: { width: tamanho, height: tamanho, channels: 4, background: FLORESTA } })
    .composite([{ input: s, gravity: "center" }])
    .png()
    .toBuffer();
}

fs.writeFileSync(path.join(app, "icon.png"), await icone(512, 0.14));
fs.writeFileSync(path.join(app, "apple-icon.png"), await icone(180, 0.14));
fs.writeFileSync(path.join(pub, "icon-192.png"), await icone(192, 0.14));
fs.writeFileSync(path.join(pub, "icon-512.png"), await icone(512, 0.14));
// maskable: área segura de 80%, por isso margem maior
fs.writeFileSync(path.join(pub, "icon-maskable-512.png"), await icone(512, 0.24));

// favicon.ico com PNGs embutidos (16, 32, 48)
const tamanhos = [16, 32, 48];
const pngs = await Promise.all(tamanhos.map((t) => icone(t, 0.08)));
const cab = Buffer.alloc(6 + 16 * pngs.length);
cab.writeUInt16LE(0, 0);
cab.writeUInt16LE(1, 2);
cab.writeUInt16LE(pngs.length, 4);
let offset = cab.length;
pngs.forEach((png, i) => {
  const o = 6 + i * 16;
  cab.writeUInt8(tamanhos[i], o);
  cab.writeUInt8(tamanhos[i], o + 1);
  cab.writeUInt8(0, o + 2);
  cab.writeUInt8(0, o + 3);
  cab.writeUInt16LE(1, o + 4);
  cab.writeUInt16LE(32, o + 6);
  cab.writeUInt32LE(png.length, o + 8);
  cab.writeUInt32LE(offset, o + 12);
  offset += png.length;
});
fs.writeFileSync(path.join(app, "favicon.ico"), Buffer.concat([cab, ...pngs]));

// Open Graph 1200x630: foto de obra escurecida + logo.
const foto = await sharp(path.join(raiz, "assets/fotos/obra-guindaste.jpg")).resize(1200, 630, { fit: "cover" }).toBuffer();
const veu = Buffer.from(
  `<svg width="1200" height="630"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="${FLORESTA}" stop-opacity=".96"/><stop offset=".62" stop-color="${FLORESTA}" stop-opacity=".78"/><stop offset="1" stop-color="${FLORESTA}" stop-opacity=".15"/></linearGradient></defs><rect width="1200" height="630" fill="url(#g)"/></svg>`,
);
const logo = await sharp(path.join(raiz, "assets/logos/logo-concretiza-branco.png")).resize(560).toBuffer();
const texto = Buffer.from(
  `<svg width="1000" height="200"><style>.t{font:700 50px Arial,Helvetica,sans-serif;fill:#fff}.s{font:400 30px Arial,Helvetica,sans-serif;fill:#7fd3c0}</style><text class="t" x="0" y="60">Engenharia e execução de obras</text><text class="s" x="0" y="120">Corporativas, comerciais, industriais e residenciais</text></svg>`,
);
await sharp(foto)
  .composite([
    { input: veu, left: 0, top: 0 },
    { input: logo, left: 80, top: 170 },
    { input: texto, left: 80, top: 340 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(app, "opengraph-image.jpg"));

console.log("ícones e opengraph-image gerados");
