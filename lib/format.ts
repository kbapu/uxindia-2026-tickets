const WAITLIST_BASE = "https://2026.ux-india.org/waitlist/";

/** Sale window when Register Now is active on the tickets page. */
export const OPEN_REGISTRATION_SALE_START = "25 May";

type TierCtaFields = {
  saleStarts: string;
  ctaLabel: string;
  ctaDisabled?: boolean;
};

export function isRegisterNowLabel(ctaLabel: string): boolean {
  return ctaLabel.startsWith("Register Now");
}

/** Register Now is only clickable for tiers whose sale starts on OPEN_REGISTRATION_SALE_START. */
export function isTierCtaDisabled(tier: TierCtaFields): boolean {
  if (tier.ctaDisabled) return true;
  if (isRegisterNowLabel(tier.ctaLabel)) {
    return tier.saleStarts !== OPEN_REGISTRATION_SALE_START;
  }
  return false;
}

export function getTierCtaLabel(tier: TierCtaFields): string {
  if (
    isRegisterNowLabel(tier.ctaLabel) &&
    tier.saleStarts !== OPEN_REGISTRATION_SALE_START &&
    !tier.ctaDisabled
  ) {
    return `Opens ${tier.saleStarts} →`;
  }
  return tier.ctaLabel;
}

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
