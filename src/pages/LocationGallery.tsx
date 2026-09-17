import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { BookTourDialog } from "@/components/site/BookTourDialog";
import { CTA } from "@/components/site/CTA";
import { Lightbox } from "@/components/site/Lightbox";
import { locations, LocationSlug, SITE } from "@/data/locations";
import mhReception from "@/assets/mahape/mahape-reception.webp";
import mhExterior from "@/assets/mahape/mahape-exterior.webp";
import mhPantry from "@/assets/mahape/mahape-pantry-cafe.webp";
import mhLounge from "@/assets/mahape/mahape-lounge.webp";
import mhMeeting from "@/assets/mahape/mahape-meeting-pod.webp";
import mhOpenDesks from "@/assets/mahape/mahape-open-desks.webp";
import mhFixedDesks from "@/assets/mahape/mahape-fixed-desks.webp";
import mhArches from "@/assets/mahape/mahape-coworking-arches.webp";
import mhRooftopCafe from "@/assets/mahape/mahape-rooftop-cafe.webp";
import mhBoardroom from "@/assets/mahape/mahape-boardroom.webp";
import mhConference from "@/assets/mahape/mahape-conference-room.webp";
import mhHuddle from "@/assets/mahape/mahape-huddle-room.webp";
import mhMeetingRoom from "@/assets/mahape/mahape-meeting-room.webp";
import mhPhoneBooth from "@/assets/mahape/mahape-phone-booth.webp";
import mhCorridor from "@/assets/mahape/mahape-corridor.webp";
import mhDiscussion from "@/assets/mahape/mahape-discussion-room.webp";
import mhOrangeMeeting from "@/assets/mahape/mahape-orange-meeting.webp";
import mhTeamRoom from "@/assets/mahape/mahape-team-room.webp";
import mhCoworkingFloor from "@/assets/mahape/mahape-coworking-floor.webp";
import mhDeskBay from "@/assets/mahape/mahape-desk-bay.webp";
import mhOpenWorkspace from "@/assets/mahape/mahape-open-workspace.webp";
import mhWorkstationZone from "@/assets/mahape/mahape-workstation-zone.webp";
import mhExteriorTwo from "@/assets/mahape/mahape-building-exterior-2.webp";
import mhColorLounge from "@/assets/mahape/mahape-color-lounge.webp";
import mhLoungeWide from "@/assets/mahape/mahape-lounge-wide.webp";
import mhOpenWorkfloor from "@/assets/mahape/mahape-open-workfloor.webp";
import mhRooftopLounge from "@/assets/mahape/mahape-rooftop-lounge.webp";
import mhMonitorBay from "@/assets/mahape/mahape-monitor-bay.webp";
import mhPrivateCabin from "@/assets/mahape/mahape-private-cabin.webp";
import mhColorBooths from "@/assets/mahape/mahape-color-booths.webp";
import mhTeamCabin from "@/assets/mahape/mahape-team-cabin.webp";
import mhBrandedCorridor from "@/assets/mahape/mahape-branded-corridor.webp";
import mhMonitorRow from "@/assets/mahape/mahape-monitor-row.webp";
import mhWindowWorkstations from "@/assets/mahape/mahape-window-workstations.webp";
import mhTwinBooths from "@/assets/mahape/mahape-twin-booths.webp";
import mhLargeWorkfloor from "@/assets/mahape/mahape-large-workfloor.webp";
import mhOrangeWaiting from "@/assets/mahape/mahape-orange-waiting.webp";
import mhOrangeLounge from "@/assets/mahape/mahape-orange-lounge.webp";
import mhWindowCabin from "@/assets/mahape/mahape-window-cabin.webp";
import mhAcousticCabin from "@/assets/mahape/mahape-acoustic-cabin.webp";
import mhTwoSeater from "@/assets/mahape/mahape-two-seater.webp";
import mhThreeSeater from "@/assets/mahape/mahape-three-seater.webp";
import mhSoloCabin from "@/assets/mahape/mahape-solo-cabin.webp";
import mhLongTeamRoom from "@/assets/mahape/mahape-long-team-room.webp";
import mhPurpleWorkfloor from "@/assets/mahape/mahape-purple-workfloor.webp";
import mhGlassCorridor from "@/assets/mahape/mahape-glass-corridor.webp";
import mhWarmBooths from "@/assets/mahape/mahape-warm-booths.webp";
import mhWindowRow from "@/assets/mahape/mahape-window-row.webp";
import mhYCabin from "@/assets/mahape/mahape-y-cabin.webp";
import mhNarrowCabin from "@/assets/mahape/mahape-narrow-cabin.webp";
import mhCompactCabin from "@/assets/mahape/mahape-compact-cabin.webp";
import mhSixSeater from "@/assets/mahape/mahape-six-seater.webp";
import mhCityViewDesks from "@/assets/mahape/mahape-city-view-desks.webp";
import mhSkylineWorkfloor from "@/assets/mahape/mahape-skyline-workfloor.webp";
import mhGreenLoungeKitchen from "@/assets/mahape/mahape-green-lounge-kitchen.webp";
import mhPantryLounge from "@/assets/mahape/mahape-pantry-lounge.webp";
import mhCoffeeBar from "@/assets/mahape/mahape-coffee-bar.webp";
import mhBlueDividerDesks from "@/assets/mahape/mahape-blue-divider-desks.webp";
import mhBlueTeamBay from "@/assets/mahape/mahape-blue-team-bay.webp";
import mhPinkWindowDesks from "@/assets/mahape/mahape-pink-window-desks.webp";
import mhMountainViewDesks from "@/assets/mahape/mahape-mountain-view-desks.webp";
import mhGreenMeetingRoom from "@/assets/mahape/mahape-green-meeting-room.webp";
import mhRedMeetingRoom from "@/assets/mahape/mahape-red-meeting-room.webp";
import mhGreenWaitingLounge from "@/assets/mahape/mahape-green-waiting-lounge.webp";
import mhBrightWindowDesks from "@/assets/mahape/mahape-bright-window-desks.webp";
import mhHillViewDesks from "@/assets/mahape/mahape-hill-view-desks.webp";
import mhOrangeCoffeeBar from "@/assets/mahape/mahape-orange-coffee-bar.webp";
import mhRedDiscussionRoom from "@/assets/mahape/mahape-red-discussion-room.webp";
import mhOrangeLoungeBar from "@/assets/mahape/mahape-orange-lounge-bar.webp";
import mhOrangeTealBooths from "@/assets/mahape/mahape-orange-teal-booths.webp";
import mhBuildingTower from "@/assets/mahape/mahape-building-tower.webp";
import mhEntranceSignage from "@/assets/mahape/mahape-entrance-signage.webp";
import mhBlueClassroomDesks from "@/assets/mahape/mahape-blue-classroom-desks.webp";
import mhRedGreenBooths from "@/assets/mahape/mahape-red-green-booths.webp";
import mhArchBoothCorridor from "@/assets/mahape/mahape-arch-booth-corridor.webp";
import mhEverestWorkfloor from "@/assets/mahape/mahape-everest-workfloor.webp";

