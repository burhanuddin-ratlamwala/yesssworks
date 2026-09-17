import { ReactNode } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { LocationConfig, LocationSlug, SITE, ServiceConfig, placeLabel } from "@/data/locations";

interface FAQItem { q: string; a: string; }

interface Props {
  children: ReactNode;
  location: LocationConfig;
  locationSlug: LocationSlug;
  service: ServiceConfig;
  enquireHeading: string;
  enquireIntro: string;
  faqHeading: string;
  faqItems: FAQItem[];
  defaultMessage?: string;
}

export const ServicePageShell = ({
  children,
  location,
  locationSlug,
  service,
  enquireHeading,
  enquireIntro,
  faqHeading,
  faqItems,
  defaultMessage,
}: Props) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Header />
    {children}

    {/* Enquiry */}
    <section id="enquire" className="py-12 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{enquireHeading}</h2>
          <p className="text-muted-foreground mt-3 max-w-md">{enquireIntro}</p>
          <div className="mt-8 space-y-4">
            <a href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                <MessageCircle className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </span>
              <span className="font-semibold">WhatsApp us</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
              <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </span>
              <span className="font-semibold">{SITE.email}</span>
            </a>
            <a
              href={location.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address || `YesssWorks ${location.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <span className="h-10 w-10 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary transition-colors">
                <MapPin className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
              </span>
              <span className="font-semibold">{placeLabel(location)}</span>
            </a>
          </div>
        </Reveal>
        <Reveal variant="scale" className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
          <ContactForm
            defaultLocation={locationSlug}
            defaultMessage={defaultMessage ?? `Hi YesssWorks team, I'm interested in ${service.label} in ${location.name}.`}
          />
        </Reveal>
      </div>
    </section>

    {/* FAQ */}
    <section id="faq" className="py-12">
      <div className="container max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{faqHeading}</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqItems.map((q, i) => (
            <Reveal key={q.q} delay={i * 60}>
              <details className="rounded-xl border border-border bg-card p-5 group hover:border-primary/40 transition-colors open:shadow-[var(--shadow-card)]">
                <summary className="font-semibold cursor-pointer flex justify-between items-center gap-4 list-none">
                  <span>{q.q}</span>
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{q.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <div className="mt-3 flex justify-center gap-3 flex-wrap">
            <BookTourDialog defaultLocation={locationSlug} trigger={<Button>Book a tour</Button>} />
            <Button asChild variant="outline"><a href="#enquire"><MessageCircle className="mr-2 h-4 w-4" /> Request callback</a></Button>
          </div>
        </Reveal>
      </div>
    </section>

    <Footer />
  </div>
);
