import type { Metadata, Viewport } from "next";
import { Exo_2, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["800", "900"],
  style: "italic",
  variable: "--font-exo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "SENAMIX Sonorização | Som, Iluminação e Painéis de LED para Eventos",
  description:
    "SENAMIX Sonorização: som profissional, iluminação, painéis de LED, DJ, palco e efeitos especiais para casamentos, formaturas, 15 anos, shows e eventos corporativos. Orçamento pelo WhatsApp (91) 98460-4539.",
  openGraph: {
    title: "SENAMIX Sonorização",
    description: "Som, luz e imagem para o seu evento acontecer. Peça seu orçamento pelo WhatsApp.",
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: "Sonorização, iluminação, painéis de LED e estrutura para eventos.",
  telephone: site.phoneTel,
  url: site.url,
  areaServed: site.area,
  priceRange: "Sob consulta",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${exo.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
