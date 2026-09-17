import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, MapPin, Building2, Images, Newspaper, Phone } from "lucide-react";
import { locations, buildingLocationSlugs, buildingPathSuffix, placeLabel } from "@/data/locations";

type Suggestion = { label: string; to: string; hint?: string };

const quickLinks: Suggestion[] = [
  { label: "Home", to: "/", hint: "Start fresh" },
  { label: "About YesssWorks", to: "/about", hint: "Who we are" },
  { label: "Plans & Pricing", to: "/plans", hint: "Desks, cabins, suites" },
  { label: "Gallery", to: "/gallery", hint: "See the spaces" },
  { label: "YesssBoard", to: "/yesssboard", hint: "Guides & articles" },
  { label: "Contact us", to: "/contact", hint: "Talk to our team" },
];

const packageLinks: Suggestion[] = [
  { label: "Fixed Desks", to: "/packages/fixed-desks" },
  { label: "Private Cabins", to: "/packages/private-cabins" },
  { label: "Meeting & Conference", to: "/packages/meeting-conference" },
  { label: "Office Suites", to: "/packages/office-suites" },
];

const NotFound = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const hubLinks: Suggestion[] = useMemo(
    () =>
      buildingLocationSlugs.map((s) => ({
        label: `YesssWorks ${locations[s].name}`,
        to: `/yesssworks-${buildingPathSuffix[s]}`,
        hint: placeLabel(locations[s]),
      })),
    [],
  );

  const all = useMemo(() => [...quickLinks, ...packageLinks, ...hubLinks], [hubLinks]);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return all.filter((l) => l.label.toLowerCase().includes(q) || (l.hint ?? "").toLowerCase().includes(q)).slice(0, 6);
  }, [query, all]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Page Not Available | YesssWorks"
        description="The page you were looking for is not available. Browse YesssWorks coworking hubs, plans and galleries instead."
        noindex
      />
      <Header />

      <section className="relative bg-sage py-14 lg:py-20 overflow-hidden">
        <div className="absolute -top-16 -left-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-20 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" aria-hidden />
        <div className="container relative max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wide">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Wrong turn
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-tight">
              This page isn't <span className="text-gradient-primary">available</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-foreground/80">
              The link may have moved, or the address has a small typo. Nothing is broken, let's get you to the right desk.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-2 text-xs text-muted-foreground break-all">You tried: {pathname}</p>
          </Reveal>

          <Reveal delay={260}>
            <form
              className="mt-7 mx-auto flex max-w-xl flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (results[0]) navigate(results[0].to);
              }}
            >
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search: Mahape, fixed desk, gallery, pricing..."
                  aria-label="Search YesssWorks pages"
                  className="pl-9 bg-card"
                />
              </div>
              <Button type="submit" className="sm:w-auto">
                Find it <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          </Reveal>

          {results.length > 0 && (
            <div className="mt-4 mx-auto max-w-xl rounded-2xl border border-border bg-card p-2 text-left shadow-[var(--shadow-card)]">
              {results.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 hover:bg-primary/10 transition-colors"
                >
                  <span className="font-medium">{r.label}</span>
                  <span className="text-xs text-muted-foreground">{r.hint ?? r.to}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Popular places to go next</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickLinks.map((l, i) => (
            <Reveal key={l.to} delay={i * 60}>
              <Link
                to={l.to}
                className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] hover-lift"
              >
                <span className="rounded-xl bg-primary/10 p-2.5 text-primary">
                  {l.to === "/gallery" ? <Images className="h-5 w-5" /> : l.to === "/yesssboard" ? <Newspaper className="h-5 w-5" /> : l.to === "/contact" ? <Phone className="h-5 w-5" /> : <Building2 className="h-5 w-5" />}
                </span>
                <span>
                  <span className="block font-semibold group-hover:text-primary transition-colors">{l.label}</span>
                  <span className="block text-sm text-muted-foreground">{l.hint}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-14 text-xl md:text-2xl font-bold text-center">Or jump straight to a hub</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {hubLinks.map((h) => (
            <Link
              key={h.to}
              to={h.to}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {h.label}
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-sage p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold">Still can't find what you need?</h3>
          <p className="mt-2 text-foreground/80">Our team will point you to the right space in a minute.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button asChild><Link to="/contact">Talk to us</Link></Button>
            <Button asChild variant="outline"><Link to="/plans">See all plans</Link></Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
