"use client";

import { useState } from "react";
import { policyItems } from "@/data/ticketsFaq";

export function PoliciesSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
      >
        <span className="font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-text-primary/50">
          Registration Policies
        </span>
        <span className="font-sans text-lg text-brand" aria-hidden>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <ul className="mt-4 space-y-2 font-sans text-sm leading-relaxed text-text-primary/60">
          {policyItems.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
