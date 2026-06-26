import { mockNews } from "@/data/mock-news";
import type { NewsItem, NewsLevel, NewsSport } from "@/types/news";

const NEWS_API_BASE_URL = process.env.NEXT_PUBLIC_SPORTS_NEWS_API_BASE_URL;
const NEWS_API_KEY = process.env.NEXT_PUBLIC_SPORTS_NEWS_API_KEY;

export type NewsQuery = {
  sport?: NewsSport | "All";
  level?: NewsLevel | "All";
};

export async function getSportsNews(query: NewsQuery = {}): Promise<NewsItem[]> {
  // Future integration point:
  // Replace this mock return with a fetch to your sports news provider.
  // For push updates later, add subscribeToSportsNews(callback) beside this
  // fetcher and keep the UI consuming the same hook return shape.
  // Example:
  // const params = new URLSearchParams({
  //   sport: query.sport ?? "All",
  //   level: query.level ?? "All",
  // });
  // const response = await fetch(`${NEWS_API_BASE_URL}/news?${params}`, {
  //   headers: { "x-api-key": NEWS_API_KEY ?? "" },
  //   next: { revalidate: 60 },
  // });
  // return mapNewsApiArticles(await response.json());
  void NEWS_API_BASE_URL;
  void NEWS_API_KEY;

  return mockNews.filter((item) => {
    const sportMatch = !query.sport || query.sport === "All" || item.sport === query.sport;
    const levelMatch = !query.level || query.level === "All" || item.level === query.level;

    return sportMatch && levelMatch;
  });
}
