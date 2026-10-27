import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { stories } from "@/libs/content";

type Story = (typeof stories)[number];

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="min-w-0">
      <div className="overflow-hidden rounded-2xl shadow-[0_8px_16px_#29211c20]">
        <Image
          src={story.cover}
          alt={`${story.title} cover art`}
          width={214}
          height={330}
          className="aspect-107/165 w-full object-cover"
        />
      </div>
      <Badge
        className={`mt-4 rounded-sm px-1.5 py-0.5 text-[10px] uppercase tracking-wider ${story.tagColor}`}
      >
        {story.genre}
      </Badge>
      <h3 className="mt-2 font-display text-base font-bold leading-tight sm:text-lg">
        {story.title}
      </h3>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
        {story.author}
      </p>
    </article>
  );
}
