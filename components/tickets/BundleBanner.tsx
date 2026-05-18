import Link from "next/link";
import { formatPrice } from "@/lib/format";

export function BundleBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-card border border-white/[0.08] bg-[#141414] p-8 sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-brand">
              Best Value · 5 Days
            </p>
            <h2 className="font-reckless mt-3 text-4xl font-medium text-text-primary sm:text-5xl">
              Full Week Pass
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-text-primary/70">
              Leadership Summit (Sep 23–25) + Rising Leaders Forum (Sep 26–27). All
              sessions across both venues.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <div className="space-y-3 font-sans">
              <div>
                <p className="text-sm text-text-primary/60">Early Bird Bundle</p>
                <p className="font-reckless text-3xl text-text-primary">
                  {formatPrice(28999)}{" "}
                  <span className="font-sans text-sm font-normal text-text-primary/60">
                    + GST
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm text-text-primary/60">Standard Bundle</p>
                <p className="font-reckless text-3xl text-text-primary">
                  {formatPrice(35999)}{" "}
                  <span className="font-sans text-sm font-normal text-text-primary/60">
                    + GST
                  </span>
                </p>
              </div>
              <p className="text-sm text-text-primary/50">
                Save ₹3,950 vs. buying separately
              </p>
            </div>

            <Link
              href="mailto:team@umo.design?subject=Full%20Week%20Pass%20Enquiry"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 font-sans text-sm font-medium text-white transition hover:bg-brand/90"
            >
              Email Jabeen for Bundle →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
