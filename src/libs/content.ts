import {
  ChartNoAxesCombined,
  Clapperboard,
  Coins,
  Download,
  Eye,
  Heart,
  MessageSquareText,
} from "lucide-react";

export const stories = [
  {
    title: "Crown of Obsidian",
    author: "Evelyn Vance",
    genre: "Romantasy",
    cover: "/images/crown-of-obsidian.webp",
    tagColor: "bg-rose-100 text-rose-800",
  },
  {
    title: "Behind The Limelight",
    author: "Kara Flynn & Studio 9",
    genre: "Webcomic",
    cover: "/images/behind-the-limelight.webp",
    tagColor: "bg-violet-100 text-violet-800",
  },
  {
    title: "Constantine: Blood Oath",
    author: "Zahra Sarwar",
    genre: "Dark Romance",
    cover: "/images/constantine-blood-oath.webp",
    tagColor: "bg-rose-100 text-rose-800",
  },
  {
    title: "Silicon Requiem",
    author: "Ren Takahashi",
    genre: "Cyberpunk Sci-Fi",
    cover: "/images/silicon-requiem.webp",
    tagColor: "bg-teal-100 text-teal-800",
  },
  {
    title: "Forgotten Wolf",
    author: "Fiona MacLeod",
    genre: "Paranormal",
    cover: "/images/forgotten-wolf.webp",
    tagColor: "bg-slate-200 text-slate-800",
  },
  {
    title: "Bite Me: Opposites Detest",
    author: "Alicia Wallace",
    genre: "Rom-Com",
    cover: "/images/bite-me.webp",
    tagColor: "bg-amber-100 text-amber-800",
  },
] as const;

export const genres = [
  {
    name: "Romance",
    count: "142k titles",
    image: "/images/genre-romance.webp",
  },
  {
    name: "Fantasy & Lore",
    count: "98k titles",
    image: "/images/genre-fantasy.webp",
  },
  {
    name: "Werewolf & Pack",
    count: "84k titles",
    image: "/images/genre-werewolf.webp",
  },
  {
    name: "Webcomics",
    count: "36k series",
    image: "/images/genre-webcomics.webp",
  },
  {
    name: "Queer Fiction",
    count: "61k titles",
    image: "/images/genre-queer.webp",
  },
  {
    name: "Sci-Fi & Cyber",
    count: "42k titles",
    image: "/images/genre-scifi.webp",
  },
] as const;

export const writerFeatures = [
  {
    icon: Coins,
    title: "Monetize Day 1",
    description: "Early access chapter unlocks and recurring patron tiers.",
  },
  {
    icon: MessageSquareText,
    title: "Inline Margin Notes",
    description: "Watch readers react to plot twists on the exact sentence.",
  },
  {
    icon: Clapperboard,
    title: "Studio Scouting",
    description:
      "Direct pipeline into print deals, webtoons, and film options.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Cliffhanger Retention",
    description:
      "Deep analytics uncovering read-through drops and climax heat.",
  },
] as const;

export const readerFeatures = [
  {
    icon: Eye,
    title: "Sensory E-Reader",
    description:
      "Parchment glow, midnight contrast, serif kerning & bionic speed font.",
  },
  {
    icon: MessageSquareText,
    title: "Paragraph Reactions",
    description:
      "Tap any prose paragraph to see live reader theories and art sketches.",
  },
  {
    icon: Heart,
    title: "Direct Author Tipping",
    description:
      "Send espresso tips or unlock special author drafts with zero middleman fee.",
  },
  {
    icon: Download,
    title: "Offline Vault Shelves",
    description:
      "Download 200+ chapters for underground commute or cabin weekends.",
  },
] as const;

export const testimonials = [
  {
    name: "Elena Ross",
    role: "Verified Reader · 420 badges",
    avatar: "/images/avatar-elena.webp",
    quote: "You think I fear the fire? Darling, I was forged in the furnace.",
    chapter: "— Chapter 28",
    comment:
      "I threw my phone across the bed! The chemistry between Vane and Cassandra is unparalleled. I stayed awake until 4 AM reading this entire arc!",
    story: "The Ashen Throne",
    likes: "894",
    replies: "54",
  },
  {
    name: "Liam Sterling",
    role: "Webcomic Patron",
    avatar: "/images/avatar-liam.webp",
    quote:
      "Panel 12: The lighting on the mech engine alone deserves an Eisner Award.",
    chapter: "",
    comment:
      "Webtoon pacing done right. The scroll animation in the app gives me chills every Sunday night update. Best sci-fi serialized on any platform right now.",
    story: "Iron Meridian",
    likes: "1,240",
    replies: "112",
  },
  {
    name: "Maya Chen",
    role: "Beta Reader",
    avatar: "/images/avatar-maya.webp",
    quote:
      "He checked his pocket watch. Three minutes until the eclipse, Doctor.",
    chapter: "",
    comment:
      "I started reading Novlance because of BookTok and haven’t watched television in three weeks. The author responds directly to comments in the margins!",
    story: "Clockwork Sovereign",
    likes: "670",
    replies: "38",
  },
] as const;
