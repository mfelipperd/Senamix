import type { CSSProperties } from "react";
import { InstagramLogo, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Equalizer } from "@/components/Equalizer";
import { Header } from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WaLink } from "@/components/WaLink";
import { events, faq, gallery, highlights, plans, services, site, steps } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="hero">
          <Equalizer />
          <div className="container hero__content">
            <img className="hero__logo" src="/logo-wave.svg" alt="" width={360} height={293} />
            <h1 className="wordmark">SENAMIX</h1>
            <p className="tagline">
              <span />
              SONORIZAÇÃO
              <span />
            </p>
            <p className="hero__lead">
              Som, luz e imagem para o seu evento acontecer.
              <br />
              Sonorização, iluminação, painéis de LED, DJ e estrutura completa — da montagem à última música.
            </p>
            <div className="hero__cta">
              <WaLink className="btn btn--grad" message="Olá! Vim pelo site e quero um orçamento para o meu evento.">
                <WhatsappLogo size={22} weight="fill" />
                Pedir orçamento no WhatsApp
              </WaLink>
              <a className="btn btn--ghost" href="#servicos">
                Ver serviços
              </a>
            </div>
            <a className="hero__phone" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </div>
        </section>

        {/* DESTAQUES */}
        <section className="stats container" aria-label="Destaques">
          {highlights.map((h) => (
            <div className="stat" key={h.title}>
              <strong>{h.title}</strong>
              <span>{h.text}</span>
            </div>
          ))}
        </section>

        {/* SERVIÇOS */}
        <section className="section" id="servicos">
          <div className="container">
            <p className="eyebrow">O que fazemos</p>
            <h2 className="section__title">Tudo o que o seu evento precisa em um só fornecedor</h2>
            <div className="grid grid--services">
              {services.map((s) => (
                <article className="card" key={s.title}>
                  <div className="card__icon">
                    <s.icon size={28} weight="duotone" />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EVENTOS */}
        <section className="section section--alt" id="eventos">
          <div className="container">
            <p className="eyebrow">Para quem</p>
            <h2 className="section__title">Eventos que a gente faz acontecer</h2>
            <ul className="chips">
              {events.map(({ icon: EventIcon, label }) => (
                <li key={label}>
                  <EventIcon size={20} weight="duotone" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PACOTES */}
        <section className="section" id="pacotes">
          <div className="container">
            <p className="eyebrow">Pacotes</p>
            <h2 className="section__title">Escolha um ponto de partida</h2>
            <p className="section__sub">
              Todo pacote é ajustado ao tamanho do local e ao número de convidados. Valores sob consulta.
            </p>
            <div className="grid grid--plans">
              {plans.map((p) => (
                <article className={`plan${p.featured ? " plan--featured" : ""}`} key={p.name}>
                  {p.featured && <span className="plan__badge">Mais pedido</span>}
                  <h3>{p.name}</h3>
                  <p className="plan__for">{p.for}</p>
                  <ul>
                    {p.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <WaLink
                    className={`btn ${p.featured ? "btn--grad" : "btn--ghost"}`}
                    message={`Olá! Quero um orçamento do pacote ${p.name}.`}
                  >
                    Quero este
                  </WaLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="section section--alt" id="como-funciona">
          <div className="container">
            <p className="eyebrow">Como funciona</p>
            <h2 className="section__title">Do primeiro contato ao último acorde</h2>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section className="section" id="portfolio">
          <div className="container">
            <p className="eyebrow">Portfólio</p>
            <h2 className="section__title">Eventos recentes</h2>
            <p className="section__sub">Fotos e vídeos dos nossos trabalhos. Acompanhe mais no Instagram.</p>
            <div className="gallery">
              {gallery.map((g) => (
                <figure
                  className="gallery__item"
                  key={g.label}
                  style={
                    {
                      "--h": g.hue,
                      ...(g.image && { backgroundImage: `url(${g.image})` }),
                    } as CSSProperties
                  }
                >
                  <figcaption>{g.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section className="section section--alt" id="orcamento">
          <div className="container quote">
            <div className="quote__intro">
              <p className="eyebrow">Orçamento</p>
              <h2 className="section__title">Monte seu pedido em 1 minuto</h2>
              <p>Preencha e envie direto para o nosso WhatsApp. Respondemos com uma proposta sob medida.</p>
              <a className="quote__phone" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container container--narrow">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="section__title">Perguntas que sempre recebemos</h2>
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div>
            <img src="/logo-wave.svg" alt="" width={120} height={98} />
            <p className="wordmark wordmark--sm">SENAMIX</p>
            <p className="tagline tagline--sm">SONORIZAÇÃO</p>
          </div>
          <div>
            <h4>Contato</h4>
            <p>
              <a className="footer__link" href={`tel:${site.phoneTel}`}>
                <Phone size={18} /> {site.phoneDisplay}
              </a>
            </p>
            <p>
              <WaLink className="footer__link" message="Olá! Vim pelo site.">
                <WhatsappLogo size={18} /> WhatsApp
              </WaLink>
            </p>
            <p>
              <a className="footer__link" href={site.instagram} target="_blank" rel="noopener">
                <InstagramLogo size={18} /> Instagram
              </a>
            </p>
          </div>
          <div>
            <h4>Serviços</h4>
            <p>Sonorização · Iluminação · Painéis de LED · DJ · Palco e estrutura · Efeitos especiais</p>
          </div>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </footer>

      <WaLink className="wa-float" message="Olá! Vim pelo site e quero um orçamento." aria-label="Falar no WhatsApp">
        <WhatsappLogo size={32} weight="fill" />
      </WaLink>

      <RevealOnScroll />
    </>
  );
}
