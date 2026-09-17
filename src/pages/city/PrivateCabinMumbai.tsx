import { Link } from "react-router-dom";
import { ArrowRight, Lock, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const PrivateCabinMumbai = () => {
  const canonical = "/private-cabin-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/private-cabin-in-mumbai", 6, canonical);
  const title = "Private Cabin in Mumbai | 2 to 40 Seats | YesssWorks";
  const description = "Lockable private cabins in Mumbai for teams of 2 to 40, from ₹8,999 per seat a month. Fully furnished, soundproof cabins at Andheri East, Goregaon East and Mahape.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Private Cabin in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const faqItems = [
    { q: "What sizes of private cabins are available in Mumbai?", a: "Our cabins scale from 2-seaters for small founders' teams to 40-seat cabins for established departments, billed per seat." },
    { q: "How much does a private cabin cost?", a: "Cabins are priced at roughly ₹8,999 to ₹9,000 + GST per seat a month, so a 4-seat cabin works out to about ₹36,000 + GST monthly." },
    { q: "Are private cabins soundproof and lockable?", a: "Yes, every cabin is enclosed, lockable and reasonably soundproofed, so client calls and confidential discussions stay private." },
    { q: "What is included with a private cabin?", a: "Furniture, ergonomic chairs, storage, high-speed internet, power backup and access to shared meeting rooms and pantry are all included." },
    { q: "Can I brand or customise my cabin?", a: "Small branding touches like logo decals and signage are usually possible, talk to our team about what's feasible at each centre." },
    { q: "What is the lock-in period for a private cabin?", a: "Standard cabin agreements run on a 12-month term with a 60-day exit notice and a deposit equal to three months rent." },
  ];
  return (
    <CityPageShell
      title={title} description={description} canonical={canonical}
      keywords={["private cabin in mumbai", "private office mumbai", "private cabin mumbai coworking", "team cabin mumbai", "lockable cabin mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="For teams of 2 to 40"
      heroTitle={<>Private Cabin in <span className="text-primary">Mumbai</span></>}
      heroIntro="A locked, furnished cabin of your own inside a lively coworking floor, the best of privacy and community in one plan."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Private Cabin" }]}
      faqHeading="Private cabins in Mumbai, answered" faqItems={faqItems}
      enquireHeading="Find your cabin size" enquireIntro="Tell us your team size and preferred location, we'll share available cabins and pricing."
      defaultMessage="Hi YesssWorks team, I'm looking for a private cabin in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[{ icon: Lock, l: "Lockable, soundproof cabins" }, { icon: Users, l: "2 to 40 seats" }, { icon: ShieldCheck, l: "CCTV & biometric access" }].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <div id="plans"><InlinePlans service="private-cabin" location="Mumbai" /></div>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Locations</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Private cabins across Mumbai</h2></Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {areaLocations.map((slug, i) => (
              <Reveal key={slug} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold">{locations[slug].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{locations[slug].area}</p>
                <Link to={`/private-cabin-in-${slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">View cabins <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6"><Link to="/office-suites-in-mumbai" className="text-primary font-semibold hover:underline text-sm flex items-center gap-1">Need a bigger footprint? Office suites <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default PrivateCabinMumbai;
