import { SportPage } from "@/components/sport-page";
import { getSportPage } from "@/data/sport-pages";

export default function BaseballPage() {
  const sport = getSportPage("baseball");

  return sport ? <SportPage sport={sport} /> : null;
}
