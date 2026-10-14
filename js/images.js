// ============================================================
//  SPORTYFY · IMAGE MAP  (the ONLY place you need to touch photos)
// ============================================================
//  Easiest way: keep the file names below and just overwrite the
//  files inside  assets/images/  with your own photos (.jpg).
//  Different name or format (png/webp)? Change the path here.
//  The grey-gradient placeholders show their own file path.
// ============================================================
const IMG = {
  // Onboarding screen · top photo
  onboarding: "assets/images/onboarding.jpg",

  // Home screen · big featured card (Beginner Skate Day)
  homeHero: "assets/images/homeHero.jpg",

  // Coach card on Activity detail · square 600x600
  coach: "assets/images/coach.jpg",

  // Payment screen · your real QRIS (replace the file to change it)
  qris: 'assets/images/qris.jpg',

  // Profile screen avatar · square 600x600
  profile: "assets/images/profile.jpg",

  // Sport photos · used on Home (What are you into?), Explore,
  // Search, Activity detail hero, Booking, Checkout, My Bookings
  sport: {
    skate: "assets/images/sport/skate.jpg",
    badminton: "assets/images/sport/badminton.jpg",
    basketball: "assets/images/sport/basketball.jpg",
    futsal: "assets/images/sport/futsal.jpg",
    running: "assets/images/sport/running.jpg",
    volleyball: "assets/images/sport/volleyball.jpg",
  },

  // Community photos · Home (Find your people), Community list,
  // featured card and Community detail cover
  community: {
    skate: "assets/images/community/skate.jpg",
    running: "assets/images/community/running.jpg",
    badminton: "assets/images/community/badminton.jpg",
    futsal: "assets/images/community/futsal.jpg",
    basketball: "assets/images/community/basketball.jpg",
    volleyball: "assets/images/community/volleyball.jpg",
  },
};

// helper used by the screens (don't edit)
const pic = (p) => (p ? `background-image:url('${p}');` : "");
