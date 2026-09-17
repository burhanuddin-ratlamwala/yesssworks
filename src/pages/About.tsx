import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import { SEO } from "@/components/SEO";
import { Stats } from "@/components/site/Stats";
import { CTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Shield, Sparkles, Users, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE } from "@/data/locations";
import { hubImagery, tilesFor } from "@/data/location-imagery";
import { PhotoStrip } from "@/components/site/PhotoStrip";

const heroPair = tilesFor("about-hero", 2, "mumbai");
const storyShot = tilesFor("about-story", 1, "andheri")[0];
const stripTiles = [
  hubImagery.pinnacle.tiles[0],
  hubImagery.goregaon.tiles[0],
  hubImagery.mahape.tiles[0],
  hubImagery.ackruti.tiles[0],
  hubImagery.at.tiles[0],
  hubImagery.goregaon.tiles[6],
  hubImagery.mahape.tiles[6],
  hubImagery.pinnacle.tiles[4],
];

const values = [
  { icon: Shield, title: "Ethics & Governance", text: "We believe in 'leading by example'. Our foundation is strongly built upon established standards of governance & ethics, and we strive to consistently meet them." },
  { icon: Sparkles, title: "Our Attitude", text: "We are passionate, resourceful, dependable and driven. Our high standards have made it possible for us to be committed to an innovative approach with a sustainable implementation framework." },
  { icon: Users, title: "People are our Passion", text: "Our passion has driven us to offer you the best of personal workspaces with amenities and designs which provide fodder for your brain." },
  { icon: Heart, title: "Transparency", text: "We foster a strong culture, committed to accountability and transparency, every step of the way. Our dealings are plain and simple, laid out for everyone to decipher with ease." },
];

