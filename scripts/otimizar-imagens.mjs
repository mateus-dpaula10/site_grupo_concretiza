// Gera as variantes WebP responsivas de assets/ em public/img/ e o mapa de dimensões em
// src/lib/imagens.gerado.json. Rodar com `npm run imagens` sempre que trocar/adicionar
// uma imagem em assets/fotos ou assets/logos. O loader (src/lib/image-loader.ts) aponta
// para public/img/<nome>-<largura>.webp, por isso as larguras abaixo precisam bater com
// images.deviceSizes + images.imageSizes do next.config.ts.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { LARGURAS } from '../src/lib/larguras.mjs';

const raiz = path.resolve(import.meta.dirname, '..');
const saida = path.join(raiz, 'public', 'img');
fs.mkdirSync(saida, { recursive: true });

const mapa = {};
for (const pasta of ['fotos', 'logos']) {
  const dir = path.join(raiz, 'assets', pasta);
  for (const arquivo of fs.readdirSync(dir).sort()) {
    if (!/\.(jpe?g|png|webp)$/i.test(arquivo)) continue;
    const nome = arquivo.replace(/\.[a-z]+$/i, '');
    const origem = path.join(dir, arquivo);
    const { width, height } = await sharp(origem).metadata();
    mapa[nome] = { w: width, h: height };
    const qualidade = pasta === 'logos' ? 90 : 72;
    for (const w of LARGURAS) {
      const destino = path.join(saida, `${nome}-${w}.webp`);
      if (fs.existsSync(destino) && fs.statSync(destino).mtimeMs > fs.statSync(origem).mtimeMs) continue;
      // Nunca amplia: acima da largura original, grava a original com o nome da largura pedida.
      await sharp(origem)
        .resize({ width: Math.min(w, width), withoutEnlargement: true })
        .webp({ quality: qualidade, effort: 5 })
        .toFile(destino);
    }
  }
}
fs.writeFileSync(path.join(raiz, 'src', 'lib', 'imagens.gerado.json'), JSON.stringify(mapa, null, 2) + '\n');
console.log(`${Object.keys(mapa).length} imagens x ${LARGURAS.length} larguras em public/img`);
