import type { ServiceSlug, LocationSlug } from "./site-routes";
import { realPhotos } from "@/data/real-photos";
const openDesks = realPhotos.openDesks;
const privateCabin = realPhotos.privateCabin;
const meetingRoom = realPhotos.meetingRoom;
const officeSuite = realPhotos.officeSuite;
const fixedDesk = realPhotos.fixedDesk;
export type { ServiceSlug, LocationSlug, PageRoute } from "./site-routes";
export {
  pageRoutes,
  buildingLocationSlugs,
  buildingPathSuffix,
  serviceLabels,
  locationLabels,
  lpLocationSlugs,
  allSiteRoutes,
  indexableRoutes,
  routeGroups,
} from "./site-routes";

export interface UpcomingLocation {
  name: string;
  city: string;
  region: string;
}

export const upcomingLocations: UpcomingLocation[] = [
  { name: "Ahmedabad", city: "Ahmedabad", region: "Gujarat" },
  { name: "Thane", city: "Thane", region: "Maharashtra" },
];

export interface ServiceConfig {
  slug: ServiceSlug;
  label: string;
  shortLabel: string;
  image: string;
  category: "Co-working Space" | "Fixed Desks" | "Meeting & Conference" | "Office Suites" | "Private Cabins" | "Virtual Office";
  intro: string;
  benefits: string[];
  ideal: string[];
  inclusions: string[];
}

export interface LocationConfig {
  slug: LocationSlug;
  name: string;
  area: string;
  city: string;
  region: string;
  description: string;
  landmarks: string[];
  postalCode?: string;
  hours: string;
  is24x7: boolean;
  googleRating?: number;
  googleReviews?: number;
  googleMapsUrl?: string;
  googleBusinessProfileUrl?: string;
  address?: string;
  nearby: {
    metro?: string[];
    train?: string[];
    airport?: string[];
    restaurants?: string[];
    malls?: string[];
  };
}


