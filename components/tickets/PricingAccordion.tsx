"use client";

import { useState } from "react";
import type { PassTier, TrackVariant } from "@/types/pricing";
import { PricingTierRow } from "./PricingTierRow";

type PricingAccordionProps = {
  tiers: PassTier[];
  variant: TrackVariant;
  defaultOpenId: string;
  sectionLabel?: string;
  isStudent?: boolean;
};

export function PricingAccordion({
  tiers,
  variant,
  defaultOpenId,
  sectionLabel,
  isStudent = false,
}: PricingAccordionProps) {
  const [openId, setOpenId] = useState(defaultOpenId);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <div>
      {sectionLabel && (
        <p className="px-6 py-4 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted-yellow)] sm:px-9">
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
        />
      ))}
    </div>
  );
}
