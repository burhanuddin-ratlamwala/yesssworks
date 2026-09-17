import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle2, FileText, Mail, MapPin, ShieldCheck, Sparkles, Stamp } from "lucide-react";
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
import mhBranded from "@/assets/mahape/mahape-branded-corridor.webp";
import { imageryFor } from "@/data/location-imagery";

interface Props { routePath: string; }

const VirtualOfficeTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const isMahape = location.slug === "mahape";
  const heroImg = isMahape ? mhBranded : pick(0);
  const plans = pricingPlans["virtual-office"];
  const content = getServiceLocationContent(route.service, route.location, service.label, location.name);

  const useCases = [
    { icon: FileText, title: "GST Registration", text: "A verified business address with rent agreement and NOC, exactly what GST officers ask for during verification." },
    { icon: Stamp, title: "Company Incorporation", text: "Register your Pvt Ltd, LLP or partnership at our address, with MCA-ready documentation." },
    { icon: Mail, title: "Mail Handling", text: "We receive your couriers and business mail, then notify you and forward it every month." },
    { icon: ShieldCheck, title: "Bank & Vendor Verification", text: "A real, staffed address that holds up when banks or vendors send someone to verify it." },
  ];

  const included = [
    "Registered business address on your letterhead and website",
    "Rent agreement and No Objection Certificate (NOC)",
    "Utility bill copy for address proof",
    "Courier and mail receiving with monthly forwarding",
    "Discounted day passes and meeting room hours",
    "Dedicated support through GST and MCA filing",
  ];

  const steps = [
    { step: "1", title: "Pick your plan", text: "Choose Mail Handling, GST Registration or Business Address + Company Registration." },
    { step: "2", title: "Share your documents", text: "Send your PAN, ID proof and company details, we prepare the agreement and NOC." },
    { step: "3", title: "Get your address kit", text: "Receive signed documents within 24-48 hours, ready to file with GST or the MCA." },
    { step: "4", title: "We handle the mail", text: "Every courier and letter that arrives gets logged and forwarded to you monthly." },
  ];

  const faqItems = [
    { q: `What is the price of a virtual office in ${location.name}?`, a: `Virtual office plans in ${location.name} start at ₹999/month + GST for Mail Handling. GST Registration is ₹1,499/month + GST, and Business Address + Company Registration is ₹1,999/month + GST.` },
    { q: `Can I register my GST number at this address?`, a: `Yes. Our GST Registration and Business Address + Company Registration plans include a rent agreement and NOC that satisfy GST officer verification at our ${location.name} address.` },
    { q: `Can I incorporate my company or LLP here?`, a: `Yes, the Business Address + Company Registration plan includes MCA-ready documentation so you can incorporate your Pvt Ltd, LLP or partnership at our ${location.name} address.` },
    { q: `How does mail handling actually work?`, a: `Any courier or letter addressed to your business is received at our front desk, logged and photographed, and either forwarded to you monthly or scanned and emailed on request.` },
    { q: `Do I get any physical workspace access with a virtual office?`, a: `Yes, every virtual office plan includes discounted day passes and meeting room hours at our ${location.name} campus whenever you do need to work from here or meet a client.` },
    { q: `How long does it take to get the address documents?`, a: `Most rent agreements and NOCs are ready within 24 to 48 hours of receiving your KYC documents, well within GST and MCA filing timelines.` },
  ];

  const title = `Virtual Office in ${location.name}, GST & Company Registration | ${SITE.name}`;
  const description = `Virtual office address in ${location.name} for GST registration, company incorporation and mail handling. Plans from ₹999/month + GST at ${SITE.name}.`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}${route.path}`,
    name: `${SITE.name} ${location.name}, Virtual Office`,
    image: heroImg,
    url: `${SITE.domain}${route.path}`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.area,
      addressRegion: location.region,
      addressCountry: "IN",
      postalCode: location.postalCode,
    },
    areaServed: location.name,
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <ServicePageShell
      location={location}
      locationSlug={route.location}
      service={service}
      enquireHeading={`Set up your virtual office in ${location.name}`}
      enquireIntro={`Tell us whether you need GST registration, company incorporation or just mail handling, we'll get your documents ready within 48 hours.`}
      faqHeading={`Virtual office in ${location.name}, answered`}
      faqItems={faqItems}
      defaultMessage={`Hi YesssWorks team, I'm interested in a virtual office in ${location.name}.`}
    >
      <SEO title={title} description={description} canonical={route.path} keywords={route.keywords} image={heroImg} jsonLd={[localBusiness, faqLd]} />

      {/* Hero */}
      <section className="relative bg-ink text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-25"><img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden /></div>
        <div className="relative container py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal className="text-xs uppercase tracking-wider mb-4 opacity-80"><nav><Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span>Virtual Office</span><span className="mx-2">/</span><span className="font-semibold">{location.name}</span></nav></Reveal>
            <Reveal delay={80}><span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold"><Building2 className="h-3.5 w-3.5" /> Business address, GST & company registration</span></Reveal>
            <Reveal delay={140}><h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Virtual Office in <span className="text-primary">{location.name}</span></h1></Reveal>
            <Reveal delay={200}><p className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">{content.heroEyebrow}</p><p className="mt-3 text-base lg:text-lg max-w-xl opacity-90">{content.heroIntro}</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg">Get my address kit <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
                <Button asChild size="lg" variant="outline" className="bg-background text-foreground"><a href="#pricing">See pricing</a></Button>
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale" className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elegant)]">
            <img src={heroImg} alt={`Virtual office address at YesssWorks ${location.name}`} className="w-full aspect-[4/3] object-cover" />
          </Reveal>
        </div>
      </section>

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

      {/* Use cases */}
      <section className="py-14 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">What it's for</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">One address, several uses</h2><p className="mt-3 text-muted-foreground">Whether you're registering for the first time or moving your address, we've got the paperwork covered.</p></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 70} className="rounded-2xl border-2 border-border bg-card p-6 hover-lift">
                <u.icon className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-extrabold text-lg">{u.title}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">How it works</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">From sign-up to filing, in four steps</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-card p-6">
                <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-extrabold">{s.step}</span>
                <h3 className="font-bold mt-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 bg-muted/40">
        <div className="container max-w-4xl">
          <Reveal><p className="text-xs font-bold tracking-widest text-primary uppercase">Every plan includes</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Everything you need for a clean registration</h2></Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {included.map((b) => (
              <div key={b} className="flex items-center gap-2 rounded-xl border border-border bg-card p-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /><span className="text-sm font-semibold">{b}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Simple pricing</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Virtual office pricing in {location.name}</h2><p className="mt-3 text-muted-foreground">Pick the plan that matches what you actually need to file.</p></Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 p-6 bg-card flex flex-col ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}>
                <h3 className="font-extrabold text-xl">{p.name}</h3>
                <p className="mt-3"><span className="text-3xl font-extrabold">₹{p.price.toLocaleString()}</span> <span className="text-sm text-muted-foreground">{p.unit}</span></p>
                <ul className="mt-5 space-y-2 flex-1">{p.features.map((f) => (<li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>))}</ul>
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}><a href="#enquire">Get started <Sparkles className="ml-1 h-4 w-4" /></a></Button>
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

export default VirtualOfficeTemplate;
