export type SportSlug = "football" | "basketball" | "baseball" | "hockey" | "soccer" | "track";

export type SportScore = {
  league: string;
  matchup: string;
  score: string;
  status: string;
  isLive?: boolean;
};

export type SportHeadline = {
  label: string;
  title: string;
  source: string;
};

export type FeaturedGame = {
  league: string;
  matchup: string;
  time: string;
  note: string;
};

export type SportSectionItem = {
  title: string;
  detail: string;
};

export type SportPageData = {
  slug: SportSlug;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  scores: SportScore[];
  headlines: SportHeadline[];
  featuredGames: FeaturedGame[];
  college: SportSectionItem[];
  pro: SportSectionItem[];
};
