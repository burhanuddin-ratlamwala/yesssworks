import { Phone, Mail, CalendarCheck } from "lucide-react";
import { useLocation } from "react-router-dom";
import { SITE, LocationSlug, locations } from "@/data/locations";
import { BookTourDialog } from "@/components/site/BookTourDialog";

const waNumber = SITE.phoneTel.replace(/[^0-9]/g, "");
const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
  "Hi YesssWorks, I'd like to book a tour.",
)}`;
const callHref = `tel:${SITE.phoneTel}`;
const mailHref = `mailto:${SITE.email}`;

/** Authentic WhatsApp glyph (filled phone-in-speech-bubble). Lucide's
 *  MessageCircle only draws the bubble outline, which the brand team rejected. */
const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.58-1.72a12.76 12.76 0 0 0 6.22 1.6h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05A12.7 12.7 0 0 0 16.003 3.2zm0 23.32h-.01a10.58 10.58 0 0 1-5.39-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.6 10.6 0 1 1 8.9 4.89zm5.82-7.93c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.25-.61-.51-.53-.71-.54-.18-.01-.4-.01-.61-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37z" />
  </svg>
);

export const FloatingActions = () => {
  const { pathname } = useLocation();
  const isLp = pathname.startsWith("/lp/");

  /** Infer the most relevant location slug from the current URL so the
   *  Visit Office dialog pre-selects the right hub. */
  const inferredLocation: LocationSlug | undefined = (() => {
    const all = Object.keys(locations) as LocationSlug[];
    // Prefer longest matching slug so "andheri-east" wins over "andheri".
    const match = all
      .slice()
      .sort((a, b) => b.length - a.length)
      .find((slug) => pathname.includes(slug));
    return match;
  })();

  return (
    <>
      {/* Desktop / tablet: fixed right-side rail */}
      <div className="hidden md:flex fixed right-4 bottom-1/3 z-40 flex-col gap-3">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="h-12 w-12 rounded-full grid place-items-center bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
        <a
          href={mailHref}
          aria-label="Email us"
          className="h-12 w-12 rounded-full grid place-items-center bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href={callHref}
          aria-label="Call YesssWorks"
          className="h-12 w-12 rounded-full grid place-items-center bg-ink text-ink-foreground shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile: sticky bottom bar.
          Landing pages get a 3-action bar: Call, WhatsApp, Enquire (form). */}
      {isLp ? (
        <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 gap-px bg-border border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <a
            href={callHref}
            aria-label="Call YesssWorks"
            className="flex flex-col items-center justify-center gap-1 py-3 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white text-[11px] font-bold uppercase tracking-wider"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Chat Now</span>
          </a>
          <BookTourDialog
            defaultLocation={inferredLocation}
            trigger={
              <button
                type="button"
                aria-label="Visit our office"
                className="flex flex-col items-center justify-center gap-1 py-3 bg-ink text-ink-foreground text-[11px] font-bold uppercase tracking-wider w-full"
              >
                <CalendarCheck className="h-5 w-5" />
                <span>Visit Office</span>
              </button>
            }
          />
        </div>
      ) : (
        <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px bg-border border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white text-sm font-semibold">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <a href={callHref} className="flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground text-sm font-semibold">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      )}
      {/* spacer so content isn't covered on mobile */}
      <div className="md:hidden h-16" aria-hidden />
    </>
  );
};