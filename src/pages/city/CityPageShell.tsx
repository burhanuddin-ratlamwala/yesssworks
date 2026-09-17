import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { Reveal } from "@/components/site/Reveal";
import { FAQSection, FAQItem } from "@/components/site/FAQSection";
import { LocationsCoverage } from "@/components/site/LocationsCoverage";
import { PhotoStrip } from "@/components/site/PhotoStrip";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { LocationSlug } from "@/data/locations";
import { PhotoTile } from "@/data/location-imagery";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface Props {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  jsonLd: Record<string, unknown>[];
  heroEyebrow: string;
  heroTitle: ReactNode;
  heroIntro: string;
  heroImage: string;
  breadcrumbs: Breadcrumb[];
  defaultLocation?: LocationSlug;
  children: ReactNode;
  faqHeading: string;
  faqItems: FAQItem[];
  enquireHeading: string;
  enquireIntro: string;
  defaultMessage?: string;
  showCoverage?: boolean;
  /** Real photographs for the location this page targets. */
  photoTiles?: PhotoTile[];
  photoPlace?: string;
  photoHeading?: string;
  photoBlurb?: string;
}

export const CityPageShell = ({
  title,
  description,
  canonical,
  keywords,
  jsonLd,
  heroEyebrow,
  heroTitle,
  heroIntro,
  heroImage,
  breadcrumbs,
  defaultLocation = "mahape",
  children,
  faqHeading,
  faqItems,
  enquireHeading,
  enquireIntro,
  defaultMessage,
  showCoverage = true,
  photoTiles,
  photoPlace,
  photoHeading,
  photoBlurb,
}: Props) => (
  <div className="min-h-screen flex flex-col bg-background">
    <SEO title={title} description={description} canonical={canonical} keywords={keywords} image={heroImage} jsonLd={jsonLd} />
    <Header />

    <section className="relative bg-sage overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
      <div className="container relative grid lg:grid-cols-2 gap-0 items-stretch">
        <div className="py-10 lg:py-16 lg:pr-12">
          <Reveal as="div" className="text-xs uppercase tracking-wider text-foreground/70 mb-3">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1">
              <Link to="/" className="hover:text-primary">Home</Link>
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-1">
                  <span className="mx-1">/</span>
                  {b.href ? (
                    <Link to={b.href} className="hover:text-primary">{b.label}</Link>
                  ) : (
                    <span className="text-foreground font-semibold">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">{heroTitle}</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-3 text-sm uppercase tracking-widest text-primary font-bold">{heroEyebrow}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-base lg:text-lg text-foreground/80 max-w-xl leading-relaxed">{heroIntro}</p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookTourDialog
                defaultLocation={defaultLocation}
                trigger={
                  <Button size="lg" className="shadow-[var(--shadow-elegant)] hover:scale-[1.03] transition-transform">
                    Book a free tour <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                }
              />
              <Button asChild size="lg" variant="outline">
                <a href="#enquire"><MessageCircle className="mr-2 h-4 w-4" /> Talk to us</a>
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="relative min-h-[220px] lg:min-h-[460px]">
          <Reveal variant="scale" className="absolute inset-0">
            <img src={heroImage} alt={typeof heroTitle === "string" ? heroTitle : heroEyebrow} className="w-full h-full object-cover" width={1200} height={800} />
          </Reveal>
        </div>
      </div>
    </section>

    {children}

    {photoTiles && photoTiles.length > 0 && (
      <PhotoStrip
        className="bg-background"
        columns={3}
        place={photoPlace ?? "YesssWorks"}
        eyebrow="Photo walk-through"
        heading={photoHeading ?? "A look inside the space"}
        blurb={photoBlurb}
        tiles={photoTiles}
      />
    )}

    <FAQSection heading={faqHeading} items={faqItems} className="bg-background" />

    {showCoverage && <LocationsCoverage />}

    <section id="enquire" className="py-12 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-10">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{enquireHeading}</h2>
          <p className="text-muted-foreground mt-3 max-w-md">{enquireIntro}</p>
          <div className="mt-6 flex items-center gap-3 text-foreground/80 text-sm">
            <MapPin className="h-4 w-4 text-primary shrink-0" /> Andheri East · Goregaon East · Mahape, Navi Mumbai
          </div>
        </Reveal>
        <Reveal variant="scale" className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
          <ContactForm defaultLocation={defaultLocation} defaultMessage={defaultMessage} />
        </Reveal>
      </div>
    </section>

    <Footer />
  </div>
);
