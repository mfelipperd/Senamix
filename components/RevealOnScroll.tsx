"use client";

import { useEffect } from "react";

const SELECTOR = ".card, .plan, .steps li, .gallery__item, .chips li, .stat";

// Anima a entrada dos blocos. Sem JS, o conteúdo continua visível.
export function RevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(SELECTOR).forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