export const services: Record<ServiceSlug, ServiceConfig> = {
  "coworking-space": {
    slug: "coworking-space",
    label: "Coworking Space",
    shortLabel: "Coworking",
    image: openDesks,
    category: "Co-working Space",
    intro:
      "A vibrant, plug-and-play coworking space designed for solopreneurs, freelancers, startups and growing teams. Plug in your laptop and get to work surrounded by a high-spirited community.",
    benefits: [
      "Ultra-fast Wi-Fi & wired internet backup",
      "Ergonomic seating with sit-stand options",
      "Unlimited tea, coffee & filtered water",
      "Print, scan and copy at business class printers",
      "Friendly community of founders & creators",
    ],
    ideal: ["Remote & distributed teams", "Startups & founders", "Consultants", "Solopreneurs", "Freelancers"],
    inclusions: [
      "Hot desk access",
      "High-speed internet",
      "Meeting room credits",
      "Pantry & beverages",
      "24/7 access option",
    ],
  },
  "fixed-desk": {
    slug: "fixed-desk",
    label: "Fixed Desk",
    shortLabel: "Fixed Desk",
    image: fixedDesk,
    category: "Fixed Desks",
    intro:
      "Your own dedicated desk in a premium coworking environment. Keep your monitor, files and personal touches set up exactly the way you like, every single day.",
    benefits: [
      "Dedicated workstation, lockable storage",
      "Personalised setup with monitor support",
      "24/7 access for night owls and early birds",
      "Mail handling and reception support",
      "Free meeting room credits every month",
    ],
    ideal: ["Distributed team members", "Boutique agencies", "Independent professionals", "Long-term freelancers"],
    inclusions: [
      "Reserved desk",
      "Lockable pedestal",
      "Mailing address",
      "Pantry & beverages",
      "Meeting room credits",
    ],
  },
  "meeting-room": {
    slug: "meeting-room",
    label: "Meeting Room",
    shortLabel: "Meeting Room",
    image: meetingRoom,
    category: "Meeting & Conference",
    intro:
      "Bookable meeting rooms with modern AV setup, video conferencing and writeable walls, perfect for client pitches, brainstorms, and team off-sites.",
    benefits: [
      "Smart TV / projector with HDMI & wireless casting",
      "Crystal-clear video conferencing",
      "Whiteboards and stationery included",
      "Comfortable seating for 4 to 12 guests",
      "On-demand tea, coffee and refreshments",
    ],
    ideal: ["Client meetings", "Team workshops", "Investor pitches", "Interviews", "Training sessions"],
    inclusions: ["AV equipment", "Wi-Fi", "Whiteboard & markers", "Refreshments", "Reception support"],
  },
  "conference-room": {
    slug: "conference-room",
    label: "Conference Room",
    shortLabel: "Conference Room",
    image: meetingRoom,
    category: "Meeting & Conference",
    intro:
      "Premium conference rooms equipped for the moments that matter, board meetings, training programs, product launches and high-stakes presentations.",
    benefits: [
      "Boardroom-style seating for 10–20 people",
      "Large display, premium audio, video conferencing",
      "Centrally air-conditioned, sound-insulated",
      "Catering and concierge support on request",
      "Reception greeting for your guests",
    ],
    ideal: ["Board meetings", "Strategy off-sites", "Training & workshops", "Town halls", "Vendor presentations"],
    inclusions: ["Conference AV", "VC setup", "Whiteboard", "Catering options", "Greeter & reception"],
  },
  "office-suites": {
    slug: "office-suites",
    label: "Office Suites",
    shortLabel: "Office Suite",
    image: officeSuite,
    category: "Office Suites",
    intro:
      "Private, fully-furnished office suites for established teams who want their own branded space without the hassle of long leases, fit-outs or facility management.",
    benefits: [
      "Lockable private office for 6–60+ team members",
      "Director's cabin and meeting room included",
      "Custom branding inside your suite",
      "All-inclusive billing, utilities, housekeeping, security",
      "Operations support and registration NOC",
    ],
    ideal: ["Growing startups", "Regional offices", "Sales teams", "BPO/back-office units", "Enterprise satellite teams"],
    inclusions: ["Private suite", "Director cabin", "Meeting room", "IT & power backup", "Housekeeping"],
  },
  "private-cabin": {
    slug: "private-cabin",
    label: "Private Cabin",
    shortLabel: "Private Cabin",
    image: privateCabin,
    category: "Private Cabins",
    intro:
      "A self-contained private cabin for small teams of 2 to 8. Get the focus of a private office with the energy and amenities of a coworking community.",
    benefits: [
      "Soundproof, lockable cabin",
      "Furnished with desks, ergonomic chairs and storage",
      "Plug-and-play Wi-Fi and power backup",
      "Access to shared meeting rooms",
      "All amenities of YesssWorks included",
    ],
    ideal: ["Sales pods", "Legal & finance teams", "Stealth-mode startups", "Small teams (2–8)", "Founders"],
    inclusions: ["Lockable cabin", "Furniture", "Internet & power", "Pantry access", "Meeting room credits"],
  },
  "virtual-office": {
    slug: "virtual-office",
    label: "Virtual Office",
    shortLabel: "Virtual Office",
    image: officeSuite,
    category: "Virtual Office",
    intro:
      "A prestigious business address without the overheads of a physical office. Use it for GST registration, company incorporation and everyday mail handling, while you work from anywhere.",
    benefits: [
      "Premium business address for your letterhead and website",
      "GST registration support with all NOCs and agreements",
      "Company incorporation assistance at the same address",
      "Professional mail handling and forwarding",
      "Discounted access to meeting rooms and day passes",
    ],
    ideal: ["Remote-first founders", "E-commerce sellers", "Freelancers going full-time", "Startups expanding to a new city", "Consultants needing a registered address"],
    inclusions: ["Business address", "Mail handling", "GST registration support", "Company registration support", "Meeting room credits"],
  },
};

