import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Coffee, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const HotDeskMumbai = () => {
  const canonical = "/hot-desk-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/hot-desk-in-mumbai", 6, canonical);
  const title = "Hot Desk in Mumbai | Day Pass from ₹499 | YesssWorks";
  const description = "Flexible hot desks in Mumbai with no long-term commitment. Drop in for a day or pick a multi-day pass across Andheri East, Goregaon East and Mahape.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Hot Desk in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const faqItems = [
    { q: "What is a hot desk?", a: "A hot desk is any open, unassigned seat in our coworking floor. You pick a spot each visit rather than owning a fixed desk, which keeps costs low and flexibility high." },
    { q: "How much does a hot desk cost in Mumbai?", a: "A single day pass is ₹499 + GST. Multi-day Universal Passes bring the per-day price down further, starting at ₹2,000 + GST for 5 days." },
    { q: "Can I use a hot desk pass at any YesssWorks centre?", a: "Yes, Universal Passes work across Andheri East, Goregaon East and Mahape, so you can hot-desk wherever suits your day." },
    { q: "Is a hot desk suitable for daily work?", a: "Yes, many freelancers and remote employees use hot desks as their everyday base. If you want a permanent spot, a fixed desk plan may suit you better." },
    { q: "What is included with a hot desk booking?", a: "High-speed Wi-Fi, tea and coffee, printing credits and access to the community lounge and events are all included." },
    { q: "Do I need to book a hot desk in advance?", a: "Walk-ins are welcome, but booking ahead through our team guarantees your seat during busy hours." },
  ];
  return (
    <CityPageShell
      title={title} description={description} canonical={canonical}
      keywords={["hot desk in mumbai", "hot desk mumbai", "hot desking mumbai", "shared desk mumbai", "day pass coworking mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Flexible, no lock-in"
      heroTitle={<>Hot Desk in <span className="text-primary">Mumbai</span></>}
      heroIntro="Walk in, plug in, get to work. Our hot desks give you a fast, comfortable workspace without any monthly commitment."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Hot Desk" }]}
      faqHeading="Hot desks in Mumbai, answered" faqItems={faqItems}
      enquireHeading="Grab a hot desk today" enquireIntro="Tell us which centre works best and how many days you need."
      defaultMessage="Hi YesssWorks team, I'm interested in a hot desk in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[{ icon: Wifi, l: "Fast Wi-Fi at every seat" }, { icon: Coffee, l: "Unlimited tea & coffee" }, { icon: Clock, l: "9 AM to 9 PM, 24/7 add-on" }].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <div id="plans"><InlinePlans service="coworking-space" location="Mumbai" /></div>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Locations</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Hot desk near you</h2></Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {areaLocations.map((slug, i) => (
              <Reveal key={slug} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold">{locations[slug].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{locations[slug].area}</p>
                <Link to={`/coworking-space-in-${slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Explore <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6"><Link to="/affordable-coworking-space-in-mumbai" className="text-primary font-semibold hover:underline text-sm flex items-center gap-1">Compare pricing across hubs <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default HotDeskMumbai;
