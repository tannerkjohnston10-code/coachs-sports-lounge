import type { RankingTable, StandingsTable } from "@/types/standings";

export const rankingTables: RankingTable[] = [
  {
    title: "College Football Rankings",
    subtitle: "Mock playoff committee top 8",
    rows: [
      { rank: 1, team: "Georgia", record: "12-0", movement: "-", note: "Most complete line play in the country" },
      { rank: 2, team: "Michigan", record: "12-0", movement: "+1", note: "Defense traveling every week" },
      { rank: 3, team: "Texas", record: "11-1", movement: "+2", note: "Explosive offense with playoff leverage" },
      { rank: 4, team: "Oregon", record: "11-1", movement: "-", note: "Efficiency metrics love the Ducks" },
      { rank: 5, team: "Alabama", record: "10-2", movement: "-3", note: "Still dangerous if the bracket opens" },
      { rank: 6, team: "Ohio State", record: "10-2", movement: "-", note: "Receiver room keeps them alive" },
      { rank: 7, team: "Florida State", record: "11-1", movement: "+1", note: "Defense creating short fields" },
      { rank: 8, team: "Notre Dame", record: "10-2", movement: "new", note: "Late surge from the trenches" },
    ],
  },
  {
    title: "College Basketball Rankings",
    subtitle: "Combined men's and women's mock power board",
    rows: [
      { rank: 1, team: "UConn Men", record: "24-3", movement: "-", note: "Half-court execution leads the country" },
      { rank: 2, team: "South Carolina Women", record: "27-0", movement: "-", note: "Depth turns every game into pressure" },
      { rank: 3, team: "Purdue Men", record: "23-4", movement: "+1", note: "Interior gravity controls tempo" },
      { rank: 4, team: "Iowa Women", record: "25-3", movement: "+2", note: "Pace and shooting bend scouting plans" },
      { rank: 5, team: "Houston Men", record: "23-3", movement: "-2", note: "Defense makes every possession heavy" },
      { rank: 6, team: "Stanford Women", record: "24-4", movement: "+1", note: "Frontcourt versatility is the separator" },
      { rank: 7, team: "Arizona Men", record: "22-5", movement: "-", note: "Transition attack can flip games fast" },
      { rank: 8, team: "LSU Women", record: "24-4", movement: "-3", note: "Ceiling remains title-level" },
    ],
  },
];

export const standingsTables: StandingsTable[] = [
  {
    title: "NFL Standings",
    subtitle: "Mock conference leaders",
    rows: [
      { team: "Kansas City Chiefs", record: "12-4", pct: ".750", gb: "-", streak: "W3" },
      { team: "Baltimore Ravens", record: "12-4", pct: ".750", gb: "-", streak: "W2" },
      { team: "Philadelphia Eagles", record: "11-5", pct: ".688", gb: "1.0", streak: "W1" },
      { team: "San Francisco 49ers", record: "11-5", pct: ".688", gb: "1.0", streak: "L1" },
    ],
  },
  {
    title: "NBA Standings",
    subtitle: "Mock top playoff seeds",
    rows: [
      { team: "Boston Celtics", record: "48-14", pct: ".774", gb: "-", streak: "W4" },
      { team: "Denver Nuggets", record: "43-19", pct: ".694", gb: "5.0", streak: "W2" },
      { team: "Milwaukee Bucks", record: "41-21", pct: ".661", gb: "7.0", streak: "L1" },
      { team: "Oklahoma City Thunder", record: "40-22", pct: ".645", gb: "8.0", streak: "W1" },
    ],
  },
  {
    title: "MLB Standings",
    subtitle: "Mock division race snapshot",
    rows: [
      { team: "Atlanta Braves", record: "42-24", pct: ".636", gb: "-", streak: "W5" },
      { team: "Los Angeles Dodgers", record: "40-26", pct: ".606", gb: "2.0", streak: "W2" },
      { team: "Baltimore Orioles", record: "39-27", pct: ".591", gb: "3.0", streak: "L1" },
      { team: "Houston Astros", record: "37-29", pct: ".561", gb: "5.0", streak: "W1" },
    ],
  },
  {
    title: "NHL Standings",
    subtitle: "Mock points race",
    rows: [
      { team: "Colorado Avalanche", record: "42-18-6", pct: "90 pts", gb: "-", streak: "W3" },
      { team: "Dallas Stars", record: "40-19-7", pct: "87 pts", gb: "3", streak: "W1" },
      { team: "New York Rangers", record: "39-20-7", pct: "85 pts", gb: "5", streak: "L1" },
      { team: "Toronto Maple Leafs", record: "38-21-7", pct: "83 pts", gb: "7", streak: "W2" },
    ],
  },
  {
    title: "Soccer Tables",
    subtitle: "Mock MLS and global club form table",
    rows: [
      { team: "Seattle Sounders", record: "11-4-5", pct: "38 pts", gb: "-", streak: "W2" },
      { team: "LAFC", record: "10-5-5", pct: "35 pts", gb: "3", streak: "D1" },
      { team: "Inter Miami", record: "10-6-4", pct: "34 pts", gb: "4", streak: "W1" },
      { team: "Columbus Crew", record: "9-5-6", pct: "33 pts", gb: "5", streak: "L1" },
    ],
  },
];
