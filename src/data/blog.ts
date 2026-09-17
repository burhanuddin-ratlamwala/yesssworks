import postsJson from "./blog-posts.json";
import { imageryFor, tilesFor, PhotoTile } from "./location-imagery";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  hero: string;
  heroSrc: string;
  date: string;
  readMin: number;
  /** Hub these photos were shot at, used in captions and alt text. */
  place: string;
  /** In-article photographs from the hub the post talks about. */
  photos: PhotoTile[];
}

type RawPost = Omit<BlogPost, "heroSrc" | "place" | "photos">;

/* Every post now carries real YesssWorks photographs. The hub is picked from
   the words in the slug, title and category, so a Mahape article shows Mahape
   floors and an Andheri article shows Andheri floors. */
export const blogPosts: BlogPost[] = (postsJson as RawPost[]).map((p) => {
  const set = tilesFor(p.slug, 7, p.slug, p.title, p.category);
  return {
    ...p,
    heroSrc: set[0].src,
    place: imageryFor(p.slug, p.title, p.category).name,
    photos: set.slice(1),
  };
});

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category))).sort();

/* ---------- helpers used by the long-form generator ---------- */

const LOCATION_NAMES = [
  "Andheri East",
  "Goregaon East",
  "Mahape (Aurum Q6)",
  "Navi Mumbai",
  "Pinnacle Business Park",
  "Ackruti Softech Park",
  "271 Business Park",
];

function pickByHash<T>(slug: string, arr: T[]): T {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return arr[h % arr.length];
}

function topicFromTitle(title: string): string {
  return title
    .replace(/^(How|Why|What|The|Is|Things|Private|Funding|Make|From|Essential|5 Ways|7 Things)\b\s*/i, "")
    .replace(/\?$/, "")
    .replace(/^to\s+/i, "")
    .toLowerCase();
}

/**
 * Build a long-form, on-brand article body (~2000 words) from the post title.
 * Returns: lead + 8 H2 sections (each ~250 words), each with paragraphs + bullets,
 * plus closing CTA. Sections become Table of Contents anchors in BlogPost.tsx.
 */
