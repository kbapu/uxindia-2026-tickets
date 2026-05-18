import Link from "next/link";
import { formatPrice } from "@/lib/format";

export function BundleBanner() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-2xl bg-brand p-8 md:mb-16 md:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 h-40 w-40 translate-x-1/4 -translate-y-1/2 rounded-full bg-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-24 translate-y-1/2 rounded-full bg-white/10"
      />

      <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Best Value · 5 Days
          </p>
          <h2 className="font-uxi mt-3 text-4xl font-medium leading-[1.08] text-white sm:text-5xl">
            Full Week Pass
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/80">
            Leadership Summit (Sep 23–25) + Rising Leaders Forum (Sep 26–27). All
            sessions across both venues.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <div className="space-y-3 font-sans text-white">
            <div>
              <p className="text-sm text-white/70">Early Bird Bundle</p>
              <p className="font-uxi text-3xl text-white">
                {formatPrice(28999)}{" "}
                <span className="font-sans text-sm font-normal text-white/70">+ GST</span>
              </p>
            </div>
            <div>
              <p className="text-sm text-white/70">Standard Bundle</p>
              <p className="font-uxi text-3xl text-white">
                {formatPrice(35999)}{" "}
                <span className="font-sans text-sm font-normal text-white/70">+ GST</span>
              </p>
            </div>
            <p className="text-sm text-white/60">Save ₹3,950 vs. buying separately</p>
          </div>

          <Link
            href="mailto:team@umo.design?subject=Full%20Week%20Pass%20Enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0D0D0D] px-6 py-3.5 font-sans text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
          >
            Email Jabeen for Bundle
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
