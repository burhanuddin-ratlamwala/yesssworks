import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Building2, Clock } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { PhotoStrip } from "@/components/site/PhotoStrip";
import { CityPageShell } from "../city/CityPageShell";
import NotFound from "../NotFound";
import { landmarkBySlug } from "@/data/landmark-pages";
import { locations, SITE, LocationSlug } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

/** Building-name landing page. Talks about the tower first, then the
 *  YesssWorks centre inside it, and hands off to the hub page for pricing. */
const LandmarkPage = ({ path }: { path: string }) => {
  const data = landmarkBySlug(path);
  if (!data) return <NotFound />;
  const loc = locations[data.location as LocationSlug];
  /* Photos come from the building this page is about, never from another hub. */
  const imagery = imageryFor(path, data.building, data.areaLabel, data.location);
  const heroImage = imagery.tiles[0]?.src;
  const photoTiles = tilesFor(`landmark-${path}`, 6, path, data.building, data.areaLabel, data.location);

  const placeLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `YesssWorks ${data.building}`,
    description: data.description,
    url: SITE.domain + data.path,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc?.address ?? data.building,
      addressLocality: loc?.city ?? "Mumbai",
      addressRegion: loc?.region ?? "Maharashtra",
      addressCountry: "IN",
    },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: data.building, item: SITE.domain + data.path },
    ],
  };

  return (
    <CityPageShell
      title={data.title}
      description={data.description}
      canonical={data.path}
      keywords={data.keywords}
      jsonLd={[placeLd, breadcrumbLd]}
      heroEyebrow={data.eyebrow}
      heroTitle={<>{data.building}, <span className="text-primary">{data.areaLabel}</span></>}
      heroIntro={data.intro}
      heroImage={heroImage}
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: data.building }]}
      defaultLocation={data.location as LocationSlug}
      faqHeading={`${data.building}, answered`}
      faqItems={data.faq}
      enquireHeading={`Ask about ${data.building}`}
      enquireIntro="Send us your headcount and start date and we will reply with availability on this floor."
      defaultMessage={`Hi YesssWorks team, I'd like details about your centre in ${data.building}.`}
    >
      <section className="py-12 bg-background">
        <div className="container grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <div>
            <Reveal>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">The building</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2">What it is like to work at {data.building}</h2>
            </Reveal>
            <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed">
              {data.about.map((p, i) => (
                <Reveal key={i} delay={i * 60}><p>{p}</p></Reveal>
              ))}
            </div>
          </div>
          <Reveal variant="scale" className="rounded-2xl border border-border bg-card p-6 h-fit">
            <h3 className="font-bold flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> Building at a glance</h3>
            <dl className="mt-4 space-y-3 text-sm">
              {data.facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                  <dd className="font-medium text-foreground/90">{f.value}</dd>
                </div>
              ))}
            </dl>
            {loc?.googleMapsUrl && (
              <a href={loc.googleMapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                <MapPin className="h-3.5 w-3.5" /> Open in Google Maps
              </a>
            )}
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Inside the building</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2">The YesssWorks centre at {data.building}</h2>
            <p className="mt-3 text-muted-foreground">{loc?.description}</p>
          </Reveal>
          <div className="mt-7 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Clock, l: loc?.hours ?? "24x7 access for members" },
              { icon: MapPin, l: loc?.area ?? data.areaLabel },
              { icon: Building2, l: "Desks, cabins and meeting rooms" },
            ].map((f) => (
              <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
                <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to={data.hubPath} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              Full hub page with photos and pricing <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to={`/gallery${data.hubPath.replace("/yesssworks-", "/")}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              See the gallery <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <div id="plans"><InlinePlans service="coworking-space" location={data.building} locationSlug={data.location} /></div>

      <PhotoStrip
        className="bg-background"
        columns={3}
        place={imagery.name}
        eyebrow="Photo walk-through"
        heading={`Inside our floor at ${data.building}`}
        blurb={`Real photographs from ${data.building}. Tap any image to view it full screen on mobile or desktop.`}
        tiles={photoTiles}
      />
    </CityPageShell>
  );
};

export default LandmarkPage;