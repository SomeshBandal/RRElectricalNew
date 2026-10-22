const logoUrl = "/media/rr-logo.png";

/**
 * Homepage hero centerpiece: the R R logo held inside an animated
 * electrical field — counter-rotating circuit rings, orbiting current
 * pulses and a soft energy glow. Purely decorative; motion is disabled
 * for reduced-motion users via CSS.
 */
export function HeroLogoCharge() {
  return (
    <div className="hero-charge" aria-hidden="true">
      <div className="hero-charge-glow" />
      <svg className="hero-charge-svg" viewBox="0 0 420 420" fill="none">
        {/* outer circuit ring with nodes */}
        <g className="hero-charge-spin-a">
          <circle cx="210" cy="210" r="188" stroke="currentColor" strokeWidth="1" strokeDasharray="3 14" className="text-primary/45" />
          <circle cx="210" cy="22" r="4" className="fill-primary" />
          <circle cx="398" cy="210" r="4" className="fill-accent" />
          <circle cx="210" cy="398" r="4" className="fill-primary" />
          <circle cx="22" cy="210" r="4" className="fill-accent" />
        </g>
        {/* inner ring, counter-rotating */}
        <g className="hero-charge-spin-b">
          <circle cx="210" cy="210" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="26 10" className="text-accent/50" />
          <circle cx="360" cy="210" r="3" className="fill-primary" />
          <circle cx="60" cy="210" r="3" className="fill-primary" />
        </g>
        {/* circuit traces */}
        <g stroke="currentColor" strokeWidth="1" className="text-primary/35">
          <path d="M210 22V70h40" />
          <path d="M398 210h-48v40" />
          <path d="M210 398v-48h-40" />
          <path d="M22 210h48v-40" />
        </g>
        {/* orbiting current pulses */}
        <g className="hero-charge-spin-a">
          <circle cx="210" cy="22" r="6" className="hero-charge-spark fill-accent" />
        </g>
        <g className="hero-charge-spin-b">
          <circle cx="210" cy="60" r="5" className="hero-charge-spark fill-primary" />
        </g>
        {/* flickering arc */}
        <path className="hero-charge-arc stroke-accent" d="M176 118l18 22-14 6 20 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path className="hero-charge-arc hero-charge-arc-delay stroke-primary" d="M252 300l-18-22 14-6-20-24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <img src={logoUrl} alt="" loading="eager" decoding="async" className="hero-charge-logo" />
    </div>
  );
}
