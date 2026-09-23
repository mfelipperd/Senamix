# SENAMIX Sonorização — site

Site institucional da **SENAMIX Sonorização**: som, iluminação, painéis de LED, DJ, palco/estrutura e efeitos especiais para eventos.

Contato: (91) 98460-4539 — WhatsApp

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- CSS puro (`app/globals.css`), fontes via `next/font` (Exo 2 + Inter)
- Página 100% estática (SSG)

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Estrutura

```
app/
  layout.tsx      # fontes, metadados/SEO, JSON-LD (LocalBusiness)
  page.tsx        # página única: hero, serviços, eventos, pacotes, como funciona, portfólio, orçamento, FAQ
  globals.css     # tema escuro + gradiente da marca
  icon.svg        # favicon
  opengraph-image.tsx  # imagem de compartilhamento 1200x630 (WhatsApp, Instagram, Facebook, X)
  twitter-image.tsx    # mesma imagem para o X/Twitter
  apple-icon.tsx       # ícone 180x180 (tela inicial do iPhone, alguns apps de mensagem)
  sitemap.ts, robots.ts
components/
  Header.tsx      # menu (mobile com toggle)
  Equalizer.tsx   # equalizador animado do hero
  QuoteForm.tsx   # formulário de orçamento -> abre WhatsApp com a mensagem pronta
  RevealOnScroll.tsx, WaLink.tsx, WhatsAppIcon.tsx
lib/site.ts       # TODO o conteúdo editável: telefone, serviços, eventos, pacotes, FAQ, galeria
lib/og.tsx        # layout da imagem de compartilhamento (reutilizável por página)
assets/fonts/     # fontes usadas na imagem de compartilhamento
assets/icons/     # ícones Phosphor (SVG) usados na imagem de compartilhamento
public/logo-wave.svg
```

Para mudar textos, serviços, pacotes ou FAQ, edite só `lib/site.ts`.

## Variáveis de ambiente

| Nome | Uso | Padrão |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica (SEO, sitemap, imagens de compartilhamento) | domínio de produção da Vercel (`VERCEL_PROJECT_PRODUCTION_URL`) |

## Compartilhamento (Open Graph)

A imagem é gerada no build a partir de `lib/og.tsx`. Para uma página nova ter a própria imagem,
crie `app/<pagina>/opengraph-image.tsx` chamando `renderOgImage({ headline: "..." })`.

Depois de publicar, force os apps a relerem o link:
- Facebook/Instagram/WhatsApp: https://developers.facebook.com/tools/debug/ → "Scrape Again"
- LinkedIn: https://www.linkedin.com/post-inspector/

## Deploy

Recomendado: **Vercel** — importar o repositório, sem configuração extra.

## Pendências

- [ ] Fotos reais no portfólio (`public/portfolio/` + campo `image` em `lib/site.ts`)
- [ ] @ do Instagram (`site.instagram` em `lib/site.ts`)
- [ ] Confirmar lista de serviços/equipamentos e cidades atendidas
- [ ] Domínio (ex.: senamix.com.br)
