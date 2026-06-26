import {
  CircleDot,
  CalendarDays,
  Flame,
  Goal,
  GraduationCap,
  Home,
  Landmark,
  LifeBuoy,
  ListOrdered,
  Medal,
  Settings,
  ShieldCheck,
  Shuffle,
  Trophy,
  Waves,
} from "lucide-react";
import type { NavItem } from "@/types/navigation";

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Dashboard overview and daily coaching priorities.",
    icon: Home,
  },
  {
    title: "Football",
    href: "/football",
    description: "Playbooks, scouting sheets, and weekly installs.",
    icon: ShieldCheck,
  },
  {
    title: "Basketball",
    href: "/basketball",
    description: "Rotations, shot charts, sets, and practice plans.",
    icon: Trophy,
  },
  {
    title: "Baseball",
    href: "/baseball",
    description: "Lineups, bullpen notes, signs, and player development.",
    icon: CircleDot,
  },
  {
    title: "Hockey",
    href: "/hockey",
    description: "Lines, special teams, drills, and opponent prep.",
    icon: Waves,
  },
  {
    title: "Soccer",
    href: "/soccer",
    description: "Formations, match models, sessions, and film notes.",
    icon: Goal,
  },
  {
    title: "Track & Field",
    href: "/track",
    description: "Meet planning, event groups, splits, and training cycles.",
    icon: Flame,
  },
  {
    title: "College Hub",
    href: "/college-hub",
    description: "Recruiting, compliance, schedules, and campus workflows.",
    icon: GraduationCap,
  },
  {
    title: "Transfer Portal",
    href: "/transfer-portal",
    description: "Roster movement, transfer trends, and active program boards.",
    icon: Shuffle,
  },
  {
    title: "Pro Hub",
    href: "/pro-hub",
    description: "Roster management, analytics, travel, and pro operations.",
    icon: Landmark,
  },
  {
    title: "Rankings",
    href: "/rankings",
    description: "College football and basketball ranking boards.",
    icon: Medal,
  },
  {
    title: "Standings",
    href: "/standings",
    description: "NFL, NBA, MLB, NHL, and soccer tables.",
    icon: ListOrdered,
  },
  {
    title: "Calendar",
    href: "/calendar",
    description: "Games, events, recruiting dates, and lounge sessions.",
    icon: CalendarDays,
  },
  {
    title: "Coaches Lounge",
    href: "/coaches-lounge",
    description: "Community discussions, shared notes, and staff resources.",
    icon: LifeBuoy,
  },
  {
    title: "Settings",
    href: "/settings",
    description: "Profile, preferences, notifications, and workspace setup.",
    icon: Settings,
  },
];

export const quickStats = [
  { label: "Sports Rooms", value: "6" },
  { label: "Hubs", value: "2" },
  { label: "Staff Spaces", value: "1" },
  { label: "Setup", value: "Ready" },
];

export const featuredActions = [
  "Build weekly practice plan",
  "Review opponent notes",
  "Sync staff priorities",
  "Prep game-day checklist",
];
