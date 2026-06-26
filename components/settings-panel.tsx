"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, LayoutGrid, List, Moon, RotateCcw, Save, Settings, Sun } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PREFERENCES_STORAGE_KEY } from "@/lib/preferences";
import { defaultUserPreferences, loadUserPreferences, saveUserPreferences } from "@/lib/services/userPreferences";
import { cn } from "@/lib/utils";
import type { NewsLayout, ScoreboardDensity, ThemeMode, UserPreferences } from "@/types/settings";

const sportOptions = ["Football", "Basketball", "Baseball", "Hockey", "Soccer", "Track & Field"];
const teamOptions = [
  "Texas Longhorns",
  "Kansas City Chiefs",
  "Boston Celtics",
  "Atlanta Braves",
  "Toronto Maple Leafs",
  "Seattle Sounders",
  "Arkansas Track",
  "UConn Huskies",
];
const filterOptions = [
  "College Football",
  "NFL",
  "College Basketball",
  "NBA",
  "MLB",
  "NHL",
  "Recruiting",
  "Coaching Carousel",
];

export function SettingsPanel() {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultUserPreferences);
  const [loaded, setLoaded] = useState(false);
  const [savedAt, setSavedAt] = useState<string | null>(null);

  useEffect(() => {
    setPreferences(loadUserPreferences());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    saveUserPreferences(preferences);
    setSavedAt(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit", second: "2-digit" }));
  }, [loaded, preferences]);

  useEffect(() => {
    document.documentElement.classList.toggle("light", preferences.themeMode === "light");
  }, [preferences.themeMode]);

  const proPreference = useMemo(() => 100 - preferences.collegeProPreference, [preferences.collegeProPreference]);

  function toggleArrayValue(key: "favoriteSports" | "favoriteTeams" | "savedFilters", value: string) {
    setPreferences((current) => {
      const values = current[key];
      const nextValues = values.includes(value) ? values.filter((item) => item !== value) : [...values, value];

      return { ...current, [key]: nextValues };
    });
  }

  function updatePreference<K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) {
    setPreferences((current) => ({ ...current, [key]: value }));
  }

  function resetPreferences() {
    setPreferences(defaultUserPreferences);
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
              <Settings className="size-3.5" aria-hidden="true" />
              Settings
            </div>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Customize The Lounge</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Tune your sports, teams, scoreboard, news layout, and saved filters. Preferences save automatically
              in this browser.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {savedAt ? `Saved ${savedAt}` : "Loading preferences"}
            </p>
            <Button type="button" variant="outline" onClick={resetPreferences}>
              <RotateCcw className="size-4" aria-hidden="true" />
              Reset
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <PreferenceCard title="Favorite Sports" description="Pick the rooms that should feel most prominent.">
          <OptionGrid
            options={sportOptions}
            selected={preferences.favoriteSports}
            onToggle={(value) => toggleArrayValue("favoriteSports", value)}
          />
        </PreferenceCard>

        <PreferenceCard title="Favorite Teams" description="Save teams for future personalized boards.">
          <OptionGrid
            options={teamOptions}
            selected={preferences.favoriteTeams}
            onToggle={(value) => toggleArrayValue("favoriteTeams", value)}
          />
        </PreferenceCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <PreferenceCard
          title="College / Pro Preference"
          description={`${preferences.collegeProPreference}% college, ${proPreference}% pro emphasis.`}
        >
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={preferences.collegeProPreference}
            onChange={(event) => updatePreference("collegeProPreference", Number(event.target.value))}
            className="w-full accent-[hsl(var(--accent))]"
            aria-label="College to pro preference"
          />
          <div className="mt-3 flex items-center justify-between text-xs font-black uppercase tracking-wide text-muted-foreground">
            <span>Pro</span>
            <span>Balanced</span>
            <span>College</span>
          </div>
        </PreferenceCard>

        <PreferenceCard title="Display Mode" description="Choose the visual feel for this browser.">
          <SegmentedControl
            value={preferences.themeMode}
            options={[
              { value: "dark", label: "Dark", icon: Moon },
              { value: "light", label: "Light", icon: Sun },
            ]}
            onChange={(value) => updatePreference("themeMode", value as ThemeMode)}
          />
        </PreferenceCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <PreferenceCard title="Scoreboard Density" description="Set the ticker style for game days.">
          <SegmentedControl
            value={preferences.scoreboardDensity}
            options={[
              { value: "compact", label: "Compact", icon: List },
              { value: "expanded", label: "Expanded", icon: LayoutGrid },
            ]}
            onChange={(value) => updatePreference("scoreboardDensity", value as ScoreboardDensity)}
          />
        </PreferenceCard>

        <PreferenceCard title="News Layout" description="Choose how stories should appear in the feed.">
          <SegmentedControl
            value={preferences.newsLayout}
            options={[
              { value: "grid", label: "Grid", icon: LayoutGrid },
              { value: "list", label: "List", icon: List },
            ]}
            onChange={(value) => updatePreference("newsLayout", value as NewsLayout)}
          />
        </PreferenceCard>
      </section>

      <PreferenceCard title="Saved Filters" description="Store quick filters for the NewsFeed and hub pages.">
        <OptionGrid
          options={filterOptions}
          selected={preferences.savedFilters}
          onToggle={(value) => toggleArrayValue("savedFilters", value)}
        />
      </PreferenceCard>

      <Card className="bg-[#17120e]/90">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2 text-accent">
            <Save className="size-4" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-wide">LocalStorage Preview</span>
          </div>
          <CardTitle>Saved Preference Payload</CardTitle>
          <CardDescription>Stored under {PREFERENCES_STORAGE_KEY}</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-md border border-white/10 bg-black/30 p-4 text-xs leading-6 text-muted-foreground">
            {JSON.stringify(preferences, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function PreferenceCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function OptionGrid({
  options,
  selected,
  onToggle,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => {
        const active = selected.includes(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => onToggle(option)}
            className={cn(
              "flex items-center justify-between gap-3 rounded-md border p-3 text-left text-sm font-bold transition",
              active
                ? "border-accent bg-accent text-accent-foreground"
                : "border-white/10 bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground",
            )}
          >
            <span>{option}</span>
            {active ? <Check className="size-4" aria-hidden="true" /> : null}
          </button>
        );
      })}
    </div>
  );
}

function SegmentedControl({
  value,
  options,
  onChange,
}: {
  value: string;
  options: Array<{ value: string; label: string; icon: LucideIcon }>;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => {
        const Icon = option.icon;
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-bold transition",
              active
                ? "border-accent bg-accent text-accent-foreground"
                : "border-white/10 bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground",
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
