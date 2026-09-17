import { Link } from "react-router-dom";
import { ArrowRight, Video, Presentation, Mic } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { InlinePlans } from "@/components/site/InlinePlans";
import { CityPageShell } from "./CityPageShell";
import { locations, SITE } from "@/data/locations";
import { imageryFor, tilesFor } from "@/data/location-imagery";

const areaLocations = ["andheri-east", "goregaon-east", "mahape"] as const;

const ConferenceRoomMumbai = () => {
  const canonical = "/conference-room-in-mumbai";
  const imagery = imageryFor(canonical);
  const photoTiles = tilesFor("city-/conference-room-in-mumbai", 6, canonical);
  const title = "Conference Room in Mumbai | Video Ready Rooms | YesssWorks";
  const description = "Book a video conference room in Mumbai by the hour. Large screens, clear audio and wired internet at our Andheri East, Goregaon East and Mahape centres.";
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain + "/" },
      { "@type": "ListItem", position: 2, name: "Coworking Space in Mumbai", item: SITE.domain + "/coworking-space-in-mumbai" },
      { "@type": "ListItem", position: 3, name: "Conference Room in Mumbai", item: SITE.domain + canonical },
    ],
  };
  const faqItems = [
    { q: "How many people fit in your conference rooms?", a: "Rooms seat 8 to 20 people depending on the centre. Mahape has the largest board room, and Andheri East works well for 8 to 12 seat reviews." },
    { q: "Is the room set up for video calls?", a: "Yes. Every conference room has a wall screen, HDMI and wireless casting, a wide-angle camera option and a wired internet drop so long calls stay stable." },
    { q: "Can I book a conference room without a membership?", a: "You can. Non-members book by the hour at walk-in rates, and members use their included meeting credits first." },
    { q: "Do you help with catering for full-day sessions?", a: "Tell us the headcount and we arrange tea, coffee and lunch from our regular vendors, billed at cost with your booking." },
    { q: "What is the difference between a meeting room and a conference room?", a: "Meeting rooms suit 4 to 8 people for quick discussions. Conference rooms are larger, screen-first spaces built for board reviews, client pitches and training days." },
    { q: "How early should I reserve?", a: "Peak slots between 11 AM and 4 PM fill first, so a day or two ahead is safest. Same-day requests usually work outside those hours." },
  ];
  return (
    <CityPageShell
      title={title} description={description} canonical={canonical}
      keywords={["conference room in mumbai", "video conference room mumbai", "conference room mumbai", "board room rental mumbai", "training room mumbai"]}
      jsonLd={[breadcrumbLd]}
      heroEyebrow="Screen first, hourly billing"
      heroTitle={<>Conference Room in <span className="text-primary">Mumbai</span></>}
      heroIntro="Rooms built for board reviews, client pitches and training days. Walk in, cast your deck and start on time."
      heroImage={imagery.tiles[0].src}
      photoTiles={photoTiles}
      photoPlace={imagery.name}
      photoHeading={`Real photos from ${imagery.name}`}
      photoBlurb="Every picture here was shot on our own floors. Tap any image to open it full screen."
      breadcrumbs={[{ label: "Coworking Space in Mumbai", href: "/coworking-space-in-mumbai" }, { label: "Conference Room" }]}
      faqHeading="Conference rooms in Mumbai, answered" faqItems={faqItems}
      enquireHeading="Reserve a conference room" enquireIntro="Share your date, headcount and preferred centre and we will hold the slot."
      defaultMessage="Hi YesssWorks team, I'd like to book a conference room in Mumbai."
    >
      <section className="py-12 bg-background">
        <div className="container grid sm:grid-cols-3 gap-4">
          {[{ icon: Video, l: "Wall screen with wireless casting" }, { icon: Mic, l: "Clear audio for long calls" }, { icon: Presentation, l: "Whiteboard and markers ready" }].map((f) => (
            <Reveal key={f.l} className="rounded-2xl border border-border bg-card p-5 flex items-center gap-3">
              <f.icon className="h-5 w-5 text-primary shrink-0" /><span className="text-sm font-semibold">{f.l}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <div id="plans"><InlinePlans service="conference-room" location="Mumbai" /></div>
      <section className="py-12 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl"><p className="text-xs font-bold tracking-widest text-primary uppercase">Locations</p><h2 className="text-3xl md:text-4xl font-extrabold mt-2">Pick the centre closest to your team</h2></Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {areaLocations.map((slug, i) => (
              <Reveal key={slug} delay={i * 80} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold">{locations[slug].name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{locations[slug].area}</p>
                <Link to={`/conference-room-in-${slug}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">See rooms <ArrowRight className="h-3.5 w-3.5" /></Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-6"><Link to="/meeting-room-in-mumbai" className="text-primary font-semibold hover:underline text-sm inline-flex items-center gap-1">Need something smaller? See meeting rooms <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </div>
      </section>
    </CityPageShell>
  );
};

export default ConferenceRoomMumbai;