"use client";

import { useState, type FormEvent } from "react";
import { eventTypes, serviceOptions, waLink } from "@/lib/site";

export function QuoteForm() {
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const nome = get("nome");
    const tipo = get("tipo");
    if (!nome || !tipo) {
      setError(true);
      return;
    }
    setError(false);

    const dataEvento = get("data") ? new Date(`${get("data")}T12:00`).toLocaleDateString("pt-BR") : "";
    const servicos = data.getAll("servicos").map(String);

    const linhas = [
      `Olá! Meu nome é ${nome} e quero um orçamento.`,
      `• Evento: ${tipo}`,
      dataEvento && `• Data: ${dataEvento}`,
      get("local") && `• Local: ${get("local")}`,
      get("convidados") && `• Convidados: ${get("convidados")}`,
      servicos.length > 0 && `• Preciso de: ${servicos.join(", ")}`,
      get("mensagem") && `• Detalhes: ${get("mensagem")}`,
    ].filter(Boolean);

    window.open(waLink(linhas.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label>
        Seu nome
        <input name="nome" required autoComplete="name" placeholder="Como podemos te chamar?" />
      </label>
      <div className="form__row">
        <label>
          Tipo de evento
          <select name="tipo" required defaultValue="">
            <option value="">Selecione</option>
            {eventTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          Data
          <input type="date" name="data" />
        </label>
      </div>
      <div className="form__row">
        <label>
          Cidade / local
          <input name="local" placeholder="Ex.: salão, sítio, igreja..." />
        </label>
        <label>
          Nº de convidados
          <input type="number" name="convidados" min={1} inputMode="numeric" placeholder="Ex.: 150" />
        </label>
      </div>
      <fieldset>
        <legend>O que você precisa?</legend>
        <div className="checks">
          {serviceOptions.map((s) => (
            <label key={s}>
              <input type="checkbox" name="servicos" value={s} /> {s}
            </label>
          ))}
        </div>
      </fieldset>
      <label>
        Mais detalhes (opcional)
        <textarea
          name="mensagem"
          rows={3}
          placeholder="Horário, estilo de música, se o local é aberto ou fechado..."
        />
      </label>
      {error && (
        <p className="form__error" role="alert">
          Preencha seu nome e o tipo de evento.
        </p>
      )}
      <button className="btn btn--grad btn--block" type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
