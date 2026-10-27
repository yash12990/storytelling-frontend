import Image from "next/image";
import { ArrowRight, BookOpen, PenLine } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="hero-wash relative overflow-hidden">
      <HeroDecorations />
      <div className="relative mx-auto grid min-h-148 max-w-420 items-center gap-10 px-6 py-16 sm:px-10 lg:min-h-185 lg:grid-cols-5 lg:px-12 lg:py-15 2xl:flex 2xl:min-h-221">
        <div className="max-w-190 lg:col-span-3">
          <Badge className="mb-8 border border-primary/20 bg-accent px-4 py-2 text-sm text-accent-foreground uppercase tracking-wider">
            <BookOpen className="size-4" /> The next era of serial fiction
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-foreground sm:text-6xl xl:text-7xl">
            Where imagination{" "}
            <em className="font-normal text-accent-foreground underline decoration-2 underline-offset-8">
              unfolds
            </em>{" "}
            into universes.
          </h1>
          <p className="mt-10 max-w-190 text-base leading-normal text-foreground/85 sm:text-lg 2xl:text-2xl">
            The premier home for serialized sagas, original webcomics, and
            interactive lore. Devour cliffhangers, connect with readers, and
            fund original art.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Button
              asChild
              className="hero-primary-button h-14 rounded-full px-7 text-base font-bold sm:h-16 sm:px-9 2xl:min-w-75"
            >
              <a href="#trending">
                Start Reading Free <ArrowRight className="size-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-full border-input bg-white px-7 text-base font-semibold text-foreground shadow-sm hover:bg-accent sm:h-16 sm:px-9 2xl:min-w-65"
            >
              <a href="#for-writers">
                <PenLine className="size-5 text-primary" /> Write on Novlance
              </a>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-full max-w-136 lg:col-span-2 lg:justify-self-end 2xl:absolute 2xl:right-12 2xl:top-12 2xl:w-152 2xl:max-w-none">
          <Image
            src="/images/hero-feature.png"
            alt="Illustration of Novlance readers discussing a new chapter"
            width={608}
            height={767}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

function HeroDecorations() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-primary/20"
      viewBox="0 0 1660 886"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-30 228C220 100 510 310 800 300s520-180 900-80"
        stroke="currentColor"
        strokeDasharray="5 8"
      />
      <path
        d="M-20 680c260-140 390-350 720-250s560 240 1000-50"
        stroke="currentColor"
        strokeDasharray="5 8"
      />
      <path
        d="M130 835c300-20 480-260 760-292s480 120 780-5"
        stroke="currentColor"
        strokeDasharray="5 8"
      />
      <path
        d="M88 187c55-25 103-18 151 6 48-24 96-31 151-6v55c-53-26-101-21-151 4-50-25-98-30-151-4zM239 193v53"
        stroke="currentColor"
        opacity=".6"
      />
      <path
        d="m945 98 38-26-20 66-15 25-25-15 22-50zm38-26-35 76"
        stroke="currentColor"
        opacity=".8"
      />
      <circle cx="690" cy="768" r="34" stroke="currentColor" />
      <path
        d="M663 777c22-32 46-34 59-16M665 786c22 15 41 11 57-4"
        stroke="currentColor"
      />
      <path
        d="M552 244v24m-12-12h24M216 573v22m-11-11h22M646 408v18m-9-9h18"
        stroke="currentColor"
      />
      <circle cx="273" cy="141" r="3" fill="currentColor" />
      <circle cx="970" cy="582" r="3" fill="currentColor" />
    </svg>
  );
}
