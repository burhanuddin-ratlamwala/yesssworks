import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, LayoutGrid } from "lucide-react";
import { SITE, buildingLocationSlugs, buildingPathSuffix, locations } from "@/data/locations";
import logo from "@/assets/yesssworks-logo-white.png";
import { Button } from "@/components/ui/button";
import { FloatingActions } from "./FloatingActions";
import { SiteMapSheet } from "./SiteMapSheet";

export const Footer = () => {
  return (
    <>
    <FloatingActions />
    <footer className="bg-ink text-ink-foreground mt-16">
      <div className="border-b border-ink-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base">Looking for a specific page?</h3>
            <p className="text-sm text-ink-foreground/70">Browse every YesssWorks page in one place.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <SiteMapSheet
              trigger={
                <Button variant="default" size="lg" className="gap-2">
                  <LayoutGrid className="h-4 w-4" />
                  Browse all pages
                </Button>
              }
            />
            <Link to="/sitemap" className="text-sm underline underline-offset-4 text-ink-foreground/80 hover:text-primary">
              Open HTML sitemap
            </Link>
          </div>
        </div>
      </div>
      <div className="container py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <img src={logo} alt="YesssWorks logo" className="h-10 w-auto mb-4" />
          <p className="text-sm leading-relaxed text-ink-foreground/80">
            YesssWorks is a fun, high-spirited and collaborative coworking community based out of Mumbai and Navi Mumbai. We provide beautiful ergonomically designed workspaces for SMEs, regional offices, freelancers, early stage startups as well as large enterprises.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-ink-foreground/10 hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="h-9 w-9 grid place-items-center rounded-full bg-ink-foreground/10 hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="h-9 w-9 grid place-items-center rounded-full bg-ink-foreground/10 hover:bg-primary transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="h-9 w-9 grid place-items-center rounded-full bg-ink-foreground/10 hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide mb-4">Locations</h3>
          <ul className="space-y-3 text-sm">
            {buildingLocationSlugs.map((s) => (
              <li key={s}>
                <Link to={`/yesssworks-${buildingPathSuffix[s]}`} className="hover:text-primary-glow text-ink-foreground/80 block">YesssWorks {locations[s].name}</Link>
                {locations[s].googleBusinessProfileUrl && (
                  <a href={locations[s].googleBusinessProfileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-ink-foreground/50 hover:text-primary-glow inline-flex items-center gap-1 mt-0.5">
                    Google Business Profile
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide mb-4">Packages</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/packages/fixed-desks" className="hover:text-primary-glow text-ink-foreground/80">Fixed Desks</Link></li>
            <li><Link to="/packages/private-cabins" className="hover:text-primary-glow text-ink-foreground/80">Private Cabins</Link></li>
            <li><Link to="/packages/meeting-conference" className="hover:text-primary-glow text-ink-foreground/80">Meeting &amp; Conference</Link></li>
            <li><Link to="/packages/office-suites" className="hover:text-primary-glow text-ink-foreground/80">Office Suites</Link></li>
            <li><Link to="/plans" className="hover:text-primary-glow text-ink-foreground/80">All Plans &amp; Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm tracking-wide mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-ink-foreground/80">
            <li><a href={`mailto:${SITE.email}`} className="flex items-start gap-2 hover:text-primary-glow"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /> {SITE.email}</a></li>
            <li><a href={`tel:${SITE.phoneTel}`} className="flex items-start gap-2 hover:text-primary-glow"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> {SITE.phone}</a></li>
            <li><Link to="/about" className="hover:text-primary-glow">Know Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">Contact Us</Link></li>
            <li><Link to="/gallery" className="hover:text-primary-glow">Gallery</Link></li>
            <li><Link to="/yesssboard" className="hover:text-primary-glow">YesssBoard Blog</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container py-5 text-center text-xs text-ink-foreground/60">
          Copyright © {new Date().getFullYear()} All rights reserved | YesssWorks Spaces Pvt. Ltd.
        </div>
      </div>
    </footer>
    </>
  );
};