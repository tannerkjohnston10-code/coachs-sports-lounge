import { PREFERENCES_STORAGE_KEY, PREFERENCES_UPDATED_EVENT } from "@/lib/preferences";
import type { UserPreferences } from "@/types/settings";

const USER_PREFERENCES_API_BASE_URL = process.env.NEXT_PUBLIC_USER_PREFERENCES_API_BASE_URL;
const USER_PREFERENCES_API_KEY = process.env.NEXT_PUBLIC_USER_PREFERENCES_API_KEY;

export const defaultUserPreferences: UserPreferences = {
  favoriteSports: ["Football", "Basketball", "Track & Field"],
  favoriteTeams: ["Texas Longhorns", "Kansas City Chiefs", "Boston Celtics"],
  collegeProPreference: 60,
  themeMode: "dark",
  scoreboardDensity: "expanded",
  newsLayout: "grid",
  savedFilters: ["College Football", "Recruiting"],
};

export function loadUserPreferences(): UserPreferences {
  if (typeof window === "undefined") {
    return defaultUserPreferences;
  }

  const stored = window.localStorage.getItem(PREFERENCES_STORAGE_KEY);

  if (!stored) {
    return defaultUserPreferences;
  }

  try {
    return { ...defaultUserPreferences, ...JSON.parse(stored) };
  } catch {
    return defaultUserPreferences;
  }
}

export function saveUserPreferences(preferences: UserPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  // Future integration point:
  // Keep localStorage as the instant local cache, then POST/PATCH to your user
  // preferences API when accounts are available.
  // Example:
  // await fetch(`${USER_PREFERENCES_API_BASE_URL}/me/preferences`, {
  //   method: "PUT",
  //   headers: {
  //     "content-type": "application/json",
  //     "x-api-key": USER_PREFERENCES_API_KEY ?? "",
  //   },
  //   body: JSON.stringify(preferences),
  // });
  void USER_PREFERENCES_API_BASE_URL;
  void USER_PREFERENCES_API_KEY;

  window.localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(preferences));
  window.dispatchEvent(new Event(PREFERENCES_UPDATED_EVENT));
}

export function subscribeToPreferenceUpdates(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(PREFERENCES_UPDATED_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(PREFERENCES_UPDATED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}
