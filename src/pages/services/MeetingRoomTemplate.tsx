import { Link, Navigate } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle2, Clock, MapPin, Monitor, Mic, PenLine, Wifi, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { SEO } from "@/components/SEO";
import { pageRoutes, services, locations, SITE, pricingPlans, placeLabel } from "@/data/locations";
import { ServicePageShell } from "./ServicePageShell";
import { getServiceLocationContent } from "@/data/service-location-content";
import { RelatedMahapeLinks } from "@/components/site/RelatedMahapeLinks";
import { LocationExtras } from "@/components/site/LocationExtras";
import mhMeetingRoom from "@/assets/mahape/mahape-meeting-room.webp";
import mhHuddle from "@/assets/mahape/mahape-huddle-room.webp";
import mhDiscussion from "@/assets/mahape/mahape-discussion-room.webp";
import mhPhoneBooth from "@/assets/mahape/mahape-phone-booth.webp";
import { imageryFor } from "@/data/location-imagery";

interface Props { routePath: string; }

const MeetingRoomTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const service = services[route.service];
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const isMahape = location.slug === "mahape";
  const heroImg = isMahape ? mhMeetingRoom : pick(0);
  const plans = pricingPlans["meeting-room"];
  const content = getServiceLocationContent(route.service, route.location, service.label, location.name);

  const rooms = isMahape
    ? [
        { img: mhHuddle, name: "Huddle Room", capacity: "2–4 people", best: "Quick syncs, 1:1s" },
        { img: mhMeetingRoom, name: "Standard Meeting Room", capacity: "6–8 people", best: "Client meetings, sprint reviews" },
        { img: mhDiscussion, name: "Discussion Room", capacity: "8–10 people", best: "Workshops, brainstorms" },
        { img: mhPhoneBooth, name: "Phone Booth", capacity: "1 person", best: "Video calls, focused calls" },
      ]
    : [
        { img: pick(1), name: "Huddle Room", capacity: "2–4 people", best: "Quick syncs, 1:1s" },
        { img: pick(2), name: "Standard Meeting Room", capacity: "6–8 people", best: "Client meetings, sprint reviews" },
        { img: pick(3), name: "Discussion Room", capacity: "8–10 people", best: "Workshops, brainstorms" },
        { img: pick(4), name: "Phone Booth", capacity: "1 person", best: "Video calls" },
      ];

  const useCases = [
    { icon: Users, title: "Client Pitches", text: "Greet clients at reception. Move into a soundproof room with crystal-clear AV." },
    { icon: PenLine, title: "Workshops & Brainstorms", text: "Writeable walls, markers and a calendar that lets you book back-to-back sessions." },
    { icon: Mic, title: "Interviews", text: "Quiet, private and well-lit rooms, perfect for in-person and video interviews." },
    { icon: Monitor, title: "Sprint Reviews & Demos", text: "Cast wirelessly to a 4K screen. VC-bridge for remote teammates." },
  ];

  const inclusions = [
    { icon: Monitor, label: "Smart TV with HDMI + wireless casting" },
    { icon: Wifi, label: "Leased-line Wi-Fi, no buffering" },
    { icon: PenLine, label: "Whiteboard + markers + stationery" },
    { icon: Mic, label: "Conference-quality mic & speaker" },
  ];

  const steps = [
    { n: "01", title: "Pick a slot", text: "WhatsApp or call us with your time, headcount and AV needs." },
    { n: "02", title: "Confirm in 10 minutes", text: "We block the room and share a confirmation with the joining link." },
    { n: "03", title: "Walk in & start", text: "Reception greets your guests. Coffee, water and Wi-Fi are already set up." },
  ];

  const faqItems = [
    { q: `What is the price of meeting rooms in ${location.name}?`, a: `Meeting rooms in ${location.name} start at ₹499/hour for 4–6 seater rooms. Half-day (4 hrs) is ₹1,999 and full-day (8 hrs) is ₹3,499. Larger conference rooms are priced separately.` },
    { q: `What's the smallest booking I can make?`, a: `Minimum booking is 1 hour. Same-day bookings are accepted subject to availability, WhatsApp us for the fastest response.` },
    { q: `Can I bring outside guests for a meeting?`, a: `Yes, visitors are welcome. Reception will greet your guests and walk them to the room. Please share the visitor list 30 minutes in advance for smooth check-in.` },
    { q: `Do you provide tea, coffee or food in the meeting room?`, a: `Tea, coffee and water are complimentary. Snacks and full catering can be arranged on request, share your menu the day before.` },
    { q: `Is video conferencing supported?`, a: `Yes, every room is equipped for Zoom, Google Meet and Teams. Soundproofing and a leased-line connection mean zero call drops.` },
    { q: `Can I book a room for a full week or month?`, a: `Yes, long-term bookings get a custom rate. Talk to us for tailored pricing on weekly, monthly and recurring bookings.` },
    { q: `Where are the meeting rooms in ${location.name} located?`, a: `Our ${location.name} meeting rooms are at ${location.address ?? placeLabel(location)}. Easy access via ${location.nearby.metro?.[0] ?? "metro"} and ${location.nearby.train?.[0] ?? "rail"}.` },
  ];

  const title = `Meeting Room in ${location.name}, Book by the Hour | ${SITE.name}`;
  const description = `Book a meeting room in ${location.name} from ₹499/hr. Soundproof, AV-ready, video-conference enabled. Perfect for client meetings, interviews and workshops.`;

  return (
    <ServicePageShell
      location={location}
      locationSlug={route.location}
      service={service}
      enquireHeading={`Book a meeting room in ${location.name}`}
      enquireIntro={`Tell us your date, time and headcount, we'll lock in the right room and confirm in 10 minutes.`}
      faqHeading={`Meeting rooms in ${location.name}, your questions, answered`}
      faqItems={faqItems}
      defaultMessage={`Hi YesssWorks team, I'd like to book a meeting room in ${location.name}.`}
    >
      <SEO title={title} description={description} canonical={route.path} keywords={route.keywords} image={heroImg} />

      {/* Hero, booking-led */}
      <section className="relative bg-sage overflow-hidden">
        <div className="container relative grid lg:grid-cols-2 gap-0 items-stretch">
          <div className="py-12 lg:py-20 lg:pr-12">
            <Reveal className="text-xs uppercase tracking-wider text-foreground/70 mb-4">
              <nav aria-label="Breadcrumb">
                <Link to="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span><span>Meeting Room</span>
                <span className="mx-2">/</span><span className="text-foreground font-semibold">{location.name}</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary border border-primary/30 px-3 py-1 text-xs font-bold">
                <Clock className="h-3.5 w-3.5" /> {content.heroEyebrow}
              </span>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Meeting Room in <span className="text-primary">{location.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">
                {content.heroIntro}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-3 flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" /> {placeLabel(location)}
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-7 flex flex-wrap gap-3">
                <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg" className="shadow-[var(--shadow-elegant)]"><Calendar className="mr-1 h-4 w-4" /> Book a room</Button>} />
                <Button asChild size="lg" variant="outline"><a href="#pricing">See hourly pricing</a></Button>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[520px]">
            <Reveal variant="scale" className="absolute inset-0">
              <img src={heroImg} alt={`Meeting room in ${location.name}`} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur rounded-xl p-4 shadow-[var(--shadow-card)] border border-border">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Starts at</p>
                    <p className="text-xl font-extrabold">₹499 <span className="text-xs font-medium text-muted-foreground">/ hour</span></p>
                  </div>
                  <Button asChild size="sm"><a href="#pricing">View slots</a></Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this location */}
      <section className="py-14 bg-background">
        <div className="container grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Why {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{content.whyHereTitle}</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">{content.whyHereBody}</p>
            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Around you</p>
              <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{content.neighbourhoodPitch}</p>
            </div>
          </Reveal>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {(location.nearby.metro ?? []).slice(0, 4).map((m) => (
              <div key={m} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span className="text-sm font-semibold">{m}</span></div>
            ))}
            {(location.nearby.train ?? []).slice(0, 2).map((m) => (
              <div key={m} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span className="text-sm font-semibold">{m}</span></div>
            ))}
            {(location.nearby.malls ?? []).slice(0, 2).map((m) => (
              <div key={m} className="rounded-xl border border-border bg-card p-4 flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /><span className="text-sm font-semibold">{m}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Room types */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Room types</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Pick the right room for your meeting</h2>
            <p className="mt-3 text-muted-foreground">From 1-person phone booths to 10-seater discussion rooms, we've got the right format for every kind of conversation.</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rooms.map((r, i) => (
              <Reveal key={r.name} delay={i * 70} className="rounded-2xl overflow-hidden border border-border bg-card hover-lift">
                <div className="aspect-video overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{r.name}</h3>
                  <p className="text-sm text-primary mt-1 font-semibold">{r.capacity}</p>
                  <p className="text-sm text-muted-foreground mt-2">{r.best}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AV & inclusions strip */}
      <section className="py-10 bg-muted/40">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {inclusions.map((i) => (
            <div key={i.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <i.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-semibold">{i.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing table */}
      <section id="pricing" className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Hourly + day rates</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Transparent pricing in {location.name}</h2>
            <p className="mt-3 text-muted-foreground">Pay only for the time you use. All prices + GST.</p>
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
                <Button asChild className="mt-6 w-full" variant={p.highlight ? "default" : "outline"}><a href="#enquire">Book this slot</a></Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Perfect for</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">What teams in {location.name} use our rooms for</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-4"><u.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="font-bold">{u.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{u.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking process */}
      <section className="py-14 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Booking flow</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Book in 3 simple steps</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-5xl font-extrabold text-primary/30 leading-none">{s.n}</p>
                <h3 className="font-bold mt-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <BookTourDialog defaultLocation={route.location} trigger={<Button size="lg">Reserve a room <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
          </div>
        </div>
      </section>

      <LocationExtras location={location} locationSlug={route.location} />
      <RelatedMahapeLinks currentPath={route.path} location={location} />
    </ServicePageShell>
  );
};

export default MeetingRoomTemplate;
