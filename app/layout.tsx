import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";

const parkinSans = Parkinsans({
  subsets: ["latin"],
  // weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoOneWay - Discover Amazing Tours & Travel Experiences",
  description:
    "Explore the world with our curated collection of tours and travel experiences. Find your next adventure today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(parkinSans.className, "!scroll-pt-[500px]")}>
        {children}
      </body>
    </html>
  );
}
