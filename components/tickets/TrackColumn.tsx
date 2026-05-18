import { TrackHeader } from "./TrackHeader";
import { PricingAccordion } from "./PricingAccordion";
import { AddOnCard } from "./AddOnCard";
import type { PassTier } from "@/types/pricing";
import type { AddOnItem } from "@/types/pricing";

type SummitColumnProps = {
  variant: "summit";
  tiers: PassTier[];
  defaultOpenId: string;
  addOn: AddOnItem;
};

type ForumColumnProps = {
  variant: "forum";
  professionalTiers: PassTier[];
  studentTiers: PassTier[];
  defaultOpenProId: string;
  defaultOpenStudentId: string;
  addOn: AddOnItem;
};

export function SummitTrackColumn({
  tiers,
  defaultOpenId,
  addOn,
}: Omit<SummitColumnProps, "variant">) {
  return (
    <div className="flex min-h-0 flex-col lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
      <TrackHeader
        variant="summit"
        title="Leadership Summit"
        dates="23–25 Sept"
        venue="The Leela Bhartiya City, Bengaluru"
      />
      <PricingAccordion tiers={tiers} variant="summit" defaultOpenId={defaultOpenId} />
      <AddOnCard addOn={addOn} />
    </div>
  );
}

export function ForumTrackColumn({
  professionalTiers,
  studentTiers,
  defaultOpenProId,
  defaultOpenStudentId,
  addOn,
}: Omit<ForumColumnProps, "variant">) {
  return (
    <div className="flex min-h-0 flex-col lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto">
      <TrackHeader
        variant="forum"
        title="Rising Leaders Forum"
        dates="26–27 Sept"
        venue="Srishti Institute of Art, Design and Technology, Bengaluru"
      />
      <PricingAccordion
        tiers={professionalTiers}
        variant="forum"
        defaultOpenId={defaultOpenProId}
        sectionLabel="For Professionals & Practitioners"
      />

      <hr className="border-black/15" />

      <PricingAccordion
        tiers={studentTiers}
        variant="forum-student"
        defaultOpenId={defaultOpenStudentId}
        sectionLabel="For Full-Time Students · Student ID Required at Registration"
        isStudent
      />

      <AddOnCard addOn={addOn} />
    </div>
  );
}
