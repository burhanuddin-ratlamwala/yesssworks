import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { pageRoutes, services, LocationConfig, ServiceSlug } from "@/data/locations";

const SERVICE_BLURBS: Record<ServiceSlug, string> = {
  "coworking-space": "Hot desks, day passes and monthly memberships in a high-energy hub.",
  "fixed-desk": "Your own dedicated workstation with 24/7 access and lockable storage.",
  "meeting-room": "Hourly soundproof rooms with 4K screens and VC-ready setup.",
  "conference-room": "Large boardrooms for client pitches, training and team offsites.",
  "office-suites": "Private branded offices for teams of 10 to 100+, all-inclusive.",
  "private-cabin": "Lockable 2 to 8-seater cabins for small focused teams.",
  "virtual-office": "A business address for GST registration, incorporation and mail handling.",
};

interface Props {
  currentPath: string;
  location: LocationConfig;
  heading?: string;
}

export const RelatedMahapeLinks = ({ currentPath, location, heading }: Props) => {
  const links = pageRoutes
    .filter((r) => r.location === location.slug && r.path !== currentPath)
    .map((r) => ({
      path: r.path,
      anchor: `${services[r.service].label} in ${location.name}`,
      blurb: SERVICE_BLURBS[r.service],
    }));

  if (links.length === 0) return null;

  return (
    <section className="py-12 md:py-14 bg-muted/40">
      <div className="container">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Explore More in {location.name}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            {heading ?? `Other Workspace Options at YesssWorks ${location.name}`}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm md:text-base">
            Same building, same address, same premium amenities, just a different way to work.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((l, i) => (
            <Reveal key={l.path} delay={i * 60}>
              <Link
                to={l.path}
                className="group block h-full rounded-2xl border border-border bg-card p-5 hover:border-primary/60 hover:shadow-[var(--shadow-card)] transition-all"
              >
                <h3 className="font-bold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                  {l.anchor}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};