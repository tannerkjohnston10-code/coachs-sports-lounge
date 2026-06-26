import {
  ArrowUpRight,
  CircleDot,
  Dumbbell,
  Flame,
  GraduationCap,
  Megaphone,
  Radio,
  Shuffle,
  Trophy,
  Users,
  Volleyball,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sportSections = [
  {
    title: "College Football",
    label: "Saturday Desk",
    icon: Trophy,
    lead: "Playoff leverage, portal depth, and staff install notes are driving the board.",
    items: ["Texas-Oklahoma pressure plan", "Georgia-Alabama trench report", "Portal QB spring watch"],
  },
  {
    title: "Men's College Basketball",
    label: "Bracket Room",
    icon: Dumbbell,
    lead: "Bubble math and late-clock offense are shaping the men's tournament conversation.",
    items: ["UConn-Villanova half-court test", "Kansas guard rotation update", "Baylor bench minutes trending up"],
  },
  {
    title: "Women's College Basketball",
    label: "Title Chase",
    icon: Volleyball,
    lead: "Elite guard play, transition defense, and seeding paths headline the women's desk.",
    items: ["South Carolina depth still travels", "Iowa pace forces matchup calls", "Stanford frontcourt scout"],
  },
  {
    title: "College Baseball / Softball",
    label: "Diamond Board",
    icon: CircleDot,
    lead: "Weekend rotations, bullpen bridges, and power bats set the tone on both diamonds.",
    items: ["SEC weekend arm management", "Softball power rankings shift", "Small-ball packages return"],
  },
  {
    title: "Track & Field",
    label: "Meet Room",
    icon: Flame,
    lead: "Relay depth and field-event points are deciding conference title math.",
    items: ["4x400 relay load checks", "Throws groups stacking points", "Distance night qualifying marks"],
  },
];

const recruitingHeadlines = [
  "Five-star tackle trims list after three official visit weekends",
  "Women's hoops staffs prioritize combo guards with defensive range",
  "Baseball programs balance draft risk against immediate campus impact",
  "Track recruiters chase multi-event athletes who can score early",
];

const coachingCarousel = [
  "Mid-major football job expected to draw Power Four coordinator interest",
  "Veteran basketball assistant gaining momentum for two open seats",
  "Softball staff movement opens a recruiting window across the region",
];

const bigGames = [
  { sport: "CFB", matchup: "Michigan vs Ohio State", time: "Sat 12:00 PM", stakes: "Playoff elimination feel" },
  { sport: "MBB", matchup: "UConn vs Villanova", time: "Tue 8:00 PM", stakes: "Big East control" },
  { sport: "WBB", matchup: "South Carolina vs LSU", time: "Thu 7:00 PM", stakes: "Top-seed statement" },
  { sport: "Baseball", matchup: "Tennessee vs Florida", time: "Fri 6:00 PM", stakes: "Weekend rotation test" },
];

const spotlight = {
  school: "Northwest Missouri State",
  tag: "Small School Spotlight",
  summary:
    "A lean staff, strong player development culture, and multi-sport facility sharing have turned limited resources into a real competitive edge.",
  notes: ["Top-10 D-II football efficiency", "Men's hoops defense travels", "Track relays posting national marks"],
};

export default function CollegeHubPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <GraduationCap className="size-3.5" aria-hidden="true" />
            College Hub
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">College Sports Command Center</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Scores, stories, recruiting movement, staff changes, and small-school intelligence from across the
            college landscape.
          </p>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        {sportSections.slice(0, 2).map((section) => (
          <SportFeature key={section.title} section={section} />
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sportSections.slice(2).map((section) => (
          <SportFeature key={section.title} section={section} compact />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <ListPanel
          icon={Megaphone}
          label="Recruiting Headlines"
          title="Visits, Boards, And Fits"
          items={recruitingHeadlines}
        />
        <ListPanel
          icon={Shuffle}
          label="Coaching Carousel"
          title="Staff Movement Watch"
          items={coachingCarousel}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Radio className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Big Games This Week</span>
            </div>
            <CardTitle>Circle The College Board</CardTitle>
            <CardDescription>Matchups with ranking, recruiting, or staff-room consequences.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2">
            {bigGames.map((game) => (
              <article key={`${game.sport}-${game.matchup}`} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-black uppercase tracking-wide text-accent">{game.sport}</p>
                  <p className="text-xs font-bold text-muted-foreground">{game.time}</p>
                </div>
                <h3 className="mt-2 font-bold">{game.matchup}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{game.stakes}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#17120e]/90">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Users className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">{spotlight.tag}</span>
            </div>
            <CardTitle>{spotlight.school}</CardTitle>
            <CardDescription>{spotlight.summary}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {spotlight.notes.map((note) => (
              <div key={note} className="rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm text-muted-foreground">
                {note}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function SportFeature({
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
            Open board
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
