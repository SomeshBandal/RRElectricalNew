/**
 * Unique hero backdrop: a live wiring blueprint.
 * A building's electrical schematic drawn in copper lines —
 * main feed, branch circuits, junction nodes, a distribution
 * panel and a pendant bulb — with current pulses travelling
 * the wires. Pure SVG, no photo.
 */

const CIRCUITS = [
  // Main feed from the panel, rising and branching to the first floor.
  "M 80 840 L 80 560 Q 80 540 100 540 L 520 540 Q 540 540 540 520 L 540 300 Q 540 280 560 280 L 980 280",
  // Branch lighting run.
  "M 540 540 L 540 700 Q 540 720 560 720 L 1100 720 L 1100 480 Q 1100 460 1120 460 L 1480 460",
  // Power circuit to the far wing.
  "M 980 280 L 1240 280 Q 1260 280 1260 260 L 1260 140 L 1520 140",
  // Sub-main from the panel across the mid floor.
  "M 200 840 L 200 640 L 360 640 L 360 420 Q 360 400 380 400 L 760 400",
  // Return drop on the right.
  "M 360 640 L 900 640 Q 920 640 920 620 L 920 560 Q 920 540 940 540 L 1340 540",
  // Ceiling rose feed to the bulb symbol.
  "M 760 400 L 760 240 Q 760 220 780 220 L 1180 220",
  // Basement / services run.
  "M 1480 460 L 1560 460 Q 1580 460 1580 440 L 1580 820 L 1140 820",
];

// Junction points where circuits meet — each gets a node.
const NODES: Array<[number, number]> = [
  [80, 560],
  [100, 540],
  [520, 540],
  [540, 520],
  [540, 300],
  [560, 280],
  [980, 280],
  [540, 700],
  [1100, 720],
  [1100, 480],
  [1120, 460],
  [1480, 460],
  [1240, 280],
  [1260, 260],
  [360, 420],
  [380, 400],
  [760, 400],
  [900, 640],
  [940, 540],
  [1340, 540],
  [1140, 820],
  [1580, 820],
];

// Pulse timing per circuit: duration + delay so they feel organic.
const PULSES = [
  { duration: 9, delay: 0 },
  { duration: 11, delay: 2.4 },
  { duration: 8, delay: 4.1 },
  { duration: 12, delay: 1.2 },
  { duration: 10, delay: 5.6 },
  { duration: 9.5, delay: 3.3 },
  { duration: 13, delay: 0.8 },
];

export function CircuitBlueprint() {
  return (
    <svg
      className="home-hero-schematic"
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wire-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--copper)" />
          <stop offset="55%" stopColor="var(--filament)" />
          <stop offset="100%" stopColor="var(--copper)" />
        </linearGradient>
        <linearGradient id="pulse-spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--copper)" stopOpacity="0.15" />
          <stop offset="45%" stopColor="var(--filament)" />
          <stop offset="82%" stopColor="#ffd98a" />
          <stop offset="100%" stopColor="#fff8e6" />
        </linearGradient>
      </defs>

      {/* Blueprint guide grid */}
      <g className="wire-guide">
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`v${i}`} x1={i * 100 + 40} y1={0} x2={i * 100 + 40} y2={900} />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 100 + 40} x2={1600} y2={i * 100 + 40} />
        ))}
      </g>

      {/* Distribution panel, bottom-left */}
      <g className="wire-detail">
        <rect x={40} y={760} width={150} height={100} rx={6} />
        {Array.from({ length: 7 }, (_, i) => (
          <line key={i} x1={62 + i * 18} y1={778} x2={62 + i * 18} y2={806} />
        ))}
        <line x1={52} y1={832} x2={178} y2={832} />
      </g>

      {/* Pendant bulb symbol, upper right */}
      <g className="wire-detail">
        <line x1={1380} y1={40} x2={1380} y2={140} />
        <circle cx={1380} cy={190} r={44} />
        <path d="M 1368 172 Q 1380 190 1392 172 M 1368 208 Q 1380 190 1392 208" />
        <line x1={1368} y1={238} x2={1368} y2={252} />
        <line x1={1392} y1={238} x2={1392} y2={252} />
      </g>

      {/* Static copper traces */}
      <g>
        {CIRCUITS.map((d, i) => (
          <path key={`w${i}`} className="wire" d={d} />
        ))}
      </g>

      {/* Travelling current pulses */}
      <g>
        {CIRCUITS.map((d, i) => (
          <path
            key={`p${i}`}
            className="wire-pulse"
            d={d}
            pathLength={1000}
            style={{
              animationDuration: `${PULSES[i]!.duration}s`,
              animationDelay: `${PULSES[i]!.delay}s`,
            }}
          />
        ))}
      </g>

      {/* White-hot spark cores riding each pulse */}
      <g>
        {CIRCUITS.map((d, i) => (
          <path
            key={`c${i}`}
            className="wire-pulse-core"
            d={d}
            pathLength={1000}
            style={{
              animationDuration: `${PULSES[i]!.duration}s`,
              animationDelay: `${PULSES[i]!.delay}s`,
            }}
          />
        ))}
      </g>

      {/* Junction nodes */}
      <g>
        {NODES.map(([x, y], i) => (
          <circle key={`n${i}`} className="wire-node" cx={x} cy={y} r={4} />
        ))}
      </g>
    </svg>
  );
}
