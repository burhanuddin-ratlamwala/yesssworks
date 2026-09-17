import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { routeGroups } from "@/data/site-routes";

interface Props { trigger: ReactNode; }

/** Groups come from src/data/site-routes.ts, the same list that builds
 *  /sitemap and sitemap.xml, so this panel never falls behind. */
export const SiteMapSheet = ({ trigger }: Props) => {
  const { pathname } = useLocation();

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <SheetTitle>All YesssWorks pages</SheetTitle>
          <SheetDescription>Jump to any page across the site.</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="px-6 py-6 space-y-8">
            {routeGroups.map((g) => (
              <section key={g.heading}>
                <h4 className="text-xs font-bold tracking-wide text-muted-foreground mb-3">{g.heading}</h4>
                <ul className="space-y-1">
                  {g.items.map((r) => (
                    <li key={r.path}>
                      <SheetClose asChild>
                        <Link
                          to={r.path}
                          className={`flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors ${pathname === r.path ? "bg-muted font-semibold text-primary" : ""}`}
                        >
                          <span>{r.label}</span>
                          <ArrowRight className="h-3.5 w-3.5 opacity-50 shrink-0" />
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
