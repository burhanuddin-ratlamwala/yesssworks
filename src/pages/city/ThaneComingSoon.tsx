import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Sparkles, Coffee, Users, PhoneCall, Wifi, ShieldCheck, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQSection, FAQItem } from "@/components/site/FAQSection";
import { LocationsCoverage } from "@/components/site/LocationsCoverage";
import { Lightbox } from "@/components/site/Lightbox";
import { SITE } from "@/data/locations";
import { thaneImages, thaneTiles, THANE_PATH } from "@/data/thane-images";

const planned = [
  { icon: Users, title: "Open coworking floors", body: "Long desk rows with dividers and daylight, sized for solo members and teams that keep growing." },
  { icon: ShieldCheck, title: "Private cabins and suites", body: "Lockable rooms for 2 to 30 people, with room to brand the space as your own office." },
  { icon: PhoneCall, title: "Call booths and meeting rooms", body: "Sound treated booths for quick calls, plus bookable rooms for client reviews and interviews." },
  { icon: Coffee, title: "Cafeteria and pantry", body: "A full cafeteria floor and a coffee station, so lunch and chai never mean leaving the building." },
  { icon: Sparkles, title: "Games and recreation zone", body: "Table tennis, foosball and a chess corner for the ten minutes that reset your afternoon." },
  { icon: Wifi, title: "Everyday essentials", body: "Leased line internet, backup power, housekeeping, printing and 24x7 access once we open." },
];

const faqItems: FAQItem[] = [
  { q: "Is YesssWorks Thane open right now?", a: "Not yet. The Thane campus is still under construction. The photos on this page show the design we are building towards, and the team is happy to walk you through floor plans in the meantime." },
  { q: "When will the Thane centre open?", a: "Fit-out work is in progress. Share your details through the enquiry form and we will tell you the current handover timeline and let you know the moment tours begin." },
  { q: "What will a desk in Thane cost?", a: "Rates are not published yet because the inventory is still being finalised. Send us your seat count and preferred start date and we will share a quote as soon as pricing is locked." },
  { q: "Can I reserve seats before it opens?", a: "Yes. Early enquiries get first pick of cabins and window bays, and we keep a waitlist in the order requests come in." },
  { q: "Where can I work until Thane opens?", a: "Our Mahape campus in Navi Mumbai is the closest live option for Thane based teams, and Andheri East and Goregaon East are on the same membership." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.domain}/` },
      { "@type": "ListItem", position: 2, name: "YesssWorks Thane", item: `${SITE.domain}${THANE_PATH}` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

const ThaneComingSoon = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEO
      title="YesssWorks Thane | Coworking Space Opening Soon in Thane"
      description="A new YesssWorks coworking campus is being built in Thane, Maharashtra. See the planned floors, cafeteria and cabins, and enquire now to reserve seats before we open."
      canonical={`${SITE.domain}${THANE_PATH}`}
      keywords={["coworking space in thane", "office space in thane", "yesssworks thane", "shared office space thane"]}
      image={thaneImages.cafeteria01}
      jsonLd={jsonLd}
    />
    <Header />

    <section className="relative bg-sage overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
      <div className="container relative grid lg:grid-cols-2 gap-0 items-stretch">
        <div className="py-10 lg:py-16 lg:pr-12">
          <Reveal as="div" className="text-xs uppercase tracking-wider text-foreground/70 mb-3">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-1">/</span>
              <span className="text-foreground font-semibold">YesssWorks Thane</span>
            </nav>
          </Reveal>
          <Reveal delay={80}>
            <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-primary/50 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Under construction
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              A New YesssWorks Campus Is Taking Shape in Thane
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">
              Thane has quietly become one of the strongest office markets in the region, and our next campus is being built for the teams working there. Fit-out is underway, so there is no price list yet. Tell us what you need and we will keep you first in line.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">
                <a href="#enquire">Enquire now <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/yesssworks-mahape-aurum-q6">Visit our Navi Mumbai campus</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/70">
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Thane, Maharashtra</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Opening date on request</span>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[220px] lg:min-h-[460px]">
          <Reveal variant="scale" className="absolute inset-0">
            <img src={thaneImages.cafeteria01} alt="Planned cafeteria and breakout floor at YesssWorks Thane" className="w-full h-full object-cover" width={1200} height={800} />
          </Reveal>
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">The design so far</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Inside the Thane Centre We Are Building</h2>
          <p className="mt-3 text-muted-foreground">
            These are the spaces going into the Thane floor plate. Tap any photo to see it full screen.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {thaneTiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 60} variant="up">
              <figure className="group rounded-2xl overflow-hidden border border-border bg-card hover-lift">
                <Lightbox src={tile.src} alt={`${tile.label} at YesssWorks Thane`} imgClassName="w-full h-52 object-cover" />
                <figcaption className="p-4 text-sm font-semibold">{tile.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16 bg-muted/40">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">What is planned</p>
          <h3 className="text-2xl md:text-3xl font-extrabold mt-2">Six Things Thane Members Will Get on Day One</h3>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {planned.map((p, i) => (
            <Reveal key={p.title} delay={i * 60} variant="up">
              <div className="h-full rounded-2xl border border-border bg-card p-5 flex items-start gap-4 hover-lift">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-12 md:py-16 bg-background">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Why Thane</p>
          <h3 className="text-2xl md:text-3xl font-extrabold mt-2">A Short Commute for Teams Spread Across the Region</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Plenty of people living in Thane, Ghodbunder and Kalyan still travel south every morning. A campus here gives those teams a serious office without the long ride, and gives Mumbai based companies a second base that their Thane staff can reach in minutes.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Until the doors open, our Mahape campus in Navi Mumbai is the closest live YesssWorks address, and your membership will carry over to Thane once it is ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/coworking-space-in-navi-mumbai">Coworking in Navi Mumbai</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/coworking-space-in-mumbai">Coworking in Mumbai</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal variant="scale">
          <Lightbox
            src={thaneImages.gamesZone}
            alt="Games and recreation zone planned at YesssWorks Thane"
            imgClassName="w-full rounded-2xl border border-border object-cover"
          />
        </Reveal>
      </div>
    </section>

    <FAQSection heading="Thane Questions We Hear Most" items={faqItems} className="bg-muted/40" />

    <LocationsCoverage />

    <section id="enquire" className="py-12 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-10">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Register Your Interest in YesssWorks Thane</h2>
          <p className="text-muted-foreground mt-3 max-w-md">
            No pricing is published while the centre is being built. Send us your seat count and start date, and our team will come back with the opening timeline and a quote the moment rates are confirmed.
          </p>
          <div className="mt-6 flex items-center gap-3 text-foreground/80 text-sm">
            <MapPin className="h-4 w-4 text-primary shrink-0" /> Thane, Maharashtra · opening soon
          </div>
        </Reveal>
        <Reveal variant="scale" className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
          <ContactForm defaultMessage="I would like to know more about YesssWorks Thane, including the opening date and seat availability." />
        </Reveal>
      </div>
    </section>

    <Footer />
  </div>
);

export default ThaneComingSoon;
