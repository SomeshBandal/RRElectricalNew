import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardCheck, FileText, HardHat, Search } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { sectors, process } from "@/data/site";
import government from "@/assets/project-government.jpg";
import residential from "@/assets/project-residential.jpg";
import hotel from "@/assets/project-hotel.jpg";
import showroom from "@/assets/project-showroom.jpg";
import industrial from "@/assets/project-industrial.jpg";
import panel from "@/assets/hero-panel.jpg";

const processIcons = [Search, FileText, HardHat, ClipboardCheck];
const serviceImages = [government, residential, hotel, showroom, industrial, panel];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({ meta: [
    { title: "Electrical Contracting Services | R R Enterprises and Electricals" },
    { name: "description", content: "Government tenders, private homes, hotels, showrooms and industrial plants — full electrical contracting from survey and BOQ to testing and certified handover." },
    { property: "og:title", content: "Electrical Contracting Services | R R Enterprises and Electricals" },
    { property: "og:description", content: "Full electrical contracting for government, residential, hospitality, retail and industrial projects." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/services" }] }),
});

function ServicesPage() {
  return <PageShell>
    <PageHero eyebrow="What we do" title="Six sectors. One standard of workmanship." lead="From a tendered public building to a single villa rewire, the process, documentation and safety testing remain consistent. Only the scale changes." />
    <section className="site-container py-20 md:py-28">
      <Reveal><div className="grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end"><div><p className="section-kicker">Electrical capability</p><h2 className="mt-4 text-3xl md:text-5xl">Built around your site.</h2></div><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">We combine design coordination, material supply, licensed installation and test documentation under one accountable contract.</p></div></Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{sectors.map((s, i) => <Reveal key={s.no} delay={i * 60}><article className="glow-card group h-full rounded-lg"><img src={serviceImages[i]} alt={`${s.title} electrical installation`} width={1200} height={900} loading="lazy" decoding="async" className="feature-image aspect-[16/9] w-full object-cover" /><div className="p-7"><h2 className="text-2xl">{s.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p><div className="mt-6 flex items-center gap-2 text-sm font-semibold text-foreground"><Check className="size-4 text-primary" /> Tested and documented</div></div></article></Reveal>)}</div>
    </section>
    <section className="bg-surface py-20 md:py-28"><div className="site-container"><Reveal><div className="max-w-2xl"><p className="section-kicker">How a job runs</p><h2 className="mt-4 text-3xl md:text-5xl">A clear path from survey to sign-off.</h2></div></Reveal><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{process.map((p, i) => { const Icon = processIcons[i] ?? ClipboardCheck; return <Reveal key={p.step} delay={i * 70}><article className="glow-card h-full rounded-xl p-7"><div className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary"><Icon className="size-5" /></div><h3 className="mt-9 text-xl">{p.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p></article></Reveal>; })}</div></div></section>
    <section className="site-container py-20"><div className="rounded-2xl bg-ink px-7 py-12 text-primary-foreground md:flex md:items-center md:justify-between md:px-14"><div><p className="font-mono text-[11px] uppercase tracking-[.16em] text-accent">Tender teams</p><h2 className="mt-4 text-3xl">Have drawings, a BOQ or tender document?</h2><p className="mt-3 max-w-2xl text-primary-foreground/60">Send it across and we will respond with a priced, compliant scope.</p></div><Button asChild size="lg" className="mt-7 shrink-0 md:mt-0"><Link to="/contact">Talk to an engineer <ArrowRight /></Link></Button></div></section>
  </PageShell>;
}
