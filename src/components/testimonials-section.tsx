import Image from "next/image";
import { Heart, Reply } from "lucide-react";

import { Card } from "@/components/ui/card";
import { testimonials } from "@/libs/content";

export function TestimonialsSection() {
  return (
    <section className="bg-[#fff8f4] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <p className="text-xs font-bold uppercase tracking-wider text-[#aa3a23]">
          Fandom in motion
        </p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight lg:text-[40px]">
              The comments section you can’t look away from
            </h2>
            <p className="mt-2 text-sm text-[#655c56] sm:text-base">
              Where every line of prose generates its own viral sub-fandom.
            </p>
          </div>
          <p className="text-xs font-semibold text-[#685e58]">
            <span className="text-emerald-500">●</span> 1,840 comments left in
            the last 10 minutes
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="flex h-full flex-col border-[#f3ece6] p-5 shadow-sm sm:p-6"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold">{testimonial.name}</p>
                  <p className="truncate text-xs text-[#6e7977]">
                    ✧ {testimonial.role}
                  </p>
                </div>
                <span
                  className="text-2xl tracking-[-0.09em] text-[#ee8e14]"
                  aria-label="5 stars"
                >
                  ★★★★★
                </span>
              </div>
              <blockquote className="mt-4 rounded-lg bg-[#f8f4f1] px-3 py-3 font-display text-sm italic leading-snug text-[#534943]">
                “{testimonial.quote}”
                {testimonial.chapter && (
                  <span className="mt-1 block">{testimonial.chapter}</span>
                )}
              </blockquote>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#38312e]">
                “{testimonial.comment}”
              </p>
              <div className="mt-8 flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-[#ae3821]">
                  On: {testimonial.story}
                </span>
                <span className="flex items-center gap-3 text-[#65564e]">
                  <span className="inline-flex items-center gap-1">
                    <Heart className="size-4 fill-current" />{" "}
                    {testimonial.likes}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Reply className="size-4" /> {testimonial.replies}
                  </span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
