import type { PassTier } from "@/types/pricing";
import { LIMITED_SEATS_NOTE } from "@/types/pricing";
import { waitlistUrl } from "@/lib/format";

const FORUM_DESCRIPTION =
  "2-day access to Keynotes, Workshops, Deep Dives, Panels and Spark Sessions across both days. High tea, lunch and conference swag included.";

const FORUM_INCLUSIONS = [
  "Both days (Sep 26–27) — all sessions",
  "Keynotes, panels, deep dives",
  "Mentorship clinics",
  "Portfolio review clinic",
  "Conference kit & swag",
  "Lunches & high tea, both days",
];

export const forumProfessionalTiers: PassTier[] = [
  {
    id: "forum-seb-pro",
    name: "Rising Leaders Pass",
    badge: "Super Early Bird — Professionals",
    badgeVariant: "default",
    price: 8999,
    saleStarts: "25 May",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,
    ctaLabel: "Register Now →",
    ctaHref: waitlistUrl("forum-seb-pro"),
  },
  {
    id: "forum-eb-pro",
    name: "Rising Leaders Pass",
    badge: "Early Bird — Professionals",
    badgeVariant: "default",
    price: 10999,
    saleStarts: "26 May",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,
    ctaLabel: "Register Now →",
    ctaHref: waitlistUrl("forum-eb-pro"),
  },
  {
    id: "forum-regular-pro",
    name: "Rising Leaders Pass",
    badge: "Regular",
    badgeVariant: "popular",
    price: 12999,
    saleStarts: "26 Jun",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: [...FORUM_INCLUSIONS, "Group discount eligible (4+)"],
    highlight: true,
    ctaLabel: "Register Now →",
    ctaHref: waitlistUrl("forum-regular-pro"),
    ctaStyle: "brand",
  },
  {
    id: "forum-last-minute-pro",
    name: "Rising Leaders Pass",
    badge: "Last Minute",
    badgeVariant: "disabled",
    price: 14999,
    saleStarts: "17 Aug",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,
    opensOn: "2026-08-17",
    ctaLabel: "Notify Me →",
    ctaHref: waitlistUrl("forum-last-minute-pro"),
    ctaDisabled: true,
    ctaStyle: "muted",
  },
  {
    id: "forum-walkin-pro",
    name: "Rising Leaders Pass",
    badge: "Walk-in · At the Door",
    badgeVariant: "disabled",
    price: 16999,
    saleStarts: "26 Sep",
    description: FORUM_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: FORUM_INCLUSIONS,
    ctaLabel: "Available at Venue",
    ctaHref: "#",
    ctaDisabled: true,
    ctaStyle: "muted",
  },
];

export const forumAddOn = {
  id: "addon-tshirt",
  badge: "Add On",
  price: 899,
  title: "T-Shirt",
  description: "Official UXINDIA 2026 conference T-shirt.",
  note: LIMITED_SEATS_NOTE,
  ctaLabel: "Add to Your Pass →",
  ctaHref: waitlistUrl("addon-tshirt"),
  variant: "forum" as const,
};
