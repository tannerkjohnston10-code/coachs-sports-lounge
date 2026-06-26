import { Activity, Newspaper, Radio, Trophy } from "lucide-react";
import { SportTabs } from "@/components/sport-tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { FeaturedGame, SportHeadline, SportPageData, SportScore, SportSectionItem } from "@/types/sports";

export function SportPage({ sport }: { sport: SportPageData }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SportTabs activeSlug={sport.slug} />

      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <Radio className="size-3.5" aria-hidden="true" />
            Sport Room
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">{sport.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">{sport.description}</p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {sport.scores.map((score) => (
          <ScorePanel key={`${score.league}-${score.matchup}`} score={score} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Newspaper className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Top Headlines</span>
            </div>
            <CardTitle>{sport.shortTitle} Desk</CardTitle>
            <CardDescription>College stories lead the board, with pro context folded in.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {sport.headlines.map((headline) => (
              <HeadlineRow key={headline.title} headline={headline} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Trophy className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Featured Games</span>
            </div>
            <CardTitle>Watch Board</CardTitle>
            <CardDescription>Priority matchups for staff prep and lounge coverage.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {sport.featuredGames.map((game) => (
              <FeaturedGameRow key={`${game.league}-${game.matchup}`} game={game} />
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[3fr_2fr]">
        <SectionColumn title="College Focus" emphasis="60%" items={sport.college} />
        <SectionColumn title="Pro Focus" emphasis="40%" items={sport.pro} />
      </section>
    </div>
  );
}

function ScorePanel({ score }: { score: SportScore }) {
  return (
    <Card className="premium-card-hover overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardDescription className="font-black uppercase tracking-wide">{score.league}</CardDescription>
          {score.isLive ? (
            <span className="inline-flex items-center gap-1 rounded-md bg-red-600 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">
              <Activity className="size-3" aria-hidden="true" />
              Live
            </span>
          ) : null}
        </div>
        <CardTitle className="text-lg">{score.matchup}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between gap-4">
          <p className="font-mono text-3xl font-black text-accent">{score.score}</p>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{score.status}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function HeadlineRow({ headline }: { headline: SportHeadline }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent/30 hover:bg-white/[0.07]">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wide">
        <span className={cn("text-accent", headline.label === "Pro" && "text-primary")}>{headline.label}</span>
        <span className="text-muted-foreground">{headline.source}</span>
      </div>
      <h3 className="text-base font-bold leading-6">{headline.title}</h3>
    </article>
  );
}

function FeaturedGameRow({ game }: { game: FeaturedGame }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent/30 hover:bg-white/[0.07]">
      <div className="mb-2 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wide">
        <span className="text-accent">{game.league}</span>
        <span className="text-muted-foreground">{game.time}</span>
      </div>
      <h3 className="font-bold">{game.matchup}</h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{game.note}</p>
    </article>
  );
}

function SectionColumn({
  title,
  emphasis,
  items,
}: {
  title: string;
  emphasis: string;
  items: SportSectionItem[];
}) {
  return (
    <Card className="premium-card-hover">
      <CardHeader>
        <CardDescription className="font-black uppercase tracking-wide">{emphasis} Emphasis</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent/30 hover:bg-white/[0.07]">
            <h3 className="font-bold">{item.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.detail}</p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
