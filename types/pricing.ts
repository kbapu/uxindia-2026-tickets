export type TrackVariant = "summit" | "forum" | "forum-student";

export type BadgeVariant =
  | "default"
  | "popular"
  | "vip"
  | "addon"
  | "disabled";

export type PassTier = {
  id: string;
  name: string;
  badge: string;
  badgeVariant: BadgeVariant;
  price: number;
  description: string;
  note?: string;
  inclusions: string[];
  savingsNote?: string;
  opensOn?: string;
  highlight?: boolean;
  ctaLabel: string;
  ctaHref: string;
  ctaDisabled?: boolean;
  ctaStyle?: "default" | "brand" | "vip" | "muted";
  cardStyle?: "default" | "vip";
};

export type AddOnItem = {
  id: string;
  badge: string;
  price: number;
  title: string;
  description: string;
  note?: string;
  ctaLabel: string;
  ctaHref: string;
  variant: "summit" | "forum";
};

export type FAQItem = {
  question: string;
  answer: string;
};
