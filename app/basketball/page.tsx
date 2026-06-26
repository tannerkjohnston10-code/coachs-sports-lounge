import { SportPage } from "@/components/sport-page";
import { getSportPage } from "@/data/sport-pages";

export default function BasketballPage() {
  const sport = getSportPage("basketball");

  return sport ? <SportPage sport={sport} /> : null;
}
