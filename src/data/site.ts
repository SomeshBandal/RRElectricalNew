export const company = {
  name: "R R Enterprises and Electricals",
  tagline: "Licensed electrical contractors",
  phone: "+91 70204 67996",
  email: "rrelectricalworks0801@gmail.com",
  city: "Pune, Maharashtra",
  hours: "Mon–Sat · 09:00–19:00",
  reg: "Licensed electrical contractor",
  since: 2011,
};

export const sectors = [
  {
    no: "01",
    title: "Government contracts",
    body: "Tendered electrical packages for civic offices, schools, hospitals and public works — BOQ-aligned, inspected and certified.",
  },
  {
    no: "02",
    title: "Private residences",
    body: "New-build wiring, full rewires, dedicated circuits and lighting design for bungalows, flats and villas.",
  },
  {
    no: "03",
    title: "Hotels & hospitality",
    body: "Guest-room power, kitchens, back-of-house distribution and 24/7 commissioning support with minimal downtime.",
  },
  {
    no: "04",
    title: "Showrooms & retail",
    body: "Track and accent lighting, display circuits and concealed routing that keeps the merchandise the hero.",
  },
  {
    no: "05",
    title: "Industrial & plant",
    body: "Three-phase distribution, MCC panels, motor control, earthing systems and backup generation.",
  },
  {
    no: "06",
    title: "Maintenance & AMC",
    body: "Annual contracts, thermographic inspection, load audits and emergency breakdown response.",
  },
];

export const stats = [
  { value: "480+", label: "Projects delivered" },
  { value: "14", label: "Years in the field" },
  { value: "36", label: "Licensed engineers" },
  { value: "0", label: "Open safety defects" },
];

