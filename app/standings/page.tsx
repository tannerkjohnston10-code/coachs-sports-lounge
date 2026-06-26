import { ListOrdered, Table2 } from "lucide-react";
import { standingsTables } from "@/data/mock-standings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { StandingsTable } from "@/types/standings";

export default function StandingsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <Table2 className="size-3.5" aria-hidden="true" />
            Standings
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Pro Standings & Soccer Tables</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Mock NFL, NBA, MLB, NHL, and soccer tables with compact responsive cards for mobile and full tables
            for larger screens.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        {standingsTables.map((table) => (
          <StandingsCard key={table.title} table={table} />
        ))}
      </section>
    </div>
  );
}

function StandingsCard({ table }: { table: StandingsTable }) {
  return (
    <Card className="premium-card-hover overflow-hidden">
      <CardHeader>
        <div className="mb-2 flex items-center gap-2 text-accent">
          <ListOrdered className="size-4" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wide">Mock Table</span>
        </div>
        <CardTitle>{table.title}</CardTitle>
        <CardDescription>{table.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="hidden overflow-hidden rounded-md border border-white/10 md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.06] text-xs font-black uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Team</th>
                <th className="px-4 py-3">Record</th>
                <th className="px-4 py-3">Pct/Pts</th>
                <th className="px-4 py-3">GB</th>
                <th className="px-4 py-3">Streak</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={`${table.title}-${row.team}`} className="border-t border-white/10 transition hover:bg-white/[0.05]">
                  <td className="px-4 py-3 font-bold">{row.team}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.record}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.pct}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.gb}</td>
                  <td className="px-4 py-3 font-bold text-accent">{row.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 md:hidden">
          {table.rows.map((row) => (
            <article key={`${table.title}-${row.team}`} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold">{row.team}</h3>
                <span className="rounded-md bg-accent px-2 py-1 text-xs font-black uppercase tracking-wide text-accent-foreground">
                  {row.streak}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                <span>{row.record}</span>
                <span>{row.pct}</span>
                <span>GB {row.gb}</span>
              </div>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
