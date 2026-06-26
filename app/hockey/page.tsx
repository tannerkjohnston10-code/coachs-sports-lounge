import { SportPage } from "@/components/sport-page";
import { getSportPage } from "@/data/sport-pages";

export default function HockeyPage() {
  const sport = getSportPage("hockey");

  return sport ? <SportPage sport={sport} /> : null;
}
