import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { brandOf, productCategories, productTypeGroups as groups } from "@/data/site";
import { Pause, Play } from "lucide-react";
import switchesImg from "@/assets/product-switches.jpg";
import socketsImg from "@/assets/product-sockets.jpg";
import protectionImg from "@/assets/product-protection.jpg";
import workstationImg from "@/assets/product-workstation.jpg";
import cableImg from "@/assets/product-cable-management.jpg";
import automationImg from "@/assets/product-automation.jpg";
import lightingImg from "@/assets/product-lighting.jpg";
import vinayModularImg from "@/assets/product-vinay-modular.jpg";
import vinayNonModularImg from "@/assets/product-vinay-non-modular.jpg";
import switchgearImg from "@/assets/product-switchgear.jpg";
import wiresImg from "@/assets/product-wires-cables.jpg";
import vinayLightingImg from "@/assets/product-vinay-lighting.jpg";
import fansImg from "@/assets/product-fans.jpg";

const productImages: Record<string, string> = {
  switches: switchesImg,
  sockets: socketsImg,
  protection: protectionImg,
  workstation: workstationImg,
  "cable-management": cableImg,
  automation: automationImg,
  lighting: lightingImg,
  "vinay-modular": vinayModularImg,
  "vinay-non-modular": vinayNonModularImg,
  switchgear: switchgearImg,
  "wires-cables": wiresImg,
  "vinay-lighting": vinayLightingImg,
  fans: fansImg,
};

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): { type?: string; range?: string } => {
    const out: { type?: string; range?: string } = {};
    if (typeof search["type"] === "string") out.type = search["type"];
    if (typeof search["range"] === "string") out.range = search["range"];
    return out;
  },
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Legrand & Vinay Electrical Products | R R Enterprises and Electricals" },
      {
        name: "description",
        content:
          "Browse Legrand and Vinay switches, switchgear, wires, lights and accessories — grouped by brand and type, supplied with installation.",
      },
      { property: "og:title", content: "Legrand & Vinay Electrical Products | R R Enterprises and Electricals" },
      {
        property: "og:description",
        content:
          "Legrand and Vinay switches, switchgear, wires, lights and accessories — explore every range by brand and type.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

function ProductSlider({ onSelect }: { onSelect: (slug: string) => void }) {
  const slides = productCategories;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovered || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused, hovered, reducedMotion, slides.length]);

  const current = slides[index] ?? slides[0];
  if (!current) return null;

  return (
    <section className="relative isolate">
      <div
        className="relative isolate overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setHovered(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}
      >
        {slides.map((cat, i) => (
          <img
            key={cat.slug}
            src={productImages[cat.slug]}
            alt={i === index ? `${cat.name} product collection` : ""}
            aria-hidden={i !== index}
            decoding="async"
            loading={i === 0 ? "eager" : "lazy"}
            width={1024}
            height={1024}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="slider-veil pointer-events-none absolute inset-0" />

        <div className="site-container relative z-10 flex min-h-[420px] flex-col justify-end px-4 py-10 md:min-h-[540px] md:px-8 md:py-14">
          <p className="text-veil font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-copper">
            Legrand & Vinay · {brandOf(current.slug)} range
          </p>
          <h1 className="text-veil mt-4 max-w-3xl text-balance text-4xl leading-[1.02] text-foreground md:text-6xl">
            {current.name}
          </h1>
          <p className="text-veil mt-4 max-w-[58ch] text-base leading-relaxed text-foreground/75 md:text-lg">
            {current.blurb}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              type="button"
              onClick={() => onSelect(current.slug)}
              className="action-button rounded-md px-5 py-3 text-sm font-semibold"
            >
              View this range
            </Button>
            <div className="flex flex-wrap items-center gap-1" aria-label="Product slides">
              {slides.map((cat, i) => (
                <Button
                  key={cat.slug}
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-pressed={i === index}
                  aria-label={cat.name}
                  onClick={() => setIndex(i)}
                  className="size-7 hover:bg-secondary"
                ><span className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-5 bg-copper" : "w-2 bg-foreground/35"}`} /></Button>
              ))}
            </div>
            {!reducedMotion && <Button variant="outline" size="icon" aria-label={paused ? "Play product slideshow" : "Pause product slideshow"} onClick={() => setPaused((value) => !value)}>{paused ? <Play /> : <Pause />}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPage() {
  const [active, setActive] = useState<string>("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const { type, range } = Route.useSearch();

  useEffect(() => {
    if (range) {
      const owner = groups.find((g) => g.slugs.includes(range));
      if (owner) setActive(owner.id);
      setExpanded(range);
      window.setTimeout(() => {
        document.getElementById("product-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else if (type) {
      setActive(type);
      setExpanded(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [type, range]);

  const shownGroups = active === "all" ? groups : groups.filter((g) => g.id === active);

  const expandedCat = expanded
    ? productCategories.find((c) => c.slug === expanded)
    : null;

  const selectFilter = (slug: string) => {
    setActive(slug);
    setExpanded(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleCard = (slug: string) => {
    setExpanded((prev) => (prev === slug ? null : slug));
    window.setTimeout(() => {
      document.getElementById("product-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <PageShell>
      <ProductSlider onSelect={toggleCard} />

      <section id="product-list" className="site-container scroll-mt-24 pb-20 pt-12 md:pt-16">
        <div className="flex flex-wrap items-end gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Product type
            </span>
            <select
              value={active}
              onChange={(event) => selectFilter(event.target.value)}
              className="h-11 min-w-[220px] rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground outline-none transition-colors hover:border-primary/60 focus:border-primary"
            >
              <option value="all">All products</option>
              {groups.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Subtype · brand range
            </span>
            <select
              value={expanded ?? ""}
              onChange={(event) => {
                const slug = event.target.value;
                if (!slug) {
                  setExpanded(null);
                  return;
                }
                const owner = groups.find((g) => g.slugs.includes(slug));
                if (owner) setActive(owner.id);
                setExpanded(slug);
                window.setTimeout(() => {
                  document.getElementById("product-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }}
              className="h-11 min-w-[280px] rounded-lg border border-border bg-card px-4 text-sm font-medium text-foreground outline-none transition-colors hover:border-primary/60 focus:border-primary"
            >
              <option value="">All subtypes</option>
              {groups.map((g) => (
                <optgroup key={g.id} label={g.name}>
                  {productCategories
                    .filter((c) => g.slugs.includes(c.slug))
                    .map((c) => (
                      <option key={c.slug} value={c.slug}>
                        {brandOf(c.slug)} · {c.name}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </label>
        </div>

        {expandedCat ? (
          <Reveal key={expandedCat.slug}>
            <div className="mt-14">
              <Button
                type="button"
                variant="ghost"
                onClick={() => toggleCard(expandedCat.slug)}
                className="h-auto gap-2 px-0 font-mono text-[11px] uppercase tracking-[0.18em] text-primary hover:bg-transparent hover:text-foreground"
              >
                <span aria-hidden="true">←</span> All categories
              </Button>

              <article className="mt-8 grid items-start gap-8 lg:grid-cols-12">
                <div className="glow-card group overflow-hidden rounded-lg lg:sticky lg:top-24 lg:col-span-5">
                  <img
                    src={productImages[expandedCat.slug]}
                    alt={`${expandedCat.name} product collection`}
                    decoding="async"
                    width={1024}
                    height={1024}
                      className="aspect-square w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="border-t border-border/60 p-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
                      {brandOf(expandedCat.slug)} · {groups.find((g) => g.slugs.includes(expandedCat.slug))?.name}
                    </span>
                    <h2 className="mt-2 text-3xl">{expandedCat.name}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{expandedCat.blurb}</p>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border/70 pb-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Available products
                    </p>
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-copper">
                      {expandedCat.items.length} lines
                    </span>
                  </div>

                  <div className="mt-3 divide-y divide-border/60">
                    {expandedCat.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start"
                      >
                        <div>
                          <h3 className="text-xl">{item.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:text-right">
                          {item.spec}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 border-t border-border/60 pt-8">
                    {productCategories
                      .filter((c) => c.slug !== expandedCat.slug && groups.find((g) => g.slugs.includes(expandedCat.slug))?.slugs.includes(c.slug))
                      .map((c) => (
                         <Button
                          key={c.slug}
                          type="button"
                           variant="outline"
                           size="sm"
                          onClick={() => toggleCard(c.slug)}
                           className="filter-pill rounded-full px-4"
                        >
                          {c.name}
                         </Button>
                      ))}
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 space-y-20">
            {shownGroups.map((group) => (
              <div key={group.id}>
                <div className="flex items-end justify-between gap-4 border-b border-border/70 pb-4">
                  <h2 className="text-3xl md:text-4xl">{group.name}</h2>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
                    {group.slugs.length} ranges
                  </span>
                </div>
                {["Legrand", "Vinay"].map((brand) => {
                  const cats = productCategories.filter((c) => group.slugs.includes(c.slug) && brandOf(c.slug) === brand);
                  if (!cats.length) return null;
                  return (
                    <div key={brand} className="mt-8">
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{brand}</p>
                      <div className="bento-grid mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {cats.map((cat) => (
              <Reveal key={cat.slug}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => toggleCard(cat.slug)}
                  aria-expanded={false}
                  className="glow-card group block h-auto size-full whitespace-normal rounded-xl p-0 text-left hover:bg-card"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={productImages[cat.slug]}
                      alt={`${cat.name} product collection`}
                      loading="lazy" decoding="async"
                      width={1024}
                      height={1024}
                      className="aspect-[4/3] w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                    <span className="absolute bottom-4 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-copper">
                      {brandOf(cat.slug)}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl leading-snug">{cat.name}</h3>
                      <span
                        aria-hidden="true"
                        className="mt-1 font-mono text-sm text-energy transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{cat.blurb}</p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-copper">
                      {cat.items.length} lines
                    </p>
                  </div>
                </Button>
              </Reveal>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        <Reveal>
          <div className="glow-card energy-scan mt-16 rounded-lg border border-energy/25 p-8">
            <h2 className="text-xl font-semibold">Need the full catalogue?</h2>
            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              Manufacturer catalogues with exact model numbers, finishes and price lists are
              shared on request against a project requirement.
            </p>
            <Button asChild className="action-button mt-6"><Link to="/contact">Request the catalogue</Link></Button>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
