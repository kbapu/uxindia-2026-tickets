import Link from "next/link";
import type { AddOnItem } from "@/types/pricing";
import { formatPrice } from "@/lib/format";
import { TicketStackCard } from "./TicketStackCard";

type AddOnCardProps = {
  addOn: AddOnItem;
};

export function AddOnCard({ addOn }: AddOnCardProps) {
  const isSummit = addOn.variant === "summit";

  const cardBg = isSummit ? "bg-addon-summit text-text-primary" : "bg-addon-forum text-text-on-yellow";
  const stackBg = isSummit ? "bg-[#0a221c]" : "bg-[#8a6d14]";
  const textMuted = isSummit
    ? "text-[var(--text-muted-teal)]"
    : "text-[var(--text-muted-yellow)]";
  const outlineBadge = isSummit
    ? "border border-white/35 text-summit-badge-text"
    : "border border-black/25 text-forum-badge-text";

  return (
    <TicketStackCard stackClassName={stackBg}>
      <article className={`p-6 sm:p-8 ${cardBg}`}>
        <div className="flex items-start justify-between gap-4">
          <span
            className={`rounded-full px-3 py-1 font-sans text-xs font-medium ${outlineBadge}`}
          >
            {addOn.badge}
          </span>
          <div className="text-right">
            <p className="font-reckless text-3xl font-medium leading-none sm:text-4xl">
              {formatPrice(addOn.price)}
            </p>
            <p className={`font-sans text-xs ${textMuted}`}>+ 18% GST</p>
          </div>
        </div>

        <h3 className="font-reckless mt-5 text-[1.75rem] leading-tight sm:text-[2rem]">
          {addOn.title}
        </h3>
        {addOn.saleStarts && (
          <p className={`mt-2 font-sans text-sm font-medium ${textMuted}`}>
            Starts {addOn.saleStarts}
          </p>
        )}
        <p className={`mt-3 font-sans text-[15px] leading-relaxed ${textMuted}`}>
          {addOn.description}
        </p>
        {addOn.note && (
          <p className={`mt-2 font-sans text-sm italic ${textMuted}`}>{addOn.note}</p>
        )}

        <Link
          href={addOn.ctaHref}
          className={`mt-6 flex w-full items-center justify-center rounded-full px-5 py-3 font-sans text-sm font-medium transition ${
            isSummit
              ? "border border-white/30 bg-black/35 text-white hover:bg-black/55"
              : "border border-black/30 bg-black/80 text-text-primary hover:bg-black"
          }`}
        >
          {addOn.ctaLabel}
        </Link>
      </article>
    </TicketStackCard>
  );
}
