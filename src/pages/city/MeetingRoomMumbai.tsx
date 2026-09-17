import { Link } from "react-router-dom";
import { ArrowRight, Tv, Wifi, Users, Coffee } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE, placeLabel } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const MeetingRoomMumbai = () => {
  const canonical = "/meeting-room-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/meeting-room-in-mumbai", 6, canonical);
  const title = "Meeting Room in Mumbai | Hourly & Day Booking | YesssWorks";
  const description =
    "Book fully equipped meeting rooms in Mumbai by the hour. Smart TVs, video conferencing and whiteboards at Andheri East, Goregaon East and Mahape, from ₹700 + GST.";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Meeting Room in Mumbai", item: SITE.domain + canonical },
    ],
  };

  const faqItems = [
    { q: "How much does a meeting room in Mumbai cost per hour?", a: "Our meeting rooms start at ₹700 + GST an hour for a 4-seater and go up to ₹1,500 + GST for a 10-seater, depending on the room size and location." },
    { q: "Can I book a meeting room for just one hour?", a: "Yes, all our meeting rooms are bookable by the hour with no minimum booking beyond one hour, ideal for a quick client call or interview." },
    { q: "Do meeting rooms include video conferencing?", a: "Every meeting room comes with a smart TV, HDMI and wireless casting, plus a camera and mic setup good enough for Zoom, Teams or Google Meet calls." },
    { q: "Which YesssWorks locations have meeting rooms?", a: "Meeting rooms are available at our Andheri East, Goregaon East and Mahape campuses, in sizes from 4 to 10 seats." },
    { q: "Can non-members book a meeting room?", a: "Yes, walk-in and one-time bookings are welcome. Members get preferential rates and free monthly credits as part of their plan." },
    { q: "Is catering available for meeting room bookings?", a: "We can arrange tea, coffee and light snacks for any meeting room booking, and full catering for longer sessions with advance notice." },
  ];

  return (
    <CityPageShell
      title={title}
      description={description}
      canonical={canonical}
      keywords={["meeting room in mumbai", "meeting rooms mumbai", "book meeting room mumbai", "hourly meeting room mumbai", "meeting room on rent mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Bookable by the hour"
      heroTitle={<>Meeting Room in <span className="text-primary">Mumbai</span></>}
      heroIntro="Client pitch, interview panel or a quick team huddle, our meeting rooms are ready with AV and Wi-Fi at three Mumbai locations."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Meeting Room" }]}
      faqHeading="Meeting rooms in Mumbai, answered"
      faqItems={faqItems}
      enquireHeading="Reserve a meeting room"
      enquireIntro="Share your preferred date, time and headcount and we'll block the room for you."
      defaultMessage="Hi YesssWorks team, I'd like to book a meeting room in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[{ icon: Tv, l: "Smart display + wireless casting" }, { icon: Wifi, l: "Dedicated high-speed Wi-Fi" }, { icon: Users, l: "Seats for 4 to 14 guests" }, { icon: Coffee, l: "Tea, coffee on request" }].map((f, i) => (
            <Reveal key={f.l} delay={i * 70} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <div id="plans"><InlinePlans service="meeting-room" location="Mumbai" /></div>

      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Where to book</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Meeting rooms across Mumbai locations</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {areaLocations.map((slug, i) => (
              <Reveal key={slug} delay={i * 90} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold">{locations[slug].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{placeLabel(locations[slug])}</p>
                <Link to={`/meeting-room-in-${slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Book at {locations[slug].name} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link to="/conference-room-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">Need a bigger room? Conference rooms <ArrowRight className="h-3.5 w-3.5" /></Link>
            <Link to="/coworking-space-in-mumbai" className="text-primary font-semibold hover:underline flex items-center gap-1">All Mumbai hubs <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default MeetingRoomMumbai;
