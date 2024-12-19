import "./globals.css";
import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";

const hostGrotesk = Parkinsans({
  subsets: ["latin"],
  // weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gayatri Tourism - Discover Amazing Tours & Travel Experiences",
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
      <body className={hostGrotesk.className}>{children}</body>
    </html>
  );
}
