import { mockScores } from "@/data/mock-scores";
import type { ScoreGame } from "@/types/scores";

const SPORTS_API_BASE_URL = process.env.NEXT_PUBLIC_SPORTS_API_BASE_URL;
const SPORTS_API_KEY = process.env.NEXT_PUBLIC_SPORTS_API_KEY;

export async function getLiveScores(): Promise<ScoreGame[]> {
  // Future integration point:
  // Replace this mock return with a fetch to your sports scores provider.
  // For WebSockets/SSE later, expose a subscribeToLiveScores(callback) function
  // beside this fetcher and consume it from usePollingResource's replacement.
  // Example:
  // const response = await fetch(`${SPORTS_API_BASE_URL}/scores/live`, {
  //   headers: { Authorization: `Bearer ${SPORTS_API_KEY}` },
  //   next: { revalidate: 60 },
  // });
  // return mapSportsApiScores(await response.json());
  void SPORTS_API_BASE_URL;
  void SPORTS_API_KEY;

  return mockScores;
}

export async function getScoresByLeague(league: string): Promise<ScoreGame[]> {
  const scores = await getLiveScores();

  return scores.filter((score) => score.league.toLowerCase().includes(league.toLowerCase()));
}
