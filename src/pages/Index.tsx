import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight, MapPin, Phone, Sparkles, Star, Clock, Wifi, Shield, Car,
  Coffee, Users, Zap, MonitorPlay, Building2, CheckCircle2, Calendar, Mail,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { LpHeader } from "@/components/site/LpHeader";
import { Footer } from "@/components/site/Footer";
import { ClientLogos } from "@/components/site/ClientLogos";
import { ContactForm } from "@/components/site/ContactForm";
import { Testimonials } from "@/components/site/Testimonials";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/site/FAQSection";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { Button } from "@/components/ui/button";
import { services, locations, SITE } from "@/data/locations";
import { PhotoStrip } from "@/components/site/PhotoStrip";
import { aurumMahape } from "@/data/aurum-mahape-images";
import { goregaon271Images } from "@/data/goregaon-271-images";
import { ackrutiImages } from "@/data/ackruti-images";
import { andheriAtImages } from "@/data/andheri-at-images";
import { pinnacleImages } from "@/data/pinnacle-images";
import { tilesFor } from "@/data/location-imagery";

/* Every photo below is shot inside a real YesssWorks floor, so the homepage
   shows the same buildings a visitor will actually walk into. */
const heroImage = goregaon271Images.lounge01;
const loungeImg = aurumMahape.loungeOne;
const openDesksImg = goregaon271Images.orangeDesks01;
const cabinImg = pinnacleImages.smallPrivateOffice;
const meetingImg = aurumMahape.conferenceOrange;
const fixedDeskImg = andheriAtImages.desks38;
const suiteImg = goregaon271Images.desks01;
const virtualImg = aurumMahape.bigTeamFloor;
const terraceImg = goregaon271Images.exterior01;
const focusImg = ackrutiImages.longWorktable;
const cabinTeamImg = aurumMahape.eightSeatCabin;

type IndexProps = {
  /** When true, renders the landing-page variant (LpHeader with phone, LP-specific SEO). */
  lp?: boolean;
  /** Human-readable location label, used in LP SEO copy (e.g. "Mahape", "Andheri East"). */
  lpLocation?: string;
  /** Canonical path for the landing page (e.g. "/lp/coworking-space-in-mahape"). */
  lpCanonical?: string;
};

