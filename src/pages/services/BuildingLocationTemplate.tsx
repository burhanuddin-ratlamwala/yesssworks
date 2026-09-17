import { Navigate, Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { ContactForm } from "@/components/site/ContactForm";
import { Lightbox } from "@/components/site/Lightbox";
import { FAQSection } from "@/components/site/FAQSection";
import { pageRoutes, locations, SITE, services, buildingLocationSlugs, buildingPathSuffix } from "@/data/locations";
import { getLocationPricing, formatINR } from "@/data/pricing-workbook";
import {
  MapPin, Clock, Phone, Mail, Star, ArrowRight, Wifi, Coffee, Shield,
  Zap, Car, Users, Printer, Snowflake, Building2, CheckCircle2, Calendar,
  Receipt, Sparkles, MessageCircle,
} from "lucide-react";
import mhReception from "@/assets/mahape/mahape-reception.webp";
import mhDesks from "@/assets/mahape/mahape-open-desks.webp";
import { ackrutiImages } from "@/data/ackruti-images";
import { andheriAtImages } from "@/data/andheri-at-images";
import { goregaon271Images } from "@/data/goregaon-271-images";
import { pinnacleImages } from "@/data/pinnacle-images";
import { imageryFor } from "@/data/location-imagery";
import { realPhotos } from "@/data/real-photos";
const reception = realPhotos.reception;
const openDesks = realPhotos.openDesks;
const lounge = realPhotos.lounge;
const meetingRoom = realPhotos.meetingRoom;
const pantry = realPhotos.pantry;
const terrace = realPhotos.terrace;
const privateCabin = realPhotos.privateCabin;

interface Props { routePath: string }

const galleryByLoc: Record<string, string[]> = {
  "mahape-aurum-q6": [mhReception, mhDesks, lounge, meetingRoom, pantry, terrace],
  "andheri-ackruti": [
    ackrutiImages.largeOpenPlan,
    ackrutiImages.sharedDesks01,
    ackrutiImages.creativeWall,
    ackrutiImages.meetingTable,
    ackrutiImages.cafeBreakout,
    ackrutiImages.glassPods,
  ],
  "andheri-at": [
    andheriAtImages.desks80a,
    andheriAtImages.desks80c,
    andheriAtImages.desks38,
    andheriAtImages.cafe01,
    andheriAtImages.focusBooths,
    andheriAtImages.blueLounge,
  ],
  "andheri-pinnacle": [
    pinnacleImages.workstations01,
    pinnacleImages.workstations03,
    pinnacleImages.boardroom01,
    pinnacleImages.lobbyLounge,
    pinnacleImages.glassMeeting,
    pinnacleImages.largeMeeting01,
  ],
  "goregaon-271": [
    goregaon271Images.desks01,
    goregaon271Images.desks05,
    goregaon271Images.desks02,
    goregaon271Images.cabinWindow01,
    goregaon271Images.desks04,
    goregaon271Images.exterior01,
  ],
};
const defaultGallery = [reception, openDesks, lounge, meetingRoom, pantry, privateCabin];

const amenities = [
  { icon: Wifi, label: "Leased-line Wi-Fi" },
  { icon: Zap, label: "24x7 Power Backup" },
  { icon: Coffee, label: "Unlimited Tea & Coffee" },
  { icon: Snowflake, label: "Centrally Air-conditioned" },
  { icon: Shield, label: "CCTV + Biometric Entry" },
  { icon: Printer, label: "Print, Scan, Copy" },
  { icon: Car, label: "Parking Available" },
  { icon: Users, label: "Community Events" },
];

const onSiteServices = [
  { slug: "fixed-desk", label: "Fixed Desks", to: "/packages/fixed-desks" },
  { slug: "private-cabin", label: "Private Cabins", to: "/packages/private-cabins" },
  { slug: "meeting-room", label: "Meeting Rooms", to: "/packages/meeting-conference" },
  { slug: "office-suites", label: "Office Suites", to: "/packages/office-suites" },
];

const BuildingLocationTemplate = ({ routePath }: Props) => {
  const route = pageRoutes.find((r) => r.path === routePath);
  if (!route) return <Navigate to="/404" replace />;
  const location = locations[route.location];
  const imagery = imageryFor(route.path, location.name, location.area);
  const hubPhotos = imagery.tiles;
  const pick = (i: number) => hubPhotos[i % hubPhotos.length].src;
  const heroImg = galleryByLoc[location.slug]?.[0] || pick(0);
  const gallery = galleryByLoc[location.slug] || hubPhotos.slice(0, 6).map((t) => t.src);
  const pricing = getLocationPricing(location.slug);
  const cleanArea = location.area.replace(/[–—]/g, "-");
  const cleanAddress = (location.address ?? "").replace(/[–—]/g, "-");

  const title = `YesssWorks ${location.name} - Plans, Pricing & Tours`;
  const desc = `Real prices for ${location.name}: day pass at ${formatINR(pricing.dayPass.priceInclGst)}, fixed desk from ${formatINR(pricing.fixedDesk.monthlyInclGst)}/mo and cabins from 2 to 40 seats. Book a free walkthrough.`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `YesssWorks ${location.name}`,
    image: heroImg,
    url: `${SITE.domain}${route.path}`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "₹₹",
    sameAs: location.googleBusinessProfileUrl ? [location.googleBusinessProfileUrl] : undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.area,
      addressRegion: location.region,
      addressCountry: "IN",
      postalCode: location.postalCode,
    },
    aggregateRating: location.googleRating ? {
      "@type": "AggregateRating", ratingValue: location.googleRating, reviewCount: location.googleReviews,
    } : undefined,
  };

  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(location.address || `YesssWorks ${location.name}`)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const otherBuildings = buildingLocationSlugs
    .filter((s) => s !== location.slug)
    .map((s) => ({ loc: locations[s], to: `/yesssworks-${buildingPathSuffix[s]}` }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title={title} description={desc} canonical={route.path} keywords={route.keywords} image={heroImg} jsonLd={localBusiness} />
      <Header />

      {/* HERO — full-bleed image, overlay info card */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
          <img src={heroImg} alt={`YesssWorks ${location.name}`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/40 to-ink/80" />
          <div className="container relative h-full flex flex-col justify-end pb-10">
            <Reveal>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/80 mb-2">
                <Link to="/" className="hover:text-primary-foreground">Home</Link> / Locations / <span className="text-primary-foreground">{location.name}</span>
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight max-w-3xl">
                YesssWorks <span className="text-primary-glow">{location.name}</span>
              </h1>
              <p className="mt-3 text-base md:text-lg text-primary-foreground/90 max-w-2xl">
                A workspace your team will actually look forward to. Plug-and-play desks, soundproof cabins and meeting rooms, with honest pricing and zero surprises.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Address + CTA bar */}
        <div className="container -mt-10 relative z-10">
          <div className="rounded-2xl bg-card border border-border shadow-[var(--shadow-elegant)] p-5 md:p-6 grid md:grid-cols-[1fr_auto] gap-5 items-center">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Address</p>
                  <p className="text-sm font-medium">{cleanAddress || cleanArea}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Hours</p>
                  <p className="text-sm font-medium">{location.hours}</p>
                </div>
              </div>
              {location.googleRating && (
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-primary mt-0.5 shrink-0 fill-primary" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Rated</p>
                    <p className="text-sm font-medium">{location.googleRating} ★ on Google ({location.googleReviews}+)</p>
                    {location.googleBusinessProfileUrl && (
                      <a href={location.googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline underline-offset-4">
                        View Google Business Profile
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 flex-wrap md:justify-end">
              <BookTourDialog defaultLocation={route.location} trigger={<Button>Book a tour <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
              <Button asChild variant="outline"><a href={`tel:${SITE.phoneTel}`}><Phone className="mr-1 h-4 w-4" /> Call</a></Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's at this hub — services row */}
      <section className="py-14 md:py-20">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Inside this hub</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">One building, every workspace your team needs</h2>
            <p className="mt-3 text-muted-foreground">From a single hot desk to a 40-seat cabin, switch formats without changing addresses.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {onSiteServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link to={s.to} className="group block rounded-2xl border border-border bg-card p-5 text-center hover-lift hover:border-primary/40">
                  <Building2 className="h-7 w-7 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-sm md:text-base">{s.label}</h3>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip — mosaic */}
      <section className="pb-14 md:pb-20">
        <div className="container">
          <Reveal className="max-w-2xl mb-6">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">A look inside</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Photos from {location.name}</h2>
          </Reveal>
          <div className="grid gap-2 md:grid-cols-2 md:gap-3">
            <div className="aspect-[4/3] overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <Lightbox src={gallery[0]} alt={`YesssWorks ${location.name} photo 1`} />
            </div>
            <div className="grid aspect-[4/3] grid-cols-2 grid-rows-3 gap-2 md:grid-cols-6 md:grid-rows-2 md:gap-3">
              {gallery.slice(1, 6).map((src, i) => (
                <div
                  key={src}
                  className={`min-h-0 overflow-hidden ${
                    i < 3
                      ? "md:col-span-2"
                      : "md:col-span-3"
                  } ${i === 4 ? "col-span-2 rounded-b-2xl md:col-span-3 md:rounded-bl-none md:rounded-br-2xl" : ""} ${i === 2 ? "md:rounded-tr-2xl" : ""}`}
                >
                  <Lightbox src={src} alt={`YesssWorks ${location.name} photo ${i + 2}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANS & PRICING — sourced from workbook */}
      <section id="pricing" className="py-14 md:py-20 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Plans at {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Honest pricing, no fine print</h2>
            <p className="mt-3 text-muted-foreground">All prices below are inclusive of 18% GST. Pay only for what you use, switch plans anytime.</p>
          </Reveal>

          {/* Day pass + 3 universal passes */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border-2 border-border bg-card p-5 flex flex-col hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-2 text-primary mb-2"><Calendar className="h-4 w-4" /><span className="text-xs font-bold uppercase tracking-wider">Walk in for a day</span></div>
              <h3 className="text-lg font-extrabold">Day Pass</h3>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl font-extrabold">{formatINR(pricing.dayPass.priceInclGst)}</span>
                <span className="text-xs text-muted-foreground">/ day</span>
              </div>
              <p className="text-[11px] text-muted-foreground">{formatINR(pricing.dayPass.priceExGst)} + 18% GST</p>
              <ul className="mt-4 space-y-2 text-sm flex-1">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Hot desk, any seat available</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Access {pricing.dayPass.hours}</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Wi-Fi, tea, coffee, water</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Cafeteria & community access</li>
              </ul>
              <BookTourDialog defaultLocation={route.location} trigger={<Button variant="outline" className="mt-4 w-full">Book a day</Button>} />
            </div>
            {pricing.universalPasses.map((p, i) => {
              const highlight = p.name === "Gold";
              return (
                <div key={p.name} className={`relative rounded-2xl border-2 p-5 flex flex-col transition-colors ${highlight ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border hover:border-primary/40"}`}>
                  {highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> Most picked
                    </span>
                  )}
                  <div className="flex items-center gap-2 text-primary mb-2"><Receipt className="h-4 w-4" /><span className="text-xs font-bold uppercase tracking-wider">{p.days} days / month</span></div>
                  <h3 className="text-lg font-extrabold">{p.name} Pass</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold">{formatINR(p.priceInclGst)}</span>
                    <span className="text-xs text-muted-foreground">/ month</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground">{formatINR(p.priceExGst)} + 18% GST</p>
                  <ul className="mt-4 space-y-2 text-sm flex-1">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{p.days} flexible days each month</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Hot desk on any free seat</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Wi-Fi, tea, coffee, cafeteria</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />Community events at this hub</li>
                  </ul>
                  <BookTourDialog defaultLocation={route.location} trigger={<Button variant={highlight ? "default" : "outline"} className="mt-4 w-full">Choose {p.name}</Button>} />
                </div>
              );
            })}
          </div>

          {/* Fixed Desk + Policies + Sales card */}
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            <div className="rounded-2xl border-2 border-primary/30 bg-card p-6 lg:col-span-2">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Your own seat, every day</p>
              <h3 className="text-2xl font-extrabold mt-1">Fixed Desk at {location.name}</h3>
              <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-3">
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Monthly</p>
                  <p className="text-3xl font-extrabold">{formatINR(pricing.fixedDesk.monthlyInclGst)}</p>
                  <p className="text-[11px] text-muted-foreground">{formatINR(pricing.fixedDesk.monthlyExGst)} + 18% GST per seat</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Security deposit</p>
                  <p className="text-base font-bold">{formatINR(pricing.fixedDesk.deposit)}</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Lock-in</p>
                  <p className="text-base font-bold">{pricing.fixedDesk.lockIn}</p>
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">Notice</p>
                  <p className="text-base font-bold">{pricing.fixedDesk.notice}</p>
                </div>
              </div>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-sm">
                {["Reserved desk with lockable storage","4 meeting room credits per seat","50 prints per seat each month","Mail and reception support","Access 9 AM to 9 PM","Pantry, tea, coffee, cafeteria"].map((b) => (
                  <li key={b} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-bold tracking-widest text-primary uppercase">Talk to the team</p>
              <h3 className="text-xl font-extrabold mt-1">{pricing.sales ? pricing.sales.name : "Sales desk"}</h3>
              <p className="text-sm text-muted-foreground mt-1">{pricing.sales?.responseSla ?? "Response within 24 hours on working days"}.</p>
              <div className="mt-4 space-y-2 text-sm">
                <a href={`tel:${(pricing.sales?.phone ?? SITE.phone).replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4 text-primary" />{pricing.sales?.phone ?? SITE.phone}</a>
                {pricing.sales?.whatsapp && (
                  <a href={`https://wa.me/${pricing.sales.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><MessageCircle className="h-4 w-4 text-primary" />WhatsApp</a>
                )}
                <a href={`mailto:${pricing.sales?.email ?? SITE.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" />{pricing.sales?.email ?? SITE.email}</a>
              </div>
              <BookTourDialog defaultLocation={route.location} trigger={<Button className="mt-4 w-full">Book a free tour</Button>} />
            </div>
          </div>
        </div>
      </section>

      {/* PRIVATE CABIN MATRIX */}
      <section className="py-14 md:py-20">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Private cabins, 2 to 40 seats</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Pay per seat, scale without moving</h2>
            <p className="mt-3 text-muted-foreground">A flat {formatINR(9000)} per seat per month at {location.name}, fully furnished, lockable and ready for your team. GST 18% extra.</p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-foreground/80">
                <tr>
                  <th className="text-left p-3 font-bold">Cabin size</th>
                  <th className="text-left p-3 font-bold">Per seat (ex-GST)</th>
                  <th className="text-left p-3 font-bold">Monthly total (ex-GST)</th>
                  <th className="text-left p-3 font-bold">Monthly total (incl. GST)</th>
                  <th className="text-left p-3 font-bold">Security deposit</th>
                  <th className="p-3" />
                </tr>
              </thead>
              <tbody>
                {pricing.cabins.map((c) => (
                  <tr key={c.seats} className="border-t border-border hover:bg-muted/30">
                    <td className="p-3 font-bold">{c.seats}-Seater</td>
                    <td className="p-3">{formatINR(c.perSeatExGst)}</td>
                    <td className="p-3">{formatINR(c.totalExGst)}</td>
                    <td className="p-3 font-bold text-primary">{formatINR(c.totalInclGst)}</td>
                    <td className="p-3 text-muted-foreground">{formatINR(c.totalExGst * 3)}</td>
                    <td className="p-3 text-right">
                      <BookTourDialog defaultLocation={route.location} trigger={<Button size="sm" variant="outline">Enquire</Button>} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">12 month lock-in. 60 day notice period. Car parking available at additional charges.</p>
        </div>
      </section>

      {/* MEETING & CONFERENCE ROOMS */}
      <section className="py-14 md:py-20 bg-sage">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Book by the hour</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Meeting & conference rooms at {location.name}</h2>
            <p className="mt-3 text-muted-foreground">LED TV, HDMI, whiteboard and tea-coffee included. Block a room for a pitch, a workshop or a full-day offsite.</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {pricing.meetingRooms.map((r) => (
              <div key={r.seats} className="rounded-2xl bg-background border border-border p-5 hover:border-primary/40 transition-colors">
                <h4 className="text-xs font-bold tracking-wider text-primary">{r.type}</h4>
                <p className="text-lg font-extrabold mt-1">{r.seats}-Seater</p>
                <div className="mt-3">
                  <p className="text-2xl font-extrabold">{formatINR(r.hourlyInclGst)}</p>
                  <p className="text-[11px] text-muted-foreground">per hour, incl. GST</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">{formatINR(r.hourlyExGst)} + 18% GST</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities ribbon */}
      <section className="py-14 md:py-20">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Amenities at {location.name}</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Walk in, sit down, get to work</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {amenities.map((a) => (
              <div key={a.label} className="rounded-xl bg-card border border-border p-4 flex items-center gap-3 hover:border-primary/40 transition-colors">
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center"><a.icon className="h-5 w-5" /></div>
                <span className="text-sm font-semibold">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + neighbourhood */}
      <section className="py-14 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-8">
          <Reveal className="rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] min-h-[360px]">
            <iframe title={`Map of YesssWorks ${location.name}`} src={mapEmbed} className="w-full h-full min-h-[360px]" style={{ border: 0 }} loading="lazy" allowFullScreen />
          </Reveal>
          <div>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">In the neighbourhood</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Easy to reach, easy to recommend</h2>
            <div className="mt-6 space-y-5">
              {(["metro", "train", "airport", "restaurants", "malls"] as const).map((k) => {
                const items = location.nearby[k];
                if (!items || items.length === 0) return null;
                return (
                  <div key={k}>
                    <h3 className="text-[11px] font-bold tracking-widest text-muted-foreground mb-2">{k}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((it) => (
                        <span key={it} className="text-sm px-3 py-1.5 rounded-full bg-muted text-foreground/80 border border-border">{it}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            {location.googleMapsUrl && (
              <Button asChild variant="outline" className="mt-6"><a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a></Button>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        heading={`Questions about ${location.name}, answered`}
        items={[
          { q: `How much does a day at YesssWorks ${location.name} cost?`, a: `A day pass is ${formatINR(pricing.dayPass.priceInclGst)} including GST (${formatINR(pricing.dayPass.priceExGst)} + 18% GST). You get a hot desk, Wi-Fi, tea, coffee and cafeteria access from 9 AM to 9 PM.` },
          { q: `What does a fixed desk cost at ${location.name}?`, a: `Fixed desks are ${formatINR(pricing.fixedDesk.monthlyInclGst)} per seat per month including GST. Security deposit is ${formatINR(pricing.fixedDesk.deposit)}, lock-in is ${pricing.fixedDesk.lockIn} and notice is ${pricing.fixedDesk.notice}.` },
          { q: `Can my team take a private cabin?`, a: `Yes. Cabins range from 2 to 40 seats at a flat ${formatINR(9000)} per seat per month (GST extra). A 10-seater works out to ${formatINR(106200)} per month including GST.` },
          { q: `How do meeting room bookings work?`, a: `Rooms are billed by the hour, from ${formatINR(826)} for a 4-seater to ${formatINR(2950)} for a 14-seater conference room (all GST included). Fixed desk and cabin members get free monthly credits.` },
          { q: `Is the space open on weekends?`, a: `Operating hours are 9 AM to 9 PM, Monday to Saturday. Members on long-term plans can request extended or 24x7 access on a case-by-case basis.` },
          { q: `Is parking available?`, a: `Yes, dedicated car parking is available on a paid basis (typically ₹5,000 + GST per month). Visitor parking and two-wheeler parking are free subject to availability.` },
        ]}
      />

      {/* Contact split */}
      <section id="enquire" className="py-14 md:py-20 bg-muted/40">
        <div className="container grid lg:grid-cols-2 gap-10">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Visit the hub</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">See {location.name} before you commit</h2>
            <p className="mt-3 text-muted-foreground">Twenty minutes is all we need. No hard sell, just a real walk through the floor, the cabins and the rooms you would actually use.</p>
            <div className="mt-6 space-y-3">
              <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" /> {SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5 text-primary" /> {SITE.email}</a>
            </div>
          </Reveal>
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
            <ContactForm defaultLocation={route.location} defaultMessage={`Hi YesssWorks, I'd like to tour the ${location.name} hub.`} />
          </div>
        </div>
      </section>

      {/* Other YesssWorks hubs */}
      <section className="py-14 md:py-20">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Other YesssWorks hubs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Prefer a different neighbourhood?</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherBuildings.map((b) => (
              <Link key={b.loc.slug} to={b.to} className="group rounded-2xl border border-border bg-card p-5 hover-lift hover:border-primary/40 block">
                <MapPin className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-bold group-hover:text-primary">{b.loc.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{b.loc.area}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuildingLocationTemplate;