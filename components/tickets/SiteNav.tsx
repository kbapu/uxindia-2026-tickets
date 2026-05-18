"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LOGO_URL, SITE_LINKS } from "@/lib/format";

const NAV_LINKS = [
  { label: "Home", href: SITE_LINKS.home },
  { label: "About", href: SITE_LINKS.about },
  { label: "Leadership Summit", href: SITE_LINKS.summit },
  { label: "Rising Leaders Forum", href: SITE_LINKS.forum },
];

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#0D0D0D]/95 py-3 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href={SITE_LINKS.home} className="relative h-9 w-40 shrink-0 md:h-10 md:w-44">
          <Image
            src={LOGO_URL}
            alt="UXINDIA 2026"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-sans text-sm font-medium tracking-wide text-white/80 transition hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={SITE_LINKS.waitlist}
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:scale-105 hover:shadow-lg hover:shadow-[#E85520]/30 md:inline-flex"
        >
          Buy Tickets
          <span aria-hidden>→</span>
        </Link>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 p-2 text-white md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`block h-0.5 w-6 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[#0D0D0D] px-6 py-8 md:hidden">
          <ul className="flex flex-col items-center gap-6 text-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-reckless text-3xl text-white transition hover:text-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={SITE_LINKS.waitlist}
                className="inline-flex rounded-full bg-brand px-8 py-3 font-sans text-base font-semibold text-white"
                onClick={() => setMenuOpen(false)}
              >
                Buy Tickets
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
