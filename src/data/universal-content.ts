import type { CoworkingContent } from "./coworking-content";
import { coworkingContent } from "./coworking-content";
import { getServiceLocationContent } from "./service-location-content";
import type { LocationConfig, ServiceConfig, ServiceSlug } from "./locations";

const FALLBACK_COWORKING: CoworkingContent = {
  heroEyebrow: "Coworking That Just Works",
  heroIntro:
    "A vibrant, plug-and-play coworking floor designed for solopreneurs, freelancers, startups and growing teams.",
  whyHereEyebrow: "Why YesssWorks",
  whyHereHeading: "A Coworking Floor Built Around How You Actually Work",
  whyHereBody:
    "Fibre-grade internet, ergonomic seating, soundproof booths and a calm, focused atmosphere.",
  audienceEyebrow: "Built for",
  audienceHeading: "Made for Every Kind of Team",
  audienceIntro:
    "From solo founders to enterprise satellite teams, our coworking floor flexes with how you and your team work.",
  neighbourhoodHeading: "Around the Campus",
  closingCtaTitle: "Tour the Coworking Floor Today",
  closingCtaSubtitle: "Book a free 20-minute walkthrough.",
  faqHeading: "Everything You Need to Know",
  enquireHeading: "Book a Tour",
  enquireIntro: "Tell us about your team and we'll line up a quick walkthrough.",
  seoHeading: "Looking for a Coworking Space? Here's What Makes YesssWorks Different.",
  seoBody: "Engineered for productivity, designed for community.",
};

export function getServicePageContent(
  service: ServiceConfig,
  location: LocationConfig,
): CoworkingContent {
  // Coworking uses its rich per-location copy.
  if (service.slug === "coworking-space") {
    return coworkingContent[location.slug] ?? FALLBACK_COWORKING;
  }

  // For every other service, build CoworkingContent shape from
  // service-location-content + service/location metadata.
  const sl = getServiceLocationContent(service.slug, location.slug, service.label, location.name);
  const label = service.label;
  const labelLower = label.toLowerCase();

  return {
    heroEyebrow: sl.heroEyebrow,
    heroIntro: sl.heroIntro,
    whyHereEyebrow: `Why ${location.name}`,
    whyHereHeading: sl.whyHereTitle,
    whyHereBody: sl.whyHereBody,
    audienceEyebrow: "Built for",
    audienceHeading: `${label} in ${location.name}, Made for Every Kind of Team`,
    audienceIntro: `From solo founders to enterprise satellite teams, our ${labelLower} in ${location.name} flexes around how your team actually works.`,
    neighbourhoodHeading: `${location.name} at Your Doorstep`,
    closingCtaTitle: `Tour Our ${label} in ${location.name} Today`,
    closingCtaSubtitle: "Book a free 20-minute walkthrough, pick a time that works for you.",
    faqHeading: `${label} in ${location.name}, Your Questions, Answered`,
    enquireHeading: `Enquire About ${label} in ${location.name}`,
    enquireIntro: `Tell us when you'd like to visit and we'll set up a quick walkthrough of our ${labelLower} in ${location.name}.`,
    seoHeading: `Looking for ${label} in ${location.name}? Here's What Makes YesssWorks Different.`,
    seoBody: sl.neighbourhoodPitch,
  };
}

export const PRICE_TAGLINE: Record<ServiceSlug, { amount: string; unit: string }> = {
  "coworking-space": { amount: "₹599", unit: "/ day" },
  "fixed-desk": { amount: "₹9,999", unit: "/ month" },
  "private-cabin": { amount: "₹24,999", unit: "/ month" },
  "meeting-room": { amount: "₹499", unit: "/ hour" },
  "conference-room": { amount: "₹1,499", unit: "/ hour" },
  "office-suites": { amount: "₹99,999", unit: "/ month" },
  "virtual-office": { amount: "₹999", unit: "/ month" },
};