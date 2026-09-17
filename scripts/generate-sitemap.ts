// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// Routes come from src/data/site-routes.ts, the same source the HTML sitemap
// (/sitemap) uses, so a new page appears in both automatically.
// `lastmod` is per-route: the newest mtime of that route's source files, or the
// post's own date for blog articles.
import { writeFileSync, statSync, existsSync } from "fs";
import { resolve } from "path";
import { indexableRoutes } from "../src/data/site-routes";

const BASE_URL = "https://yesssworks.com";

const isoDay = (d: Date) => d.toISOString().split("T")[0];
const fileMtime = (rel: string): number => {
  try {
    const p = resolve(rel);
    return existsSync(p) ? statSync(p).mtimeMs : 0;
  } catch {
    return 0;
  }
};
const newestMtime = (paths: string[]): string | undefined => {
  const ms = Math.max(0, ...paths.map(fileMtime));
  return ms > 0 ? isoDay(new Date(ms)) : undefined;
};

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...indexableRoutes.map((r) => {
    const lastmod = r.lastmod ?? newestMtime(r.sources);
    return [
      `  <url>`,
      `    <loc>${BASE_URL}${r.path}</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority}</priority>`,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n");
  }),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${indexableRoutes.length} entries)`);
