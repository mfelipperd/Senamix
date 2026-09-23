import {
  Buildings,
  Cake,
  Church,
  Confetti,
  Crown,
  Flag,
  GraduationCap,
  Heart,
  Headphones,
  Lightbulb,
  Lightning,
  MicrophoneStage,
  Sparkle,
  SpeakerHigh,
  SquaresFour,
  Stairs,
  Storefront,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

export const site = {
  name: "SENAMIX Sonorização",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://senamix.com.br",
  phoneDisplay: "(91) 98460-4539",
  phoneTel: "+5591984604539",
  whatsapp: "5591984604539",
  // TODO: trocar pelo @ real do Instagram
  instagram: "https://instagram.com/",
  area: "Pará, Brasil",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#eventos", label: "Eventos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#faq", label: "Dúvidas" },
];

export const highlights = [
  { title: "Som", text: "line array, monitores e mesas digitais" },
  { title: "Luz", text: "moving heads, PAR LED e cênica" },
  { title: "LED", text: "painéis e telões indoor/outdoor" },
  { title: "Equipe", text: "técnicos operando do início ao fim" },
];

export const services: { icon: Icon; title: string; text: string }[] = [
  {
    icon: SpeakerHigh,
    title: "Sonorização",
    text: "Sistemas de som para qualquer porte: caixas ativas, line array, subwoofers, monitores de palco, microfones sem fio e mesa digital com técnico dedicado.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    text: "Moving heads, PAR LED, ribaltas, strobo, laser e iluminação cênica e decorativa (uplight) para criar o clima certo em cada momento.",
  },
  {
    icon: SquaresFour,
    title: "Painéis de LED",
    text: "Telões e painéis de LED de alta definição, indoor e outdoor, para palco, fundo de cena, apresentações, vídeos e transmissão de imagem ao vivo.",
  },
  {
    icon: Headphones,
    title: "DJ",
    text: "DJ com repertório personalizado para o seu público, integrado ao som e à luz para uma pista cheia a noite toda.",
  },
  {
    icon: Stairs,
    title: "Palco e estrutura",
    text: "Palcos, praticáveis, box truss e grids para suspender som, luz e painéis com segurança.",
  },
  {
    icon: Sparkle,
    title: "Efeitos especiais",
    text: "Máquina de fumaça, baixa fumaça (gelo seco), jatos de CO₂, chuva de papel picado e fogos frios para entradas e momentos marcantes.",
  },
  {
    icon: VideoCamera,
    title: "Filmagem e transmissão",
    text: "Captação de vídeo, projeção em telão e transmissão ao vivo para quem não pôde estar presente.",
  },
  {
    icon: Lightning,
    title: "Energia",
    text: "Gerador e distribuição elétrica dimensionados para o evento — sem susto com queda de energia.",
  },
];

export const events: { icon: Icon; label: string }[] = [
  { icon: Heart, label: "Casamentos" },
  { icon: Crown, label: "15 anos" },
  { icon: GraduationCap, label: "Formaturas" },
  { icon: Cake, label: "Aniversários" },
  { icon: Buildings, label: "Corporativos e convenções" },
  { icon: MicrophoneStage, label: "Shows e festivais" },
  { icon: Church, label: "Igrejas e eventos religiosos" },
  { icon: Storefront, label: "Feiras e exposições" },
  { icon: Flag, label: "Eventos públicos e municipais" },
  { icon: Confetti, label: "Festas particulares" },
];

export const eventTypes = [
  "Casamento",
  "15 anos",
  "Formatura",
  "Aniversário",
  "Corporativo",
  "Show / Festival",
  "Igreja / Religioso",
  "Feira / Exposição",
  "Outro",
];

export const serviceOptions = [
  "Som",
  "Iluminação",
  "Painel de LED",
  "DJ",
  "Palco / estrutura",
  "Efeitos especiais",
  "Filmagem / transmissão",
  "Gerador",
];

export const plans = [
  {
    name: "Essencial",
    for: "Aniversários, confraternizações e eventos até ~100 pessoas",
    items: ["Som ambiente e pista", "2 microfones sem fio", "Iluminação de pista básica", "Técnico durante o evento"],
  },
  {
    name: "Festa Completa",
    for: "Casamentos, 15 anos e formaturas",
    featured: true,
    items: [
      "Sonorização para cerimônia e festa",
      "Moving heads + iluminação decorativa",
      "DJ",
      "Efeitos para entrada (fumaça / papel picado)",
      "Painel de LED opcional",
    ],
  },
  {
    name: "Show & Palco",
    for: "Shows, eventos públicos e corporativos de grande porte",
    items: [
      "Line array + monitoração de palco",
      "Palco, box truss e grid",
      "Painel de LED de fundo",
      "Luz de show e equipe técnica",
      "Gerador",
    ],
  },
];

export const steps = [
  { title: "Conte sobre o evento", text: "Data, local, número de convidados e o que você imagina." },
  { title: "Proposta sob medida", text: "Montamos o equipamento certo para o espaço — sem sobrar, sem faltar." },
  { title: "Montagem e teste", text: "Chegamos com antecedência, montamos e testamos tudo antes dos convidados." },
  { title: "Operação ao vivo", text: "Nossa equipe fica do começo ao fim cuidando de som, luz e telão." },
  { title: "Desmontagem", text: "Recolhemos tudo e deixamos o espaço como encontramos." },
];

// Para usar fotos reais: coloque em public/portfolio/ e preencha `image`.
export const gallery: { label: string; hue: number; image?: string }[] = [
  { label: "Casamento", hue: 20 },
  { label: "Show", hue: 330 },
  { label: "Formatura", hue: 280 },
  { label: "15 anos", hue: 0 },
  { label: "Corporativo", hue: 300 },
  { label: "Painel de LED", hue: 40 },
];

export const faq = [
  {
    q: "Com quanto tempo de antecedência devo reservar?",
    a: "O quanto antes. Para casamentos, formaturas e datas de fim de ano, recomendamos reservar com alguns meses de antecedência — as datas mais disputadas esgotam primeiro.",
  },
  {
    q: "Vocês atendem fora da cidade?",
    a: "Sim. Atendemos a região e outras cidades sob consulta; o deslocamento é incluído na proposta.",
  },
  {
    q: "A equipe fica durante todo o evento?",
    a: "Sim. Um técnico acompanha o evento do início ao fim operando som, luz e telão.",
  },
  {
    q: "Preciso me preocupar com a energia do local?",
    a: "Fazemos a avaliação da rede elétrica do espaço. Se não for suficiente, oferecemos gerador.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "A reserva da data é feita com um sinal e o restante até o dia do evento. As condições são detalhadas na proposta.",
  },
];
