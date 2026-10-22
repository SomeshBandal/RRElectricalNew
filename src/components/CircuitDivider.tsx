/** Animated circuit trace used as a section divider. */
export function CircuitDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative h-20 w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
        className={`h-full w-full text-energy/60 drop-shadow-[0_0_8px_var(--energy)] ${flip ? "scale-y-[-1]" : ""}`}
      >
        <path
          d="M0 58h360l32-30h256l28 30h316l30-30h258l30 30h130"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="1600"
          strokeDashoffset="1600"
          style={{ animation: "trace-dash 2.6s cubic-bezier(0.32,0.72,0,1) 0.2s forwards" }}
        />
        <circle cx="392" cy="28" r="3.5" fill="currentColor" />
        <circle cx="1022" cy="28" r="3.5" fill="currentColor" />
      </svg>
    </div>
  );
}
