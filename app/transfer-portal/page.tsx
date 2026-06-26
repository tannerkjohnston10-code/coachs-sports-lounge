import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  LineChart,
  PieChart,
  Radar,
  Shuffle,
  TrendingUp,
} from "lucide-react";
import {
  mostActivePrograms,
  positionBreakdowns,
  recentTransfers,
  teamPortalChanges,
  trendingTransfers,
} from "@/data/mock-transfer-portal";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { TransferMovement, TransferPlayer } from "@/types/transfer-portal";

const marketStats = [
  { label: "Portal Index", value: "842.7", change: "+4.8%", movement: "up" as const },
  { label: "Committed Today", value: "37", change: "+11", movement: "up" as const },
  { label: "Open Visits", value: "126", change: "+18", movement: "up" as const },
  { label: "Blue-Chip Supply", value: "61", change: "-3", movement: "down" as const },
];

export default function TransferPortalPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel stadium-light relative overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-accent to-red-600" />
        <div className="absolute right-8 top-8 hidden rounded-md border border-emerald-400/25 bg-black/30 px-4 py-3 shadow-2xl shadow-emerald-950/30 backdrop-blur lg:block">
          <p className="text-[10px] font-black uppercase tracking-wide text-muted-foreground">Market Status</p>
          <p className="mt-1 text-sm font-black text-emerald-300">Portal open / volatility high</p>
        </div>
        <div className="relative max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <LineChart className="size-3.5" aria-hidden="true" />
            Transfer Portal Command Center
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Roster Markets, Moving Fast</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            A stock-market style command board for tracking transfer momentum, team gains and losses, position
            scarcity, and the programs making the loudest moves.
          </p>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {marketStats.map((stat) => (
          <MarketStat key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <Card className="premium-card-hover overflow-hidden">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Shuffle className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Recent Transfers</span>
            </div>
            <CardTitle>Latest Roster Transactions</CardTitle>
            <CardDescription>Mock player movement board with rating, destination, and market direction.</CardDescription>
          </CardHeader>
          <CardContent>
            <TransferTable players={recentTransfers} />
          </CardContent>
        </Card>

        <Card className="premium-card-hover bg-[#101711]/90">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <TrendingUp className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Trending Transfers</span>
            </div>
            <CardTitle>Biggest Movers</CardTitle>
            <CardDescription>Names getting the most heat from staff rooms and visit boards.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {trendingTransfers.map((player) => (
              <TransferMover key={player.name} player={player} />
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="premium-card-hover overflow-hidden">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Building2 className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Team Gains / Losses</span>
            </div>
            <CardTitle>Program Net Movement</CardTitle>
            <CardDescription>Roster balance shown like a daily sector performance board.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {teamPortalChanges.map((team) => (
              <article key={team.program} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-black">{team.program}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      Gains {team.gains} / Losses {team.losses}
                    </p>
                  </div>
                  <TrendPill movement={team.movement} label={`${team.net > 0 ? "+" : ""}${team.net}`} />
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.08]">
                  <div
                    className={cn("h-full rounded-full", team.net >= 0 ? "bg-emerald-400" : "bg-red-500")}
                    style={{ width: `${Math.min(100, Math.abs(team.net) * 15 + 25)}%` }}
                  />
                </div>
                <p className={cn("mt-3 text-sm font-black", team.net >= 0 ? "text-emerald-300" : "text-red-300")}>
                  Impact score {team.impact}
                </p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card className="premium-card-hover">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <PieChart className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Position Breakdowns</span>
            </div>
            <CardTitle>Supply, Commitments, Demand</CardTitle>
            <CardDescription>Position groups ranked by scarcity pressure and staff demand.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {positionBreakdowns.map((position) => (
              <article key={position.position}>
                <div className="mb-2 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-black">{position.position}</h3>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {position.committed}/{position.entrants} committed
                    </p>
                  </div>
                  <p className="font-mono text-sm font-black text-accent">{position.demand}</p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                  <div className="h-full rounded-full bg-accent" style={{ width: `${position.demand}%` }} />
                </div>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="premium-card-hover overflow-hidden">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Radar className="size-4" aria-hidden="true" />
              <span className="text-xs font-black uppercase tracking-wide">Most Active Programs</span>
            </div>
            <CardTitle>Portal Volume Leaders</CardTitle>
            <CardDescription>Which staffs are working the board hardest right now.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {mostActivePrograms.map((program) => (
              <article key={program.program} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black">{program.program}</h3>
                  <span
                    className={cn(
                      "rounded-md px-2 py-1 text-[10px] font-black uppercase tracking-wide",
                      program.heat === "High"
                        ? "bg-red-600 text-white"
                        : program.heat === "Rising"
                          ? "bg-emerald-500 text-emerald-950"
                          : "bg-accent text-accent-foreground",
                    )}
                  >
                    {program.heat}
                  </span>
                </div>
                <p className="mt-4 font-mono text-4xl font-black text-foreground">{program.volume}</p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  <span>Offers {program.offers}</span>
                  <span>Visits {program.visits}</span>
                </div>
              </article>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function MarketStat({
  label,
  value,
  change,
  movement,
}: {
  label: string;
  value: string;
  change: string;
  movement: TransferMovement;
}) {
  return (
    <div className="premium-card-hover rounded-lg border border-white/10 bg-card/85 p-4 shadow-xl shadow-black/20 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">{label}</p>
        <Activity className="size-4 text-accent" aria-hidden="true" />
      </div>
      <p className="mt-3 font-mono text-3xl font-black">{value}</p>
      <TrendPill movement={movement} label={change} className="mt-3" />
    </div>
  );
}

function TransferTable({ players }: { players: TransferPlayer[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-white/10">
      <div className="hidden md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.06] text-xs font-black uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3">Player</th>
              <th className="px-4 py-3">Move</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Market</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.name} className="border-t border-white/10 transition hover:bg-white/[0.05]">
                <td className="px-4 py-3">
                  <p className="font-black">{player.name}</p>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{player.position}</p>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {player.from} <span className="text-accent">-&gt;</span> {player.to}
                </td>
                <td className="px-4 py-3 font-mono font-black text-foreground">{player.rating}</td>
                <td className="px-4 py-3">
                  <TrendPill movement={player.trend} label={player.marketValue} />
                </td>
                <td className="px-4 py-3 text-xs font-black uppercase tracking-wide text-accent">{player.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-0 md:hidden">
        {players.map((player) => (
          <article key={player.name} className="border-t border-white/10 p-4 first:border-t-0">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-black">{player.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {player.position} / {player.status}
                </p>
              </div>
              <TrendPill movement={player.trend} label={player.marketValue} />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {player.from} <span className="text-accent">-&gt;</span> {player.to}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function TransferMover({ player }: { player: TransferPlayer }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-black">{player.name}</h3>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {player.position} / {player.from}
          </p>
        </div>
        <TrendPill movement={player.trend} label={player.marketValue} />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-sm">
        <span className="text-muted-foreground">Projected desk</span>
        <span className="font-black text-accent">{player.to}</span>
      </div>
    </article>
  );
}

function TrendPill({
  movement,
  label,
  className,
}: {
  movement: TransferMovement;
  label: string;
  className?: string;
}) {
  const positive = movement === "up";
  const negative = movement === "down";

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-1 rounded-md px-2 py-1 font-mono text-xs font-black",
        positive && "bg-emerald-500/15 text-emerald-300",
        negative && "bg-red-500/15 text-red-300",
        movement === "flat" && "bg-white/[0.08] text-muted-foreground",
        className,
      )}
    >
      {positive ? (
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      ) : negative ? (
        <ArrowDownRight className="size-3.5" aria-hidden="true" />
      ) : (
        <BarChart3 className="size-3.5" aria-hidden="true" />
      )}
      {label}
    </span>
  );
}
