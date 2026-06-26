"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  Home,
  Menu,
  Newspaper,
  Search,
  Shield,
  Sofa,
  Trophy,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/nav-items";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScoreTicker } from "@/components/score-ticker";

type AppShellProps = {
  children: React.ReactNode;
};

const bottomNavItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "Scores", href: "/standings", icon: Trophy },
  { title: "News", href: "/rankings", icon: Newspaper },
  { title: "Calendar", href: "/calendar", icon: CalendarDays },
  { title: "Lounge", href: "/coaches-lounge", icon: Sofa },
];

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-y-0 left-0 z-50 hidden w-72 border-r border-white/10 bg-card/90 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block">
        <SidebarNav pathname={pathname} />
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="relative h-full w-[min(88vw,340px)] border-r border-white/10 bg-card shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <BrandMark />
              <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="size-5" aria-hidden="true" />
              </Button>
            </div>
            <SidebarNav pathname={pathname} onNavigate={() => setMenuOpen(false)} compact />
          </aside>
        </div>
      ) : null}

      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 shadow-lg shadow-black/10 backdrop-blur-xl">
          <ScoreTicker />
          <div className="flex h-14 items-center gap-3 px-3 sm:h-16 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </Button>
            <div className="min-w-0 lg:hidden">
              <BrandMark />
            </div>
            <div className="hidden min-w-0 flex-1 items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-muted-foreground transition focus-within:border-accent/40 hover:bg-white/[0.06] md:flex">
              <Search className="size-4 shrink-0" aria-hidden="true" />
              <span className="truncate">Search playbooks, boards, scouts, and staff notes</span>
            </div>
            <div className="ml-auto flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="size-5" aria-hidden="true" />
              </Button>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                <UserRound className="size-4" aria-hidden="true" />
                Staff Room
              </Button>
            </div>
          </div>
        </header>

        <div className="relative min-h-screen overflow-hidden">
          <div className="stadium-light pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_58px,rgba(255,255,255,0.035)_60px,transparent_62px)] opacity-60" />
          <div key={pathname} className="page-transition relative pb-24 lg:pb-0">
            {children}
            <SiteFooter />
          </div>
        </div>
      </div>
      <BottomNav pathname={pathname} hidden={menuOpen} />
    </div>
  );
}

function SidebarNav({
  pathname,
  onNavigate,
  compact = false,
}: {
  pathname: string;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className={cn("border-b border-white/10", compact ? "hidden" : "px-5 py-5")}>
        <BrandMark />
      </div>
      <div className="px-4 py-5">
        <div className="premium-card-hover rounded-lg border border-white/10 bg-white/[0.04] p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Shield className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold">Tonight&apos;s Board</p>
              <p className="text-xs text-muted-foreground">Film, installs, and lineup checks</p>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Primary navigation" className="touch-scroll flex-1 space-y-1 overflow-y-auto px-3 pb-3">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-bold transition duration-200",
                active
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 shadow-[inset_3px_0_0_hsl(var(--accent))]"
                  : "text-muted-foreground hover:translate-x-0.5 hover:bg-white/[0.06] hover:text-foreground",
              )}
            >
              <item.icon className="size-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate">{item.title}</span>
              <ChevronRight
                className={cn("size-4 opacity-0 transition group-hover:opacity-100", active && "opacity-100")}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-white/10 p-4">
        <div className="premium-card-hover rounded-lg border border-white/10 bg-[#15110d] p-4">
          <div className="mb-3 flex items-center gap-2 text-amber-300">
            <Sofa className="size-4" aria-hidden="true" />
            <p className="text-sm font-semibold">Lounge Mode</p>
          </div>
          <p className="text-xs leading-5 text-muted-foreground">
            Scout the next matchup, swap notes, and keep the staff aligned.
          </p>
        </div>
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground shadow-lg shadow-accent/20">
        <ClipboardList className="size-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-black uppercase tracking-wide">Coach&apos;s Sports Lounge</span>
        <span className="hidden truncate text-xs text-muted-foreground sm:block">Sports desk meets staff room</span>
      </span>
    </Link>
  );
}

function BottomNav({ pathname, hidden }: { pathname: string; hidden: boolean }) {
  return (
    <nav
      aria-label="Mobile bottom navigation"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-2xl shadow-black/50 backdrop-blur-xl transition lg:hidden",
        hidden && "translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
        {bottomNavItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-md px-1 text-[10px] font-black uppercase tracking-wide transition active:scale-95",
                active
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "text-muted-foreground hover:bg-white/[0.07] hover:text-foreground",
              )}
            >
              <item.icon className="size-4" aria-hidden="true" />
              <span className="truncate">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Coach&apos;s Sports Lounge</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <span>Film Room</span>
          <span>Staff Notes</span>
          <span>Game-Day Desk</span>
        </div>
      </div>
    </footer>
  );
}
