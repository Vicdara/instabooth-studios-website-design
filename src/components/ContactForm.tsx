"use client";

import { useState } from "react";
import { ArrowIcon } from "@/components/Header";
import { contactTopics } from "@/lib/site";

type State = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const initial: State = {
  name: "",
  email: "",
  phone: "",
  topic: contactTopics[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<State>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const update = (key: keyof State, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "Message could not be sent.");
      setStatus("success");
      setFeedback(data.message ?? "Message received.");
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col justify-center rounded-2xl border border-ink/15 bg-white p-7 md:p-9">
        <span className="grid size-12 place-items-center rounded-full bg-clay text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="size-6" aria-hidden>
            <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-[26px] font-bold leading-tight text-ink">Message received.</h3>
        <p className="mt-3 text-[15.5px] leading-relaxed text-ink/60">
          {feedback} We reply in the order messages arrive, usually the same working day.
        </p>
        <button
          type="button"
          className="btn btn-ink mt-6 self-start"
          onClick={() => {
            setStatus("idle");
            setFeedback("");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-ink/15 bg-white p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label text-ink">
            Name <span className="text-clay-deep">*</span>
          </label>
          <input
            id="contact-name"
            required
            minLength={2}
            className="field field-light"
            placeholder="Your name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="field-label text-ink">
            Phone / WhatsApp
          </label>
          <input
            id="contact-phone"
            className="field field-light"
            placeholder="+234 ..."
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="field-label text-ink">
            Email <span className="text-clay-deep">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            className="field field-light"
            placeholder="you@email.com"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className="field-label text-ink">
            Topic
          </label>
          <select
            id="contact-topic"
            className="field field-light field-select"
            value={form.topic}
            onChange={(event) => update("topic", event.target.value)}
          >
            {contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="field-label text-ink">
            Message <span className="text-clay-deep">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            minLength={10}
            className="field field-light min-h-[220px] resize-y md:min-h-[260px]"
            placeholder="How can the studio help?"
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
          />
        </div>
      </div>

      {status === "error" ? (
        <p aria-live="polite" className="mt-4 rounded-lg bg-clay/10 px-4 py-3 text-[14px] text-clay-deep">
          {feedback}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-ink" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <ArrowIcon />
        </button>
        <p className="text-[13px] leading-relaxed text-ink/55">
          Your details stay with the studio team. No lists, no resale.
        </p>
      </div>
    </form>
  );
}
