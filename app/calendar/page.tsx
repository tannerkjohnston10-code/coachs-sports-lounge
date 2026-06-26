import { CalendarDays } from "lucide-react";
import { SportsCalendar } from "@/components/sports-calendar";

export default function CalendarPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="media-panel relative overflow-hidden rounded-lg p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-accent to-primary" />
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-wide text-accent">
            <CalendarDays className="size-3.5" aria-hidden="true" />
            Calendar
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Sports Calendar</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            Upcoming games, major events, rivalry dates, championships, recruiting windows, and Coach Lounge
            events in one planning board.
          </p>
        </div>
      </section>

      <SportsCalendar />
    </div>
  );
}
