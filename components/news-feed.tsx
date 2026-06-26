"use client";

import { useEffect, useMemo, useState } from "react";
import { Radio, RefreshCw } from "lucide-react";
import { NewsCard } from "@/components/news-card";
import { ErrorState, StateMessage } from "@/components/ui/state-message";
import { useSportsNews } from "@/hooks/use-sports-news";
import { formatUpdatedTime, rotateItems } from "@/lib/refresh";
import { loadUserPreferences, subscribeToPreferenceUpdates } from "@/lib/services/userPreferences";
import { cn } from "@/lib/utils";
import type { NewsLevel, NewsSport } from "@/types/news";
import type { NewsLayout } from "@/types/settings";

const sportFilters: Array<"All" | NewsSport> = [
  "All",
  "Football",
  "Basketball",
  "Baseball",
  "Hockey",
  "Soccer",
  "Track & Field",
];

const levelFilters: Array<"All" | NewsLevel> = ["All", "College", "Pro"];

export function NewsFeed() {
  const [selectedSport, setSelectedSport] = useState<"All" | NewsSport>("All");
  const [selectedLevel, setSelectedLevel] = useState<"All" | NewsLevel>("All");
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [refreshCount, setRefreshCount] = useState(0);
  const [newsLayout, setNewsLayout] = useState<NewsLayout>("grid");
  const { data: sourceNews, error, isInitialLoading, isRefreshing, lastUpdated, refresh } = useSportsNews();

  const newsItems = useMemo(() => rotateItems(sourceNews, refreshCount), [sourceNews, refreshCount]);

  const filteredNews = useMemo(() => {
    return newsItems.filter((item) => {
      const sportMatch = selectedSport === "All" || item.sport === selectedSport;
      const levelMatch = selectedLevel === "All" || item.level === selectedLevel;

      return sportMatch && levelMatch;
    });
  }, [newsItems, selectedSport, selectedLevel]);

  function toggleSaved(id: string) {
    setSavedIds((current) =>
      current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id],
    );
  }

  useEffect(() => {
    function syncNewsLayout() {
      setNewsLayout(loadUserPreferences().newsLayout);
    }

    syncNewsLayout();
    return subscribeToPreferenceUpdates(syncNewsLayout);
  }, []);

  useEffect(() => {
    if (lastUpdated) {
      setRefreshCount((count) => count + 1);
    }
  }, [lastUpdated]);

  return (
    <section id="news-feed" className="scroll-mt-36 grid gap-5">
      <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-card/80 p-4 shadow-xl shadow-black/20 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Radio className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Live-Style NewsFeed</span>
            </div>
            <h2 className="text-xl font-black tracking-tight sm:text-2xl">Latest From The Lounge Wire</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Mock breaking-news flow filtered by sport and college/pro level.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
              {filteredNews.length} stories
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Updated {lastUpdated ? formatUpdatedTime(lastUpdated) : "--"}
            </p>
            <button
              type="button"
              onClick={refresh}
              disabled={isRefreshing}
              className="inline-flex h-9 items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm font-bold text-foreground transition hover:bg-white/[0.08] disabled:cursor-wait disabled:opacity-70"
              aria-label="Refresh news"
            >
              <RefreshCw className={cn("size-4", isRefreshing && "animate-spin")} aria-hidden="true" />
              Refresh
            </button>
          </div>
        </div>

        <div className="grid gap-3">
          <FilterGroup
            label="Sport"
            options={sportFilters}
            selected={selectedSport}
            onSelect={setSelectedSport}
          />
          <FilterGroup
            label="Level"
            options={levelFilters}
            selected={selectedLevel}
            onSelect={setSelectedLevel}
          />
        </div>
      </div>

      {error ? <ErrorState description={error} /> : null}

      {isInitialLoading ? (
        <NewsFeedSkeleton layout={newsLayout} />
      ) : (
        <div
          className={cn(
            "grid gap-4 transition-opacity",
            newsLayout === "grid" ? "xl:grid-cols-2" : "xl:grid-cols-1",
            isRefreshing && "opacity-55",
          )}
        >
          {filteredNews.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              saved={savedIds.includes(item.id)}
              onToggleSave={toggleSaved}
            />
          ))}
        </div>
      )}

      {!isInitialLoading && !error && filteredNews.length === 0 ? (
        <StateMessage
          title="No stories match those filters"
          description="Try widening the sport or college/pro filters to bring more stories back into the room."
        />
      ) : null}
    </section>
  );
}

function NewsFeedSkeleton({ layout }: { layout: NewsLayout }) {
  return (
    <div className={cn("grid gap-4", layout === "grid" ? "xl:grid-cols-2" : "xl:grid-cols-1")}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="rounded-lg border border-white/10 bg-card/80 p-5 shadow-xl shadow-black/20">
          <div className="mb-5 flex gap-2">
            <div className="skeleton h-6 w-20" />
            <div className="skeleton h-6 w-16" />
          </div>
          <div className="skeleton mb-3 h-6 w-4/5" />
          <div className="skeleton mb-5 h-4 w-1/2" />
          <div className="skeleton mb-2 h-4 w-full" />
          <div className="skeleton h-4 w-3/4" />
        </div>
      ))}
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onSelect,
}: {
  label: string;
  options: T[];
  selected: T;
  onSelect: (option: T) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="touch-scroll flex gap-2 overflow-x-auto pb-1">
        {options.map((option) => {
          const active = option === selected;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={cn(
                "shrink-0 rounded-md border px-3 py-2 text-xs font-bold transition sm:text-sm",
                active
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-white/10 bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
