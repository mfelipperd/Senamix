# SENAMIX Sonorização — site

Site institucional da **SENAMIX Sonorização**: som, iluminação, painéis de LED, DJ, palco/estrutura e efeitos especiais para eventos.

Contato: (91) 98460-4539 — WhatsApp

## Stack

HTML + CSS + JavaScript puro, sem build. Basta abrir `index.html` ou servir a pasta:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Estrutura

```
index.html          # página única (seções: serviços, eventos, pacotes, como funciona, portfólio, orçamento, FAQ)
css/style.css       # estilos (tema escuro + gradiente da marca)
js/main.js          # menu mobile, equalizador animado, formulário -> WhatsApp
assets/             # logo (onda sonora em SVG) e favicon
```

O formulário de orçamento não precisa de backend: monta a mensagem e abre o WhatsApp com o texto preenchido.

## Pendências

- [ ] Fotos reais no portfólio (`.gallery__item` → `style="background-image:url(assets/fotos/...)"`)
- [ ] @ do Instagram no rodapé
- [ ] Confirmar lista de serviços/equipamentos e cidades atendidas
- [ ] Domínio (ex.: senamix.com.br) + deploy (GitHub Pages, Vercel ou Netlify)

## Deploy no GitHub Pages

Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.
