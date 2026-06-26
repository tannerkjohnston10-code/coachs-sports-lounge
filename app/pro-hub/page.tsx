import {
  ArrowUpRight,
  BarChart3,
  CircleDot,
  Goal,
  Landmark,
  Megaphone,
  Radio,
  ShieldCheck,
  Trophy,
  Waves,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const leagueSections = [
  {
    title: "NFL",
    label: "Sunday Board",
    icon: ShieldCheck,
    lead: "Roster leverage, quarterback protection, and coordinator chess define the pro football desk.",
    items: ["Pass-pro market heats up", "Division race tiebreaker watch", "Practice squad call-up notes"],
  },
  {
    title: "NBA",
    label: "Hardwood Desk",
    icon: Trophy,
    lead: "Closing groups, injury management, and playoff matchup hunting drive the nightly room.",
    items: ["Boston-New York late-game board", "Denver bench minutes trend", "Trade deadline role fits"],
  },
  {
    title: "MLB",
    label: "Clubhouse Desk",
    icon: CircleDot,
    lead: "Bullpen leverage, lineup balance, and rotation durability sit at the center of the baseball board.",
    items: ["Bridge reliever usage spike", "Atlanta-Philly series preview", "Lefty platoon advantages"],
  },
  {
    title: "NHL",
    label: "Ice Desk",
    icon: Waves,
    lead: "Line matching, goalie workload, and deadline depth shape the nightly hockey slate.",
    items: ["Toronto-Montreal OT pulse", "Blue-line mobility market", "Power-play entry trends"],
  },
  {
    title: "MLS / Soccer",
    label: "Global Pro Desk",
    icon: Goal,
    lead: "Pressing models, fullback roles, and roster mechanisms headline the soccer side.",
    items: ["Seattle-LAFC press resistance", "Fullback market watch", "Designated player role fit"],
  },
];

const topHeadlines = [
  "NFL contenders prioritize pass protection and versatile tight ends",
  "NBA playoff hopefuls start trimming rotation experiments",
  "MLB clubs turn middle innings into a matchup-heavy leverage zone",
  "NHL deadline boards value defensive mobility over pure scoring splash",
  "MLS staffs chase fullbacks who can invert, press, and recover",
];

const liveScores = [
  { league: "NBA", matchup: "Boston at New York", score: "96-99", status: "4Q 4:02", live: true },
  { league: "NHL", matchup: "Toronto at Montreal", score: "2-2", status: "OT", live: true },
  { league: "MLB", matchup: "Los Angeles at San Francisco", score: "5-3", status: "Top 8", live: true },
  { league: "Soccer", matchup: "Seattle vs LAFC", score: "1-1", status: "72'", live: true },
];

const featuredMatchups = [
  { league: "NFL", matchup: "Philadelphia vs Dallas", time: "Sun 8:20 PM", note: "Division leverage under the lights" },
  { league: "NBA", matchup: "Denver vs Phoenix", time: "Fri 9:30 PM", note: "Late-game matchup counters" },
  { league: "NHL", matchup: "Colorado vs Dallas", time: "Sat 9:00 PM", note: "Playoff-style pace and line matching" },
  { league: "MLS", matchup: "Seattle vs LAFC", time: "Sat 10:30 PM", note: "Press resistance and transition control" },
];

const standingsPreview = [
  { league: "NFL", leader: "AFC: Kansas City", chase: "Baltimore and Buffalo within striking distance" },
  { league: "NBA", leader: "East: Boston", chase: "Milwaukee and New York chasing seeding leverage" },
  { league: "MLB", leader: "NL: Atlanta", chase: "Philadelphia applying division pressure" },
  { league: "NHL", leader: "West: Colorado", chase: "Dallas and Vegas keeping heat on the race" },
];

const storylines = [
  "How aggressive should contenders be with future picks before deadline windows close?",
  "Player-care staffs are becoming competitive advantages in back-to-back stretches.",
  "The best pro teams are simplifying role clarity while expanding tactical flexibility.",
  "Front offices are asking coaches for scheme-proof players, not just stat-sheet fits.",
];

export default function ProHubPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <Landmark className="size-3.5" aria-hidden="true" />
            Pro Hub
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Pro Sports Command Center</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Live scores, league storylines, standings pressure, and front-office context across the major pro
            sports desk.
          </p>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        {leagueSections.slice(0, 2).map((section) => (
          <LeagueFeature key={section.title} section={section} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {leagueSections.slice(2).map((section) => (
          <LeagueFeature key={section.title} section={section} compact />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <ListPanel icon={Megaphone} label="Top Pro Headlines" title="League Wire" items={topHeadlines} />
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Radio className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Live Scores</span>
            </div>
            <CardTitle>Now Playing</CardTitle>
            <CardDescription>Mock live scoreboard from the pro desk.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {liveScores.map((score) => (
              <article key={`${score.league}-${score.matchup}`} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-accent">{score.league}</p>
                  {score.live ? (
                    <span className="rounded-md bg-red-600 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                      Live
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-bold">{score.matchup}</h3>
                <div className="mt-3 flex items-end justify-between gap-4">
                  <p className="font-mono text-2xl font-black text-accent">{score.score}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{score.status}</p>
                </div>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Trophy className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Featured Matchups</span>
            </div>
            <CardTitle>Prime Boards</CardTitle>
            <CardDescription>Matchups with playoff, deadline, or rivalry gravity.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {featuredMatchups.map((game) => (
              <article key={`${game.league}-${game.matchup}`} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-accent">{game.league}</p>
                  <p className="text-xs font-bold text-muted-foreground">{game.time}</p>
                </div>
                <h3 className="mt-2 font-bold">{game.matchup}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{game.note}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <ListPanel icon={Zap} label="Major Storylines" title="What The Room Is Tracking" items={storylines} />
      </section>

      <section>
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <BarChart3 className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Standings Preview Cards</span>
            </div>
            <CardTitle>Pressure Points</CardTitle>
            <CardDescription>Quick standings snapshots for the next editorial board.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {standingsPreview.map((card) => (
              <article key={card.league} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-black uppercase tracking-wide text-accent">{card.league}</p>
                <h3 className="mt-2 font-bold">{card.leader}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.chase}</p>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function LeagueFeature({
  section,
  compact = false,
}: {
  section: {
    title: string;
    label: string;
    icon: LucideIcon;
    lead: string;
    items: string[];
  };
  compact?: boolean;
}) {
  const Icon = section.icon;

  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <Icon className="size-4" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wide">{section.label}</span>
        </div>
        <CardTitle className={compact ? "text-xl" : "text-2xl"}>{section.title}</CardTitle>
        <CardDescription>{section.lead}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {section.items.map((item) => (
            <div key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
        {!compact ? (
          <Button className="mt-5" variant="outline">
            Open league board
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

function ListPanel({
  icon: Icon,
  label,
  title,
  items,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  items: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <Icon className="size-4" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wide">{label}</span>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((item, index) => (
          <article key={item} className="flex gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4">
            <span className="font-mono text-lg font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
            <p className="leading-6 text-muted-foreground">{item}</p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
