import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { locations, buildingLocationSlugs, buildingPathSuffix, placeLabel } from "@/data/locations";
import { ArrowRight, Camera, Images } from "lucide-react";
import { FAQSection } from "@/components/site/FAQSection";
import { Lightbox } from "@/components/site/Lightbox";
import { Button } from "@/components/ui/button";
import { imageryFor, PhotoTile } from "@/data/location-imagery";
import { cn } from "@/lib/utils";

const hubs = buildingLocationSlugs.map((s) => {
  const l = locations[s];
  const img = imageryFor(l.slug, l.name, l.address ?? "");
  return {
    slug: s,
    name: l.name,
    place: placeLabel(l),
    path: `/yesssworks-${buildingPathSuffix[s]}`,
    tiles: img.tiles,
  };
});

const PAGE = 12;

const Gallery = () => {
  const [active, setActive] = useState<string>("all");
  const [visible, setVisible] = useState(PAGE);

  const tiles: (PhotoTile & { hub: string })[] = useMemo(() => {
    const tagged = hubs.map((h) => h.tiles.map((t) => ({ ...t, hub: h.name })));
    if (active !== "all") {
      const hub = hubs.find((h) => h.slug === active);
      return hub ? hub.tiles.map((t) => ({ ...t, hub: hub.name })) : [];
    }
    // interleave so the mixed view never shows one hub in a row
    const out: (PhotoTile & { hub: string })[] = [];
    const max = Math.max(...tagged.map((t) => t.length));
    for (let i = 0; i < max; i++) for (const set of tagged) if (set[i]) out.push(set[i]);
    return out;
  }, [active]);

  const total = hubs.reduce((n, h) => n + h.tiles.length, 0);
  const shown = tiles.slice(0, visible);

  const pick = (key: string) => {
    setActive(key);
    setVisible(PAGE);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Photo Gallery of YesssWorks Coworking Hubs in Mumbai"
        description="Real photos of every YesssWorks hub: Andheri AT, Pinnacle, Ackruti Softech Park, Goregaon 271 Business Park and Mahape Aurum Q6. Desks, cabins, cafes and meeting rooms."
        canonical="/gallery"
      />
      <Header />

      {/* Hero collage, so the page reads as a gallery from the first scroll */}
      <section className="relative overflow-hidden bg-foreground">
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-6 opacity-60">
          {tiles.slice(0, 12).map((t, i) => (
            <img key={i} src={t.src} alt="" aria-hidden className="h-full w-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/70 to-foreground/90" aria-hidden />
        <div className="container relative py-16 lg:py-24 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-background">
              <Camera className="h-3.5 w-3.5" /> {total}+ real photos, no stock
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-background">
              Walk through every <span className="text-gradient-primary">YesssWorks</span> floor
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-3 max-w-2xl mx-auto text-background/80">
              Shot on location at each of our hubs across Mumbai and Navi Mumbai. Tap any photo to open it full screen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter rail */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="container flex max-w-full gap-2 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:overflow-x-visible">
          <button
            onClick={() => pick("all")}
            className={cn(
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              active === "all" ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary hover:text-primary"
            )}
          >
            All hubs
          </button>
          {hubs.map((h) => (
            <button
              key={h.slug}
              onClick={() => pick(h.slug)}
              className={cn(
                "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                active === h.slug ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary hover:text-primary"
              )}
            >
              {h.name} <span className="opacity-70">({h.tiles.length})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Masonry photo wall */}
      <section className="py-10 lg:py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {shown.map((t, i) => (
              <figure
                key={`${t.src}-${i}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)]"
              >
                <Lightbox src={t.src} alt={`${t.label} at ${t.hub}`} className="h-full w-full" imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                  <span className="block text-[11px] sm:text-xs font-semibold text-white">{t.label}</span>
                  <span className="block text-[10px] sm:text-[11px] text-white/70">{t.hub}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {visible < tiles.length && (
            <div className="mt-8 text-center">
              <Button size="lg" onClick={() => setVisible((v) => v + PAGE)}>
                <Images className="h-4 w-4" /> Load {Math.min(PAGE, tiles.length - visible)} more photos
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                Showing {shown.length} of {tiles.length}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Hub shortcuts, each with its own cover shot */}
      <section className="py-12 lg:py-16 bg-muted/40">
        <div className="container">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center">Jump to a hub gallery</h2>
          </Reveal>
          <div className="mt-8 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubs.map((h, i) => (
              <Reveal key={h.slug} delay={i * 80} className="h-full">
                <Link
                  to={h.path}
                  className="group flex h-full flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-[var(--shadow-card)] hover-lift"
                >
                  <div className="grid aspect-[16/9] min-h-0 shrink-0 grid-cols-3 grid-rows-[repeat(2,minmax(0,1fr))] gap-0.5 overflow-hidden">
                    <div className="col-span-2 row-span-2 min-h-0 overflow-hidden">
                      <img
                        src={h.tiles[0]?.src}
                        alt={`Workspace at YesssWorks ${h.name}`}
                        loading="lazy"
                          className="block h-full min-h-0 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {h.tiles.slice(1, 3).map((t, k) => (
                      <div key={k} className="min-h-0 overflow-hidden">
                        <img
                          src={t.src}
                          alt={`${t.label} at YesssWorks ${h.name}`}
                          loading="lazy"
                          className="block h-full min-h-0 w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-lg">YesssWorks {h.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{h.place}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-primary font-semibold text-sm story-link">
                      Visit hub <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        items={[
          { q: "Can I visit a hub before booking?", a: "Of course. Book a free 20 minute tour at any hub and walk the floor in person before you commit to anything." },
          { q: "Are these photos of the actual floors?", a: "Every photo here was shot on location at the hub it sits under. The furniture, finishes and amenities are exactly what you will see on your visit." },
          { q: "Which hub suits a team of five?", a: "Most teams of five settle at Mahape Aurum Q6 or Andheri Pinnacle. Both have 4 to 8 seat private cabins with windows and meeting rooms a few steps away." },
          { q: "Can I shoot content or host an event at a hub?", a: "Yes. Selected floors and lounges work well for brand shoots, podcast recordings and after hours team events. Message us for availability." },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Gallery;
