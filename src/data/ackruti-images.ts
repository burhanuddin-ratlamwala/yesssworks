// Real photographs from the YesssWorks Andheri, Ackruti Softech Park hub.
import cafeBreakout from "@/assets/ackruti/coworking-cafe-breakout-area.webp.asset.json";
import glassPods from "@/assets/ackruti/coworking-glass-private-office-pods.webp.asset.json";
import largeOpenPlan from "@/assets/ackruti/coworking-large-open-plan-workspace.webp.asset.json";
import longWorktable from "@/assets/ackruti/coworking-long-shared-worktable.webp.asset.json";
import meetingTable from "@/assets/ackruti/coworking-meeting-room-conference-table.webp.asset.json";
import meetingWallArt from "@/assets/ackruti/coworking-meeting-room-wall-art.webp.asset.json";
import lockers from "@/assets/ackruti/coworking-member-lockers-corridor.webp.asset.json";
import creativeWall from "@/assets/ackruti/coworking-open-plan-desks-creative-wall.webp.asset.json";
import sharedDesks01 from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-01.webp.asset.json";
import sharedDesks02 from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-02.webp.asset.json";
import sharedDesks03 from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-03.webp.asset.json";
import sharedDesks04 from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-04.webp.asset.json";
import trainingRoom from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-05.webp.asset.json";
import classroomBay from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-06.webp.asset.json";
import pantryCafe from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-07.webp.asset.json";
import redWallDesks from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-08.webp.asset.json";
import longDeskRows from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-09.webp.asset.json";
import quoteMeetingRoom from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-10.webp.asset.json";
import muralWorkfloor from "@/assets/ackruti/coworking-open-plan-workspace-shared-desks-11.webp.asset.json";
import phoneBooth from "@/assets/ackruti/coworking-open-workspace-phone-booth.webp.asset.json";
import privateOfficeWindow from "@/assets/ackruti/coworking-private-office-window-view.webp.asset.json";
import muralSharedDesks from "@/assets/ackruti/coworking-shared-desks-creative-wall.webp.asset.json";
import featureWallDesks from "@/assets/ackruti/coworking-shared-desks-feature-wall.webp.asset.json";
import muralWorktable from "@/assets/ackruti/coworking-shared-worktable-creative-wall.webp.asset.json";
import glassMeetingNook from "@/assets/ackruti/coworking-private-meeting-room-glass-partition.webp.asset.json";

export const ACKRUTI_SLUG = "andheri-ackruti";

export const ackrutiImages = {
  cafeBreakout: cafeBreakout.url,
  glassPods: glassPods.url,
  largeOpenPlan: largeOpenPlan.url,
  longWorktable: longWorktable.url,
  meetingTable: meetingTable.url,
  meetingWallArt: meetingWallArt.url,
  lockers: lockers.url,
  creativeWall: creativeWall.url,
  sharedDesks01: sharedDesks01.url,
  sharedDesks02: sharedDesks02.url,
  sharedDesks03: sharedDesks03.url,
  sharedDesks04: sharedDesks04.url,
  trainingRoom: trainingRoom.url,
  classroomBay: classroomBay.url,
  pantryCafe: pantryCafe.url,
  redWallDesks: redWallDesks.url,
  longDeskRows: longDeskRows.url,
  quoteMeetingRoom: quoteMeetingRoom.url,
  muralWorkfloor: muralWorkfloor.url,
  phoneBooth: phoneBooth.url,
  privateOfficeWindow: privateOfficeWindow.url,
  muralSharedDesks: muralSharedDesks.url,
  featureWallDesks: featureWallDesks.url,
  muralWorktable: muralWorktable.url,
  glassMeetingNook: glassMeetingNook.url,
};

const a = ackrutiImages;

// Flat tile list used by the full gallery page.
export const ackrutiTiles = [
  { src: a.largeOpenPlan, label: "Open Coworking Floor" },
  { src: a.sharedDesks01, label: "Shared Desks by the Windows" },
  { src: a.sharedDesks02, label: "Hot Desk Rows" },
  { src: a.longWorktable, label: "Long Shared Worktable" },
  { src: a.creativeWall, label: "Glass Cabins & Desk Bays" },
  { src: a.glassPods, label: "Private Office Pods" },
  { src: a.meetingTable, label: "Meeting Room" },
  { src: a.meetingWallArt, label: "Discussion Room" },
  { src: a.cafeBreakout, label: "Café & Breakout Area" },
  { src: a.lockers, label: "Member Lockers" },
  { src: a.redWallDesks, label: "Shared Desks by the Red Wall" },
  { src: a.longDeskRows, label: "Long Desk Rows" },
  { src: a.muralWorkfloor, label: "Mural Workfloor" },
  { src: a.sharedDesks03, label: "Open Desks near the Phone Booth" },
  { src: a.sharedDesks04, label: "Be Bold Desk Bay" },
  { src: a.trainingRoom, label: "Training Room" },
  { src: a.classroomBay, label: "Classroom Style Seating" },
  { src: a.quoteMeetingRoom, label: "Quote Wall Meeting Room" },
  { src: a.pantryCafe, label: "Pantry & Coffee Bar" },
  { src: a.phoneBooth, label: "Telephone Booth" },
  { src: a.privateOfficeWindow, label: "Private Cabin with Window View" },
  { src: a.muralSharedDesks, label: "Mural Wall Shared Desks" },
  { src: a.featureWallDesks, label: "Feature Wall Desk Bay" },
  { src: a.muralWorktable, label: "Mural Wall Worktable" },
  { src: a.glassMeetingNook, label: "Glass Meeting Nook" },
];

