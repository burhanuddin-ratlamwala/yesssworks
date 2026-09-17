import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Mail, Stamp, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CityPageShell } from "./CityPageShell";
import { SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const VirtualOfficeGSTMumbai = () => {
  const canonical = "/virtual-office-for-gst-registration-mumbai";
  const imagery = imageryFor(canonical, "andheri");
  const photoTiles = tilesFor("city-gst-virtual-office", 6, canonical, "andheri");
  const title = "Virtual Office for GST Registration in Mumbai";
  const description = "Get a verified Mumbai business address for GST registration, with NOC, rent agreement and utility bill included. Andheri East, Goregaon East and Navi Mumbai addresses.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Virtual Office in Mumbai", item: SITE.domain + "/virtual-office-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "For GST Registration", item: SITE.domain + canonical },
    ],
  };
  const docs = [
    { icon: FileCheck, t: "No objection certificate", d: "Signed by the property owner, in the exact format your GST officer asks for." },
    { icon: Stamp, t: "Notarised rent agreement", d: "Registered agreement in your company name, valid for the full term you take." },
    { icon: Mail, t: "Latest utility bill", d: "Electricity bill copy for the premises, which most officers want as address proof." },
    { icon: ShieldCheck, t: "Board and signage", d: "Your company name displayed at the address, so a physical verification visit passes." },
  ];
  const faqItems = [
    { q: "Can I use a virtual office address for GST registration in Mumbai?", a: "Yes. A virtual office is accepted as a principal place of business as long as you hold a valid rent agreement, an NOC from the owner and a utility bill. We hand over all three in your company name." },
    { q: "What happens if a GST officer visits the address?", a: "Your company name is on our board at reception and our team confirms your tenancy on the spot. Physical verification visits at our addresses have gone through without trouble." },
    { q: "How long does the paperwork take?", a: "Once we have your company details and KYC, the document set is usually ready in two to three working days." },
    { q: "Which of your addresses can I use?", a: "Andheri East, Goregaon East or Mahape in Navi Mumbai. Pick the one that matches the state and jurisdiction you want to register in. All three sit in Maharashtra." },
    { q: "Is company registration different from GST registration?", a: "Yes, they are separate filings, though both need a registered address. Our document set works for both, and we can prepare paperwork for MCA incorporation as well." },
    { q: "Do I get mail handling with this?", a: "Yes. We receive your post and courier at reception, tell you when something arrives and forward or hold it as you prefer." },
    { q: "Can I add meeting room access later?", a: "You can. Members on an address plan book meeting rooms by the hour at member rates, and you can upgrade to a desk or cabin whenever the team grows." },
  ];
  return (
    <CityPageShell
      title={title}
      description={description}
      canonical={canonical}
      keywords={["virtual office for gst registration mumbai", "virtual office gst mumbai", "gst registration address mumbai", "virtual office address for gst", "gst address in mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Documents ready in 2 to 3 days"
      heroTitle={<>Virtual Office for <span className="text-primary">GST Registration</span> in Mumbai</>}
      heroIntro="A real Mumbai address, real signage and the full document set your GST officer will ask for. No shell addresses, no surprises during verification."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`The address is a working office, here it is`}
      photoBlurb="These are our own floors. Your company name sits on the board at the same reception."
      breadcrumbs={[{ label: "Virtual Office in Mumbai", href: "/virtual-office-in-mumbai" }, { label: "GST Registration" }]}
      defaultLocation="andheri-at"
      faqHeading="GST registration at a virtual office, answered"
      faqItems={faqItems}
      enquireHeading="Get your GST address sorted"
      enquireIntro="Send us your company name and the jurisdiction you need, and we will send the document checklist the same day."
      defaultMessage="Hi YesssWorks team, I need a virtual office address in Mumbai for GST registration."
    >
      <section className="py-12 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">What you receive</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">The four documents that clear GST</h2>
            <p className="text-muted-foreground mt-3">Most rejections happen because one paper is missing or the name does not match. We prepare the whole set together so that does not happen.</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {docs.map((d, i) => (
              <Reveal key={d.t} delay={i * 70} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
                <d.icon className="h-5 w-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold">{d.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">How it runs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">From enquiry to filed application</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            {[
              { s: "01", t: "Pick the address", d: "Andheri East, Goregaon East or Navi Mumbai, based on your jurisdiction." },
              { s: "02", t: "Share KYC", d: "Company PAN, director ID and proof, plus the exact registered name." },
              { s: "03", t: "Collect papers", d: "NOC, rent agreement and utility bill, signed and notarised." },
              { s: "04", t: "File and verify", d: "You file. If an officer visits, our reception confirms your tenancy." },
            ].map((s, i) => (
              <Reveal key={s.s} delay={i * 70} className="rounded-2xl border border-border bg-card p-6">
                <span className="text-primary font-extrabold">{s.s}</span>
                <h3 className="font-bold mt-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link to="/virtual-office-in-mumbai" className="text-primary hover:underline inline-flex items-center gap-1">All virtual office plans <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/managed-office-space-in-mumbai" className="text-primary hover:underline inline-flex items-center gap-1">Need a physical office instead <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default VirtualOfficeGSTMumbai;
