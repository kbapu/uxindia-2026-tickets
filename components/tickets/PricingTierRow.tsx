"use client";

import Link from "next/link";
import type { PassTier, TrackVariant } from "@/types/pricing";
import { formatPrice, getTierCtaLabel, isTierCtaDisabled } from "@/lib/format";
import { TicketStackCard } from "./TicketStackCard";

type PricingTierRowProps = {
  tier: PassTier;
  variant: TrackVariant;
  isOpen: boolean;
  onToggle: () => void;
  isStudent?: boolean;
};

export function PricingTierRow({
  tier,
  variant,
  isOpen,
  onToggle,
  isStudent = false,
}: PricingTierRowProps) {

  const isSummit = variant === "summit";
  const isVip = tier.cardStyle === "vip";
  const ctaDisabled = isTierCtaDisabled(tier);
  const ctaLabel = getTierCtaLabel(tier);

  const textMain = isSummit ? "text-text-primary" : "text-text-on-yellow";
  const textMuted = isSummit
    ? "text-[var(--text-muted-teal)]"
    : "text-[var(--text-muted-yellow)]";

  const cardBg = isVip
    ? "vip-card-bg"
    : isSummit
      ? "bg-card-summit"
      : isStudent
        ? "bg-addon-forum"
        : "bg-card-forum";

  const stackColor = isSummit ? "#114F47" : "#DCAC3B";

  const outlineBadge = isSummit
    ? "border border-white/35 text-summit-badge-text"
    : "border border-black/25 text-forum-badge-text";

  const ctaClass = (() => {
    if (ctaDisabled) {
      return isSummit
        ? "cursor-not-allowed border border-white/20 bg-black/20 text-white/50"
        : "cursor-not-allowed border border-black/20 bg-black/10 text-text-on-yellow/50";
    }
    if (tier.ctaStyle === "brand") {
      return "bg-brand text-white hover:bg-brand/90";
    }
    if (tier.ctaStyle === "vip") {
      return "border border-vip-gold-light bg-transparent text-vip-gold-light hover:bg-vip-gold/20";
    }
    if (isSummit) {
      return "border border-white/30 bg-black/35 text-white hover:bg-black/55";
    }
    return "border border-black/30 bg-black/80 text-text-primary hover:bg-black";
  })();

  return (
    <TicketStackCard stackColor={stackColor}>
      <article className={`p-6 sm:p-8 ${cardBg} ${textMain}`}>
        <button
          type="button"
          className="w-full text-left"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 font-sans text-xs font-medium ${outlineBadge}`}
              >
                {tier.badge}
              </span>
              {tier.highlight && (
                <span className="rounded-full bg-brand px-3 py-1 font-sans text-xs font-medium text-white">
                  ★ Most Popular
                </span>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <p className="font-uxi text-3xl font-medium leading-none sm:text-4xl">
                {formatPrice(tier.price)}
              </p>
              <svg
                className="chevron-icon mt-1 shrink-0 opacity-70"
                data-open={isOpen}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <h3 className="font-uxi mt-5 text-[1.75rem] leading-[1.08] sm:text-[2rem]">
            {tier.name}
          </h3>
          <p className={`mt-2 font-sans text-sm font-medium ${textMuted}`}>
            Starts {tier.saleStarts} · + 18% GST
          </p>
          <p className={`mt-3 font-sans text-[15px] leading-relaxed ${textMuted}`}>
            {tier.description}
          </p>
          {tier.note && (
            <p className={`mt-2 font-sans text-sm italic ${textMuted}`}>{tier.note}</p>
          )}
        </button>

        <div className="accordion-panel" data-open={isOpen}>
          <div className="accordion-panel-inner">
            <div className="pt-4">
              <ul className={`space-y-2 font-sans text-sm ${textMuted}`}>
                {tier.inclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="shrink-0" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {tier.savingsNote && (
                <p className={`mt-4 font-sans text-sm ${textMuted}`}>{tier.savingsNote}</p>
              )}

              {ctaDisabled ? (
                <span
                  className={`mt-5 flex w-full items-center justify-center rounded-full px-5 py-3 font-sans text-sm font-medium ${ctaClass}`}
                >
                  {ctaLabel}
                </span>
              ) : (
                <Link
                  href={tier.ctaHref}
                  className={`mt-5 flex w-full items-center justify-center rounded-full px-5 py-3 font-sans text-sm font-medium transition ${ctaClass}`}
                >
                  {ctaLabel}
                </Link>
              )}
            </div>
          </div>
        </div>

      </article>
    </TicketStackCard>
  );
}
