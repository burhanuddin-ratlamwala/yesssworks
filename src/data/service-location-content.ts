import type { LocationSlug, ServiceSlug } from "./locations";

export interface ServiceLocationContent {
  heroEyebrow: string;
  heroIntro: string;
  whyHereTitle: string;
  whyHereBody: string;
  neighbourhoodPitch: string;
}

type Map = Partial<Record<LocationSlug, ServiceLocationContent>>;

// Helper: building/variant slugs fall back to their parent area
const parentOf: Partial<Record<LocationSlug, LocationSlug>> = {
  "andheri-at": "andheri",
  "andheri-pinnacle": "andheri-east",
  "andheri-ackruti": "andheri-east",
  "goregaon-271": "goregaon-east",
  "mahape-aurum-q6": "mahape",
};

// ============= MEETING ROOM =============
const meetingRoom: Map = {
  andheri: {
    heroEyebrow: "Hourly Meeting Rooms in Andheri East",
    heroIntro:
      "Pitching a brand. Briefing a director. Reviewing a cut. Andheri East moves fast, book a soundproof meeting room near the metro and walk in ready, with AV that doesn't fight you.",
    whyHereTitle: "Built for Andheri's Agencies, Post-Houses and Creators",
    whyHereBody:
      "Andheri East is back-to-back client visits and last-minute reviews. Our hourly meeting rooms sit minutes from Infiniti Mall and Andheri Metro, easy for clients flying in from anywhere in Mumbai.",
    neighbourhoodPitch:
      "Walk-in distance from Andheri Metro and Infiniti Mall. Park-and-walk easy for guests from Lokhandwala, Versova and Juhu.",
  },
  "andheri-east": {
    heroEyebrow: "Meeting Rooms Inside Mumbai's IT Corridor",
    heroIntro:
      "Five minutes from the airport. Ten minutes from MIDC and SEEPZ. The right room for partner meetings, vendor reviews and the kind of demo where the Wi-Fi can't drop.",
    whyHereTitle: "Wired for IT Teams, BFSI Partners and Airport-Side Meetings",
    whyHereBody:
      "Andheri East runs on demos, integrations and partner reviews. Our rooms ship with redundant fibre, dual-display setups and a meeting calendar that distributed teams actually rely on.",
    neighbourhoodPitch:
      "Direct access from the international airport, Marol Naka Metro and the Western Express Highway, easy for fly-in clients.",
  },
  goregaon: {
    heroEyebrow: "Hourly Meeting Rooms in Goregaon East",
    heroIntro:
      "Skip the BKC trek. Book a quiet, AV-ready meeting room a 10-minute walk from Goregaon station and Oberoi Mall, for the team that actually lives in the western suburbs.",
    whyHereTitle: "The Western-Suburb Meeting Room Your Clients Can Actually Reach",
    whyHereBody:
      "If you're hosting clients from Malad, Borivali, Andheri or Bandra, Goregaon East is the fairest meeting point. Calm rooms, fast Wi-Fi, no two-hour traffic detour.",
    neighbourhoodPitch:
      "Goregaon railway station, Oberoi Mall and the Western Express Highway, all within 10 minutes.",
  },
  "goregaon-east": {
    heroEyebrow: "Meeting Rooms at 271 Business Park",
    heroIntro:
      "A premium meeting room inside Goregaon East's busiest commercial address, for the growth-stage teams who skipped BKC rent but still need to look the part.",
    whyHereTitle: "BKC Polish, Goregaon East Rent",
    whyHereBody:
      "Inside 271 Business Park: secured lobbies, branded reception, and meeting rooms equipped for serious investor and partner conversations.",
    neighbourhoodPitch:
      "Right off the Western Express Highway, next to Nesco IT Park and a short hop from Goregaon Metro.",
  },
  mahape: {
    heroEyebrow: "Meeting Rooms at Aurum Q6, Mahape",
    heroIntro:
      "Navi Mumbai's enterprise corridor finally has a meeting room that matches its scale. Boardroom, huddle, discussion and phone-booth formats, all under one rooftop, all bookable by the hour.",
    whyHereTitle: "Meet without Crossing the Bridge",
    whyHereBody:
      "If your team or your client is anywhere from Vashi to Airoli, Mahape saves everyone the bridge crossing. Our rooms inside Aurum Q6 are trusted by teams from JM Financial, HDFC ERGO and Roche.",
    neighbourhoodPitch:
      "Inside Millenium Business Park, surrounded by Reliance Corporate Park, TCS, IBM and L&T Infotech.",
  },
  "navi-mumbai": {
    heroEyebrow: "Meeting Rooms across Navi Mumbai",
    heroIntro:
      "One booking, every Navi Mumbai location. Pick the meeting room closest to your client, Mahape, Vashi belt or the Millenium Park corridor, and we'll have it set up before you walk in.",
    whyHereTitle: "A Meeting Room Near Every Navi Mumbai Client",
    whyHereBody:
      "Navi Mumbai is a corridor, not a single market. Our network gives your sales team the optionality to meet anywhere from Mahape to Vashi without booking blind on a third-party app.",
    neighbourhoodPitch:
      "Floors across Mahape and the Millenium Business Park belt, easy from Vashi, Airoli, Ghansoli and Rabale.",
  },
};

