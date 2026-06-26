"use client";

import { useCallback } from "react";
import { MOCK_REFRESH_DELAY_MS } from "@/lib/refresh";
import { getLiveScores } from "@/lib/services/sportsApi";
import { usePollingResource } from "@/hooks/use-polling-resource";
import type { ScoreGame } from "@/types/scores";

export function useLiveScores() {
  const fetcher = useCallback(() => getLiveScores(), []);

  return usePollingResource<ScoreGame[]>({
    initialData: [],
    fetcher,
    refreshDelayMs: MOCK_REFRESH_DELAY_MS,
    errorMessage: "Scores are temporarily unavailable.",
  });
}
