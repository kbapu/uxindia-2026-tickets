import { TicketStackCard } from "./TicketStackCard";
import type { TrackVariant } from "@/types/pricing";

type TrackHeaderProps = {
  variant: TrackVariant;
  title: string;
  dates: string;
  venue: string;
  whoShouldAttend: string;
};

export function TrackHeader({
  variant,
  title,
  dates,
  venue,
  whoShouldAttend,
}: TrackHeaderProps) {
  const isSummit = variant === "summit";

  return (
    <TicketStackCard stackClassName={isSummit ? "bg-[#0f2e26]" : "bg-[#8a6d14]"}>
      <div
        className={`px-8 py-10 sm:px-10 sm:py-12 ${
          isSummit ? "bg-card-summit text-text-primary" : "bg-card-forum text-text-on-yellow"
        }`}
      >
        <h2 className="font-reckless text-4xl font-medium leading-none sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h2>
        <p className="font-reckless mt-4 text-3xl leading-none sm:text-4xl">{dates}</p>
        <p
          className={`mt-3 font-sans text-base ${
            isSummit ? "text-[var(--text-muted-teal)]" : "text-[var(--text-muted-yellow)]"
          }`}
        >
          {venue}
        </p>
        <div
          className={`mt-8 border-t pt-6 sm:mt-7 sm:pt-5 ${
            isSummit ? "border-white/10" : "border-black/15"
          }`}
        >
          <p
            className={`font-sans text-[11px] font-semibold uppercase tracking-[0.12em] ${
              isSummit ? "text-summit-badge-text" : "text-forum-badge-text"
            }`}
          >
            Who should attend
          </p>
          <p
            className={`mt-2 font-sans text-[15px] leading-relaxed ${
              isSummit ? "text-text-primary/90" : "text-text-on-yellow/90"
            }`}
          >
            {whoShouldAttend}
          </p>
        </div>
      </div>
    </TicketStackCard>
  );
}
