import { Link, Navigate } from "react-router-dom";
import { CheckCircle2, MapPin, Mail, Sparkles, ArrowRight, Users, ShieldCheck, Wifi, Coffee, Clock, Building2, Calendar, MessageCircle, Briefcase, Rocket, Globe } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { Amenities } from "@/components/site/Amenities";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { InlinePlans } from "@/components/site/InlinePlans";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { LocationsCoverage } from "@/components/site/LocationsCoverage";
import { ClientLogos } from "@/components/site/ClientLogos";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { pageRoutes, services, locations, SITE, placeLabel, nameLabel } from "@/data/locations";
import { getServicePageContent, PRICE_TAGLINE } from "@/data/universal-content";
import { RelatedMahapeLinks } from "@/components/site/RelatedMahapeLinks";
import { imageryFor } from "@/data/location-imagery";

interface Props {
  routePath: string;
}

const UniversalServiceTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;

  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const content = getServicePageContent(service, location);
  const heroImg = pick(0);
  const featureImg = pick(1);
  const tagline = PRICE_TAGLINE[service.slug];

  const title = `${service.label} in ${location.name} | ${SITE.name}`;
  const description = `Premium ${service.label.toLowerCase()} in ${nameLabel(location)}. ${service.intro.slice(0, 110)}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: service.label, item: `${SITE.domain}/${service.slug}-in-andheri-east` },
      { "@type": "ListItem", position: 3, name: `${service.label} in ${location.name}`, item: `${SITE.domain}${route.path}` },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.domain}${route.path}`,
    name: `${SITE.name} ${location.name}, ${service.label}`,
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

  const labelLower = service.label.toLowerCase();
  const faqItems = [
    {
      q: `What is the price of ${labelLower} in ${location.name}?`,
      a: `Our ${labelLower} in ${location.name} starts from ${tagline.amount} ${tagline.unit}. Pricing varies based on plan length, team size and add-ons. Tour the campus to get a custom quote.`,
    },
    {
      q: `What is included in the ${labelLower} at ${location.name}?`,
      a: `Every booking includes ${service.inclusions.join(", ")}, plus access to a vibrant member community across YesssWorks Mumbai & Navi Mumbai.`,
    },
    {
      q: `Is the ${labelLower} in ${location.name} suitable for my team?`,
      a: `Yes, our ${location.name} ${labelLower} is ideal for ${service.ideal.join(", ")}. Our team will help you find the right plan based on team size and growth plans.`,
    },
    {
      q: `What are the operating hours of YesssWorks ${location.name}?`,
      a: `Standard hours at our ${location.name} hub are 9 AM to 9 PM, Monday to Saturday. 24/7 access is available as a premium add-on for members who need to work after hours.`,
    },
    {
      q: `Is parking available at YesssWorks ${location.name}?`,
      a: `Yes, two-wheeler and four-wheeler parking is available at the ${location.area} campus on a first-come, first-served basis.`,
    },
    {
      q: `Can I get a GST invoice for my ${labelLower} in ${location.name}?`,
      a: `Absolutely. We provide proper GST invoices for every booking and add-on. We can also assist with GST registration and company incorporation at our ${location.name} address.`,
    },
    {
      q: `How do I book a tour of YesssWorks ${location.name}?`,
      a: `Use the enquiry form on this page or WhatsApp us, we'll set up a free 20-minute walkthrough at a time that works for you.`,
    },
  ];

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const relatedAtSameLocation = pageRoutes.filter((p) => p.location === route.location && p.service !== route.service).slice(0, 4);

  const quickFacts = [
    { icon: Wifi, label: "High-speed leased-line internet" },
    { icon: Clock, label: "24/7 access available" },
    { icon: Coffee, label: "Unlimited tea & coffee" },
    { icon: Building2, label: "Premium business address" },
    { icon: Calendar, label: "Flexible plans" },
    { icon: ShieldCheck, label: "CCTV + biometric access" },
  ];

  const audiences = [
    { icon: Briefcase, title: "Large Enterprises", text: `Branded private suites with SLAs, already trusted by JM Financial, HDFC ERGO and Roche at our ${location.name} hub.` },
    { icon: Globe, title: "Remote & Distributed Teams", text: `One booking, every YesssWorks hub across Mumbai & Navi Mumbai.` },
    { icon: Rocket, title: "Startups & Founders", text: `Plug-and-play ${labelLower} in ${location.name} so you can focus on shipping, not facility ops.` },
    { icon: Users, title: "Consultants", text: `Client-ready meeting rooms and reception support that wow every visitor.` },
    { icon: Sparkles, title: "Solopreneurs & Freelancers", text: `Quiet space, fast Wi-Fi and a community that helps you grow.` },
  ];

  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(location.address || `YesssWorks ${location.name}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={title}
        description={description}
        canonical={route.path}
        keywords={route.keywords}
        image={heroImg}
        jsonLd={[breadcrumb, localBusiness, faq]}
      />
      <Header />

      {/* Hero */}
      <section className="relative bg-sage overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
        <div className="absolute -bottom-20 right-1/2 h-64 w-64 rounded-full bg-primary-glow/15 blur-3xl animate-blob" style={{ animationDelay: "5s" }} aria-hidden />
        <div className="container relative grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="py-12 lg:py-20 lg:pr-12">
            <Reveal as="div" className="text-xs uppercase tracking-wider text-foreground/70 mb-4">
              <nav aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <span>{service.label}</span>
                <span className="mx-2">/</span>
                <span className="text-foreground font-semibold">{location.name}</span>
              </nav>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                {service.label} in <span className="text-primary">{location.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-3 text-sm uppercase tracking-widest text-primary font-bold">{content.heroEyebrow}</p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">{content.heroIntro}</p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-3 flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" /> {placeLabel(location)}
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookTourDialog
                  defaultLocation={route.location}
                  trigger={
                    <Button size="lg" className="shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">
                      Book a free tour <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  }
                />
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[520px]">
            <Reveal variant="scale" className="absolute inset-0">
              <img
                src={heroImg}
                alt={`${service.label} in ${location.name}, ${SITE.name}`}
                className="w-full h-full object-cover"
                width={1200}
                height={800}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur rounded-xl p-4 shadow-[var(--shadow-card)] border border-border">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting at</p>
                    <p className="text-xl font-extrabold text-foreground">{tagline.amount} <span className="text-xs font-medium text-muted-foreground">{tagline.unit}</span></p>
                  </div>
                  <Button asChild size="sm">
                    <a href="#plans">See plans</a>
                  </Button>
                </div>
              </div>
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

      <Stats rating={location.googleRating} />

      <ClientLogos />

      {/* Target audience */}
      <section className="py-12 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">{content.audienceEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.audienceHeading}</h2>
            <p className="mt-3 text-muted-foreground">{content.audienceIntro}</p>
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

      {/* Plans */}
      <div id="plans"><InlinePlans service={route.service} location={location.name} locationSlug={route.location} /></div>


      {/* Why this space */}
      <section className="py-12 md:py-16">
        <div className="container grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <p className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">{content.whyHereEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.whyHereHeading}</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{content.whyHereBody}</p>
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
              <h3 className="text-xl font-extrabold mt-2">See It for Yourself in {location.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Free 20-minute walkthrough, pick a time that works for you and we'll handle the rest.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <BookTourDialog
                  defaultLocation={route.location}
                  trigger={
                    <Button size="sm" className="shadow-[var(--shadow-elegant)]">
                      Book a free tour <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  }
                />
                <Button asChild size="sm" variant="outline">
                  <a href="#plans">See plans</a>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={200} className="rounded-2xl border border-border p-6 md:p-8 bg-card shadow-[var(--shadow-card)] hover-lift h-full">
              <MapPin className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-bold text-2xl mb-5">{content.neighbourhoodHeading}</h3>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {location.nearby.metro && location.nearby.metro.length > 0 && (
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Metro</p>
                    <div className="flex flex-wrap gap-2">
                      {location.nearby.metro.map((l) => (
                        <span key={l} className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                )}
                {location.nearby.train && location.nearby.train.length > 0 && (
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Train</p>
                    <div className="flex flex-wrap gap-2">
                      {location.nearby.train.map((l) => (
                        <span key={l} className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground/80 border border-border font-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                )}
                {location.nearby.airport && location.nearby.airport.length > 0 && (
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Airport</p>
                    <div className="flex flex-wrap gap-2">
                      {location.nearby.airport.map((l) => (
                        <span key={l} className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground/80 border border-border font-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                )}
                {location.nearby.restaurants && location.nearby.restaurants.length > 0 && (
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Restaurants & cafés</p>
                    <div className="flex flex-wrap gap-2">
                      {location.nearby.restaurants.map((l) => (
                        <span key={l} className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground/80 border border-border font-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                )}
                {location.nearby.malls && location.nearby.malls.length > 0 && (
                  <div>
                    <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">Malls & shopping</p>
                    <div className="flex flex-wrap gap-2">
                      {location.nearby.malls.map((l) => (
                        <span key={l} className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground/80 border border-border font-medium">{l}</span>
                      ))}
                    </div>
                  </div>
                )}
                {location.googleMapsUrl && (
                  <div className="sm:col-span-2 pt-1">
                    <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Open in Google Maps →
                    </a>
                  </div>
                )}
              </div>
              {(location.is24x7 || location.googleRating) && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-3 text-center">
                      <p className="text-lg md:text-xl font-extrabold text-primary leading-tight">{location.is24x7 ? "24 / 7" : location.hours || "9 to 9"}</p>
                      <p className="text-[11px] text-muted-foreground mt-1 font-medium">Access</p>
                    </div>
                    {location.googleRating && (
                      <div className="rounded-xl bg-primary/5 border border-primary/15 p-3 text-center">
                        <p className="text-lg md:text-xl font-extrabold text-primary leading-tight">★ {location.googleRating}</p>
                        <p className="text-[11px] text-muted-foreground mt-1 font-medium">{location.googleReviews}+ reviews</p>
                      </div>
                    )}
                    <div className="rounded-xl bg-primary/5 border border-primary/15 p-3 text-center">
                      <p className="text-lg md:text-xl font-extrabold text-primary leading-tight">{location.postalCode || ", "}</p>
                      <p className="text-[11px] text-muted-foreground mt-1 font-medium">Pin code</p>
                    </div>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      <Process />

      {/* Map embed */}
      <section className="py-12 bg-muted/40 overflow-hidden">
        <div className="container grid lg:grid-cols-3 gap-8 items-stretch">
          <Reveal className="lg:col-span-1">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Find us</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2">YesssWorks {location.name}</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{location.address}</p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24x7 access for members</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {placeLabel(location)}</p>
              {location.googleRating && (
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {location.googleRating}★ on Google ({location.googleReviews}+ reviews)</p>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {location.googleMapsUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                </Button>
              )}
              <BookTourDialog defaultLocation={route.location} trigger={<Button size="sm">Book a tour</Button>} />
            </div>
          </Reveal>
          <Reveal variant="scale" className="lg:col-span-2 w-full max-w-full min-w-0">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-[280px] sm:h-[360px] lg:h-full lg:min-h-[420px]">
              <iframe
                title={`Map of YesssWorks ${location.name}`}
                src={mapEmbed}
                className="absolute inset-0 w-full h-full block"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Gallery location={location.name} slug={location.slug} />

      <Amenities />

      {/* Local SEO content block */}
      <section className="py-12">
        <div className="container grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col">
            <Reveal>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">{service.label} • {location.name}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.seoHeading}</h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{content.seoBody}</p>
            </Reveal>
            <Reveal delay={120} className="mt-6 text-base text-muted-foreground leading-relaxed space-y-4">
              <p>
                Whether you are a freelancer, a fast-growing startup or a regional team setting up shop in {location.area}, finding the right
                {" "}<strong className="text-foreground">{route.primaryKeyword}</strong> can transform how your team works. At YesssWorks {location.name},
                we have engineered every detail of our {labelLower}, from ergonomic furniture and fibre-grade internet to a calm,
                focused atmosphere, so you can do your best work, every single day.
              </p>
              <p>
                Our {location.name} campus is moments away from {location.landmarks.slice(0, 3).join(", ")} and other key business hubs, making your
                daily commute and client meetings painless. Need to scale up? Explore our {" "}
                <Link to={`/coworking-space-in-${location.slug}`} className="text-primary font-semibold hover:underline">coworking space in {location.name}</Link>,
                {" "}
                <Link to={`/private-cabin-in-${location.slug}`} className="text-primary font-semibold hover:underline">private cabins</Link> or {" "}
                <Link to={location.slug === "mahape" || location.slug === "navi-mumbai" ? "/office-suites-in-mumbai" : `/office-suites-in-${location.slug}`} className="text-primary font-semibold hover:underline">office suites</Link>
                {" "}without the hassle of relocating.
              </p>
              <p>
                Every YesssWorks {location.name} booking comes with high-speed leased-line internet, power backup, unlimited tea and coffee, business-grade printing,
                concierge support and access to a thriving community of entrepreneurs across our {" "}
                <Link to="/coworking-space-in-andheri-east" className="text-primary font-semibold hover:underline">Andheri East</Link>,{" "}
                <Link to="/coworking-space-in-goregaon-east" className="text-primary font-semibold hover:underline">Goregaon East</Link> and {" "}
                <Link to="/coworking-space-in-mahape" className="text-primary font-semibold hover:underline">Mahape</Link> hubs.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] min-h-[320px] lg:min-h-full">
            <img src={featureImg} alt={`${service.label} at YesssWorks ${location.name}`} loading="lazy" className="w-full h-full object-cover" />
          </Reveal>
        </div>
      </section>

      <Testimonials location={location.name} />

      <LocationsCoverage currentLocation={location.slug} />

      <CTA
        title={content.closingCtaTitle}
        subtitle={content.closingCtaSubtitle}
        hash="#enquire"
      />

      {/* Related */}
      <section className="py-12">
        <div className="container">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Other workspaces in {location.name}</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2">Pick Your Ideal Space</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedAtSameLocation.map((r, i) => {
              const s = services[r.service];
              return (
                <Reveal key={r.path} delay={i * 80}>
                  <Link to={r.path} className="group block h-full rounded-xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover-lift">
                    <div className="aspect-video overflow-hidden">
                      <img src={s.image} alt={`${s.label} in ${location.name}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold">{s.label}</h3>
                      <p className="text-xs text-muted-foreground mt-1">in {location.name}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="enquire" className="py-12 bg-muted/40">
        <div className="container grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.enquireHeading}</h2>
            <p className="text-muted-foreground mt-3 max-w-md">{content.enquireIntro}</p>
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
              <a
                href={location.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address || `YesssWorks ${location.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                  <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </span>
                <span className="font-semibold">{placeLabel(location)}</span>
              </a>
            </div>
          </Reveal>
          <Reveal variant="scale" className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
            <ContactForm
              defaultLocation={route.location}
              defaultMessage={`Hi YesssWorks team, I'm interested in ${service.label} in ${location.name}.`}
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12">
        <div className="container max-w-3xl">
          <Reveal className="text-center">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.faqHeading}</h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqItems.map((q, i) => (
              <Reveal key={q.q} delay={i * 60}>
                <details className="rounded-xl border border-border bg-card p-5 group hover:border-primary/40 transition-colors open:shadow-[var(--shadow-card)]">
                  <summary className="font-semibold cursor-pointer flex justify-between items-center gap-4 list-none">
                    <span>{q.q}</span>
                    <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{q.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">Still have questions about {labelLower} in {location.name}?</p>
            <div className="mt-3 flex justify-center gap-3 flex-wrap">
              <BookTourDialog defaultLocation={route.location} trigger={<Button>Book a tour</Button>} />
              <Button asChild variant="outline"><a href="#enquire"><MessageCircle className="mr-2 h-4 w-4" /> Request callback</a></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedMahapeLinks currentPath={route.path} location={location} />

      <Footer />
    </div>
  );
};

export default UniversalServiceTemplate;