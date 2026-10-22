const logoUrl = "/media/rr-logo.png";

type Props = {
  className?: string;
  /** 0–1. Drives the glow intensity around the mark. */
  charge?: number;
  showWordmark?: boolean;
  /** Keep the brand name visible on phones too. */
  wordmarkAlways?: boolean;
};

/**
 * Brand mark for R R Enterprises and Electricals.
 */
export function LogoMark({ className, charge = 1, showWordmark = true, wordmarkAlways = false }: Props) {
  const c = Math.min(1, Math.max(0, charge));

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <img
        src={logoUrl}
        alt="R R Enterprises and Electricals"
        loading="eager"
        decoding="async"
        className="h-full w-auto shrink-0 rounded-lg object-contain ring-1 ring-primary-foreground/20"
        style={{
          opacity: 0.35 + c * 0.65,
          filter: `drop-shadow(0 0 ${c * 6}px color-mix(in oklab, var(--copper) 45%, transparent))`,
          transition: "opacity 180ms linear, filter 180ms linear",
        }}
      />
      {showWordmark && (
        <span className={`${wordmarkAlways ? "block" : "hidden sm:block"} font-display text-[14px] font-semibold leading-tight tracking-tight`}>
          R R Enterprises
          <span className="block font-mono text-[9px] uppercase tracking-[0.25em] opacity-65">
            & Electricals
          </span>
        </span>
      )}
    </span>
  );
}
