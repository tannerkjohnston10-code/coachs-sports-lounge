import { SportPage } from "@/components/sport-page";
import { getSportPage } from "@/data/sport-pages";

export default function FootballPage() {
  const sport = getSportPage("football");

  return sport ? <SportPage sport={sport} /> : null;
}
