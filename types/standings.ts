export type RankingRow = {
  rank: number;
  team: string;
  record: string;
  movement: string;
  note: string;
};

export type StandingRow = {
  team: string;
  record: string;
  pct: string;
  gb: string;
  streak: string;
};

export type RankingTable = {
  title: string;
  subtitle: string;
  rows: RankingRow[];
};

export type StandingsTable = {
  title: string;
  subtitle: string;
  rows: StandingRow[];
};
