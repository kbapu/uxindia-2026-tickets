export function TicketsHero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-uxi text-[25vw] leading-none text-white/[0.02] whitespace-nowrap"
      >
        UXINDIA
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1
          className="font-uxi font-medium leading-[1.08] text-text-primary"
          style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
        >
          Be in the room.
        </h1>
        <p className="mx-auto mt-5 max-w-md font-sans text-sm leading-relaxed text-white/40 md:text-base">
          Get your ticket to UXINDIA 2026 — Leadership Summit or Rising Leaders Forum.
        </p>
      </div>
    </section>
  );
}
