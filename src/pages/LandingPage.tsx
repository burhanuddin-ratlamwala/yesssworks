import NotFound from "./NotFound";
import CoworkingTemplate from "./services/CoworkingTemplate";

/** Slugs that have a matching /coworking-space-in-<slug> route in pageRoutes. */
const LP_SLUGS = new Set([
  "mahape",
  "andheri",
  "andheri-east",
  "goregaon",
  "goregaon-east",
]);

type LandingPageProps = {
  /** Location slug supplied directly by the route registration in App.tsx. */
  slugOverride?: string;
};

/** Campaign landing page: full replica of the coworking-space-in-<location>
 *  page, but rendered with the LpHeader (visible phone CTA on desktop) and
 *  an /lp/* canonical URL so the organic SEO page stays the source of truth. */
const LandingPage = ({ slugOverride = "" }: LandingPageProps) => {
  if (!LP_SLUGS.has(slugOverride)) return <NotFound />;
  return (
    <CoworkingTemplate
      routePath={`/coworking-space-in-${slugOverride}`}
      lp
      lpPath={`/lp/coworking-space-in-${slugOverride}`}
    />
  );
};

export default LandingPage;