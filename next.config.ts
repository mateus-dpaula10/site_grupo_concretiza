import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./src/lib/larguras.mjs";
import { REDIRECTS } from "./src/lib/redirects.mjs";

// Padrão: export estático (pasta out/), servido pelo nginx no aaPanel.
// Com NEXT_MODO=servidor o site roda com `next start` (PM2) e os redirects 301
// das URLs antigas do Wix passam a valer pelo próprio Next. No export estático
// os mesmos redirects estão em deploy/nginx-redirects.conf.
const modoServidor = process.env.NEXT_MODO === "servidor";

const nextConfig: NextConfig = {
  ...(modoServidor
    ? {
        async redirects() {
          return REDIRECTS.map(({ de, para }) => ({ source: de, destination: para, permanent: true }));
        },
      }
    : { output: "export" as const }),
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
