import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Novlance — Stories worth staying up for",
  description:
    "Discover original serial fiction, webcomics, and a community built for readers and storytellers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
