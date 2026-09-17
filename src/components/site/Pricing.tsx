import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

interface Plan {
  name: string;
  price: string;
  unit: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

interface Props {
  serviceLabel: string;
  location: string;
}

export const Pricing = ({ serviceLabel, location }: Props) => {
  const plans: Plan[] = [
    {
      name: "Day Pass",
      price: "₹599",
      unit: "/ day",
      features: ["Hot desk for a day", "High-speed Wi-Fi", "Tea, coffee & water", "Pantry access", "1 meeting room hour"],
      cta: "Try a day",
    },
    {
      name: "Monthly",
      price: "₹6,999",
      unit: "/ month",
      features: ["Unlimited hot desks", "24x7 access option", "8 meeting room hours", "Mail handling", "Community events"],
      highlight: true,
      cta: "Most popular",
    },
    {
      name: "Annual",
      price: "₹74,999",
      unit: "/ year",
      features: ["Save 12% vs monthly", "Dedicated locker", "20 meeting room hours/mo", "Priority booking", "All-location access"],
      cta: "Lock the best price",
    },
  ];

  return (
    <section className="py-16 bg-muted/40">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Simple, transparent pricing</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{serviceLabel} plans in {location}</h2>
          <p className="mt-3 text-muted-foreground">Pay only for what you use. No setup fees, no surprise charges. Switch or scale your plan anytime.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 100}
              variant="scale"
              className={`relative rounded-2xl border bg-card p-6 md:p-8 hover-lift ${p.highlight ? "border-primary shadow-[var(--shadow-elegant)] md:-translate-y-3" : "border-border"}`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most loved
                </div>
              )}
              <h3 className="font-extrabold text-xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">+ GST. Indicative pricing.</p>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-7 w-full" variant={p.highlight ? "default" : "outline"}>
                <a href="#enquire">{p.cta}</a>
              </Button>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          Need a custom plan for a 10+ person team? <a href="#enquire" className="text-primary font-semibold hover:underline">Talk to sales →</a>
          <span className="mx-2">•</span>
          <a href="/plans" className="text-primary font-semibold hover:underline">View all plans across locations →</a>
        </p>
      </div>
    </section>
  );
};
