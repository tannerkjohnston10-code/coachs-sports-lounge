import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://coachs-sports-lounge.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Coach's Sports Lounge",
  title: {
    default: "Coach's Sports Lounge",
    template: "%s | Coach's Sports Lounge",
  },
  description:
    "A premium sports-media command center for scores, news, transfer portal movement, coaching notes, and game-day planning.",
  keywords: [
    "sports dashboard",
    "coach lounge",
    "college sports",
    "transfer portal",
    "sports news",
    "scoreboard",
  ],
  authors: [{ name: "Coach's Sports Lounge" }],
  creator: "Coach's Sports Lounge",
  publisher: "Coach's Sports Lounge",
  category: "sports",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Coach's Sports Lounge",
    description:
      "Scores, stories, transfer portal movement, and coach-first sports dashboards for college and pro coverage.",
    url: "/",
    siteName: "Coach's Sports Lounge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Coach's Sports Lounge",
    description: "A premium sports-media dashboard built for coaches, fans, and staff-room operators.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          <main>{children}</main>
        </AppShell>
      </body>
    </html>
  );
}
