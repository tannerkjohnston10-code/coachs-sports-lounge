export type ThemeMode = "dark" | "light";
export type ScoreboardDensity = "compact" | "expanded";
export type NewsLayout = "grid" | "list";

export type UserPreferences = {
  favoriteSports: string[];
  favoriteTeams: string[];
  collegeProPreference: number;
  themeMode: ThemeMode;
  scoreboardDensity: ScoreboardDensity;
  newsLayout: NewsLayout;
  savedFilters: string[];
};
