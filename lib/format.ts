const WAITLIST_BASE = "https://2026.ux-india.org/waitlist/";

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function waitlistUrl(campaign: string): string {
  const params = new URLSearchParams({
    utm_source: "tickets",
    utm_campaign: campaign,
  });
  return `${WAITLIST_BASE}?${params.toString()}`;
}

export const LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UX%20India%202026%20logo-ddwwGT8EHyo2Ut7hXwoqy3zar9dXWO.svg";

export const SITE_LINKS = {
  home: "https://uxindia-changespreview.vercel.app/",
  about: "https://uxindia-changespreview.vercel.app/#about",
  summit: "https://uxindia-changespreview.vercel.app/#summit",
  forum: "https://uxindia-changespreview.vercel.app/#forum",
  waitlist: "https://2026.ux-india.org/waitlist/",
};
