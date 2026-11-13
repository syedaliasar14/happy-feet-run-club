import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SeasonTabsProps = {
  seasons: { _key: string; season: string | null }[];
  selectedKey: string | null | undefined;
};

export function SeasonTabs({ seasons, selectedKey }: SeasonTabsProps) {
  if (!seasons.length) return null;

  return (
    <nav aria-label="Seasons" className="flex flex-row gap-2 overflow-x-auto pb-2">
      {seasons.map((season) => {
        const selected = season._key === selectedKey;
        return (
          <Link
            key={season._key}
            href={`/gallery?season=${encodeURIComponent(season._key)}`}
            scroll={false}
            aria-current={selected ? "page" : undefined}
            className={cn(buttonVariants({ variant: selected ? "default" : "outline" }))}
          >
            {season.season}
          </Link>
        );
      })}
    </nav>
  );
}
