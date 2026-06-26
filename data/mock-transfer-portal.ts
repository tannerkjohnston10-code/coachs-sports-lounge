import type { ActiveProgram, PositionBreakdown, TeamPortalChange, TransferPlayer } from "@/types/transfer-portal";

export const recentTransfers: TransferPlayer[] = [
  {
    name: "Malik Dawson",
    position: "QB",
    from: "Arizona State",
    to: "Ole Miss",
    rating: 94,
    marketValue: "+8.4%",
    trend: "up",
    status: "Committed",
  },
  {
    name: "Trevor Bell",
    position: "OT",
    from: "Iowa",
    to: "Texas",
    rating: 91,
    marketValue: "+5.1%",
    trend: "up",
    status: "Committed",
  },
  {
    name: "Jalen Brooks",
    position: "CB",
    from: "UCLA",
    to: "Oregon",
    rating: 89,
    marketValue: "+3.7%",
    trend: "up",
    status: "Visiting",
  },
  {
    name: "Cam Reed",
    position: "WR",
    from: "Louisville",
    to: "Undecided",
    rating: 87,
    marketValue: "-1.6%",
    trend: "down",
    status: "Entered",
  },
  {
    name: "Darius Tate",
    position: "EDGE",
    from: "NC State",
    to: "Florida State",
    rating: 90,
    marketValue: "+6.2%",
    trend: "up",
    status: "Crystal Ball",
  },
];

export const trendingTransfers: TransferPlayer[] = [
  {
    name: "Eli Patterson",
    position: "RB",
    from: "Kansas State",
    to: "Tennessee",
    rating: 88,
    marketValue: "+12.8%",
    trend: "up",
    status: "Visiting",
  },
  {
    name: "Marcus Vale",
    position: "DL",
    from: "Wisconsin",
    to: "Miami",
    rating: 92,
    marketValue: "+10.3%",
    trend: "up",
    status: "Crystal Ball",
  },
  {
    name: "Noah King",
    position: "LB",
    from: "Utah",
    to: "Texas A&M",
    rating: 86,
    marketValue: "+7.9%",
    trend: "up",
    status: "Committed",
  },
  {
    name: "Andre Ellis",
    position: "TE",
    from: "Purdue",
    to: "Undecided",
    rating: 84,
    marketValue: "0.0%",
    trend: "flat",
    status: "Entered",
  },
];

export const teamPortalChanges: TeamPortalChange[] = [
  { program: "Texas", gains: 8, losses: 3, net: 5, impact: "+18.2", movement: "up" },
  { program: "Oregon", gains: 7, losses: 4, net: 3, impact: "+14.6", movement: "up" },
  { program: "Ole Miss", gains: 9, losses: 5, net: 4, impact: "+13.9", movement: "up" },
  { program: "USC", gains: 4, losses: 7, net: -3, impact: "-6.8", movement: "down" },
  { program: "Clemson", gains: 3, losses: 5, net: -2, impact: "-4.1", movement: "down" },
];

export const positionBreakdowns: PositionBreakdown[] = [
  { position: "QB", entrants: 42, committed: 27, demand: 92 },
  { position: "WR", entrants: 118, committed: 73, demand: 86 },
  { position: "OL", entrants: 91, committed: 48, demand: 95 },
  { position: "DL", entrants: 78, committed: 46, demand: 89 },
  { position: "DB", entrants: 104, committed: 61, demand: 81 },
  { position: "Specialists", entrants: 28, committed: 14, demand: 58 },
];

export const mostActivePrograms: ActiveProgram[] = [
  { program: "Colorado", volume: 24, offers: 38, visits: 11, heat: "High" },
  { program: "Miami", volume: 22, offers: 31, visits: 9, heat: "High" },
  { program: "Texas A&M", volume: 20, offers: 35, visits: 8, heat: "Rising" },
  { program: "Louisville", volume: 18, offers: 27, visits: 7, heat: "Rising" },
  { program: "Nebraska", volume: 15, offers: 21, visits: 6, heat: "Watch" },
];
