"use client";

import { useCallback } from "react";
import { MOCK_REFRESH_DELAY_MS } from "@/lib/refresh";
import { getSportsNews } from "@/lib/services/newsApi";
import { usePollingResource } from "@/hooks/use-polling-resource";
import type { NewsItem } from "@/types/news";

export function useSportsNews() {
  const fetcher = useCallback(() => getSportsNews(), []);

  return usePollingResource<NewsItem[]>({
    initialData: [],
    fetcher,
    refreshDelayMs: MOCK_REFRESH_DELAY_MS,
    errorMessage: "News is temporarily unavailable.",
  });
}