// ============= CONFERENCE ROOM =============
const conferenceRoom: Map = {
  andheri: {
    heroEyebrow: "Premium Conference Space in Andheri",
    heroIntro:
      "Brand launches, screening sessions, town halls, Andheri's media scene needs a room with cinema-grade AV and the seating layout to match. We deliver both.",
    whyHereTitle: "Built for Andheri's Launches, Screenings and Town Halls",
    whyHereBody:
      "From production house wraps to brand reveals, our Andheri conference rooms come with 4K display, theatre seating up to 50 and an event coordinator who handles guest reception while you focus on the room.",
    neighbourhoodPitch:
      "Easy guest access from Andheri Metro, Andheri railway station and the airport, minutes from Infiniti Mall.",
  },
  "andheri-east": {
    heroEyebrow: "Conference Rooms in Mumbai's IT Belt",
    heroIntro:
      "Strategy off-sites, partner roundtables, all-hands. The kind of meeting where 30 people fly in from 3 cities and the AV had better just work.",
    whyHereTitle: "Where IT and BFSI Teams Host the Meetings That Matter",
    whyHereBody:
      "Centrally air-conditioned, sound-insulated, dual-screen, VC-bridge ready, and a 5-minute Ola from the international airport for your fly-in attendees.",
    neighbourhoodPitch:
      "5 km from Mumbai International Airport. Marol Naka and Saki Naka Metro within walking distance.",
  },
  goregaon: {
    heroEyebrow: "Conference Space in Goregaon East",
    heroIntro:
      "A premium boardroom and event space for the western suburbs, without the South Mumbai commute, without the South Mumbai pricing.",
    whyHereTitle: "A Serious Event Venue for the Western Suburbs",
    whyHereBody:
      "Catered launches, training programs, leadership off-sites, held a 10-minute walk from Goregaon Station, with parking that doesn't make your guests circle the block.",
    neighbourhoodPitch:
      "Goregaon Station, Oberoi Mall and the Western Express Highway, easy from Malad to Bandra.",
  },
  "goregaon-east": {
    heroEyebrow: "Conference Rooms at 271 Business Park",
    heroIntro:
      "Where Mumbai's growth-stage teams host their board meetings, inside one of the city's most recognised commercial towers, off the Western Express Highway.",
    whyHereTitle: "Board-Grade Conferences without the BKC Overhead",
    whyHereBody:
      "Boardroom, theatre or U-shape, set the way you want by the time you arrive. Catering coordinated, reception briefed, AV pre-tested.",
    neighbourhoodPitch:
      "271 Business Park, next to Nesco IT Park. Goregaon Station and the Metro line within minutes.",
  },
  mahape: {
    heroEyebrow: "Premium Conferences at Aurum Q6, Mahape",
    heroIntro:
      "Town halls for 200, board meetings for 12, training for 40, Navi Mumbai's most equipped conference floor finally exists. And it's at Aurum Q6.",
    whyHereTitle: "The Navi Mumbai Venue for Offsites, All-Hands and Launches",
    whyHereBody:
      "Trusted by enterprise teams across Mahape's IT corridor. Premium AV, on-site catering, branded signage and a rooftop for the after-party.",
    neighbourhoodPitch:
      "Inside Millenium Business Park, walking distance from TCS, Reliance and L&T Infotech.",
  },
  "navi-mumbai": {
    heroEyebrow: "Conference Venues across Navi Mumbai",
    heroIntro:
      "From a 50-person product launch in Mahape to a 12-person investor meeting in the Vashi belt, pick the right Navi Mumbai venue and we'll handle the rest.",
    whyHereTitle: "Conference Rooms across the Satellite City",
    whyHereBody:
      "Navi Mumbai's enterprise belt has matured, and its conference needs deserve more than a hotel banquet. Our network gives you AV-grade rooms with Mumbai-grade hospitality.",
    neighbourhoodPitch:
      "Floors across Mahape, Millenium Business Park and the wider Navi Mumbai corridor.",
  },
};

