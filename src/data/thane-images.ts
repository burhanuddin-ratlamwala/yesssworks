// Interior visuals for the upcoming YesssWorks Thane campus (under construction).
import gamesZone from "@/assets/thane/thane-coworking-games-zone-recreation-area.webp.asset.json";
import pantry from "@/assets/thane/thane-coworking-pantry-coffee-station.webp.asset.json";
import phoneBooths from "@/assets/thane/thane-coworking-private-phone-booths.webp.asset.json";
import cafeteria01 from "@/assets/thane/thane-coworking-cafeteria-breakout-area-01.webp.asset.json";
import cafeteria02 from "@/assets/thane/thane-coworking-cafeteria-breakout-area-02.webp.asset.json";

export const THANE_PATH = "/yesssworks-thane";

export const thaneImages = {
  gamesZone: gamesZone.url,
  pantry: pantry.url,
  phoneBooths: phoneBooths.url,
  cafeteria01: cafeteria01.url,
  cafeteria02: cafeteria02.url,
};

const t = thaneImages;

export const thaneTiles = [
  { src: t.cafeteria01, label: "Cafeteria and Breakout Floor with Skyline Windows" },
  { src: t.cafeteria02, label: "Long Dining Tables Under the Globe Pendant Lights" },
  { src: t.pantry, label: "Pantry Island with Barista Grade Coffee Station" },
  { src: t.gamesZone, label: "Work Hard Play Hard Games and Recreation Zone" },
  { src: t.phoneBooths, label: "Colour Coded Private Phone Booths for Calls" },
];
