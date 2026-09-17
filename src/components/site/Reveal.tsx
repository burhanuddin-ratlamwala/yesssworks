import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  variant?: "up" | "fade" | "scale" | "right";
}

export const Reveal = ({ children, className, delay = 0, as = "div", variant = "up" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const anim =
    variant === "fade" ? "animate-fade-in" :
    variant === "scale" ? "animate-scale-in" :
    variant === "right" ? "animate-slide-in-right" :
    "animate-fade-in-up";

  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      style={{ animationDelay: shown ? `${delay}ms` : undefined }}
      className={cn(shown ? anim : "opacity-0", className)}
    >
      {children}
    </Tag>
  );
};