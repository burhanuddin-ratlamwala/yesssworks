import { useState, ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ZoomIn, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode; // optional overlay content (label, gradient)
  loading?: "lazy" | "eager";
  imgClassName?: string;
}

export const Lightbox = ({ src, alt, className, children, loading = "lazy", imgClassName }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open image: ${alt}`}
        className={cn("relative block w-full h-full cursor-zoom-in group/lb", className)}
      >
        <img
          src={src}
          alt={alt}
          loading={loading}
          className={cn("w-full h-full object-cover transition-transform duration-700 group-hover/lb:scale-105", imgClassName)}
        />
        {children}
        <span className="absolute top-2 right-2 z-10 h-8 w-8 grid place-items-center rounded-full bg-background/80 text-foreground opacity-0 group-hover/lb:opacity-100 transition-opacity shadow">
          <ZoomIn className="h-4 w-4" />
        </span>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl p-0 bg-transparent border-0 shadow-none">
          <div className="relative">
            <img src={src} alt={alt} className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-3 -right-3 md:top-2 md:right-2 h-9 w-9 rounded-full bg-background text-foreground grid place-items-center shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
            {alt && <p className="absolute bottom-2 left-2 right-2 text-center text-xs md:text-sm text-white bg-black/40 backdrop-blur rounded px-3 py-1.5">{alt}</p>}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};