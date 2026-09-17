import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { FAQSection } from "@/components/site/FAQSection";
import { ArrowUpRight } from "lucide-react";
import { routeGroups } from "@/data/site-routes";

interface LinkItem { label: string; to: string }

const groupNotes: Record<string, string> = {
  "Workspace packages": "Pricing and inclusions by format.",
  "Our five hubs": "Building level pages with real pricing and directions.",
  "YesssBoard articles": "Guides on picking, pricing and settling into a workspace.",
};

/** Every group is derived from src/data/site-routes.ts, so adding a page there
 *  puts it on this directory and in sitemap.xml at the same time. */
const groups = routeGroups.map((g) => ({
  heading: g.heading,
  items: g.items.map<LinkItem>((r) => ({ label: r.label, to: r.path })),
  note: groupNotes[g.heading],
}));

const totalLinks = groups.reduce((n, g) => n + g.items.length, 0);

const Section = ({ heading, items, note }: { heading: string; items: LinkItem[]; note?: string }) => (
  <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
    <h3 className="text-lg font-bold">{heading}</h3>
    {note && <p className="text-sm text-muted-foreground mt-1">{note}</p>}
    <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
      {items.map((i) => (
        <li key={i.to}>
          <Link to={i.to} className="group inline-flex items-start gap-1 text-foreground/80 hover:text-primary">
            <span>{i.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </li>
      ))}
    </ul>
  </Reveal>
);

const AllPages = () => (
  <div className="min-h-screen flex flex-col">
    <SEO
      title="Sitemap | All YesssWorks pages"
      description="Every YesssWorks page in one place: hubs in Andheri, Goregaon and Mahape, workspace plans, service pages, galleries and YesssBoard articles."
      canonical="/sitemap"
      jsonLd={[{
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "YesssWorks HTML sitemap",
        url: "https://yesssworks.com/sitemap",
      }]}
    />
    <Header />
    <section className="relative bg-sage py-14 lg:py-20 overflow-hidden">
      <div className="absolute -top-16 -right-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-blob" aria-hidden />
      <div className="container relative">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Site directory</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold">
            Browse every <span className="text-gradient-primary">YesssWorks page</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-3 max-w-2xl text-foreground/80">
            {totalLinks} pages, grouped the way people actually look for them: our five hubs, the workspace formats we
            run, the areas we cover and everything we write on YesssBoard.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="py-12 container grid gap-6 lg:grid-cols-2">
      {groups.map((g) => (
        <div key={g.heading} className={g.heading === "YesssBoard articles" ? "lg:col-span-2" : undefined}>
          <Section heading={g.heading} items={g.items} note={g.note} />
        </div>
      ))}
    </section>

    <FAQSection
      className="bg-muted/40"
      heading="Questions about this directory"
      items={[
        { q: "Why does YesssWorks have a page for every area?", a: "People search differently. Someone hunting a desk near Marol Naka types something very different from a founder comparing Navi Mumbai options, so each page answers that specific question with the pricing and directions that matter there." },
        { q: "Which page should I start with if I just want a desk today?", a: "Go straight to the hub closest to you: Andheri AT, Andheri Pinnacle, Andheri Ackruti, Goregaon 271 or Mahape Aurum Q6. Each one lists live day pass and desk rates." },
        { q: "Is this the same as your sitemap?", a: "Close. This is the human friendly version. Search engines read sitemap.xml, which we regenerate every time a page or article changes." },
        { q: "I cannot find what I am looking for.", a: "Call or WhatsApp us on the number in the footer and tell us the team size, budget and area. We will point you to the right hub, or hold a cabin while you decide." },
      ]}
    />
    <Footer />
  </div>
);

export default AllPages;