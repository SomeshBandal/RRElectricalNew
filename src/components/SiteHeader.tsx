import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { Fragment, useState } from "react";
import { brandOf, company, productCategories, productTypeGroups } from "@/data/site";
import { Button } from "@/components/ui/button";
import { LogoMark } from "./LogoMark";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;


export function SiteHeader(_props: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const headerCls = "sticky top-0 z-50 border-b border-border bg-secondary text-foreground";
  const linkCls = "krafty-nav-link";
  const activeCls = "text-accent";

  return (
    <header className={headerCls}>
      <div className="site-container flex h-[72px] items-center justify-between gap-4">
        <Link to="/" onClick={() => setOpen(false)} aria-label="R R Enterprises and Electricals home" className="shrink-0">
          <LogoMark className="h-11" />
        </Link>
        <nav className="hidden items-center gap-9 text-sm lg:flex">
          {nav.map((item) =>
            item.to === "/products" ? (
              <ProductsNav key={item.to} />
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors ${linkCls}`}
                activeProps={{ className: activeCls }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-4">
          <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hidden items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary md:inline-flex">
            <Phone className="size-3.5" />
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} aria-label="Email R R Electricals" className="hidden items-center gap-2 text-muted-foreground transition-colors hover:text-primary xl:inline-flex">
            <Mail className="size-4" />
            <span className="hidden text-xs 2xl:inline">{company.email}</span>
          </a>
          <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>
        {open && (
          <nav
            className={`border-t px-4 py-4 lg:hidden ${
              "border-border bg-background text-foreground"
            }`}
          >
            <div className="site-container flex flex-col">
              {nav.map((item) => (
                <Fragment key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`border-b py-3 text-sm font-semibold ${
                      "border-border text-foreground"
                    }`}
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                  {item.to === "/products" && (
                    <div className="grid grid-cols-2 gap-x-4 py-2">
                      {productTypeGroups.map((g) => (
                        <Link
                          key={g.id}
                          to="/products"
                          search={{ type: g.id }}
                          onClick={() => setOpen(false)}
                          className="py-1.5 text-xs font-medium text-muted-foreground hover:text-primary"
                        >
                          {g.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </Fragment>
              ))}
              <Button asChild className="mt-4 h-11 sm:hidden">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Request a survey
                </Link>
              </Button>
            </div>
          </nav>
        )}
    </header>
  );
}

function ProductsNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const active = location.pathname.startsWith("/products");

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        variant="ghost"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        className={`h-auto rounded-none px-0 py-0 font-normal hover:bg-transparent ${
          active ? "text-primary" : "text-foreground/80 hover:text-primary"
        }`}
      >
        Products
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </Button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
          <div className="w-[min(88vw,860px)] rounded-lg border border-border bg-background p-6 shadow-[var(--shadow-nav)]">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-3 xl:grid-cols-5">
              {productTypeGroups.map((group) => (
                <div key={group.id}>
                  <Link
                    to="/products"
                    search={{ type: group.id }}
                    onClick={() => setOpen(false)}
                    className="text-[11px] font-bold uppercase tracking-widest text-primary hover:underline"
                  >
                    {group.name}
                  </Link>
                  <ul className="mt-2 space-y-1.5">
                    {group.slugs.map((slug) => (
                      <li key={slug}>
                        <Link
                          to="/products"
                          search={{ type: group.id, range: slug }}
                          onClick={() => setOpen(false)}
                          className="block text-sm leading-snug text-foreground/80 transition-colors hover:text-primary"
                        >
                          {productCategories.find((c) => c.slug === slug)?.name}
                          <span className="block text-[11px] font-medium text-muted-foreground">
                            {brandOf(slug)} range
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="mt-5 flex w-full items-center justify-between border-t border-border pt-4 text-sm font-semibold text-primary"
            >
              View the full product range
              <ChevronDown className="size-4 -rotate-90" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
