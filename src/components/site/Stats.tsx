import { Building2, Users, MapPin, Star } from "lucide-react";
import { Reveal } from "./Reveal";

interface StatsProps {
  rating?: number | string;
}

export const Stats = ({ rating }: StatsProps = {}) => {
  const stats = [
    { icon: Building2, value: "6+", label: "Premium Hubs" },
    { icon: Users, value: "600+", label: "Companies Served" },
    { icon: MapPin, value: "2", label: "Cities Covered" },
    { icon: Star, value: `${rating ?? "4.9"}/5`, label: "Google Rating" },
  ];
  return (
  <section className="py-14 bg-ink text-ink-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.07] bg-grid" aria-hidden />
    <div className="container relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="text-center">
            <s.icon className="h-8 w-8 mx-auto text-primary-glow mb-3" />
            <div className="text-3xl md:text-4xl font-extrabold text-gradient-primary">{s.value}</div>
            <div className="text-xs uppercase tracking-widest mt-1 text-ink-foreground/70">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
  );
};