import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { buildingPathSuffix } from "@/data/locations";
import { SITE, locations, buildingLocationSlugs } from "@/data/locations";
import { FAQSection } from "@/components/site/FAQSection";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <SEO title="Contact YesssWorks | Coworking in Mumbai & Navi Mumbai" description="Get in touch with YesssWorks. Book a tour of our coworking spaces in Andheri, Goregaon, Mahape and Navi Mumbai." canonical="/contact" />
    <Header />
    <section className="relative bg-sage py-16 lg:py-24 overflow-hidden">
      <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
      <div className="container relative">
        <Reveal><h1 className="text-4xl md:text-5xl font-extrabold">Contact <span className="text-gradient-primary">us</span></h1></Reveal>
        <Reveal delay={100}><p className="mt-3 max-w-xl text-foreground/80">We'd love to hear from you. Tell us about your team and we'll find a workspace that fits.</p></Reveal>
      </div>
    </section>
    <section className="py-16 container grid lg:grid-cols-2 gap-12">
      <Reveal>
        <h2 className="text-2xl font-extrabold">Reach us</h2>
        <ul className="mt-6 space-y-4 text-sm">
          <li><a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" /> {SITE.phone}</a></li>
          <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5 text-primary" /> {SITE.email}</a></li>
        </ul>
        <h3 className="font-bold mt-8 mb-3">Our locations</h3>
        <ul className="space-y-3 text-sm">
          {buildingLocationSlugs.map((s) => {
            const l = locations[s];
            return (
              <li key={s} className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>
                  <Link to={`/yesssworks-${buildingPathSuffix[s]}`} className="font-semibold hover:text-primary">
                    YesssWorks {l.name}, {l.city}
                  </Link>
                  {l.googleBusinessProfileUrl && (
                    <a
                      href={l.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
                    >
                      Google profile <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </Reveal>
      <Reveal variant="scale" delay={100} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-[var(--shadow-card)]">
        <ContactForm />
      </Reveal>
    </section>
    <FAQSection
      className="bg-muted/40"
      items={[
        { q: "How fast will you respond?", a: "A YesssWorks specialist will reach out within one business day, often the same day." },
        { q: "Can I just walk in for a tour?", a: "You can, but booking a slot guarantees a dedicated host who knows your needs and can show the right cabins, desks and meeting rooms." },
        { q: "Do you offer day passes?", a: "Yes — day passes start at ₹599 and include a desk, high-speed Wi-Fi, tea & coffee and one meeting room hour." },
        { q: "Is parking available?", a: "All five hubs offer car and two-wheeler parking on tower premises, subject to availability." },
      ]}
    />
    <Footer />
  </div>
);
export default Contact;