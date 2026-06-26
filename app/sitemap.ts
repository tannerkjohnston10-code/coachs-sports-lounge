import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coachs-sports-lounge.pages.dev";
const routes = [
  "/",
  "/football",
  "/basketball",
  "/baseball",
  "/hockey",
  "/soccer",
  "/track",
  "/college-hub",
  "/transfer-portal",
  "/pro-hub",
  "/coaches-lounge",
  "/rankings",
  "/standings",
  "/calendar",
  "/settings",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
