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
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-page">
      <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={SITE_LINKS.home} className="relative h-8 w-36 shrink-0">
          <Image
            src={LOGO_URL}
            alt="UXINDIA 2026"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-sans text-sm text-text-primary/80 transition hover:text-text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/tickets"
              className="font-sans text-sm text-brand underline decoration-brand underline-offset-4"
            >
              Tickets
            </Link>
          </li>
        </ul>

        <Link
          href={SITE_LINKS.waitlist}
          className="hidden items-center rounded-full bg-brand px-5 py-2.5 font-sans text-sm font-medium text-white transition hover:bg-brand/90 lg:inline-flex"
        >
          Join Waitlist →
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-text-primary lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-page px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block font-sans text-sm text-text-primary/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/tickets"
                className="block font-sans text-sm text-brand"
                onClick={() => setMenuOpen(false)}
              >
                Tickets
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href={SITE_LINKS.waitlist}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-2.5 font-sans text-sm font-medium text-white"
                onClick={() => setMenuOpen(false)}
              >
                Join Waitlist →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
