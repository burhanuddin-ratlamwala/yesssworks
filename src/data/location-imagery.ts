/** Central photo library: maps any location word (a slug, an area name, a page
 *  title, even a blog headline) to the real photographs of that hub, so every
 *  page on the site shows the building it is actually talking about. */
import { aurumMahapeTiles } from "./aurum-mahape-images";
import { goregaon271Tiles } from "./goregaon-271-images";
import { ackrutiTiles } from "./ackruti-images";
import { andheriAtTiles } from "./andheri-at-images";
import { pinnacleTiles } from "./pinnacle-images";
import { thaneTiles } from "./thane-images";

export interface PhotoTile { src: string; label: string }

export interface HubImagery {
  key: string;
  /** Human name used in captions and alt text. */
  name: string;
  /** Short area line, never repeats the city twice. */
  area: string;
  hubPath: string;
  tiles: PhotoTile[];
}

export const hubImagery: Record<string, HubImagery> = {
  mahape: {
    key: "mahape",
    name: "YesssWorks Mahape, Aurum Q6",
    area: "Aurum Q6, Millenium Business Park, Mahape",
    hubPath: "/yesssworks-mahape-aurum-q6",
    tiles: aurumMahapeTiles,
  },
  goregaon: {
    key: "goregaon",
    name: "YesssWorks Goregaon, 271 Business Park",
    area: "271 Business Park, Goregaon East",
    hubPath: "/yesssworks-goregaon-271-business-park",
    tiles: goregaon271Tiles,
  },
  ackruti: {
    key: "ackruti",
    name: "YesssWorks Andheri, Ackruti Softech Park",
    area: "Ackruti Softech Park, Andheri East",
    hubPath: "/yesssworks-andheri-ackruti-softech-park",
    tiles: ackrutiTiles,
  },
  at: {
    key: "at",
    name: "YesssWorks Andheri, AT",
    area: "AT. By AGM Vijaylaxmi, Andheri",
    hubPath: "/yesssworks-andheri-at",
    tiles: andheriAtTiles,
  },
  pinnacle: {
    key: "pinnacle",
    name: "YesssWorks Andheri, Pinnacle Business Park",
    area: "Pinnacle Business Park, Andheri East",
    hubPath: "/yesssworks-andheri-pinnacle-business-park",
    tiles: pinnacleTiles,
  },
  thane: {
    key: "thane",
    name: "YesssWorks Thane",
    area: "Thane West",
    hubPath: "/yesssworks-thane",
    tiles: thaneTiles,
  },
};

/** Round-robin merge so a mixed strip never shows five shots of one floor. */
function interleave(sets: PhotoTile[][]): PhotoTile[] {
  const out: PhotoTile[] = [];
  const max = Math.max(...sets.map((s) => s.length));
  for (let i = 0; i < max; i++) {
    for (const s of sets) if (s[i]) out.push(s[i]);
  }
  return out;
}

/** All three Andheri buildings, blended, for generic Andheri pages. */
export const andheriTiles = interleave([
  hubImagery.pinnacle.tiles,
  hubImagery.ackruti.tiles,
  hubImagery.at.tiles,
]);

/** Every hub, blended, for city-wide and homepage sections. */
export const allHubTiles = interleave([
  hubImagery.mahape.tiles,
  hubImagery.goregaon.tiles,
  hubImagery.pinnacle.tiles,
  hubImagery.ackruti.tiles,
  hubImagery.at.tiles,
]);

export interface ResolvedImagery {
  key: string;
  /** Caption-friendly label for the place these photos belong to. */
  name: string;
  area?: string;
  hubPath?: string;
  tiles: PhotoTile[];
}

const MIXED: ResolvedImagery = {
  key: "network",
  name: "YesssWorks Mumbai & Navi Mumbai",
  tiles: allHubTiles,
};

