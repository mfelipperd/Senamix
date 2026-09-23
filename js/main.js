const WHATSAPP = "5591984604539";
const waLink = (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

// Links de WhatsApp com mensagem pré-preenchida
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waLink(a.dataset.wa);
});

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Equalizador animado no hero
const eq = document.querySelector(".hero__eq");
const bars = window.innerWidth < 600 ? 28 : 64;
for (let i = 0; i < bars; i++) {
  const bar = document.createElement("i");
  const center = 1 - Math.abs(i - bars / 2) / (bars / 2);
  bar.style.setProperty("--to", `${30 + center * 60 + Math.random() * 10}%`);
  bar.style.animationDuration = `${0.5 + Math.random() * 0.9}s`;
  bar.style.animationDelay = `${-Math.random()}s`;
  bar.style.backgroundPosition = `${(i / bars) * 100}% 0`;
  eq.appendChild(bar);
}

// Formulário de orçamento -> WhatsApp
const form = document.getElementById("quote-form");
const error = form.querySelector(".form__error");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get("nome").trim();
  const tipo = data.get("tipo");
  if (!nome || !tipo) {
    error.hidden = false;
    return;
  }
  error.hidden = true;

  const dataEvento = data.get("data")
    ? new Date(data.get("data") + "T12:00").toLocaleDateString("pt-BR")
    : "";
  const servicos = data.getAll("servicos");
  const linhas = [
    `Olá! Meu nome é ${nome} e quero um orçamento.`,
    `• Evento: ${tipo}`,
    dataEvento && `• Data: ${dataEvento}`,
    data.get("local").trim() && `• Local: ${data.get("local").trim()}`,
    data.get("convidados") && `• Convidados: ${data.get("convidados")}`,
    servicos.length && `• Preciso de: ${servicos.join(", ")}`,
    data.get("mensagem").trim() && `• Detalhes: ${data.get("mensagem").trim()}`,
  ].filter(Boolean);

  window.open(waLink(linhas.join("\n")), "_blank", "noopener");
});

// Animação de entrada das seções
const revealables = document.querySelectorAll(".card, .plan, .steps li, .gallery__item, .chips li, .stat");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealables.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

document.getElementById("year").textContent = new Date().getFullYear();
