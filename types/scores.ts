export type ScoreStatus = "Live" | "Final" | "Scheduled";

export type ScoreGame = {
  id: string;
  league: string;
  awayTeam: string;
  homeTeam: string;
  awayScore: number | string;
  homeScore: number | string;
  status: ScoreStatus;
  detail: string;
  isLive: boolean;
};
