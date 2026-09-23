import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "SENAMIX Sonorização — som, iluminação, painéis de LED e DJ para eventos. WhatsApp (91) 98460-4539";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
