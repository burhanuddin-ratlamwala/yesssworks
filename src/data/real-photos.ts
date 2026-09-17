/** Role based photo map built only from the real photographs shot at our hubs.
 *  Any page that needs a generic "open desks" or "meeting room" visual pulls it
 *  from here, so nothing on the site falls back to stock or generated imagery. */
import { aurumMahape } from "./aurum-mahape-images";
import { goregaon271Images } from "./goregaon-271-images";
import { ackrutiImages } from "./ackruti-images";
import { andheriAtImages } from "./andheri-at-images";
import { pinnacleImages } from "./pinnacle-images";
import { thaneImages } from "./thane-images";

export const realPhotos = {
  openDesks: aurumMahape.bigFloorDesks,
  fixedDesk: goregaon271Images.windowDesks01,
  privateCabin: aurumMahape.glassTeamCabin,
  officeSuite: goregaon271Images.privateOffice01,
  meetingRoom: pinnacleImages.largeMeeting01,
  boardroom: aurumMahape.conferenceOrange,
  conference: aurumMahape.conferencePurple,
  reception: aurumMahape.reception,
  lobby: pinnacleImages.receptionStaircase,
  lounge: aurumMahape.loungeWide,
  loungeAlt: andheriAtImages.orangeSofas01,
  pantry: aurumMahape.pantryLoungeOne,
  cafe: goregaon271Images.cafe01,
  coffeeBar: aurumMahape.coffeeStation,
  phoneBooth: aurumMahape.bluePurplePhoneBooths,
  focusBooth: andheriAtImages.focusBooths,
  terrace: aurumMahape.rooftopCafeOne,
  exterior: aurumMahape.towerExterior,
  entrance: aurumMahape.signageEntrance,
  games: thaneImages.gamesZone,
  community: goregaon271Images.teamGathering01,
  teamWork: goregaon271Images.meetingInUse01,
  printZone: goregaon271Images.printer01,
  businessLounge: ackrutiImages.cafeBreakout,
  training: ackrutiImages.trainingRoom,
  corridor: aurumMahape.brandedGlassCorridor,
} as const;
