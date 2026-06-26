"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, AlertCircle, RefreshCw } from "lucide-react";
import { useLiveScores } from "@/hooks/use-live-scores";
import { formatUpdatedTime, rotateItems } from "@/lib/refresh";
import { loadUserPreferences, subscribeToPreferenceUpdates } from "@/lib/services/userPreferences";
import { cn } from "@/lib/utils";
import type { ScoreGame } from "@/types/scores";
import type { ScoreboardDensity } from "@/types/settings";

export function ScoreTicker() {
  const [refreshCount, setRefreshCount] = useState(0);
  const [density, setDensity] = useState<ScoreboardDensity>("expanded");
  const { data: scoreItems, error, isInitialLoading, isRefreshing, lastUpdated, refresh } = useLiveScores();

  const scores = useMemo(() => rotateItems(scoreItems, refreshCount), [scoreItems, refreshCount]);

  useEffect(() => {
    function syncDensity() {
      setDensity(loadUserPreferences().scoreboardDensity);
    }

    syncDensity();
    return subscribeToPreferenceUpdates(syncDensity);
  }, []);

  useEffect(() => {
    if (lastUpdated) {
      setRefreshCount((count) => count + 1);
    }
  }, [lastUpdated]);

  return (
    <section className="ticker-shine border-t border-white/10 bg-black/30" aria-label="Score ticker">
      <div className="flex items-stretch">
        <div className="flex w-16 shrink-0 flex-col justify-center border-r border-white/10 bg-red-700 px-2 text-[10px] font-black uppercase tracking-wide text-white sm:hidden">
          <span>Scores</span>
          <span className="mt-0.5 text-[9px] text-white/80">Swipe</span>
        </div>
        <div className="hidden w-44 shrink-0 flex-col justify-center gap-1 border-r border-white/10 bg-red-700 px-3 text-xs font-black uppercase tracking-wide text-white sm:flex">
          <span>Scores</span>
          <span className="text-[10px] font-bold text-white/80">
            {error ? "Refresh issue" : `Updated ${lastUpdated ? formatUpdatedTime(lastUpdated) : "--"}`}
          </span>
        </div>
        <div className="touch-scroll min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto">
          {isInitialLoading ? (
            <ScoreTickerSkeleton />
          ) : error ? (
            <div className="flex min-h-20 items-center gap-3 px-4 text-sm font-bold text-destructive">
              <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
              {error}
            </div>
          ) : scores.length === 0 ? (
            <div className="flex min-h-20 items-center px-4 text-sm font-bold text-muted-foreground">
              No scores available right now.
            </div>
          ) : (
            <div className={cn("flex w-max min-w-full transition-opacity", isRefreshing && "opacity-55")}>
              {scores.map((game) => (
                <ScoreCard key={game.id} game={game} density={density} />
              ))}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={refresh}
          disabled={isRefreshing}
          className="flex w-12 shrink-0 items-center justify-center border-l border-white/10 text-muted-foreground transition hover:bg-white/[0.06] hover:text-foreground disabled:cursor-wait disabled:opacity-70 sm:w-14"
          aria-label="Refresh scores"
        >
          <RefreshCw className={cn("size-4", isRefreshing && "animate-spin")} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function ScoreCard({ game, density }: { game: ScoreGame; density: ScoreboardDensity }) {
  const hasComparableScore = typeof game.awayScore === "number" && typeof game.homeScore === "number";
  const awayLeading = hasComparableScore && game.awayScore > game.homeScore;
  const homeLeading = hasComparableScore && game.homeScore > game.awayScore;

  return (
    <article
      className={cn(
        "min-h-20 w-[78vw] shrink-0 snap-center border-r border-white/10 px-3 py-2 transition hover:bg-white/[0.05] sm:w-64 sm:px-4",
        game.isLive && "live-glow live-pulse",
        density === "compact" ? "sm:w-52" : "sm:w-64 sm:py-3",
      )}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="truncate text-[10px] font-black uppercase tracking-wide text-muted-foreground sm:text-[11px]">
          {game.league}
        </p>
        {game.isLive ? (
          <span className="inline-flex items-center gap-1 rounded-md bg-red-600 px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-white shadow-lg shadow-red-600/30">
            <Activity className="size-3" aria-hidden="true" />
            Live
          </span>
        ) : null}
      </div>
      <TeamScore team={game.awayTeam} score={game.awayScore} leading={awayLeading} />
      <TeamScore team={game.homeTeam} score={game.homeScore} leading={homeLeading} />
      {density === "expanded" ? (
        <p className="mt-2 truncate text-[11px] font-semibold uppercase tracking-wide text-accent">
          {game.status} / {game.detail}
        </p>
      ) : null}
    </article>
  );
}

function ScoreTickerSkeleton() {
  return (
    <div className="flex w-max min-w-full">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="w-[78vw] shrink-0 snap-center border-r border-white/10 px-3 py-2 sm:w-64 sm:px-4 sm:py-3">
          <div className="skeleton mb-3 h-3 w-24" />
          <div className="skeleton mb-2 h-4 w-44" />
          <div className="skeleton h-4 w-36" />
        </div>
      ))}
    </div>
  );
}

function TeamScore({
  team,
  score,
  leading,
}: {
  team: string;
  score: number | string;
  leading: boolean;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-3 text-sm", leading && "text-foreground")}>
      <span className={cn("truncate text-muted-foreground", leading && "font-bold text-foreground")}>{team}</span>
      <span className={cn("font-mono text-base font-bold", leading && "text-accent")}>{score}</span>
    </div>
  );
}
