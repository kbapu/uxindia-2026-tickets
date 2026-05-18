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
    <div
      className={`px-9 py-10 max-sm:rounded-card max-sm:px-6 max-sm:py-8 lg:rounded-t-card ${
        isSummit ? "bg-card-summit text-text-primary" : "bg-card-forum text-text-on-yellow"
      }`}
    >
      <h2 className="font-reckless text-5xl font-medium leading-none max-sm:text-[3rem] lg:text-[4rem]">
        {title}
      </h2>
      <p className="font-reckless mt-4 text-[2.5rem] leading-none">{dates}</p>
      <p
        className={`mt-3 font-sans text-base ${
          isSummit ? "text-[var(--text-muted-teal)]" : "text-[var(--text-muted-yellow)]"
        }`}
      >
        {venue}
      </p>
    </div>
  );
}
