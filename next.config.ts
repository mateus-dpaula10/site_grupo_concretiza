import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./src/lib/larguras.mjs";
import { REDIRECTS } from "./src/lib/redirects.mjs";

// Até 26/11/2026 o site era gerado como export estático (pasta out/). Com o anexo do formulário
// (rota /api/anexo, que autoriza o envio do arquivo ao Vercel Blob) ele passou a rodar como Next
// normal: as páginas continuam pré-geradas no build, só a rota da API roda sob demanda.
// Os redirects 301 das URLs antigas do Wix valem pelo Next e também pelo vercel.json.
const nextConfig: NextConfig = {
  async redirects() {
    return REDIRECTS.map(({ de, para }) => ({ source: de, destination: para, permanent: true }));
  },
  poweredByHeader: false,
  devIndicators: false,
  images: {
    // As variantes WebP são geradas por scripts/otimizar-imagens.mjs (sem otimizador em runtime).
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
