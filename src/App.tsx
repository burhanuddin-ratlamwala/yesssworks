import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import LocationGallery from "./pages/LocationGallery.tsx";
import Contact from "./pages/Contact.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import LocationServicePage from "./pages/LocationServicePage.tsx";
import Plans from "./pages/Plans.tsx";
import NotFound from "./pages/NotFound.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import PackagePage from "./pages/PackagePage.tsx";
import AllPages from "./pages/AllPages.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import MumbaiHub from "./pages/city/MumbaiHub.tsx";
import AffordableMumbai from "./pages/city/AffordableMumbai.tsx";
import MeetingRoomMumbai from "./pages/city/MeetingRoomMumbai.tsx";
import HotDeskMumbai from "./pages/city/HotDeskMumbai.tsx";
import PrivateCabinMumbai from "./pages/city/PrivateCabinMumbai.tsx";
import ConferenceRoomMumbai from "./pages/city/ConferenceRoomMumbai.tsx";
import OfficeSuitesMumbai from "./pages/city/OfficeSuitesMumbai.tsx";
import VirtualOfficeMumbai from "./pages/city/VirtualOfficeMumbai.tsx";
import CoworkingAndheriWest from "./pages/city/CoworkingAndheriWest.tsx";
import ThaneComingSoon from "./pages/city/ThaneComingSoon.tsx";
import LandmarkPage from "./pages/landmark/LandmarkPage.tsx";
import { landmarkPages } from "./data/landmark-pages";
import { pageRoutes } from "./data/locations";

const queryClient = new QueryClient();

/** Legacy WordPress URL -> new clean URL.
 *  Old site lived at yesssworks.com with these paths; we 301-equivalent
 *  by client-side redirecting so inbound links keep working. */
const legacyRedirects: { from: string; to: string }[] = [
  // Location pages (legacy WP)
  { from: "/andheri-office", to: "/yesssworks-andheri-ackruti-softech-park" },
  { from: "/at-office", to: "/yesssworks-andheri-at" },
  { from: "/pinnacle-office", to: "/yesssworks-andheri-pinnacle-business-park" },
  { from: "/goregaon-office", to: "/yesssworks-goregaon-271-business-park" },
  { from: "/mahapeoffice", to: "/yesssworks-mahape-aurum-q6" },
  // Previous internal building URLs -> new clean /yesssworks-* URLs
  { from: "/coworking-space-in-andheri-at", to: "/yesssworks-andheri-at" },
  { from: "/coworking-space-in-andheri-pinnacle-business-park", to: "/yesssworks-andheri-pinnacle-business-park" },
  { from: "/coworking-space-in-andheri-ackruti-softech-park", to: "/yesssworks-andheri-ackruti-softech-park" },
  { from: "/coworking-space-in-goregaon-271-business-park", to: "/yesssworks-goregaon-271-business-park" },
  { from: "/coworking-space-in-mahape-aurum-q6", to: "/yesssworks-mahape-aurum-q6" },
  // Package pages
  { from: "/cabin_space", to: "/packages/private-cabins" },
  { from: "/fixed_desk", to: "/packages/fixed-desks" },
  { from: "/meeting-room", to: "/packages/meeting-conference" },
  { from: "/office_suites", to: "/packages/office-suites" },
  { from: "/virtual_works", to: "/plans" },
  { from: "/packages/virtual-office", to: "/plans" },
  // Misc
  { from: "/know-us", to: "/about" },
  { from: "/gallery/index", to: "/gallery" },
  { from: "/yesssboard", to: "/yesssboard" }, // no-op safety
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/:slug" element={<LocationGallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/yesssboard" element={<Blog />} />
            <Route path="/yesssboard/:slug" element={<BlogPost />} />
            <Route path="/packages/:slug" element={<PackagePage />} />
            <Route path="/all-pages" element={<AllPages />} />
            <Route path="/sitemap" element={<AllPages />} />
            {/* City-level SEO hubs */}
            <Route path="/coworking-space-in-mumbai" element={<MumbaiHub />} />
            <Route path="/affordable-coworking-space-in-mumbai" element={<AffordableMumbai />} />
            <Route path="/meeting-room-in-mumbai" element={<MeetingRoomMumbai />} />
            <Route path="/hot-desk-in-mumbai" element={<HotDeskMumbai />} />
            <Route path="/private-cabin-in-mumbai" element={<PrivateCabinMumbai />} />
            <Route path="/conference-room-in-mumbai" element={<ConferenceRoomMumbai />} />
            <Route path="/office-suites-in-mumbai" element={<OfficeSuitesMumbai />} />
            <Route path="/virtual-office-in-mumbai" element={<VirtualOfficeMumbai />} />
            {/* Soft locality page: no centre in Andheri West, points east */}
            <Route path="/coworking-space-in-andheri-west" element={<CoworkingAndheriWest />} />
            {/* Upcoming campus: under construction, enquiry only */}
            <Route path="/yesssworks-thane" element={<ThaneComingSoon />} />
            <Route path="/coworking-space-in-thane" element={<ThaneComingSoon />} />
            {/* Landmark / building-name pages */}
            {landmarkPages.map((l) => (
              <Route key={l.path} path={l.path} element={<LandmarkPage path={l.path} />} />
            ))}
            {/* Campaign landing pages: /lp/coworking-space-in-<location>.
                React Router v6 requires the param to be its own segment,
                so we register each location explicitly. */}
            {["mahape", "andheri", "andheri-east", "goregaon", "goregaon-east"].map((s) => (
              <Route
                key={s}
                path={`/lp/coworking-space-in-${s}`}
                element={<LandingPage slugOverride={s} />}
              />
            ))}
            {/* Legacy author archives -> blog index */}
            <Route path="/yesssboard/author/:slug" element={<Navigate to="/yesssboard" replace />} />
            {/* Legacy WP URLs -> new clean URLs */}
            {legacyRedirects.map((r) => (
              <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
            ))}
            {pageRoutes.map((r) => (
              <Route key={r.path} path={r.path} element={<LocationServicePage routePath={r.path} />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
