import { Badge } from "@/components/ui/badge";
import { StoryCard } from "@/components/story-card";
import { stories } from "@/libs/content";

export function TrendingSection() {
  return (
    <section id="trending" className="bg-[#fffaf7] py-16 lg:pb-24 lg:pt-18">
      <div className="mx-auto `max-w-360 px-6 sm:px-10 lg:px-12">
        <Badge className="bg-[#ffede7] uppercase tracking-wider text-[#c2472c]">
          ● Updated hourly
        </Badge>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight lg:text-[42px]">
          Trending Now on Novlance
        </h2>
        <p className="mt-3 border-b border-[#f0e7e0] pb-8 text-sm text-[#665d59] sm:text-base">
          The breakout serials, comics, and stories captivating hundreds of
          thousands today.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-5">
          {stories.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
