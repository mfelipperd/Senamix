"use client";

import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header" id="topo">
      <div className="container header__inner">
        <a href="#topo" className="brand" aria-label="SENAMIX Sonorização — início">
          <img src="/logo-wave.svg" alt="" width={64} height={48} />
          <span className="brand__name">SENAMIX</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${open ? " is-open" : ""}`} id="nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="#orcamento" className="btn btn--sm btn--grad" onClick={close}>
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
