import { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { ContactForm } from "@/components/site/ContactForm";
import { Stats } from "@/components/site/Stats";
import { ClientLogos } from "@/components/site/ClientLogos";
import { Amenities } from "@/components/site/Amenities";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { LocationsCoverage } from "@/components/site/LocationsCoverage";
import { PhotoStrip } from "@/components/site/PhotoStrip";
import { CTA } from "@/components/site/CTA";
import { Lightbox } from "@/components/site/Lightbox";
import {
  services, locations, ServiceSlug, SITE, pricingPlans,
  buildingLocationSlugs, buildingPathSuffix,
} from "@/data/locations";
import { topicTilesFor } from "@/data/location-imagery";
import { getLocationPricing, formatINR } from "@/data/pricing-workbook";
import {
  ArrowRight, CheckCircle2, MapPin, Phone, Mail, MessageCircle,
  Wifi, Clock, Coffee, Building2, Calendar, ShieldCheck,
  Briefcase, Globe, Rocket, Users, Sparkles, TrendingUp,
} from "lucide-react";

const URL_TO_SERVICE: Record<string, ServiceSlug> = {
  "fixed-desks": "fixed-desk",
  "private-cabins": "private-cabin",
  "meeting-conference": "conference-room",
  "office-suites": "office-suites",
  coworking: "coworking-space",
};

export const packageRoutes = Object.keys(URL_TO_SERVICE);

const PackagePage = () => {
  const { slug = "" } = useParams();
  const serviceSlug = URL_TO_SERVICE[slug];
  if (!serviceSlug) return <Navigate to="/" replace />;
  const service = services[serviceSlug];
  const plans = pricingPlans[serviceSlug] || [];

  const title = `${service.label} in Mumbai & Navi Mumbai | ${SITE.name}`;
  const description = `Premium ${service.label.toLowerCase()} across five YesssWorks hubs. ${service.intro.slice(0, 110)}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Packages", item: `${SITE.domain}/plans` },
      { "@type": "ListItem", position: 3, name: service.label, item: `${SITE.domain}/packages/${slug}` },
    ],
  };

  const quickFacts = [
    { icon: Wifi, label: "Leased-line internet" },
    { icon: Clock, label: "24/7 access available" },
    { icon: Coffee, label: "Unlimited tea & coffee" },
    { icon: Building2, label: "Premium business address" },
    { icon: Calendar, label: "Flexible commitments" },
    { icon: ShieldCheck, label: "CCTV + biometric access" },
  ];

  const audiences = [
    { icon: Briefcase, title: "Large Enterprises", text: `Branded ${service.label.toLowerCase()} with SLAs, trusted by JM Financial, HDFC ERGO & Roche.` },
    { icon: Globe, title: "Remote & Distributed Teams", text: `One membership, every YesssWorks hub across Mumbai & Navi Mumbai.` },
    { icon: Rocket, title: "Startups & Founders", text: `Plug-and-play ${service.label.toLowerCase()} so you focus on shipping, not facility ops.` },
    { icon: Users, title: "Consultants", text: `Client-ready meeting rooms and reception support that wow every visitor.` },
    { icon: Sparkles, title: "Solopreneurs & Freelancers", text: `Quiet, fast Wi-Fi and a community that helps you grow.` },
  ];

  const faqItems = [
    { q: `What is the typical price for ${service.label.toLowerCase()} at YesssWorks?`,
      a: `${service.label} starts from the entry plan shown above. Final pricing depends on hub, team size and commitment. Tour any campus for a custom quote.` },
    { q: `What is included in the ${service.label.toLowerCase()} plan?`,
      a: `Every plan includes ${service.inclusions.join(", ")}, plus access to a vibrant member community across YesssWorks Mumbai & Navi Mumbai.` },
    { q: `Is the ${service.label.toLowerCase()} suitable for my team?`,
      a: `Yes. Our ${service.label.toLowerCase()} is ideal for ${service.ideal.join(", ")}. Our team will help you pick the right plan based on team size and growth plans.` },
    { q: `Which YesssWorks locations offer ${service.label.toLowerCase()}?`,
      a: `All five hubs across Andheri, Goregaon and Mahape. Members on monthly+ plans get cross-location access.` },
    { q: `How quickly can I move in?`,
      a: `Most desks and cabins are move-in ready in 24 to 48 hours. Larger office suites can be customised and handed over in 2 to 3 weeks.` },
    { q: `Do you offer custom plans for larger teams?`,
      a: `Absolutely. Teams of 10+ get bespoke pricing, branded suites and dedicated SLAs. Use the enquiry form below to start the conversation.` },
    { q: `Can I get a GST invoice?`,
      a: `Yes, we provide proper GST invoices for every membership and add-on, and can assist with GST registration at our address.` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  // billing toggle
  const [cycle, setCycle] = useState<"monthly" | "quarterly" | "annual">("monthly");
  const discount = cycle === "monthly" ? 0 : cycle === "quarterly" ? 0.05 : 0.15;
  const cycledPlans = useMemo(
    () => plans.map((p) => ({ ...p, displayPrice: p.price > 0 ? Math.round((p.price * (1 - discount)) / 100) * 100 : 0 })),
    [plans, discount],
  );
  const entryPlan = plans.find((p) => p.highlight) || plans[0];
  const networkPhotos = topicTilesFor(serviceSlug, 8, "mumbai");
  const topicHero = topicTilesFor(serviceSlug, 3, "mumbai");
  const heroImage = topicHero[0]?.src ?? service.image;
  const secondaryImage = topicHero[1]?.src ?? heroImage;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={title}
        description={description}
        canonical={`/packages/${slug}`}
        keywords={[service.label.toLowerCase(), `${service.label.toLowerCase()} mumbai`, `${service.label.toLowerCase()} navi mumbai`]}
        image={service.image}
        jsonLd={[breadcrumb, faqSchema]}
      />
      <Header />

      {/* HERO — split with image + price card (mirrors coworking template) */}
      <section className="relative bg-sage overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-20 right-1/2 h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl animate-blob" style={{ animationDelay: "5s" }} aria-hidden />
        <div className="container relative grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="py-12 lg:py-20 lg:pr-12">
            <Reveal as="div" className="text-xs uppercase tracking-wider text-foreground/70 mb-4">
              <nav aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/plans" className="hover:text-primary">Packages</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground font-semibold">{service.label}</span>
              </nav>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                {service.label} <span className="text-primary">in Mumbai & Navi Mumbai</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-3 text-sm uppercase tracking-widest text-primary font-bold">{service.category}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">{service.intro}</p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-3 flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" /> 5 hubs across Andheri, Goregaon & Mahape
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookTourDialog trigger={<Button size="lg" className="shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">Book a free tour <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
                <Button asChild size="lg" variant="outline"><a href="#pricing">See pricing</a></Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href={`tel:${SITE.phoneTel}`} className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> {SITE.phone}</a>
                <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary"><Mail className="h-4 w-4 text-primary" /> {SITE.email}</a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[520px]">
            <Reveal variant="scale" className="absolute inset-0">
              <Lightbox src={heroImage} alt={`${service.label} at YesssWorks`} loading="eager" />
              {entryPlan && (
                <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur rounded-xl p-4 shadow-[var(--shadow-card)] border border-border">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="text-xl font-extrabold text-foreground">
                        {entryPlan.price > 0 ? `₹${entryPlan.price.toLocaleString("en-IN")}` : entryPlan.unit}{" "}
                        {entryPlan.price > 0 && <span className="text-xs font-medium text-muted-foreground">{entryPlan.unit}</span>}
                      </p>
                    </div>
                    <Button asChild size="sm"><a href="#pricing">See plans</a></Button>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="py-8 bg-background">
        <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickFacts.map((q, i) => (
            <Reveal key={q.label} delay={i * 60} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover-lift">
              <q.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-xs md:text-sm font-semibold text-foreground/80">{q.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />

      <ClientLogos />

      {/* Audiences */}
      <section className="py-12 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Made for</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Designed for how real teams work</h2>
            <p className="mt-3 text-muted-foreground">From solo founders to 50-person teams, {service.label.toLowerCase()} at YesssWorks scales with you.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-4">
                  <a.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">{a.title}</h3>
                <p className="text-base text-muted-foreground mt-2 leading-relaxed">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING — interactive toggle, compact 3-col like coworking */}
      <section id="pricing" className="py-12 md:py-16 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Pick a plan, scale anytime</h2>
            <p className="mt-3 text-muted-foreground">GST extra. Switch commitments without re-signing.</p>
          </Reveal>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex bg-card border border-border rounded-full p-1 shadow-sm">
              {(["monthly", "quarterly", "annual"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`text-xs md:text-sm font-bold uppercase tracking-wider px-4 md:px-5 py-2 rounded-full transition-all ${cycle === c ? "bg-primary text-primary-foreground shadow" : "text-foreground/70 hover:text-primary"}`}
                >
                  {c}
                  {c === "annual" && (
                    <span className={`ml-1.5 text-[10px] rounded-full px-1.5 py-0.5 normal-case font-bold ${cycle === "annual" ? "bg-primary-foreground text-primary" : "bg-primary/15 text-primary"}`}>
                      Save 15%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {cycledPlans.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className={`relative rounded-2xl border-2 p-5 md:p-6 h-full flex flex-col bg-card transition-all duration-300 ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)] lg:-translate-y-2" : "border-border hover:border-primary/40 hover:-translate-y-1"}`}>
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md inline-flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> Most popular
                    </span>
                  )}
                  <h3 className={`text-lg font-extrabold ${p.highlight ? "text-primary" : ""}`}>{p.name}</h3>
                  <div className="mt-3 flex items-end gap-1 flex-wrap">
                    {p.price > 0 ? (
                      <>
                        <span className="text-2xl md:text-3xl font-extrabold">₹{p.displayPrice.toLocaleString("en-IN")}</span>
                        <span className="text-xs text-muted-foreground mb-1">{p.unit}</span>
                      </>
                    ) : (
                      <span className="text-xl font-extrabold text-primary">{p.unit}</span>
                    )}
                  </div>
                  {discount > 0 && p.price > 0 && (
                    <p className="text-[11px] text-primary font-semibold mt-1">You save ₹{(p.price - p.displayPrice).toLocaleString("en-IN")} vs monthly</p>
                  )}
                  <div className="my-4 h-px bg-border" />
                  <ul className="space-y-2 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <BookTourDialog trigger={<Button className="mt-5 w-full" variant={p.highlight ? "default" : "outline"}>Get this plan</Button>} />
                </div>
              </Reveal>
            ))}
          </div>

          <p className="text-center text-xs md:text-sm text-muted-foreground mt-8">
            Need a custom plan for a 10+ person team? <a href="#enquire" className="text-primary font-bold hover:underline">Talk to sales →</a>
          </p>
        </div>
      </section>

      {/* PER-LOCATION PRICING COMPARISON — real workbook numbers */}
      <section className="py-12 md:py-16">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Compare by hub</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{service.label} pricing across our 5 hubs</h2>
            <p className="mt-3 text-muted-foreground">Honest, building-by-building rates. All prices include 18% GST. Click any hub to see the full pricing page.</p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-foreground/80">
                <tr>
                  <th className="text-left p-3 font-bold">Hub</th>
                  <th className="text-left p-3 font-bold">Day Pass</th>
                  <th className="text-left p-3 font-bold">Fixed Desk / month</th>
                  <th className="text-left p-3 font-bold">2-Seater Cabin / month</th>
                  <th className="text-left p-3 font-bold">Meeting Room (6-seat)</th>
                  <th className="p-3" />
                </tr>
              </thead>
              <tbody>
                {buildingLocationSlugs.map((s) => {
                  const l = locations[s];
                  const lp = getLocationPricing(s);
                  const cabin2 = lp.cabins.find((c) => c.seats === 2)!;
                  const mr6 = lp.meetingRooms.find((m) => m.seats === 6)!;
                  return (
                    <tr key={s} className="border-t border-border hover:bg-muted/30">
                      <td className="p-3 font-bold">
                        <Link to={`/yesssworks-${buildingPathSuffix[s]}`} className="hover:text-primary">{l.name}</Link>
                      </td>
                      <td className="p-3">{formatINR(lp.dayPass.priceInclGst)}</td>
                      <td className="p-3 font-bold text-primary">{formatINR(lp.fixedDesk.monthlyInclGst)}</td>
                      <td className="p-3">{formatINR(cabin2.totalInclGst)}</td>
                      <td className="p-3">{formatINR(mr6.hourlyInclGst)} / hr</td>
                      <td className="p-3 text-right">
                        <Button asChild size="sm" variant="outline">
                          <Link to={`/yesssworks-${buildingPathSuffix[s]}`}>View hub</Link>
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Cabin pricing scales linearly at {formatINR(9000)} + GST per seat per month, from 2 seats up to 40 seats.</p>
        </div>
      </section>


      {/* Why this package - split image + features */}
      <section className="py-12 md:py-16">
        <div className="container grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <p className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">Why teams pick this</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Everything you need, none of the noise</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              {service.label} at YesssWorks is engineered around how real teams work in Mumbai. From fibre-grade
              internet to ergonomic furniture and a calm, focused atmosphere — we sweat the details so you can ship.
            </p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Ready when you are</p>
              <h3 className="text-xl font-extrabold mt-2">See it for yourself</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Free 20-minute walkthrough at any YesssWorks hub. Pick a time and we'll handle the rest.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <BookTourDialog trigger={<Button size="sm" className="shadow-[var(--shadow-elegant)]">Book a free tour <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
                <Button asChild size="sm" variant="outline"><a href="#pricing">See plans</a></Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} variant="scale" className="lg:col-span-7 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] min-h-[320px] lg:min-h-[520px]">
            <Lightbox src={secondaryImage} alt={`${service.label} workspace at YesssWorks`} />
          </Reveal>
        </div>
      </section>

      <Process />

      {/* Available at — 5 hubs */}
      <section id="locations" className="py-12 md:py-16 container">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Available at</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Five hubs across Mumbai & Navi Mumbai</h2>
          <p className="mt-3 text-muted-foreground">Pick the one closest to home, or take the cross-location pass and switch as you please.</p>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {buildingLocationSlugs.map((s, i) => {
            const l = locations[s];
            const hubPhotos = topicTilesFor(serviceSlug, 6, s, l.name, l.address);
            const hubImage = hubPhotos[i % hubPhotos.length]?.src;
            return (
              <Reveal key={s} delay={i * 70}>
                <Link
                  to={`/yesssworks-${buildingPathSuffix[s]}`}
                  className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img src={hubImage} alt={`YesssWorks ${l.name}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-xs uppercase tracking-wider opacity-90 flex items-center gap-1"><MapPin className="h-3 w-3" /> {l.area}</div>
                      <div className="text-lg font-extrabold leading-tight">YesssWorks {l.name}</div>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {l.is24x7 ? "24x7 access" : l.hours}</span>
                    <span className="text-sm font-bold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Explore <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <PhotoStrip
        tiles={networkPhotos}
        place="YesssWorks Mumbai and Navi Mumbai"
        eyebrow="Real spaces, real photographs"
        heading={`${service.label} across our five offices`}
        blurb="Every photograph here was taken inside a YesssWorks office. Open any image to see the workspace at full size."
        columns={4}
      />

      <Amenities />

      <Testimonials location="YesssWorks" />

      <LocationsCoverage />

      <CTA title="Walk in. Look around. Then decide." subtitle="Free tours of every YesssWorks hub. No commitment, no hard sell." hash="#enquire" />

      {/* Enquire */}
      <section id="enquire" className="py-12 bg-muted/40">
        <div className="container grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Tell us about your team</h2>
            <p className="text-muted-foreground mt-3 max-w-md">Share a few details and our team will recommend the right {service.label.toLowerCase()} plan within a day.</p>
            <div className="mt-8 space-y-4">
              <a href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                  <MessageCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </span>
                <span className="font-semibold">WhatsApp us</span>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </span>
                <span className="font-semibold">{SITE.email}</span>
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </span>
                <span className="font-semibold">{SITE.phone}</span>
              </a>
            </div>
          </Reveal>
          <Reveal variant="scale" className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
            <ContactForm defaultMessage={`Hi YesssWorks team, I'm interested in ${service.label}.`} />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="container max-w-3xl">
          <Reveal className="text-center">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Questions, answered</h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="mt-10 w-full">
              {faqItems.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-bold text-base hover:no-underline hover:text-primary py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PackagePage;