export function buildPostBody(post: BlogPost): {
  lead: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  closing: string;
} {
  const t = post.title;
  const isList = /^\d+\b/.test(t);
  const topic = topicFromTitle(t);
  const loc = pickByHash(post.slug, LOCATION_NAMES);
  const cat = post.category;

  const lead = isList
    ? `If you've been weighing ${topic}, this guide breaks it down into practical takeaways you can act on this week. We run YesssWorks campuses across Mumbai and Navi Mumbai (Andheri, Goregaon, Mahape and more), and the patterns we see, across founders, agencies and enterprise teams, are remarkably consistent. This article distils what actually works, what to ignore, and how to put it into practice without spending months on research. By the end, you'll have a clear framework, a short list of red flags, and the questions to ask before signing any agreement.`
    : `${t} sounds like a small decision, but it shapes how your team works every single day. At YesssWorks we host everyone from solo founders to listed companies like JM Financial and HDFC ERGO, and the same question comes up across all of them. This article walks through the why, the how, and what we've learned running flexible workspaces in Mumbai. Whether you're scouting your first office, scaling beyond your current desk count, or simply tired of working from cafés, the framework below will save you weeks of trial and error.`;

  const sections = [
    {
      heading: `Why ${topic} is bigger than it looks`,
      paragraphs: [
        `On the surface, ${topic} reads like an operational choice. In practice, it's a culture choice. The room you walk into every morning sets the tempo for your week, your team's standards, and the kind of people you end up hiring. That's why so many founders we meet are willing to pay more for a workspace that feels right, the productivity lift more than pays for the difference.`,
        `The Indian workplace has changed in ways most leases haven't caught up to. Teams are smaller, more senior, and more distributed. Office hours bend around childcare, traffic and travel. The old model, a 5-year lease, an interior designer, a receptionist and a 30% deposit, just doesn't match how modern companies grow. Flexibility isn't a perk anymore, it's the structural advantage that lets you say yes to opportunities you'd otherwise have to pass on.`,
      ],
    },
    {
      heading: "What we hear from members every week",
      paragraphs: [
        `Across our ${loc} campus and the others, the same themes keep surfacing in conversations with members. We've grouped the most common signals below, because they show up almost regardless of company size or stage:`,
      ],
      bullets: [
        "Energy in the room matters as much as the desk itself, you do better work when people around you are doing serious work",
        "Reliable infrastructure (leased-line internet, backup power, ergonomic chairs) is non-negotiable, and surprisingly hard to get right at home",
        "Soundproof phone booths quietly become the most-used amenity, video calls have replaced 70% of meetings",
        "A clean pantry with good tea and coffee saves more time than people expect",
        "Predictable monthly costs make budgeting and hiring decisions much easier",
        "Having a real address for clients, GST and courier deliveries removes a real source of friction",
      ],
    },
    {
      heading: "The cost question, simplified",
      paragraphs: [
        `A traditional 10-seat office in Mumbai typically costs between 1.8 and 3 lakh per month once you add rent, deposit amortisation, fit-out, internet, electricity, housekeeping, security, pantry, AMCs, society charges and a receptionist. A 10-seat plan at YesssWorks comes in well under that, and you can scale up or down by a desk at a time.`,
        `But the bigger saving is the one nobody puts on the spreadsheet, your time. Founders who move to coworking routinely tell us they got back 4 to 6 hours a week they used to spend on facility issues, vendor follow-ups and snack runs. Multiply that by twelve months and you've bought yourself nearly a month of focused work, for free.`,
      ],
    },
    {
      heading: "How the right space changes how teams perform",
      paragraphs: [
        `Environment design is one of the highest-leverage choices a leader can make. Natural light, acoustic separation, room temperature, chair quality and even the smell of the pantry all influence focus and mood in ways research backs up clearly. Coworking spaces, when designed well, give you all of this without you having to project-manage it.`,
        `For teams, the second-order effects show up fast. Standups happen on time because everyone is in the same room. Hiring gets easier because candidates walk in and immediately get what the company is about. Client meetings feel professional because they happen in a real boardroom, not a kitchen with a webcam.`,
      ],
    },
    {
      heading: "Common mistakes we see (and how to avoid them)",
      paragraphs: [
        `Most workspace regrets trace back to two or three avoidable mistakes. We've watched founders walk away from a perfect option because of a wrong-looking detail, and lock themselves into a wrong one because of a shiny one. The list below is what we wish more people would screen against before signing.`,
      ],
      bullets: [
        "Optimising for sticker price instead of total cost of ownership",
        "Underestimating meeting-room demand, you will need them more than you think",
        "Picking a location that's convenient for the founder but a 90-minute commute for everyone else",
        "Ignoring the noise floor at peak hours, always visit at 11am on a weekday",
        "Forgetting to check the GST address and KYC paperwork timeline",
        "Choosing on photos alone, lighting in marketing photos is rarely what you'll work in",
      ],
    },
    {
      heading: "Why ${cat} is changing in Mumbai".replace("${cat}", cat.toLowerCase()),
      paragraphs: [
        `Mumbai's commercial real estate has been quietly shifting under the surface. Demand for full-floor leases is down. Demand for plug-and-play, fully serviced workspaces is up sharply, especially in micro-markets like Andheri East, Goregaon East and Navi Mumbai's Millenium Business Park, where YesssWorks operates. Landlords now expect tenants to want flexibility.`,
        `What that means for you: the market is on your side. You can negotiate harder, switch buildings without penalty, and right-size your space every quarter. Five years ago none of this was possible. Today it's the default for anyone making the decision intelligently.`,
      ],
    },
    {
      heading: "How YesssWorks does it differently",
      paragraphs: [
        `We've been running coworking campuses in Mumbai and Navi Mumbai long enough to have strong opinions about what matters. We obsess over ergonomic seating, leased-line internet with diesel backup, soundproof booths, daily-cleaned pantries, friendly community managers, and meeting rooms that don't look like budget hotel boardrooms.`,
        `Our member roster reflects the result, JM Financial, HDFC ERGO, Roche, Bajaj Electricals, Reliance General Insurance, alongside fast-growing startups and solo founders. The mix is intentional. It creates an atmosphere where everyone, regardless of stage, has someone slightly ahead of them to learn from.`,
      ],
    },
    {
      heading: "Putting this into practice, your next steps",
      paragraphs: [
        `If any of this resonated, the most useful thing you can do is visit a real workspace in person. Photos and price sheets only get you so far. Spend forty-five minutes at a campus on a busy weekday, talk to two or three members, try the chair, listen to the noise floor, taste the coffee. You'll know within an hour whether the room fits the way you want to work.`,
        `Book a free 20-minute walkthrough at any YesssWorks campus, Andheri (Ackruti, AT, Pinnacle), Goregaon (271 Business Park), or Mahape (Aurum Q6, Millenium Business Park). Mention this article and our team will keep the demo focused on exactly what you came to figure out.`,
      ],
    },
  ];

  const closing = `Ready to see ${topic} for yourself? Book a free tour at the YesssWorks campus closest to you, we'll show you exactly how our members work, focus and grow, without the overhead of a traditional office.`;

  return { lead, sections, closing };
}

export function relatedPosts(slug: string, count = 3): BlogPost[] {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return [];
  const sameCat = blogPosts.filter((p) => p.slug !== slug && p.category === post.category);
  const others = blogPosts.filter((p) => p.slug !== slug && p.category !== post.category);
  return [...sameCat, ...others].slice(0, count);
}