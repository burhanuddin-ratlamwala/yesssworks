import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, Mail, Menu, X, Clock, IndianRupee, Building2, Users, Car, TrainFront, Bus,
  Wifi, Snowflake, BatteryCharging, Sparkles, Printer, Presentation, Coffee, Lock, Inbox, Sofa,
  PhoneCall, ParkingCircle, ShieldCheck, UserCheck, MapPin, Star, Check, CalendarCheck, DoorOpen, KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/site/Footer";
import { ClientLogos } from "@/components/site/ClientLogos";
import { FAQSection, FAQItem } from "@/components/site/FAQSection";
import { PhotoStrip } from "@/components/site/PhotoStrip";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { toast } from "@/hooks/use-toast";
import { SITE } from "@/data/locations";
import { aurumMahape } from "@/data/aurum-mahape-images";
import logo from "@/assets/yesssworks-logo-transparent.png";

const A = aurumMahape;
const waHref = `https://wa.me/${SITE.phoneTel.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi YesssWorks, I am in Thane and would like to visit your Mahape centre.",
)}`;
const callHref = `tel:${SITE.phoneTel}`;
const mapEmbed =
  "https://www.google.com/maps?q=Aurum%20Q6%2C%20Thane-Belapur%20Road%2C%20Mahape%2C%20Navi%20Mumbai%20400710&output=embed";
const directionsHref =
  "https://www.google.com/maps/dir/Thane+Station/Aurum+Q6,+Thane-Belapur+Road,+Mahape,+Navi+Mumbai";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
    <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.58-1.72a12.76 12.76 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0 0 16.003 3.2zm0 23.32h-.01a10.58 10.58 0 0 1-5.39-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 1 1 8.9 4.89zm5.82-7.93c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37z" />
  </svg>
);

const navLinks = [
  { label: "Locations", id: "locations" },
  { label: "Plans", id: "plans" },
  { label: "Amenities", id: "amenities" },
  { label: "Photo tour", id: "tour" },
  { label: "Contact", id: "visit" },
];

const usps = [
  {
    icon: Clock,
    title: "15 minute commute",
    text: "Thane Station to YesssWorks Mahape via Thane-Belapur Road, faster than most office commutes inside Thane itself.",
  },
  {
    icon: IndianRupee,
    title: "Save 30 to 40 percent vs BKC or Powai",
    text: "Premium Grade-A workspace at Navi Mumbai pricing. Hot desks from Rs 1,500 a month, a fraction of BKC or Powai rates.",
  },
  {
    icon: Building2,
    title: "IT park business address",
    text: "Work from Aurum Q6, Millennium Business Park. A registered address your clients and investors take seriously, GST registration ready.",
  },
  {
    icon: Users,
    title: "Enterprise neighbours",
    text: "Join 600+ professionals from IT, BFSI, consulting and startup teams. Network over coffee, not commute time.",
  },
];

const routes = [
  {
    icon: Car,
    title: "By car or cab",
    text: "15 minutes via Thane-Belapur Road. The Ghodbunder Road route also works for Kasarvadavli, Manpada and Hiranandani Estate. Ample parking at Aurum Q6.",
  },
  {
    icon: TrainFront,
    title: "By train",
    text: "Thane Station to Airoli or Rabale on the Trans-Harbour Line, about 10 minutes, then a short auto ride to Aurum Q6.",
  },
  {
    icon: Bus,
    title: "By bus",
    text: "NMMT and TMT buses run frequently on Thane-Belapur Road. Get off near Millennium Business Park, Mahape. Aurum Q6 is a 2 minute walk.",
  },
];

