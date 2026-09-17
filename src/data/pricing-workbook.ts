// Pricing data sourced from the YesssWorks Data Collection Workbook.
// All prices in INR. GST 18% extra unless noted.

import type { LocationSlug } from "./locations";

export const BUILDING_LOCATION_SLUGS: LocationSlug[] = [
  "andheri-ackruti",
  "andheri-at",
  "andheri-pinnacle",
  "goregaon-271",
  "mahape-aurum-q6",
];

export interface DayPass {
  priceExGst: number;
  priceInclGst: number;
  hours: string;
}

export interface UniversalPass {
  name: "Silver" | "Gold" | "Platinum";
  days: number;
  priceExGst: number;
  priceInclGst: number;
}

export interface FixedDeskPlan {
  monthlyExGst: number;
  monthlyInclGst: number;
  deposit: number;
  lockIn: string;
  notice: string;
}

export interface CabinTier {
  seats: number;
  perSeatExGst: number;
  totalExGst: number;
  totalInclGst: number;
}

export interface MeetingRoom {
  seats: number;
  type: "Meeting Room" | "Conference Room";
  hourlyExGst: number;
  hourlyInclGst: number;
}

export interface LocationPricing {
  dayPass: DayPass;
  universalPasses: UniversalPass[];
  fixedDesk: FixedDeskPlan;
  cabins: CabinTier[];
  meetingRooms: MeetingRoom[];
  policies: {
    deposit: string;
    refund: string;
    lockIn: string;
    notice: string;
  };
  sales?: {
    name: string;
    phone: string;
    whatsapp: string;
    email: string;
    responseSla: string;
  };
}

const STANDARD_PASSES: UniversalPass[] = [
  { name: "Silver", days: 5, priceExGst: 2000, priceInclGst: 2360 },
  { name: "Gold", days: 10, priceExGst: 3500, priceInclGst: 4130 },
  { name: "Platinum", days: 15, priceExGst: 4500, priceInclGst: 5310 },
];

const STANDARD_DAY_PASS: DayPass = { priceExGst: 500, priceInclGst: 590, hours: "9 AM to 9 PM" };

// Day pass (ex-GST) overrides per building/area.
const DAY_PASS_PRICE: Partial<Record<LocationSlug, number>> = {
  "mahape-aurum-q6": 499,
  mahape: 499,
  "navi-mumbai": 499,
};

const dayPassFor = (loc: LocationSlug): DayPass => {
  const ex = DAY_PASS_PRICE[loc] ?? STANDARD_DAY_PASS.priceExGst;
  return { priceExGst: ex, priceInclGst: Math.round(ex * 1.18), hours: STANDARD_DAY_PASS.hours };
};

const CABIN_SEATS = [2, 4, 6, 8, 10, 15, 20, 30, 40];
const PER_SEAT = 9000;

// Private cabin per-seat (ex-GST) overrides per building/area.
const CABIN_PER_SEAT: Partial<Record<LocationSlug, number>> = {
  "mahape-aurum-q6": 8999,
  mahape: 8999,
  "navi-mumbai": 8999,
};

export const cabinPerSeatFor = (loc: LocationSlug) => CABIN_PER_SEAT[loc] ?? PER_SEAT;

const buildCabins = (loc?: LocationSlug): CabinTier[] => {
  const perSeat = loc ? cabinPerSeatFor(loc) : PER_SEAT;
  return CABIN_SEATS.map((s) => ({
    seats: s,
    perSeatExGst: perSeat,
    totalExGst: s * perSeat,
    totalInclGst: Math.round(s * perSeat * 1.18),
  }));
};

const STANDARD_MEETING_ROOMS: MeetingRoom[] = [
  { seats: 4, type: "Meeting Room", hourlyExGst: 700, hourlyInclGst: 826 },
  { seats: 6, type: "Meeting Room", hourlyExGst: 1000, hourlyInclGst: 1180 },
  { seats: 8, type: "Meeting Room", hourlyExGst: 1200, hourlyInclGst: 1416 },
  { seats: 10, type: "Meeting Room", hourlyExGst: 1500, hourlyInclGst: 1770 },
  { seats: 14, type: "Conference Room", hourlyExGst: 2500, hourlyInclGst: 2950 },
];

const STANDARD_POLICIES = {
  deposit: "3 months equivalent",
  refund: "Refund processed within 60 days of exit",
  lockIn: "12 months",
  notice: "60 days",
};

// Fixed Desk monthly (ex-GST) varies per building per the workbook.
const FIXED_DESK_PRICE: Record<LocationSlug, number> = {
  "andheri-ackruti": 7000,
  "andheri-at": 13000,
  "andheri-pinnacle": 9000,
  "goregaon-271": 12000,
  "mahape-aurum-q6": 6999,
  // legacy area-only slugs map to nearest building for fallback
  andheri: 7000,
  "andheri-east": 9000,
  goregaon: 12000,
  "goregaon-east": 12000,
  mahape: 6999,
  "navi-mumbai": 6999,
};

const fixedDeskFor = (loc: LocationSlug): FixedDeskPlan => {
  const ex = FIXED_DESK_PRICE[loc] ?? 7000;
  return {
    monthlyExGst: ex,
    monthlyInclGst: Math.round(ex * 1.18),
    deposit: ex * 3,
    lockIn: "12 months",
    notice: "60 days",
  };
};

export const locationPricing: Partial<Record<LocationSlug, LocationPricing>> = {};
for (const slug of BUILDING_LOCATION_SLUGS) {
  locationPricing[slug] = {
    dayPass: dayPassFor(slug),
    universalPasses: STANDARD_PASSES,
    fixedDesk: fixedDeskFor(slug),
    cabins: buildCabins(slug),
    meetingRooms: STANDARD_MEETING_ROOMS,
    policies: STANDARD_POLICIES,
  };
}

// Mahape sales contact from the workbook.
locationPricing["mahape-aurum-q6"]!.sales = {
  name: "Raj Gharat",
  phone: "+91 95943 90569",
  whatsapp: "+91 95943 90569",
  email: "raj.gharat@yesssworks.com",
  responseSla: "Within 24 hours",
};

export function getLocationPricing(slug: LocationSlug): LocationPricing {
  return locationPricing[slug] ?? {
    dayPass: dayPassFor(slug),
    universalPasses: STANDARD_PASSES,
    fixedDesk: fixedDeskFor(slug),
    cabins: buildCabins(slug),
    meetingRooms: STANDARD_MEETING_ROOMS,
    policies: STANDARD_POLICIES,
  };
}

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;