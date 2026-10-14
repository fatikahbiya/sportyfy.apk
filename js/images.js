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
  onboarding: 'assets/images/onboarding/cover.jpg',

  // Home screen · big featured card (Beginner Skate Day)
  homeHero: 'assets/images/home/hero-skate-day.jpg',

  // Coach card on Activity detail · square 600x600
  coach: 'assets/images/people/coach-raka.jpg',

  // Profile screen avatar · square 600x600
  profile: 'assets/images/people/profile-fatikah.jpg',

  // Sport photos · used on Home (What are you into?), Explore,
  // Search, Activity detail hero, Booking, Checkout, My Bookings
  sport: {
    skate: 'assets/images/sports/skateboard.jpg',
    badminton: 'assets/images/sports/badminton.jpg',
    basketball: 'assets/images/sports/basketball.jpg',
    futsal: 'assets/images/sports/futsal.jpg',
    running: 'assets/images/sports/running.jpg',
    volleyball: 'assets/images/sports/volleyball.jpg',
  },

  // Community photos · Home (Find your people), Community list,
  // featured card and Community detail cover
  community: {
    skate: 'assets/images/communities/skateboard-solo.jpg',
    running: 'assets/images/communities/solo-runners.jpg',
    badminton: 'assets/images/communities/solo-badminton.jpg',
    futsal: 'assets/images/communities/solo-futsal-squad.jpg',
    basketball: 'assets/images/communities/hoops-jogja.jpg',
    volleyball: 'assets/images/communities/spike-club-kampus.jpg',
  },
};

// helper used by the screens (don't edit)
const pic = p => p ? `--img:url('${p}');` : '';