import { ackrutiTiles, ACKRUTI_SLUG } from "@/data/ackruti-images";
import { andheriAtTiles, ANDHERI_AT_SLUG } from "@/data/andheri-at-images";
import { goregaon271Tiles, GOREGAON_271_SLUG } from "@/data/goregaon-271-images";
import { aurumMahapeTiles } from "@/data/aurum-mahape-images";
import { pinnacleTiles, PINNACLE_SLUG } from "@/data/pinnacle-images";
import { realPhotos } from "@/data/real-photos";
const lounge = realPhotos.lounge;
const pantry = realPhotos.pantry;
const reception = realPhotos.reception;
const phoneBooth = realPhotos.phoneBooth;
const terrace = realPhotos.terrace;
const event = realPhotos.community;
const openDesks = realPhotos.openDesks;
const meetingRoom = realPhotos.meetingRoom;
const privateCabin = realPhotos.privateCabin;
const officeSuite = realPhotos.officeSuite;
const fixedDesk = realPhotos.fixedDesk;
const virtualOffice = realPhotos.businessLounge;

const defaultTiles = [
  { src: reception, label: "Reception & Lobby" },
  { src: lounge, label: "Lounge & Breakout" },
  { src: openDesks, label: "Open Coworking Desks" },
  { src: pantry, label: "Pantry & Cafe" },
  { src: phoneBooth, label: "Phone Booths" },
  { src: meetingRoom, label: "Meeting Rooms" },
  { src: privateCabin, label: "Private Cabins" },
  { src: officeSuite, label: "Office Suites" },
  { src: fixedDesk, label: "Fixed Desks" },
  { src: terrace, label: "Rooftop Terrace" },
  { src: event, label: "Event Space" },
  { src: virtualOffice, label: "Business Lounge" },
];

