export const config = {
  title: "Happy Feet Run Club",
  description: "Join the Happy Feet Run Club and stay active with our community of runners. Keep up with new updates, info, and events.",
  domain: "",
  instagramURL: "",

  run: {
    dayOfWeek: "Thursday",
    dayOfWeekIndex: 4, // 0 = Sunday ... 4 = Thursday
    time: "6:30 PM",
    typicalDistance: "5K social loop",
  },

  meetup: {
    name: "Riverside Park — Main Entrance",
    address: "123 Riverside Drive, at the fountain",
    warmupNote: "Arrive 6:15 PM for dynamic warm-ups",
    // Replace with your own Google "My Maps" embed URL to show start/finish
    // pins and the exact route path: https://www.google.com/mymaps
    mapEmbedUrl:
      "https://www.google.com/maps?q=Riverside+Park,+New+York,+NY&z=14&output=embed",
  },

  socialSpots: [
    {
      name: "The Watering Hole",
      detail: "Post-run beers & recovery shakes — 2 blocks from the finish",
    },
    {
      name: "Slice Society",
      detail: "Thursday night pizza special for the club",
    },
    {
      name: "The Finish Line Café",
      detail: "Coffee & brunch spot for weekend long runs",
    },
  ],

  season: {
    label: "2026 Season",
    // Both dates should be Thursdays; every weekly run is generated between them
    startDate: "2026-04-02",
    endDate: "2026-10-29",
  },
}