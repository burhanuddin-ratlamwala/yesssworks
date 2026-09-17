import { Link } from "react-router-dom";
import { Check, IndianRupee, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE } from "@/data/locations";
import { getLocationPricing, formatINR } from "@/data/pricing-workbook";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const AffordableMumbai = () => {
  const canonical = "/affordable-coworking-space-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/affordable-coworking-space-in-mumbai", 6, canonical);
  const title = "Affordable Coworking Space in Mumbai | YesssWorks";
  const description =
    "Compare the cheapest coworking space plans in Mumbai. Day passes from ₹499, fixed desks from ₹6,999 a month, private cabins and meeting rooms across Andheri East, Goregaon East and Mahape.";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Affordable Coworking Space in Mumbai", item: SITE.domain + canonical },
    ],
  };

  const offerLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Affordable coworking space in Mumbai",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "500",
      highPrice: "13000",
      priceCurrency: "INR",
    },
  };

  const faqItems = [
    { q: "What is the cheapest coworking space in Mumbai?", a: "The lowest entry point is our day pass, ₹499 + GST for a full day between 9 AM and 9 PM. For regular use, a fixed desk starts from ₹6,999 + GST a month at our Mahape hub, with Andheri East (Ackruti Softech Park) close behind at ₹7,000 + GST." },
    { q: "Are there discounts for longer commitments?", a: "Yes, our Universal Passes bring the per-day cost down as you buy more days, and fixed desk and cabin plans get better per-seat rates on 12-month terms." },
    { q: "Is GST included in the prices shown?", a: "All prices are listed exclusive of GST unless marked otherwise. We add 18% GST on the final invoice as per government norms and provide a proper tax invoice." },
    { q: "Do cheaper plans compromise on amenities?", a: "No. Every plan, from a single day pass to a 40-seat cabin, includes high-speed Wi-Fi, tea and coffee, printing credits and access to community events." },
    { q: "Which Mumbai location is most affordable for a fixed desk?", a: "Our Mahape, Navi Mumbai campus is the lowest at ₹6,999 + GST a month, followed by Andheri East (Ackruti Softech Park) at ₹7,000 + GST." },
    { q: "How much deposit do I need to pay?", a: "Fixed desks and cabins typically need a deposit equal to three months of rent, refunded within 60 days of exit as per our standard policy." },
  ];

  return (
    <CityPageShell
      title={title}
      description={description}
      canonical={canonical}
      keywords={["affordable coworking space in mumbai", "cheap coworking space mumbai", "cheapest coworking space mumbai", "budget coworking space mumbai", "low cost office space mumbai"]}
      jsonLd={[breadcrumbLd, offerLd]}
      heroEyebrow="Price comparison"
      heroTitle={<>Affordable Coworking Space in <span className="text-primary">Mumbai</span></>}
      heroIntro="No hidden charges, no forced add-ons. See exactly what a day pass, fixed desk or private cabin costs at each YesssWorks hub before you decide."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Affordable Coworking" }]}
      faqHeading="Pricing questions, answered"
      faqItems={faqItems}
      enquireHeading="Get a custom quote"
      enquireIntro="Tell us your budget and team size, we'll suggest the most cost-effective plan and location."
      defaultMessage="Hi YesssWorks team, I'm looking for an affordable coworking plan in Mumbai."
    >
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Price table</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">What you'll actually pay, by centre</h2>
            <p className="mt-3 text-muted-foreground">All figures below are ex-GST monthly rates, straight from our latest pricing sheet.</p>
          </Reveal>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-muted/60">
                <tr>
                  <th className="text-left p-4 font-bold">Location</th>
                  <th className="text-left p-4 font-bold">Day pass</th>
                  <th className="text-left p-4 font-bold">Fixed desk / month</th>
                  <th className="text-left p-4 font-bold">Cabin / seat / month</th>
                </tr>
              </thead>
              <tbody>
                {areaLocations.map((slug) => {
                  const loc = locations[slug];
                  const buildingSlug = slug === "andheri-east" ? "andheri-pinnacle" : slug === "goregaon-east" ? "goregaon-271" : "mahape-aurum-q6";
                  const p = getLocationPricing(buildingSlug as any);
                  return (
                    <tr key={slug} className="border-t border-border">
                      <td className="p-4 font-semibold">{loc.name}</td>
                      <td className="p-4">{formatINR(p.dayPass.priceExGst)} + GST</td>
                      <td className="p-4">{formatINR(p.fixedDesk.monthlyExGst)} + GST</td>
                      <td className="p-4">{formatINR(p.cabins[0].perSeatExGst)} + GST</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Prices exclude 18% GST. Deposit and lock-in terms apply on fixed desks and cabins, see the enquiry form for a full breakdown.</p>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Universal pass</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Buy in bulk, pay less per day</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-5">
            {[{ name: "Silver", days: 5, price: 2000 }, { name: "Gold", days: 10, price: 3500 }, { name: "Platinum", days: 15, price: 4500 }].map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <IndianRupee className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-bold">{p.name} Pass</h3>
                <p className="text-2xl font-extrabold mt-2">{formatINR(p.price)} <span className="text-sm font-medium text-muted-foreground">+ GST</span></p>
                <p className="text-xs text-muted-foreground mt-1">{p.days} days, usable at any YesssWorks hub</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Hot desk access</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> High-speed Wi-Fi</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Tea, coffee & water</li>
                </ul>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link to="/hot-desk-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">Hot desk plans <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/private-cabin-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">Private cabin pricing <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/coworking-space-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">All Mumbai hubs <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default AffordableMumbai;
