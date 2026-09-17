import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

interface Props {
  location?: string;
}

const baseTestimonials = [
  {
    name: "Burhanuddin Ratlamwala",
    role: "Founder, Bratz Digital",
    text: "YesssWorks has been the perfect base for our growing digital agency. Reliable internet, beautiful interiors and a team that genuinely cares about its members.",
  },
  {
    name: "Rohan Mehta",
    role: "Founder, Finlytics",
    text: "YesssWorks gave our team a real home. The space is beautiful, the internet is rock-solid, and the community is genuinely supportive.",
  },
  {
    name: "Ankita Sharma",
    role: "Product Lead, Brightloop",
    text: "Booking was effortless and the front desk team is incredible. Our clients always compliment the conference rooms.",
  },
];

export const Testimonials = ({ location }: Props) => (
  <section className="py-12 bg-background">
    <div className="container">
      <Reveal className="text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">Loved by teams</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          What Our Members Say
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6">
        {baseTestimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 120} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover-lift relative overflow-hidden">
            <Quote className="absolute -top-3 -right-3 h-20 w-20 text-primary/5" />
            <div className="flex gap-1 mb-3 text-primary">
              {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-foreground/85 leading-relaxed text-sm">"{t.text}"</p>
            <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
              <div aria-hidden className="h-12 w-12 rounded-full bg-primary/10 text-primary border border-border grid place-items-center font-bold text-sm">
                {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);