import {
  ArrowUpRight,
  BookOpen,
  ClipboardList,
  Coffee,
  Film,
  Lightbulb,
  MessageSquare,
  Smile,
  Trophy,
  Users,
  Vote,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const quote = {
  text: "The scoreboard tells the result. The practice field tells the truth.",
  author: "Coach's Lounge Daily",
};

const article = {
  title: "How Calm Leaders Keep Staffs Clear During Chaotic Weeks",
  summary:
    "A practical read on simplifying decisions, giving assistants ownership, and keeping the team message steady when the schedule gets noisy.",
  readTime: "6 min read",
};

const strategyCards = [
  { title: "Late-game timeout usage", prompt: "When do you save it, and when do you spend it to settle the room?" },
  { title: "Halftime adjustment flow", prompt: "What is your staff's three-minute process before players return?" },
  { title: "Short-week practices", prompt: "How do you trim reps without trimming standards?" },
];

const pollOptions = [
  { label: "Film first", votes: "42%" },
  { label: "Walk-through first", votes: "31%" },
  { label: "Player-led reset", votes: "27%" },
];

const trivia = {
  question: "Which part of a practice plan usually reveals the staff's real priorities?",
  answer: "The transition periods. They show what a staff values when time is tight.",
};

const filmRoom = [
  "Tag three clips where communication solved the play before talent did.",
  "Find one opponent tendency your scout sheet can explain in one sentence.",
  "End every film block with one behavior players can repeat tomorrow.",
];

const practiceIdeas = [
  "Run a five-minute pressure clock at the end of individual periods.",
  "Let position groups build one competitive drill and explain the standard.",
  "Add a staff-only note for what gets removed if energy dips.",
];

const cultureIdeas = [
  "Ask captains to name one teammate who made practice easier for everyone.",
  "Start the week with a simple standard: how we respond after correction.",
  "Create a quiet recognition board for scout-team wins.",
];

export default function CoachesLoungePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-5 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <Coffee className="size-3.5" aria-hidden="true" />
            Coaches Lounge
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:mt-5 sm:text-6xl">Pull Up A Chair, Coach</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-lg sm:leading-7">
            A relaxed online hangout for leadership notes, strategy talk, film ideas, practice planning, culture
            builders, and a little staff-room levity.
          </p>
        </div>
      </section>

      <section className="grid gap-4 sm:gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <Card className="bg-[#17120e]/90">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Trophy className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Daily Coaching Quote</span>
            </div>
            <CardTitle className="text-xl leading-7 sm:text-2xl sm:leading-8">&ldquo;{quote.text}&rdquo;</CardTitle>
            <CardDescription>{quote.author}</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <BookOpen className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Leadership Article Of The Day</span>
            </div>
            <CardTitle>{article.title}</CardTitle>
            <CardDescription>{article.readTime}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-muted-foreground">{article.summary}</p>
            <Button className="mt-5" variant="outline">
              Read article
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 sm:gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <MessageSquare className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Strategy Discussion Cards</span>
            </div>
            <CardTitle>What Are We Debating Today?</CardTitle>
            <CardDescription>Prompts for coaches who like a good chalk-talk argument.</CardDescription>
          </CardHeader>
          <CardContent className="touch-scroll flex snap-x snap-mandatory gap-3 overflow-x-auto md:grid md:grid-cols-3 md:overflow-visible">
            {strategyCards.map((card) => (
              <article key={card.title} className="min-w-[78vw] snap-center rounded-md border border-white/10 bg-white/[0.04] p-4 md:min-w-0">
                <h3 className="font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.prompt}</p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Vote className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Poll Of The Day</span>
            </div>
            <CardTitle>How do you open a bounce-back practice?</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {pollOptions.map((option) => (
              <div key={option.label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm font-bold">
                  <span>{option.label}</span>
                  <span className="text-accent">{option.votes}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-2 rounded-full bg-accent" style={{ width: option.votes }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 sm:gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Lightbulb className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Coffee Break Trivia</span>
            </div>
            <CardTitle>{trivia.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-muted-foreground">{trivia.answer}</p>
          </CardContent>
        </Card>

        <ListPanel icon={Film} label="Film Room" title="Clips Worth Pulling" items={filmRoom} />
      </section>

      <section className="grid gap-4 sm:gap-6 xl:grid-cols-[1fr_1fr]">
        <ListPanel icon={ClipboardList} label="Practice Planning Ideas" title="Tomorrow's Practice Board" items={practiceIdeas} />
        <ListPanel icon={Users} label="Team Culture Ideas" title="Build The Room" items={cultureIdeas} />
      </section>

      <section>
        <Card className="bg-[#1b130c]/90">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Smile className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Locker Room Laugh</span>
            </div>
            <CardTitle>Every coach has said &ldquo;quick meeting&rdquo; and meant 37 minutes.</CardTitle>
            <CardDescription>
              The assistants knew. The players knew. The coffee knew.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </div>
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
      <CardContent className="grid gap-2 sm:gap-3">
        {items.map((item, index) => (
          <article key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 sm:gap-4 sm:p-4">
            <span className="font-mono text-base font-black text-accent sm:text-lg">{String(index + 1).padStart(2, "0")}</span>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">{item}</p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
