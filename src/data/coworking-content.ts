import type { LocationSlug } from "./locations";

export interface CoworkingContent {
  heroEyebrow: string;
  heroIntro: string;
  whyHereEyebrow: string;
  whyHereHeading: string;
  whyHereBody: string;
  audienceEyebrow: string;
  audienceHeading: string;
  audienceIntro: string;
  neighbourhoodHeading: string;
  closingCtaTitle: string;
  closingCtaSubtitle: string;
  faqHeading: string;
  enquireHeading: string;
  enquireIntro: string;
  seoHeading: string;
  seoBody: string;
}

const fallback: CoworkingContent = {
  heroEyebrow: "Coworking That Just Works",
  heroIntro:
    "A vibrant, plug-and-play coworking floor designed for solopreneurs, freelancers, startups and growing teams. Plug in your laptop and get to work surrounded by a high-spirited community.",
  whyHereEyebrow: "Why YesssWorks",
  whyHereHeading: "A Coworking Floor Built Around How You Actually Work",
  whyHereBody:
    "Fibre-grade internet, ergonomic seating, soundproof booths and a calm, focused atmosphere, every detail engineered so you can do your best work, every single day.",
  audienceEyebrow: "Built for",
  audienceHeading: "Made for Every Kind of Team",
  audienceIntro:
    "From solo founders to enterprise satellite teams, our coworking floor flexes with how you and your team work.",
  neighbourhoodHeading: "Around the Campus",
  closingCtaTitle: "Tour the Coworking Floor Today",
  closingCtaSubtitle: "Book a free 20-minute walkthrough, pick a time that works for you.",
  faqHeading: "Everything You Need to Know",
  enquireHeading: "Book a Tour",
  enquireIntro: "Tell us a bit about your team and we'll line up a quick walkthrough.",
  seoHeading: "Looking for a Coworking Space? Here's What Makes YesssWorks Different.",
  seoBody: "Engineered for productivity, designed for community.",
};

