import Link from "next/link";
import type { AddOnItem, TrackVariant } from "@/types/pricing";
import { formatPrice } from "@/lib/format";

type TierAddOnPanelProps = {
  addOns: AddOnItem[];
  variant: TrackVariant;
};

export function TierAddOnPanel({ addOns, variant }: TierAddOnPanelProps) {
  const isSummit = variant === "summit";
  const textMain = isSummit ? "text-text-primary" : "text-text-on-yellow";
  const textMuted = isSummit
    ? "text-[var(--text-muted-teal)]"
    : "text-[var(--text-muted-yellow)]";
  const divider = isSummit ? "border-white/10" : "border-black/10";

  return (
    <div className={`mt-4 space-y-4 border-t pt-4 ${divider}`}>
      {addOns.map((addOn) => (
        <div key={addOn.id} className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={`font-sans text-sm font-semibold ${textMain}`}>{addOn.title}</p>
              <p className={`mt-1 font-sans text-sm leading-relaxed ${textMuted}`}>
                {addOn.description}
              </p>
              {addOn.note && (
                <p className={`mt-1 font-sans text-xs italic ${textMuted}`}>{addOn.note}</p>
              )}
            </div>
            <p className={`shrink-0 font-reckless text-2xl font-medium ${textMain}`}>
              {formatPrice(addOn.price)}
            </p>
          </div>
          <Link
            href={addOn.ctaHref}
            className={`inline-flex w-fit font-sans text-sm font-medium underline-offset-2 hover:underline ${
              isSummit ? "text-summit-badge-text" : "text-forum-badge-text"
            }`}
          >
            {addOn.ctaLabel}
          </Link>
        </div>
      ))}
    </div>
  );
}
