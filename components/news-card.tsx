import Link from "next/link";
import { ExternalLink, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { NewsItem } from "@/types/news";

export function NewsCard({
  item,
  saved,
  onToggleSave,
}: {
  item: NewsItem;
  saved: boolean;
  onToggleSave: (id: string) => void;
}) {
  return (
    <Card className="premium-card-hover group overflow-hidden">
      <CardHeader className="p-4 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-wide sm:mb-3 sm:text-[11px]">
          <span className="rounded-md bg-accent px-2 py-1 text-accent-foreground">{item.sport}</span>
          <span
            className={cn(
              "rounded-md px-2 py-1",
              item.level === "College" ? "bg-primary text-primary-foreground" : "bg-white/[0.08] text-foreground",
            )}
          >
            {item.level}
          </span>
          <span className="ml-auto text-muted-foreground">{item.publishedAt}</span>
        </div>
        <CardTitle className="text-base leading-6 group-hover:text-accent sm:text-xl sm:leading-7">{item.headline}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
        <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">{item.source}</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-3 sm:text-base sm:leading-7">{item.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
          <Button type="button" variant={saved ? "secondary" : "outline"} size="sm" onClick={() => onToggleSave(item.id)}>
            <Bookmark className="size-4" aria-hidden="true" />
            {saved ? "Saved" : "Save"}
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href={item.url} target="_blank" rel="noreferrer">
              <ExternalLink className="size-4" aria-hidden="true" />
              Open
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
