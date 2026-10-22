import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { company } from "@/data/site";
import { LogoMark } from "./LogoMark";

export function SiteFooter() {
  return (
    <footer className="krafty-footer border-t border-border">
      <div className="site-container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.75fr_.9fr] lg:gap-12">
          <div className="max-w-xl">
            <LogoMark className="h-12" wordmarkAlways />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Electrical contracting for government, hospitality, retail, residential and industrial projects across {company.city}. Licensed, tested and certified.</p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary">Request a site survey <ArrowUpRight className="size-4" /></Link>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Explore</p>
            <div className="mt-5 grid gap-3 text-sm">
              <Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link>
              <Link to="/products" className="text-muted-foreground hover:text-primary">Products</Link>
              <Link to="/work" className="text-muted-foreground hover:text-primary">Work</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
          <div className="lg:text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
            <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-primary lg:justify-end"><Phone className="size-4 text-primary" />{company.phone}</a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all hover:text-primary lg:justify-end"><Mail className="size-4 shrink-0 text-primary" />{company.email}</a>
              <p>{company.hours}<br />{company.city}</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between"><span>{company.reg}</span><span>© {new Date().getFullYear()} {company.name}</span></div>
      </div>
    </footer>
  );
}