// ============= PRIVATE CABIN =============
const privateCabin: Map = {
  andheri: {
    heroEyebrow: "Lockable Team Cabins in Andheri East",
    heroIntro:
      "A door of your own, in the heart of Mumbai's media capital. Soundproof, brandable, and walking distance from Andheri Metro, for boutique agencies and lean creative teams.",
    whyHereTitle: "Cabins for Andheri's Agencies, Post-Houses and Consultants",
    whyHereBody:
      "Andheri East runs on small, focused crews, editing pods, PR teams, design studios. Cabins here are sized exactly for that: 2 to 8 seats, soundproofed for client calls, brandable on the door.",
    neighbourhoodPitch:
      "Walk-in from Andheri Metro and Infiniti Mall. Lokhandwala, Versova and Juhu within 15 minutes.",
  },
  "andheri-east": {
    heroEyebrow: "Private Cabins in Mumbai's IT Corridor",
    heroIntro:
      "Lockable cabins for product teams, IT services and BFSI satellite offices, minutes from Marol, MIDC and the airport, with the redundant connectivity those workloads demand.",
    whyHereTitle: "Cabins Built for IT, Fintech and Travelling Consultants",
    whyHereBody:
      "Soundproofed for late-night customer calls, plug-and-play for your team's monitors, and locked tight when you fly out for the week.",
    neighbourhoodPitch:
      "Mumbai International Airport, Marol Naka Metro and SEEPZ, all inside a 10-minute radius.",
  },
  goregaon: {
    heroEyebrow: "Team Cabins in Goregaon East",
    heroIntro:
      "A private cabin near home, for western-suburb founders done with the daily Bandra crawl. Quiet, lockable, brandable, and a short walk from Goregaon Station.",
    whyHereTitle: "Cabins for the Western-Suburb Founders Skipping the Commute",
    whyHereBody:
      "Most of our Goregaon cabin members were once commuting to Lower Parel or BKC. Now they walk in. The setup, the meeting rooms and the community are the same, the commute is gone.",
    neighbourhoodPitch:
      "10 minutes from Goregaon Station, Oberoi Mall and the Western Express Highway.",
  },
  "goregaon-east": {
    heroEyebrow: "Cabins at 271 Business Park",
    heroIntro:
      "Lockable, branded cabins inside one of Goregaon East's most recognised business addresses, perfect for Series-A teams who want the look of a real office without the lease.",
    whyHereTitle: "Cabins for Growth-Stage Teams Skipping BKC Rent",
    whyHereBody:
      "271 Business Park puts your team behind a real lobby, with real elevators and real security, exactly the address Series-A founders want on their offer letters.",
    neighbourhoodPitch:
      "271 Business Park, Nesco IT Park and the Western Express Highway, easy reach from BKC and Andheri.",
  },
  mahape: {
    heroEyebrow: "Branded Private Cabins at Aurum Q6",
    heroIntro:
      "From a single founder cabin to a 40-seat sales pod, our Mahape cabin floor scales with you. Already trusted by JM Financial, HDFC ERGO and Roche.",
    whyHereTitle: "The Cabin Floor Navi Mumbai's Enterprise Teams Chose",
    whyHereBody:
      "Custom-branded cabins, secured floor access and a campus that hosts 500+ professionals every day. Real photos, real teams, real outcomes.",
    neighbourhoodPitch:
      "Inside Aurum Q6, Millenium Business Park, Reliance, TCS and L&T Infotech as your neighbours.",
  },
  "navi-mumbai": {
    heroEyebrow: "Lockable Cabins across Navi Mumbai",
    heroIntro:
      "Pick a cabin in Mahape, the Millenium Park belt or anywhere in our Navi Mumbai network, and access every other YesssWorks floor whenever you need it.",
    whyHereTitle: "Cabins across Navi Mumbai's Growing Corridor",
    whyHereBody:
      "Navi Mumbai is becoming a cabin-first market, quieter streets, better parking, real ground-floor cafés. Our cabins fit straight into that lifestyle.",
    neighbourhoodPitch:
      "Mahape, Vashi belt and the Millenium Business Park corridor, bridge-free working life.",
  },
};

