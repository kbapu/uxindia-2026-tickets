import type { AddOnItem } from "@/types/pricing";
import { LIMITED_SEATS_NOTE } from "@/types/pricing";
import { waitlistUrl } from "@/lib/format";
import { summitAddOn } from "@/data/summitTiers";
import { forumAddOn } from "@/data/forumTiers";

export const summitTshirtAddOn: AddOnItem = {
  id: "addon-tshirt-summit",
  badge: "Add On",
  price: 599,
  title: "T-Shirt",
  description: "Official UXINDIA 2026 conference T-shirt.",
  note: LIMITED_SEATS_NOTE,
  ctaLabel: "Add to Your Pass →",
  ctaHref: waitlistUrl("addon-tshirt-summit"),
  variant: "summit",
};

export const summitTierAddOns: AddOnItem[] = [summitAddOn, summitTshirtAddOn];
export const forumTierAddOns: AddOnItem[] = [forumAddOn];
