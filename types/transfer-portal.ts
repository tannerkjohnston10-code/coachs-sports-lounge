export type TransferMovement = "up" | "down" | "flat";

export type TransferPlayer = {
  name: string;
  position: string;
  from: string;
  to: string;
  rating: number;
  marketValue: string;
  trend: TransferMovement;
  status: "Committed" | "Crystal Ball" | "Visiting" | "Entered";
};

export type TeamPortalChange = {
  program: string;
  gains: number;
  losses: number;
  net: number;
  impact: string;
  movement: TransferMovement;
};

export type PositionBreakdown = {
  position: string;
  entrants: number;
  committed: number;
  demand: number;
};

export type ActiveProgram = {
  program: string;
  volume: number;
  offers: number;
  visits: number;
  heat: "High" | "Rising" | "Watch";
};
