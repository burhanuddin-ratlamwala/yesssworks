import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Wrench, ReceiptText } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ClientLogos } from "@/components/site/ClientLogos";
import { CityPageShell } from "./CityPageShell";
import { SITE } from "@/data/locations";
import { imageryFor, topicTilesFor } from "@/data/location-imagery";

const ManagedOfficeMumbai = () => {
  const canonical = "/managed-office-space-in-mumbai";
  const imagery = imageryFor(canonical, "goregaon");
  const photoTiles = topicTilesFor("office-suites", 6, canonical, "goregaon");
  const title = "Managed Office Space in Mumbai | YesssWorks";
  const description = "Managed offices in Mumbai for growth stage and enterprise satellite teams. Your own floor plate, your branding, one monthly invoice. Andheri East, Goregaon East, Navi Mumbai.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Managed Office Space in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const pillars = [
    { icon: Building2, t: "A floor that is only yours", d: "Locked entry, your own bays, your own meeting rooms. No shared desks in the middle of your team." },
    { icon: Wrench, t: "Fit-out to your brand", d: "Wall graphics, reception signage, cabin layout and seating density built to your spec before you move in." },
    { icon: ReceiptText, t: "One invoice, no capex", d: "Rent, electricity, internet, housekeeping, security and maintenance in a single monthly bill." },
    { icon: Users, t: "Scale in either direction", d: "Add or release seats as headcount moves. You are not stuck with a nine year lease." },
  ];
  const sizes = [
    { size: "10 to 25 seats", note: "Satellite sales or support pod, usually at Andheri East." },
    { size: "25 to 50 seats", note: "Growth stage team with its own cabins and boardroom, best at Goregaon East." },
    { size: "50 to 100 seats", note: "Full department with training room, at Mahape in Navi Mumbai." },
    { size: "100+ seats", note: "Dedicated floor plate. We build it around your org chart." },
  ];
  const faqItems = [
    { q: "How is a managed office different from coworking?", a: "In coworking you take seats on a shared floor. In a managed office you take an enclosed space that belongs only to your team, built and run for you, while we handle the operations behind it." },
    { q: "How is it different from a conventional lease?", a: "There is no security deposit of nine months, no capex on interiors and no separate vendors for internet, housekeeping or security. You pay one monthly amount and move in furnished." },
    { q: "What is the smallest managed office you build?", a: "We start at around ten seats. Below that, a private cabin usually makes better financial sense." },
    { q: "How long does the fit-out take?", a: "Between three and six weeks depending on the layout and branding. Plug and play spaces are ready far sooner." },
    { q: "What lock-in do you ask for?", a: "Typically eleven months to three years for managed spaces, since the fit-out is custom. Longer terms bring the per seat price down." },
    { q: "Can we keep our own IT and network policy?", a: "Yes. We can provision a dedicated leased line, separate VLANs and your own rack space if your IT team needs control." },
    { q: "Which centre suits an enterprise satellite team?", a: "Mahape in Navi Mumbai for larger floor plates and lower per seat cost, Goregaon East when your team is spread across the western suburbs." },
  ];
  return (
    <CityPageShell
      title={title}
      description={description}
      canonical={canonical}
      keywords={["managed office space mumbai", "managed office mumbai", "enterprise coworking mumbai", "managed office space for rent mumbai", "custom office space mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="For teams of 10 to 100+"
      heroTitle={<>Managed <span className="text-primary">Office Space</span> in Mumbai</>}
      heroIntro="Your own floor, your branding on the wall, your layout. We build it, run it and bill it as one line item so your team only has to show up and work."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading="Managed floors we already run"
      photoBlurb="Real photographs from our centres. Tap any image to see it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Managed Office Space" }]}
      defaultLocation="goregaon-271"
      faqHeading="Managed offices in Mumbai, answered"
      faqItems={faqItems}
      enquireHeading="Tell us your headcount"
      enquireIntro="Share the team size, the suburb you want and your move in date. We will come back with two or three workable options and a per seat number."
      defaultMessage="Hi YesssWorks team, I'm looking for a managed office in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Why managed</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Built for you, operated by us</h2>
            <p className="text-muted-foreground mt-3">Most teams that come to us have outgrown a shared floor but do not want to sign a conventional lease. A managed office sits neatly in between.</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <p.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Sizing</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Pick the floor plate that fits</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {sizes.map((s, i) => (
              <Reveal key={s.size} delay={i * 70} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-primary">{s.size}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.note}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link to="/office-suites-in-mumbai" className="text-primary hover:underline inline-flex items-center gap-1">Compare office suites <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/office-space-for-rent-in-mumbai" className="text-primary hover:underline inline-flex items-center gap-1">Office space for rent <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      <ClientLogos />
    </CityPageShell>
  );
};

export default ManagedOfficeMumbai;
