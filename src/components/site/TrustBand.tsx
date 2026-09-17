import { Star, Award, Users, Shield } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLIENTS } from "@/data/locations";

interface Props {
  rating?: number;
  reviews?: number;
}

export const TrustBand = ({ rating = 4.9, reviews }: Props) => {
  const items = [
    { icon: Star, label: `${rating} / 5 Google rating${reviews ? ` (${reviews}+ reviews)` : ""}` },
    { icon: Users, label: "600+ companies served" },
    { icon: Award, label: "6+ premium hubs" },
    { icon: Shield, label: "Verified & trusted" },
  ];
  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 80} className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground/80 text-center">
              <it.icon className="h-5 w-5 text-primary shrink-0" /> {it.label}
            </Reveal>
          ))}
        </div>
        <div className="mt-8 overflow-hidden">
          <div className="flex gap-10 md:gap-14 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
            {[...CLIENTS, ...CLIENTS].map((b, i) => (
              <span key={`${b}-${i}`} className="text-xl md:text-2xl font-extrabold text-muted-foreground/50 tracking-tight">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
