import { Reveal } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQItem { q: string; a: string }

interface Props {
  items: FAQItem[];
  heading?: string;
  intro?: string;
  className?: string;
}

export const FAQSection = ({ items, heading = "Frequently asked questions", intro, className = "" }: Props) => (
  <section className={`py-12 md:py-16 ${className}`}>
    <div className="container max-w-3xl">
      <Reveal className="text-center">
        <p className="text-xs font-bold tracking-widest text-primary uppercase">FAQs</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{heading}</h2>
        {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
      </Reveal>
      <Accordion type="single" collapsible className="mt-8 space-y-3">
        {items.map((it, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-xl border border-border bg-card px-5 hover:border-primary/40 transition-colors data-[state=open]:border-primary/60 data-[state=open]:shadow-[var(--shadow-card)]"
          >
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-4">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);