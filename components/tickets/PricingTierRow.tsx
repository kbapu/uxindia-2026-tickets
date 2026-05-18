"use client";

import Link from "next/link";
import type { PassTier, TrackVariant } from "@/types/pricing";
import { formatPrice } from "@/lib/format";

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

  const borderClass = isSummit
    ? "border-summit-border"
    : "border-forum-border/40";

  const badgeStyles = {
    default: isSummit
      ? "bg-black/25 text-summit-badge-text"
      : "bg-black/[0.18] text-forum-badge-text",
    popular: isSummit
      ? "bg-black/25 text-summit-badge-text"
      : "bg-black/[0.18] text-forum-badge-text",
    vip: "bg-vip-gold text-vip-gold-light",
    addon: "",
    disabled: isSummit
      ? "bg-black/25 text-summit-badge-text"
      : "bg-black/[0.18] text-forum-badge-text",
  };

  const ctaClass = (() => {
    if (tier.ctaDisabled) {
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
    <article
      className={`border-b ${borderClass} ${cardBg} ${textMain}`}
    >
      <button
        type="button"
        className="w-full px-6 py-5 text-left sm:px-9"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-3 py-1 font-sans text-xs font-medium ${badgeStyles[tier.badgeVariant]}`}
            >
              {tier.badge}
            </span>
            {tier.highlight && (
              <span className="rounded-full bg-brand px-3 py-1 font-sans text-xs font-medium text-white">
                ★ Most Popular
              </span>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <div className="text-right">
              <p className="font-sans text-2xl font-semibold">{formatPrice(tier.price)}</p>
              <p className={`font-sans text-xs ${textMuted}`}>+ 18% GST</p>
            </div>
            <svg
              className="chevron-icon mt-1 shrink-0"
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

        <h3 className="font-reckless mt-4 text-[1.75rem] leading-tight">{tier.name}</h3>
        <p className={`mt-2 font-sans text-[15px] leading-relaxed ${textMuted}`}>
          {tier.description}
        </p>
        {tier.note && (
          <p className={`mt-2 font-sans text-sm italic ${textMuted}`}>{tier.note}</p>
        )}
      </button>

      <div className="accordion-panel px-6 sm:px-9" data-open={isOpen}>
        <div className="accordion-panel-inner">
          <div className="pb-6 pt-1">
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

            {tier.ctaDisabled ? (
              <span
                className={`mt-5 flex w-full items-center justify-center rounded-full px-5 py-3 font-sans text-sm font-medium ${ctaClass}`}
              >
                {tier.ctaLabel}
              </span>
            ) : (
              <Link
                href={tier.ctaHref}
                className={`mt-5 flex w-full items-center justify-center rounded-full px-5 py-3 font-sans text-sm font-medium transition ${ctaClass}`}
              >
                {tier.ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
