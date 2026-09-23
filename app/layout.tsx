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

const title = "SENAMIX Sonorização | Som, Iluminação e Painéis de LED para Eventos";
const description =
  "Som profissional, iluminação, painéis de LED, DJ, palco e efeitos especiais para casamentos, formaturas, 15 anos, shows e eventos corporativos. Orçamento pelo WhatsApp (91) 98460-4539.";
const shareDescription =
  "Som, luz, painéis de LED e DJ para o seu evento acontecer. Peça seu orçamento pelo WhatsApp (91) 98460-4539.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | SENAMIX Sonorização" },
  description,
  applicationName: site.name,
  keywords: [
    "sonorização",
    "som para eventos",
    "iluminação para eventos",
    "painel de LED",
    "telão de LED",
    "DJ",
    "casamento",
    "15 anos",
    "formatura",
    "evento corporativo",
    "Pará",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SENAMIX Sonorização",
    description: shareDescription,
    url: "/",
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "SENAMIX Sonorização",
    description: shareDescription,
  },
  robots: { index: true, follow: true },
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
