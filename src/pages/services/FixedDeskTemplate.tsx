import { Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Lock, MapPin, Mail, Monitor, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { SEO } from "@/components/SEO";
import { pageRoutes, services, locations, SITE, pricingPlans, placeLabel } from "@/data/locations";
import { ServicePageShell } from "./ServicePageShell";
import { getServiceLocationContent } from "@/data/service-location-content";
import { RelatedMahapeLinks } from "@/components/site/RelatedMahapeLinks";
import { LocationExtras } from "@/components/site/LocationExtras";
import mhFixedDesks from "@/assets/mahape/mahape-fixed-desks.webp";
import mhMonitorBay from "@/assets/mahape/mahape-monitor-bay.webp";
import mhDeskBay from "@/assets/mahape/mahape-desk-bay.webp";
import { imageryFor } from "@/data/location-imagery";

interface Props { routePath: string; }

const FixedDeskTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const isMahape = location.slug === "mahape";
  const heroImg = isMahape ? mhFixedDesks : pick(0);
  const plans = pricingPlans["fixed-desk"];
  const content = getServiceLocationContent(route.service, route.location, service.label, location.name);

  const onYourDesk = [
    { icon: Monitor, title: "Monitor support", text: "Mount, riser or external monitor, your setup, your way." },
    { icon: Lock, title: "Lockable storage", text: "A pedestal of your own. Leave your monitor, files and chargers." },
    { icon: Clock, title: "24/7 access", text: "Your desk, your hours. Walk in any time of day or night." },
    { icon: Mail, title: "Mail handling", text: "Couriers and mail received in your name at reception." },
  ];

  const perks = ["Leased-line internet", "Power backup", "Unlimited tea & coffee", "Pantry access", "Free meeting room credits", "All-location access option", "Community events", "Print, scan & copy", "Wellness & games zone"];

  const dailyImg = isMahape ? mhMonitorBay : pick(1);
  const teamImg = isMahape ? mhDeskBay : pick(2);

  const faqItems = [
    { q: `What's the price of a fixed desk in ${location.name}?`, a: `Fixed desks in ${location.name} start at ₹9,999/month. Quarterly is ₹27,999 (save 7%) and annual is ₹99,999 (save 17%) with 24/7 access and meeting room credits.` },
    { q: `Is the desk truly mine, or do others use it?`, a: `Yes, your desk is yours alone. No one else sits there, even if you're on leave. Your monitor, files and chargers stay set up.` },
    { q: `Can I get a monitor and ergonomic chair?`, a: `Yes, every fixed desk includes an ergonomic chair, dual-monitor mount and a sit-stand option (subject to availability).` },
    { q: `What about meetings and calls?`, a: `Every fixed desk plan includes 8 monthly meeting room credits and unlimited access to phone booths for calls.` },
    { q: `Do you handle my mail and couriers?`, a: `Yes, reception receives mail and couriers in your name and notifies you on WhatsApp.` },
    { q: `Can I switch to a private cabin later?`, a: `Of course, most members start at a fixed desk and graduate to a cabin or office suite as they grow. We make the move seamless.` },
  ];

  const title = `Fixed Desk in ${location.name}, Dedicated Workstation | ${SITE.name}`;
  const description = `Your own dedicated desk in ${location.name} from ₹9,999/month. 24/7 access, monitor support, lockable storage, mail handling. Move in this week.`;

  return (
    <ServicePageShell
      location={location}
      locationSlug={route.location}
      service={service}
      enquireHeading={`Claim your fixed desk in ${location.name}`}
      enquireIntro={`Tell us when you'd like to start, we'll show you the available desks and get you set up the same week.`}
      faqHeading={`Fixed desks in ${location.name}, answered`}
      faqItems={faqItems}
      defaultMessage={`Hi YesssWorks team, I'd like a fixed desk in ${location.name}.`}
    >
      <SEO title={title} description={description} canonical={route.path} keywords={route.keywords} image={heroImg} />

      {/* Productivity hero */}
      <section className="relative bg-background overflow-hidden border-b border-border">
        <div className="container py-12 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal className="text-xs uppercase tracking-wider text-foreground/70 mb-4"><nav><Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span>Fixed Desk</span><span className="mx-2">/</span><span className="text-foreground font-semibold">{location.name}</span></nav></Reveal>
            <Reveal delay={80}><span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-bold"><Sparkles className="h-3.5 w-3.5" /> {content.heroEyebrow}</span></Reveal>
            <Reveal delay={140}><h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Fixed Desk in <span className="text-primary">{location.name}</span></h1></Reveal>
            <Reveal delay={200}><p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">{content.heroIntro}</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg">See available desks <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
                <Button asChild size="lg" variant="outline"><a href="#pricing">From ₹9,999/mo</a></Button>
              </div>
            </Reveal>
          </div>
          <Reveal variant="scale" className="lg:col-span-6 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elegant)]"><img src={heroImg} alt={`Fixed desks in ${location.name}`} className="w-full aspect-[4/3] object-cover" /></Reveal>
        </div>
      </section>

      {/* What's on your desk */}
      <section className="py-14 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Why {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.whyHereTitle}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{content.whyHereBody}</p>
            <p className="mt-2 text-sm text-foreground/80"><span className="font-bold text-primary">Around you:</span> {content.neighbourhoodPitch}</p>
          </Reveal>
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">On your desk</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Everything set up the way you like it</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {onYourDesk.map((u, i) => (
              <Reveal key={u.title} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-4"><u.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-bold">{u.title}</h3><p className="text-sm text-muted-foreground mt-2 leading-relaxed">{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Two-image story */}
      <section className="py-14 bg-background">
        <div className="container grid lg:grid-cols-2 gap-8">
          <Reveal variant="scale" className="rounded-2xl overflow-hidden border border-border"><img src={dailyImg} alt="Daily focus" className="w-full aspect-[4/3] object-cover" /><div className="p-6 bg-card"><h3 className="font-extrabold text-xl">Built for daily deep work</h3><p className="text-sm text-muted-foreground mt-2">Wide desks, ergonomic chairs, dual-monitor mounts and a quiet floor plan engineered for the kind of work that requires hours of focus.</p></div></Reveal>
          <Reveal variant="scale" delay={120} className="rounded-2xl overflow-hidden border border-border"><img src={teamImg} alt="Sit with your team" className="w-full aspect-[4/3] object-cover" /><div className="p-6 bg-card"><h3 className="font-extrabold text-xl">Sit with your team</h3><p className="text-sm text-muted-foreground mt-2">Booking 4 fixed desks? We seat your team next to each other in a dedicated bay, so you get the focus of a desk plus the energy of being together.</p></div></Reveal>
        </div>
      </section>

      {/* Member perks */}
      <section className="py-14 bg-muted/40">
        <div className="container max-w-4xl">
          <Reveal><p className="text-xs font-bold tracking-widest text-primary uppercase">Member perks</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">More than a desk</h2></Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {perks.map((p) => (<div key={p} className="flex items-center gap-2 rounded-xl border border-border bg-card p-3"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /><span className="text-sm font-semibold">{p}</span></div>))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Plans</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Fixed desk pricing in {location.name}</h2><p className="mt-3 text-muted-foreground">Lock in longer to save more. + GST.</p></Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 p-6 bg-card flex flex-col ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}>
                <h3 className="font-extrabold text-xl">{p.name}</h3>
                <p className="mt-3"><span className="text-3xl font-extrabold">₹{p.price.toLocaleString()}</span> <span className="text-sm text-muted-foreground">{p.unit}</span></p>
                <ul className="mt-5 space-y-2 flex-1">{p.features.map((f) => (<li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>))}</ul>
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}><a href="#enquire">Pick this plan</a></Button>
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

export default FixedDeskTemplate;