export const locations: Record<LocationSlug, LocationConfig> = {
  andheri: {
    slug: "andheri",
    name: "Andheri",
    area: "Andheri East",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "Located in the heart of one of Mumbai's busiest commercial areas, our Andheri campus puts you minutes from the metro, the Western Express Highway and the airport.",
    landmarks: ["Ackruti Softech Park", "Andheri MIDC", "Marol Naka Metro", "SEEPZ"],
    postalCode: "400093",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.8,
    googleReviews: 120,
    googleMapsUrl: "https://maps.app.goo.gl/MYSFRkrkBwjxy2ga6",
    address: "Ackruti Softech Park, Andheri (W), Mumbai 400093",
    nearby: {
      metro: ["Marol Naka Metro", "Andheri Metro"],
      train: ["Andheri Railway Station"],
      airport: ["Mumbai International Airport (8 km)"],
      restaurants: ["Bayroute", "Pa Pa Ya", "Starbucks", "Theobroma"],
      malls: ["Infiniti Mall", "Citi Mall"],
    },
  },
  "andheri-east": {
    slug: "andheri-east",
    name: "Andheri East",
    area: "Andheri East",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "Right at the centre of Mumbai's bustling east, close to Marol, MIDC, SEEPZ and the international airport. The perfect launchpad for fast-growing teams.",
    landmarks: ["Marol", "MIDC", "SEEPZ", "Mumbai International Airport"],
    postalCode: "400069",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.8,
    googleReviews: 95,
    googleMapsUrl: "https://maps.app.goo.gl/3UFbu7VeRXXcxu957",
    address: "Pinnacle Business Park, Andheri (E), Mumbai 400069",
    nearby: {
      metro: ["Marol Naka Metro", "Saki Naka Metro", "Andheri Metro"],
      train: ["Andheri Railway Station"],
      airport: ["Mumbai International Airport (5 km)"],
      restaurants: ["JW Marriott", "The Westin", "Pind Balluchi", "Café Mangii"],
      malls: ["Phoenix Marketcity Kurla", "Infiniti Mall"],
    },
  },
  goregaon: {
    slug: "goregaon",
    name: "Goregaon",
    area: "Goregaon East",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "A modern coworking campus in Goregaon, well-connected by the Western Express Highway and the Goregaon railway station, ideal for teams across the western suburbs.",
    landmarks: ["Oberoi Mall", "Goregaon Station", "Film City Road"],
    postalCode: "400062",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.7,
    googleReviews: 70,
    address: "Goregaon East, Mumbai 400062",
    nearby: {
      metro: ["Goregaon Metro (Line 7)"],
      train: ["Goregaon Railway Station"],
      airport: ["Mumbai International Airport (12 km)"],
      restaurants: ["Mainland China", "Barbeque Nation", "Smoke House Deli"],
      malls: ["Oberoi Mall", "Inorbit Mall Malad"],
    },
  },
  "goregaon-east": {
    slug: "goregaon-east",
    name: "Goregaon East",
    area: "Goregaon East",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "Our Goregaon East workspace at 271 Business Park puts you in the middle of one of Mumbai's most active business corridors, off the Western Express Highway.",
    landmarks: ["271 Business Park", "Nesco IT Park", "Western Express Highway"],
    postalCode: "400063",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.8,
    googleReviews: 85,
    googleMapsUrl: "https://maps.app.goo.gl/ohRrE5h7cmAdVTkW6",
    address: "271 Business Park, Goregaon (E), Mumbai 400063",
    nearby: {
      metro: ["Goregaon Metro (Line 7)"],
      train: ["Goregaon Railway Station"],
      airport: ["Mumbai International Airport (10 km)"],
      restaurants: ["JW Marriott Sahar", "Holiday Inn", "Cafe Coffee Day"],
      malls: ["Oberoi Mall", "Nesco IT Park food court"],
    },
  },
  mahape: {
    slug: "mahape",
    name: "Mahape",
    area: "Mahape, Navi Mumbai",
    city: "Navi Mumbai",
    region: "Maharashtra",
    description:
      "A high-tech workspace at Aurum Q6, Millenium Business Park, Mahape, at the centre of Navi Mumbai's IT and BFSI ecosystem.",
    landmarks: ["Millenium Business Park", "Aurum Q6", "Mahape MIDC", "Reliance Corporate Park"],
    postalCode: "400710",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.1,
    googleReviews: 140,
    googleMapsUrl: "https://maps.app.goo.gl/K1toCkGq44VEgVYK9",
    address: "Aurum Q6, Millenium Business Park, Sector 2, Mahape, Navi Mumbai, Maharashtra 400710",
    nearby: {
      metro: ["Ghansoli Metro (upcoming)"],
      train: ["Ghansoli Station", "Rabale Station"],
      airport: ["Navi Mumbai International Airport (18 km)"],
      restaurants: ["Hotel Four Points by Sheraton", "Cafe Marriott", "Subway"],
      malls: ["Inorbit Mall Vashi", "Raghuleela Mall"],
    },
  },
  "navi-mumbai": {
    slug: "navi-mumbai",
    name: "Navi Mumbai",
    area: "Navi Mumbai",
    city: "Navi Mumbai",
    region: "Maharashtra",
    description:
      "Our Navi Mumbai campuses bring together fast internet, modern interiors and a thriving community, across Mahape, Vashi-belt and the Millenium Business Park corridor.",
    landmarks: ["Millenium Business Park", "Vashi", "Airoli", "Ghansoli"],
    postalCode: "400710",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.9,
    googleReviews: 140,
    address: "Millenium Business Park, Navi Mumbai 400710",
    nearby: {
      metro: ["Ghansoli Metro (upcoming)"],
      train: ["Vashi", "Ghansoli", "Rabale", "Airoli"],
      airport: ["Navi Mumbai International Airport (18 km)"],
      restaurants: ["Four Points Sheraton", "Marriott Vashi", "Mainland China"],
      malls: ["Inorbit Mall Vashi", "Raghuleela Mall", "Centre One Mall"],
    },
  },
  "andheri-at": {
    slug: "andheri-at",
    name: "Andheri, AT",
    area: "AT. By AGM Vijaylaxmi, Andheri (W)",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "YesssWorks at AT. By AGM Vijaylaxmi puts you in the heart of Andheri East, minutes from the metro, the Western Express Highway and Andheri railway station.",
    landmarks: ["Andheri Metro", "Andheri Station", "Western Express Highway"],
    postalCode: "400058",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.6,
    googleReviews: 60,
    googleMapsUrl: "https://share.google/P820zD7t44OwdRhxj",
    googleBusinessProfileUrl: "https://share.google/LbPOcOCXecTKMUXSv",
    address: "9th Floor, AT By AGM VIJAYLAXMI, Mahakali Caves Road, Andheri - Kurla Rd, MIDC, Andheri East, Mumbai, Maharashtra 400093",
    nearby: {
      metro: ["Andheri Metro", "DN Nagar Metro"],
      train: ["Andheri Railway Station"],
      airport: ["Mumbai International Airport (6 km)"],
      restaurants: ["Bayroute", "Theobroma", "Starbucks"],
      malls: ["Infiniti Mall", "Citi Mall"],
    },
  },
  "andheri-pinnacle": {
    slug: "andheri-pinnacle",
    name: "Andheri, Pinnacle Business Park",
    area: "Pinnacle Business Park, Andheri (E)",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "A premium workspace inside Pinnacle Business Park, one of Andheri East's most recognised commercial towers, walking distance from the metro and minutes from the airport.",
    landmarks: ["Pinnacle Business Park", "Marol Naka Metro", "MIDC", "Mumbai International Airport"],
    postalCode: "400069",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.7,
    googleReviews: 110,
    googleMapsUrl: "https://share.google/YuiEgQenSsdpPpCa4",
    googleBusinessProfileUrl: "https://share.google/E40vW9NsdLqANtnH7",
    address: "S14, Second Floor, Pinnacle Business Park, Mahakali Caves Road, Andheri - Kurla Rd, M.I.D.C, Andheri East, Mumbai, Maharashtra 400093",
    nearby: {
      metro: ["Marol Naka Metro", "Saki Naka Metro"],
      train: ["Andheri Railway Station"],
      airport: ["Mumbai International Airport (5 km)"],
      restaurants: ["JW Marriott", "The Westin", "Café Mangii"],
      malls: ["Phoenix Marketcity Kurla", "Infiniti Mall"],
    },
  },
  "andheri-ackruti": {
    slug: "andheri-ackruti",
    name: "Andheri, Ackruti Softech Park",
    area: "Ackruti Softech Park, Andheri (E)",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "Plug into Andheri's IT corridor at Ackruti Softech Park, surrounded by tech parks, MIDC and SEEPZ, with the airport and metro just minutes away.",
    landmarks: ["Ackruti Softech Park", "MIDC", "SEEPZ", "Marol Naka Metro"],
    postalCode: "400093",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.1,
    googleReviews: 95,
    googleMapsUrl: "https://share.google/STkfs2sQ9qWstBlqn",
    googleBusinessProfileUrl: "https://share.google/b7gTf6FCD68zUEKkT",
    address: "3rd Floor, Ackruti Softech Park, Shree Krishna Nagar, Marol MIDC Industry Estate, Andheri East, Mumbai, Maharashtra 400093",
    nearby: {
      metro: ["Marol Naka Metro", "Andheri Metro"],
      train: ["Andheri Railway Station"],
      airport: ["Mumbai International Airport (8 km)"],
      restaurants: ["Bayroute", "Pa Pa Ya", "Starbucks"],
      malls: ["Infiniti Mall", "Citi Mall"],
    },
  },
  "goregaon-271": {
    slug: "goregaon-271",
    name: "Goregaon, 271 Business Park",
    area: "271 Business Park, Goregaon (E)",
    city: "Mumbai",
    region: "Maharashtra",
    description:
      "A modern campus inside 271 Business Park, off the Western Express Highway, Goregaon East's busiest business corridor, next to Nesco IT Park.",
    landmarks: ["271 Business Park", "Nesco IT Park", "Western Express Highway", "Oberoi Mall"],
    postalCode: "400063",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.4,
    googleReviews: 90,
    googleMapsUrl: "https://share.google/6tk9BhGhQLcfC0gQa",
    googleBusinessProfileUrl: "https://share.google/TFk8Xaxb7kahFjkKY",
    address: "1st Floor, 271 Business Park, Model Industrial Estate, near Virwani Industrial Estate, off Western Express Highway, Vishveshwar Nagar, Goregaon East, Mumbai, Maharashtra 400063",
    nearby: {
      metro: ["Goregaon Metro (Line 7)"],
      train: ["Goregaon Railway Station"],
      airport: ["Mumbai International Airport (10 km)"],
      restaurants: ["JW Marriott Sahar", "Holiday Inn"],
      malls: ["Oberoi Mall", "Inorbit Mall Malad"],
    },
  },
  "mahape-aurum-q6": {
    slug: "mahape-aurum-q6",
    name: "Mahape, Aurum Q6",
    area: "Aurum Q6, Millenium Business Park, Mahape",
    city: "Navi Mumbai",
    region: "Maharashtra",
    description:
      "Our flagship Navi Mumbai workspace at Aurum Q6, Millenium Business Park, at the heart of Mahape's IT and BFSI ecosystem, with rooftop views and 24x7 access.",
    landmarks: ["Aurum Q6", "Millenium Business Park", "Mahape MIDC", "Reliance Corporate Park"],
    postalCode: "400710",
    hours: "24x7 access",
    is24x7: true,
    googleRating: 4.1,
    googleReviews: 145,
    googleMapsUrl: "https://share.google/PnFCGoBlEYXOzTivg",
    googleBusinessProfileUrl: "https://share.google/U2sFQ4n3Z3FwTUhTX",
    address: "Aurum Q6, Millenium Business Park, Sector 2, Mahape, Navi Mumbai, Maharashtra 400710",
    nearby: {
      metro: ["Ghansoli Metro (upcoming)"],
      train: ["Ghansoli Station", "Rabale Station"],
      airport: ["Navi Mumbai International Airport (18 km)"],
      restaurants: ["Four Points by Sheraton", "Subway"],
      malls: ["Inorbit Mall Vashi", "Raghuleela Mall"],
    },
  },
};

