import Link from "next/link";
import type { AddOnItem } from "@/types/pricing";
import { formatPrice } from "@/lib/format";

type AddOnCardProps = {
  addOn: AddOnItem;
};

export function AddOnCard({ addOn }: AddOnCardProps) {
  const isSummit = addOn.variant === "summit";

  return (
    <div
      className={`mx-0 px-6 py-8 sm:px-9 ${
        isSummit
          ? "bg-addon-summit text-text-primary"
          : "bg-addon-forum text-text-on-yellow"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={`rounded-full px-3 py-1 font-sans text-xs font-medium ${
            isSummit
              ? "bg-white text-text-on-yellow"
              : "bg-black/[0.18] text-forum-badge-text"
          }`}
        >
          {addOn.badge}
        </span>
        <div className="text-right">
          <p className="font-sans text-2xl font-semibold">{formatPrice(addOn.price)}</p>
          <p
            className={`font-sans text-xs ${
              isSummit ? "text-[var(--text-muted-teal)]" : "text-[var(--text-muted-yellow)]"
            }`}
          >
            + 18% GST
          </p>
        </div>
      </div>

      <h3 className="font-reckless mt-5 text-[1.75rem]">{addOn.title}</h3>
      {addOn.saleStarts && (
        <p
          className={`mt-2 font-sans text-sm font-medium ${
            isSummit ? "text-[var(--text-muted-teal)]" : "text-[var(--text-muted-yellow)]"
          }`}
        >
          Starts {addOn.saleStarts}
        </p>
      )}
      <p
        className={`mt-2 font-sans text-[15px] leading-relaxed ${
          isSummit ? "text-[var(--text-muted-teal)]" : "text-[var(--text-muted-yellow)]"
        }`}
      >
        {addOn.description}
      </p>
      {addOn.note && (
        <p
          className={`mt-2 font-sans text-sm italic ${
            isSummit ? "text-[var(--text-muted-teal)]" : "text-[var(--text-muted-yellow)]"
          }`}
        >
          {addOn.note}
        </p>
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
    </div>
  );
}