// Tabbed categories used by the on-page gallery section.
export const ackrutiCategories = [
  {
    key: "indoor",
    label: "Indoor Workspace",
    blurb: "Open desks, glass cabins and meeting rooms on the floor",
    tiles: [
      { src: a.largeOpenPlan, label: "Open Coworking Floor" },
      { src: a.sharedDesks01, label: "Window-Side Shared Desks" },
      { src: a.sharedDesks02, label: "Hot Desk Rows" },
      { src: a.longWorktable, label: "Long Shared Worktable" },
      { src: a.creativeWall, label: "Glass Cabins & Desk Bays" },
      { src: a.glassPods, label: "Private Office Pods" },
      { src: a.meetingTable, label: "Meeting Room" },
      { src: a.meetingWallArt, label: "Discussion Room" },
      { src: a.redWallDesks, label: "Shared Desks by the Red Wall" },
      { src: a.longDeskRows, label: "Long Desk Rows" },
      { src: a.muralWorkfloor, label: "Mural Workfloor" },
      { src: a.sharedDesks03, label: "Open Desks near the Phone Booth" },
      { src: a.sharedDesks04, label: "Be Bold Desk Bay" },
      { src: a.trainingRoom, label: "Training Room" },
      { src: a.classroomBay, label: "Classroom Style Seating" },
      { src: a.quoteMeetingRoom, label: "Quote Wall Meeting Room" },
      { src: a.privateOfficeWindow, label: "Private Cabin with Window View" },
      { src: a.muralSharedDesks, label: "Mural Wall Shared Desks" },
      { src: a.featureWallDesks, label: "Feature Wall Desk Bay" },
      { src: a.muralWorktable, label: "Mural Wall Worktable" },
      { src: a.glassMeetingNook, label: "Glass Meeting Nook" },
    ],
  },
  {
    key: "amenities",
    label: "Amenities & Facilities",
    blurb: "Café, breakout seating, lockers and support spaces",
    tiles: [
      { src: a.cafeBreakout, label: "Café & Breakout Area" },
      { src: a.lockers, label: "Member Lockers" },
      { src: a.glassPods, label: "Focus Cabins" },
      { src: a.meetingTable, label: "Video Call Ready Meeting Room" },
      { src: a.pantryCafe, label: "Pantry & Coffee Bar" },
      { src: a.phoneBooth, label: "Telephone Booth" },
      { src: a.trainingRoom, label: "Training Room" },
      { src: a.quoteMeetingRoom, label: "Quote Wall Meeting Room" },
      { src: a.glassMeetingNook, label: "Glass Meeting Nook" },
      { src: a.privateOfficeWindow, label: "Private Cabin with Window View" },
    ],
  },
  {
    key: "events",
    label: "Events & Community",
    blurb: "Room for town halls, workshops and team catch-ups",
    tiles: [
      { src: a.cafeBreakout, label: "Community Lunch Tables" },
      { src: a.meetingWallArt, label: "Workshops" },
      { src: a.largeOpenPlan, label: "All-Hands Floor" },
      { src: a.longWorktable, label: "Team Collaboration" },
      { src: a.classroomBay, label: "Training Sessions" },
      { src: a.muralWorkfloor, label: "Mural Workfloor Meetups" },
      { src: a.pantryCafe, label: "Coffee Break Catch-ups" },
      { src: a.quoteMeetingRoom, label: "Small Group Sessions" },
      { src: a.muralWorktable, label: "Mural Wall Long Tables" },
      { src: a.featureWallDesks, label: "Feature Wall Team Bay" },
    ],
  },
  {
    key: "lifestyle",
    label: "Lifestyle & Experience",
    blurb: "How a working day actually feels at Ackruti Softech Park",
    tiles: [
      { src: a.sharedDesks01, label: "Focused Work" },
      { src: a.cafeBreakout, label: "Coffee Breaks" },
      { src: a.creativeWall, label: "Quick Catch-ups" },
      { src: a.glassPods, label: "Head-down Hours" },
      { src: a.redWallDesks, label: "Motivation on the Walls" },
      { src: a.phoneBooth, label: "Private Calls" },
      { src: a.longDeskRows, label: "Busy Afternoons" },
      { src: a.pantryCafe, label: "Tea Time" },
      { src: a.privateOfficeWindow, label: "Green Views While You Work" },
      { src: a.muralSharedDesks, label: "Monday Morning Energy" },
    ],
  },
];
