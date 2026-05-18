import Image from "next/image";
import Link from "next/link";
import { LOGO_URL, SITE_LINKS } from "@/lib/format";

const FOOTER_LINKS = {
  quick: [
    { label: "Home", href: SITE_LINKS.home },
    { label: "Tickets", href: "/tickets" },
    { label: "Call for Speakers", href: "https://www.ux-india.org/call-for-speakers/" },
    { label: "Sponsorship", href: "https://partner.ux-india.org/" },
  ],
  umo: [
    { label: "UMO Design Foundation", href: "https://umo.design" },
    { label: "UXINDIA Archive", href: "https://www.ux-india.org" },
  ],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ux-india" },
    { label: "Instagram", href: "https://www.instagram.com/uxindia" },
    { label: "YouTube", href: "https://www.youtube.com/@uxindia" },
  ],
};

export function FooterCTA() {
  return (
    <section className="border-t border-white/[0.06] bg-page py-20 text-center">
      <h2 className="font-reckless mx-auto max-w-2xl px-4 text-4xl font-medium leading-tight text-text-primary sm:text-5xl">
        Don&apos;t watch from the sidelines. Lead the room.
      </h2>
      <Link
        href={SITE_LINKS.waitlist}
        className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-3.5 font-sans text-sm font-medium text-white transition hover:bg-brand/90"
      >
        Buy Tickets →
      </Link>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-page">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href={SITE_LINKS.home} className="relative block h-8 w-36">
            <Image
              src={LOGO_URL}
              alt="UXINDIA 2026"
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-4 font-sans text-sm leading-relaxed text-text-primary/60">
            Asia&apos;s definitive design leadership platform. 22–27 Sep, Bengaluru.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-text-primary/40">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.quick.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-text-primary/70 transition hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-text-primary/40">
            UMO Initiatives
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.umo.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-text-primary/70 transition hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-wider text-text-primary/40">
            Connect
          </h3>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.social.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-text-primary/70 transition hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06] px-4 py-6 text-center sm:px-6">
        <p className="font-sans text-xs text-text-primary/40">
          © {new Date().getFullYear()} UMO Design Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
