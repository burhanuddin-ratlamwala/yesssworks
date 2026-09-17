import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, MapPin, Palette, ShieldCheck, Sparkles, Wallet, Wrench } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { ClientLogos } from "@/components/site/ClientLogos";
import { SEO } from "@/components/SEO";
import { pageRoutes, services, locations, SITE, pricingPlans, placeLabel } from "@/data/locations";
import { ServicePageShell } from "./ServicePageShell";
import { getServiceLocationContent } from "@/data/service-location-content";
import { RelatedMahapeLinks } from "@/components/site/RelatedMahapeLinks";
import { LocationExtras } from "@/components/site/LocationExtras";
import mhEverest from "@/assets/mahape/mahape-everest-workfloor.webp";
import mhLargeWorkfloor from "@/assets/mahape/mahape-large-workfloor.webp";
import mhBranded from "@/assets/mahape/mahape-branded-corridor.webp";
import { imageryFor } from "@/data/location-imagery";

interface Props { routePath: string; }

const OfficeSuitesTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const isMahape = location.slug === "mahape";
  const heroImg = isMahape ? mhEverest : pick(0);
  const plans = pricingPlans["office-suites"];
  const content = getServiceLocationContent(route.service, route.location, service.label, location.name);

  const sizes = [
    { label: "10–25 seats", title: "Compact suite", text: "Sales pods, regional offices and BPO units." },
    { label: "26–50 seats", title: "Department suite", text: "Engineering, support or back-office team floors." },
    { label: "51–100 seats", title: "Branded HQ", text: "Mid-market headquarters with reception, cabins and meeting rooms." },
    { label: "100+ seats", title: "Custom build-out", text: "Designed and delivered to enterprise SLAs." },
  ];

  const inclusions = [
    { icon: Palette, title: "Custom branding", text: "Your name on the door, your colours on the walls." },
    { icon: Wrench, title: "Fit-out & furniture", text: "Layout designed around your team, desks, cabins, meeting rooms." },
    { icon: ShieldCheck, title: "Compliance & security", text: "CCTV, biometric access, ISO-aligned operations and NDA-ready." },
    { icon: Wallet, title: "All-inclusive billing", text: "One invoice, rent, utilities, housekeeping, security, support." },
  ];

  const billing = ["Rent & maintenance", "Electricity & water", "Air-conditioning", "Housekeeping", "Pantry consumables", "Manned security", "IT & internet", "Power backup"];

  const faqItems = [
    { q: `What is the price of office suites in ${location.name}?`, a: `Office suites in ${location.name} start at ₹99,999/month for a 10-seater. 20-seaters from ₹1.89L. 30+ seats are quoted on request, share headcount, build-out preferences and term length and we'll send a proposal in 48 hours.` },
    { q: `Can we customise the layout and branding?`, a: `Yes, we design suites around your team. Choose layout (cabins, open desks, meeting rooms), branding (signage, wall colours, logo wall) and even a separate reception.` },
    { q: `What's the minimum lock-in?`, a: `Office suites are typically committed for 12 months. Shorter terms (3 or 6 months) are available at a premium for satellite teams and project-based deployments.` },
    { q: `Is the price truly all-inclusive?`, a: `Yes, one monthly invoice covers rent, electricity, air-conditioning, housekeeping, security, IT and pantry. Only catered food and bespoke add-ons are billed separately.` },
    { q: `Can we get a registered office at this address?`, a: `Yes, you can register your company and GST at our ${location.name} address. We provide all NOCs, agreements and documentation.` },
    { q: `Do you support enterprises with compliance audits?`, a: `Absolutely. We've supported audits for clients like JM Financial, HDFC ERGO and Roche, including IT-isolation, secure floor access and compliance reports.` },
  ];

  const title = `Office Suites in ${location.name}, Private Branded Offices | ${SITE.name}`;
  const description = `Private, fully-furnished office suites in ${location.name} for teams of 10 to 100+. Branded, all-inclusive, enterprise-grade. Trusted by JM Financial, HDFC ERGO and Roche.`;

  return (
    <ServicePageShell
      location={location}
      locationSlug={route.location}
      service={service}
      enquireHeading={`Plan your office suite in ${location.name}`}
      enquireIntro={`Share your headcount, term and ideal move-in date, we'll send a custom suite proposal in 48 hours.`}
      faqHeading={`Office suites in ${location.name}, answered`}
      faqItems={faqItems}
      defaultMessage={`Hi YesssWorks team, we're evaluating office suites in ${location.name}.`}
    >
      <SEO title={title} description={description} canonical={route.path} keywords={route.keywords} image={heroImg} />

      {/* Enterprise hero */}
      <section className="relative bg-ink text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25"><img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden /></div>
        <div className="relative container py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal className="text-xs uppercase tracking-wider mb-4 opacity-80"><nav><Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span>Office Suites</span><span className="mx-2">/</span><span className="font-semibold">{location.name}</span></nav></Reveal>
            <Reveal delay={80}><span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold"><Building2 className="h-3.5 w-3.5" /> Enterprise-grade workspaces</span></Reveal>
            <Reveal delay={140}><h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Office Suites in <span className="text-primary">{location.name}</span></h1></Reveal>
            <Reveal delay={200}><p className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">{content.heroEyebrow}</p><p className="mt-3 text-base lg:text-lg max-w-xl opacity-90">{content.heroIntro}</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg">Book a private tour <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
                <Button asChild size="lg" variant="outline" className="bg-background text-foreground"><a href="#sizes">See suite sizes</a></Button>
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale" className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elegant)]">
            <img src={isMahape ? mhBranded : pick(1)} alt="" className="w-full aspect-[4/3] object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Trusted by */}
      <ClientLogos />

      {/* Why this location */}
      <section className="py-14 bg-background">
        <div className="container max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Why {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.whyHereTitle}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{content.whyHereBody}</p>
            <p className="mt-3 text-sm text-foreground/80"><span className="font-bold text-primary">Around you:</span> {content.neighbourhoodPitch}</p>
          </Reveal>
        </div>
      </section>

      {/* Suite sizes */}
      <section id="sizes" className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Suite sizes</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">From 10 seats to 100+</h2><p className="mt-3 text-muted-foreground">Pick a footprint, we deliver the suite, fitted, branded, ready.</p></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sizes.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="rounded-2xl border-2 border-border bg-card p-6 hover-lift">
                <p className="text-xs font-bold tracking-widest text-primary uppercase">{s.label}</p>
                <h3 className="font-extrabold text-xl mt-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Branding & fit-out showcase */}
      <section className="py-14 bg-muted/40">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <Reveal variant="scale" className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]"><img src={isMahape ? mhLargeWorkfloor : pick(2)} alt={`Branded office suite at YesssWorks ${location.name}`} className="w-full aspect-[4/3] object-cover" /></Reveal>
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">What's included</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Branded, fitted, fully managed</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {inclusions.map((u) => (
                <div key={u.title} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-2"><u.icon className="h-5 w-5 text-primary" /><h3 className="font-bold">{u.title}</h3></div>
                  <p className="text-sm text-muted-foreground mt-2 leading-snug">{u.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* All-inclusive billing breakdown */}
      <section className="py-14 bg-background">
        <div className="container max-w-4xl">
          <Reveal><p className="text-xs font-bold tracking-widest text-primary uppercase">One invoice. Zero surprises.</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">What an all-inclusive bill actually includes</h2></Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {billing.map((b) => (
              <div key={b} className="flex items-center gap-2 rounded-xl border border-border bg-card p-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /><span className="text-sm font-semibold">{b}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Indicative pricing</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Suite pricing in {location.name}</h2><p className="mt-3 text-muted-foreground">Final pricing depends on layout, branding and term. Talk to us for a custom proposal.</p></Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 p-6 bg-card flex flex-col ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}>
                <h3 className="font-extrabold text-xl">{p.name}</h3>
                {p.price > 0 ? <p className="mt-3"><span className="text-3xl font-extrabold">₹{p.price.toLocaleString()}</span> <span className="text-sm text-muted-foreground">{p.unit}</span></p> : <p className="mt-3 text-2xl font-extrabold text-primary">{p.unit}</p>}
                <ul className="mt-5 space-y-2 flex-1">{p.features.map((f) => (<li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>))}</ul>
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}><a href="#enquire">Get a proposal <Sparkles className="ml-1 h-4 w-4" /></a></Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-2"><MapPin className="h-3.5 w-3.5" /> {location.address ?? placeLabel(location)}</p>
        </div>
      </section>

      <LocationExtras location={location} locationSlug={route.location} />
      <RelatedMahapeLinks currentPath={route.path} location={location} />
    </ServicePageShell>
  );
};

export default OfficeSuitesTemplate;
