/* =====================================================================
   MISHIKA & KRUNAL · EMERALD GARDEN INVITATION
   EDIT ONLY THIS FILE. Keep the "quotes" and the commas.
   Pictures live in the images folder.
   ===================================================================== */
window.WEDDING = {

  /* ---- couple ---- */
  groom: "Krunal",
  bride: "Mishika",
  monogram: "K & M",
  groomParents: "Mr. Mayur Suryakant Saraiya\n&\nMrs. Geeta Mayur Saraiya",
  groomLabel: "Son of",
  brideParents: "Mr. Kamal Bholanath Gupta\n&\nMrs. Roopa Kamal Gupta",
  brideLabel: "Daughter of",

  /* ---- opening (3-2-1 countdown, then the garden lights up) ---- */
  gateEyebrow: "From the mountains, to forever",
  gateText: "Tap the crest — and count down with us",
  countFrom: 3,
  gateReveal: "Let the celebrations begin",
  gateImage: "images/chalet.jpg",

  /* ---- words ---- */
  cardFooter: "Sunday & Monday\n17th – 18th January 2027",   /* last line of the invitation card ("" = hide) */
  heroEyebrow: "From the mountains, to forever",
  place: "Haldi · Sangeet · Wedding",
  blessing: "Shri Ganeshaya Namah",
  tagline: "",                         /* line under the blessing on the parents card ("" = hide) */
  inviteLine: "With the blessings of our elders, we request the honour of your presence at the wedding of our children.",

  /* ---- pictures ---- */
  heroImage: "images/chalet.jpg",
  heroFocus: "88% 60%",
  footerImage: "images/chalet.jpg",
  couplePhoto: "",
  venueImage: "images/venue-aerial.jpg",
  venueFocus: "50% 40%",
  postcards: [],                       /* not used in this design */

  /* ---- our story (Spiti) ---- */
  story: {
    eyebrow: "How it all began",
    title: "Two Cities, One Mountain Road",
    fromBride: "Mumbai",
    fromGroom: "Surat",
    meetPlace: "Spiti",
    image1: "images/meet.jpg",
    image2: "images/spiti-walk.jpg",
    caption2: "Spiti Valley, Himachal",
    text: "She came from the sea breeze of Mumbai, he from the flavorful streets of Surat. Somewhere on a winding road in Spiti, between snowy peaks and endless cups of chai, two travellers found each other — and forever."
  },

  /* gallery – the couple's photos */
  gallery: [
    { src: "images/spiti-walk.jpg", cap: "Where our story began" },
    { src: "images/g-lake.jpg",     cap: "Quiet moments by the lake" },
    { src: "images/g-cafe.jpg",     cap: "Coffee dates & long talks" },
    { src: "images/g-garden.jpg",   cap: "Sunshine, side by side" },
    { src: "images/g-maggi.jpg",    cap: "Mountain Maggi, forever favourite" }
  ],

  /* ---- date (the three scratch cards reveal this) ---- */
  weddingDateTime: "2027-01-18T12:39:00+05:30",   /* Phere time – the countdown counts to this */
  dateDay: "18", dateMonth: "JAN", dateYear: "2027",
  sealText: "Scratch each card with your finger to reveal the date",
  dateNote: "Saat Vachan at 12:39 in the afternoon",
  rememberReveal: false,               /* always false: guests scratch on every visit */

  /* ---- events ----
     name = the ceremony, title = its special name.
     { header: "..." } starts a group – everything after it sits inside that group. */
  eventsEyebrow: "Two days of love, colour & celebration",
  events: [
    { name: "Haldi",   title: "Kesariya Khwaab",  date: "Sun · 17 Jan 2027", time: "11:00 AM onwards", note: "Turmeric, marigolds & a whole lot of laughter",  image: "images/ev-haldi.jpg",     focus: "50% 40%" },
    { name: "Sangeet", title: "Shaam Shandar",    date: "Sun · 17 Jan 2027", time: "8:00 PM",  note: "An evening of music, dance & dazzling lights",  image: "images/ev-sangeet.jpg",   focus: "50% 35%" },
    { header: "The Marriage", note: "Monday · 18 January 2027" },
    { name: "Baraat",  title: "Band Baja Baraat", date: "Mon · 18 Jan 2027", time: "10:30 AM", note: "The groom arrives with dhol, dance & dhamaal",  image: "images/ev-baraat.jpg",   focus: "40% 45%" },
    { name: "Varmala", title: "Milan ki Mala",    date: "Mon · 18 Jan 2027", time: "12:00 PM", note: "Two garlands, two hearts, one beautiful promise", image: "images/ev-pheras.jpg",  focus: "50% 40%" },
    { name: "Phere",   title: "Saat Vachan",      date: "Mon · 18 Jan 2027", time: "12:39 PM", note: "Seven sacred vows around the holy fire",       image: "images/ev-mandap.jpg",    focus: "30% 50%" }
  ],

  /* ---- venue ---- */
  venueNote: "Lush green lawns, fairy-lit pathways and golden evenings — we would be honoured to celebrate with you here.",
  venueCity: "We can't wait to see you there",
  venueName: "Juneja Farms",
  venueAddress: "Surat, Gujarat",
  mapLink: "https://share.google/lgXJoqvp1jguhjUzl",   /* the "Find your way" button opens this */

  /* ---- wardrobe planner (generic colour moods) ---- */
  dressEyebrow: "Dress for the moment",
  dressTitle: "Wardrobe Planner",
  dressCode: [
    { event: "Haldi · Kesariya Khwaab",  look: "Colourful yellow|Pastel florals in sunshine yellow & peach", colors: ["#f6dc7a", "#f7c6b4", "#f2b9c4", "#fbf3e0"], image: "images/look-haldi.jpg" },
    { event: "Sangeet · Shaam Shandar",  look: "Glitz & Glam|All that glitters, but not gold!", colors: ["#c9c9cf", "#e8a0b8", "#7a6fb8", "#2f8f7a"], image: "images/look-sangeet.jpg" },
    { event: "Baraat · Varmala · Phere", look: "Traditional elegance|Rich jewel tones, ivory & gold",       colors: ["#c43d5e", "#f6ecd8", "#d9a630", "#b9c79a"], image: "images/look-wedding.jpg" }
  ],

  /* ---- RSVP (replies arrive by email) ---- */
  rsvpEmail: "Kshitijkhandelwal1995@gmail.com",   /* ← couple's email; for two, separate with a comma: "a@gmail.com,b@gmail.com" */
  rsvpBy: "31 Dec 2026",
  closing: "Your presence and blessings will make our celebration complete.",
  families: "With love — The Saraiya & Gupta Families",
  hashtag: "#KrunalWedsMishika",
  music: "music/Song.mp3",

  /* ---- colours (hex) ---- */
  theme: { ink: "#6b2c3f", blue: "#8c4558", sky: "#f2d4dc", mist: "#fdf4f6", gold: "#a8842f" },

  hideSections: ["postcard"]
};
