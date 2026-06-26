export type NewsSport =
  | "Football"
  | "Basketball"
  | "Baseball"
  | "Hockey"
  | "Soccer"
  | "Track & Field";

export type NewsLevel = "College" | "Pro";

export type NewsItem = {
  id: string;
  headline: string;
  source: string;
  sport: NewsSport;
  level: NewsLevel;
  publishedAt: string;
  summary: string;
  url: string;
};
