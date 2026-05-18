import type { PassTier } from "@/types/pricing";
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
    description: FORUM_DESCRIPTION,
    note: "*Limited Seats Only",
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
    description: FORUM_DESCRIPTION,
    note: "*Limited Seats Only",
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
    description: FORUM_DESCRIPTION,
    note: "*Limited Seats Only",
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
    description: FORUM_DESCRIPTION,
    note: "*Opens Sep 11, 2026",
    inclusions: FORUM_INCLUSIONS,
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
    description: FORUM_DESCRIPTION,
    note: "Available at venue Sep 26",
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
  ctaLabel: "Add to Your Pass →",
  ctaHref: waitlistUrl("addon-tshirt"),
  variant: "forum" as const,
};
