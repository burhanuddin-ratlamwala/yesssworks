import { Reveal } from "./Reveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbox } from "./Lightbox";
// Mahape, real photographs of the campus
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
import { ackrutiCategories, ACKRUTI_SLUG } from "@/data/ackruti-images";
import { andheriAtCategories, ANDHERI_AT_SLUG } from "@/data/andheri-at-images";
import { goregaon271Categories, GOREGAON_271_SLUG } from "@/data/goregaon-271-images";
import { aurumMahape } from "@/data/aurum-mahape-images";
import { pinnacleCategories, PINNACLE_SLUG } from "@/data/pinnacle-images";
import { imageryFor } from "@/data/location-imagery";
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
const heroConference = realPhotos.exterior;

interface Props {
  location: string;
  slug?: string;
}

const defaultCategories = [
  {
    key: "indoor",
    label: "Indoor Workspace",
    blurb: "Open desks, cabins, meeting rooms & interiors",
    tiles: [
      { src: openDesks, label: "Open Desks" },
      { src: privateCabin, label: "Private Cabins" },
      { src: meetingRoom, label: "Meeting Rooms" },
      { src: officeSuite, label: "Office Suites" },
      { src: fixedDesk, label: "Fixed Desks" },
      { src: phoneBooth, label: "Phone Booths" },
      { src: reception, label: "Reception & Lobby" },
      { src: virtualOffice, label: "Business Lounge" },
    ],
  },
  {
    key: "outdoor",
    label: "Outdoor & Exterior",
    blurb: "Building view, terrace, parking & outdoor seating",
    tiles: [
      { src: terrace, label: "Rooftop Terrace" },
      { src: heroConference, label: "Building Exterior" },
      { src: lounge, label: "Outdoor Seating" },
      { src: reception, label: "Entrance & Parking" },
    ],
  },
  {
    key: "amenities",
    label: "Amenities & Facilities",
    blurb: "Pantry, café, Wi-Fi, printers, gaming zone & lounge",
    tiles: [
      { src: pantry, label: "Pantry & Café" },
      { src: lounge, label: "Lounge" },
      { src: phoneBooth, label: "Phone Booths" },
      { src: virtualOffice, label: "Print & Scan Zone" },
      { src: event, label: "Gaming & Recreation" },
      { src: meetingRoom, label: "High-Speed Wi-Fi" },
    ],
  },
  {
    key: "events",
    label: "Events & Community",
    blurb: "Networking events, workshops & team collaboration",
    tiles: [
      { src: event, label: "Networking Events" },
      { src: meetingRoom, label: "Workshops" },
      { src: openDesks, label: "Team Collaboration" },
      { src: terrace, label: "Community Meet-ups" },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle & Experience",
    blurb: "People at work, work culture, ambience & candid shots",
    tiles: [
      { src: openDesks, label: "Focused Work" },
      { src: lounge, label: "Casual Vibes" },
      { src: pantry, label: "Coffee Breaks" },
      { src: heroConference, label: "Brainstorms" },
      { src: terrace, label: "Sunset Hours" },
      { src: event, label: "Happy Hours" },
    ],
  },
];

// Real photographs from the YesssWorks Mahape campus
const mahapeCategories = [
  {
    key: "indoor",
    label: "Indoor Workspace",
    blurb: "Open desks, cabins, meeting rooms & interiors",
    tiles: [
      { src: aurumMahape.conferenceOrange, label: "Orange Conference Room" },
      { src: aurumMahape.conferencePurple, label: "Nebula Boardroom" },
      { src: aurumMahape.boardroomGlass, label: "Orbit Meeting Room" },
      { src: aurumMahape.glassTeamCabin, label: "Glass Team Cabin" },
      { src: aurumMahape.bigFloorDesks, label: "Large Open Floor Workstations" },
      { src: aurumMahape.windowDesks, label: "Window Side Desk Rows" },
      { src: aurumMahape.blueDeskOne, label: "Team Cabin, Blue Dividers" },
      { src: aurumMahape.blueDeskTwo, label: "Corner Desks With City View" },
      { src: aurumMahape.teamBay, label: "Private Team Bay" },
      { src: aurumMahape.benchDesks, label: "Ten Seat Bench Cabin" },
      { src: aurumMahape.reception, label: "Reception & Lounge" },
      { src: aurumMahape.cabinCorridor, label: "Private Cabin Corridor" },
      { src: aurumMahape.twinDeskRows, label: "Twin Desk Rows" },
      { src: aurumMahape.bpoFloor, label: "Managed Seats With Systems" },
      { src: aurumMahape.roundTableRoom, label: "Four Seat Discussion Room" },
      { src: aurumMahape.fourSeatRoom, label: "Small Meeting Room" },
      { src: aurumMahape.managedDeskFloor, label: "Managed Desk Floor With Storage" },
      { src: aurumMahape.orangeLoungeTwo, label: "Waiting Lounge By The Cabins" },
      { src: aurumMahape.bigTeamFloor, label: "Large Team Floor, Upper Levels" },
      { src: aurumMahape.liveTeamFloor, label: "Team Floor In Full Swing" },
      { src: aurumMahape.blueDividerBenchOne, label: "Bench Desks By The Window" },
      { src: aurumMahape.blueDividerBenchTwo, label: "Twelve Seat Team Cabin" },
      { src: aurumMahape.monitorRowCabin, label: "Monitor Ready Desk Row" },
      { src: aurumMahape.twinMonitorCabin, label: "Twin Row Systems Cabin" },
      { src: aurumMahape.brandedGlassCorridor, label: "Branded Glass Cabin Corridor" },
      { src: aurumMahape.bluePurplePhoneBooths, label: "Blue And Violet Call Pods" },
      { src: aurumMahape.redGreenPods, label: "Red And Olive Call Pods" },
      { src: aurumMahape.hillViewFloor, label: "Hill View Desk Floor" },
      { src: aurumMahape.hillViewDeskRows, label: "Long Desk Rows, Hill View" },
      { src: aurumMahape.windowDeskRowOne, label: "Window Side Desk Rows" },
      { src: aurumMahape.windowDeskRowTwo, label: "Corner Desks With City View" },
      { src: aurumMahape.purpleDeskCluster, label: "Purple Screen Desk Cluster" },
      { src: aurumMahape.purpleDeskCorner, label: "Purple Screen Corner Cabin" },
      { src: aurumMahape.purpleAcousticFloor, label: "Acoustic Wall Desk Floor" },
      { src: aurumMahape.eightSeatCabin, label: "Eight Seat Team Cabin" },
      { src: aurumMahape.sixSeatWoodCabin, label: "Six Seat Wood Desk Cabin" },
      { src: aurumMahape.cabinCorridorNarrow, label: "Private Cabin Corridor" },
      { src: aurumMahape.tealPodPair, label: "Orange And Teal Call Pods" },
      { src: aurumMahape.twoSeatWindowCabin, label: "Two Seat Cabin By The Window" },
      { src: aurumMahape.threeSeatWindowCabin, label: "Three Seat Window Cabin" },
      { src: aurumMahape.redWallBoardroom, label: "Red Wall Boardroom" },
      { src: aurumMahape.redWallBoardroomWide, label: "Six Seat Red Wall Boardroom" },
      { src: aurumMahape.tealWallBoardroom, label: "Green Wall Boardroom" },
      { src: mhOpenDesks, label: "46 Seater" },
      { src: mhPrivateCabin, label: "Private Cabin" },
      { src: mhConference, label: "Conference Room" },
      { src: mhBoardroom, label: "Boardroom" },
      { src: mhPhoneBooth, label: "Discussion Room" },
      { src: mhFixedDesks, label: "31 Seater" },
      { src: mhHuddle, label: "Huddle Room" },
      { src: mhMeetingRoom, label: "Meeting Room" },
      { src: mhArches, label: "Open Desk Area" },
      { src: mhOpenWorkspace, label: "31/39 Private Cabin" },
      { src: mhDeskBay, label: "10 Seater Private Cabin" },
      { src: mhLargeWorkfloor, label: "70 Seater Customised Cabin with Meeting Room" },
      { src: mhLongTeamRoom, label: "Flexi Desk" },
      { src: mhPurpleWorkfloor, label: "31 Seater" },
      { src: mhSkylineWorkfloor, label: "31 Seater" },
      { src: mhCityViewDesks, label: "31 Seater" },
      { src: mhMountainViewDesks, label: "Mountain-View Desks" },
      { src: mhBlueDividerDesks, label: "Hot Desk" },
      { src: mhWindowRow, label: "Window-Row Workstations" },
      { src: mhMonitorBay, label: "50 Seater" },
      { src: mhTeamRoom, label: "22 Seater" },
      { src: mhTwoSeater, label: "Compact 2-Seater Cabin" },
      { src: mhThreeSeater, label: "3-Seater Cabin" },
      { src: mhSoloCabin, label: "2 Seater Cabin" },
      { src: mhSixSeater, label: "6-Seater Cabin" },
      { src: mhNarrowCabin, label: "4-Seater Cabin" },
      { src: mhCompactCabin, label: "Compact 2-Seater Cabin" },
      { src: mhMeeting, label: "Meeting Pod" },
      { src: mhBoardroom, label: "Boardroom" },
      { src: mhConference, label: "Conference Room" },
      { src: mhMeetingRoom, label: "Meeting Room" },
      { src: mhGreenMeetingRoom, label: "Green Acoustic Meeting Room" },
      { src: mhRedDiscussionRoom, label: "Red Discussion Room" },
      { src: mhOrangeMeeting, label: "Discussion Room" },
      { src: mhDiscussion, label: "Quick Sync Room" },
      { src: mhHuddle, label: "Huddle Room" },
      { src: mhPhoneBooth, label: "Phone Booth" },
      { src: mhColorBooths, label: "Colour Phone Booths" },
      { src: mhOrangeTealBooths, label: "Orange & Teal Phone Booths" },
      { src: mhArchBoothCorridor, label: "Arch Booth Corridor" },
      { src: mhEverestWorkfloor, label: "Enterprise Team Workfloor" },
      { src: mhCorridor, label: "Meeting Room Corridor" },
      { src: mhReception, label: "Reception & Lobby" },
    ],
  },
  {
    key: "outdoor",
    label: "Outdoor & Exterior",
    blurb: "Building view, entrance & landscaped surroundings",
    tiles: [
      { src: aurumMahape.facade, label: "Aurum Q6 Building Facade" },
      { src: aurumMahape.entrance, label: "Ground Floor Entrance" },
      { src: aurumMahape.towerExterior, label: "Aurum Q6 Tower, Upper Floors" },
      { src: aurumMahape.signageEntrance, label: "YesssWorks Signage & Entry" },
      { src: mhExterior, label: "Building Entrance" },
      { src: mhExteriorTwo, label: "Campus Exterior" },
      { src: mhBuildingTower, label: "YesssWorks Tower" },
      { src: mhEntranceSignage, label: "Entrance & Signage" },
      { src: mhRooftopCafe, label: "Rooftop Cafe" },
      { src: mhRooftopLounge, label: "Rooftop Lounge" },
    ],
  },
  {
    key: "amenities",
    label: "Amenities & Facilities",
    blurb: "Pantry, café, Wi-Fi, lounge & meeting pods",
    tiles: [
      { src: aurumMahape.highTable, label: "High Table & Green Canopy" },
      { src: aurumMahape.loungeWide, label: "Lounge & Coffee Corner" },
      { src: aurumMahape.orangeMeetingRoom, label: "Six Seat Meeting Room" },
      { src: aurumMahape.yellowBooth, label: "Quiet Lounge Booth" },
      { src: aurumMahape.focusBooths, label: "Focus Booths & Call Pods" },
      { src: aurumMahape.roundTableRoomTwo, label: "Round Table Room, Tree View" },
      { src: aurumMahape.pantryLoungeOne, label: "Pantry Corner, Upper Floors" },
      { src: aurumMahape.pantryLoungeTwo, label: "Microwave & Coffee Station" },
      { src: aurumMahape.orangeLoungePantry, label: "Coffee Counter & Orange Seats" },
      { src: aurumMahape.coffeeStation, label: "Coffee Station, Upper Floors" },
      { src: mhColorBooths, label: "Colour Phone Booths" },
      { src: mhRooftopLounge, label: "Rooftop Games Lounge" },
      { src: mhReception, label: "Reception" },
      { src: mhRooftopCafe, label: "Rooftop Cafe" },
      { src: mhLounge, label: "Lounge" },
      { src: mhColorLounge, label: "Free Time / Tea Time Space" },
      { src: mhLoungeWide, label: "Waiting Lounge" },
      { src: mhOrangeWaiting, label: "Welcome Waiting Area" },
      { src: mhPantryLounge, label: "Pantry Lounge" },
      { src: mhMeeting, label: "Meeting Pod" },
      { src: mhBoardroom, label: "Boardroom" },
      { src: mhConference, label: "Conference Room" },
      { src: mhHuddle, label: "Huddle Room" },
      { src: mhReception, label: "Reception" },
      { src: mhColorBooths, label: "Colour Phone Booths" },
    ],
  },
  {
    key: "events",
    label: "Events & Community",
    blurb: "Networking spots, collaboration & community zones",
    tiles: [
      { src: aurumMahape.loungeOne, label: "Colour Lounge Meet-ups" },
      { src: aurumMahape.archBooths, label: "Arch Booth Seating" },
      { src: aurumMahape.rooftopCafeTwo, label: "Rooftop Games & Long Tables" },
      { src: aurumMahape.orangeLoungeOne, label: "Orange Lounge Catch-ups" },
      { src: mhRooftopCafe, label: "Rooftop Networking" },
      { src: mhRooftopLounge, label: "Rooftop Games Night" },
      { src: mhConference, label: "Town Halls" },
      { src: mhBoardroom, label: "Workshops" },
      { src: mhLargeWorkfloor, label: "All-Hands Floor" },
      { src: mhEverestWorkfloor, label: "Community Workfloor" },
      { src: mhLounge, label: "Community Lounge" },
      { src: mhColorLounge, label: "Free Time / Tea Time Space" },
      { src: mhOpenDesks, label: "Team Collaboration" },
      { src: mhReception, label: "Welcome Area" },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle & Experience",
    blurb: "People at work, work culture, ambience & candid moments",
    tiles: [
      { src: aurumMahape.loungeTwo, label: "Breakout Lounge" },
      { src: aurumMahape.rooftopCafeOne, label: "Rooftop Cafe After Hours" },
      { src: aurumMahape.greenLoungeOne, label: "Olive Lounge Downtime" },
      { src: aurumMahape.greenLoungeTwo, label: "Olive Lounge & Pantry Wall" },
      { src: mhMonitorBay, label: "Deep Focus Bay" },
      { src: mhArchBoothCorridor, label: "Arch Booth Corridor" },
      { src: mhPurpleWorkfloor, label: "Purple Workfloor" },
      { src: mhArches, label: "Cozy Booths" },
      { src: mhOpenDesks, label: "Focused Work" },
      { src: mhColorBooths, label: "Colour Booths" },
      { src: mhFixedDesks, label: "Deep Work Zone" },
      { src: mhHuddle, label: "Quick Catch-ups" },
      { src: mhMeeting, label: "Quick Huddles" },
      { src: mhReception, label: "Arrivals" },
    ],
  },
];

export const Gallery = ({ location, slug }: Props) => {
  /** Any hub without a hand-curated set still shows its own real photographs. */
  const hubCategories = (place: string, hubSlug?: string) => {
    const tiles = imageryFor(hubSlug, place).tiles;
    const chunk = (start: number, n: number) =>
      Array.from({ length: Math.min(n, tiles.length) }, (_, i) => tiles[(start + i) % tiles.length]);
    return [
      { key: "indoor", label: "Indoor Workspace", blurb: "Open desks, private cabins and team floors", tiles: chunk(0, 8) },
      { key: "meeting", label: "Meeting & Boardroom", blurb: "Boardrooms, huddle rooms and call pods", tiles: chunk(8, 8) },
      { key: "amenities", label: "Amenities & Facilities", blurb: "Pantry, lounge, print zone and breakout corners", tiles: chunk(16, 8) },
      { key: "lifestyle", label: "Lifestyle & Experience", blurb: "How the floor feels on a normal working day", tiles: chunk(24, 8) },
    ];
  };
  const categories =
    slug === "mahape"
      ? mahapeCategories
      : slug === ACKRUTI_SLUG
        ? ackrutiCategories
        : slug === ANDHERI_AT_SLUG
          ? andheriAtCategories
          : slug === GOREGAON_271_SLUG
            ? goregaon271Categories
            : slug === PINNACLE_SLUG
              ? pinnacleCategories
              : hubCategories(location, slug);
  return (
  <section className="py-12 bg-background">
    <div className="container">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Inside YesssWorks {location}</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Visit Our Gallery</h2>
          <p className="mt-3 text-muted-foreground">Explore every corner of our {location} hub, from the workspace floor to community events and candid moments.</p>
        </div>
        {slug && (
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to={`/gallery/${slug}`}>See full {location} gallery <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        )}
      </Reveal>

      <Tabs defaultValue="indoor" className="mt-10">
        <TabsList className="flex flex-wrap h-auto justify-start gap-2 bg-transparent p-0">
          {categories.map((c) => (
            <TabsTrigger
              key={c.key}
              value={c.key}
              className="rounded-full border border-border bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary px-4 py-2 text-sm font-semibold"
            >
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((c) => (
          <TabsContent key={c.key} value={c.key} className="mt-6">
            <p className="text-sm text-muted-foreground mb-5">{c.blurb}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {c.tiles.slice(0, 8).map((t, i) => (
                <Reveal
                  key={`${c.key}-${t.label}-${i}`}
                  delay={i * 60}
                  variant="scale"
                  className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] aspect-[4/3]"
                >
                  <Lightbox src={t.src} alt={`${t.label} at YesssWorks ${location}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-primary-foreground font-bold text-sm md:text-base text-left">{t.label}</p>
                  </Lightbox>
                </Reveal>
              ))}
            </div>
            {slug && (
              <div className="mt-8 flex justify-center">
                <Button asChild size="lg" className="shadow-[var(--shadow-elegant)]">
                  <Link to={`/gallery/${slug}`}>See full {location} gallery <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
  );
};
