import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { blogPosts, buildPostBody, relatedPosts } from "@/data/blog";
import { SITE } from "@/data/locations";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { Infographic } from "@/components/site/Infographic";
import { PhotoStrip } from "@/components/site/PhotoStrip";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle2, ListTree, Phone } from "lucide-react";
import { FAQSection } from "@/components/site/FAQSection";

function slugifyHeading(h: string) {
  return h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/yesssboard" replace />;

  const body = buildPostBody(post);
  const related = relatedPosts(post.slug, 3);
  const toc = body.sections.map((s) => ({ id: slugifyHeading(s.heading), label: s.heading }));
  const midIndex = Math.floor(body.sections.length / 2);
  const earlyPhotoIndex = 1;
  const latePhotoIndex = Math.min(body.sections.length - 2, midIndex + 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.heroSrc,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.domain}/og.png` },
    },
    mainEntityOfPage: `${SITE.domain}/yesssboard/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={`${post.title} | YesssBoard`}
        description={body.lead.slice(0, 155)}
        canonical={`/yesssboard/${post.slug}`}
        image={post.heroSrc}
        jsonLd={articleSchema}
      />
      <Header />

      <article className="flex-1">
        {/* Hero: image left, H1 right */}
        <header className="bg-sage border-b border-border">
          <div className="container py-8 md:py-12">
            <Link to="/yesssboard" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to YesssBoard
            </Link>
            <div className="mt-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-muted order-1">
                <img src={post.heroSrc} alt={post.title} loading="eager" className="w-full h-full object-cover" />
              </div>
              <div className="order-2">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary">{post.category}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-3 leading-tight">{post.title}</h1>
                <div className="flex items-center flex-wrap gap-4 mt-5 text-sm text-foreground/70">
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readMin} min read</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 3-column body: sticky TOC | content | sticky CTA */}
        <div className="container py-10 md:py-14">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)_280px] xl:grid-cols-[240px_minmax(0,1fr)_300px] gap-8 lg:gap-10">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  <ListTree className="h-4 w-4" /> Table of contents
                </p>
                <nav className="space-y-1 text-sm">
                  {toc.map((item, i) => (
                    <a key={item.id} href={`#${item.id}`} className="block py-1.5 text-foreground/70 hover:text-primary border-l-2 border-transparent hover:border-primary pl-3 transition-colors">
                      <span className="font-mono text-xs text-muted-foreground mr-2">{String(i + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/85 font-medium">{body.lead}</p>

              {body.sections.map((s, i) => (
                <section key={i} id={slugifyHeading(s.heading)} className="mt-10 scroll-mt-28">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{s.heading}</h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="mt-4 text-base md:text-lg leading-relaxed text-foreground/80">{p}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-5 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                          <span className="text-base md:text-lg text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {i === midIndex && <Infographic category={post.category} topic={post.title} />}
                  {i === earlyPhotoIndex && post.photos.length >= 2 && (
                    <PhotoStrip
                      bare
                      className="mt-7"
                      columns={2}
                      place={post.place}
                      tiles={post.photos.slice(0, 2)}
                    />
                  )}
                  {i === latePhotoIndex && post.photos.length >= 5 && (
                    <div className="mt-7">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                        Inside {post.place}
                      </p>
                      <PhotoStrip bare columns={3} place={post.place} tiles={post.photos.slice(2, 5)} />
                    </div>
                  )}
                </section>
              ))}

              {/* Inline closing CTA at end of content */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-extrabold">{body.closing}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  <BookTourDialog
                    trigger={
                      <Button size="lg" className="shadow-[var(--shadow-elegant)]">
                        Book a free tour <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    }
                  />
                  <Button asChild size="lg" variant="outline">
                    <Link to="/plans">See plans</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sticky CTA right */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-background p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Visit YesssWorks</p>
                  <h4 className="text-lg font-extrabold mt-2 leading-snug">Book a free 20-min tour</h4>
                  <p className="text-sm text-foreground/75 mt-2">See the space, meet the community, taste the coffee. No pressure.</p>
                  <BookTourDialog
                    trigger={
                      <Button size="sm" className="w-full mt-4">
                        Book a tour <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    }
                  />
                  <a href={`tel:${SITE.phoneTel}`} className="mt-3 flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                    <Phone className="h-3.5 w-3.5" /> {SITE.phone}
                  </a>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Our locations</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li><Link to="/yesssworks-andheri-ackruti-softech-park" className="hover:text-primary">Andheri, Ackruti Softech Park</Link></li>
                    <li><Link to="/yesssworks-andheri-pinnacle-business-park" className="hover:text-primary">Andheri, Pinnacle Business Park</Link></li>
                    <li><Link to="/yesssworks-andheri-at" className="hover:text-primary">Andheri, AT by AGM Vijaylaxmi</Link></li>
                    <li><Link to="/yesssworks-goregaon-271-business-park" className="hover:text-primary">Goregaon, 271 Business Park</Link></li>
                    <li><Link to="/yesssworks-mahape-aurum-q6" className="hover:text-primary">Mahape, Aurum Q6</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-muted/40 border-t border-border">
            <div className="container max-w-6xl">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Keep reading</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <Link key={p.slug} to={`/yesssboard/${p.slug}`} className="group block rounded-2xl overflow-hidden border border-border bg-card hover-lift">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img src={p.heroSrc} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{p.category}</span>
                      <h3 className="font-bold mt-2 leading-snug group-hover:text-primary transition-colors line-clamp-3">{p.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <FAQSection
        className="bg-muted/40 border-t border-border"
        items={[
          { q: "Is this guide written by the YesssWorks team?", a: "Yes. Every YesssBoard post is written or reviewed by our in-house operations, community or growth team based on what we see across our hubs." },
          { q: "How can I try YesssWorks after reading this?", a: "Book a free 20-minute tour at any of our five Mumbai or Navi Mumbai hubs and we will match you to a desk, cabin or suite that fits." },
          { q: "Can I share or republish this article?", a: "You can share the link freely. For republishing on another site, drop us a note at contact@yesssworks.com and we'll be happy to coordinate." },
          { q: "Will you cover more topics like this?", a: "Yes. Pitch us a topic via the contact form and we'll add it to the editorial pipeline if it fits our members' interests." },
        ]}
      />

      <Footer />
    </div>
  );
};

export default BlogPost;