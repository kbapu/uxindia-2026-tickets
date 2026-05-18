import type { ReactNode } from "react";

type TicketStackCardProps = {
  children: ReactNode;
  className?: string;
  stackClassName?: string;
};

/** Layered offset shadows matching the reference ticket card deck. */
export function TicketStackCard({
  children,
  className = "",
  stackClassName = "bg-black/50",
}: TicketStackCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className={`absolute inset-0 translate-x-2 translate-y-2 rounded-2xl ${stackClassName}`}
      />
      <div
        aria-hidden
        className={`absolute inset-0 translate-x-1 translate-y-1 rounded-2xl opacity-80 ${stackClassName}`}
      />
      <div className="relative overflow-hidden rounded-2xl">{children}</div>
    </div>
  );
}
