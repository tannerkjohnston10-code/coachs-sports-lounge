import { BarChart3, Medal } from "lucide-react";
import { rankingTables } from "@/data/mock-standings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { RankingTable } from "@/types/standings";

export default function RankingsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <Medal className="size-3.5" aria-hidden="true" />
            Rankings
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">College Rankings Board</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Mock college football and college basketball rankings built for quick scanning, staff debates, and
            future API integration.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        {rankingTables.map((table) => (
          <RankingCard key={table.title} table={table} />
        ))}
      </section>
    </div>
  );
}

function RankingCard({ table }: { table: RankingTable }) {
  return (
    <Card className="premium-card-hover overflow-hidden">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <BarChart3 className="size-4" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wide">Mock Rankings</span>
        </div>
        <CardTitle>{table.title}</CardTitle>
        <CardDescription>{table.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {table.rows.map((row) => (
            <article key={`${table.title}-${row.rank}`} className="rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-accent/30 hover:bg-white/[0.07]">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-lg font-black text-accent-foreground">
                  {row.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold">{row.team}</h3>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide">
                      <span className="text-muted-foreground">{row.record}</span>
                      <span className="rounded-md bg-white/[0.08] px-2 py-1 text-accent">{row.movement}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{row.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