// ============= OFFICE SUITES =============
const officeSuites: Map = {
  andheri: {
    heroEyebrow: "Branded Office Suites in Andheri East",
    heroIntro:
      "A full private floor for your team in the heart of Andheri East's media and creative belt, fitted, branded, and ready before your next quarter starts.",
    whyHereTitle: "Suites for Andheri's Mid-Market Agencies and Studios",
    whyHereBody:
      "Production houses, post-production studios, regional sales teams, Andheri suites are designed for the operations Mumbai actually runs from here.",
    neighbourhoodPitch:
      "Andheri Metro, Infiniti Mall, the Western Express Highway, and a 15-minute drive to the airport.",
  },
  "andheri-east": {
    heroEyebrow: "Enterprise-Grade Suites Near the Airport",
    heroIntro:
      "Branded private offices for global teams that want airport-adjacent operations, ISO-grade security and a footprint that scales as the headcount does.",
    whyHereTitle: "The Enterprise Suite Address Mumbai's Global Teams Pick",
    whyHereBody:
      "Andheri East is where multinationals build their Mumbai presence. Our suites match the playbook, branded reception, isolated IT, NDA-ready operations.",
    neighbourhoodPitch:
      "5 km from Mumbai International Airport. Pinnacle, Marol and SEEPZ, your neighbours.",
  },
  goregaon: {
    heroEyebrow: "Private Office Suites in Goregaon East",
    heroIntro:
      "A serious private office for serious western-suburb teams, without crossing into BKC pricing or signing a 9-year lease.",
    whyHereTitle: "Suites for the Western Suburbs' Growth Stage",
    whyHereBody:
      "Goregaon East's quiet, well-connected campuses are quietly becoming home to fast-scaling teams who priced out of Bandra-Kurla.",
    neighbourhoodPitch:
      "Goregaon Metro, Oberoi Mall, Western Express Highway, and direct rail to the rest of Mumbai.",
  },
  "goregaon-east": {
    heroEyebrow: "Branded HQ Suites at 271 Business Park",
    heroIntro:
      "Your own branded headquarters inside Goregaon East's busiest tower, exactly the suite Series-B teams set up while keeping options open.",
    whyHereTitle: "Branded HQ Floors at Goregaon East Rates",
    whyHereBody:
      "Director cabins, dedicated meeting rooms, signage on the floor and reception in your name, without the long lease.",
    neighbourhoodPitch:
      "271 Business Park, next to Nesco IT Park and the Western Express Highway.",
  },
  mahape: {
    heroEyebrow: "Enterprise Office Suites at Aurum Q6",
    heroIntro:
      "Custom-built private floors for enterprises in Navi Mumbai's IT and BFSI heartland. Already chosen by JM Financial, HDFC ERGO and Roche.",
    whyHereTitle: "Where Navi Mumbai's Enterprise Teams Take a Full Floor",
    whyHereBody:
      "Audit-ready operations, isolated IT, branded reception and full facility management, the kind of suite that passes a Big 4 walkthrough.",
    neighbourhoodPitch:
      "Aurum Q6, Millenium Business Park, surrounded by Reliance Corporate Park and the Mahape MIDC belt.",
  },
  "navi-mumbai": {
    heroEyebrow: "Office Suites across Navi Mumbai",
    heroIntro:
      "From a 25-seat regional office in Mahape to a 100-seat operations floor across the Millenium Park belt, a Navi Mumbai suite to match every stage.",
    whyHereTitle: "Suites across the Satellite City's Enterprise Corridor",
    whyHereBody:
      "Navi Mumbai is now where India's BFSI back-offices, BPOs and IT centres scale. Our suites are designed exactly for that growth.",
    neighbourhoodPitch:
      "Mahape, Vashi belt and the Millenium Business Park corridor, better roads, better parking, real campus life.",
  },
};

