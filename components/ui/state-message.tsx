import type { LucideIcon } from "lucide-react";
import { AlertCircle, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

export function StateMessage({
  title,
  description,
  icon: Icon = Inbox,
  tone = "neutral",
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  tone?: "neutral" | "error";
}) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 text-center shadow-xl shadow-black/10",
        tone === "error" ? "border-destructive/35 bg-destructive/10" : "border-white/10 bg-white/[0.04]",
      )}
    >
      <div
        className={cn(
          "mx-auto mb-3 flex size-10 items-center justify-center rounded-md",
          tone === "error" ? "bg-destructive/15 text-destructive" : "bg-accent/15 text-accent",
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}

export function ErrorState({ description }: { description: string }) {
  return <StateMessage title="Something needs attention" description={description} icon={AlertCircle} tone="error" />;
}
