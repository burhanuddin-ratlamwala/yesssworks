import { Clock, MapPin, CheckCircle2, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "./BookTourDialog";
import { ClientLogos } from "./ClientLogos";
import { Gallery } from "./Gallery";
import { LocationConfig, LocationSlug, SITE, placeLabel } from "@/data/locations";

interface Props {
  location: LocationConfig;
  locationSlug: LocationSlug;
}

export const LocationExtras = ({ location, locationSlug }: Props) => {
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
    location.address || `YesssWorks ${location.name}`,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <ClientLogos />


      {/* Map */}
      <section className="py-12 bg-muted/40 overflow-hidden">
        <div className="container grid lg:grid-cols-3 gap-8 items-stretch">
          <Reveal className="lg:col-span-1">
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Find Us</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2">YesssWorks {location.name}</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{location.address}</p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 24x7 access for members</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {placeLabel(location)}</p>
              {location.googleRating && (
                <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {location.googleRating}★ on Google ({location.googleReviews}+ reviews)</p>
              )}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {location.googleMapsUrl && (
                <Button asChild variant="outline" size="sm">
                  <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
                </Button>
              )}
              <BookTourDialog defaultLocation={locationSlug} trigger={<Button size="sm">Book a Tour</Button>} />
            </div>
          </Reveal>
          <Reveal variant="scale" className="lg:col-span-2 w-full max-w-full min-w-0">
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-[280px] sm:h-[360px] lg:h-full lg:min-h-[420px]">
              <iframe
                title={`Map of YesssWorks ${location.name}`}
                src={mapEmbed}
                className="absolute inset-0 w-full h-full block"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Gallery location={location.name} slug={location.slug} />

      {/* Mobile sticky CTA */}
      <MobileStickyCTA locationSlug={locationSlug} />
    </>
  );
};

const MobileStickyCTA = ({ locationSlug }: { locationSlug: LocationSlug }) => (
  <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border p-3 flex gap-2 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.15)]">
    <Button asChild variant="outline" className="flex-1">
      <a href={`tel:${SITE.phoneTel}`}><Phone className="h-4 w-4" /> Call Now</a>
    </Button>
    <BookTourDialog
      defaultLocation={locationSlug}
      trigger={<Button className="flex-1">Book a Tour</Button>}
    />
  </div>
);