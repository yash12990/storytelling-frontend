"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { genres } from "@/libs/content";

export function GenreSection() {
  const [query, setQuery] = useState("");
  const visibleGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section id="genres" className="bg-[#fff8f4] py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 sm:px-10 lg:grid-cols-[0.83fr_1.17fr] lg:gap-12 lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#685397]">
            Infinite variety
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight lg:text-5xl">
            All the genres.
            <br />
            All the tropes.
            <br />
            <em className="font-normal text-[#b33b27]">All you.</em>
          </h2>
          <p className="mt-6 max-w-[540px] text-sm leading-relaxed text-[#514b49] sm:text-base">
            Whether you want slow-burn rivals running space colonies, cozy
            werewolf pack dynamics, or high-stakes cyberpunk heists — find your
            exact wavelength. We never judge.
          </p>
          <div className="mt-7 flex max-w-[520px] items-center rounded-full border border-[#eee4dc] bg-white px-4 shadow-sm">
            <Search className="size-5 shrink-0 text-primary" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="grumpy x sunshine"
              aria-label="Search genres"
              className="h-11 flex-1 border-0 bg-transparent px-3 shadow-none focus-visible:ring-0"
            />
            <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white">
              {query ? `${visibleGenres.length} genres` : "4,210 stories"}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {visibleGenres.map((genre) => (
            <Card
              key={genre.name}
              className="flex min-h-20 items-center gap-3 border-none bg-[#f7f0ec] p-3 shadow-none sm:p-4"
            >
              <Image
                src={genre.image}
                alt=""
                width={54}
                height={54}
                className="size-12 shrink-0 rounded-lg object-cover"
              />
              <div className="min-w-0">
                <h3 className="font-display text-sm font-bold leading-tight sm:text-base">
                  {genre.name}
                </h3>
                <p className="mt-1 text-xs text-[#6e6661]">{genre.count}</p>
              </div>
            </Card>
          ))}
          {visibleGenres.length === 0 && (
            <p className="col-span-full rounded-xl bg-white p-6 text-sm text-muted-foreground">
              No genres found. Try another search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
