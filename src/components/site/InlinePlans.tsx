import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { BookTourDialog } from "./BookTourDialog";
import { ServiceSlug, LocationSlug } from "@/data/locations";
import { getLocationPricing, formatINR } from "@/data/pricing-workbook";
import { cn } from "@/lib/utils";

interface Props {
  service: ServiceSlug;
  location: string;
  /** When set, plan prices follow that centre's rate card. */
  locationSlug?: LocationSlug;
}

interface PlanCard {
  name: string;
  price?: string;
  unit?: string;
  note?: string;
  features: string[];
  highlight?: boolean;
}

interface TabDef {
  value: string;
  label: string;
  blurb: string;
  cards: PlanCard[];
}

const TABS: TabDef[] = [
  {
    value: "day",
    label: "Day Pass",
    blurb: "Drop in for the day with everything you need to get work done.",
    cards: [
      {
        name: "Day Pass",
        price: "₹500",
        unit: "+ GST / day",
        features: ["Hot desk for a day", "High-speed Wi-Fi", "Tea, coffee & water", "Cafeteria access"],
        highlight: true,
      },
    ],
  },
  {
    value: "universal",
    label: "Universal Pass",
    blurb: "Multi-day passes that work across any YesssWorks facility.",
    cards: [
      { name: "Silver Pass", price: "₹2,000", unit: "+ GST", note: "5 days access", features: ["Access any YesssWorks facility", "High-speed Wi-Fi", "Hot beverages"] },
      { name: "Golden Pass", price: "₹3,500", unit: "+ GST", note: "10 days access", features: ["Access any YesssWorks facility", "High-speed Wi-Fi", "Hot beverages"], highlight: true },
      { name: "Platinum Pass", price: "₹4,500", unit: "+ GST", note: "15 days access", features: ["Access any YesssWorks facility", "High-speed Wi-Fi", "Hot beverages"] },
    ],
  },
  {
    value: "fixed",
    label: "Fixed Seats",
    blurb: "Your dedicated workstation in our community floor.",
    cards: [
      {
        name: "Fixed Seat",
        price: "₹7,000",
        unit: "+ GST per seat / month",
        features: ["High-speed Wi-Fi", "Hot beverages", "Meeting room credits", "Print credits", "Community events", "Ample parking", "Cafeteria & game zone"],
        highlight: true,
      },
    ],
  },
  {
    value: "cabin",
    label: "Private Cabin",
    blurb: "Lockable, branded cabins from 2 to 40 seats.",
    cards: [
      {
        name: "Private Cabin",
        price: "₹9,000",
        unit: "per seat / month + GST",
        note: "Cabins 2 to 40 seats · billed per seat",
        features: ["High-speed Wi-Fi", "Hot beverages", "Meeting room credits", "Print credits", "Community events", "Ample parking", "Cafeteria & game zone"],
        highlight: true,
      },
    ],
  },
  {
    value: "meeting",
    label: "Meeting & Conference",
    blurb: "Bookable meeting and conference rooms for the moments that matter.",
    cards: [
      {
        name: "Meeting & Conference Room",
        unit: "On request",
        features: ["Hot beverages", "LED TV with HDMI", "Whiteboard with markers", "Housekeeping services", "Parking facility"],
        highlight: true,
      },
    ],
  },
];

export const InlinePlans = ({ location, locationSlug }: Props) => {
  const popularValue = "cabin";
  const tabs = (() => {
    if (!locationSlug) return TABS;
    const p = getLocationPricing(locationSlug);
    return TABS.map((t) => {
      if (t.value === "day") {
        return { ...t, cards: t.cards.map((c) => ({ ...c, price: formatINR(p.dayPass.priceExGst) })) };
      }
      if (t.value === "fixed") {
        return { ...t, cards: t.cards.map((c) => ({ ...c, price: formatINR(p.fixedDesk.monthlyExGst) })) };
      }
      if (t.value === "cabin") {
        return { ...t, cards: t.cards.map((c) => ({ ...c, price: formatINR(p.cabins[0].perSeatExGst) })) };
      }
      return t;
    });
  })();

  return (
    <section id="plans" className="py-12 md:py-16 bg-muted/40">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">Plans</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Plans &amp; Pricing in {location}</h2>
        </Reveal>

        {/* All categories */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 items-stretch">
          {tabs.map((t) => {
            const isPopular = t.value === popularValue;
            const headline = t.cards.find((c) => c.highlight) || t.cards[0];
            return (
              <div
                key={t.value}
                className={cn(
                  "group relative text-left rounded-2xl border-2 p-5 md:p-6 flex flex-col bg-card transition-all duration-300",
                  isPopular
                    ? "border-primary shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
                    : "border-border hover:border-primary/50 hover:-translate-y-0.5",
                )}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap shadow-md">
                    <Star className="h-3 w-3" /> Popular
                  </span>
                )}

                <h3 className={cn("font-extrabold text-lg md:text-xl leading-tight", isPopular && "text-primary")}>
                  {t.label}
                </h3>

                <div className="mt-3 flex items-baseline gap-1.5 flex-wrap">
                  {headline.price ? (
                    <>
                      <span className="text-2xl md:text-3xl font-extrabold text-foreground">{headline.price}</span>
                      <span className="text-sm text-muted-foreground">{headline.unit}</span>
                    </>
                  ) : (
                    <span className="text-xl md:text-2xl font-extrabold text-primary">{headline.unit}</span>
                  )}
                </div>

                {t.value === "universal" && (
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {t.cards.map((c) => (
                      <li key={c.name} className="flex justify-between gap-2">
                        <span className="text-foreground/80">{c.name.replace(" Pass", "")} · {c.note}</span>
                        <span className="font-bold text-foreground whitespace-nowrap">{c.price}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {headline.note && t.value !== "universal" && (
                  <p className="text-sm font-semibold text-primary mt-2">{headline.note}</p>
                )}

                <ul className="mt-4 space-y-2 flex-1">
                  {headline.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm md:text-[15px]">
                      <Check className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                      <span className="leading-snug text-foreground/85">{f}</span>
                    </li>
                  ))}
                </ul>

                <BookTourDialog
                  defaultLocation={locationSlug}
                  trigger={
                    <Button
                      size="sm"
                      className="mt-5 w-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      variant={isPopular ? "default" : "outline"}
                    >
                      Enquire
                    </Button>
                  }
                />
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 italic">
          *Universal Pass T&amp;C apply. Pricing indicative; final on inclusions.
        </p>
      </div>
    </section>
  );
};
