import type { PassTier } from "@/types/pricing";
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
    id: "forum-seb-student",
    name: "Student Pass",
    badge: "Super Early Bird — Students",
    badgeVariant: "default",
    price: 2599,
    description: STUDENT_DESCRIPTION,
    note: "*Limited Seats Only",
    inclusions: STUDENT_INCLUSIONS,
    ctaLabel: "Register Now →",
    ctaHref: waitlistUrl("forum-seb-student"),
  },
  {
    id: "forum-eb-student",
    name: "Student Pass",
    badge: "Early Bird — Students",
    badgeVariant: "default",
    price: 3299,
    description: STUDENT_DESCRIPTION,
    note: "*Limited Seats Only",
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
    description: STUDENT_DESCRIPTION,
    note: "*Limited Seats Only",
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
    description: STUDENT_DESCRIPTION,
    note: "*Opens Sep 11, 2026",
    inclusions: STUDENT_INCLUSIONS,
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
    description: STUDENT_DESCRIPTION,
    note: "Available at venue Sep 26",
    inclusions: STUDENT_INCLUSIONS,
    ctaLabel: "Available at Venue",
    ctaHref: "#",
    ctaDisabled: true,
    ctaStyle: "muted",
  },
];
