import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/locations";
import { cn } from "@/lib/utils";
import logo from "@/assets/yesssworks-logo-transparent.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Plans", to: "/plans" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "YesssBoard", to: "/yesssboard" },
];

/** Landing-page variant of the site header.
 *  Same look as the main Header but always shows the phone number,
 *  so visitors landing from paid campaigns can call instantly. */
export const LpHeader = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "locations" | "packages">(null);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="YesssWorks home">
          <img src={logo} alt="YesssWorks logo" className="h-9 md:h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold uppercase tracking-wide">
          <NavLink to="/" className={({ isActive }) => cn("hover:text-primary transition-colors", isActive && "text-primary")}>Home</NavLink>
          <div className="relative" onMouseEnter={() => setMenu("locations")} onMouseLeave={() => setMenu(null)}>
            <button className={cn("flex items-center gap-1 hover:text-primary transition-colors", loc.pathname.includes("-in-") && "text-primary")}>
              Locations <ChevronDown className="h-3 w-3" />
            </button>
            {menu === "locations" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                <div className="bg-card shadow-[var(--shadow-card)] border border-border rounded-md p-4 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">ANDHERI</p>
                    <Link to="/yesssworks-andheri-ackruti-softech-park" className="block py-1 text-sm hover:text-primary normal-case">Ackruti Softech Park</Link>
                    <Link to="/yesssworks-andheri-at" className="block py-1 text-sm hover:text-primary normal-case">AT. By AGM Vijaylaxmi</Link>
                    <Link to="/yesssworks-andheri-pinnacle-business-park" className="block py-1 text-sm hover:text-primary normal-case">Pinnacle Business Park</Link>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">GOREGAON</p>
                    <Link to="/yesssworks-goregaon-271-business-park" className="block py-1 text-sm hover:text-primary normal-case">271 Business Park</Link>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground mb-1">MAHAPE</p>
                    <Link to="/yesssworks-mahape-aurum-q6" className="block py-1 text-sm hover:text-primary normal-case">Aurum Q6, Millenium Business Park</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          {navItems.slice(1).map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => cn("hover:text-primary transition-colors", isActive && "text-primary")}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-primary transition-colors"
            aria-label={`Call YesssWorks at ${SITE.phone}`}
          >
            <span className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Call us</span>
              <span className="block">{SITE.phone}</span>
            </span>
          </a>
          <Button asChild variant="default" size="sm" className="hidden lg:inline-flex">
            <Link to="/contact">Book a Tour</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2 text-sm font-semibold uppercase">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 hover:text-primary">{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};