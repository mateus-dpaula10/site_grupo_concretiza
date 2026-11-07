import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grupo Concretiza",
    short_name: "Concretiza",
    description: "Engenharia e execução de obras corporativas, comerciais, industriais e residenciais.",
    lang: "pt-BR",
    start_url: "/",
    display: "standalone",
    background_color: "#eceeec",
    theme_color: "#0c2b25",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
