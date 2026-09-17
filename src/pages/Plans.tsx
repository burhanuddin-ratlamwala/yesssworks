import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Check, Sparkles, MapPin, Filter } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { services, locations, pricingPlans, SITE, buildingLocationSlugs, buildingPathSuffix, type ServiceSlug, type LocationSlug, placeLabel } from "@/data/locations";
import { FAQSection } from "@/components/site/FAQSection";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { OFFICE_OPTIONS, officeLabel } from "@/data/office-options";

const Plans = () => {
  const [params, setParams] = useSearchParams();
  const [service, setService] = useState<ServiceSlug | "all">((params.get("service") as ServiceSlug) || "all");
  const [location, setLocation] = useState<LocationSlug | "all">((params.get("location") as LocationSlug) || "all");

  const filtered = useMemo(() => {
    return Object.entries(pricingPlans)
      .filter(([s]) => service === "all" || s === service)
      .map(([s, plans]) => ({ service: s as ServiceSlug, plans }));
  }, [service]);

  const updateFilter = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value === "all") next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  const locName = location === "all" ? "All five offices" : `YesssWorks ${officeLabel(location)}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={`Pricing & Plans | ${SITE.name} Coworking Mumbai`}
        description="Transparent pricing for coworking, fixed desks, private cabins, meeting rooms and office suites across Mumbai & Navi Mumbai."
        canonical="/plans"
      />
      <Header />

      {/* Hero */}
      <section className="bg-sage py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
        <div className="container relative">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Pricing</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">Plans for every team & every location</h1>
            <p className="mt-4 text-foreground/80 max-w-2xl">From single-day passes to fully-managed office suites, pick a plan that fits your team. Pricing is indicative; final price depends on location & inclusions.</p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur border-b border-border py-4">
        <div className="container flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <Filter className="h-4 w-4" /> Filter
          </span>
          <select
            value={service}
            onChange={(e) => { setService(e.target.value as ServiceSlug | "all"); updateFilter("service", e.target.value); }}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="all">All services</option>
            {Object.values(services).map((s) => (
              <option key={s.slug} value={s.slug}>{s.label}</option>
            ))}
          </select>
          <select
            value={location}
            onChange={(e) => { setLocation(e.target.value as LocationSlug | "all"); updateFilter("location", e.target.value); }}
            className="rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="all">All five offices</option>
            {OFFICE_OPTIONS.map((office) => (
              <option key={office.slug} value={office.slug}>YesssWorks {office.label}</option>
            ))}
          </select>
          <span className="ml-auto text-xs text-muted-foreground hidden md:inline">Showing pricing for <strong className="text-foreground">{locName}</strong></span>
        </div>
      </section>

      {/* Plans grid */}
      <section className="py-14">
        <div className="container space-y-16">
          {filtered.map(({ service: s, plans }) => {
            const cfg = services[s];
            return (
              <div key={s}>
                <Reveal className="flex flex-wrap items-end justify-between gap-3 mb-6">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-primary uppercase">{cfg.category}</p>
                    <h2 className="text-2xl md:text-3xl font-extrabold mt-1">{cfg.label} {location !== "all" && `at YesssWorks ${officeLabel(location)}`}</h2>
                    <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{cfg.intro}</p>
                  </div>
                  {location !== "all" && (
                    <Link to={`/${s}-in-${location}`} className="text-sm font-semibold text-primary hover:underline">View page →</Link>
                  )}
                </Reveal>
                <div className="grid md:grid-cols-3 gap-5">
                  {plans.map((p, i) => (
                    <Reveal key={p.name} delay={i * 80} variant="scale"
                      className={`relative rounded-2xl border bg-card p-6 md:p-7 hover-lift ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}>
                      {p.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                          <Sparkles className="h-3 w-3" /> Most loved
                        </div>
                      )}
                      <h3 className="font-extrabold">{p.name}</h3>
                      <div className="mt-3 flex items-baseline gap-1">
                        {p.price > 0 ? (
                          <>
                            <span className="text-3xl font-extrabold">₹{p.price.toLocaleString("en-IN")}</span>
                            <span className="text-xs text-muted-foreground">{p.unit}</span>
                          </>
                        ) : (
                          <span className="text-2xl font-extrabold text-primary">{p.unit}</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">+ GST. Indicative pricing.</p>
                      <ul className="mt-5 space-y-2">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/85">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <BookTourDialog
                        defaultLocation={location === "all" ? undefined : location}
                        trigger={
                          <Button className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}>
                            Enquire now
                          </Button>
                        }
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-14 bg-muted/40">
        <div className="container">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Available across</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-1">All YesssWorks locations</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {buildingLocationSlugs.map((slug) => {
              const l = locations[slug];
              return (
              <Link
                key={slug}
                to={`/yesssworks-${buildingPathSuffix[slug]}`}
                className="group rounded-2xl border border-border bg-card p-5 hover-lift hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">YesssWorks {l.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{placeLabel(l)}</p>
                    <p className="text-xs text-foreground/70 mt-2">{l.hours}</p>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection
        items={[
          { q: "Are prices inclusive of GST?", a: "All prices are exclusive of 18% GST. We send a clear, itemised invoice for every plan." },
          { q: "Can I switch or upgrade my plan?", a: "Yes. You can scale up, switch services or move between locations without re-signing. Just talk to your community manager." },
          { q: "Is there a security deposit?", a: "A small refundable deposit applies to monthly+ commitments; day passes are pay-as-you-go." },
          { q: "Do plans include meeting room credits?", a: "Monthly, quarterly and annual plans include complimentary meeting room hours. Additional hours can be booked at member-only rates." },
          { q: "Can my whole team be on one plan?", a: "Yes. We offer team plans with a single invoice, admin dashboard and cross-location access for everyone on the team." },
        ]}
      />

      <CTA hash="#enquire" />

      <section id="enquire" className="py-16 bg-background">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold">Need a custom quote?</h2>
          <p className="mt-3 text-muted-foreground">Tell us your team size and preferred location. We'll send a tailored proposal within one business day.</p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Button asChild size="lg"><Link to="/contact">Get a custom quote</Link></Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plans;