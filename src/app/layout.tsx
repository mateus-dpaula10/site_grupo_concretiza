import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Cabecalho } from "@/components/Cabecalho";
import { JsonLd, dadosOrganizacao } from "@/components/JsonLd";
import { Rodape } from "@/components/Rodape";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Uma família só (Archivo), variável em peso e largura: títulos expandidos, corpo normal.
// Arquivo local reduzido por scripts/subset-fonte.mjs (60 KB em vez de 88 KB).
const archivo = localFont({
  src: "../fonts/archivo-variavel.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  declarations: [{ prop: "font-stretch", value: "80% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Grupo Concretiza | Engenharia e execução de obras",
    template: "%s | Grupo Concretiza",
  },
  description:
    "Soluções completas em engenharia e execução de obras corporativas, comerciais, industriais e residenciais de alto padrão. Desde 2006, com mais de 747 projetos entregues.",
  applicationName: "Grupo Concretiza",
  authors: [{ name: "Grupo Concretiza" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Grupo Concretiza",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0c2b25",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={archivo.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <JsonLd dados={dadosOrganizacao()} />
        <Cabecalho />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Rodape />
      </body>
    </html>
  );
}
