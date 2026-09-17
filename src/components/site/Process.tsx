import { CalendarCheck, Search, Key } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    icon: Search,
    title: "Discover",
    text:
      "Share your team size, budget, preferred location and growth plans. Our workspace specialists shortlist the best-fit hubs, plans and add-ons within hours, no spammy follow-ups, just clarity.",
  },
  {
    icon: CalendarCheck,
    title: "Tour",
    text:
      "Book a free 20-minute walkthrough, virtual or in person. Meet the community managers, test the Wi-Fi, sip a cappuccino and get every question answered before you commit.",
  },
  {
    icon: Key,
    title: "Move-in",
    text:
      "Sign a flexible month-on-month agreement and get instant keys, Wi-Fi credentials and a welcome kit. Need more desks or a private cabin next quarter? Scale up or down anytime across all YesssWorks hubs.",
  },
];

export const Process = () => (
  <section className="py-16 bg-muted/40">
    <div className="container">
      <Reveal className="text-center mb-12 max-w-2xl mx-auto">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">How it works</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">From Enquiry to Move-in, in 3 Simple Steps</h2>
        <p className="mt-3 text-base text-muted-foreground">A frictionless onboarding designed around founders, finance teams and facility heads.</p>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 100} className="relative rounded-2xl bg-card border border-border p-6 hover-lift">
            <div className="absolute -top-4 left-6 h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-bold shadow-[var(--shadow-elegant)]">
              {i + 1}
            </div>
            <s.icon className="h-7 w-7 text-primary mb-4 mt-3" />
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);