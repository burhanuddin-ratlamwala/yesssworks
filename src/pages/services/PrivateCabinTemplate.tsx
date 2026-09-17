import { Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lock, MapPin, ShieldCheck, Sparkles, Users, Volume2, Wifi } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { SEO } from "@/components/SEO";
import { pageRoutes, services, locations, SITE, pricingPlans, placeLabel } from "@/data/locations";
import { ServicePageShell } from "./ServicePageShell";
import { getServiceLocationContent } from "@/data/service-location-content";
import { RelatedMahapeLinks } from "@/components/site/RelatedMahapeLinks";
import { LocationExtras } from "@/components/site/LocationExtras";
import mhPrivateCabin from "@/assets/mahape/mahape-private-cabin.webp";
import mhTeamCabin from "@/assets/mahape/mahape-team-cabin.webp";
import mhTwoSeater from "@/assets/mahape/mahape-two-seater.webp";
import mhSixSeater from "@/assets/mahape/mahape-six-seater.webp";
import mhSoloCabin from "@/assets/mahape/mahape-solo-cabin.webp";
import { imageryFor } from "@/data/location-imagery";

interface Props { routePath: string; }

const PrivateCabinTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const isMahape = location.slug === "mahape";
  const heroImg = isMahape ? mhPrivateCabin : pick(0);
  const plans = pricingPlans["private-cabin"];
  const content = getServiceLocationContent(route.service, route.location, service.label, location.name);

  const cabinSizes = isMahape
    ? [
        { img: mhSoloCabin, name: "Solo Cabin", seats: "1", text: "A focus pod of your own, perfect for founders and senior independents." },
        { img: mhTwoSeater, name: "2-Seater Cabin", seats: "2", text: "Co-founders, lawyer + paralegal, designer + dev, a private room for two." },
        { img: mhTeamCabin, name: "4-Seater Cabin", seats: "4", text: "A small team's HQ. Lockable, brandable, all-inclusive." },
        { img: mhSixSeater, name: "6+ Seater Cabin", seats: "6+", text: "Sales pods, support teams and stealth-mode startups." },
      ]
    : [
        { img: pick(1), name: "Solo Cabin", seats: "1", text: "A focus pod of your own, perfect for founders and senior independents." },
        { img: pick(2), name: "2-Seater Cabin", seats: "2", text: "Co-founders or pairs that need a private room." },
        { img: pick(3), name: "4-Seater Cabin", seats: "4", text: "A small team's HQ. Lockable, brandable, all-inclusive." },
        { img: pick(4), name: "6+ Seater Cabin", seats: "6+", text: "Sales pods, support teams and stealth-mode startups." },
      ];

  const inside = [
    { icon: Lock, title: "Lockable & private", text: "Your team, your door, your conversations stay yours." },
    { icon: Volume2, title: "Soundproof", text: "Acoustic glass and ceiling baffles, call without disturbing the floor." },
    { icon: Wifi, title: "Plug-and-play tech", text: "Leased-line internet, dual-monitor mounts, power backup." },
    { icon: ShieldCheck, title: "All-inclusive", text: "Wi-Fi, power, housekeeping, security, one bill, no surprises." },
  ];

  const cabinVsOpen = [
    { title: "Privacy", cabin: "Locked door, your team only", open: "Shared floor with other members" },
    { title: "Calls", cabin: "Take calls right at your seat", open: "Walk to a phone booth" },
    { title: "Branding", cabin: "Name your cabin, add signage", open: "No personalisation" },
    { title: "Storage", cabin: "Cabinets and lockable drawers", open: "Day locker only" },
    { title: "Quiet", cabin: "Soundproofed and controlled", open: "Community ambient noise" },
  ];

  const faqItems = [
    { q: `What is the price of a private cabin in ${location.name}?`, a: `2-seater cabins in ${location.name} start at ₹24,999/month. 4-seaters from ₹44,999 and 6-seaters from ₹64,999. Larger cabins are quoted on request, share your headcount and we'll send a tailored plan.` },
    { q: `Can I brand my cabin?`, a: `Yes, your team gets a name plate on the door, and we can install custom signage and wall branding inside the cabin (subject to building guidelines).` },
    { q: `Is the cabin locked when I'm not there?`, a: `Yes, every cabin has a key + biometric lock. Only your team and select facility staff can enter outside business hours.` },
    { q: `What's included in the cabin price?`, a: `Furniture, leased-line Wi-Fi, electricity, housekeeping, security, pantry access, meeting room credits and access to all amenities of YesssWorks.` },
    { q: `Can I scale up to a bigger cabin later?`, a: `Yes, we keep adjacent cabins available so growing teams can move next door without changing addresses or rewiring tech.` },
    { q: `Can I get GST and incorporation done at this address?`, a: `Yes, every private cabin in ${location.name} comes with a registration NOC, GST documentation and corporate address support.` },
  ];

  const title = `Private Cabin in ${location.name}, Lockable Team Cabins | ${SITE.name}`;
  const description = `Lockable, soundproof private cabins in ${location.name} for teams of 2 to 8. Plug-and-play, all-inclusive, brandable. Move-in ready in 48 hours.`;

  return (
    <ServicePageShell
      location={location}
      locationSlug={route.location}
      service={service}
      enquireHeading={`Move into a private cabin in ${location.name}`}
      enquireIntro={`Tell us your team size and ideal move-in date, we'll show you the available cabins.`}
      faqHeading={`Private cabins in ${location.name}, answered`}
      faqItems={faqItems}
      defaultMessage={`Hi YesssWorks team, I'd like to see private cabins in ${location.name}.`}
    >
      <SEO title={title} description={description} canonical={route.path} keywords={route.keywords} image={heroImg} />

      {/* Hero, team focus */}
      <section className="relative bg-sage overflow-hidden">
        <div className="container relative grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="py-12 lg:py-20 lg:pr-12">
            <Reveal className="text-xs uppercase tracking-wider text-foreground/70 mb-4">
              <nav><Link to="/" className="hover:text-primary">Home</Link><span className="mx-2">/</span><span>Private Cabin</span><span className="mx-2">/</span><span className="text-foreground font-semibold">{location.name}</span></nav>
            </Reveal>
            <Reveal delay={80}>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-bold">
                <Lock className="h-3.5 w-3.5" /> {content.heroEyebrow}
              </span>
            </Reveal>
            <Reveal delay={140}><h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Private Cabin in <span className="text-primary">{location.name}</span></h1></Reveal>
            <Reveal delay={200}><p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">{content.heroIntro}</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                <div className="text-center rounded-xl bg-card border border-border p-3"><p className="text-xs text-muted-foreground">From</p><p className="font-extrabold text-primary">₹24.9K</p><p className="text-[11px] text-muted-foreground">2-seater</p></div>
                <div className="text-center rounded-xl bg-primary/5 border border-primary/30 p-3"><p className="text-xs text-muted-foreground">From</p><p className="font-extrabold text-primary">₹44.9K</p><p className="text-[11px] text-muted-foreground">4-seater</p></div>
                <div className="text-center rounded-xl bg-card border border-border p-3"><p className="text-xs text-muted-foreground">From</p><p className="font-extrabold text-primary">₹64.9K</p><p className="text-[11px] text-muted-foreground">6-seater</p></div>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-6 flex flex-wrap gap-3">
                <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg">See available cabins <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
                <Button asChild size="lg" variant="outline"><a href="#pricing">Pricing per seat</a></Button>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[520px]">
            <Reveal variant="scale" className="absolute inset-0">
              <img src={heroImg} alt={`Private cabin in ${location.name}`} className="w-full h-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cabin sizes gallery */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-3xl mb-12">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Why {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.whyHereTitle}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{content.whyHereBody}</p>
            <p className="mt-2 text-sm text-foreground/80"><span className="font-bold text-primary">Around you:</span> {content.neighbourhoodPitch}</p>
          </Reveal>
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Pick your size</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Cabins built around your team size</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cabinSizes.map((c, i) => (
              <Reveal key={c.name} delay={i * 70} className="rounded-2xl overflow-hidden border border-border bg-card hover-lift">
                <div className="aspect-[4/3] overflow-hidden"><img src={c.img} alt={c.name} className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="p-5"><div className="flex items-center justify-between"><h3 className="font-bold">{c.name}</h3><span className="inline-flex items-center gap-1 text-xs font-bold text-primary"><Users className="h-3.5 w-3.5" />{c.seats}</span></div><p className="text-sm text-muted-foreground mt-2">{c.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin vs open desks comparison */}
      <section className="py-14 bg-muted/40">
        <div className="container max-w-4xl">
          <Reveal><p className="text-xs font-bold tracking-widest text-primary uppercase">Cabin vs hot desk</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Why teams pick a cabin over open desks</h2></Reveal>
          <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-3 bg-primary/10 text-primary font-bold text-sm p-4"><span></span><span className="flex items-center gap-1"><Sparkles className="h-3.5 w-3.5" /> Private Cabin</span><span>Open Desk</span></div>
            {cabinVsOpen.map((row, i) => (
              <div key={row.title} className={`grid grid-cols-3 p-4 text-sm ${i % 2 === 0 ? "bg-background" : "bg-muted/30"}`}><span className="font-semibold">{row.title}</span><span className="text-foreground/90">{row.cabin}</span><span className="text-muted-foreground">{row.open}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">What's inside</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Walk in. Plug in. Get to work.</h2></Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {inside.map((u, i) => (
              <Reveal key={u.title} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-4"><u.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-bold">{u.title}</h3><p className="text-sm text-muted-foreground mt-2 leading-relaxed">{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing per seat */}
      <section id="pricing" className="py-14 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Pricing</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Cabin plans in {location.name}</h2><p className="mt-3 text-muted-foreground">All-inclusive monthly pricing. + GST.</p></Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 p-6 bg-card flex flex-col ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}>
                <h3 className="font-extrabold text-xl">{p.name}</h3>
                <p className="mt-3"><span className="text-3xl font-extrabold">₹{p.price.toLocaleString()}</span> <span className="text-sm text-muted-foreground">{p.unit}</span></p>
                <ul className="mt-5 space-y-2 flex-1">{p.features.map((f) => (<li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}</li>))}</ul>
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}><a href="#enquire">Tour this cabin</a></Button>
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

export default PrivateCabinTemplate;