export type ProductCategory = {
  slug: string;
  name: string;
  blurb: string;
  items: { name: string; spec: string; note: string }[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "switches",
    name: "Modular switches & plates",
    blurb:
      "Legrand modular ranges we supply and install — from everyday value lines to premium designer plates.",
    items: [
      { name: "Myrius", spec: "6A / 16A · 1–12 module", note: "Everyday modular range with a wide plate library" },
      { name: "Allzy", spec: "6A / 16A modular", note: "Value range for homes, schools and offices" },
      { name: "Arteor", spec: "Round & square rockers", note: "White, magnesium and champagne finishes" },
      { name: "Arteor Advance", spec: "Premium hybrid plates", note: "Luxury projects with character" },
      { name: "Living Now", spec: "Slim modular · digital controls", note: "Contemporary finishes with IoT-ready controls" },
    ],
  },
  {
    slug: "sockets",
    name: "Sockets, USB & power outlets",
    blurb: "Shuttered socket-outlets and fast USB charging built into standard modular plates.",
    items: [
      { name: "2P+E shuttered socket", spec: "6A / 16A · IP20", note: "Child-safe shutters, screwless terminals" },
      { name: "USB Type-C charger", spec: "20W · Power Delivery", note: "Bedside, desk and hospitality positions" },
      { name: "USB Type-C laptop charger", spec: "45W · Power Delivery", note: "Charges phones, tablets and laptops" },
      { name: "USB Type-A charger", spec: "15W · 3A", note: "Fits neatly in standard modular plates" },
      { name: "Industrial plug & socket", spec: "16A–125A · IP44 / IP67", note: "Plant, workshop and site power" },
    ],
  },
  {
    slug: "protection",
    name: "MCBs, RCCBs & distribution",
    blurb: "Protection devices and boards sized to the load, the fault level and the inspector.",
    items: [
      { name: "DX³ MCB", spec: "6A–63A · 10kA · B/C/D", note: "Final circuit protection" },
      { name: "DX³ RCCB", spec: "30mA / 100mA · 2P & 4P", note: "Earth leakage protection" },
      { name: "RCBO", spec: "Combined MCB + RCD", note: "Space-saving per-circuit protection" },
      { name: "Distribution boards", spec: "4–24 way · SPN & TPN", note: "Consumer units and sub-boards" },
      { name: "DPX³ MCCB", spec: "100A–1600A", note: "Main incomer and heavy distribution" },
    ],
  },
  {
    slug: "workstation",
    name: "Workstation & floor power",
    blurb:
      "Power and data distribution for the office environment — desks, floors, walls and ceilings.",
    items: [
      { name: "Floor boxes", spec: "Screed & raised access floor", note: "Conference rooms and open-plan floors" },
      { name: "Pop-up boxes & grommets", spec: "Desktop mounted", note: "Power and data at the desk" },
      { name: "Mini-columns & service poles", spec: "Floor to ceiling", note: "Islands away from walls" },
      { name: "DLP wall trunking & columns", spec: "Multi-compartment", note: "Clean segregated power and data runs" },
      { name: "Raceways & junction boxes", spec: "For screed floor", note: "Concealed underfloor routing" },
    ],
  },
  {
    slug: "cable-management",
    name: "Cable trays & overhead routing",
    blurb: "Cablofil wire mesh and steel systems for risers, ceilings and plant rooms.",
    items: [
      { name: "Cablofil wire mesh tray", spec: "Widths 50–600mm", note: "Fast, ventilated overhead routing" },
      { name: "Cable ladders & trays", spec: "Steel, hot-dip galvanised", note: "Heavy cable runs and risers" },
      { name: "Supports & brackets", spec: "Wall, ceiling and threaded rod", note: "Engineered spans and loads" },
      { name: "Conduit & fittings", spec: "20mm / 25mm · fire-retardant", note: "Concealed and surface runs" },
      { name: "Glands, lugs & labelling", spec: "Brass, crimped", note: "Terminations to spec" },
    ],
  },
  {
    slug: "automation",
    name: "Smart home & building control",
    blurb: "Scene control, app and voice control layered over standard wiring.",
    items: [
      { name: "Living Now with Netatmo", spec: "Wi-Fi · app & voice", note: "Home+Control app, Alexa and Google" },
      { name: "Arteor smart controls", spec: "Scenes & schedules", note: "Retrofit smart switching" },
      { name: "Scene controllers", spec: "4 / 8 scene", note: "Hotel rooms and living areas" },
      { name: "Occupancy & daylight sensors", spec: "PIR · 360°", note: "Corridors, washrooms, offices" },
      { name: "Motorised curtain & blind control", spec: "Relay + remote", note: "Suites and showrooms" },
    ],
  },
  {
    slug: "lighting",
    name: "Lighting & luminaires",
    blurb: "Layered light: general, task, accent — specified with lux calculations, not guesswork.",
    items: [
      { name: "Linear LED profiles", spec: "2700K–4000K · dimmable", note: "Coves, reception, retail edges" },
      { name: "Track & spot lighting", spec: "12W–35W · 24°/38°", note: "Showroom display" },
      { name: "Recessed downlights", spec: "IP20 / IP44", note: "Homes, hotels, offices" },
      { name: "Emergency & exit fittings", spec: "3hr maintained", note: "Statutory life-safety lighting" },
    ],
  },
  {
    slug: "vinay-modular",
    name: "Vinay modular wiring devices",
    blurb:
      "Vinay wallpiece ranges — Adora, Altis, Leo and Aura — with 1M to 24M plates, switches, sockets, dimmers and gang boxes.",
    items: [
      { name: "Adora A1+ to A11 series", spec: "1M–24M plates · 16A", note: "White, ivory-gold, wood and mirror finishes" },
      { name: "Altis A1–A3 series", spec: "1M–18M plates", note: "Hash brown, gun grey, black and rose wood finishes" },
      { name: "Leo L1 & L2 series", spec: "1M–20M plates", note: "Moon white plus metallic and graphite hues" },
      { name: "Adora & Adora XL switches", spec: "6A / 16A · 1-way, 2-way", note: "Toggle, bell push and CV switch options" },
      { name: "Sockets, USB & shaver units", spec: "6A / 16A · USB charger", note: "Blanking plates, indicators, buzzers, bell" },
      { name: "Fan regulators & dimmers", spec: "Step regulator · dimmer", note: "Switch-size and socket-size versions" },
      { name: "Gang & concealed boxes", spec: "GI sheet · PVC · surface", note: "Powder-coated metal and unbreakable surface boxes" },
    ],
  },
  {
    slug: "vinay-non-modular",
    name: "Non-modular accessories",
    blurb: "Vinay Clair PC, Clair 10 and Clair 40 non-modular range for quick installs, repairs and site work.",
    items: [
      { name: "Clair PC switches", spec: "6A / 16A · 1-way & 2-way", note: "Flush switches and bell push" },
      { name: "Clair universal sockets", spec: "6A / 16A / 32A", note: "Dura switch-socket and kit-kat fuse units" },
      { name: "Switch-socket combined", spec: "6A & 16A · with junction box", note: "Single-unit power point" },
      { name: "5-in-1 units", spec: "Clair 10 & Clair 40", note: "Switch, socket and indicator in one plate" },
      { name: "Fan regulators & dimmers", spec: "80W regulator · 400W dimmer", note: "Switch-size and socket-size" },
      { name: "32A DP switches & MCB enclosure", spec: "32A double pole", note: "Geyser, AC and appliance isolation" },
    ],
  },
  {
    slug: "switchgear",
    name: "Switchgear & distribution boards",
    blurb: "Vinay Nova and Nova X protection devices with sheet-metal boards and enclosures for homes, offices and plants.",
    items: [
      { name: "Nova X MCB — single pole", spec: "6A–63A · 10kA · C series", note: "Final circuit protection" },
      { name: "Nova X MCB — DP, TP & FP", spec: "6A–63A · 10kA", note: "Mains, three-phase and four-pole circuits" },
      { name: "RCCB & ACCL", spec: "Two & four pole", note: "Earth leakage and automatic load limiting" },
      { name: "Isolators & changeover switches", spec: "DP & FP · up to 63A", note: "Mains isolation and miniature changeover" },
      { name: "Distribution boards", spec: "SPN & TPN · single door", note: "Sheet metal, powder coated, with phase selector" },
      { name: "Enclosures & plug-socket boxes", spec: "Sheet metal, powder coated", note: "MCB enclosures and blanking plates" },
    ],
  },
  {
    slug: "wires-cables",
    name: "Wires & cables",
    blurb: "Vinay house wires and specialised cables — pure electrolytic copper with flame-retardant insulation.",
    items: [
      { name: "VINFR flame-retardant house wire", spec: "FR · 1.0–6.0 sq mm", note: "99.97% pure annealed copper conductor" },
      { name: "VINSTRND / VINGRD wires", spec: "FR-LSH & ZHFR grades", note: "Higher ambient temperature and low-smoke needs" },
      { name: "Multi-core flexible cables", spec: "2, 3 & 4 core", note: "Appliance, pump and panel connections" },
      { name: "Communication & CCTV cables", spec: "CAT & coaxial", note: "Data, telephone and camera runs" },
      { name: "Speaker & special-purpose wires", spec: "VISP range", note: "Audio and low-voltage circuits" },
      { name: "SECUVIN security cables", spec: "Multi-strand shielded", note: "Alarm, access and signalling systems" },
    ],
  },
  {
    slug: "vinay-lighting",
    name: "LED lamps, battens & panels",
    blurb: "Vinay lighting showcase — bulbs, battens, panels and downlights for homes, offices and shopfronts.",
    items: [
      { name: "Glovin LED bulbs", spec: "B22 & E27 holders", note: "Everyday warm and cool white lamps" },
      { name: "VinBrite LED inverter bulb", spec: "9W · up to 4hr backup", note: "Light that stays on through a cut" },
      { name: "VinMax+ high wattage bulbs", spec: "30W–100W", note: "Halls, workshops and shopfronts" },
      { name: "Ecovin & Aluvin LED battens", spec: "10W–40W", note: "Polycarbonate and aluminium bodies" },
      { name: "VinFlex & Aerovin NX panels", spec: "Recess mount · adjustable", note: "False ceilings in homes and offices" },
      { name: "VinLED downlights", spec: "Eco, 3-in-1 and deep recessed", note: "Selectable colour temperature options" },
      { name: "VinSlim, Roto & Striko surface lights", spec: "Surface mount", note: "Slim panels and striker spot lights" },
    ],
  },
  {
    slug: "fans",
    name: "Ventilation fans",
    blurb: "Vinto ventilation fans for bathrooms, kitchens and utility rooms — quiet motors and tangential blades.",
    items: [
      { name: "Vinto ventilation fan 150mm", spec: "6 inch · milky white", note: "Bathrooms and small utility rooms" },
      { name: "Vinto ventilation fan 200mm", spec: "8 inch · milky white", note: "Kitchens and washrooms" },
      { name: "Vinto ventilation fan 250mm", spec: "10 inch · milky white", note: "Larger rooms and back-of-house areas" },
      { name: "Auto dust-protection shutters", spec: "Built-in", note: "Closes when the fan is off" },
      { name: "Aerodynamic tangential blades", spec: "High air delivery", note: "Smooth, silent air movement" },
    ],
  },
];

