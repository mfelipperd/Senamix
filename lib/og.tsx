import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

const COLORS = ["#ffc83d", "#ff7a1a", "#ff2d55", "#d6249f", "#7b3fe4"];
const GRAD = `linear-gradient(90deg, ${COLORS[0]}, ${COLORS[1]} 30%, ${COLORS[2]} 55%, ${COLORS[3]} 80%, ${COLORS[4]})`;

const tiles = [
  { icon: "speaker-high-duotone", label: "Sonorização", color: COLORS[1] },
  { icon: "lightbulb-duotone", label: "Iluminação", color: COLORS[2] },
  { icon: "squares-four-duotone", label: "Painéis de LED", color: COLORS[3] },
  { icon: "headphones-duotone", label: "DJ", color: COLORS[4] },
];

// Alturas fixas (determinísticas) do equalizador de fundo
const bars = Array.from({ length: 60 }, (_, i) => {
  const center = 1 - Math.abs(i - 30) / 30;
  return Math.round(40 + center * 190 + ((i * 37) % 11) * 9);
});

const root = process.cwd();

// Ícones Phosphor em SVG puro, copiados de @phosphor-icons/core para assets/icons/
// (o Satori não renderiza componentes React dentro de <svg>).
async function iconSrc(name: string, color: string) {
  const svg = (await readFile(join(root, "assets/icons", `${name}.svg`), "utf8")).replace(/currentColor/g, color);
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

async function loadAssets() {
  const [exo, interMedium, interBold, logo] = await Promise.all([
    readFile(join(root, "assets/fonts/Exo2-BlackItalic.ttf")),
    readFile(join(root, "assets/fonts/Inter-Medium.ttf")),
    readFile(join(root, "assets/fonts/Inter-Bold.ttf")),
    readFile(join(root, "public/logo-wave.svg"), "utf8"),
  ]);
  return {
    logo: `data:image/svg+xml;base64,${Buffer.from(logo).toString("base64")}`,
    fonts: [
      { name: "Exo 2", data: exo, weight: 900 as const, style: "italic" as const },
      { name: "Inter", data: interMedium, weight: 500 as const, style: "normal" as const },
      { name: "Inter", data: interBold, weight: 700 as const, style: "normal" as const },
    ],
  };
}

type OgOptions = {
  /** Linha de destaque (ex.: nome da página). Padrão: slogan da marca. */
  headline?: string;
};

/** Imagem de compartilhamento (WhatsApp, Instagram, Facebook, X, LinkedIn). */
export async function renderOgImage({ headline = "Som, luz e imagem para o seu evento" }: OgOptions = {}) {
  const [{ logo, fonts }, whatsapp, ...tileIcons] = await Promise.all([
    loadAssets(),
    iconSrc("whatsapp-logo-fill", "#ffffff"),
    ...tiles.map((t) => iconSrc(t.icon, t.color)),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#0b0b0f",
          backgroundImage:
            "radial-gradient(circle at 18% 10%, rgba(255,122,26,.32), transparent 45%), radial-gradient(circle at 85% 20%, rgba(214,36,159,.30), transparent 45%), radial-gradient(circle at 60% 110%, rgba(123,63,228,.35), transparent 50%)",
          fontFamily: "Inter",
          color: "#f4f4f6",
        }}
      >
        {/* Equalizador de fundo */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 86,
            height: 260,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 24px",
            opacity: 0.13,
          }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 12,
                height: h,
                borderRadius: "5px 5px 0 0",
                backgroundImage: GRAD,
                backgroundSize: "1200px 100%",
                backgroundPosition: `${-i * 19}px 0`,
              }}
            />
          ))}
        </div>

        {/* Conteúdo */}
        <div style={{ display: "flex", flex: 1, padding: "40px 64px 0", gap: 36 }}>
          {/* Marca */}
          <div style={{ display: "flex", flexDirection: "column", width: 540 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} width={330} height={269} alt="" style={{ marginLeft: -12, marginBottom: -34 }} />
            <div
              style={{
                fontFamily: "Exo 2",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: 118,
                lineHeight: 1,
                letterSpacing: 2,
              }}
            >
              SENAMIX
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 14 }}>
              <div style={{ width: 70, height: 3, borderRadius: 2, backgroundColor: "#f4f4f6" }} />
              <div style={{ fontWeight: 700, fontSize: 26, letterSpacing: 14 }}>SONORIZAÇÃO</div>
              <div style={{ width: 70, height: 3, borderRadius: 2, backgroundColor: "#f4f4f6" }} />
            </div>
            <div style={{ marginTop: 26, fontSize: 29, fontWeight: 500, color: "#c9c9d3", lineHeight: 1.25 }}>
              {headline}
            </div>
          </div>

          {/* Serviços */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              gap: 18,
              flex: 1,
              paddingBottom: 30,
            }}
          >
            {tiles.map(({ label, color }, i) => (
              <div
                key={label}
                style={{
                  width: 226,
                  height: 176,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 22,
                  borderRadius: 24,
                  backgroundColor: "rgba(23,23,31,.82)",
                  border: "1.5px solid rgba(255,255,255,.10)",
                }}
              >
                <div
                  style={{
                    width: 62,
                    height: 62,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 18,
                    backgroundColor: "rgba(255,255,255,.06)",
                    border: `1.5px solid ${color}66`,
                    color,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tileIcons[i]} width={36} height={36} alt="" />
                </div>
                <div style={{ fontSize: 25, fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa de contato */}
        <div
          style={{
            height: 86,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 64px",
            backgroundImage: GRAD,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 38, fontWeight: 700 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={whatsapp} width={44} height={44} alt="" />
            {site.phoneDisplay}
          </div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>Som · Luz · LED · DJ · Estrutura</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
