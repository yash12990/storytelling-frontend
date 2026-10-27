import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ChartNoAxesCombined,
  CheckCircle2,
  MessageSquareText,
  Palette,
  PenLine,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { readerFeatures, writerFeatures } from "@/libs/content";

export function EcosystemSection() {
  return (
    <section id="community" className="bg-[#fffdfb] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[700px] text-center">
          <Badge className="border border-[#ffd2c5] bg-[#fff2ec] px-4 py-2 uppercase tracking-wider text-[#b63b21]">
            <Sparkles className="size-4" /> The dual ecosystem
          </Badge>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight lg:text-[44px]">
            Designed equally for storytellers
            <br className="hidden sm:block" /> &amp; obsessive readers
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#635a55] sm:text-base">
            No paywalled middlemen. No algorithmic dead ends. Real community
            that elevates original voices from first spark to signed franchise.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <WriterCard />
          <ReaderCard />
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[22px] border border-[#eee0d8] bg-[#fff8f4] px-5 py-4 text-xs sm:text-sm">
          <p className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0 text-primary"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="3"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="20"
                cy="8"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="19"
                cy="18"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="5"
                cy="18"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="4"
                cy="8"
                r="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 5v4M18.3 9.2l-4 1.8m3.2 5.7-3.8-3M6.8 16.5l3.5-3.1M5.8 9l4.1 2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <strong className="text-[#a7361d]">1.2M+ stories</strong> connected
            directly between creators and readers worldwide with zero
            algorithmic tollbooths.
          </p>
          <a
            href="#join"
            className="inline-flex items-center gap-2 font-semibold text-[#a7361d] hover:underline"
          >
            Explore Community Guidelines <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function WriterCard() {
  return (
    <Card
      id="for-writers"
      className="flex flex-col rounded-[32px] border-none bg-[linear-gradient(135deg,#403832,#322e30_70%,#40394f)] p-6 text-white shadow-[0_20px_40px_#332a2630] sm:p-9 lg:min-h-[820px] lg:p-11"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge className="bg-[#eee6ff] py-2 text-[#513681]">
          <PenLine className="size-4" /> For Writers &amp; Artists
        </Badge>
        <Badge className="bg-[#4d6051] py-2 text-[#9ce6b0]">
          <BadgeCheck className="size-4" /> 85% Creator Net Royalty
        </Badge>
      </div>
      <h3 className="mt-6 font-display text-3xl font-bold leading-tight lg:text-[34px]">
        From your first sentence to a signed adaptation.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
        Build a devoted chapter-by-chapter readership. Release serial novels,
        graphic webcomics, or lore anthologies with organic discovery and
        flexible paywalls.
      </p>
      <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4">
        <span className="flex size-11 items-center justify-center rounded-lg bg-primary text-white">
          <ChartNoAxesCombined className="size-6" />
        </span>
        <div className="flex-1 text-xs">
          <p className="font-semibold text-white/65">
            ACCARDI CHRONICLES · EP. 48{" "}
            <span className="rounded bg-[#4e8866] px-1.5 py-0.5 text-white">
              +34%
            </span>
          </p>
          <p className="mt-1 font-display text-lg font-bold">
            $14,820 Earned this month · Top 2%
          </p>
        </div>
        <ChartNoAxesCombined className="size-5 text-white/60" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {writerFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex min-h-28 gap-3 rounded-xl bg-white/10 p-4"
            >
              <Icon className="mt-0.5 size-5 shrink-0 text-[#e3d5ff]" />
              <div>
                <h4 className="text-sm font-bold">{feature.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
        <Button
          asChild
          className="rounded-full bg-[#d9c8ff] px-6 text-[#3e315c] hover:bg-[#c9b4ff]"
        >
          <a href="#join">
            Open Creator Studio <ArrowRight className="size-4" />
          </a>
        </Button>
        <p className="flex items-center gap-2 text-xs text-white/75">
          <CheckCircle2 className="size-4 text-[#8de9b0]" /> Free forever · Zero
          exclusivity
        </p>
      </div>
    </Card>
  );
}

function ReaderCard() {
  return (
    <Card className="flex flex-col rounded-[32px] border-[#f1dad5] bg-[linear-gradient(125deg,#fff_60%,#fbf7ff)] p-6 shadow-[0_16px_30px_#44282118] sm:p-9 lg:min-h-[820px] lg:p-11">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge className="bg-[#ffece5] py-2 text-[#9f3924]">
          <BookOpen className="size-4" /> For Avid Readers
        </Badge>
        <Badge className="border border-[#ffded2] bg-[#fff4ef] py-2 text-[#b33b24]">
          <BookOpen className="size-4" /> Infinite Free Chapters
        </Badge>
      </div>
      <h3 className="mt-6 font-display text-3xl font-bold leading-tight lg:text-[34px]">
        Better than streaming. Wilder than any book club.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[#625851] sm:text-base">
        Immerse yourself in original epics with distraction-free typography,
        instant offline synchronization on mobile, and margin commentary that
        lights up every scene.
      </p>
      <div className="mt-6 flex gap-3 rounded-xl border border-[#ecd8ce] bg-[#fff7f2] p-4">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#ffe4d8] text-primary">
          <MessageSquareText className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-[#8e5950]">
            Live chapter reaction <span className="text-primary">●</span>
          </p>
          <p className="mt-1 font-display text-base italic">
            “You were my favorite mistake, Captain.” 1,420 reactions
          </p>
        </div>
        <span className="self-end text-sm font-semibold text-[#ae3e24]">
          ♥ 348
        </span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {readerFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex min-h-28 gap-3 rounded-xl border border-[#eaded6] bg-[#faf3ee] p-4"
            >
              <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h4 className="text-sm font-bold">{feature.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-[#6d615a]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-[#f0e5dc] pt-7">
        <Button asChild className="rounded-full px-6 hover:bg-[#d9431f]">
          <a href="#trending">
            Browse Free Catalog <ArrowRight className="size-4" />
          </a>
        </Button>
        <p className="flex items-center gap-2 text-xs text-[#655b55]">
          <Palette className="size-4 text-primary" /> No credit card required
        </p>
      </div>
    </Card>
  );
}
