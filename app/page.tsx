import {
  AlertTriangle,
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  Clock3,
  Flame,
  Medal,
  MessageSquare,
  Newspaper,
  Radio,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NewsFeed } from "@/components/news-feed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuredGame = {
  league: "College Football",
  matchup: "Michigan vs Ohio State",
  time: "Sat 12:00 PM",
  note: "Playoff leverage, rivalry heat, and two defensive fronts built for TV.",
};

const gameOfNight = {
  league: "NBA",
  matchup: "Boston at New York",
  score: "99-96",
  status: "4Q 4:02",
};

const upsetAlert = {
  league: "College Basketball",
  matchup: "Kansas at Baylor",
  detail: "Baylor's bench is plus-18 and the building has turned loud.",
};

const collegeStories = [
  "Transfer portal quarterback rooms start shaping spring depth charts",
  "College hoops coaches lean into zone looks before tournament play",
  "Relay depth becomes the difference in conference track title races",
  "College baseball staffs protect weekend arms with tighter pitch plans",
];

const proStories = [
  "NBA contenders trim rotation experiments before the playoff push",
  "NFL front offices circle pass protection as the offseason swing piece",
  "MLB bullpens keep turning multi-inning bridge arms into leverage weapons",
];

const coachNotes = [
  "Build the first 15 around what your players execute calmly, not what looks clever on the board.",
  "The best scout reports give assistants ownership, not just information.",
  "When the room gets tense, simplify the call sheet before you simplify the standard.",
];

const conversations = [
  "Best way to teach late-game clock management?",
  "What stats actually change halftime adjustments?",
  "How do you organize film clips for multi-sport staffs?",
  "Favorite practice format for short weeks?",
];

const bigGames = [
  { sport: "College Football", matchup: "Georgia vs Alabama", time: "Sat 7:30 PM" },
  { sport: "College Basketball", matchup: "UConn vs Villanova", time: "Tue 8:00 PM" },
  { sport: "NHL", matchup: "Colorado vs Dallas", time: "Sat 9:00 PM" },
  { sport: "Soccer", matchup: "Seattle vs LAFC", time: "Sat 10:30 PM" },
];

const historyItems = [
  "A championship coach once said the real game starts after the first adjustment.",
  "On this date, a rivalry win turned a midseason team into a postseason problem.",
  "A record relay split reminded everyone that depth wins meets before stars finish them.",
];

const rivalryCards = [
  {
    sport: "College Football",
    matchup: "Michigan vs Ohio State",
    label: "The Game",
    note: "Cold-weather leverage, playoff pressure, and every third down feeling like a staff referendum.",
  },
  {
    sport: "College Basketball",
    matchup: "Duke vs North Carolina",
    label: "Tobacco Road",
    note: "Tempo control, early foul trouble, and freshmen discovering that quiet possessions do not exist here.",
  },
  {
    sport: "Pro Soccer",
    matchup: "Seattle vs Portland",
    label: "Cascadia Heat",
    note: "Set-piece discipline, transition defense, and a crowd that turns every clearance into theater.",
  },
];

const clipboardNotes = [
  {
    title: "Opening Script",
    note: "Use the first two possessions to test communication, not just coverage.",
  },
  {
    title: "Timeout Trigger",
    note: "Call it when body language slips before the scoreboard confirms it.",
  },
  {
    title: "Bench Spark",
    note: "Reward the player who changes pace, talks early, and rebounds out of area.",
  },
];

