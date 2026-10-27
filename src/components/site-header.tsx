import { ChevronDown, Feather } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Brand() {
  return (
    <a
      href="#top"
      className="inline-flex items-center gap-2 font-display text-2xl font-bold text-[#9d2f1b]"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className="size-8 shrink-0 text-primary"
        aria-hidden="true"
      >
        <path
          d="M5 24.5C8.2 9.8 11.2 7 13.2 8.2c2.1 1.3-3 12.2-1.2 15.2 1.7 2.8 5.5-8.6 9.6-13.5 1.2-1.4 2.4-1.9 3.1-1.2 1.2 1.3-3.2 11.3-1.7 13.6 1 1.5 3.4-.4 4.7-3"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Novlance</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-[#f5ebe6] bg-background/95">
      <div className="mx-auto flex h-20 max-w-420 items-center justify-between px-6 sm:px-10 lg:h-24 lg:px-12 2xl:h-28 2xl:px-14">
        <div className="flex items-center gap-6 lg:gap-10">
          <Brand />
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-3 text-sm font-semibold lg:text-base 2xl:text-lg"
          >
            <details className="group relative">
              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full bg-[#f7efeb] px-5 py-1.5 text-[#9f3b29] [&::-webkit-details-marker]:hidden">
                Browse{" "}
                <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-0 top-full mt-2 w-44 rounded-xl border border-border bg-white p-2 shadow-xl">
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-accent"
                  href="#trending"
                >
                  Trending stories
                </a>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-accent"
                  href="#genres"
                >
                  Explore genres
                </a>
                <a
                  className="block rounded-lg px-3 py-2 hover:bg-accent"
                  href="#community"
                >
                  Community
                </a>
              </div>
            </details>
            <a
              className="hidden px-2 py-2 hover:text-primary sm:inline"
              href="#for-writers"
            >
              Write
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 2xl:gap-10">
          <a
            className="hidden text-sm font-semibold hover:text-primary sm:inline 2xl:text-base"
            href="#join"
          >
            Log in
          </a>
          <Button
            asChild
            className="h-9 rounded-full px-5 text-xs font-bold shadow-sm hover:bg-[#d9431f] sm:h-10 sm:px-7 2xl:h-11 2xl:min-w-30 2xl:text-sm"
          >
            <a href="#join">
              <Feather className="mr-1 size-3.5 sm:hidden" />
              Sign up
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
