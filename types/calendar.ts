export type CalendarEventCategory =
  | "Upcoming Game"
  | "Major Event"
  | "Rivalry Game"
  | "Championship"
  | "Recruiting"
  | "Coach Lounge";

export type SportsCalendarEvent = {
  id: string;
  title: string;
  category: CalendarEventCategory;
  sport: string;
  date: string;
  time: string;
  location: string;
  description: string;
};
