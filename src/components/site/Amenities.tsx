import { Wifi, Clock, Users, Building2, Coffee, Printer, Gamepad2, ParkingCircle, UserCheck } from "lucide-react";

const items = [
  { icon: Clock, label: "24/7 Access" },
  { icon: Wifi, label: "High Speed Internet" },
  { icon: UserCheck, label: "Onsite Admin Team" },
  { icon: Building2, label: "Custom Offices" },
  { icon: Coffee, label: "Unlimited Tea/Coffee" },
  { icon: Printer, label: "Business Class Printers" },
  { icon: Gamepad2, label: "Recreation & Gaming" },
  { icon: Users, label: "Community Access" },
  { icon: ParkingCircle, label: "Parking Services" },
];

export const Amenities = () => (
  <section className="py-16 bg-muted/40">
    <div className="container">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">Amenities Included</h2>
        <p className="text-muted-foreground mt-2">Everything you need to do your best work, every day.</p>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-8 max-w-3xl mx-auto">
        {items.map((it) => (
          <div key={it.label} className="flex flex-col items-center text-center gap-2">
            <div className="h-14 w-14 rounded-full bg-background border border-border grid place-items-center text-primary shadow-sm">
              <it.icon className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);