// ============= FIXED DESK =============
const fixedDesk: Map = {
  andheri: {
    heroEyebrow: "Dedicated Desks in Andheri East",
    heroIntro:
      "Your desk, your monitor, your pedestal, every day, in the middle of Mumbai's busiest creative belt. Walk in past midnight if your edit needs it.",
    whyHereTitle: "Fixed Desks for Andheri's Editors, Designers and Indie Creators",
    whyHereBody:
      "Andheri East runs on independent talent, editors, designers, music producers, freelance strategists. A fixed desk here means your gear stays set up between shoots and your routine doesn't break.",
    neighbourhoodPitch:
      "Andheri Metro, Infiniti Mall and Lokhandwala, coffee, food and groceries already sorted.",
  },
  "andheri-east": {
    heroEyebrow: "Dedicated Desks in the IT Corridor",
    heroIntro:
      "A productive, dual-monitor-ready desk inside Mumbai's IT belt, perfect for distributed engineers, pre-sales consultants and travelling product folks.",
    whyHereTitle: "Desks Built for Product Teams and Travelling Consultants",
    whyHereBody:
      "Locked storage for the laptops you can't carry home, redundant fibre for the demos that can't lag, and 24/7 access for the time zones that don't sleep.",
    neighbourhoodPitch:
      "Inside the Marol-MIDC-SEEPZ belt, 5 km from the airport.",
  },
  goregaon: {
    heroEyebrow: "Dedicated Desks in Goregaon East",
    heroIntro:
      "A reserved desk near home, for the western-suburb crowd done commuting to Lower Parel. Plug in your monitor, lock your drawer, never carry a laptop bag again.",
    whyHereTitle: "A Fixed Desk for the Western Suburbs",
    whyHereBody:
      "If you live anywhere from Malad to Borivali, a fixed desk in Goregaon East gives you back two hours of life every single day.",
    neighbourhoodPitch:
      "10 minutes from Goregaon Station, Oberoi Mall and the Western Express Highway.",
  },
  "goregaon-east": {
    heroEyebrow: "Dedicated Desks at 271 Business Park",
    heroIntro:
      "A reserved workstation inside Goregaon East's most recognised tower, for solo founders and senior independents who want a real address with a real desk.",
    whyHereTitle: "Desks for Senior Independents and Founder Teams",
    whyHereBody:
      "271 Business Park puts you inside a real corporate environment, secured lobby, branded reception, fast elevators, without the BKC bill.",
    neighbourhoodPitch:
      "Off the Western Express Highway, next to Nesco IT Park and Goregaon Metro.",
  },
  mahape: {
    heroEyebrow: "Dedicated Desks at Aurum Q6, Mahape",
    heroIntro:
      "A desk inside Navi Mumbai's most loved coworking floor, set up the way you like it, surrounded by an ambitious community of operators and founders.",
    whyHereTitle: "The Fixed-Desk Floor Navi Mumbai's Operators Picked",
    whyHereBody:
      "Walk in at 8am, lock up at midnight. Your monitor, your drawer, your favourite seat by the window, every single day, with a rooftop café for the breaks.",
    neighbourhoodPitch:
      "Inside Aurum Q6, Millenium Business Park, TCS, Reliance and L&T Infotech as neighbours.",
  },
  "navi-mumbai": {
    heroEyebrow: "Dedicated Desks across Navi Mumbai",
    heroIntro:
      "A reserved desk on this side of the bridge, pick the floor closest to home or to your client and skip the daily traffic crawl.",
    whyHereTitle: "Fixed Desks across Navi Mumbai's Growing Network",
    whyHereBody:
      "Calmer streets, better parking, real green spaces. Navi Mumbai's quality of life finally has a fixed desk to match.",
    neighbourhoodPitch:
      "Mahape and the Millenium Business Park belt, easy from Vashi, Airoli, Ghansoli and Rabale.",
  },
};

