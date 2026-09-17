import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";
import { PhotoTile } from "@/data/location-imagery";
import { cn } from "@/lib/utils";

interface Props {
  tiles: PhotoTile[];
  /** Place name appended to every alt tag, keeps image SEO location specific. */
  place: string;
  eyebrow?: string;
  heading?: string;
  blurb?: string;
  className?: string;
  /** Desktop column count. Mobile is always 2 across so photos stay readable. */
  columns?: 2 | 3 | 4;
  /** Renders without the section wrapper when embedded inside other content. */
  bare?: boolean;
}

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export const PhotoStrip = ({
  tiles,
  place,
  eyebrow,
  heading,
  blurb,
  className,
  columns = 3,
  bare = false,
}: Props) => {
  if (!tiles.length) return null;

  const grid = (
    <div className={cn("grid grid-cols-2 gap-3 sm:gap-4", colClass[columns])}>
      {tiles.map((t, i) => (
        <Reveal key={`${t.src}-${i}`} delay={i * 50} variant="scale">
          <figure className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="aspect-[4/3]">
              <Lightbox src={t.src} alt={`${t.label} at ${place}`} loading="lazy" />
            </div>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-2 sm:p-3 text-[11px] sm:text-xs font-semibold text-white">
              {t.label}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );

  if (bare) return <div className={className}>{grid}</div>;

  return (
    <section className={cn("py-10 lg:py-14", className)}>
      <div className="container">
        {(eyebrow || heading || blurb) && (
          <Reveal className="max-w-2xl mb-6 sm:mb-8">
            {eyebrow && <p className="text-xs font-bold tracking-widest text-primary uppercase">{eyebrow}</p>}
            {heading && <h2 className="text-2xl md:text-3xl font-extrabold mt-2">{heading}</h2>}
            {blurb && <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{blurb}</p>}
          </Reveal>
        )}
        {grid}
      </div>
    </section>
  );
};
