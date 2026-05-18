"use client";

import { useState } from "react";
import { ticketsFaq } from "@/data/ticketsFaq";

export function TicketsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-reckless text-4xl font-medium text-text-primary sm:text-5xl">
        Questions before you register.
      </h2>

      <ul className="mt-10 divide-y divide-white/[0.07]">
        {ticketsFaq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-sans text-base font-medium text-text-primary">
                  {item.question}
                </span>
                <span
                  className="shrink-0 font-sans text-xl font-medium text-brand"
                  aria-hidden
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-5 font-sans text-sm leading-relaxed text-text-primary/70">
                  {item.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