export const vinaySlugs = new Set([
  "vinay-modular",
  "vinay-non-modular",
  "switchgear",
  "wires-cables",
  "vinay-lighting",
  "fans",
]);

export const productTypeGroups = [
  { id: "switches", name: "Switches", slugs: ["switches", "sockets", "vinay-modular", "vinay-non-modular"] },
  { id: "switchgear", name: "Switchgear", slugs: ["protection", "switchgear"] },
  { id: "wires", name: "Wires", slugs: ["wires-cables"] },
  { id: "lights", name: "Lights", slugs: ["lighting", "vinay-lighting"] },
  { id: "other", name: "Other accessories", slugs: ["cable-management", "workstation", "automation", "fans"] },
];

export const brandOf = (slug: string) => (vinaySlugs.has(slug) ? "Vinay" : "Legrand");

export type Project = {
  title: string;
  sector: "Government" | "Hotel" | "Residential" | "Showroom" | "Industrial";
  location: string;
  scope: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "District Administrative Complex",
    sector: "Government",
    location: "Ahmednagar",
    scope: "Complete internal electrification, 1,250 circuits, DG changeover and earthing grid.",
    year: "2024",
  },
  {
    title: "Sahyadri Grand — 118 keys",
    sector: "Hotel",
    location: "Lonavala",
    scope: "Guest-room wiring, key-card power, kitchen distribution and banquet dimming.",
    year: "2024",
  },
  {
    title: "Riverstone Villa",
    sector: "Residential",
    location: "Baner, Pune",
    scope: "Full rewire, concealed conduit, Arteor scene control and landscape lighting.",
    year: "2025",
  },
  {
    title: "Velocity Motors Flagship",
    sector: "Showroom",
    location: "Wakad, Pune",
    scope: "Track lighting grid, 3-phase display bays and façade illumination.",
    year: "2023",
  },
  {
    title: "Municipal School Upgrade — 12 blocks",
    sector: "Government",
    location: "Pimpri-Chinchwad",
    scope: "Rewiring to IS 732, RCBO protection and classroom LED retrofit.",
    year: "2023",
  },
  {
    title: "Precision Components Plant",
    sector: "Industrial",
    location: "Chakan MIDC",
    scope: "800A MCCB distribution, MCC panels, cable trays and thermography baseline.",
    year: "2025",
  },
];

export const process = [
  { step: "01", title: "Site survey", body: "Load assessment, existing-condition report and photographs within 48 hours." },
  { step: "02", title: "Design & BOQ", body: "Single-line diagram, lux plan and an itemised bill of quantities you can tender." },
  { step: "03", title: "Execution", body: "Licensed crews, daily progress log, safety briefing and material traceability." },
  { step: "04", title: "Testing & handover", body: "Insulation, earth-loop and RCD testing with a signed certificate pack." },
];