const plans = [
  {
    name: "Day pass",
    price: "Rs 500",
    unit: "per day",
    desc: "Try before you commit. Walk in for a day with full access to the floor, WiFi, pantry and meeting rooms.",
    tag: "Try us",
    cta: "Book a day pass",
    features: ["Full floor access", "WiFi and pantry", "No commitment"],
  },
  {
    name: "Hot desk",
    price: "Rs 1,500",
    unit: "per month",
    desc: "Flexible open seating. Sit anywhere on the coworking floor, any day. Ideal for freelancers and remote workers.",
    tag: "Most popular",
    cta: "Get started",
    features: ["Open seating", "24/7 keycard access", "Community events"],
  },
  {
    name: "Dedicated desk",
    price: "Rs 3,500",
    unit: "per month",
    desc: "Your own fixed desk. Leave your setup overnight. Storage included.",
    cta: "Get started",
    features: ["Fixed desk", "Personal locker", "Printing access"],
  },
  {
    name: "Private cabin",
    price: "Rs 7,000",
    unit: "per month",
    desc: "Lockable furnished cabin for focused individuals or small teams of 2 to 6. Your own door, your own rules.",
    cta: "Get started",
    features: ["Lockable cabin", "Seats 2 to 6", "Branding on the door"],
  },
  {
    name: "Enterprise suite",
    price: "Rs 9,000",
    unit: "per month",
    desc: "Larger private offices for growing teams. Fully customisable layout, branding ready.",
    tag: "Talk to us",
    cta: "Talk to us",
    features: ["Custom layout", "Dedicated support", "Scales with the team"],
  },
];

const amenities = [
  { icon: Wifi, label: "High speed WiFi", note: "Redundant lines, 100+ Mbps" },
  { icon: Clock, label: "24/7 access", note: "Keycard entry, any hour" },
  { icon: Snowflake, label: "Air conditioning", note: "Centrally cooled floors" },
  { icon: BatteryCharging, label: "Power backup", note: "Full DG backup" },
  { icon: Sparkles, label: "Housekeeping", note: "Daily cleaning" },
  { icon: Printer, label: "Printing and scanning", note: "Shared printer per floor" },
  { icon: Presentation, label: "Meeting rooms", note: "Bookable by the hour" },
  { icon: Users, label: "Conference room", note: "10 to 20 seater" },
  { icon: Coffee, label: "Cafeteria and pantry", note: "Tea, coffee, microwave" },
  { icon: Lock, label: "Locker storage", note: "Dedicated desks and above" },
  { icon: Inbox, label: "Reception and mail", note: "Courier handling" },
  { icon: Sofa, label: "Breakout zones", note: "Informal seating" },
  { icon: PhoneCall, label: "Phone booths", note: "Soundproofed pods" },
  { icon: ParkingCircle, label: "Parking", note: "Two and four wheeler" },
  { icon: ShieldCheck, label: "CCTV security", note: "24/7 surveillance" },
  { icon: UserCheck, label: "Visitor management", note: "Digital check in" },
];

const steps = [
  { icon: CalendarCheck, title: "Book a tour", text: "Fill the form or call us. We schedule a walkthrough at a time that works for you, mornings, afternoons or after work." },
  { icon: DoorOpen, title: "Visit and pick your space", text: "Walk the floor, try a desk, check the meeting rooms, meet the community. Our team helps you match plan to budget." },
  { icon: KeyRound, title: "Move in", text: "Sign up, collect your access card and start working. Same day move in on desks, cabins and suites set up within 48 hours." },
];

const galleryTiles = [
  { src: A.bigFloorDesks, label: "Open coworking floor" },
  { src: A.cabinCorridor, label: "Private cabin corridor" },
  { src: A.conferenceOrange, label: "Conference room" },
  { src: A.orangeMeetingRoom, label: "Six seat meeting room" },
  { src: A.rooftopCafeOne, label: "Rooftop cafe and breakout" },
  { src: A.greenLoungeOne, label: "Lounge seating" },
  { src: A.reception, label: "Reception and waiting area" },
  { src: A.facade, label: "Aurum Q6 building facade" },
  { src: A.coffeeStation, label: "Pantry coffee station" },
  { src: A.focusBooths, label: "Focus booths and call pods" },
  { src: A.windowDesks, label: "Window side desk rows" },
  { src: A.boardroomGlass, label: "Glass boardroom" },
];

const tourThumbs = [A.loungeOne, A.benchDesks, A.conferencePurple, A.rooftopCafeTwo, A.signageEntrance];

