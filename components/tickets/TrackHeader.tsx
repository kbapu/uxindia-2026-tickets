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
      <div
        className={`mt-8 border-t pt-6 max-sm:mt-6 max-sm:pt-5 ${
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
  );
}
