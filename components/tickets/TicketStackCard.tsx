import type { ReactNode } from "react";

type TicketStackCardProps = {
  children: ReactNode;
  className?: string;
  stackColor?: string;
};

/** Layered offset shadows matching the reference ticket card deck. */
export function TicketStackCard({
  children,
  className = "",
  stackColor = "#1A1A1A",
}: TicketStackCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute left-2 right-2 top-3 h-full rounded-xl transition-all duration-300"
        style={{
          backgroundColor: stackColor,
          opacity: 0.4,
          transform: "translateY(8px)",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="absolute left-1 right-1 top-1.5 h-full rounded-xl transition-all duration-300"
        style={{
          backgroundColor: stackColor,
          opacity: 0.55,
          transform: "translateY(4px)",
          zIndex: 0,
        }}
      />
      <div className="relative z-[1] overflow-hidden rounded-xl">{children}</div>
    </div>
  );
}
