import { Link } from "react-router-dom";
import { ArrowRight, Train, Car, Building2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

/** Soft locality page: we do not have a centre in Andheri West, so this page is
 *  honest about that and positions our three Andheri East addresses as the
 *  nearest options, one metro stop or a short drive away. */
const CoworkingAndheriWest = () => {
  const canonical = "/coworking-space-in-andheri-west";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/coworking-space-in-andheri-west", 6, canonical);
  const title = "Coworking Space Near Andheri West | YesssWorks Andheri";
  const description = "Looking for coworking space in Andheri West? Our three Andheri East centres are a short drive or one metro hop away, with day passes, fixed desks and private cabins.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Near Andheri West", item: SITE.domain + canonical },
    ],
  };
  const nearby = [
    { name: "YesssWorks Andheri, AT", note: "9th floor on Mahakali Caves Road, closest to Marol Naka metro", to: "/yesssworks-andheri-at" },
    { name: "YesssWorks Andheri, Pinnacle Business Park", note: "Second floor, easy drop-off for client meetings", to: "/yesssworks-andheri-pinnacle-business-park" },
    { name: "YesssWorks Andheri, Ackruti Softech Park", note: "Marol MIDC, quieter lanes and simpler parking", to: "/yesssworks-andheri-ackruti-softech-park" },
  ];
  const faqItems = [
    { q: "Do you have a centre in Andheri West?", a: "Not right now. Our three Andheri addresses are all on the east side, in the MIDC and Marol belt, which is around 15 to 25 minutes from most parts of Andheri West." },
    { q: "What is the fastest way to reach you from Andheri West?", a: "Take the metro from Andheri or DN Nagar to Marol Naka, then walk. By road, the Andheri subway or the Gundavali flyover both work depending on the hour." },
    { q: "Why work in Andheri East instead of West?", a: "Commercial inventory on the east side is newer, floor plates are larger and per seat pricing is usually lower, which is why most office demand sits there." },
    { q: "Can I try a day before committing?", a: "Yes. A day pass is ₹500 plus GST, so you can test the commute and the space before signing anything." },
    { q: "Do you offer parking for people driving in?", a: "All three Andheri buildings have parking. Ackruti Softech Park is usually the easiest for daily drivers." },
    { q: "Which centre suits a small team of four?", a: "A private cabin at AT or Ackruti fits four comfortably. Tell us your budget and we will send both options." },
  ];
  return (
    <CityPageShell
      title={title} description={description} canonical={canonical}
      keywords={["coworking space andheri west", "co working space andheri west", "coworking space near andheri west", "shared office andheri west", "office space andheri west"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Nearest hubs: Andheri East"
      heroTitle={<>Coworking Space Near <span className="text-primary">Andheri West</span></>}
      heroIntro="We are honest about geography. Our Andheri centres sit on the east side, one metro stop or a short drive from Andheri West, and they are worth the extra ten minutes."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Near Andheri West" }]}
      defaultLocation="andheri-at"
      faqHeading="Working from Andheri West, answered" faqItems={faqItems}
      enquireHeading="Plan your commute with us" enquireIntro="Tell us where in Andheri West you start from and we will suggest the easiest centre."
      defaultMessage="Hi YesssWorks team, I'm based in Andheri West and looking for a coworking space nearby."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[{ icon: Train, l: "One metro hop to Marol Naka" }, { icon: Car, l: "15 to 25 minutes by road" }, { icon: Building2, l: "Three centres to choose from" }].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Closest options</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Three Andheri addresses, all a short ride away</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {nearby.map((n, i) => (
              <Reveal key={n.to} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-base">{n.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{n.note}</p>
                <Link to={n.to} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Explore hub <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6"><Link to="/coworking-space-in-andheri-east" className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1">See all Andheri East coworking options <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </div>
      </section>
      <div id="plans"><InlinePlans service="coworking-space" location="Andheri" /></div>
    </CityPageShell>
  );
};

export default CoworkingAndheriWest;