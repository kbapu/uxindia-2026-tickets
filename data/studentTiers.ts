import type { PassTier } from "@/types/pricing";
import { LIMITED_SEATS_NOTE } from "@/types/pricing";
import { waitlistUrl } from "@/lib/format";

const STUDENT_DESCRIPTION =
  "2-day full access for full-time design students. Student ID required at badge collection.";

const STUDENT_INCLUSIONS = [
  "Both days (Sep 26–27) — all sessions",
  "Keynotes, panels, workshops",
  "Mentorship clinics",
  "Portfolio review clinic",
  "Conference kit",
  "Lunches & high tea, both days",
];

export const studentTiers: PassTier[] = [
  {
    id: "forum-eb-student",
    name: "Student Pass",
    badge: "Early Bird — Students",
    badgeVariant: "default",
    price: 3299,
    saleStarts: "25 May",
    description: STUDENT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: STUDENT_INCLUSIONS,
    ctaLabel: "Register Now →",
    ctaHref: waitlistUrl("forum-eb-student"),
  },
  {
    id: "forum-regular-student",
    name: "Student Pass",
    badge: "Regular",
    badgeVariant: "popular",
    price: 4299,
    saleStarts: "26 Jun",
    description: STUDENT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: STUDENT_INCLUSIONS,
    highlight: true,
    ctaLabel: "Register Now →",
    ctaHref: waitlistUrl("forum-regular-student"),
    ctaStyle: "brand",
  },
  {
    id: "forum-last-minute-student",
    name: "Student Pass",
    badge: "Last Minute — Students",
    badgeVariant: "disabled",
    price: 5299,
    saleStarts: "17 Aug",
    description: STUDENT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: STUDENT_INCLUSIONS,
    opensOn: "2026-08-17",
    ctaLabel: "Notify Me →",
    ctaHref: waitlistUrl("forum-last-minute-student"),
    ctaDisabled: true,
    ctaStyle: "muted",
  },
  {
    id: "forum-walkin-student",
    name: "Student Pass",
    badge: "Walk-in — Students",
    badgeVariant: "disabled",
    price: 6299,
    saleStarts: "26 Sep",
    description: STUDENT_DESCRIPTION,
    note: LIMITED_SEATS_NOTE,
    inclusions: STUDENT_INCLUSIONS,
    ctaLabel: "Available at Venue",
    ctaHref: "#",
    ctaDisabled: true,
    ctaStyle: "muted",
  },
];
