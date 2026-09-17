// Single source of truth for every public URL on the site.
// Both the XML sitemap (scripts/generate-sitemap.ts) and the HTML sitemap
// (src/pages/AllPages.tsx + SiteMapSheet) read from here, so adding a page
// in one place makes it show up in navigation, /sitemap and sitemap.xml.
// Keep this file free of image/asset imports so the Node sitemap script can
// import it directly.
import postsJson from "./blog-posts.json";
import { landmarkPages } from "./landmark-pages";

export type ServiceSlug =
  | "coworking-space"
  | "fixed-desk"
  | "meeting-room"
  | "conference-room"
  | "office-suites"
  | "private-cabin"
  | "virtual-office";

export type LocationSlug =
  | "andheri"
  | "andheri-east"
  | "goregaon"
  | "goregaon-east"
  | "mahape"
  | "navi-mumbai"
  | "andheri-at"
  | "andheri-pinnacle"
  | "andheri-ackruti"
  | "goregaon-271"
  | "mahape-aurum-q6";

export interface PageRoute {
  service: ServiceSlug;
  location: LocationSlug;
  path: string;
  primaryKeyword: string;
  keywords: string[];
}

export const serviceLabels: Record<ServiceSlug, string> = {
  "coworking-space": "Coworking Space",
  "fixed-desk": "Fixed Desks",
  "meeting-room": "Meeting Rooms",
  "conference-room": "Conference Rooms",
  "office-suites": "Office Suites",
  "private-cabin": "Private Cabins",
  "virtual-office": "Virtual Office",
};

export const locationLabels: Record<LocationSlug, string> = {
  andheri: "Andheri",
  "andheri-east": "Andheri East",
  goregaon: "Goregaon",
  "goregaon-east": "Goregaon East",
  mahape: "Mahape",
  "navi-mumbai": "Navi Mumbai",
  "andheri-at": "Andheri, AT",
  "andheri-pinnacle": "Andheri, Pinnacle Business Park",
  "andheri-ackruti": "Andheri, Ackruti Softech Park",
  "goregaon-271": "Goregaon, 271 Business Park",
  "mahape-aurum-q6": "Mahape, Aurum Q6",
};

/** Slugs for the 5 specific YesssWorks building hubs. */
export const buildingLocationSlugs: LocationSlug[] = [
  "andheri-at",
  "andheri-pinnacle",
  "andheri-ackruti",
  "goregaon-271",
  "mahape-aurum-q6",
];

/** Map a building location slug to its URL suffix (used in `/yesssworks-<suffix>`). */
export const buildingPathSuffix: Record<string, string> = {
  "andheri-at": "andheri-at",
  "andheri-pinnacle": "andheri-pinnacle-business-park",
  "andheri-ackruti": "andheri-ackruti-softech-park",
  "goregaon-271": "goregaon-271-business-park",
  "mahape-aurum-q6": "mahape-aurum-q6",
};

const areaLocations: LocationSlug[] = ["andheri", "andheri-east", "goregaon", "goregaon-east", "mahape", "navi-mumbai"];

/** URL slug used for a service in a given area (Mumbai suburbs say "meeting room",
 *  the Navi Mumbai / east belt searches skew to "conference room"). */
const serviceUrlSlug: Record<ServiceSlug, string> = {
  "coworking-space": "coworking-space",
  "fixed-desk": "fixed-desk",
  "meeting-room": "meeting-room",
  "conference-room": "conference-room",
  "office-suites": "office-suites",
  "private-cabin": "private-cabin",
  "virtual-office": "virtual-office",
};

const kwName: Record<LocationSlug, string> = {
  andheri: "andheri",
  "andheri-east": "andheri east",
  goregaon: "goregaon",
  "goregaon-east": "goregaon east",
  mahape: "mahape",
  "navi-mumbai": "navi mumbai",
  "andheri-at": "andheri at",
  "andheri-pinnacle": "andheri pinnacle business park",
  "andheri-ackruti": "andheri ackruti softech park",
  "goregaon-271": "goregaon 271 business park",
  "mahape-aurum-q6": "mahape aurum q6",
};

const kwPhrase: Record<ServiceSlug, string> = {
  "coworking-space": "coworking space",
  "fixed-desk": "fixed desk",
  "meeting-room": "meeting room",
  "conference-room": "conference room",
  "office-suites": "office suites",
  "private-cabin": "private cabin",
  "virtual-office": "virtual office",
};

/** Which service variant each area uses for the meeting/conference family. */
const meetingVariant: Record<string, ServiceSlug> = {
  andheri: "meeting-room",
  "andheri-east": "conference-room",
  goregaon: "meeting-room",
  "goregaon-east": "conference-room",
  mahape: "meeting-room",
  "navi-mumbai": "conference-room",
};

