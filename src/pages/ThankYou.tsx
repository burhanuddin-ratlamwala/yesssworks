import { useLocation } from "react-router-dom";
import { CheckCircle2, Facebook, Linkedin, MessageCircle, Share2, Star } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

type Enquiry = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  seats?: string | number;
  location?: string;
  message?: string;
};

const ThankYou = () => {
  const { state } = useLocation();
  const enquiry = (state ?? {}) as Enquiry;
  const name = enquiry.name?.trim() || "there";
  const location = enquiry.location?.trim() || "Not specified";
  const whatsappMessage = [
    "Hi YesssWorks team, I'd like to follow up on my enquiry.",
    "",
    `Name: ${enquiry.name?.trim() || "Not provided"}`,
    `Company: ${enquiry.company?.trim() || "Not provided"}`,
    `Phone: ${enquiry.phone?.trim() || "Not provided"}`,
    `Email: ${enquiry.email?.trim() || "Not provided"}`,
    `Preferred location: ${location}`,
    `Seats: ${enquiry.seats || "Not specified"}`,
    `Message: ${enquiry.message?.trim() || "No additional message"}`,
  ].join("\n");
  const whatsappHref = `https://wa.me/919324747356?text=${encodeURIComponent(whatsappMessage)}`;
  const shareUrl = encodeURIComponent("https://yesssworks.com");
  const shareText = encodeURIComponent("I just enquired about a workspace at YesssWorks.");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO title="Thank You | YesssWorks" description="Thank you for your YesssWorks workspace enquiry." canonical="/thank-you" noindex />
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-sage py-16 md:py-24">
          <div className="absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="container relative mx-auto max-w-4xl text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-primary">Enquiry received</p>
            <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">Thank you, <span className="text-gradient-primary">{name}</span>.</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/75">Your workspace enquiry is with our team. Want a quicker response? Send the ready-made WhatsApp message below so we have every detail at hand.</p>
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" className="gap-2 text-base">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Get in touch on WhatsApp</a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">WhatsApp opens with your enquiry filled in; you stay in control and simply hit Send.</p>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">What happens next</p>
                <h2 className="mt-2 text-2xl font-extrabold">A workspace specialist will reach out shortly.</h2>
                <p className="mt-2 max-w-2xl text-foreground/70">We’ll use your preferred location and team size to recommend the most suitable desks, cabins or office suite.</p>
              </div>
              <div className="grid grid-cols-3 gap-5 text-center text-sm">
                {["We review", "We recommend", "You visit"].map((step, index) => <div key={step}><span className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full bg-primary/10 font-bold text-primary">{index + 1}</span><span className="font-semibold">{step}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Trusted by growing teams</p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">A space your team will feel good about.</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Rohan Mehta", "Founder, Finlytics", "YesssWorks gave our team a real home. The space is beautiful, the internet is rock-solid, and the community is genuinely supportive."],
                ["Ankita Sharma", "Product Lead, Brightloop", "Booking was effortless and the front desk team is incredible. Our clients always compliment the conference rooms."],
                ["Burhanuddin Ratlamwala", "Founder, Bratz Digital", "Reliable internet, beautiful interiors and a team that genuinely cares about its members—exactly what a growing agency needs."],
              ].map(([person, role, quote]) => <article key={person} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]"><div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="mt-4 text-sm leading-relaxed text-foreground/80">“{quote}”</p><div className="mt-5 border-t border-border pt-4"><p className="font-bold text-sm">{person}</p><p className="text-xs text-muted-foreground">{role}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="container py-12 text-center">
          <p className="text-sm font-semibold text-foreground/75">Know someone who is looking for a better workspace?</p>
          <div className="mt-4 flex justify-center gap-3">
            <a aria-label="Share on Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><Facebook className="h-5 w-5" /></a>
            <a aria-label="Share on LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><Linkedin className="h-5 w-5" /></a>
            <a aria-label="Share on WhatsApp" href={`https://wa.me/?text=${shareText}%20${shareUrl}`} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"><Share2 className="h-5 w-5" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
