import { AtSign, PenLine } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CreatorSection() {
  return (
    <section
      id="join"
      className="bg-[#fffaf7] px-6 py-20 sm:px-10 lg:px-12 lg:pb-[148px] lg:pt-[72px]"
    >
      <div className="creator-gradient mx-auto max-w-[1344px] rounded-[28px] px-7 py-14 text-white shadow-[0_24px_42px_#7e332033] sm:px-12 lg:px-20 lg:py-20">
        <Badge className="bg-white/20 py-2 text-white">
          <PenLine className="size-4" /> Novlance Annual Story Grants Open
        </Badge>
        <h2 className="mt-5 max-w-[800px] font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[64px]">
          Have an untold story living in your drafts?
        </h2>
        <p className="mt-7 max-w-[680px] text-base leading-relaxed text-white/95 sm:text-lg">
          Claim your creator handle today. Publish your opening prologue in
          under three minutes and connect with readers waiting for your exact
          world.
        </p>
        <div className="mt-7 flex max-w-[660px] flex-col gap-2 sm:flex-row">
          <label
            className="flex flex-1 items-center gap-2 rounded-full bg-white px-4 text-[#9a5b4f]"
            htmlFor="creator-email"
          >
            <AtSign className="size-5 shrink-0" />
            <Input
              id="creator-email"
              type="email"
              placeholder="Enter your email to claim handle..."
              className="h-12 flex-1 border-0 bg-transparent px-0 text-[#362d2a] focus-visible:ring-0"
            />
          </label>
          <Button
            type="button"
            className="h-12 rounded-full bg-[#3f3b3a] px-7 text-sm font-bold hover:bg-[#272423]"
          >
            Join as Creator
          </Button>
        </div>
        <p className="mt-4 text-xs font-medium text-white/85">
          By joining, you agree to the Novlance Creator Charter · 100% IP
          ownership retained by you always.
        </p>
      </div>
    </section>
  );
}