const buildRoute = (service: ServiceSlug, location: LocationSlug, path?: string): PageRoute => {
  const phrase = kwPhrase[service];
  const place = kwName[location];
  return {
    service,
    location,
    path: path ?? `/${serviceUrlSlug[service]}-in-${location}`,
    primaryKeyword: `${phrase} in ${place}`,
    keywords: [
      `${phrase} in ${place}`,
      `${place} ${phrase}`,
      `${phrase} ${place}`,
      `shared office space in ${place}`,
    ],
  };
};

const serviceFamilies: ServiceSlug[] = ["coworking-space", "fixed-desk", "office-suites", "private-cabin", "virtual-office"];

/** Combinations we deliberately do not publish. */
const retiredRoutePaths = new Set<string>(["/office-suites-in-mahape"]);

export const pageRoutes: PageRoute[] = [
  // Service x area pages
  ...serviceFamilies.flatMap((svc) => areaLocations.map((loc) => buildRoute(svc, loc))),
  // Meeting / conference family (variant per area)
  ...areaLocations.map((loc) => buildRoute(meetingVariant[loc], loc)),
  // Building hub pages: /yesssworks-<suffix>
  ...buildingLocationSlugs.map((loc) => buildRoute("coworking-space", loc, `/yesssworks-${buildingPathSuffix[loc]}`)),
].filter((r) => !retiredRoutePaths.has(r.path));

export interface SiteRoute {
  path: string;
  label: string;
  group: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
  /** Source files whose mtime drives <lastmod> in sitemap.xml. */
  sources: string[];
  /** Explicit last-modified date (blog posts carry their own). */
  lastmod?: string;
  /** Kept out of sitemap.xml and the HTML directory (campaign pages, aliases). */
  excludeFromSitemap?: boolean;
}

const mainRoutes: SiteRoute[] = [
  { path: "/", label: "Home", group: "Main pages", changefreq: "weekly", priority: "1.0", sources: ["src/pages/Index.tsx"] },
  { path: "/about", label: "About us", group: "Main pages", changefreq: "monthly", priority: "0.7", sources: ["src/pages/About.tsx"] },
  { path: "/plans", label: "Plans and pricing", group: "Main pages", changefreq: "weekly", priority: "0.8", sources: ["src/pages/Plans.tsx", "src/data/locations.ts"] },
  { path: "/gallery", label: "Gallery", group: "Main pages", changefreq: "monthly", priority: "0.6", sources: ["src/pages/Gallery.tsx", "src/components/site/Gallery.tsx"] },
  { path: "/contact", label: "Contact", group: "Main pages", changefreq: "monthly", priority: "0.7", sources: ["src/pages/Contact.tsx"] },
  { path: "/yesssboard", label: "YesssBoard", group: "Main pages", changefreq: "weekly", priority: "0.8", sources: ["src/pages/Blog.tsx", "src/data/blog-posts.json"] },
  { path: "/sitemap", label: "Sitemap", group: "Main pages", changefreq: "weekly", priority: "0.4", sources: ["src/pages/AllPages.tsx", "src/data/site-routes.ts"] },
];

const packageRoutes: SiteRoute[] = [
  ["/packages/fixed-desks", "Fixed desks"],
  ["/packages/private-cabins", "Private cabins"],
  ["/packages/meeting-conference", "Meeting and conference rooms"],
  ["/packages/office-suites", "Office suites"],
].map(([path, label]) => ({
  path,
  label,
  group: "Workspace packages",
  changefreq: "monthly" as const,
  priority: "0.8",
  sources: ["src/pages/PackagePage.tsx", "src/data/locations.ts"],
}));

const cityRoutes: SiteRoute[] = [
  ["/coworking-space-in-mumbai", "Coworking space in Mumbai", "src/pages/city/MumbaiHub.tsx"],
  ["/affordable-coworking-space-in-mumbai", "Affordable coworking space in Mumbai", "src/pages/city/AffordableMumbai.tsx"],
  ["/meeting-room-in-mumbai", "Meeting room in Mumbai", "src/pages/city/MeetingRoomMumbai.tsx"],
  ["/hot-desk-in-mumbai", "Hot desk in Mumbai", "src/pages/city/HotDeskMumbai.tsx"],
  ["/private-cabin-in-mumbai", "Private cabin in Mumbai", "src/pages/city/PrivateCabinMumbai.tsx"],
  ["/conference-room-in-mumbai", "Conference room in Mumbai", "src/pages/city/ConferenceRoomMumbai.tsx"],
  ["/office-suites-in-mumbai", "Office suites in Mumbai", "src/pages/city/OfficeSuitesMumbai.tsx"],
  ["/virtual-office-in-mumbai", "Virtual office in Mumbai", "src/pages/city/VirtualOfficeMumbai.tsx"],
  ["/coworking-space-in-andheri-west", "Coworking space near Andheri West", "src/pages/city/CoworkingAndheriWest.tsx"],
].map(([path, label, src]) => ({
  path,
  label,
  group: "Mumbai city pages",
  changefreq: "monthly" as const,
  priority: "0.9",
  sources: [src, "src/pages/city/CityPageShell.tsx"],
}));

