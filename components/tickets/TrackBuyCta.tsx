import Link from "next/link";
import type { TrackVariant } from "@/types/pricing";
import { SITE_LINKS } from "@/lib/format";

type TrackBuyCtaProps = {
  variant: TrackVariant;
  href?: string;
};

export function TrackBuyCta({ variant, href = SITE_LINKS.waitlist }: TrackBuyCtaProps) {
  const isSummit = variant === "summit";

  return (
    <div className="sticky bottom-4 z-10 mt-6">
      <Link
        href={href}
        className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-sans text-base font-semibold transition hover:scale-[1.02] ${
          isSummit
            ? "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand/90"
            : "bg-[#0D0D0D] text-white ring-1 ring-white/10 hover:bg-white hover:text-brand"
        }`}
      >
        Buy tickets
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