const mahapeTiles = [
  ...aurumMahapeTiles,
  { src: mhReception, label: "Reception & Lobby" },
  { src: mhExterior, label: "Building Entrance" },
  { src: mhOpenDesks, label: "Open Coworking Desks" },
  { src: mhArches, label: "Coworking Booths" },
  { src: mhCoworkingFloor, label: "Coworking Hall" },
  { src: mhOpenWorkfloor, label: "Open Workfloor" },
  { src: mhOpenWorkspace, label: "Open Workspace" },
  { src: mhDeskBay, label: "Desk Bay" },
  { src: mhWorkstationZone, label: "Workstation Zone" },
  { src: mhLargeWorkfloor, label: "Enterprise Workfloor" },
  { src: mhLongTeamRoom, label: "Long Team Room" },
  { src: mhPurpleWorkfloor, label: "Purple Workfloor" },
  { src: mhSkylineWorkfloor, label: "Skyline Workfloor" },
  { src: mhCityViewDesks, label: "City-View Desks" },
  { src: mhMountainViewDesks, label: "Mountain-View Desks" },
  { src: mhPinkWindowDesks, label: "Window-Side Pink Bay" },
  { src: mhBlueDividerDesks, label: "Blue Divider Desks" },
  { src: mhBlueTeamBay, label: "Blue Team Bay" },
  { src: mhBlueClassroomDesks, label: "Classroom-Style Desks" },
  { src: mhBrightWindowDesks, label: "Bright Window Workstations" },
  { src: mhHillViewDesks, label: "Hill-View Workstations" },
  { src: mhWindowRow, label: "Window-Row Workstations" },
  { src: mhMonitorBay, label: "Dedicated Monitor Bay" },
  { src: mhMonitorRow, label: "Monitor Workstations" },
  { src: mhWindowWorkstations, label: "Window-Side Workstations" },
  { src: mhTeamRoom, label: "Team Room" },
  { src: mhTeamCabin, label: "Private Team Cabin" },
  { src: mhPrivateCabin, label: "Private Cabin" },
  { src: mhWindowCabin, label: "Window-View Cabin" },
  { src: mhAcousticCabin, label: "Acoustic Cabin" },
  { src: mhTwoSeater, label: "2-Seater Cabin" },
  { src: mhThreeSeater, label: "3-Seater Cabin" },
  { src: mhSoloCabin, label: "Solo Cabin" },
  { src: mhYCabin, label: "Y-Branded Cabin" },
  { src: mhSixSeater, label: "6-Seater Cabin" },
  { src: mhNarrowCabin, label: "4-Seater Cabin" },
  { src: mhCompactCabin, label: "Compact 2-Seater Cabin" },
  { src: mhFixedDesks, label: "Fixed Desks" },
  { src: mhMeeting, label: "Meeting Pod" },
  { src: mhHuddle, label: "Huddle Room" },
  { src: mhDiscussion, label: "Quick Sync Room" },
  { src: mhMeetingRoom, label: "Meeting Room" },
  { src: mhOrangeMeeting, label: "Discussion Room" },
  { src: mhBoardroom, label: "Boardroom" },
  { src: mhConference, label: "Conference Room" },
  { src: mhGreenMeetingRoom, label: "Green Acoustic Meeting Room" },
  { src: mhRedMeetingRoom, label: "Red Acoustic Meeting Room" },
  { src: mhRedDiscussionRoom, label: "Red Discussion Room" },
  { src: mhPhoneBooth, label: "Phone Booth" },
  { src: mhColorBooths, label: "Colour Phone Booths" },
  { src: mhTwinBooths, label: "Twin Focus Booths" },
  { src: mhWarmBooths, label: "Warm Acoustic Booths" },
  { src: mhOrangeTealBooths, label: "Orange & Teal Phone Booths" },
  { src: mhRedGreenBooths, label: "Red & Green Phone Booths" },
  { src: mhArchBoothCorridor, label: "Arch Booth Corridor" },
  { src: mhEverestWorkfloor, label: "Enterprise Team Workfloor" },
  { src: mhCorridor, label: "Cabin Corridor" },
  { src: mhBrandedCorridor, label: "Branded Corridor" },
  { src: mhGlassCorridor, label: "Glass Cabin Corridor" },
  { src: mhColorLounge, label: "Colour Lounge" },
  { src: mhLoungeWide, label: "Open Lounge" },
  { src: mhOrangeLounge, label: "Orange Lounge" },
  { src: mhOrangeWaiting, label: "Waiting Lounge" },
  { src: mhGreenWaitingLounge, label: "Green Waiting Lounge" },
  { src: mhGreenLoungeKitchen, label: "Pantry Lounge & Kitchen" },
  { src: mhPantryLounge, label: "Pantry Lounge" },
  { src: mhCoffeeBar, label: "Coffee & Tea Bar" },
  { src: mhOrangeCoffeeBar, label: "Orange Coffee Bar" },
  { src: mhOrangeLoungeBar, label: "Orange Lounge & Bar" },
  { src: mhLounge, label: "Breakout Lounge" },
  { src: mhPantry, label: "Pantry & Café" },
  { src: mhRooftopCafe, label: "Rooftop Cafe" },
  { src: mhRooftopLounge, label: "Rooftop Games Lounge" },
  { src: mhExteriorTwo, label: "Campus Exterior" },
  { src: mhBuildingTower, label: "YesssWorks Tower" },
  { src: mhEntranceSignage, label: "Entrance & Signage" },
  { src: mhPantry, label: "Hot Desk Bar" },
];

