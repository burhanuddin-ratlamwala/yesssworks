import { Link } from "react-router-dom";
import { ArrowRight, Mail, FileCheck, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const VirtualOfficeMumbai = () => {
  const canonical = "/virtual-office-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/virtual-office-in-mumbai", 6, canonical);
  const title = "Virtual Office in Mumbai | GST & Company Address | YesssWorks";
  const description = "A real Mumbai business address for GST and company registration, with mail handling and meeting room access at Andheri East, Goregaon East and Mahape.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Virtual Office in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const faqItems = [
    { q: "Can I use the address for GST registration?", a: "Yes. We provide the rent agreement, NOC and utility bill copy that the GST department asks for, in your entity's name." },
    { q: "Is the address valid for company incorporation?", a: "It is. Founders regularly use our Mumbai addresses as the registered office for private limited companies and LLPs." },
    { q: "What happens to letters and couriers?", a: "Our reception receives everything, notifies you the same day and either holds it for pickup or forwards it at actual courier cost." },
    { q: "Do I get to use the workspace as well?", a: "Virtual office plans include meeting room credits, and you can add day passes whenever you want a desk." },
    { q: "How long does setup take?", a: "Once documents and payment are in, papers are usually ready within two working days." },
    { q: "Which centre address should I choose?", a: "Andheri East reads best for client-facing brands, Goregaon East is convenient for the western suburbs, and Mahape suits Navi Mumbai operations." },
  ];
  return (
    <CityPageShell
      title={title} description={description} canonical={canonical}
      keywords={["virtual office in mumbai", "virtual office mumbai", "gst registration address mumbai", "business address mumbai", "company registration address mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Registration ready paperwork"
      heroTitle={<>Virtual Office in <span className="text-primary">Mumbai</span></>}
      heroIntro="Get a credible Mumbai address without renting a desk. Documents for GST and company registration, plus a reception that actually answers."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Virtual Office" }]}
      faqHeading="Virtual office in Mumbai, answered" faqItems={faqItems}
      enquireHeading="Set up your Mumbai address" enquireIntro="Tell us your entity type and preferred centre and we will share the document list."
      defaultMessage="Hi YesssWorks team, I'd like a virtual office address in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[{ icon: FileCheck, l: "GST and MCA paperwork" }, { icon: Mail, l: "Mail and courier handling" }, { icon: Building2, l: "Meeting room credits included" }].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <div id="plans"><InlinePlans service="virtual-office" location="Mumbai" /></div>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Address options</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Choose the address that fits your business</h2></Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {areaLocations.map((slug, i) => (
              <Reveal key={slug} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold">{locations[slug].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{locations[slug].area}</p>
                <Link to={`/virtual-office-in-${slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">See plans <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default VirtualOfficeMumbai;