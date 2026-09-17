import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { BookTourDialog } from "./BookTourDialog";

interface Props {
  title?: string;
  subtitle?: string;
  hash?: string;
}

export const CTA = ({
  title = "Ready to find your perfect workspace?",
  subtitle = "Talk to a YesssWorks specialist and book a free walkthrough today.",
  hash = "#enquire",
}: Props) => (
  <section className="py-16">
    <div className="container">
      <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-10 md:p-14 shadow-[var(--shadow-elegant)]">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 animate-blob" aria-hidden />
        <div className="absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-white/10 animate-blob" style={{ animationDelay: "3s" }} aria-hidden />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h2>
            <p className="mt-3 text-primary-foreground/90 max-w-xl">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <BookTourDialog
              trigger={
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  Book a tour <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              }
            />
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/80 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href={hash}>
                <MessageCircle className="mr-2 h-4 w-4" /> Get a callback
              </a>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);