// ============= VIRTUAL OFFICE =============
const virtualOffice: Map = {
  andheri: {
    heroEyebrow: "Virtual Office & GST Registration in Andheri",
    heroIntro:
      "Run your business from anywhere and still put a respectable Andheri address on your invoices. Use it for GST registration, company incorporation and everyday mail, no desk required.",
    whyHereTitle: "A Trusted Business Address in West Andheri",
    whyHereBody:
      "Andheri is one of the addresses banks, vendors and clients already recognise. Our virtual office plans give you that address for your GST certificate, MCA filings and letterhead, with a real reception team handling your mail.",
    neighbourhoodPitch:
      "Minutes from Andheri Metro and Infiniti Mall, an address clients and auditors can actually find on a map.",
  },
  "andheri-east": {
    heroEyebrow: "Virtual Office Address in Andheri East",
    heroIntro:
      "Register your GST or company at a genuine Andheri East business address inside the MIDC-SEEPZ corridor, and let us handle the mail while you run the business from wherever you are.",
    whyHereTitle: "A Registered Address Inside Mumbai's IT Corridor",
    whyHereBody:
      "Startups scaling into Andheri East use our virtual office to get a verifiable address for banks, GST officers and clients, without paying rent on a seat nobody sits at.",
    neighbourhoodPitch:
      "Inside the Marol-MIDC-SEEPZ belt, 5 km from the airport, an address that holds up to scrutiny.",
  },
  goregaon: {
    heroEyebrow: "Virtual Office & Business Address in Goregaon",
    heroIntro:
      "A Goregaon East business address for your GST registration, company incorporation and day-to-day mail, without renting a single desk.",
    whyHereTitle: "A Goregaon Address That Works on Paper and in Person",
    whyHereBody:
      "Every plan comes with the documentation GST officers and the MCA actually ask for, rent agreement, NOC and utility proof, plus a real front desk to receive your couriers.",
    neighbourhoodPitch:
      "10 minutes from Goregaon Station and Oberoi Mall, easy for the rare occasion you do need to visit in person.",
  },
  "goregaon-east": {
    heroEyebrow: "Virtual Office at 271 Business Park, Goregaon East",
    heroIntro:
      "Put a recognised commercial address on your GST certificate and incorporation documents, inside 271 Business Park, without leasing a physical seat.",
    whyHereTitle: "Corporate-Grade Address, Virtual-Office Pricing",
    whyHereBody:
      "271 Business Park gives your registration paperwork a serious commercial address, secured lobby, branded reception, real signage, at a fraction of the cost of an actual seat.",
    neighbourhoodPitch:
      "Off the Western Express Highway, next to Nesco IT Park, easy for auditors and bank verification visits.",
  },
  mahape: {
    heroEyebrow: "Virtual Office at Aurum Q6, Mahape",
    heroIntro:
      "Set up your GST registration or new company at Aurum Q6, Navi Mumbai's most recognised business park, and manage the rest of your business from wherever you actually work.",
    whyHereTitle: "The Navi Mumbai Address Investors and Auditors Recognise",
    whyHereBody:
      "Mahape's IT and BFSI ecosystem gives your virtual office real credibility. We handle your mail, forward it monthly, and keep your NOC and rent agreement audit-ready.",
    neighbourhoodPitch:
      "Inside Millenium Business Park, next to Reliance Corporate Park, TCS and L&T Infotech.",
  },
  "navi-mumbai": {
    heroEyebrow: "Virtual Office across Navi Mumbai",
    heroIntro:
      "Pick a Navi Mumbai business address for your GST and company registration, from Mahape to the Vashi belt, and let us manage the mail while you build the business.",
    whyHereTitle: "A Navi Mumbai Address for Every Growing Business",
    whyHereBody:
      "Whether you're registering your first GST number or opening a branch office, our Navi Mumbai virtual office network gives you a credible address without the overhead of a physical seat.",
    neighbourhoodPitch:
      "Coverage across Mahape and the Millenium Business Park corridor, easy from Vashi, Airoli and Ghansoli.",
  },
};

const registry: Partial<Record<ServiceSlug, Map>> = {
  "meeting-room": meetingRoom,
  "conference-room": conferenceRoom,
  "private-cabin": privateCabin,
  "office-suites": officeSuites,
  "fixed-desk": fixedDesk,
  "virtual-office": virtualOffice,
};

const fallback = (serviceLabel: string, locName: string): ServiceLocationContent => ({
  heroEyebrow: `${serviceLabel} in ${locName}`,
  heroIntro: `${serviceLabel} in ${locName}, designed for how teams actually work here. Plug in, get to work, and let us handle the rest.`,
  whyHereTitle: `Why ${serviceLabel.toLowerCase()} in ${locName} works`,
  whyHereBody: `Built around the rhythm of ${locName}, fast Wi-Fi, friendly hospitality and a community that already lives in this neighbourhood.`,
  neighbourhoodPitch: `Easy to reach from across ${locName}.`,
});

export function getServiceLocationContent(
  service: ServiceSlug,
  location: LocationSlug,
  serviceLabel: string,
  locationName: string,
): ServiceLocationContent {
  const resolvedLoc = parentOf[location] ?? location;
  const map = registry[service];
  return map?.[resolvedLoc] ?? fallback(serviceLabel, locationName);
}