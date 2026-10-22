import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/site";
import government from "@/assets/project-government.jpg";
import hotel from "@/assets/project-hotel.jpg";
import residential from "@/assets/project-residential.jpg";
import showroom from "@/assets/project-showroom.jpg";
import industrial from "@/assets/project-industrial.jpg";

const images: Record<Project["sector"], string> = { Government: government, Hotel: hotel, Residential: residential, Showroom: showroom, Industrial: industrial };

export function ProjectShowcase({ items = projects }: { items?: Project[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const current = items.find((project) => project.title === selected) ?? items[0];
  if (!current) return null;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[.85fr_1.15fr]">
      <div className="grid gap-3" aria-label="Select a completed project">
        {items.map((project) => (
          <Button key={project.title} variant="ghost" aria-pressed={current.title === project.title} aria-controls="project-preview" onClick={() => setSelected(project.title)} className={`project-choice h-auto min-h-24 justify-between gap-5 whitespace-normal rounded-lg border p-5 text-left hover:text-foreground ${current.title === project.title ? "border-primary/45 bg-secondary text-foreground hover:bg-secondary" : "border-border bg-card/70 text-foreground hover:bg-secondary/60"}`}>
            <span className="min-w-0"><span><span className="block font-display text-base font-semibold">{project.title}</span><span className="mt-2 block text-xs font-normal text-muted-foreground">{project.sector} · {project.location}</span></span></span>
            <ArrowUpRight className="shrink-0 text-primary" />
          </Button>
        ))}
      </div>
      <article id="project-preview" className="overflow-hidden rounded-lg border border-border bg-card/80 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
        <img key={current.title} src={images[current.sector]} alt={`${current.title} electrical installation`} width={1200} height={900} decoding="async" className="project-preview-image aspect-[16/10] w-full object-cover" />
        <div className="p-6 md:p-8" aria-live="polite" aria-atomic="true">
          <div className="flex items-center justify-between gap-4"><p className="section-kicker">{current.sector}</p><span className="font-mono text-xs text-muted-foreground">{current.year}</span></div>
          <h3 className="mt-4 text-2xl text-foreground md:text-3xl">{current.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.scope}</p>
          <p className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground"><MapPin className="size-4 text-copper" />{current.location}</p>
        </div>
      </article>
    </div>
  );
}