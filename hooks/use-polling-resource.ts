"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { REFRESH_INTERVAL_MS } from "@/lib/refresh";
import type { AsyncResourceState } from "@/types/realtime";

type UsePollingResourceOptions<T> = {
  initialData: T;
  fetcher: () => Promise<T>;
  intervalMs?: number;
  enabled?: boolean;
  refreshDelayMs?: number;
  errorMessage: string;
};

export function usePollingResource<T>({
  initialData,
  fetcher,
  intervalMs = REFRESH_INTERVAL_MS,
  enabled = true,
  refreshDelayMs = 0,
  errorMessage,
}: UsePollingResourceOptions<T>): AsyncResourceState<T> {
  // Real-time upgrade path:
  // Keep this hook API stable and swap the internals to a WebSocket/SSE
  // subscription or a server-action refresh loop when live providers are ready.
  const [data, setData] = useState<T>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const inFlightRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const clearRefreshDelay = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const refresh = useCallback(() => {
    if (!enabled || inFlightRef.current) {
      return;
    }

    inFlightRef.current = true;
    setIsRefreshing(true);
    clearRefreshDelay();

    timeoutRef.current = window.setTimeout(() => {
      fetcher()
        .then((nextData) => {
          setData(nextData);
          setError(null);
          setLastUpdated(new Date());
        })
        .catch(() => {
          setError(errorMessage);
        })
        .finally(() => {
          inFlightRef.current = false;
          setIsRefreshing(false);
          setIsInitialLoading(false);
        });
    }, refreshDelayMs);
  }, [clearRefreshDelay, enabled, errorMessage, fetcher, refreshDelayMs]);

  useEffect(() => {
    refresh();

    return clearRefreshDelay;
  }, [clearRefreshDelay, refresh]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const interval = window.setInterval(refresh, intervalMs);

    return () => window.clearInterval(interval);
  }, [enabled, intervalMs, refresh]);

  return {
    data,
    error,
    isInitialLoading,
    isRefreshing,
    lastUpdated,
    refresh,
  };
}
