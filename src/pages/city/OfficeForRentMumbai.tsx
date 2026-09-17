import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, CalendarClock, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { SITE } from "@/data/locations";
import { imageryFor, topicTilesFor } from "@/data/location-imagery";

const OfficeForRentMumbai = () => {
  const canonical = "/office-space-for-rent-in-mumbai";
  const imagery = imageryFor(canonical, "andheri");
  const photoTiles = topicTilesFor("private-cabin", 6, canonical, "andheri");
  const title = "Office Space for Rent in Mumbai | Ready to Move In";
  const description = "Furnished office space for rent in Mumbai from two seats to a full floor. No deposit of nine months, no interiors bill. Andheri East, Goregaon East and Navi Mumbai.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Office Space for Rent in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const compare = [
    { h: "Conventional rental", rows: ["Six to nine months deposit", "You pay for interiors and furniture", "Separate bills for power, net, cleaning", "Three to five year lock-in", "Six to ten weeks before you can sit"] },
    { h: "Renting from YesssWorks", rows: ["One to two months deposit", "Fully furnished on day one", "Single monthly invoice", "Eleven months, extendable", "Move in this week"] },
  ];
  const faqItems = [
    { q: "What does office space for rent cost in Mumbai?", a: "On our floors a private cabin starts around ₹8,999 per seat a month in Navi Mumbai and a little higher in Andheri East. Larger managed spaces are quoted on the layout you need." },
    { q: "What is the smallest office I can rent?", a: "A two seat cabin. Below that a fixed desk works out cheaper and you still get a permanent spot with storage." },
    { q: "How much deposit do you take?", a: "Usually one to two months, not the six to nine months a standalone commercial landlord asks for." },
    { q: "Is the rent all inclusive?", a: "Yes. Electricity, internet, housekeeping, security, water and building maintenance are inside the monthly figure. Only GST is added on top." },
    { q: "Can I rent an office for a short term?", a: "Eleven months is our standard agreement. For shorter needs we can work out a three or six month arrangement at a slightly higher monthly rate." },
    { q: "Do you have offices near a metro station?", a: "Our AT and Ackruti Softech Park addresses in Andheri East are both close to Marol Naka on the metro line, and Goregaon East is a short ride from the station." },
    { q: "Can I see the space before signing?", a: "Please do. Book a tour and we will walk you through the exact cabin you would take, not a sample photo." },
  ];
  return (
    <CityPageShell
      title={title}
      description={description}
      canonical={canonical}
      keywords={["office space for rent mumbai", "office on rent mumbai", "small office space for rent mumbai", "furnished office for rent mumbai", "commercial office space rent mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Furnished, all inclusive, ready now"
      heroTitle={<>Office Space for <span className="text-primary">Rent in Mumbai</span></>}
      heroIntro="Two seats or two hundred, furnished and running from the day you sign. You skip the deposit, the interiors quote and the vendor chasing."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading="Offices available on our floors"
      photoBlurb="Actual cabins and team bays at our centres. Tap any photo to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Office Space for Rent" }]}
      defaultLocation="andheri-at"
      faqHeading="Renting an office in Mumbai, answered"
      faqItems={faqItems}
      enquireHeading="Send us your requirement"
      enquireIntro="Seat count, preferred suburb and move in date is all we need to send you two or three options with pricing."
      defaultMessage="Hi YesssWorks team, I'm looking for office space for rent in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">The honest comparison</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Standalone lease or flexible office</h2>
            <p className="text-muted-foreground mt-3">Most people searching for office space on rent are quietly worried about the upfront cost. Here is how the two routes actually differ.</p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5 items-stretch">
            {compare.map((c, i) => (
              <Reveal key={c.h} delay={i * 80} className={`rounded-2xl border p-6 h-full ${i === 1 ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                <h3 className="font-bold">{c.h}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {c.rows.map((r) => <li key={r} className="flex gap-2"><span className="text-primary">•</span>{r}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[
            { icon: IndianRupee, l: "One monthly invoice, GST extra" },
            { icon: CalendarClock, l: "Eleven month agreements, renewable" },
            { icon: PackageCheck, l: "Furniture, net and power included" },
          ].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <InlinePlans service="private-cabin" location="Mumbai" />

      <section className="py-10 bg-background">
        <div className="container flex flex-wrap gap-4 text-sm font-semibold">
          <Link to="/managed-office-space-in-mumbai" className="text-primary hover:underline inline-flex items-center gap-1">Managed offices for bigger teams <ArrowRight className="h-3.5 w-3.5" /></Link>
          <Link to="/private-cabin-in-mumbai" className="text-primary hover:underline inline-flex items-center gap-1">Private cabins from two seats <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </section>
    </CityPageShell>
  );
};

export default OfficeForRentMumbai;
