"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message ?? "Something went wrong");
      setState("done");
      setMessage(data.message ?? "You are on the list.");
      setEmail("");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <form onSubmit={submit} className="mt-5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@email.com"
          className="field flex-1"
          autoComplete="email"
        />
        <button type="submit" className="btn btn-clay px-6" disabled={state === "loading"}>
          {state === "loading" ? "Adding…" : state === "done" ? "Added" : "Join list"}
        </button>
      </div>
      <p
        aria-live="polite"
        className={`mt-2.5 text-[13.5px] leading-relaxed ${
          state === "error" ? "text-clay" : "text-bone/50"
        }`}
      >
        {message || "Studio dates, new costume drops and offers. No noise."}
      </p>
    </form>
  );
}
