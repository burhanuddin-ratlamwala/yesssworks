import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, blogCategories } from "@/data/blog";
import { SITE } from "@/data/locations";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { FAQSection } from "@/components/site/FAQSection";

const Blog = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [visible, setVisible] = useState(9);

  // Reset pagination on filter/search change
  useEffect(() => { setVisible(9); }, [q, cat]);

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCat = cat === "All" || p.category === cat;
      const matchesQ = !q || p.title.toLowerCase().includes(q.toLowerCase());
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  const featured = blogPosts[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={`YesssBoard, The YesssWorks Blog`}
        description="Insights, guides and stories on coworking, workspace strategy, startup growth and the future of work, from the YesssWorks team."
        canonical="/yesssboard"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-sage py-12 md:py-16 border-b border-border">
          <div className="container">
            <Reveal>
              <p className="text-xs font-bold tracking-widest text-primary uppercase">YesssBoard</p>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-2 max-w-3xl">Insights on coworking, work culture &amp; growth</h1>
              <p className="mt-3 text-base md:text-lg text-foreground/70 max-w-2xl">Practical guides from the {SITE.name} team, built from running coworking campuses across Mumbai and Navi Mumbai.</p>
            </Reveal>
          </div>
        </section>

        {/* Search + categories */}
        <section className="py-6 md:py-8 border-b border-border bg-background sticky top-20 md:top-24 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/85">
          <div className="container flex flex-col md:flex-row gap-4 md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="pl-9" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", ...blogCategories].map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                    cat === c
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground/70 border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured */}
        {cat === "All" && !q && (
          <section className="py-10 md:py-14">
            <div className="container">
              <Link to={`/yesssboard/${featured.slug}`} className="grid lg:grid-cols-2 gap-8 items-center group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <img src={featured.heroSrc} alt={featured.title} loading="eager" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Featured · {featured.category}</span>
                  <h2 className="text-2xl md:text-4xl font-extrabold mt-3 leading-tight group-hover:text-primary transition-colors">{featured.title}</h2>
                  <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{featured.readMin} min read</span>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">A practical look from the YesssWorks team, drawn from running coworking campuses across Mumbai and Navi Mumbai.</p>
                  <Button className="mt-6" size="lg">Read article <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Grid */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <p className="text-sm text-muted-foreground mb-6">
              Showing {Math.min(visible, filtered.length)} of {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.slice(0, visible).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 6) * 60}>
                  <Link to={`/yesssboard/${p.slug}`} className="group block rounded-2xl overflow-hidden border border-border bg-card hover-lift h-full">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img src={p.heroSrc} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5 md:p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{p.category}</span>
                      <h3 className="font-extrabold text-lg mt-2 leading-snug group-hover:text-primary transition-colors line-clamp-3">{p.title}</h3>
                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{p.readMin} min</span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16">No articles match your search.</p>
            )}
            {visible < filtered.length && (
              <div className="mt-10 flex justify-center">
                <Button size="lg" variant="outline" onClick={() => setVisible((v) => v + 9)}>
                  View more articles
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <FAQSection
        className="bg-muted/40 border-t border-border"
        items={[
          { q: "How often is YesssBoard updated?", a: "We publish new guides and member stories every couple of weeks, written by the YesssWorks operations and community teams." },
          { q: "Can I contribute a post?", a: "Yes — if you're a YesssWorks member or industry expert, pitch us a topic at contact@yesssworks.com and we'll get back within a week." },
          { q: "Do the guides apply outside Mumbai?", a: "Most workspace, hiring and growth playbooks transfer to any Indian metro. India-specific compliance posts are clearly tagged." },
          { q: "How can I get articles by email?", a: "Subscribe via the form on any post page and we'll send a short monthly digest — no spam, unsubscribe in one click." },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Blog;