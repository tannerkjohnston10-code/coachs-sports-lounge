"use client";

import { useMemo, useState } from "react";
import { CalendarDays, LayoutGrid, List, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { calendarEvents } from "@/data/mock-calendar";
import { cn } from "@/lib/utils";
import type { SportsCalendarEvent } from "@/types/calendar";

type CalendarView = "list" | "calendar";

export function SportsCalendar() {
  const [view, setView] = useState<CalendarView>("list");

  const groupedEvents = useMemo(() => {
    return calendarEvents.reduce<Record<string, SportsCalendarEvent[]>>((groups, event) => {
      groups[event.date] = [...(groups[event.date] ?? []), event];
      return groups;
    }, {});
  }, []);

  const sortedDates = Object.keys(groupedEvents).sort();

  return (
    <section className="grid gap-6">
      <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-card/85 p-4 shadow-xl shadow-black/20 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <div className="mb-2 flex items-center gap-2 text-accent">
            <CalendarDays className="size-4" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-wide">Schedule Controls</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight">Sports Calendar</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Mock dates for games, events, recruiting, championships, and lounge sessions.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:w-64">
          <ViewButton active={view === "list"} label="List" icon={List} onClick={() => setView("list")} />
          <ViewButton active={view === "calendar"} label="Calendar" icon={LayoutGrid} onClick={() => setView("calendar")} />
        </div>
      </div>

      {calendarEvents.length === 0 ? (
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center text-muted-foreground">
          No calendar events are scheduled yet.
        </div>
      ) : view === "list" ? (
        <div className="grid gap-4">
          {calendarEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sortedDates.map((date) => (
            <div key={date} className="premium-card-hover rounded-lg border border-white/10 bg-card/85 p-4 shadow-xl shadow-black/20">
              <p className="text-xs font-black uppercase tracking-wide text-accent">{formatDate(date)}</p>
              <div className="mt-4 grid gap-3">
                {groupedEvents[date].map((event) => (
                  <div key={event.id} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="rounded-md bg-accent px-2 py-1 text-[10px] font-black uppercase tracking-wide text-accent-foreground">
                        {event.category}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">{event.time}</span>
                    </div>
                    <h3 className="font-bold">{event.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{event.sport}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function EventCard({ event }: { event: SportsCalendarEvent }) {
  return (
    <article className="premium-card-hover rounded-lg border border-white/10 bg-card/85 p-5 shadow-xl shadow-black/20">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent px-2 py-1 text-[11px] font-black uppercase tracking-wide text-accent-foreground">
              {event.category}
            </span>
            <span className="rounded-md bg-white/[0.08] px-2 py-1 text-[11px] font-black uppercase tracking-wide text-muted-foreground">
              {event.sport}
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tight">{event.title}</h3>
          <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">{event.description}</p>
        </div>
        <div className="shrink-0 rounded-md border border-white/10 bg-white/[0.04] p-4 lg:w-52">
          <p className="font-black text-accent">{formatDate(event.date)}</p>
          <p className="mt-1 text-sm font-bold text-foreground">{event.time}</p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {event.location}
          </p>
        </div>
      </div>
    </article>
  );
}

function ViewButton({
  active,
  label,
  icon: Icon,
  onClick,
}: {
  active: boolean;
  label: string;
  icon: LucideIcon;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-bold transition active:scale-[0.98]",
        active
          ? "border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/20"
          : "border-white/10 bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground",
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
    </button>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
