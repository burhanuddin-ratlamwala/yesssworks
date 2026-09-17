// Real photographs from the YesssWorks Andheri, Pinnacle Business Park hub.
import workstations01 from "@/assets/pinnacle/pinnacle-andheri-coworking-open-plan-workstations-01.webp.asset.json";
import workstations02 from "@/assets/pinnacle/pinnacle-andheri-coworking-open-plan-workstations-02.webp.asset.json";
import workstations03 from "@/assets/pinnacle/pinnacle-andheri-coworking-open-plan-workstations-03.webp.asset.json";
import boardroom01 from "@/assets/pinnacle/pinnacle-andheri-coworking-boardroom-01.webp.asset.json";
import boardroom02 from "@/assets/pinnacle/pinnacle-andheri-coworking-boardroom-02.webp.asset.json";
import boardroom03 from "@/assets/pinnacle/pinnacle-andheri-coworking-boardroom-03.webp.asset.json";
import glassMeeting from "@/assets/pinnacle/pinnacle-andheri-coworking-glass-meeting-room.webp.asset.json";
import largeMeeting01 from "@/assets/pinnacle/pinnacle-andheri-coworking-large-meeting-room-01.webp.asset.json";
import largeMeeting02 from "@/assets/pinnacle/pinnacle-andheri-coworking-large-meeting-room-02.webp.asset.json";
import lobbyLounge from "@/assets/pinnacle/pinnacle-andheri-coworking-lobby-lounge-seating.webp.asset.json";
import loungeWindowSeat from "@/assets/pinnacle/pinnacle-andheri-coworking-private-lounge-window-seat.webp.asset.json";
import receptionStaircase from "@/assets/pinnacle/pinnacle-andheri-coworking-reception-lobby-staircase.webp.asset.json";
import smallPrivateOffice from "@/assets/pinnacle/pinnacle-andheri-coworking-small-private-office.webp.asset.json";

export const PINNACLE_SLUG = "andheri-pinnacle";

export const pinnacleImages = {
  workstations01: workstations01.url,
  workstations02: workstations02.url,
  workstations03: workstations03.url,
  boardroom01: boardroom01.url,
  boardroom02: boardroom02.url,
  boardroom03: boardroom03.url,
  glassMeeting: glassMeeting.url,
  largeMeeting01: largeMeeting01.url,
  largeMeeting02: largeMeeting02.url,
  lobbyLounge: lobbyLounge.url,
  loungeWindowSeat: loungeWindowSeat.url,
  receptionStaircase: receptionStaircase.url,
  smallPrivateOffice: smallPrivateOffice.url,
};

const p = pinnacleImages;

/** Flat tile list used by the full gallery page. */
export const pinnacleTiles = [
  { src: p.workstations01, label: "Open Workstation Rows on the Coworking Floor" },
  { src: p.workstations02, label: "Wide Work Floor with Planter Dividers" },
  { src: p.workstations03, label: "Long Shared Desk Bay Beside the Cabins" },
  { src: p.boardroom01, label: "Twelve Seat Boardroom with Ring Lighting" },
  { src: p.boardroom02, label: "Boardroom Table with Wall Mounted Screen" },
  { src: p.boardroom03, label: "Head On View of the Main Boardroom" },
  { src: p.glassMeeting, label: "Four Seat Glass Meeting Room with Whiteboard" },
  { src: p.largeMeeting01, label: "Large Meeting Floor with Feature Wall" },
  { src: p.largeMeeting02, label: "Team Table Under the Sculpted Wall Panels" },
  { src: p.lobbyLounge, label: "Marble Lobby Lounge with Yellow Chairs" },
  { src: p.receptionStaircase, label: "Double Height Reception with Floating Staircase" },
  { src: p.loungeWindowSeat, label: "Breakout Lounge with Orange Window Bench" },
  { src: p.smallPrivateOffice, label: "Four Seat Private Cabin with Textured Wall" },
];

/** Tabbed categories used by the on-page gallery section. */
export const pinnacleCategories = [
  {
    key: "indoor",
    label: "Indoor Workspace",
    blurb: "Workstation floors, cabins and desk bays at Pinnacle Business Park",
    tiles: [
      { src: p.workstations01, label: "Open Workstation Rows" },
      { src: p.workstations02, label: "Wide Coworking Floor" },
      { src: p.workstations03, label: "Long Shared Desk Bay" },
      { src: p.largeMeeting01, label: "Team Floor with Feature Wall" },
      { src: p.largeMeeting02, label: "Sculpted Panel Work Bay" },
      { src: p.glassMeeting, label: "Glass Cabin for Small Teams" },
      { src: p.smallPrivateOffice, label: "Four Seat Private Cabin" },
    ],
  },
  {
    key: "meetings",
    label: "Meeting & Boardroom",
    blurb: "Bookable rooms for reviews, client visits and pitch runs",
    tiles: [
      { src: p.boardroom01, label: "Twelve Seat Boardroom" },
      { src: p.boardroom02, label: "Boardroom with Screen" },
      { src: p.boardroom03, label: "Long Conference Table" },
      { src: p.glassMeeting, label: "Four Seat Discussion Room" },
      { src: p.largeMeeting01, label: "Large Group Meeting Setup" },
      { src: p.largeMeeting02, label: "Team Review Table" },
      { src: p.smallPrivateOffice, label: "Compact Cabin for Interviews" },
    ],
  },
  {
    key: "amenities",
    label: "Lobby & Amenities",
    blurb: "Reception lounge, waiting seating and shared facilities",
    tiles: [
      { src: p.lobbyLounge, label: "Marble Lobby Lounge" },
      { src: p.receptionStaircase, label: "Reception and Staircase" },
      { src: p.loungeWindowSeat, label: "Games and Breakout Lounge" },
      { src: p.workstations01, label: "Planted Floor Dividers" },
      { src: p.workstations02, label: "Print and Utility Corner" },
      { src: p.glassMeeting, label: "Whiteboard Huddle Room" },
      { src: p.boardroom02, label: "Screen Ready Rooms" },
      { src: p.workstations03, label: "Lockable Desk Storage" },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle & Experience",
    blurb: "How a working day feels inside Pinnacle, Andheri East",
    tiles: [
      { src: p.lobbyLounge, label: "Walking in Each Morning" },
      { src: p.receptionStaircase, label: "Signing in at Reception" },
      { src: p.loungeWindowSeat, label: "Board Games After Lunch" },
      { src: p.workstations01, label: "Heads Down Mornings" },
      { src: p.boardroom03, label: "Monday Reviews" },
      { src: p.workstations02, label: "Daylight at Your Desk" },
      { src: p.glassMeeting, label: "Quick Client Calls" },
      { src: p.largeMeeting02, label: "Whiteboard Sessions" },
    ],
  },
];