/** Building-name landing pages (Pinnacle, 271, Aurum Q6, AT, Ackruti). */
const landmarkRoutes: SiteRoute[] = landmarkPages.map((l) => ({
  path: l.path,
  label: `${l.building}, ${l.areaLabel}`,
  group: "Landmark buildings",
  changefreq: "monthly",
  priority: "0.8",
  sources: ["src/data/landmark-pages.ts", "src/pages/landmark/LandmarkPage.tsx"],
}));

const hubRoutes: SiteRoute[] = buildingLocationSlugs.map((loc) => ({
  path: `/yesssworks-${buildingPathSuffix[loc]}`,
  label: `YesssWorks ${locationLabels[loc]}`,
  group: "Our five hubs",
  changefreq: "monthly",
  priority: "0.9",
  sources: ["src/data/locations.ts", "src/pages/services/BuildingLocationTemplate.tsx"],
}));

const galleryRoutes: SiteRoute[] = buildingLocationSlugs.map((loc) => ({
  // /gallery/:slug is matched on the location slug, not the hub URL suffix.
  path: `/gallery/${loc}`,
  label: `${locationLabels[loc]} gallery`,
  group: "Hub galleries",
  changefreq: "monthly",
  priority: "0.5",
  sources: ["src/pages/LocationGallery.tsx"],
}));

/** Campuses still under construction. Listed publicly, enquiry only, no pricing. */
const upcomingRoutes: SiteRoute[] = [
  {
    path: "/yesssworks-thane",
    label: "YesssWorks Thane (opening soon)",
    group: "Opening soon",
    changefreq: "monthly",
    priority: "0.6",
    sources: ["src/pages/city/ThaneComingSoon.tsx", "src/data/thane-images.ts"],
  },
];

const serviceAreaRoutes: SiteRoute[] = pageRoutes
  .filter((r) => !buildingLocationSlugs.includes(r.location))
  .map((r) => ({
    path: r.path,
    label: `${serviceLabels[r.service]} in ${locationLabels[r.location]}`,
    group: `${serviceLabels[r.service]} by area`,
    changefreq: "monthly" as const,
    priority: "0.9",
    sources: [
      "src/data/locations.ts",
      "src/data/site-routes.ts",
      "src/pages/LocationServicePage.tsx",
      "src/pages/services/CoworkingTemplate.tsx",
      "src/pages/services/UniversalServiceTemplate.tsx",
      "src/pages/services/VirtualOfficeTemplate.tsx",
    ],
  }));

const posts = postsJson as { slug: string; title: string; date?: string }[];

const blogRoutes: SiteRoute[] = posts.map((p) => ({
  path: `/yesssboard/${p.slug}`,
  label: p.title,
  group: "YesssBoard articles",
  changefreq: "yearly",
  priority: "0.6",
  sources: ["src/data/blog-posts.json", "src/pages/BlogPost.tsx"],
  lastmod: p.date ? new Date(p.date).toISOString().split("T")[0] : undefined,
}));

/** Campaign landing pages. They mirror the organic pages, so they stay out of
 *  sitemap.xml and the public directory to avoid duplicate signals. */
export const lpLocationSlugs = ["mahape", "andheri", "andheri-east", "goregaon", "goregaon-east"];
const lpRoutes: SiteRoute[] = lpLocationSlugs.map((s) => ({
  path: `/lp/coworking-space-in-${s}`,
  label: `Coworking space in ${s.replace(/-/g, " ")} (campaign)`,
  group: "Campaign pages",
  changefreq: "monthly",
  priority: "0.4",
  sources: ["src/pages/LandingPage.tsx"],
  excludeFromSitemap: true,
}));

/** Every route the app serves, in directory order. */
export const allSiteRoutes: SiteRoute[] = [
  ...mainRoutes,
  ...packageRoutes,
  ...hubRoutes,
  ...galleryRoutes,
  ...upcomingRoutes,
  ...cityRoutes,
  ...landmarkRoutes,
  ...serviceAreaRoutes,
  ...blogRoutes,
  ...lpRoutes,
];

/** Routes that belong in sitemap.xml and the HTML directory. */
export const indexableRoutes = allSiteRoutes.filter((r) => !r.excludeFromSitemap);

/** Directory groups, in the order they should be rendered. */
export const routeGroups = (() => {
  const order: string[] = [];
  const map = new Map<string, SiteRoute[]>();
  for (const r of indexableRoutes) {
    if (!map.has(r.group)) { map.set(r.group, []); order.push(r.group); }
    map.get(r.group)!.push(r);
  }
  return order.map((g) => ({ heading: g, items: map.get(g)! }));
})();
