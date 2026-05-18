import { TicketStackCard } from "./TicketStackCard";
import type { TrackVariant } from "@/types/pricing";

type TrackHeaderProps = {
  variant: TrackVariant;
  title: string;
  dates: string;
  venue: string;
};

export function TrackHeader({ variant, title, dates, venue }: TrackHeaderProps) {
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
      </div>
    </TicketStackCard>
  );
}