const reasons = [
  {
    title: "Grade-A infrastructure at startup friendly pricing",
    img: A.towerExterior,
    text: "Most coworking spaces in Thane run out of converted residential or small commercial buildings with low ceilings, shared lifts and patchy power. YesssWorks gives you IT park grade infrastructure inside Aurum Q6: high speed lifts, DG backup, centralised air conditioning and a professional lobby, at pricing that starts below a basic shared desk in Majiwada or Ghodbunder.",
  },
  {
    title: "A community, not just a desk",
    img: A.rooftopCafeTwo,
    text: "A desk is easy to find. A workspace full of people building things is not. Our 600+ members include product teams, BFSI back offices, IT services firms, solo consultants and early stage startups. The person at the next desk might become your vendor, your client or your co-founder.",
  },
  {
    title: "Flexibility that matches how you work",
    img: A.blueDeskOne,
    text: "Start with a Rs 500 day pass to test the commute. Move to a hot desk when you are ready. Upgrade to a cabin when the team grows, downsize if things slow down. No lock-in contracts and no six month notice periods. Your workspace scales with you.",
  },
];

const testimonials = [
  {
    quote:
      "I was looking for coworking in Thane but nothing felt professional enough for client meetings. A friend suggested YesssWorks Mahape and I was surprised it is only 15 minutes from my place in Ghodbunder. The space is leagues ahead of anything in Thane and the pricing is actually better.",
    name: "Rohit K.",
    role: "Product consultant, Ghodbunder",
  },
  {
    quote:
      "We moved our 8 person team from a rented office in Thane to a private cabin here. The infra is incomparable, proper air conditioning, backup and fast WiFi. We are spending less than our old rent and the team loves the cafeteria.",
    name: "Sneha M.",
    role: "Operations lead, IT services firm",
  },
  {
    quote:
      "As a freelance consultant I needed a professional address and a quiet workspace. YesssWorks ticked both boxes. The commute from Thane is 20 minutes by cab and a business address at Aurum Q6 makes a real difference with clients.",
    name: "Amit D.",
    role: "Independent finance consultant",
  },
];

const otherLocations = [
  {
    to: "/yesssworks-andheri-at",
    img: A.benchDesks,
    name: "Andheri East",
    text: "Three centres in the Andheri East IT corridor: Ackruti Softech Park, AT by AGM Vijaylaxmi and Pinnacle Business Park.",
  },
  {
    to: "/yesssworks-goregaon-271-business-park",
    img: A.bigTeamFloor,
    name: "Goregaon East",
    text: "Inside 271 Business Park. Built for growth stage teams that want BKC level infrastructure without BKC rent.",
  },
  {
    to: "/yesssworks-mahape-aurum-q6",
    img: A.facade,
    name: "Mahape, Navi Mumbai",
    text: "Aurum Q6 and Millennium Business Park. The go to workspace for Navi Mumbai IT, BFSI and enterprise satellite teams.",
  },
];

const spaces = [
  { icon: Users, name: "Hot desk", price: "Rs 1,500/mo", line: "Open seating. Sit anywhere, any day." },
  { icon: Building2, name: "Dedicated desk", price: "Rs 3,500/mo", line: "Your fixed desk. Leave your setup." },
  { icon: DoorOpen, name: "Private cabin", price: "Rs 7,000/mo", line: "Lockable cabin for 1 to 6 people." },
  { icon: ShieldCheck, name: "Enterprise suite", price: "Rs 9,000/mo", line: "Private office for larger teams." },
  { icon: Presentation, name: "Meeting room", price: "Rs 500/hr", line: "AV equipped, seats 4 to 8." },
];

const comparison: [string, string, string][] = [
  ["Hot desk", "Rs 1,500 per month", "Rs 8,000+ per month"],
  ["Private cabin (4 seats)", "Rs 7,000 per month", "Rs 40,000+ per month"],
  ["Lock-in period", "None, month to month", "3 to 12 months"],
  ["Day pass", "Rs 500", "Rs 750 to 1,500"],
  ["24/7 access", "Included", "Select plans only"],
  ["GST ready address", "Included", "Add on"],
  ["Parking", "Free building parking", "Limited or paid"],
  ["Distance from Thane", "About 15 minutes, Mahape", "30 to 45 minutes, Andheri or BKC"],
];