const Index = ({ lp = false, lpLocation, lpCanonical }: IndexProps = {}) => {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    sameAs: [],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  const membershipTabs = [
    {
      key: "exclusive",
      label: "Exclusive",
      title: "Private Cabins & Office Suites",
      desc: "Lockable cabins and branded office suites for teams who need privacy, focus and a permanent address. Fully furnished, fibre internet, daily housekeeping and 24x7 access included.",
      img: cabinImg,
      cta: "/packages/private-cabins",
    },
    {
      key: "shared",
      label: "Shared",
      title: "Fixed Desks & Hot Desks",
      desc: "Pick a dedicated fixed desk or hop on a hot desk for the day. You get high-speed Wi-Fi, ergonomic seating, free coffee and a friendly community to plug into.",
      img: openDesksImg,
      cta: "/packages/fixed-desks",
    },
    {
      key: "customized",
      label: "Customized",
      title: "Managed Office Suites",
      desc: "Built-to-suit floors for 20 to 200 seats with your branding, your layout and your tech, delivered turnkey. We handle fit-out, IT, facilities and compliance.",
      img: suiteImg,
      cta: "/packages/office-suites",
    },
    {
      key: "meeting",
      label: "Meeting Rooms",
      title: "Meeting & Conference Rooms",
      desc: "By-the-hour boardrooms, training rooms and conference rooms with 4K screens, video conferencing, whiteboards and pantry service on call.",
      img: meetingImg,
      cta: "/packages/meeting-conference",
    },
  ] as const;

  const [tab, setTab] = useState<string>(membershipTabs[0].key);
  const active = membershipTabs.find((t) => t.key === tab)!;

  const amenities = [
    { icon: Users, title: "Ergonomic Seating", desc: "Premium chairs and sit-stand options that support long focus sessions." },
    { icon: Coffee, title: "Client Lounge & Cafe", desc: "Warm lounges and pantry with unlimited tea, coffee and fast water." },
    { icon: Clock, title: "24x7 Access", desc: "Work on your hours with keycard entry and overnight support." },
    { icon: MonitorPlay, title: "Smart Meeting Rooms", desc: "4K displays, ClickShare and one-tap video conferencing." },
    { icon: Wifi, title: "Secure Fibre Wi-Fi", desc: "Dual ISP redundancy, VLANs for teams and gigabit speeds." },
    { icon: Zap, title: "Power Backup 24x7", desc: "Full diesel and UPS backup so a Mumbai monsoon never stops work." },
    { icon: Car, title: "Ample Parking", desc: "Car and two-wheeler parking with valet on tower premises." },
    { icon: Shield, title: "24x7 Security & CCTV", desc: "Multi-layer security, visitor management and IP cameras on every floor." },
    { icon: Building2, title: "Phone Booths & Pods", desc: "Acoustic booths for calls and quiet pods for deep work." },
  ];

  const planDurations = [
    { tag: "1 Day", title: "Day Pass", desc: "Need a quiet desk for the day? Walk in, plug in, get to work.", img: fixedDeskImg, link: "/packages/fixed-desks" },
    { tag: "5 Days / Month", title: "Hybrid Plan", desc: "Perfect for hybrid teams splitting time between home and office.", img: loungeImg, link: "/plans" },
    { tag: "10 Days / Month", title: "Focus Pass", desc: "A dedicated zone for founders and remote teams who need rhythm.", img: focusImg, link: "/plans" },
    { tag: "25 Days / 3 Months", title: "Bespoke Cabin", desc: "Private cabin or office suite tailored to your team and brand.", img: cabinTeamImg, link: "/packages/office-suites" },
  ];

  // Building-level locations (the five physical hubs), each with a real photo.
  const buildingHubs = [
    { slug: "andheri-at", name: "YesssWorks Andheri, AT", sub: "AT. By AGM Vijaylaxmi, Andheri East", img: andheriAtImages.reception },
    { slug: "andheri-pinnacle", name: "YesssWorks Andheri, Pinnacle", sub: "Pinnacle Business Park, Andheri East", img: pinnacleImages.receptionStaircase },
    { slug: "andheri-ackruti", name: "YesssWorks Andheri, Ackruti", sub: "Ackruti Softech Park, Andheri East", img: ackrutiImages.largeOpenPlan },
    { slug: "goregaon-271", name: "YesssWorks Goregaon, 271", sub: "271 Business Park, Goregaon East", img: goregaon271Images.exterior02 },
    { slug: "mahape-aurum-q6", name: "YesssWorks Mahape, Aurum Q6", sub: "Aurum Q6, Millenium Business Park", img: aurumMahape.facade },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={lp && lpLocation
          ? `Coworking Space in ${lpLocation} | YesssWorks Premium Workspaces`
          : "YesssWorks | Premium Coworking Space in Mumbai & Navi Mumbai"}
        description={lp && lpLocation
          ? `Looking for a coworking space in ${lpLocation}? YesssWorks offers fixed desks, private cabins, meeting rooms and managed offices with fast Wi-Fi, 24x7 access and a free tour on request.`
          : "YesssWorks runs premium coworking spaces, private cabins, meeting rooms and managed office suites across Andheri, Goregaon, Mahape and Navi Mumbai. Book a free tour today."}
        canonical={lpCanonical ?? "/"}
        keywords={lp && lpLocation ? [
          `coworking space in ${lpLocation.toLowerCase()}`,
          `shared office space ${lpLocation.toLowerCase()}`,
          `private cabin ${lpLocation.toLowerCase()}`,
          `meeting room ${lpLocation.toLowerCase()}`,
          "coworking space mumbai",
        ] : [
          "coworking space mumbai",
          "coworking space navi mumbai",
          "shared office space mumbai",
          "private cabin mumbai",
          "managed office mumbai",
          "meeting room mumbai",
        ]}
        image={heroImage}
        jsonLd={orgLd}
      />
      {lp ? <LpHeader /> : <Header />}

      {/* HERO - full-bleed image banner */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImage}
          alt="YesssWorks premium coworking space in Mumbai with conference room and open desks"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/40" aria-hidden />
        <div className="container relative py-20 lg:py-28">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-semibold uppercase tracking-widest text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" /> Premium Coworking, Mumbai & Navi Mumbai
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Creating Spaces That <span className="text-gradient-primary">Draw People Together</span>
            </h1>
            <p className="mt-5 text-white/85 max-w-2xl leading-relaxed">
              YesssWorks runs six premium hubs across Andheri, Goregaon, Mahape and Navi Mumbai. Warm interiors, fast Wi-Fi and a real community so your team can do its best work, every day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookTourDialog
                trigger={
                  <Button size="lg" className="shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">
                    Book a Free Tour <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                }
              />
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-ink">
                <Link to="/gallery">Explore the Space</Link>
              </Button>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/90">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary-glow text-primary-glow" />)}</div>
              <span className="font-semibold">4.8 / 5</span>
              <span className="text-white/75">Google Reviews from 600+ companies</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTELE */}
      <ClientLogos />

      {/* IDEALLY SITUATED */}
      <section className="py-12 lg:py-16">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Where Collaboration Meets Comfort</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">An Ideally Situated Environment, Built Around You</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From high-speed Wi-Fi and quiet focus zones to relaxed lounges and regular community events, every YesssWorks hub is built to help you innovate, connect and ship. Step in, settle down and imagine yourself in the most comfortable office in the city.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "5 mins from Metro stations",
                "10 mins from major business parks",
                "20 mins from the international airport",
                "Walkable to cafes, banks and ATMs",
              ].map((it) => (
                <div key={it} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{it}</span>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Button asChild size="lg"><Link to="/contact">Book a Tour <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            </div>
          </Reveal>
          <Reveal variant="scale" className="rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={terraceImg} alt="271 Business Park, the YesssWorks Goregaon East building" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* FIND YOUR PERFECT MEMBERSHIP */}
      <section className="py-12 lg:py-16 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Membership</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Find Your Perfect Workspace</h2>
            <p className="mt-3 text-muted-foreground">Whether you are a solo founder, a 10-seat team or a 200-person company, we have a plan that fits.</p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2">
            {membershipTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
                  tab === t.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-[var(--shadow-card)]">
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img src={active.img} alt={active.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">{active.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{active.desc}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild><Link to={active.cta}>Explore More <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
                <Button asChild variant="outline"><Link to="/plans">See all plans</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOUR CTA */}
      <section className="py-12 lg:py-16 bg-ink text-ink-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-grid" aria-hidden />
        <div className="container relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary-glow uppercase">Book a Tour</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Book Your Exclusive Workspace Tour Today</h2>
            <p className="mt-3 text-ink-foreground/80 max-w-2xl">
              Walk through the floors, meet the community team and pick the seat that feels right. Tours take 20 minutes and there is no pressure to sign anything on the spot.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Button asChild size="lg" className="shadow-[var(--shadow-elegant)]">
              <Link to="/contact"><Calendar className="mr-2 h-4 w-4" /> Schedule a Free Tour</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Top-notch Amenities</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Everything You Need to Do Your Best Work</h2>
            <p className="mt-3 text-muted-foreground">Nine essentials, included with every plan. No hidden charges, no upsells.</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 flex items-start gap-4 hover-lift hover:border-primary/40 transition-colors">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold leading-tight">{a.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-12 lg:py-16 bg-muted/40">
        <div className="container">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Locations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">A Well-Connected, Strategically Located Network</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl">Six hubs across Mumbai and Navi Mumbai, each a short walk from a metro, highway or business park.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {buildingHubs.map((b, i) => (
              <Reveal key={b.slug} delay={i * 70}>
                <Link
                  to={`/yesssworks-${b.slug === "andheri-pinnacle" ? "andheri-pinnacle-business-park" : b.slug === "andheri-ackruti" ? "andheri-ackruti-softech-park" : b.slug === "goregaon-271" ? "goregaon-271-business-park" : b.slug}`}
                  className="group block h-full rounded-2xl overflow-hidden border border-border bg-card hover-lift shadow-[var(--shadow-card)]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={b.img}
                      alt={b.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{b.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{b.sub}</p>
                      </div>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm story-link">
                      <span className="whitespace-nowrap">Explore location</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REAL PHOTOS, BY LOCATION */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Straight from our floors</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">See Each Hub Before You Visit</h2>
            <p className="mt-3 text-muted-foreground">
              No stock photos anywhere on this site. Tap any picture to open it full screen and look around the floor you are considering.
            </p>
          </Reveal>
          <div className="mt-8 space-y-10">
            {[
              { key: "andheri", label: "Andheri East and West", link: "/coworking-space-in-andheri", place: "YesssWorks Andheri" },
              { key: "goregaon", label: "Goregaon East, 271 Business Park", link: "/yesssworks-goregaon-271-business-park", place: "YesssWorks Goregaon, 271 Business Park" },
              { key: "mahape", label: "Mahape, Aurum Q6", link: "/yesssworks-mahape-aurum-q6", place: "YesssWorks Mahape, Aurum Q6" },
            ].map((g) => (
              <div key={g.key}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                  <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" /> {g.label}
                  </h3>
                  <Link to={g.link} className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    Visit this hub <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
                <PhotoStrip bare columns={4} place={g.place} tiles={tilesFor(`home-${g.key}`, 4, g.key)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACK RECORD STATS */}
      <section className="py-12 lg:py-16">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="scale" className="rounded-2xl overflow-hidden order-2 lg:order-1 shadow-[var(--shadow-elegant)]">
            <img src={virtualImg} alt="Managed team floor at YesssWorks Mahape, Aurum Q6" className="w-full h-full object-cover aspect-[4/3]" loading="lazy" />
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Backed by Experience. Built for What Comes Next.</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Work That Speaks for Itself</h2>
            <p className="mt-3 text-muted-foreground">We believe in results you can see, and spaces you can trust. Here is what we have shipped so far.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { v: "6+", l: "Premium hubs across Mumbai & Navi Mumbai" },
                { v: "600+", l: "Companies served, from startups to MNCs" },
                { v: "2.5 L+", l: "Sq ft of office space delivered" },
                { v: "4.8★", l: "Average Google rating across hubs" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-5">
                  <div className="text-3xl font-extrabold text-gradient-primary">{s.v}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <FAQSection
        className="bg-background"
        items={[
          { q: "Where are YesssWorks coworking spaces located?", a: "We operate five premium hubs across Mumbai and Navi Mumbai, in Andheri (AT, Pinnacle Business Park, Ackruti Softech Park), Goregaon (271 Business Park) and Mahape (Aurum Q6, Millenium Business Park)." },
          { q: "What plans do you offer?", a: "Day passes, fixed desks, private cabins, managed office suites, and meeting & conference rooms. Plans flex from a single day up to multi-year commitments." },
          { q: "Can I tour a hub before signing up?", a: "Yes. Book a free, no-pressure 20-minute tour and our community team will walk you through floors, amenities and seating options." },
          { q: "Is 24/7 access included?", a: "Yes, members on monthly+ plans get 24/7 keycard access with overnight support, power backup, secure Wi-Fi and CCTV." },
          { q: "Do you support enterprise teams?", a: "We build branded, turnkey office suites for 20–200 seats and serve teams from JM Financial, HDFC ERGO, Roche, Bajaj Electricals and Sugar Cosmetics, among others." },
          { q: "What does the price include?", a: "Furniture, fast leased-line internet, unlimited tea and coffee, housekeeping, utilities, security and access to community events. No setup fees, no surprise charges." },
        ]}
      />

      {/* PLAN DURATIONS */}
      <section className="py-12 lg:py-16 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Flexible Durations</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Pick a Rhythm That Matches Your Week</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {planDurations.map((p, i) => (
              <Reveal key={p.tag} delay={i * 80}>
                <Link to={p.link} className="group block h-full rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover-lift">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary">{p.tag}</span>
                    <h3 className="mt-1 font-bold text-lg">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + CONTACT */}
      <section id="contact" className="py-12 lg:py-16">
        <div className="container grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Ready to experience our space?</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Let's find the perfect workspace for you</h2>
            <p className="text-muted-foreground mt-3">Drop your details and a YesssWorks specialist will reach out within one business day to schedule a free, no-pressure tour.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-primary" /> Flexible plans from a single day to multi-year</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Andheri, Goregaon, Mahape & Navi Mumbai</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /> <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            </ul>
          </Reveal>
          <Reveal variant="scale" className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
