import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, locations } from "@/data/locations";
import { cn } from "@/lib/utils";
import logo from "@/assets/yesssworks-logo-transparent.png";

const navItems = [
  { label: "Plans", to: "/plans" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "YesssBoard", to: "/yesssboard" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "locations" | "packages">(null);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="YesssWorks home">
          <img src={logo} alt="YesssWorks logo" className="h-9 md:h-11 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
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

          <div className="relative" onMouseEnter={() => setMenu("packages")} onMouseLeave={() => setMenu(null)}>
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Packages <ChevronDown className="h-3 w-3" />
            </button>
            {menu === "packages" && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64">
                <div className="bg-card shadow-[var(--shadow-card)] border border-border rounded-md p-4 space-y-1">
                  <Link to="/packages/fixed-desks" className="block py-1.5 text-sm hover:text-primary normal-case">Fixed Desks</Link>
                  <Link to="/packages/private-cabins" className="block py-1.5 text-sm hover:text-primary normal-case">Private Cabins</Link>
                  <Link to="/packages/meeting-conference" className="block py-1.5 text-sm hover:text-primary normal-case">Meeting &amp; Conference</Link>
                  <Link to="/packages/office-suites" className="block py-1.5 text-sm hover:text-primary normal-case">Office Suites</Link>
                </div>
              </div>
            )}
          </div>

          {navItems.slice(1).map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => cn("hover:text-primary transition-colors", isActive && "text-primary border-b-2 border-primary pb-1")}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" size="sm">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2 text-sm font-semibold">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 hover:text-primary">{n.label}</Link>
            ))}
            <p className="pt-3 text-xs text-muted-foreground">Locations</p>
            <Link to="/yesssworks-andheri-at" onClick={() => setOpen(false)} className="block py-1 normal-case font-normal hover:text-primary">YesssWorks Andheri, AT</Link>
            <Link to="/yesssworks-andheri-pinnacle-business-park" onClick={() => setOpen(false)} className="block py-1 normal-case font-normal hover:text-primary">YesssWorks Andheri, Pinnacle</Link>
            <Link to="/yesssworks-andheri-ackruti-softech-park" onClick={() => setOpen(false)} className="block py-1 normal-case font-normal hover:text-primary">YesssWorks Andheri, Ackruti</Link>
            <Link to="/yesssworks-goregaon-271-business-park" onClick={() => setOpen(false)} className="block py-1 normal-case font-normal hover:text-primary">YesssWorks Goregaon, 271</Link>
            <Link to="/yesssworks-mahape-aurum-q6" onClick={() => setOpen(false)} className="block py-1 normal-case font-normal hover:text-primary">YesssWorks Mahape, Aurum Q6</Link>
            <p className="pt-3 text-xs text-muted-foreground">Packages</p>
            {Object.values(services).map((s) => (
              <Link key={s.slug} to={`/packages/${s.slug === 'fixed-desk' ? 'fixed-desks' : s.slug === 'private-cabin' ? 'private-cabins' : s.slug === 'conference-room' || s.slug === 'meeting-room' ? 'meeting-conference' : s.slug}`} onClick={() => setOpen(false)} className="block py-1 normal-case font-normal hover:text-primary">{s.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};