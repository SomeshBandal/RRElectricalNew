import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import pageHeroBand from "@/assets/page-hero-band.jpg";

export function PageShell({ children, overlayHeader = false }: { children: ReactNode; overlayHeader?: boolean }) {
  return <div className="flex min-h-screen flex-col"><SiteHeader overlay={overlayHeader} /><main className="flex-1">{children}</main><SiteFooter /></div>;
}

export function PageHero({ eyebrow, title, lead, image = pageHeroBand }: { eyebrow: string; title: string; lead: string; image?: string }) {
  return (
    <section className="page-hero relative overflow-hidden border-b border-border py-16 md:py-24">
      <img src={image} alt="" aria-hidden="true" width={1920} height={800} className="page-hero-photo" />
      <div className="page-hero-veil" aria-hidden="true" />
      <div className="site-container relative z-10">
        <div className="max-w-3xl">
          <p className="section-kicker">{eyebrow}</p>
          <h1 className="mt-5 max-w-[17ch] text-balance text-4xl leading-[1.02] md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-[58ch] text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">{lead}</p>
        </div>
      </div>
    </section>
  );
}