export const coworkingContent: Partial<Record<LocationSlug, CoworkingContent>> = {
  andheri: {
    heroEyebrow: "Coworking, the Andheri Way",
    heroIntro:
      "Right in the middle of Mumbai's busiest western suburb. Our Andheri coworking floor is built for film, media and tech crews who run on caffeine, last-minute briefs and big ideas.",
    whyHereEyebrow: "Why Andheri",
    whyHereHeading: "A Coworking Floor That Keeps Up with Andheri's Pace",
    whyHereBody:
      "Andheri runs on momentum, shoots, edits, client visits, late-night ship dates. Our floor is wired for it: leased-line internet, soundproof phone booths for that late video call, and a 24x7 access option so you never have to stop just because the clock did.",
    audienceEyebrow: "Who Works from Andheri",
    audienceHeading: "Built for Andheri's Media, Tech and Creative Scene",
    audienceIntro:
      "From production houses and post-production teams to product startups and consultants, our Andheri coworking floor flexes around your shoot schedule, sprint cycle or client calendar.",
    neighbourhoodHeading: "Andheri at Your Doorstep",
    closingCtaTitle: "Walk through Our Andheri Coworking Floor",
    closingCtaSubtitle: "Pick a 20-minute slot, we'll show you the desks, the booths and the rooftop.",
    faqHeading: "Coworking in Andheri, Your Questions, Answered",
    enquireHeading: "Drop into YesssWorks Andheri",
    enquireIntro: "Tell us your team size and shift, we'll set up a quick walkthrough at our Andheri floor.",
    seoHeading: "Why Andheri Creators and Founders Work from YesssWorks",
    seoBody:
      "Andheri sits at the centre of Mumbai's media, advertising and tech ecosystem. Our coworking floor is engineered for the people who power that ecosystem, fast turnaround agencies, lean product teams, freelance editors, music producers and consultants who run their day on Wi-Fi and willpower.",
  },
  "andheri-east": {
    heroEyebrow: "Coworking in Mumbai's IT Corridor",
    heroIntro:
      "Inside Pinnacle Business Park, minutes from Marol, MIDC, SEEPZ and the international airport. Built for fast-scaling product teams, IT services, and consultants who fly in and out every other week.",
    whyHereEyebrow: "Why Andheri East",
    whyHereHeading: "A Coworking Floor Wired for Andheri East's IT Belt",
    whyHereBody:
      "Andheri East is where Mumbai builds software. Our floor backs that up with redundant fibre internet, dual-monitor-ready desks, locked storage for the laptops you can't carry home, and a meeting room calendar that actually works for distributed teams.",
    audienceEyebrow: "Who Works from Andheri East",
    audienceHeading: "Built for Product Teams, IT Services and Travelling Consultants",
    audienceIntro:
      "From bootstrapped SaaS founders to enterprise satellite offices and pre-sales consultants, Andheri East's coworking floor flexes around sprints, demos and airport runs.",
    neighbourhoodHeading: "Andheri East, What's Around You",
    closingCtaTitle: "Visit Pinnacle Business Park",
    closingCtaSubtitle: "Book a 20-minute walkthrough, see the floor, the cabins and the airport-side views.",
    faqHeading: "Coworking in Andheri East, Answered",
    enquireHeading: "Tour YesssWorks Andheri East",
    enquireIntro: "Tell us your team size, we'll set up a walkthrough of our Andheri East floor at Pinnacle.",
    seoHeading: "Why Mumbai's Product and IT Teams Pick Andheri East",
    seoBody:
      "Andheri East is Mumbai's IT and BFSI corridor, Marol, MIDC, SEEPZ and airport-side business parks all within a 10-minute radius. Our coworking floor inside Pinnacle Business Park is built for the people who keep that corridor running.",
  },
  goregaon: {
    heroEyebrow: "Coworking, Goregaon East",
    heroIntro:
      "A modern coworking campus on the western edge, well-connected by the Western Express Highway and Goregaon railway station. The home base for teams across Malad, Borivali and the western suburbs.",
    whyHereEyebrow: "Why Goregaon East",
    whyHereHeading: "A Coworking Floor That Gives the Western Suburbs Back Their Commute",
    whyHereBody:
      "If you live anywhere from Malad to Borivali, working out of South Mumbai is two hours of your life you can never get back. Goregaon East is your shortcut, fast internet, quiet desks and meeting rooms a 10-minute walk from Goregaon station and Oberoi Mall.",
    audienceEyebrow: "Who Works from Goregaon East",
    audienceHeading: "Built for Western-Suburb Founders, Agencies and Consultants",
    audienceIntro:
      "Skip the commute. Pick desks with people who get the western suburbs, film city crews, agency owners, fintech consultants and second-time founders.",
    neighbourhoodHeading: "Goregaon East, What's Nearby",
    closingCtaTitle: "Tour Our Goregaon East Coworking Floor",
    closingCtaSubtitle: "20 minutes, desks, booths, rooftop, done. Pick a time.",
    faqHeading: "Coworking in Goregaon, Your Questions",
    enquireHeading: "Visit YesssWorks Goregaon",
    enquireIntro: "Tell us a bit about your team, we'll line up a Goregaon East walkthrough.",
    seoHeading: "Why Goregaon East Is the Smart Base for Western-Suburb Teams",
    seoBody:
      "Goregaon East sits between Film City, Oberoi Mall and the Western Express Highway, easy reach from Malad, Borivali, Andheri and Bandra. Our coworking floor is the calm, fast, well-equipped base the western suburbs always wanted.",
  },
  "goregaon-east": {
    heroEyebrow: "Coworking at 271 Business Park",
    heroIntro:
      "Right inside 271 Business Park, off the Western Express Highway, surrounded by Nesco IT Park, BKC's overflow, and one of Mumbai's most active business corridors.",
    whyHereEyebrow: "Why Goregaon East",
    whyHereHeading: "A Coworking Floor Inside Goregaon East's Busiest Business Park",
    whyHereBody:
      "Goregaon East is where Mumbai's growth-stage companies set up shop without paying BKC rent. Our floor inside 271 Business Park gives you the address, the elevators, the security and the ground-floor cafés, without the multi-year lease.",
    audienceEyebrow: "Who Works from Goregaon East",
    audienceHeading: "Built for Growth-Stage Teams Skipping BKC Rent",
    audienceIntro:
      "Series-A startups, regional sales teams of global enterprises, fintech and insurtech outfits, and B2B consultants, the people building Mumbai's next wave of companies.",
    neighbourhoodHeading: "Goregaon East at a Glance",
    closingCtaTitle: "Tour 271 Business Park",
    closingCtaSubtitle: "Book a quick walkthrough of our Goregaon East floor.",
    faqHeading: "Coworking in Goregaon East, Answered",
    enquireHeading: "Visit YesssWorks Goregaon East",
    enquireIntro: "Tell us your headcount, we'll set up a walkthrough at 271 Business Park.",
    seoHeading: "Why Growth-Stage Teams Pick Goregaon East over BKC",
    seoBody:
      "Goregaon East, anchored by Nesco IT Park and 271 Business Park, has quietly become the natural home for teams that have outgrown coworking but aren't ready to lease a floor in BKC. Our coworking and cabin floor is built exactly for that in-between stage.",
  },
  mahape: {
    heroEyebrow: "Coworking at Aurum Q6, Mahape",
    heroIntro:
      "A high-tech workspace at Aurum Q6, Millenium Business Park, at the centre of Navi Mumbai's IT and BFSI ecosystem.",
    whyHereEyebrow: "Why Mahape",
    whyHereHeading: "Navi Mumbai's Most Loved Coworking Floor",
    whyHereBody:
      "Mahape's IT corridor, TCS, Reliance, IBM and L&T Infotech, needed a coworking floor that matched its scale. Aurum Q6 is our answer: a full-tower coworking experience with a rooftop café, branded cabins for enterprises like JM Financial and HDFC ERGO, and a community of Navi Mumbai's most ambitious operators.",
    audienceEyebrow: "Who Works from Mahape",
    audienceHeading: "Built for Navi Mumbai's IT, BFSI and Enterprise Satellite Teams",
    audienceIntro:
      "Enterprise back-offices, BFSI hubs, IT services teams and Navi Mumbai's growing founder community, Mahape is where they all converge.",
    neighbourhoodHeading: "Around Our Mahape Campus",
    closingCtaTitle: "Tour Aurum Q6, Mahape, Today",
    closingCtaSubtitle: "Walk the floor, see the rooftop, meet the community. 20 minutes.",
    faqHeading: "Coworking in Mahape, Answered",
    enquireHeading: "Visit YesssWorks Mahape",
    enquireIntro: "Tell us your team size, we'll line up a walkthrough at Aurum Q6.",
    seoHeading: "Why Navi Mumbai's Biggest Names Work From Mahape",
    seoBody:
      "Mahape sits at the heart of Navi Mumbai's IT and BFSI ecosystem, surrounded by Reliance Corporate Park, Mahape MIDC and Millenium Business Park. Aurum Q6 is our flagship Navi Mumbai workspace, trusted by JM Financial, HDFC ERGO, Roche and dozens of fast-growing teams.",
  },
  "navi-mumbai": {
    heroEyebrow: "Coworking, across Navi Mumbai",
    heroIntro:
      "Plug into Navi Mumbai's fastest-growing business corridor, Mahape, Vashi, Airoli and Ghansoli. One membership, every YesssWorks floor across the satellite city.",
    whyHereEyebrow: "Why Navi Mumbai",
    whyHereHeading: "Navi Mumbai's Coworking Network, Work from Any of Our Floors",
    whyHereBody:
      "Navi Mumbai isn't one office market, it's a corridor. Our network gives you floors across Mahape and the Millenium Business Park belt, so you can pick the location closest to your home, your client or your next meeting.",
    audienceEyebrow: "Who Works from Navi Mumbai",
    audienceHeading: "Built for Navi Mumbai's Commuter-Savvy Teams",
    audienceIntro:
      "Save the daily Vashi-bridge crossing. Work from a Navi Mumbai floor with the same Wi-Fi, the same community and the same plans as our Mumbai hubs.",
    neighbourhoodHeading: "Navi Mumbai, Where to Find Us",
    closingCtaTitle: "Tour Our Navi Mumbai Coworking Floors",
    closingCtaSubtitle: "Pick a location and we'll line up a 20-minute walkthrough.",
    faqHeading: "Coworking in Navi Mumbai, Answered",
    enquireHeading: "Visit YesssWorks Navi Mumbai",
    enquireIntro: "Tell us where in Navi Mumbai you're based, we'll suggest the nearest floor.",
    seoHeading: "Why Navi Mumbai Is Mumbai's Smartest Place to Work",
    seoBody:
      "Navi Mumbai has quietly become the working capital of the metropolitan region, better roads, better parking, real green spaces and a growing IT and BFSI base. Our coworking network keeps you inside that ecosystem.",
  },
};

export function getCoworkingContent(slug: LocationSlug): CoworkingContent {
  return coworkingContent[slug] ?? fallback;
}
