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
    <TicketStackCard stackColor={isSummit ? "#114F47" : "#DCAC3B"}>
      <div
        className={`flex min-h-[260px] flex-col justify-between px-7 py-8 md:px-10 md:py-10 ${
          isSummit ? "bg-track-summit text-text-primary" : "bg-track-forum text-text-on-yellow"
        }`}
      >
        <h2 className="font-uxi text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
        <p className="font-uxi mt-4 text-3xl leading-[1.08] sm:text-4xl">{dates}</p>
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
