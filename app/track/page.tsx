import { SportPage } from "@/components/sport-page";
import { getSportPage } from "@/data/sport-pages";

export default function TrackPage() {
  const sport = getSportPage("track");

  return sport ? <SportPage sport={sport} /> : null;
}
