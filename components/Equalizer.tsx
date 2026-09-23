"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Bar = { to: string; duration: string; delay: string; position: string };

// As barras são geradas só no cliente (valores aleatórios não podem vir do servidor).
export function Equalizer() {
  const [bars, setBars] = useState<Bar[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 600 ? 28 : 64;
    setBars(
      Array.from({ length: count }, (_, i) => {
        const center = 1 - Math.abs(i - count / 2) / (count / 2);
        return {
          to: `${30 + center * 60 + Math.random() * 10}%`,
          duration: `${0.5 + Math.random() * 0.9}s`,
          delay: `${-Math.random()}s`,
          position: `${(i / count) * 100}% 0`,
        };
      }),
    );
  }, []);

  return (
    <div className="hero__eq" aria-hidden="true">
      {bars.map((b, i) => (
        <i
          key={i}
          style={
            {
              "--to": b.to,
              animationDuration: b.duration,
              animationDelay: b.delay,
              backgroundPosition: b.position,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
