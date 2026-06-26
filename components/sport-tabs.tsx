import Link from "next/link";
import { sportPages } from "@/data/sport-pages";
import { cn } from "@/lib/utils";
import type { SportSlug } from "@/types/sports";

export function SportTabs({ activeSlug }: { activeSlug: SportSlug }) {
  return (
    <nav aria-label="Sport sections" className="touch-scroll overflow-x-auto pb-1">
      <div className="flex min-w-max gap-2">
        {sportPages.map((sport) => {
          const active = sport.slug === activeSlug;

          return (
            <Link
              key={sport.slug}
              href={sport.href}
              className={cn(
                "rounded-md border px-3 py-2 text-sm font-bold transition duration-200 active:scale-[0.98]",
                active
                  ? "border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "border-white/10 bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground",
              )}
            >
              {sport.title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