const LocationGallery = () => {
  const { slug } = useParams<{ slug: LocationSlug }>();
  if (!slug || !locations[slug as LocationSlug]) return <Navigate to="/gallery" replace />;
  const loc = locations[slug as LocationSlug];
  const tiles =
    loc.slug === "mahape"
      ? mahapeTiles
      : loc.slug === ACKRUTI_SLUG
        ? ackrutiTiles
        : loc.slug === ANDHERI_AT_SLUG
          ? andheriAtTiles
          : loc.slug === GOREGAON_271_SLUG
            ? goregaon271Tiles
            : loc.slug === PINNACLE_SLUG
              ? pinnacleTiles
              : defaultTiles;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={`Gallery, YesssWorks ${loc.name} | ${SITE.name}`}
        description={`Explore the YesssWorks ${loc.name} hub, reception, coworking floor, meeting rooms, phone booths, rooftop terrace and more.`}
        canonical={`/gallery/${loc.slug}`}
      />
      <Header />
      <section className="bg-sage py-14 lg:py-20">
        <div className="container">
          <Reveal>
            <p className="text-xs font-bold tracking-widest text-primary uppercase">Gallery</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
              Inside <span className="text-primary">YesssWorks {loc.name}</span>
            </h1>
            <p className="mt-3 text-foreground/80 max-w-2xl">A walk-through of every corner of our {loc.area} hub, see where you and your team will work, meet and recharge.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookTourDialog defaultLocation={loc.slug} trigger={<Button size="lg">Book a free tour <ArrowRight className="ml-1 h-4 w-4" /></Button>} />
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to={`/coworking-space-in-${loc.slug}`}>View {loc.name} coworking page</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 50} variant="scale" className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] aspect-[4/3]">
              <Lightbox src={t.src} alt={`${t.label} at YesssWorks ${loc.name}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-primary-foreground font-bold text-sm md:text-base text-left">{t.label}</p>
              </Lightbox>
            </Reveal>
          ))}
        </div>
      </section>


      <CTA title={`Like what you see? Tour YesssWorks ${loc.name}`} subtitle={`Walk through the ${loc.area} hub with our team and pick the perfect plan.`} />
      <Footer />
    </div>
  );
};

export default LocationGallery;