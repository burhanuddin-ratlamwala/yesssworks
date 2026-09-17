import { TrendingUp, Clock, IndianRupee, Users, CheckCircle2, XCircle } from "lucide-react";

/**
 * Themed in-article infographic block. Variant is picked by post category so
 * every article gets a relevant visual without bespoke art per post.
 */
interface Props {
  category: string;
  topic?: string;
}

export const Infographic = ({ category, topic = "coworking" }: Props) => {
  const cat = category.toLowerCase();

  // Variant 1: cost comparison (Workspace / Future of Work)
  if (cat.includes("workspace") || cat.includes("future")) {
    return (
      <figure className="my-10 rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-background to-primary/10 p-6 md:p-8 not-prose">
        <figcaption className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
          By the numbers
        </figcaption>
        <h3 className="text-xl md:text-2xl font-extrabold mb-6">Traditional office vs YesssWorks, 10-seat team</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-card border border-border p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground"><IndianRupee className="h-4 w-4" /> Traditional lease</div>
            <p className="text-3xl font-extrabold mt-2">₹2.4L<span className="text-base font-normal text-muted-foreground">/mo</span></p>
            <ul className="mt-3 space-y-1 text-sm text-foreground/80">
              <li>+ ₹18L deposit upfront</li>
              <li>+ ₹15L fit-out, one-time</li>
              <li>+ 4 to 6 weeks setup time</li>
              <li>+ Receptionist, AMC, housekeeping</li>
            </ul>
          </div>
          <div className="rounded-xl bg-primary/10 border border-primary/30 p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-primary"><TrendingUp className="h-4 w-4" /> YesssWorks</div>
            <p className="text-3xl font-extrabold mt-2">₹1.0L<span className="text-base font-normal text-muted-foreground">/mo</span></p>
            <ul className="mt-3 space-y-1 text-sm text-foreground/80">
              <li>1 month refundable deposit</li>
              <li>Move in same day</li>
              <li>Internet, power, pantry included</li>
              <li>Scale by 1 seat at a time</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Indicative monthly cost based on Andheri East market rates, 2025.</p>
      </figure>
    );
  }

  // Variant 2: do/don't (Startups)
  if (cat.includes("startup")) {
    return (
      <figure className="my-10 rounded-2xl border border-border bg-card p-6 md:p-8 not-prose">
        <figcaption className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Quick reference</figcaption>
        <h3 className="text-xl md:text-2xl font-extrabold mb-6">What to look for, what to skip</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-green-700"><CheckCircle2 className="h-4 w-4" /> Look for</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Leased-line internet with backup</li>
              <li>Ergonomic chairs (not stylish ones)</li>
              <li>Soundproof phone booths on every floor</li>
              <li>Real boardroom for client meetings</li>
              <li>Same-day move-in, monthly billing</li>
            </ul>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-red-700"><XCircle className="h-4 w-4" /> Skip</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Long-term lock-ins disguised as discounts</li>
              <li>Beer-fridge marketing, no quiet zones</li>
              <li>Beanbag-only seating without ergonomic chairs</li>
              <li>Photos lit better than the actual space</li>
              <li>"Meeting credits" you can never actually use</li>
            </ul>
          </div>
        </div>
      </figure>
    );
  }

  // Variant 3: stat cards (Community / Productivity / Locations)
  return (
    <figure className="my-10 rounded-2xl border border-border bg-gradient-to-br from-background to-primary/5 p-6 md:p-8 not-prose">
      <figcaption className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Why members stay</figcaption>
      <h3 className="text-xl md:text-2xl font-extrabold mb-6">YesssWorks, by the numbers</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { v: "92%", l: "Member renewal rate", I: Users },
          { v: "4.6★", l: "Avg Google rating", I: TrendingUp },
          { v: "<24h", l: "Move-in time", I: Clock },
          { v: "5", l: "Mumbai campuses", I: CheckCircle2 },
        ].map(({ v, l, I }) => (
          <div key={l} className="rounded-xl bg-card border border-border p-4 text-center">
            <I className="h-5 w-5 text-primary mx-auto mb-2" />
            <p className="text-2xl md:text-3xl font-extrabold">{v}</p>
            <p className="text-xs text-muted-foreground mt-1 leading-tight">{l}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4">Internal stats, YesssWorks Mumbai &amp; Navi Mumbai campuses, 2025.</p>
    </figure>
  );
};