const ANDHERI: ResolvedImagery = {
  key: "andheri",
  name: "YesssWorks Andheri",
  area: "Andheri East & West",
  hubPath: "/coworking-space-in-andheri",
  tiles: andheriTiles,
};

/** Resolve any free text (slug, title, area, city) to the right photo set. */
export function imageryFor(...parts: (string | undefined | null)[]): ResolvedImagery {
  const t = parts.filter(Boolean).join(" ").toLowerCase();
  const has = (...keys: string[]) => keys.some((k) => t.includes(k));

  if (has("thane")) return { ...hubImagery.thane };
  if (has("mahape", "aurum", "millenium", "millennium", "navi mumbai", "vashi", "airoli", "ghansoli", "turbhe", "rabale"))
    return { ...hubImagery.mahape };
  if (has("goregaon", "271", "nesco", "oberoi", "malad", "jogeshwari"))
    return { ...hubImagery.goregaon };
  if (has("ackruti", "akruti")) return { ...hubImagery.ackruti };
  if (has("pinnacle")) return { ...hubImagery.pinnacle };
  if (has("vijaylaxmi", "agm", "andheri-at", "andheri, at", "andheri at", "chakala", "marol"))
    return { ...hubImagery.at };
  if (has("andheri", "sakinaka", "seepz", "bkc", "powai", "vile parle"))
    return ANDHERI;
  return MIXED;
}

/** Stable pseudo-random offset so the same page always shows the same photos. */
function hash(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

/** Pick `count` photos for a page, varied by seed but never repeating. */
export function tilesFor(seed: string, count: number, ...parts: (string | undefined | null)[]): PhotoTile[] {
  const set = imageryFor(...(parts.length ? parts : [seed])).tiles;
  if (set.length <= count) return set;
  const start = hash(seed) % set.length;
  const out: PhotoTile[] = [];
  for (let i = 0; i < count; i++) out.push(set[(start + i) % set.length]);
  return out;
}

/** A single hero/feature photo for a page. */
export function photoFor(seed: string, ...parts: (string | undefined | null)[]): string {
  return tilesFor(seed, 1, ...parts)[0]?.src ?? allHubTiles[0].src;
}

/** Keyword sets that describe what each workspace topic looks like in a photo. */
const TOPIC_KEYWORDS: Record<string, string[]> = {
  "private-cabin": ["cabin", "team bay", "private office", "bay", "dividers", "corner desks"],
  "fixed-desk": ["desk", "workstation", "bench", "twin desk", "window", "managed seat", "floor"],
  "coworking-space": ["open", "desks", "workstation", "coworking", "floor", "lounge", "cafe", "community"],
  "conference-room": ["meeting", "boardroom", "conference", "discussion", "round table", "training"],
  "office-suites": ["private office", "managed", "cabin", "team bay", "floor", "suite"],
  "meeting-room": ["meeting", "boardroom", "conference", "discussion", "round table"],
  amenities: ["cafe", "pantry", "lounge", "coffee", "rooftop", "games", "booth", "reception"],
};

/** Photos for a page that actually show the thing the page sells. Falls back to
 *  the wider hub set when a topic has fewer matching shots than requested. */
export function topicTilesFor(
  topic: string,
  count: number,
  ...parts: (string | undefined | null)[]
): PhotoTile[] {
  const set = imageryFor(...(parts.length ? parts : [topic])).tiles;
  const keys = TOPIC_KEYWORDS[topic] ?? [topic.replace(/-/g, " ")];
  const matches = set.filter((t) => keys.some((k) => t.label.toLowerCase().includes(k)));
  const start = hash(topic) % Math.max(matches.length, 1);
  const ordered = matches.length ? matches.map((_, i) => matches[(start + i) % matches.length]) : [];
  const out: PhotoTile[] = [];
  const seen = new Set<string>();
  for (const t of [...ordered, ...set]) {
    if (seen.has(t.src)) continue;
    seen.add(t.src);
    out.push(t);
    if (out.length === count) break;
  }
  return out;
}
