"use client";

import { useState } from "react";
import type { AddOnItem, PassTier, TrackVariant } from "@/types/pricing";
import { PricingTierRow } from "./PricingTierRow";

type PricingAccordionProps = {
  tiers: PassTier[];
  variant: TrackVariant;
  defaultOpenId: string;
  sectionLabel?: string;
  isStudent?: boolean;
  addOns?: AddOnItem[];
};

export function PricingAccordion({
  tiers,
  variant,
  defaultOpenId,
  sectionLabel,
  isStudent = false,
  addOns = [],
}: PricingAccordionProps) {
  const [openId, setOpenId] = useState(defaultOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="space-y-4">
      {sectionLabel && (
        <p className="px-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
          {sectionLabel}
        </p>
      )}
      {tiers.map((tier) => (
        <PricingTierRow
          key={tier.id}
          tier={tier}
          variant={variant}
          isOpen={openId === tier.id}
          onToggle={() => toggle(tier.id)}
          isStudent={isStudent}
          addOns={addOns}
        />
      ))}
    </div>
  );
}
