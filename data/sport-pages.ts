import type { SportPageData, SportSlug } from "@/types/sports";

export const sportPages: SportPageData[] = [
  {
    slug: "football",
    title: "Football",
    shortTitle: "Football",
    href: "/football",
    description: "Install boards, matchup notes, recruiting pulse, and pro scout angles for the full football room.",
    scores: [
      { league: "CFB", matchup: "Texas at Oklahoma", score: "24-21", status: "4Q 6:18", isLive: true },
      { league: "CFB", matchup: "Georgia at Alabama", score: "17-17", status: "Halftime", isLive: true },
      { league: "NFL", matchup: "Kansas City at Denver", score: "17-14", status: "3Q 2:44", isLive: true },
    ],
    headlines: [
      { label: "College", title: "Transfer portal depth reshapes contender quarterback rooms", source: "Lounge Desk" },
      { label: "College", title: "Three defensive coordinators leaning heavier into simulated pressure", source: "Film Room" },
      { label: "Pro", title: "Sunday matchup board puts pass protection plans under the light", source: "Pro Desk" },
    ],
    featuredGames: [
      { league: "College Football", matchup: "Michigan vs Ohio State", time: "Sat 12:00 PM", note: "Playoff stakes and trench matchups" },
      { league: "College Football", matchup: "LSU vs Florida", time: "Sat 7:30 PM", note: "Tempo test for both secondaries" },
      { league: "NFL", matchup: "Philadelphia vs Dallas", time: "Sun 8:20 PM", note: "Division leverage in prime time" },
    ],
    college: [
      { title: "Recruiting Board", detail: "Track official visits, position needs, and coach ownership for top targets." },
      { title: "Saturday Install", detail: "Package the first 15 calls, pressure answers, and special teams alerts." },
      { title: "Portal Watch", detail: "Monitor immediate-impact depth by position group and eligibility window." },
    ],
    pro: [
      { title: "Roster Leverage", detail: "Flag practice squad candidates, injury replacements, and matchup personnel." },
      { title: "Sunday Scout", detail: "Condense opponent tendencies into quick staff-ready call sheet notes." },
    ],
  },
  {
    slug: "basketball",
    title: "Basketball",
    shortTitle: "Basketball",
    href: "/basketball",
    description: "Shot charts, rotation notes, opponent actions, and tournament-ready college/pro coverage.",
    scores: [
      { league: "CBB", matchup: "Duke at North Carolina", score: "72-68", status: "Final" },
      { league: "CBB", matchup: "Kansas at Baylor", score: "54-51", status: "2H 8:03", isLive: true },
      { league: "NBA", matchup: "Boston at New York", score: "96-99", status: "4Q 4:02", isLive: true },
    ],
    headlines: [
      { label: "College", title: "Zone looks return as staffs chase fresher legs in league play", source: "Hoops Desk" },
      { label: "College", title: "Freshman guards forcing late-clock coverage changes", source: "Scout Table" },
      { label: "Pro", title: "NBA contenders tighten playoff rotation experiments", source: "Pro Desk" },
    ],
    featuredGames: [
      { league: "College Basketball", matchup: "UConn vs Villanova", time: "Tue 8:00 PM", note: "Half-court execution spotlight" },
      { league: "College Basketball", matchup: "Arizona vs UCLA", time: "Thu 10:00 PM", note: "Pace, spacing, and wing depth" },
      { league: "NBA", matchup: "Denver vs Phoenix", time: "Fri 9:30 PM", note: "Late-game matchup chess" },
    ],
    college: [
      { title: "Bracket Watch", detail: "Track resume wins, road tests, and bubble movement." },
      { title: "Practice Blocks", detail: "Plan shell defense, special situations, and ATO counters." },
      { title: "Recruit Fit", detail: "Grade prospects against pace, defensive role, and spacing needs." },
    ],
    pro: [
      { title: "Rotation Lab", detail: "Compare bench units, closing groups, and foul-risk coverage." },
      { title: "Shot Quality", detail: "Surface corner threes, rim pressure, and pull-up diet trends." },
    ],
  },
  {
    slug: "baseball",
    title: "Baseball",
    shortTitle: "Baseball",
    href: "/baseball",
    description: "Lineups, pitching plans, player development notes, and diamond coverage from campus to clubhouse.",
    scores: [
      { league: "College Baseball", matchup: "Vanderbilt at Arkansas", score: "6-5", status: "Bot 8", isLive: true },
      { league: "College Baseball", matchup: "Texas A&M at LSU", score: "4-2", status: "Final" },
      { league: "MLB", matchup: "Los Angeles at San Francisco", score: "5-3", status: "Top 8", isLive: true },
    ],
    headlines: [
      { label: "College", title: "Weekend rotations shift as coaches protect high-usage arms", source: "Dugout Desk" },
      { label: "College", title: "Small-ball packages showing up earlier in conference series", source: "Scout Table" },
      { label: "Pro", title: "MLB bullpens lean into multi-inning bridge arms", source: "Pro Desk" },
    ],
    featuredGames: [
      { league: "College Baseball", matchup: "Oregon State vs Stanford", time: "Fri 9:00 PM", note: "Draft arms on both sides" },
      { league: "College Baseball", matchup: "Tennessee vs Florida", time: "Sat 6:00 PM", note: "Power bats meet elite velocity" },
      { league: "MLB", matchup: "Atlanta vs Philadelphia", time: "Sun 7:10 PM", note: "Bullpen leverage series" },
    ],
    college: [
      { title: "Weekend Sheet", detail: "Own starter plans, catcher notes, and matchup pinch-hit spots." },
      { title: "Development Track", detail: "Log swing decisions, mound goals, and defensive reps." },
      { title: "Recruit Board", detail: "Separate immediate contributors from long-cycle development players." },
    ],
    pro: [
      { title: "Usage Report", detail: "Monitor bullpen availability, option moves, and workload alerts." },
      { title: "Advance Scout", detail: "Package hot zones, chase tendencies, and defensive shifts." },
    ],
  },
  {
    slug: "hockey",
    title: "Hockey",
    shortTitle: "Hockey",
    href: "/hockey",
    description: "Lines, special teams, bench matchups, and ice-level coverage for college and pro staffs.",
    scores: [
      { league: "College Hockey", matchup: "Boston College at Minnesota", score: "3-2", status: "3P 5:11", isLive: true },
      { league: "College Hockey", matchup: "Denver at North Dakota", score: "4-1", status: "Final" },
      { league: "NHL", matchup: "Toronto at Montreal", score: "2-2", status: "OT", isLive: true },
    ],
    headlines: [
      { label: "College", title: "Power-play units get younger as freshmen earn trust", source: "Rink Desk" },
      { label: "College", title: "Goalie rotations tighten before conference tournaments", source: "Crease Notes" },
      { label: "Pro", title: "NHL deadline boards start with center depth and blue-line mobility", source: "Pro Desk" },
    ],
    featuredGames: [
      { league: "College Hockey", matchup: "Michigan vs Wisconsin", time: "Fri 8:00 PM", note: "Transition game decides the night" },
      { league: "College Hockey", matchup: "Quinnipiac vs Cornell", time: "Sat 7:00 PM", note: "Special teams pressure test" },
      { league: "NHL", matchup: "Colorado vs Dallas", time: "Sat 9:00 PM", note: "Playoff-style pace" },
    ],
    college: [
      { title: "Line Builder", detail: "Balance speed, forecheck roles, and faceoff usage." },
      { title: "Special Teams", detail: "Track entries, net-front habits, and penalty-kill clears." },
      { title: "Recruit Notes", detail: "Map junior players to role, skating profile, and development timeline." },
    ],
    pro: [
      { title: "Deadline Board", detail: "Rank trade fits by contract, role, and postseason utility." },
      { title: "Matchup Card", detail: "Prepare home-ice line deployment and defensive pair notes." },
    ],
  },
  {
    slug: "soccer",
    title: "Soccer",
    shortTitle: "Soccer",
    href: "/soccer",
    description: "Match models, formations, training loads, and global game coverage through a coach-first lens.",
    scores: [
      { league: "College Soccer", matchup: "UCLA at Stanford", score: "2-1", status: "86'", isLive: true },
      { league: "College Soccer", matchup: "Duke at Virginia", score: "1-1", status: "Final" },
      { league: "Soccer", matchup: "USA vs Mexico", score: "1-0", status: "78'", isLive: true },
    ],
    headlines: [
      { label: "College", title: "Pressing teams adjust rest-defense spacing before tournament play", source: "Touchline Desk" },
      { label: "College", title: "Set-piece coordinators becoming quiet difference-makers", source: "Training Ground" },
      { label: "Pro", title: "Pro clubs search for fullbacks who can invert and recover", source: "Pro Desk" },
    ],
    featuredGames: [
      { league: "College Soccer", matchup: "Georgetown vs Indiana", time: "Fri 7:00 PM", note: "Midfield control spotlight" },
      { league: "College Soccer", matchup: "Florida State vs North Carolina", time: "Sun 5:00 PM", note: "Elite wide play test" },
      { league: "Soccer", matchup: "Seattle vs LAFC", time: "Sat 10:30 PM", note: "Press resistance battle" },
    ],
    college: [
      { title: "Training Week", detail: "Set session themes, load targets, and tactical walk-throughs." },
      { title: "Recruit Fit", detail: "Tag prospects by position family, technical floor, and pace." },
      { title: "Set Pieces", detail: "Organize corners, free kicks, throw-ins, and opponent marks." },
    ],
    pro: [
      { title: "Match Model", detail: "Compare build-up shapes, pressing triggers, and substitution windows." },
      { title: "Player Market", detail: "Track role fits, contract windows, and tactical adaptability." },
    ],
  },
  {
    slug: "track",
    title: "Track & Field",
    shortTitle: "Track",
    href: "/track",
    description: "Meet entries, split tracking, training cycles, and event-group coverage from college meets to pro circuits.",
    scores: [
      { league: "College Track", matchup: "SEC Indoor Team Standings", score: "ARK 88 / UF 76", status: "Final" },
      { league: "College Track", matchup: "Women's 4x400 Final", score: "Texas 3:27.84", status: "Live", isLive: true },
      { league: "Track", matchup: "400m Heat 2", score: "Carter 45.88", status: "Final" },
    ],
    headlines: [
      { label: "College", title: "Relay depth decides conference points before nationals", source: "Track Desk" },
      { label: "College", title: "Throws groups stack early marks to protect team title paths", source: "Field Notes" },
      { label: "Pro", title: "Pro sprinters build toward championship peak windows", source: "Pro Desk" },
    ],
    featuredGames: [
      { league: "College Track", matchup: "NCAA Indoor Qualifier", time: "Fri 4:00 PM", note: "Last-chance marks across sprints" },
      { league: "College Track", matchup: "Pac-12 Distance Night", time: "Sat 8:00 PM", note: "Tactical 5K fields" },
      { league: "Track", matchup: "Diamond Circuit 200m", time: "Sun 2:00 PM", note: "World-list implications" },
    ],
    college: [
      { title: "Meet Entries", detail: "Balance scoring chances, athlete load, and relay availability." },
      { title: "Event Groups", detail: "Track workouts, readiness, and technical cue priorities by group." },
      { title: "Recruit Board", detail: "Sort prospects by marks, progression curve, and event flexibility." },
    ],
    pro: [
      { title: "Peak Plan", detail: "Monitor race spacing, travel load, and championship progression." },
      { title: "Performance Board", detail: "Compare season bests, wind readings, and tactical splits." },
    ],
  },
];

export function getSportPage(slug: SportSlug) {
  return sportPages.find((sport) => sport.slug === slug);
}
