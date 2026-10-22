import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUp, ArrowDown, Phone, Zap } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { useState } from "react";
import lampsImg from "@/assets/krafty-lamps.jpg";
import electricianImg from "@/assets/krafty-electrician.jpg";
import { company, sectors, stats, productCategories, projects } from "@/data/site";
import heroImg from "@/assets/hero-panel.jpg";
import govImg from "@/assets/project-government.jpg";
import hotelImg from "@/assets/project-hotel.jpg";
import showroomImg from "@/assets/project-showroom.jpg";
import residentialImg from "@/assets/project-residential.jpg";
import industrialImg from "@/assets/project-industrial.jpg";
import switchesImg from "@/assets/product-switches.jpg";
import protectionImg from "@/assets/product-protection.jpg";
import lightingImg from "@/assets/product-lighting.jpg";

const productImages = [switchesImg, protectionImg, lightingImg];
const sectorImages = [govImg, residentialImg, hotelImg, showroomImg, industrialImg, heroImg];

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "R R Enterprises and Electricals | Electrical Contractors for Govt, Hotels & Homes" },
      { name: "description", content: "Licensed electrical contractors delivering government tenders, hotel fit-outs, showroom lighting and home wiring, with the full Legrand and Vinay product ranges supplied and installed." },
      { property: "og:title", content: "R R Enterprises and Electricals | Electrical Contractors" },
      { property: "og:description", content: "Government, hospitality, retail, residential and industrial electrical works — surveyed, wired, tested and certified." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Electrician", name: "R R Enterprises and Electricals", telephone: "+917020467996", email: "rrelectricalworks0801@gmail.com", areaServed: "Pune, Maharashtra, India", foundingDate: "2011", openingHours: "Mo-Sa 09:00-19:00" }) }],
  }),
});

