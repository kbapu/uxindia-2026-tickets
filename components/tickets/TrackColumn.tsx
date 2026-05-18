import { TrackHeader } from "./TrackHeader";
import { PricingAccordion } from "./PricingAccordion";
import { TrackBuyCta } from "./TrackBuyCta";
import type { PassTier, AddOnItem } from "@/types/pricing";
import { summitTierAddOns, forumTierAddOns } from "@/data/tierAddOns";
import { waitlistUrl } from "@/lib/format";

type SummitColumnProps = {
  tiers: PassTier[];
  defaultOpenId: string;
};

type ForumColumnProps = {
  professionalTiers: PassTier[];
  studentTiers: PassTier[];
  defaultOpenProId: string;
  defaultOpenStudentId: string;
};

export function SummitTrackColumn({ tiers, defaultOpenId }: SummitColumnProps) {
  const primaryHref = tiers.find((t) => t.id === defaultOpenId)?.ctaHref ?? waitlistUrl("summit");

  return (
    <div className="flex flex-col gap-6">
      <TrackHeader
        variant="summit"
        title="Leadership Summit"
        dates="23–25 Sept"
        venue="The Leela Bhartiya City, Bengaluru"
        whoShouldAttend="Senior design professionals, heads of design, CXOs, CDOs, and strategic decision-makers shaping design inside their organisations."
      />
      <PricingAccordion
        tiers={tiers}
        variant="summit"
        defaultOpenId={defaultOpenId}
        addOns={summitTierAddOns}
      />
      <TrackBuyCta variant="summit" href={primaryHref} />
    </div>
  );
}

export function ForumTrackColumn({
  professionalTiers,
  studentTiers,
  defaultOpenProId,
  defaultOpenStudentId,
}: ForumColumnProps) {
  const primaryHref =
    professionalTiers.find((t) => t.id === defaultOpenProId)?.ctaHref ?? waitlistUrl("forum");

  return (
    <div className="flex flex-col gap-6">
      <TrackHeader
        variant="forum"
        title="Rising Leaders Forum"
        dates="26–27 Sept"
        venue="Srishti Institute of Art, Design and Technology, Bengaluru"
        whoShouldAttend="Practitioners, early-career designers, and full-time students building craft, leadership mindset, and career momentum in design."
      />
      <PricingAccordion
        tiers={professionalTiers}
        variant="forum"
        defaultOpenId={defaultOpenProId}
        addOns={forumTierAddOns}
      />
      <PricingAccordion
        tiers={studentTiers}
        variant="forum-student"
        defaultOpenId={defaultOpenStudentId}
        sectionLabel="For Full-Time Students · Student ID Required at Registration"
        isStudent
        addOns={forumTierAddOns}
      />
      <TrackBuyCta variant="forum" href={primaryHref} />
    </div>
  );
}
