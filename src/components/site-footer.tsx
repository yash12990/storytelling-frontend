import { Globe2, MessageSquareText } from "lucide-react";

import { Brand } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#f2e6dd] bg-[#fffaf7]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-10">
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#716761]">
          <Brand />
          <span className="text-[#e6a998]">✧</span>
          <span>© 2026 Novlance Publishing Co. All rights reserved.</span>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-[#4d433e]"
        >
          <a href="#community" className="hover:text-primary">
            About
          </a>
          <a href="#trending" className="hover:text-primary">
            Discover
          </a>
          <a href="#for-writers" className="hover:text-primary">
            Write
          </a>
          <a href="#join" className="hover:text-primary">
            Terms
          </a>
          <a href="#join" className="hover:text-primary">
            Privacy
          </a>
          <a href="#join" className="hover:text-primary">
            Help
          </a>
        </nav>
        <div className="flex items-center gap-3 text-[#554943]">
          <Globe2 className="size-5" />
          <MessageSquareText className="size-5" />
        </div>
      </div>
    </footer>
  );
}
