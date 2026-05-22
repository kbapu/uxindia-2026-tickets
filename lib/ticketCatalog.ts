import type { AddOnItem, PassTier } from "@/types/pricing";

export const SUMMIT_FEATURED_IDS = [
  "summit-seb",
  "summit-vip",
  "summit-grand-conf",
] as const;

export const SUMMIT_LADDER_IDS = [
  "summit-eb",
  "summit-regular",
  "summit-last-minute",
  "summit-walkin",
] as const;

export const FORUM_PRO_FEATURED_IDS = ["forum-seb-pro"] as const;

export const FORUM_PRO_LADDER_IDS = [
  "forum-eb-pro",
  "forum-regular-pro",
  "forum-last-minute-pro",
  "forum-walkin-pro",
] as const;

export const FORUM_STUDENT_FEATURED_IDS = ["forum-seb-student"] as const;

export const FORUM_STUDENT_LADDER_IDS = [
  "forum-eb-student",
  "forum-regular-student",
  "forum-last-minute-student",
  "forum-walkin-student",
] as const;

export function pickTiers(tiers: PassTier[], ids: readonly string[]): PassTier[] {
  return ids
    .map((id) => tiers.find((t) => t.id === id))
    .filter((t): t is PassTier => Boolean(t));
}

export function ladderLabel(tier: PassTier): string {
  if (tier.badge.includes("Walk-in")) return "Walk-in";
  if (tier.badge.includes("Last Minute")) return "Last Minute";
  if (tier.badge === "Regular") return "Regular";
  if (tier.badge.includes("Early Bird")) return "Early Bird";
  return tier.badge;
}

export function addOnAsTier(addOn: AddOnItem): PassTier {
  return {
    id: addOn.id,
    name: addOn.title,
    badge: addOn.badge,
    badgeVariant: "addon",
    price: addOn.price,
    saleStarts: addOn.saleStarts ?? "",
    description: addOn.description,
    note: addOn.note,
    inclusions: [],
    ctaLabel: addOn.ctaLabel,
    ctaHref: addOn.ctaHref,
  };
}