const achievementBadges = [
  { label: "Film Room", value: "12 clips", detail: "Ready for staff review" },
  { label: "Rivalry Watch", value: "7 games", detail: "High-emotion boards" },
  { label: "Coach Wins", value: "4 notes", detail: "Practice ideas saved" },
];

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
        <div className="media-panel stadium-light relative min-h-[420px] overflow-hidden rounded-lg p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
          <div className="absolute inset-x-8 top-0 hidden h-28 bg-[radial-gradient(ellipse_at_top,hsl(var(--foreground)/0.18),transparent_65%)] opacity-70 lg:block" />
          <div className="absolute right-8 top-10 hidden rounded-md border border-accent/25 bg-black/25 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur lg:block">
            <p className="text-[10px] font-black uppercase tracking-wide text-muted-foreground">Prime Desk</p>
            <p className="mt-1 text-sm font-black text-accent">Live board active</p>
          </div>
          <div className="absolute bottom-8 right-16 hidden h-28 w-28 rounded-full border border-accent/30 opacity-80 lg:block" />
          <div className="relative flex h-full max-w-4xl flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
                <Radio className="size-3.5" aria-hidden="true" />
                Morning Board
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
                Coach&apos;s Sports Lounge
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                Scores, stories, matchups, and staff-room perspective for the day ahead. College leads the room,
                pro keeps the edge sharp.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <HeroStat label="College Lean" value="60%" />
              <HeroStat label="Pro Edge" value="40%" />
              <HeroStat label="Live Boards" value="8" />
            </div>
          </div>
        </div>

        <FeatureCard
          icon={Trophy}
          label="Featured Game"
          title={featuredGame.matchup}
          meta={`${featuredGame.league} / ${featuredGame.time}`}
          body={featuredGame.note}
          action="Open matchup"
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <FeatureCard
          icon={Clock3}
          label="Game of the Night"
          title={gameOfNight.matchup}
          meta={`${gameOfNight.league} / ${gameOfNight.status}`}
          body={`Live score: ${gameOfNight.score}. Late-game execution is the whole story now.`}
          action="Watch board"
        />
        <FeatureCard
          icon={AlertTriangle}
          label="Upset Alert"
          title={upsetAlert.matchup}
          meta={upsetAlert.league}
          body={upsetAlert.detail}
          action="Track alert"
          tone="warning"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="premium-card-hover overflow-hidden">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Flame className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Featured Rivalries</span>
            </div>
            <CardTitle>Games With Extra Static</CardTitle>
            <CardDescription>Boards where the standings matter, but the history talks louder.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 lg:grid-cols-3">
            {rivalryCards.map((rivalry) => (
              <article
                key={rivalry.matchup}
                className="group relative min-h-56 overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-white/[0.08] to-black/20 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/45"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary opacity-80" />
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-accent/20 transition duration-300 group-hover:scale-110" />
                <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">{rivalry.sport}</p>
                <h3 className="mt-4 text-xl font-black leading-tight">{rivalry.matchup}</h3>
                <p className="mt-2 inline-flex rounded-md bg-accent/10 px-2 py-1 text-xs font-black uppercase tracking-wide text-accent">
                  {rivalry.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{rivalry.note}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card className="premium-card-hover bg-[#17120e]/90">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <ClipboardList className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Coach Clipboard</span>
            </div>
            <CardTitle>Tonight&apos;s Staff Notes</CardTitle>
            <CardDescription>Quick cues for pressure moments and halftime huddles.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {clipboardNotes.map((note) => (
              <article key={note.title} className="rounded-md border border-dashed border-accent/25 bg-black/20 p-4">
                <p className="text-sm font-black text-accent">{note.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{note.note}</p>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {achievementBadges.map((badge, index) => (
          <div key={badge.label} className="trophy-badge premium-card-hover flex items-center gap-4 p-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-accent/15">
              {index === 0 ? (
                <Medal className="size-5" aria-hidden="true" />
              ) : index === 1 ? (
                <Trophy className="size-5" aria-hidden="true" />
              ) : (
                <ShieldCheck className="size-5" aria-hidden="true" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-black uppercase tracking-wide text-accent/80">{badge.label}</p>
              <p className="mt-0.5 text-2xl font-black text-foreground">{badge.value}</p>
              <p className="text-sm text-muted-foreground">{badge.detail}</p>
            </div>
          </div>
        ))}
      </section>

      <NewsFeed />

      <section className="grid gap-6 xl:grid-cols-[3fr_2fr]">
        <StoryPanel title="Top College Stories" label="60% College Desk" stories={collegeStories} />
        <StoryPanel title="Top Pro Stories" label="40% Pro Desk" stories={proStories} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <ListPanel icon={Users} title="Coach's Corner" label="Staff Notes" items={coachNotes} />
        <ListPanel icon={MessageSquare} title="Trending Conversations" label="Lounge Talk" items={conversations} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <CalendarDays className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Upcoming Big Games</span>
            </div>
            <CardTitle>Circle The Board</CardTitle>
            <CardDescription>Priority matchups worth building the week around.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {bigGames.map((game) => (
              <article key={`${game.sport}-${game.matchup}`} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-black uppercase tracking-wide text-accent">{game.sport}</p>
                <h3 className="mt-2 font-bold">{game.matchup}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{game.time}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <ListPanel icon={Flame} title="Today in Sports History" label="Memory Lane" items={historyItems} />
      </section>
    </div>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-4">
      <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1 text-3xl font-black text-accent">{value}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  label,
  title,
  meta,
  body,
  action,
  tone = "default",
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  meta: string;
  body: string;
  action: string;
  tone?: "default" | "warning";
}) {
  return (
    <Card className={tone === "warning" ? "bg-[#1b130c]/90" : undefined}>
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <Icon className="size-4" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wide">{label}</span>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{meta}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-7 text-muted-foreground">{body}</p>
        <Button className="mt-5" variant={tone === "warning" ? "outline" : "default"}>
          {action}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Button>
      </CardContent>
    </Card>
  );
}

function StoryPanel({ title, label, stories }: { title: string; label: string; stories: string[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <Newspaper className="size-4" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wide">{label}</span>
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {stories.map((story, index) => (
          <article key={story} className="flex gap-4 rounded-md border border-white/10 bg-white/[0.04] p-4">
            <span className="font-mono text-lg font-black text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="font-bold leading-6">{story}</h3>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

function ListPanel({
  icon: Icon,
  title,
  label,
  items,
}: {
  icon: LucideIcon;
  title: string;
  label: string;
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
        {items.map((item) => (
          <article key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
            <p className="leading-6 text-muted-foreground">{item}</p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
