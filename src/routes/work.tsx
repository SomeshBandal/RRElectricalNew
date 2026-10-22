import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/site";
import { ProjectShowcase } from "@/components/ProjectShowcase";
const sectorFilters = ["All", "Government", "Hotel", "Residential", "Showroom", "Industrial"] as const;

export const Route = createFileRoute("/work")({ component: WorkPage, head: () => ({ meta: [
  { title: "Completed Electrical Projects | R R Enterprises and Electricals" }, { name: "description", content: "Government complexes, hotels, villas, showrooms and factories we have wired, tested and handed over — filter completed electrical projects by sector." },
  { property: "og:title", content: "Completed Electrical Projects | R R Enterprises and Electricals" }, { property: "og:description", content: "Government, hospitality, residential, retail and industrial installations delivered and certified." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
], links: [{ rel: "canonical", href: "/work" }] }) });

function WorkPage() {
  const [filter, setFilter] = useState<(typeof sectorFilters)[number]>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.sector === filter);
  return <PageShell><PageHero eyebrow="Work delivered" title="Built, tested and handed over." lead="A selection of completed installations. Full reference lists, completion certificates and client contacts are available for tender submissions." />
    <section className="site-container py-16 md:py-24"><div className="flex flex-wrap gap-2">{sectorFilters.map((s) => <Button key={s} type="button" variant="outline" size="sm" data-active={filter === s} className="filter-pill rounded-full px-4" onClick={() => setFilter(s)}>{s}</Button>)}</div>
      <div className="mt-10"><ProjectShowcase items={shown} /></div>
      <div className="mt-16 rounded-2xl bg-ink px-7 py-12 text-primary-foreground md:flex md:items-center md:justify-between md:px-14"><div><h2 className="text-3xl">Your project could be next.</h2><p className="mt-3 max-w-2xl text-primary-foreground/60">Tell us the building type, scope and timeline. We will book a site survey within two working days.</p></div><Button asChild size="lg" className="mt-7 md:mt-0"><Link to="/contact">Request a site survey <ArrowRight /></Link></Button></div>
    </section></PageShell>;
}
