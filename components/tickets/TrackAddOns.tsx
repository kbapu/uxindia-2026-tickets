import { AddOnCard } from "./AddOnCard";
import type { AddOnItem } from "@/types/pricing";

type TrackAddOnsProps = {
  addOns: AddOnItem[];
};

export function TrackAddOns({ addOns }: TrackAddOnsProps) {
  if (addOns.length === 0) return null;

  return (
    <div className="space-y-4">
      <p className="px-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
        Add-ons
      </p>
      {addOns.map((addOn) => (
        <AddOnCard key={addOn.id} addOn={addOn} />
      ))}
    </div>
  );
}
