import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { LOGO_URL, SITE_LINKS } from "@/lib/format";

const SITE_BASE = SITE_LINKS.home.replace(/\/$/, "");

const QUICK_LINKS = [
  { label: "Join The Waitlist", href: SITE_LINKS.waitlist },
  {
    label: "Submit Your Proposal",
    href: "https://2026.ux-india.org/call-for-speakers/",
  },
  { label: "Sponsor UXINDIA", href: "https://2026.ux-india.org/sponsor/" },
  { label: "Last Edition", href: "https://2025.ux-india.org/" },
] as const;

const UMO_INITIATIVES = [
  { label: "W Summit", href: "https://wsummit.umo.design/" },
  { label: "Design X Social", href: "https://dxs.umo.design/" },
  { label: "1MW Design", href: "https://1mw.umo.design/" },
  { label: "Pre Conference Meetups", href: "https://meetups.umo.design/" },
  { label: "UMO Design Grads", href: "https://grads.umo.design/" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/uxindiaconf",
    icon: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    fill: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/uxindiaconf/",
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
    stroke: true,
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/uxindiaconf",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
    fill: true,
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/uxindiaconf",
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    fill: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/uxindia",
    icon: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </>
    ),
    fill: true,
  },
] as const;

function SocialIcon({
  label,
  href,
  icon,
  fill,
  stroke,
}: {
  label: string;
  href: string;
  icon: ReactNode;
  fill?: boolean;
  stroke?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-200 hover:border-brand hover:text-brand"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={fill ? "currentColor" : "none"}
        stroke={stroke ? "currentColor" : undefined}
        strokeWidth={stroke ? 2 : undefined}
        aria-hidden
      >
        {icon}
      </svg>
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0D0D0D]">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 select-none overflow-hidden"
      >
        <div className="whitespace-nowrap text-center font-uxi text-[25vw] leading-none text-white/[0.008]">
          UXINDIA
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="relative mb-16 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl bg-brand p-8 md:flex-row md:items-center md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/4 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-24 translate-y-1/2 rounded-full bg-white/10"
          />
          <div className="relative">
            <p className="mb-2 font-sans text-xs uppercase tracking-widest text-white/70">
              UXINDIA26 · Bangalore · September 2026
            </p>
            <h3 className="font-uxi text-3xl leading-tight text-white md:text-4xl">
              Don&apos;t watch from the
              <br />
              sidelines. Lead the room.
            </h3>
          </div>
          <Link
            href={SITE_LINKS.waitlist}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0D0D0D] px-7 py-4 font-sans text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand"
          >
            Join The Waitlist
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-5">
              <Link href={SITE_LINKS.home} className="relative block h-8 w-36">
                <Image
                  src={LOGO_URL}
                  alt="UXINDIA26"
                  width={144}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p className="mb-4 max-w-xs font-sans text-sm leading-relaxed text-white/40">
              A not-for-profit venture, UXINDIA is built by, built for, and sustained by its
              growing community of designers, enthusiasts, influencers from business, education,
              and governance. UXINDIA is being organized by UMO Design Foundation.
            </p>
            <p className="mb-6 font-sans text-xs text-white/20">Bangalore · September 2026</p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.label} {...social} />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              Quick Links
            </p>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="-translate-y-4 mt-6 space-y-1.5">
              <a
                href="mailto:team@umo.design"
                className="block font-sans text-xs text-white/50 transition-colors hover:text-white/60"
              >
                team@umo.design
              </a>
              <a
                href="tel:+918096204373"
                className="block font-sans text-xs text-white/50 transition-colors hover:text-white/60"
              >
                Jabeen : +91 80962 04373
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              UMO Initiatives
            </p>
            <ul className="space-y-3">
              {UMO_INITIATIVES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-white/50 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="font-sans text-xs text-white/25">
            © 2026 UXINDIA. Organised by UMO Design Foundation | Handcrafted by Happening
          </p>
          <div className="flex gap-6">
            <Link
              href={`${SITE_BASE}/privacy-policy`}
              className="font-sans text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Privacy Policy
            </Link>
            <Link
              href={`${SITE_BASE}/terms`}
              className="font-sans text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Terms
            </Link>
            <Link
              href={`${SITE_BASE}/code-of-conduct`}
              className="font-sans text-xs text-white/25 transition-colors hover:text-white/50"
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