const About = () => (
  <div className="min-h-screen flex flex-col">
    <SEO title="About YesssWorks | Coworking Spaces in Mumbai & Navi Mumbai" description="Know us, YesssWorks is a fun, high-spirited and collaborative coworking community based out of Mumbai and Navi Mumbai." canonical="/about" />
    <Header />
    {/* Hero with image */}
    <section className="relative bg-sage py-16 lg:py-24 overflow-hidden">
      <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
      <div className="container relative grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <Reveal><p className="text-xs uppercase tracking-widest text-foreground/70">Home / Know Us</p></Reveal>
          <Reveal delay={100}><h1 className="text-4xl md:text-5xl font-extrabold mt-2">Know <span className="text-gradient-primary">YesssWorks</span></h1></Reveal>
          <Reveal delay={200}><p className="mt-4 max-w-2xl text-foreground/80 text-lg leading-relaxed">A fun, high-spirited and collaborative coworking community designed for entrepreneurs, creators and growing teams across Mumbai & Navi Mumbai.</p></Reveal>
          <Reveal delay={300}>
            <div className="mt-7 flex flex-wrap gap-3">
              <BookTourDialog trigger={<Button size="lg">Book a tour <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
              <Button asChild variant="outline" size="lg"><Link to="/gallery">See the spaces</Link></Button>
            </div>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={150} className="grid grid-cols-2 gap-3">
          <img src={heroPair[0].src} alt={`${heroPair[0].label} at YesssWorks Mumbai`} className="rounded-2xl aspect-square object-cover w-full" loading="lazy" />
          <img src={heroPair[1].src} alt={`${heroPair[1].label} at YesssWorks Mumbai`} className="rounded-2xl aspect-square object-cover w-full mt-8" loading="lazy" />
        </Reveal>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 lg:py-20 container">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-5">
          <img src={storyShot.src} alt={`${storyShot.label} at YesssWorks Andheri`} className="rounded-2xl w-full aspect-[4/5] object-cover" loading="lazy" />
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Our story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Built by people who actually run workspaces</h2>
          </Reveal>
          <Reveal delay={100} className="mt-5 space-y-4 text-foreground/80 leading-relaxed">
            <p>YesssWorks started with a simple idea, that the office you walk into every morning should make you want to do your best work. Not a hot desk in a noisy cafe, not a half-empty corporate floor, but a real workspace that feels like yours from day one.</p>
            <p>Today we run six hubs across Mumbai and Navi Mumbai, and our members include first-time founders, profitable bootstrapped businesses, scaling Series-A startups, regional sales teams of global enterprises, design studios, content agencies, legal practices, and edtech teams.</p>
            <p>Every campus is built around the same promise, clean interiors, fast Wi-Fi, 24x7 power backup, unlimited tea and coffee, and a friendly team on the floor who actually knows your name.</p>
            <p>Behind every hub is a small operations team that lives in the building: a community manager who greets your guests by name, an IT lead who keeps the leased-line internet humming, and a housekeeping crew who reset every meeting room before the next booking. We invest in people first because we believe a great workspace is mostly about who runs it, not just the furniture inside.</p>
            <p>We are proudly bootstrapped and Mumbai-built. Every floorplan, every wall colour, every chair was chosen by people who sit in these spaces every day. That is why our members stay with us for years, expand into bigger cabins as they grow, and quietly send us referrals, almost half of our new sign-ups come from someone already on the platform.</p>
          </Reveal>
          <Reveal delay={150} className="mt-7 grid grid-cols-3 gap-3 max-w-md">
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">6+</div>
              <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">Hubs</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">600+</div>
              <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">Companies</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">2.5L+</div>
              <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">Sq Ft</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <Stats />
    <section className="py-16 lg:py-20 container">
      <Reveal>
        <p className="text-xs font-bold tracking-widest text-primary uppercase">Our core values</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-10">What we stand for</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 100} className="rounded-2xl border border-border p-6 bg-card shadow-[var(--shadow-card)] hover-lift">
            <div className="h-12 w-12 rounded-xl bg-primary/10 grid place-items-center mb-4">
              <v.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg">{v.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.text}</p>
          </Reveal>
        ))}
      </div>
    </section>

    {/* Photo strip */}
    <section className="pb-16 container">
      <Reveal className="mb-8">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">Inside YesssWorks</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">A look at the spaces</h2>
      </Reveal>
      <PhotoStrip tiles={stripTiles} place="Mumbai & Navi Mumbai" columns={4} bare />
    </section>

    {/* FAQ + Get in touch */}
    <section id="contact" className="py-16 bg-muted/40">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        {/* FAQ - left */}
        <Reveal>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">FAQs</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Questions, answered</h2>
          <p className="mt-3 text-muted-foreground">Everything you might want to know about working out of a YesssWorks hub.</p>
          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {[
              { q: "Who is YesssWorks built for?", a: "Founders, bootstrapped teams, funded startups, agencies and regional sales teams of larger enterprises who want a real office without the lease and fit-out headache." },
              { q: "Where can I work?", a: "Five premium hubs in Andheri (AT, Pinnacle, Ackruti), Goregaon (271 Business Park) and Mahape (Aurum Q6). Monthly+ members can hop between hubs." },
              { q: "How is YesssWorks different from a typical coworking chain?", a: "We are owner-operated, not a franchise. Our team lives in the buildings, decisions get made fast, and member feedback shows up in the space within days, not quarters." },
              { q: "Can I get a GST invoice for my membership?", a: "Yes. Every plan and add-on comes with a proper GST invoice, and our team can help your CA with the right documents for billing and reimbursements." },
              { q: "Do you host community events?", a: "Yes. Founder meetups, AMAs, demo days and casual Friday socials are part of every membership." },
              { q: "What happens if my team grows?", a: "You move into a larger cabin or a custom managed suite — same campus, same community, no broker fees." },
            ].map((it, i) => (
              <AccordionItem
                key={i}
                value={`a-${i}`}
                className="rounded-xl border border-border bg-card px-5 hover:border-primary/40 transition-colors data-[state=open]:border-primary/60 data-[state=open]:shadow-[var(--shadow-card)]"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-4">{it.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Get in touch - right */}
        <Reveal variant="scale" delay={100}>
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Talk to our team</h2>
          <p className="mt-3 text-muted-foreground">Tell us a bit about your team and a YesssWorks specialist will reach out within one business day.</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li><a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 hover:text-primary transition-colors"><Phone className="h-5 w-5 text-primary" /> {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary transition-colors"><Mail className="h-5 w-5 text-primary" /> {SITE.email}</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Mumbai &amp; Navi Mumbai · 5 premium hubs</li>
          </ul>
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mt-6 shadow-[var(--shadow-card)]">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
    <Footer />
  </div>
);
export default About;