export const SITE = {
  name: "YesssWorks",
  domain: "https://yesssworks.com",
  phone: "+91 89295 04480",
  phoneTel: "+918929504480",
  email: "contact@yesssworks.com",
  tagline: "Creative Workspace for Inspired Minds",
};

export const CLIENTS: string[] = [
  "JM Financial",
  "HDFC ERGO",
  "Reliance General Insurance",
  "Roche",
  "Bajaj Electricals",
  "Sugar Cosmetics",
  "DTDC",
  "Almondz",
  "CarDekho",
  "Realatte",
  "Kitchen365",
  "SynapseWave",
  "Iorta",
  "Centricity",
  "Arnold Holdings",
  "Recity",
  "ORN Vacations",
  "Expertrons",
  "Eastvantage",
  "GoAir",
];

export interface PricingPlan {
  service: ServiceSlug;
  name: string;
  price: number;
  unit: string;
  features: string[];
  highlight?: boolean;
}

export const pricingPlans: Record<ServiceSlug, PricingPlan[]> = {
  "coworking-space": [
    { service: "coworking-space", name: "Day Pass", price: 599, unit: "/ day", features: ["Hot desk", "Wi-Fi", "Pantry", "1 hr meeting room"] },
    { service: "coworking-space", name: "Monthly", price: 6999, unit: "/ month", features: ["Unlimited hot desks", "8 meeting hrs", "Mail handling", "Community events"], highlight: true },
    { service: "coworking-space", name: "Quarterly", price: 19999, unit: "/ quarter", features: ["Save 5%", "Unlimited hot desks", "10 meeting hrs/mo", "All amenities"] },
    { service: "coworking-space", name: "Annual", price: 74999, unit: "/ year", features: ["Save 12%", "Locker", "20 meeting hrs/mo", "All-location access"] },
  ],
  "fixed-desk": [
    { service: "fixed-desk", name: "Monthly", price: 9999, unit: "/ month", features: ["Reserved desk", "Lockable storage", "8 meeting hrs"], highlight: true },
    { service: "fixed-desk", name: "Quarterly", price: 27999, unit: "/ quarter", features: ["Save 7%", "All amenities", "Mail handling"] },
    { service: "fixed-desk", name: "Annual", price: 99999, unit: "/ year", features: ["Save 17%", "All-location access", "20 meeting hrs/mo"] },
  ],
  "private-cabin": [
    { service: "private-cabin", name: "2-Seater", price: 24999, unit: "/ month", features: ["Lockable cabin", "Furniture", "All amenities"] },
    { service: "private-cabin", name: "4-Seater", price: 44999, unit: "/ month", features: ["Lockable cabin", "Furniture", "All amenities"], highlight: true },
    { service: "private-cabin", name: "6-Seater", price: 64999, unit: "/ month", features: ["Lockable cabin", "Furniture", "All amenities"] },
  ],
  "meeting-room": [
    { service: "meeting-room", name: "Hourly", price: 499, unit: "/ hour", features: ["Up to 6 people", "AV setup", "Wi-Fi"] },
    { service: "meeting-room", name: "Half-day", price: 1999, unit: "/ 4 hrs", features: ["Up to 8 people", "AV + whiteboard", "Refreshments"], highlight: true },
    { service: "meeting-room", name: "Full-day", price: 3499, unit: "/ 8 hrs", features: ["Up to 8 people", "AV + whiteboard", "Tea/coffee"] },
  ],
  "conference-room": [
    { service: "conference-room", name: "Hourly", price: 1499, unit: "/ hour", features: ["Up to 20 people", "Premium AV", "VC-ready"] },
    { service: "conference-room", name: "Half-day", price: 5999, unit: "/ 4 hrs", features: ["Up to 20 people", "Catering options"], highlight: true },
    { service: "conference-room", name: "Full-day", price: 9999, unit: "/ 8 hrs", features: ["Up to 20 people", "Catering options", "Reception"] },
  ],
  "office-suites": [
    { service: "office-suites", name: "10-Seater", price: 99999, unit: "/ month", features: ["Private suite", "Director cabin", "Branding allowed"] },
    { service: "office-suites", name: "20-Seater", price: 189999, unit: "/ month", features: ["Private suite", "Meeting room", "Housekeeping"], highlight: true },
    { service: "office-suites", name: "Custom", price: 0, unit: "Talk to us", features: ["30+ seats", "Custom build-out", "Dedicated SLA"] },
  ],
  "virtual-office": [
    { service: "virtual-office", name: "Mail Handling", price: 999, unit: "/ month + GST", features: ["Business address for use on letterhead", "Mail & courier receiving", "Monthly mail forwarding", "Email notification on arrival"] },
    { service: "virtual-office", name: "GST Registration", price: 1499, unit: "/ month + GST", features: ["Everything in Mail Handling", "GST registration address & NOC", "Rent agreement for GST filing", "Support through the GST approval process"], highlight: true },
    { service: "virtual-office", name: "Business Address + Company Registration", price: 1999, unit: "/ month + GST", features: ["Everything in GST Registration", "Company/LLP incorporation address", "MCA-ready NOC & documentation", "2 meeting room hours every month"] },
  ],
};
/** Joins a place with its city without saying the city twice.
 *  "Mahape, Navi Mumbai" + "Navi Mumbai" stays "Mahape, Navi Mumbai". */
export function withCity(place?: string, city?: string): string {
  const p = (place ?? "").trim();
  const c = (city ?? "").trim();
  if (!p) return c;
  if (!c) return p;
  const pl = p.toLowerCase();
  const cl = c.toLowerCase();
  if (pl === cl || pl.includes(cl) || cl.includes(pl)) return p;
  return `${p}, ${c}`;
}

/** Area + city label for a location, de-duplicated. */
export function placeLabel(loc?: { area?: string; city?: string } | null): string {
  if (!loc) return "Mumbai";
  return withCity(loc.area, loc.city);
}

/** Name + city label for a location, de-duplicated. */
export function nameLabel(loc?: { name?: string; city?: string } | null): string {
  if (!loc) return "Mumbai";
  return withCity(loc.name, loc.city);
}
