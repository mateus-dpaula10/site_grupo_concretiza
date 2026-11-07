import type { Metadata, Viewport } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import { Cabecalho } from "@/components/Cabecalho";
import { JsonLd, dadosOrganizacao } from "@/components/JsonLd";
import { Rodape } from "@/components/Rodape";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// As mesmas famílias do site original (Wix Madefor), publicadas no Google Fonts.
const madeforDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-madefor-display",
});
const madeforText = Wix_Madefor_Text({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-madefor-text",
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
  themeColor: "#0f1309",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${madeforDisplay.variable} ${madeforText.variable}`}>
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