const faqs: FAQItem[] = [
  { q: "Does YesssWorks have a coworking space in Thane?", a: "We do not have a centre inside Thane city. Our nearest location is Aurum Q6, Mahape, roughly 15 minutes from Thane Station via Thane-Belapur Road. Many members commute from Thane daily and find it quicker than reaching most offices inside Thane." },
  { q: "How far is YesssWorks Mahape from Thane?", a: "About 12 km by road, a 15 to 20 minute drive on Thane-Belapur Road. By train, take the Trans-Harbour Line from Thane to Airoli or Rabale, about 10 minutes, then a short auto ride to Aurum Q6." },
  { q: "What is the cheapest coworking plan near Thane?", a: "The hot desk starts at Rs 1,500 a month and includes flexible seating, WiFi, air conditioning, power backup and common area access. To try the space first, the day pass is Rs 500 for a full day." },
  { q: "Can I book a meeting room without a monthly membership?", a: "Yes. Meeting rooms and conference rooms are available by the hour for non members too. They are AV equipped and suit client presentations, interviews and team offsites. Call us for availability and rates." },
  { q: "Is 24/7 access available?", a: "Yes. Every monthly member from hot desk upwards gets 24/7 keycard access, so early mornings, late nights and weekends are all covered." },
  { q: "Do you have parking at the Mahape centre?", a: "Yes. Aurum Q6 has two wheeler and four wheeler parking inside the complex for members and visitors." },
  { q: "Can I visit before signing up?", a: "Of course. We recommend a tour before you commit. Fill the form on this page or call us to fix a slot. Walk-ins are welcome and our team will show you around." },
  { q: "Is there a lock-in or long term contract?", a: "No lock-in. Hot desks and dedicated desks are month to month. Private cabins carry a minimum three month term, so check current terms with our team. You can upgrade, downgrade or exit with 30 days notice." },
  { q: "Can I use other YesssWorks locations with my membership?", a: "Yes. Your membership covers Mahape, Andheri East and Goregaon East, so you can work from whichever centre suits your day." },
  { q: "What if I need a meeting room for a client presentation?", a: "Meeting and conference rooms are bookable by the hour with a display, whiteboard and video conferencing setup. Members get priority booking and better rates." },
];

const lookingFor = ["Hot desk", "Dedicated desk", "Private cabin", "Enterprise suite", "Meeting room", "Day pass"];
const heardFrom = ["Google search", "Google Maps", "Referral from a friend", "Instagram or LinkedIn", "Walk-in", "Other"];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const LeadForm = ({ compact = false }: { compact?: boolean }) => {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    if (name.length < 2 || !/^[+\d][\d\s-]{7,15}$/.test(phone)) {
      toast({ title: "Please check your details", description: "Add your name and a valid phone number.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
    toast({ title: "Tour requested", description: `Thanks ${name}, our team will call you to confirm your visit to Aurum Q6, Mahape.` });
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-1.5">
        <Label htmlFor={`n-${compact}`}>Full name</Label>
        <Input id={`n-${compact}`} name="name" required placeholder="Your name" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor={`p-${compact}`}>Phone number</Label>
        <Input id={`p-${compact}`} name="phone" type="tel" required placeholder="+91 9XXXXXXXXX" />
      </div>
      {!compact && (
        <>
          <div className="grid gap-1.5">
            <Label htmlFor="e-hero">Email</Label>
            <Input id="e-hero" name="email" type="email" required placeholder="you@company.com" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="lf-hero">I am looking for</Label>
            <select id="lf-hero" name="looking_for" defaultValue="Hot desk" className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              {lookingFor.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="hh-hero">How did you hear about us?</Label>
            <select id="hh-hero" name="heard_from" defaultValue="Google search" className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              {heardFrom.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </>
      )}
      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        {submitting ? "Sending..." : "Book my free tour"} <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </form>
  );
};

const LpNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" aria-label="YesssWorks home" className="shrink-0">
          <img src={logo} alt="YesssWorks logo" className="h-9 md:h-11 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {navLinks.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-primary transition-colors">{n.label}</button>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={callHref} className="text-sm font-bold hover:text-primary transition-colors">{SITE.phone}</a>
          <Button size="sm" onClick={() => scrollTo("lead")}>Book a free tour</Button>
        </div>
        <button className="lg:hidden md:hidden h-10 w-10 grid place-items-center" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-3 grid gap-1">
            {navLinks.map((n) => (
              <button key={n.id} onClick={() => { setOpen(false); scrollTo(n.id); }} className="text-left py-2 text-sm font-semibold hover:text-primary">
                {n.label}
              </button>
            ))}
            <a href={callHref} className="py-2 text-sm font-semibold hover:text-primary">Call {SITE.phone}</a>
          </div>
        </div>
      )}
    </header>
  );
};

const MobileBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur p-3 flex items-center gap-2">
      <Button className="flex-1" onClick={() => scrollTo("lead")}>Book a free tour</Button>
      <a href={callHref} aria-label="Call YesssWorks" className="h-11 w-11 grid place-items-center rounded-md bg-primary/10 text-primary">
        <Phone className="h-5 w-5" />
      </a>
      <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="h-11 w-11 grid place-items-center rounded-md bg-[#25D366] text-white">
        <WhatsAppIcon />
      </a>
    </div>
  );
};

const SectionHead = ({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) => (
  <Reveal className="text-center max-w-3xl mx-auto mb-10">
    {eyebrow && <p className="text-xs font-bold tracking-widest text-primary uppercase">{eyebrow}</p>}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-2">{title}</h2>
    {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
  </Reveal>
);

const ThaneLanding = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "YesssWorks Mahape, Aurum Q6",
      description: "Coworking space serving Thane professionals from Aurum Q6, Mahape, Navi Mumbai, 15 minutes from Thane Station.",
      url: `${SITE.domain}/coworking-space-in-thane`,
      telephone: SITE.phoneTel,
      email: SITE.email,
      priceRange: "Rs 500 to Rs 9,000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Aurum Q6, Thane-Belapur Road, Mahape",
        addressLocality: "Navi Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400710",
        addressCountry: "IN",
      },
      areaServed: ["Thane", "Airoli", "Ghansoli", "Navi Mumbai"],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.6", reviewCount: "120" },
      openingHours: "Mo-Sa 09:00-20:00",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Coworking Space in Thane | Hot Desks from Rs 1,500"
        description="Looking for coworking space in Thane? YesssWorks Mahape is 15 min from Thane Station. Hot desks, cabins and suites from Rs 1,500 a month. Book a free tour."
        canonical="/coworking-space-in-thane"
        keywords={["coworking space in thane", "coworking near thane station", "shared office thane", "day pass coworking thane", "wework alternative thane"]}
        image={A.facade}
        jsonLd={jsonLd}
      />
      <LpNav />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-sage">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" aria-hidden />
        <div className="container py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                <Clock className="h-3.5 w-3.5" /> Just 15 minutes from Thane Station
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Coworking space in <span className="text-primary">Thane</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">
                Why settle for a cramped Thane office when you can work from the best coworking space in Navi Mumbai, just
                15 minutes away? YesssWorks Mahape sits inside Aurum Q6 on Thane-Belapur Road, with hot desks from
                Rs 1,500 a month, private cabins, enterprise suites and a 600 member professional community. No lock-in.
                Same day move in.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 grid grid-cols-3 gap-3 max-w-lg">
                {[["600+", "Members"], ["4.6 star", "Google rating"], ["3", "Locations across Mumbai"]].map(([a, b]) => (
                  <div key={b} className="rounded-lg bg-background/80 border border-border p-3 text-center">
                    <p className="text-lg font-extrabold text-primary">{a}</p>
                    <p className="text-xs text-muted-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal id="lead" variant="scale" className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-xl font-extrabold">Book a free tour</h2>
            <p className="text-sm text-muted-foreground mt-1">We confirm your slot within one working hour.</p>
            <div className="mt-4"><LeadForm /></div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a href={callHref} className="inline-flex items-center gap-2 font-semibold hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> Or call us: {SITE.phone}
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-[#128C4A] hover:opacity-80">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Client logos */}
      <section className="bg-muted/40 py-10">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted-foreground">
            Trusted by 600+ professionals across Mumbai and Navi Mumbai
          </p>
        </div>
        <ClientLogos />
      </section>

      {/* 3. USP */}
      <section className="py-14 md:py-20">
        <div className="container">
          <SectionHead eyebrow="Why Mahape works" title="Built for Thane's IT professionals, consultants and growing teams" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {usps.map((u, i) => (
              <Reveal key={u.title} delay={i * 70} className="h-full">
                <article className="h-full rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] hover:border-primary/50 transition-colors">
                  <span className="h-11 w-11 grid place-items-center rounded-lg bg-primary/10 text-primary"><u.icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-bold text-lg">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Getting here */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container">
          <SectionHead eyebrow="Getting here" title="Thane to YesssWorks Mahape, closer than you think" />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Reveal variant="scale" className="rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                title="Map of YesssWorks Mahape, Aurum Q6"
                src={mapEmbed}
                loading="lazy"
                className="w-full h-[320px] lg:h-[420px] border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
            <div className="grid gap-4">
              {routes.map((r, i) => (
                <Reveal key={r.title} delay={i * 70}>
                  <article className="rounded-lg border border-border bg-card p-5">
                    <h3 className="flex items-center gap-2 font-bold"><r.icon className="h-5 w-5 text-primary" /> {r.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                  </article>
                </Reveal>
              ))}
              <div className="rounded-lg bg-primary text-primary-foreground p-4 text-center font-semibold">
                Most of our Thane members reach here in under 20 minutes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Plans */}
      <section id="plans" className="py-14 md:py-20 scroll-mt-20">
        <div className="container">
          <SectionHead eyebrow="Pricing" title="Plans and pricing" sub="Transparent pricing. No lock-in. Start with a day pass or commit monthly." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 60} className="h-full">
                <article className="h-full flex flex-col rounded-lg border border-border border-t-4 border-t-primary bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold">{p.name}</h3>
                    {p.tag && <span className="rounded-full bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 whitespace-nowrap">{p.tag}</span>}
                  </div>
                  <p className="mt-3 text-2xl font-extrabold text-primary leading-none">{p.price}</p>
                  <p className="text-xs text-muted-foreground">{p.unit}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}</li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-1 mt-auto">
                    <BookTourDialog defaultLocation="mahape-aurum-q6" trigger={<Button className="w-full" size="sm">{p.cta}</Button>} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            All plans include high speed WiFi, air conditioning, power backup, housekeeping and access to common areas. GST extra. Meeting room hours available as an add on.
          </p>
        </div>
      </section>

      {/* 6. Photo tour */}
      <section id="tour" className="py-14 md:py-20 bg-muted/40 scroll-mt-20">
        <div className="container">
          <SectionHead eyebrow="Walk the floor" title="Take a tour of YesssWorks Mahape" sub="Tap any photo to open it full screen. Every picture here is shot inside Aurum Q6." />
          <Reveal variant="scale" className="rounded-xl overflow-hidden border border-border bg-card">
            <div className="aspect-video">
              <Lightbox src={A.bigFloorDesks} alt="Open coworking floor at YesssWorks Mahape, Aurum Q6" loading="lazy" />
            </div>
          </Reveal>
          <div className="mt-4 grid grid-cols-5 gap-3">
            {tourThumbs.map((src, i) => (
              <div key={src} className="aspect-[4/3] rounded-lg overflow-hidden border border-border bg-card">
                <Lightbox src={src} alt={`YesssWorks Mahape workspace view ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About the space */}
      <section className="py-14 md:py-20">
        <div className="container grid lg:grid-cols-2 gap-10 items-center">
          <Reveal variant="scale" className="rounded-lg overflow-hidden border border-border">
            <div className="aspect-[4/3]"><Lightbox src={A.windowDesks} alt="Coworking floor with window side desks at YesssWorks Mahape" loading="lazy" /></div>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold">Navi Mumbai's most loved coworking space</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Spread across two campuses in Mahape, Aurum Q6 and Millennium Business Park, YesssWorks is the workspace
              Thane professionals switch to when they outgrow cramped local offices. The floor is built for deep work and
              collaboration in equal measure: quiet zones for heads down coding, open desks for teams that feed off energy,
              private cabins for calls and client meetings, and breakout areas for the conversations that happen between tasks.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {["10,000+ sq ft of professionally designed workspace", "Dedicated floors with natural light", "Meeting and conference rooms bookable by the hour", "Cafeteria, pantry and breakout lounge", "Reception, mail handling and visitor management"].map((f) => (
                <li key={f} className="flex items-start gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="container grid lg:grid-cols-2 gap-10 items-center mt-12">
          <Reveal className="lg:order-1">
            <h3 className="text-2xl md:text-3xl font-extrabold">About Aurum Q6 and Mahape</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Aurum Q6 sits on Thane-Belapur Road in the heart of the Mahape IT corridor, home to companies like Wipro,
              Reliance, L&amp;T and Siemens. The building offers Grade-A commercial infrastructure: high speed lifts, 24/7
              security, power backup and plenty of member and visitor parking. The IT park ecosystem around it means
              restaurants, banks and daily services are all within walking distance.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              For Thane residents this is the shortest commute to a premium coworking address. Thane-Belapur Road is the
              most direct arterial route, with no city traffic to navigate and no highway tolls.
            </p>
          </Reveal>
          <Reveal variant="scale" className="lg:order-2 rounded-lg overflow-hidden border border-border">
            <div className="aspect-[4/3]"><Lightbox src={A.signageEntrance} alt="Aurum Q6 building entrance with YesssWorks signage, Mahape" loading="lazy" /></div>
          </Reveal>
        </div>
      </section>

      {/* 8. How it works */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container">
          <SectionHead eyebrow="Process" title="From enquiry to move in, 3 simple steps" />
          <div className="grid md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <article className="h-full rounded-lg border border-border bg-card p-6 text-center">
                  <span className="mx-auto h-12 w-12 grid place-items-center rounded-full bg-primary text-primary-foreground font-extrabold">{i + 1}</span>
                  <h3 className="mt-4 font-bold flex items-center justify-center gap-2"><s.icon className="h-4 w-4 text-primary" /> {s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Gallery */}
      <PhotoStrip
        className="bg-background"
        columns={4}
        place="YesssWorks Mahape, Aurum Q6"
        eyebrow="Gallery"
        heading="Visit our gallery"
        blurb="Real photographs from the Mahape floors, cabins, meeting rooms and cafe."
        tiles={galleryTiles}
      />

      {/* 10. Amenities */}
      <section id="amenities" className="py-14 md:py-20 bg-muted/40 scroll-mt-20">
        <div className="container">
          <SectionHead eyebrow="Included" title="Amenities included with every plan" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {amenities.map((a, i) => (
              <Reveal key={a.label} delay={i * 30}>
                <div className="h-full rounded-lg border border-border bg-card p-4">
                  <a.icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 font-semibold text-sm">{a.label}</p>
                  <p className="text-xs text-muted-foreground">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Why us over Thane options */}
      <section className="py-14 md:py-20">
        <div className="container">
          <SectionHead eyebrow="Comparison" title="Why Thane professionals pick YesssWorks over local options" />
          <div className="grid gap-12">
            {reasons.map((r, i) => (
              <div key={r.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <Reveal variant="scale" className={`rounded-lg overflow-hidden border border-border ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[16/10]"><Lightbox src={r.img} alt={`${r.title} at YesssWorks Mahape`} loading="lazy" /></div>
                </Reveal>
                <Reveal className={i % 2 ? "lg:order-1" : ""}>
                  <h3 className="text-xl md:text-2xl font-extrabold">{r.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{r.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-lg font-bold">Over half of our Mahape members commute from Thane, Airoli and Ghansoli, so you will be in good company.</p>
          </div>
        </div>
      </section>

      {/* 12. Testimonials */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container">
          <SectionHead eyebrow="Members" title="What our members say" />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <article className="h-full rounded-lg border border-border bg-card p-6 flex flex-col">
                  <div className="flex gap-0.5 text-primary">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">{t.name.charAt(0)}</span>
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Other locations */}
      <section id="locations" className="py-14 md:py-20 scroll-mt-20">
        <div className="container">
          <SectionHead eyebrow="Network" title="YesssWorks across Mumbai" />
          <div className="grid md:grid-cols-3 gap-5">
            {otherLocations.map((l, i) => (
              <Reveal key={l.name} delay={i * 80}>
                <article className="h-full rounded-lg overflow-hidden border border-border bg-card flex flex-col">
                  <div className="aspect-[16/9]">
                    <img src={l.img} alt={`YesssWorks ${l.name} coworking space`} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold">{l.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{l.text}</p>
                    <Link to={l.to} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                      View details <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Your membership works across all YesssWorks locations. Start in Mahape and drop into Andheri or Goregaon whenever you need to.
          </p>
        </div>
      </section>

      {/* 14. CTA banner with short form */}
      <section className="bg-primary text-primary-foreground py-14">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Visit Aurum Q6, Mahape, just 15 minutes from Thane</h2>
            <p className="mt-3 opacity-90">Book a free tour and see the space for yourself. Walk-ins are welcome.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => scrollTo("lead")}>
                Book a free tour
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={callHref}><Phone className="mr-2 h-4 w-4" /> Call us: {SITE.phone}</a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-background text-foreground p-6 border border-border">
            <h3 className="font-bold">Prefer a callback?</h3>
            <p className="text-sm text-muted-foreground mt-1">Leave your name and number, we will call you back.</p>
            <div className="mt-4"><LeadForm compact /></div>
          </div>
        </div>
      </section>

      {/* 15. Pick your space */}
      <section className="py-14 md:py-20">
        <div className="container">
          <SectionHead eyebrow="Workspaces" title="Pick your ideal space" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {spaces.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <article className="h-full rounded-lg border border-border bg-card p-5 flex flex-col">
                  <s.icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-3 font-bold">{s.name}</h3>
                  <p className="text-primary font-extrabold text-lg mt-1">{s.price}</p>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{s.line}</p>
                  <div className="mt-4">
                    <BookTourDialog defaultLocation="mahape-aurum-q6" trigger={<Button size="sm" variant="outline" className="w-full">Enquire</Button>} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Visit us */}
      <section id="visit" className="py-14 md:py-20 bg-muted/40 scroll-mt-20">
        <div className="container">
          <SectionHead eyebrow="Find us" title="Visit YesssWorks Mahape" />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Reveal variant="scale" className="rounded-lg overflow-hidden border border-border bg-card">
              <iframe title="YesssWorks Mahape location map" src={mapEmbed} loading="lazy" className="w-full h-[320px] lg:h-[400px] border-0" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
            <Reveal className="rounded-lg border border-border bg-card p-6">
              <p className="flex items-start gap-2 font-semibold"><MapPin className="h-5 w-5 text-primary shrink-0" /> YesssWorks, Aurum Q6, Thane-Belapur Road, Mahape, Navi Mumbai, Maharashtra 400710</p>
              <dl className="mt-5 grid gap-3 text-sm">
                <div><dt className="font-semibold">Hours</dt><dd className="text-muted-foreground">Monday to Saturday, 9:00 AM to 8:00 PM. 24/7 access for members.</dd></div>
                <div><dt className="font-semibold">Phone</dt><dd><a href={callHref} className="text-primary hover:underline">{SITE.phone}</a></dd></div>
                <div><dt className="font-semibold">Email</dt><dd><a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a></dd></div>
                <div><dt className="font-semibold">WhatsApp</dt><dd><a href={waHref} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chat with our team</a></dd></div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild><a href={directionsHref} target="_blank" rel="noopener noreferrer">Get directions from Thane <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
                <Button asChild variant="outline"><a href={`mailto:${SITE.email}`}><Mail className="mr-2 h-4 w-4" /> Email us</a></Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 17. FAQ */}
      <FAQSection heading="Coworking in Thane, answered" items={faqs} className="bg-background" />

      {/* 18. Comparison table */}
      <section className="py-14 md:py-20 bg-muted/40">
        <div className="container">
          <SectionHead eyebrow="Side by side" title="YesssWorks vs WeWork, why Thane professionals switch" />
          <div className="overflow-x-auto rounded-lg border border-border bg-card">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-primary/10">
                <tr>
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-left p-4 font-bold text-primary">YesssWorks Mahape</th>
                  <th className="text-left p-4 font-bold">WeWork (nearest to Thane)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([f, y, w]) => (
                  <tr key={f} className="border-t border-border">
                    <td className="p-4 font-semibold">{f}</td>
                    <td className="p-4 text-primary font-semibold">{y}</td>
                    <td className="p-4 text-muted-foreground">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-3xl">
            Looking for a WeWork alternative near Thane? YesssWorks gives you the same professional environment, a Grade-A
            building, fast WiFi, meeting rooms and a lively community, at a fraction of the cost and half the commute.
            WeWork rates are indicative, please check their current listing.
          </p>
        </div>
      </section>

      {/* 19. Other workspace pages */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-xl md:text-2xl font-extrabold text-center">Explore more workspace options</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              ["Coworking space in Andheri East", "/coworking-space-in-andheri-east"],
              ["Coworking space in Goregaon East", "/coworking-space-in-goregaon-east"],
              ["Coworking space in Mahape", "/coworking-space-in-mahape"],
              ["Meeting rooms in Mumbai", "/meeting-room-in-mumbai"],
              ["Private cabin in Mumbai", "/private-cabin-in-mumbai"],
              ["Hot desk in Mumbai", "/hot-desk-in-mumbai"],
            ].map(([label, to]) => (
              <Link key={to} to={to} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileBar />
      <div className="md:hidden h-16" aria-hidden />
    </div>
  );
};

export default ThaneLanding;