function Home() {
  const [slide, setSlide] = useState(0);
  const slides = [lampsImg, heroImg, hotelImg];
  const image = slides[slide] ?? lampsImg;
  return (
    <PageShell>
      <section className="krafty-hero" aria-label="Electrical services slideshow">
        <img key={image} src={image} alt="Electrical lighting and installation" width={1920} height={1024} fetchPriority="high" decoding="async" className="absolute inset-0 size-full object-cover project-preview-image" />
        <div className="krafty-hero-overlay" />
        <div className="site-container krafty-hero-content relative">
          <div className="krafty-title-frame">
            <p className="hero-eyebrow">YOUR ELECTRICAL PARTNER</p>
            <h1 className="mt-5">R R Enterprises<br />& Electricals.</h1>
            <p className="hero-brand">Homes · Hotels · Government · Industry</p>
            <Button asChild size="lg" className="mt-7 h-12 rounded-full px-9"><Link to="/contact">Start Now</Link></Button>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="mt-4 block text-xs">Call: {company.phone}</a>
          </div>
        </div>
        <div className="krafty-controls"><Button variant="outline" size="icon" aria-label="Previous slide" onClick={() => setSlide(i => (i + slides.length - 1) % slides.length)}><ArrowUp /></Button><Button variant="outline" size="icon" aria-label="Next slide" onClick={() => setSlide(i => (i + 1) % slides.length)}><ArrowDown /></Button></div>
      </section>
      <section className="krafty-request"><div className="site-container flex flex-col items-center justify-between gap-6 md:flex-row"><div><p className="section-kicker">Let’s get started</p><h2 className="mt-2 text-2xl font-medium">Request Service Now</h2></div><div className="flex flex-wrap justify-center gap-4"><Button asChild size="lg" className="h-12 rounded-full"><Link to="/contact">Request a site survey <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="h-12 rounded-full"><a href={`tel:${company.phone.replace(/\s/g, "")}`}><Phone /> Call the team</a></Button></div></div></section>
      <section className="krafty-about">
        <img src={electricianImg} alt="Electrician working on a distribution panel" loading="lazy" width={1920} height={1024} />
        <div className="site-container relative"><Reveal className="krafty-about-copy"><p className="section-kicker">About us</p><h2 className="krafty-heading mt-3">Who We Are</h2><p className="mt-12 text-sm leading-8 text-muted-foreground">R R Enterprises and Electricals delivers electrical work for government buildings, private homes, hotels, showrooms and industrial sites across Pune and Maharashtra.</p><div className="my-7 flex items-center justify-center gap-4"><img src="/media/rr-logo.png" alt="R R Electricals logo" className="!static !size-16 rounded-full" width={64} height={64} loading="lazy" /><div className="text-left"><p className="text-sm font-medium">R R Enterprises</p><p className="mt-1 text-xs text-muted-foreground">& Electricals</p></div></div><p className="text-sm leading-8 text-muted-foreground">From the first site survey to wiring, product supply and final testing, one team takes care of your electrical installation.</p><div className="mt-9 flex justify-center gap-4"><Button asChild className="h-11 rounded-full px-7"><Link to="/contact">Start Now</Link></Button><Button asChild variant="outline" className="h-11 rounded-full px-7"><Link to="/services">Learn More</Link></Button></div></Reveal></div>
      </section>
      <section className="krafty-photo-band"><img src={lampsImg} alt="Warm illuminated pendant lights" loading="lazy" width={1920} height={1024} /><div className="krafty-hero-overlay" /><div className="relative py-16"><p className="text-xs uppercase tracking-[.22em]">Do you need</p><h2 className="mt-5">Power for your<br />next project?</h2><Button asChild size="lg" className="mt-8 h-12 rounded-full"><Link to="/contact">Start Now</Link></Button></div></section>
      <section className="site-container py-20 md:py-28"><Reveal className="text-center"><p className="section-kicker">We are expert in</p><h2 className="krafty-heading mt-3">Our Services</h2></Reveal><div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{sectors.map((sector,index) => <Reveal key={sector.no} delay={index*50}><article className="glow-card krafty-service group h-full"><img src={sectorImages[index]} alt={`${sector.title} electrical work`} loading="lazy" decoding="async" width={1200} height={900} className="feature-image" /><div className="px-7 py-9"><Zap className="mx-auto size-9 text-primary" strokeWidth={1.3} /><h3 className="mt-5 text-xl font-medium">{sector.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{sector.body}</p><Link to="/services" className="mt-7 inline-block text-xs font-medium uppercase text-foreground underline decoration-primary decoration-2 underline-offset-8">Read more</Link></div></article></Reveal>)}</div></section>
      <section className="bg-surface py-20 md:py-28"><div className="site-container"><Reveal className="text-center"><p className="section-kicker">Products we supply</p><h2 className="krafty-heading mt-3">Our Product Range</h2></Reveal><div className="mt-16 grid gap-8 md:grid-cols-3">{productCategories.slice(0,3).map((cat,index) => <Link key={cat.slug} to="/products" search={{range:cat.slug}} className="glow-card group block"><img src={productImages[index]} alt={cat.name} loading="lazy" width={1024} height={1024} className="feature-image aspect-[4/3] w-full object-cover" /><div className="p-7 text-center"><p className="section-kicker">Legrand</p><h3 className="mt-3 text-xl">{cat.name}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{cat.blurb}</p></div></Link>)}</div><div className="mt-10 text-center"><Button asChild variant="outline" className="h-12 rounded-full px-8"><Link to="/products">All Products <ArrowRight /></Link></Button></div></div></section>
      <section className="site-container py-20 md:py-28"><Reveal className="text-center"><p className="section-kicker">Our portfolio</p><h2 className="krafty-heading mt-3">Selected Work</h2></Reveal><div className="mt-16"><ProjectShowcase items={projects.slice(0,4)} /></div><div className="mt-10 text-center"><Button asChild variant="outline" className="h-12 rounded-full px-8"><Link to="/work">View All Work <ArrowRight /></Link></Button></div></section>
      <section className="krafty-stats"><div className="site-container grid grid-cols-2 gap-8 py-16 md:grid-cols-4">{stats.map(stat => <div key={stat.label} className="text-center"><p className="font-display text-4xl font-light">{stat.value}</p><p className="mt-4 text-xs">{stat.label}</p></div>)}</div></section>
      <section className="site-container py-20 text-center"><p className="section-kicker">Let’s talk</p><h2 className="krafty-heading mt-3">Your Project Starts Here</h2><p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-muted-foreground">Share your building, scope and timeline with R R Enterprises and Electricals.</p><Button asChild size="lg" className="mt-8 h-12 rounded-full"><Link to="/contact">Request a site survey <ArrowRight /></Link></Button></section>
    </PageShell>
  );
}
