// Landmark pages target branded building searches (for example "pinnacle
// business park andheri east"). Each one maps to a YesssWorks hub inside that
// building, so the copy talks about the tower first and the workspace second.
import type { LocationSlug } from "./site-routes";

export interface LandmarkPage {
  /** URL path, e.g. /pinnacle-business-park-andheri-east */
  path: string;
  /** The YesssWorks hub that sits inside this building. */
  location: LocationSlug;
  /** Hub page path, e.g. /yesssworks-andheri-pinnacle-business-park */
  hubPath: string;
  building: string;
  areaLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  keywords: string[];
  about: string[];
  facts: { label: string; value: string }[];
  faq: { q: string; a: string }[];
}

export const landmarkPages: LandmarkPage[] = [
  {
    path: "/pinnacle-business-park-andheri-east",
    location: "andheri-pinnacle",
    hubPath: "/yesssworks-andheri-pinnacle-business-park",
    building: "Pinnacle Business Park",
    areaLabel: "Andheri East",
    title: "Pinnacle Business Park, Andheri East | Office Space | YesssWorks",
    description: "Guide to Pinnacle Business Park on Mahakali Caves Road, Andheri East, plus ready-to-move desks, cabins and meeting rooms from YesssWorks on the second floor.",
    h1: "Pinnacle Business Park, Andheri East",
    eyebrow: "Mahakali Caves Road, MIDC",
    intro: "Pinnacle Business Park is one of the better-known commercial towers on Mahakali Caves Road. YesssWorks runs a serviced workspace on the second floor, so you can take a desk here without signing a full floor lease.",
    keywords: ["pinnacle business park andheri east", "pinnacle business park", "pinnacle business park office space", "office space mahakali caves road", "coworking pinnacle business park"],
    about: [
      "The building sits on the Andheri Kurla stretch of Mahakali Caves Road, inside the MIDC belt where most of the area's IT, media and financial services offices are clustered. Marol Naka metro is a short walk, Andheri station is a quick auto ride, and the airport is roughly five kilometres away, which is why so many teams with travelling founders end up here.",
      "Occupiers are a mix of corporate back offices, agencies and growing startups. The tower has lift lobbies on both wings, covered parking, 24 hour security and enough cafes on the ground floor and neighbouring lanes that lunch is never a problem.",
      "If you are looking at Pinnacle for office space, the practical choice is between a bare shell fit-out and a managed workspace. YesssWorks handles the second option: furnished desks, private cabins, meeting rooms, internet, housekeeping and power backup on a single monthly invoice.",
    ],
    facts: [
      { label: "Address", value: "S14, Second Floor, Pinnacle Business Park, Mahakali Caves Road, Andheri East, Mumbai 400093" },
      { label: "Nearest metro", value: "Marol Naka, roughly 7 minutes on foot" },
      { label: "Nearest station", value: "Andheri (Western and Harbour lines)" },
      { label: "Airport", value: "Mumbai International Airport, about 5 km" },
      { label: "Access", value: "24x7 for members, security and power backup" },
    ],
    faq: [
      { q: "Where exactly is Pinnacle Business Park?", a: "It is on Mahakali Caves Road, on the Andheri Kurla stretch in the MIDC area of Andheri East, Mumbai 400093. Our workspace is on the second floor, unit S14." },
      { q: "Is there coworking space available inside Pinnacle Business Park?", a: "Yes. YesssWorks operates a furnished centre on the second floor with hot desks, fixed desks, private cabins and meeting rooms." },
      { q: "How do I reach the building by metro?", a: "Get off at Marol Naka on Line 1 and walk down Mahakali Caves Road. It is around seven minutes on foot." },
      { q: "Is parking available?", a: "The building has visitor and monthly parking. Slots are limited during peak hours, so ask our team to reserve one for a scheduled visit." },
      { q: "What does a desk here cost?", a: "Day passes start at ₹500 plus GST, fixed desks and cabins are quoted per seat per month. Share your headcount and we will send current rates for this centre." },
      { q: "Can I visit before deciding?", a: "Walk-ins are welcome during working hours, though a booked tour means someone is free to show you the floor and answer questions properly." },
    ],
  },
  {
    path: "/271-business-park-goregaon-east",
    location: "goregaon-271",
    hubPath: "/yesssworks-goregaon-271-business-park",
    building: "271 Business Park",
    areaLabel: "Goregaon East",
    title: "271 Business Park, Goregaon East | Office Space | YesssWorks",
    description: "Everything about 271 Business Park off the Western Express Highway in Goregaon East, plus furnished desks, cabins and meeting rooms from YesssWorks on the first floor.",
    h1: "271 Business Park, Goregaon East",
    eyebrow: "Off Western Express Highway",
    intro: "271 Business Park sits just off the Western Express Highway in Goregaon East, minutes from Nesco and the Model Industrial Estate cluster. Our first floor centre gives you a furnished workspace inside it from day one.",
    keywords: ["271 business park goregaon east", "271 business park", "271 business park office space", "office space goregaon east", "coworking 271 business park"],
    about: [
      "The address is a familiar one for anyone who works the Goregaon corridor. It is set behind the Western Express Highway near Virwani Industrial Estate, which keeps the commute simple whether you drive in from Malad and Borivali or come south from Bandra.",
      "Goregaon Railway Station and the Goregaon metro stop both feed the building, and the Nesco and Bombay Exhibition Centre grounds are close enough that event-heavy teams like keeping an office nearby. Aarey Colony on one side and the highway on the other mean traffic clears faster than in Andheri.",
      "Inside, the tenant mix leans towards media production, exhibitions, logistics and services firms. YesssWorks takes care of the workspace layer on the first floor with desks, cabins, meeting rooms, high-speed internet and daily housekeeping bundled into one bill.",
    ],
    facts: [
      { label: "Address", value: "1st Floor, 271 Business Park, Model Industrial Estate, off Western Express Highway, Goregaon East, Mumbai 400063" },
      { label: "Nearest station", value: "Goregaon, about 10 minutes by road" },
      { label: "Landmarks", value: "Nesco, Bombay Exhibition Centre, Oberoi Mall" },
      { label: "Airport", value: "Mumbai International Airport, about 8 km" },
      { label: "Access", value: "24x7 for members, security and power backup" },
    ],
    faq: [
      { q: "Where is 271 Business Park located?", a: "In Model Industrial Estate, off the Western Express Highway near Virwani Industrial Estate, Goregaon East, Mumbai 400063." },
      { q: "Is coworking available in 271 Business Park?", a: "Yes, YesssWorks runs a furnished centre on the first floor with hot desks, fixed desks, private cabins and meeting rooms." },
      { q: "How far is the building from Goregaon station?", a: "About ten minutes by road, depending on traffic on the highway service lane." },
      { q: "Is it convenient for teams travelling from Malad or Borivali?", a: "It is one of the easier addresses on the western line for northern suburbs, since you stay on the highway the whole way." },
      { q: "Do you have meeting rooms for client visits?", a: "Yes, bookable by the hour with a screen and casting, and included credits for members." },
      { q: "Can I see the space this week?", a: "Book a tour and we will keep a slot open at a time that works for you." },
    ],
  },
  {
    path: "/aurum-q6-mahape",
    location: "mahape-aurum-q6",
    hubPath: "/yesssworks-mahape-aurum-q6",
    building: "Aurum Q6",
    areaLabel: "Mahape, Navi Mumbai",
    title: "Aurum Q6, Mahape | Millennium Business Park Offices | YesssWorks",
    description: "Aurum Q6 in Millennium Business Park, Mahape, Navi Mumbai: building details plus managed desks, cabins and a large board room from YesssWorks.",
    h1: "Aurum Q6, Mahape, Navi Mumbai",
    eyebrow: "Millennium Business Park, Sector 2",
    intro: "Aurum Q6 is the Grade A tower in Sector 2 of Millennium Business Park, Mahape. It is where our largest centre sits, with the widest choice of cabins and our biggest board room.",
    keywords: ["aurum q6", "aurum q6 mahape", "millennium business park mahape", "office space mahape", "coworking aurum q6"],
    about: [
      "Millennium Business Park is Navi Mumbai's established IT and engineering hub, and Aurum Q6 is one of its newer additions. Glass facade, wide floor plates, proper lift capacity and structured parking, so it feels closer to a BKC tower than an old industrial estate block.",
      "Getting here is straightforward. Ghansoli and Rabale stations are both close, the Thane Belapur Road runs alongside, and the Airoli bridge puts eastern Mumbai within reach. Teams pulling talent from Thane, Kalyan and Panvel usually find attendance improves after a shift to Mahape.",
      "The YesssWorks floor here runs on the same managed model as the rest of our network: furnished desks, cabins from two to forty seats, meeting rooms, cafeteria, 24x7 access and power backup, quoted per seat per month with nothing hidden.",
    ],
    facts: [
      { label: "Address", value: "Aurum Q6, Millennium Business Park, Sector 2, Mahape, Navi Mumbai 400710" },
      { label: "Nearest stations", value: "Ghansoli and Rabale on the Harbour line" },
      { label: "Road access", value: "Thane Belapur Road, Airoli bridge for eastern Mumbai" },
      { label: "Best for", value: "Teams of 2 to 40 seats, back offices and engineering units" },
      { label: "Access", value: "24x7 for members, security and power backup" },
    ],
    faq: [
      { q: "What is Aurum Q6?", a: "It is a Grade A commercial tower in Sector 2 of Millennium Business Park, Mahape, Navi Mumbai, and the address of our largest YesssWorks centre." },
      { q: "Is Aurum Q6 the same as Millennium Business Park?", a: "Aurum Q6 is one building inside the wider Millennium Business Park estate, which spans several sectors in Mahape." },
      { q: "How do I reach Aurum Q6 by train?", a: "Ghansoli or Rabale on the Harbour line, then a short auto ride into the business park." },
      { q: "What workspace options are available in the building?", a: "Hot desks, fixed desks, private cabins from 2 to 40 seats, meeting rooms and a large board room." },
      { q: "Is there parking at Aurum Q6?", a: "Yes, the tower has structured parking, and monthly slots can be arranged for members." },
      { q: "Do you offer day passes here?", a: "Yes, ₹499 plus GST for a day, and multi-day Universal Passes if you visit a few times a week." },
    ],
  },
  {
    path: "/at-by-agm-vijaylaxmi-andheri",
    location: "andheri-at",
    hubPath: "/yesssworks-andheri-at",
    building: "AT By AGM Vijaylaxmi",
    areaLabel: "Andheri East",
    title: "AT By AGM Vijaylaxmi, Andheri | 9th Floor Offices | YesssWorks",
    description: "AT By AGM Vijaylaxmi on Mahakali Caves Road, Andheri: building overview plus YesssWorks desks, cabins and meeting rooms on the ninth floor.",
    h1: "AT By AGM Vijaylaxmi, Andheri",
    eyebrow: "9th floor, Mahakali Caves Road",
    intro: "AT By AGM Vijaylaxmi is the tower locals simply call AT. Our ninth floor centre here has the best light and views of any YesssWorks address in Andheri.",
    keywords: ["at by agm vijaylaxmi", "at mumbai andheri", "at building andheri", "office space mahakali caves road", "coworking at andheri"],
    about: [
      "The building stands on the Andheri Kurla stretch of Mahakali Caves Road, in the middle of the MIDC office belt. Marol Naka and Saki Naka metro stations are both within walking distance, and the domestic terminal is a ten minute drive on a clear road.",
      "Because our floor is high up, the space gets full daylight through the day and the noise from the road never really reaches it. Teams that have moved here from lower floors elsewhere in Andheri usually mention that first.",
      "The workspace itself is a managed setup: fixed desks and hot desks in the open area, private cabins along the window line, two meeting rooms, a pantry and 24x7 access with power backup. One monthly invoice covers all of it.",
    ],
    facts: [
      { label: "Address", value: "9th Floor, AT By AGM Vijaylaxmi, Mahakali Caves Road, Andheri Kurla Road, MIDC, Andheri East, Mumbai 400093" },
      { label: "Nearest metro", value: "Marol Naka and Saki Naka, both walkable" },
      { label: "Nearest station", value: "Andheri (Western and Harbour lines)" },
      { label: "Airport", value: "Domestic terminal about 10 minutes by road" },
      { label: "Access", value: "24x7 for members, security and power backup" },
    ],
    faq: [
      { q: "What is the AT building in Andheri?", a: "AT By AGM Vijaylaxmi is a commercial tower on Mahakali Caves Road in the MIDC part of Andheri East. YesssWorks occupies the ninth floor." },
      { q: "Which floor is the YesssWorks centre on?", a: "The ninth floor, which is why the space gets so much natural light." },
      { q: "How close is the metro?", a: "Marol Naka and Saki Naka are both a short walk, so most members skip cabs entirely." },
      { q: "Is the old /at-office page still valid?", a: "That URL now points to our current Andheri AT hub page, so any saved link still works." },
      { q: "What can I book here?", a: "Hot desks, fixed desks, private cabins and meeting rooms, on day, monthly or annual terms." },
      { q: "Can I bring clients for meetings?", a: "Yes, the floor has meeting rooms with screens and a reception that handles visitors." },
    ],
  },
  {
    path: "/ackruti-softech-park-andheri-east",
    location: "andheri-ackruti",
    hubPath: "/yesssworks-andheri-ackruti-softech-park",
    building: "Ackruti Softech Park",
    areaLabel: "Andheri East",
    title: "Ackruti Softech Park, Andheri East | Office Space | YesssWorks",
    description: "Ackruti Softech Park in Marol MIDC, Andheri East: location details plus furnished YesssWorks desks, cabins and meeting rooms on the third floor.",
    h1: "Ackruti Softech Park, Andheri East",
    eyebrow: "Marol MIDC, third floor",
    intro: "Ackruti Softech Park sits in the Marol MIDC industrial estate, a quieter pocket of Andheri East. Our third floor centre suits teams that want the Andheri address without the main road chaos.",
    keywords: ["ackruti softech park", "ackruti softech park andheri east", "office space marol midc", "coworking ackruti softech park", "office space andheri east"],
    about: [
      "Marol MIDC is one of Andheri East's older estates, now largely occupied by IT services, engineering firms and back offices. Ackruti Softech Park is among the better maintained buildings in that pocket, with proper lifts, security and parking.",
      "The location works well for anyone commuting from Powai, Sakinaka or Chakala. Marol Naka metro is nearby, Andheri station is a short ride, and the surrounding lanes are calmer than the Andheri Kurla stretch, so mornings are less of a fight.",
      "Our floor here runs the standard managed setup: furnished desks, private cabins, a meeting room, pantry, high-speed internet, housekeeping and 24x7 access for members. Pricing is per seat per month with utilities included.",
    ],
    facts: [
      { label: "Address", value: "3rd Floor, Ackruti Softech Park, Shree Krishna Nagar, Marol MIDC Industrial Estate, Andheri East, Mumbai 400093" },
      { label: "Nearest metro", value: "Marol Naka" },
      { label: "Nearest station", value: "Andheri (Western and Harbour lines)" },
      { label: "Good for", value: "Commutes from Powai, Sakinaka and Chakala" },
      { label: "Access", value: "24x7 for members, security and power backup" },
    ],
    faq: [
      { q: "Where is Ackruti Softech Park?", a: "In Shree Krishna Nagar, Marol MIDC Industrial Estate, Andheri East, Mumbai 400093. Our centre is on the third floor." },
      { q: "Is coworking space available in the building?", a: "Yes, YesssWorks runs a furnished workspace on the third floor with desks, cabins and a meeting room." },
      { q: "How is the commute from Powai?", a: "Short, since you avoid the Andheri Kurla bottleneck for most of the route." },
      { q: "Is the area safe for late working hours?", a: "The building has 24 hour security and lift access control, and members can work through the night." },
      { q: "What is the minimum term?", a: "You can start with a day pass. Fixed desks and cabins are usually monthly, with better rates on longer terms." },
      { q: "Can I compare this centre with your other Andheri addresses?", a: "Yes, our Andheri East pages cover AT and Pinnacle Business Park too, so you can weigh location, floor and price side by side." },
    ],
  },
];

export const landmarkBySlug = (path: string) => landmarkPages.find((l) => l.path === path);