import { SportPage } from "@/components/sport-page";
import { getSportPage } from "@/data/sport-pages";

export default function SoccerPage() {
  const sport = getSportPage("soccer");

  return sport ? <SportPage sport={sport} /> : null;
}
