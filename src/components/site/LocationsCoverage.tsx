import { Link } from "react-router-dom";
import { MapPin, Sparkles } from "lucide-react";
import { buildingLocationSlugs, buildingPathSuffix, locations, upcomingLocations, placeLabel } from "@/data/locations";
import { officeLabel, resolveOfficeSlug } from "@/data/office-options";
import { imageryFor } from "@/data/location-imagery";
import { Reveal } from "./Reveal";

interface Props {
  currentLocation?: string;
}

export const LocationsCoverage = ({ currentLocation }: Props) => (
  <section className="py-12 bg-background">
    <div className="container">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">Our coverage</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">YesssWorks Across India</h2>
        <p className="mt-3 text-muted-foreground">Premium campuses in Mumbai & Navi Mumbai today, Ahmedabad and Thane coming soon. One membership, every location.</p>
      </Reveal>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {buildingLocationSlugs.map((slug, i) => {
          const l = locations[slug];
          const normalised = resolveOfficeSlug(currentLocation);
          const active = l.slug === normalised;
          const hubImage = imageryFor(slug, l.name, l.address).tiles[i]?.src;
          return (
            <Reveal key={l.slug} delay={i * 70} variant="up">
              <Link
                to={`/yesssworks-${buildingPathSuffix[slug]}`}
                className={`group block h-full overflow-hidden rounded-2xl border bg-card hover-lift ${active ? "border-primary shadow-[var(--shadow-elegant)]" : "border-border"}`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={hubImage}
                    alt={`Workspace at YesssWorks ${officeLabel(slug)}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-start gap-3 p-5">
                  <div className={`h-10 w-10 rounded-xl grid place-items-center shrink-0 ${active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">YesssWorks {officeLabel(slug)}{active && <span className="ml-2 text-xs text-primary">(You're here)</span>}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{placeLabel(l)}</p>
                    <p className="text-xs text-foreground/70 mt-2 line-clamp-2">Near {l.landmarks.slice(0, 2).join(" & ")}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-10">
        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">Coming soon</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {upcomingLocations.map((u) => {
            const href = u.name === "Thane" ? "/yesssworks-thane" : undefined;
            const inner = (
              <>
                <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary grid place-items-center shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold group-hover:text-primary transition-colors">YesssWorks {u.name} <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-primary">Coming soon</span></h3>
                  <p className="text-xs text-muted-foreground mt-1">{u.city}, {u.region}</p>
                  {href && <p className="text-xs text-primary font-semibold mt-2">See what we are building</p>}
                </div>
              </>
            );
            const shell = "group rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 flex items-start gap-3";
            return href ? (
              <Link key={u.name} to={href} className={`${shell} hover-lift`}>{inner}</Link>
            ) : (
              <div key={u.name} className={shell}>{inner}</div>
            );
          })}
        </div>
      </Reveal>
    </div>
  </section>
);
