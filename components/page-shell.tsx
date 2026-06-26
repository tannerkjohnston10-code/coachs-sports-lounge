import { ArrowUpRight, CheckCircle2, Radio, Timer, Trophy } from "lucide-react";
import { featuredActions, navItems, quickStats } from "@/data/nav-items";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type PageShellProps = {
  title: string;
  eyebrow: string;
  description: string;
};

export function PageShell({ title, eyebrow, description }: PageShellProps) {
  const relatedRooms = navItems.filter((item) => item.title !== eyebrow).slice(0, 4);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[1.45fr_0.85fr]">
        <div className="media-panel relative flex min-h-[360px] overflow-hidden rounded-lg p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
          <div className="absolute bottom-0 right-0 hidden h-52 w-52 translate-x-12 translate-y-12 rounded-full border border-white/10 xl:block" />
          <div className="relative flex max-w-3xl flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent">
                <Radio className="size-3.5" aria-hidden="true" />
                {eyebrow}
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {description}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                Open Board
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
              <Button variant="outline">Add Placeholder</Button>
            </div>
          </div>
        </div>
        <Card className="bg-[#17120e]/90">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Timer className="size-4" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-wide">Live Desk</span>
            </div>
            <CardTitle>Launch Checklist</CardTitle>
            <CardDescription>Placeholder modules ready to customize.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {featuredActions.map((action) => (
              <div key={action} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-3 text-sm">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                <span>{action}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader>
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-3xl">{stat.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent">
              <Trophy className="size-4" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-wide">Around The Lounge</p>
            </div>
            <h2 className="mt-2 text-2xl font-bold">Adjacent Rooms</h2>
            <p className="mt-1 text-sm text-muted-foreground">Quick links for building out the next layer.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {relatedRooms.map((room) => (
            <Card key={room.href}>
              <CardHeader>
                <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-secondary text-accent">
                  <room.icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle>{room.title}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
