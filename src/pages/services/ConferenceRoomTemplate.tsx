import { Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Mic, Monitor, Users, Utensils, Calendar, Sparkles, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { SEO } from "@/components/SEO";
import { pageRoutes, services, locations, SITE, pricingPlans, placeLabel } from "@/data/locations";
import { ServicePageShell } from "./ServicePageShell";
import { getServiceLocationContent } from "@/data/service-location-content";
import mhConference from "@/assets/mahape/mahape-conference-room.webp";
import mhBoardroom from "@/assets/mahape/mahape-boardroom.webp";
import { imageryFor } from "@/data/location-imagery";

interface Props { routePath: string; }

const ConferenceRoomTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const isMahape = location.slug === "mahape";
  const heroImg = isMahape ? mhConference : pick(0);
  const plans = pricingPlans["conference-room"];
  const content = getServiceLocationContent(route.service, route.location, service.label, location.name);

  const setups = [
    { title: "Boardroom", capacity: "12–20", text: "Classic U-shape table for executive meetings and board sessions." },
    { title: "Theatre", capacity: "30–50", text: "Rows of chairs facing the stage, ideal for product launches and keynotes." },
    { title: "Classroom", capacity: "20–30", text: "Desks and chairs facing the front, best for training programs." },
    { title: "U-Shape", capacity: "16–24", text: "Open-ended layout for workshops and group discussions." },
  ];

  const techStack = [
    { icon: Monitor, label: "4K display, dual-screen option" },
    { icon: Mic, label: "Conference mic array + ceiling speakers" },
    { icon: Sparkles, label: "VC bridge, Zoom, Meet, Teams" },
    { icon: Utensils, label: "On-site catering & barista coffee" },
  ];

  const useCases = [
    "Board meetings & investor updates",
    "All-hands & town halls",
    "Product launches & press briefings",
    "Training programs & certifications",
    "Strategy off-sites & leadership reviews",
    "Vendor and partner presentations",
  ];

  const faqItems = [
    { q: `What is the price of a conference room in ${location.name}?`, a: `Conference rooms in ${location.name} start at ₹1,499/hour. Half-day (4 hrs) is ₹5,999 and full-day (8 hrs) is ₹9,999. Catering, mic packs and special seating layouts are billed separately.` },
    { q: `What's the maximum capacity?`, a: `Our largest conference room in ${location.name} accommodates up to 50 people in theatre style, or 20 in boardroom layout. Need more? We can connect adjoining rooms or use the rooftop for hybrid events.` },
    { q: `Can you arrange catering and refreshments?`, a: `Yes, we partner with on-site cafés to handle everything from coffee carts to plated lunches. Share your menu 48 hours in advance.` },
    { q: `Is professional VC equipment included?`, a: `Yes, every conference room ships with a 4K display, ceiling mic array, dual-camera setup and pre-installed Zoom Rooms / Google Meet hardware.` },
    { q: `Can we change the seating layout?`, a: `Absolutely. Tell us boardroom, U-shape, theatre or classroom, our team sets it up before you arrive.` },
    { q: `Do you provide a host or coordinator?`, a: `For premium bookings, we assign an event coordinator who handles guest reception, AV checks and on-the-day logistics.` },
  ];

  const title = `Conference Room in ${location.name}, Boardroom & Event Space | ${SITE.name}`;
  const description = `Premium conference rooms in ${location.name} from ₹1,499/hr. Boardroom, theatre and U-shape setups. 4K display, VC-ready, catering on request.`;

  return (
    <ServicePageShell
      location={location}
      locationSlug={route.location}
      service={service}
      enquireHeading={`Reserve a conference room in ${location.name}`}
      enquireIntro={`Tell us your event date, format and headcount, we'll send back a custom plan within the hour.`}
      faqHeading={`Conference rooms in ${location.name}, answered`}
      faqItems={faqItems}
      defaultMessage={`Hi YesssWorks team, I'd like to reserve a conference room in ${location.name}.`}
    >
      <SEO title={title} description={description} canonical={route.path} keywords={route.keywords} image={heroImg} />

      {/* Hero, events / boardroom-led */}
      <section className="relative bg-ink text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden />
        </div>
        <div className="relative container py-16 lg:py-24">
          <Reveal className="text-xs uppercase tracking-wider mb-4 opacity-80">
            <nav aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span><span>Conference Room</span>
              <span className="mx-2">/</span><span className="font-semibold">{location.name}</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
              <Building2 className="h-3.5 w-3.5" /> {content.heroEyebrow}
            </span>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
              Conference Room in <span className="text-primary">{location.name}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-base lg:text-lg max-w-2xl opacity-90">
              {content.heroIntro}
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap gap-3 items-center">
              <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg" className="shadow-[var(--shadow-elegant)]"><Calendar className="mr-1 h-4 w-4" /> Reserve a date</Button>} />
              <Button asChild size="lg" variant="outline" className="bg-background text-foreground"><a href="#pricing">See packages</a></Button>
              <span className="inline-flex items-center gap-2 text-sm opacity-80"><Users className="h-4 w-4" /> Up to 50 guests</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Setup styles */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Why {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.whyHereTitle}</h2>
            <p className="mt-3 text-muted-foreground">{content.whyHereBody}</p>
            <p className="mt-2 text-sm text-foreground/80"><span className="font-bold text-primary">Around you:</span> {content.neighbourhoodPitch}</p>
          </Reveal>
          <Reveal className="max-w-2xl mt-12">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Layouts</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2">Choose your seating style</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {setups.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Capacity {s.capacity}</p>
                <h3 className="font-extrabold text-xl mt-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Boardroom showcase + tech stack */}
      <section className="py-14 bg-muted/40">
        <div className="container grid lg:grid-cols-12 gap-8 items-center">
          <Reveal variant="scale" className="lg:col-span-7 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <img src={isMahape ? mhBoardroom : pick(1)} alt={`Boardroom at YesssWorks ${location.name}`} className="w-full aspect-[16/10] object-cover" />
          </Reveal>
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">The tech inside</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Equipped for the moments that matter</h2>
            <ul className="mt-6 space-y-3">
              {techStack.map((t) => (
                <li key={t.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
                  <t.icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-semibold">{t.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Used for</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Built for high-stakes gatherings</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {useCases.map((u, i) => (
              <Reveal key={u} delay={i * 50} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-semibold">{u}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Packages</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Conference packages in {location.name}</h2>
            <p className="mt-3 text-muted-foreground">Catering and event-coordinator support available as add-ons.</p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 p-6 bg-card flex flex-col ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}>
                <h3 className="font-extrabold text-xl">{p.name}</h3>
                <p className="mt-3"><span className="text-3xl font-extrabold">₹{p.price.toLocaleString()}</span> <span className="text-sm text-muted-foreground">{p.unit}</span></p>
                <ul className="mt-5 space-y-2 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}><a href="#enquire">Reserve <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-2"><MapPin className="h-3.5 w-3.5" /> {location.address ?? placeLabel(location)}</p>
        </div>
      </section>
    </ServicePageShell>
  );
};

export default ConferenceRoomTemplate;
