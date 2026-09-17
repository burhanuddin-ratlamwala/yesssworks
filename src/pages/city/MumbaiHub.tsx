import { Link } from "react-router-dom";
import { Building2, MapPin, Users, Wifi, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { Stats } from "@/components/site/Stats";
import { CityPageShell } from "./CityPageShell";
import { locations, services, SITE, buildingLocationSlugs, buildingPathSuffix, placeLabel } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const serviceLinks = [
  { slug: "coworking-space", label: "Coworking Space" },
  { slug: "fixed-desk", label: "Fixed Desk" },
  { slug: "private-cabin", label: "Private Cabin" },
  { slug: "meeting-room", label: "Meeting Room" },
  { slug: "conference-room", label: "Conference Room" },
  { slug: "office-suites", label: "Office Suites" },
] as const;

const MumbaiHub = () => {
  const canonical = "/coworking-space-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/coworking-space-in-mumbai", 6, canonical);
  const title = "Coworking Space in Mumbai | YesssWorks";
  const description =
    "Explore YesssWorks coworking spaces across Mumbai and Navi Mumbai, Andheri East, Goregaon East and Mahape. Hot desks, private cabins, meeting rooms and office suites with flexible plans.";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + canonical },
    ],
  };

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE.domain + canonical,
    name: `${SITE.name} Mumbai`,
    url: SITE.domain + canonical,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: "Mumbai",
    priceRange: "₹₹",
  };

  const faqItems = [
    { q: "Which areas in Mumbai does YesssWorks cover?", a: "We run premium coworking campuses in Andheri East and Goregaon East on the Mumbai side, plus a flagship hub in Mahape, Navi Mumbai. Between the three, most business corridors on the western and Navi Mumbai side are within a short drive." },
    { q: "What is the cheapest coworking space in Mumbai?", a: "Our day pass starts at ₹499 + GST and a fixed desk starts from ₹6,999 + GST a month depending on the centre. Check our dedicated affordable coworking page for a full price comparison across all hubs." },
    { q: "Can one membership be used across multiple YesssWorks centres?", a: "Yes. Universal Passes work across every YesssWorks location in Mumbai and Navi Mumbai, so you can hot-desk near home one day and near a client the next." },
    { q: "Do you offer private cabins and office suites for teams?", a: "Yes, we have lockable private cabins for 2 to 40 seats and fully furnished office suites for larger teams at our Andheri East, Goregaon East and Mahape campuses." },
    { q: "Is 24/7 access available at Mumbai centres?", a: "Standard hours are 9 AM to 9 PM, and 24/7 access can be added as a premium option at most of our Mumbai hubs for members who work late or across time zones." },
    { q: "How do I book a tour of a YesssWorks centre in Mumbai?", a: "Pick the centre closest to you from this page, then use the book a tour button or fill the enquiry form and our team will schedule a free walkthrough." },
  ];

  return (
    <CityPageShell
      title={title}
      description={description}
      canonical={canonical}
      keywords={["coworking space in mumbai", "best coworking space in mumbai", "top coworking space in mumbai", "shared office space mumbai", "coworking spaces mumbai"]}
      jsonLd={[breadcrumbLd, localBusinessLd]}
      heroEyebrow="Mumbai & Navi Mumbai"
      heroTitle={<>Coworking Space in <span className="text-primary">Mumbai</span></>}
      heroIntro="Three premium campuses, one membership. YesssWorks brings fast Wi-Fi, private cabins, meeting rooms and a genuinely helpful community to Andheri East, Goregaon East and Mahape."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai" }]}
      faqHeading="Coworking space in Mumbai, answered"
      faqItems={faqItems}
      enquireHeading="Find your Mumbai workspace"
      enquireIntro="Tell us your team size and preferred area, we'll match you to the right centre and plan."
      defaultMessage="Hi YesssWorks team, I'm looking for coworking space in Mumbai."
    >
      <Stats />

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Our campuses</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">The best coworking space in Mumbai, by neighbourhood</h2>
            <p className="mt-3 text-muted-foreground">Every YesssWorks hub is built around the same core: fast internet, comfortable seating and staff who actually pick up the phone. Pick the one nearest your commute.</p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {areaLocations.map((slug, i) => {
              const loc = locations[slug];
              return (
                <Reveal key={slug} delay={i * 90} className="rounded-2xl border border-border bg-card p-6 hover-lift flex flex-col">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 grid place-items-center mb-3">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{loc.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{placeLabel(loc)}</p>
                  {loc.googleRating && (
                    <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-foreground/80">
                      <Star className="h-3.5 w-3.5 text-primary fill-primary" /> {loc.googleRating} rating ({loc.googleReviews}+ reviews)
                    </p>
                  )}
                  <p className="text-sm text-foreground/70 mt-3 flex-1">Near {loc.landmarks.slice(0, 3).join(", ")}.</p>
                  <Link to={`/coworking-space-in-${slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                    Explore {loc.name} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Top workspace formats across Mumbai</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceLinks.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-bold">{s.label}</h3>
                <p className="text-xs text-muted-foreground mt-2">{services[s.slug].intro.slice(0, 90)}...</p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold">
                  {areaLocations.map((loc) => (
                    <Link key={loc} to={`/${s.slug}-in-${loc}`} className="text-primary hover:underline">
                      {locations[loc].name}
                    </Link>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Named buildings</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Visit us at these landmark addresses</h2>
            <p className="mt-3 text-muted-foreground">Each YesssWorks campus sits inside a well-known business park, easy to find on any map app.</p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {buildingLocationSlugs.map((slug) => (
              <Link key={slug} to={`/yesssworks-${buildingPathSuffix[slug]}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors">
                {locations[slug].name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link to="/affordable-coworking-space-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">Affordable coworking in Mumbai <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/hot-desk-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">Hot desks in Mumbai <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/virtual-office-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">Virtual office in Mumbai <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>

      <div id="plans"><InlinePlans service="coworking-space" location="Mumbai" /></div>

      <section className="py-10 bg-muted/40">
        <div className="container grid sm:grid-cols-3 gap-5 text-center">
          <div className="rounded-2xl border border-border bg-card p-6"><Users className="h-6 w-6 text-primary mx-auto mb-2" /><p className="font-bold">600+ companies</p><p className="text-xs text-muted-foreground mt-1">already work out of YesssWorks</p></div>
          <div className="rounded-2xl border border-border bg-card p-6"><Wifi className="h-6 w-6 text-primary mx-auto mb-2" /><p className="font-bold">Fibre + backup internet</p><p className="text-xs text-muted-foreground mt-1">at every single hub</p></div>
          <div className="rounded-2xl border border-border bg-card p-6"><MapPin className="h-6 w-6 text-primary mx-auto mb-2" /><p className="font-bold">3 Mumbai hubs</p><p className="text-xs text-muted-foreground mt-1">Andheri East, Goregaon East, Mahape</p></div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default MumbaiHub;
