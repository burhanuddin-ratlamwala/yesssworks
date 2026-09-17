import { Link } from "react-router-dom";
import { ArrowRight, DoorClosed, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east"] as const;

const OfficeSuitesMumbai = () => {
  const canonical = "/office-suites-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/office-suites-in-mumbai", 6, canonical);
  const title = "Office Suites in Mumbai | Private Team Offices | YesssWorks";
  const description = "Managed office suites in Mumbai for teams of 10 to 40. Your own lockable floor space, branding and meeting credits across Andheri East, Goregaon East and Mahape.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Office Suites in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const faqItems = [
    { q: "What size teams do office suites work for?", a: "Suites start around 10 seats and go up to 40 in a single block. Larger requirements can be stitched together across adjacent cabins." },
    { q: "Can we brand the suite?", a: "Yes. Reception signage, door branding and internal wall graphics are all allowed, and our team handles the fit-out." },
    { q: "What is included in the monthly fee?", a: "Furniture, electricity, internet, housekeeping, security, pantry supplies and meeting room credits are bundled, so you get one predictable invoice." },
    { q: "How long is the commitment?", a: "Most suites run on 11 or 12 month agreements. Shorter terms are possible where inventory allows, usually at a slightly higher rate." },
    { q: "Do suites come with dedicated meeting space?", a: "Every suite carries monthly meeting credits. Teams that need a permanent internal room can add one to the layout." },
    { q: "Can we move between centres later?", a: "Yes. If your team shifts closer to Navi Mumbai or the western suburbs, we transfer your agreement to another YesssWorks centre subject to availability." },
  ];
  return (
    <CityPageShell
      title={title} description={description} canonical={canonical}
      keywords={["office suites in mumbai", "office suites mumbai", "managed office mumbai", "private office space mumbai", "team office mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="For teams of 10 to 40"
      heroTitle={<>Office Suites in <span className="text-primary">Mumbai</span></>}
      heroIntro="A private, branded block for your team with everything managed for you, from housekeeping to internet uptime."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Office Suites" }]}
      faqHeading="Office suites in Mumbai, answered" faqItems={faqItems}
      enquireHeading="Plan your suite" enquireIntro="Tell us your headcount and timeline and we will send a layout with pricing."
      defaultMessage="Hi YesssWorks team, I'd like details on office suites in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[{ icon: DoorClosed, l: "Lockable, branded space" }, { icon: Users, l: "Layouts from 10 to 40 seats" }, { icon: ShieldCheck, l: "One invoice, all costs in" }].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <div id="plans"><InlinePlans service="office-suites" location="Mumbai" /></div>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Locations</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Suites by business district</h2></Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {areaLocations.map((slug, i) => (
              <Reveal key={slug} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold">{locations[slug].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{locations[slug].area}</p>
                <Link to={`/office-suites-in-${slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">View suites <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6"><Link to="/private-cabin-in-mumbai" className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1">Smaller team? Look at private cabins <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default OfficeSuitesMumbai;