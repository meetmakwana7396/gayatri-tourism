import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";

const parkinSans = Parkinsans({
  subsets: ["latin"],
  // weight: ["400", "700"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "Gayatri Taxi Service",
//   description:
//     "Fast and reliable taxi service in the city. Book a taxi now and enjoy your ride.",
// };

export const metadata: Metadata = {
  title: "Gayatri Taxi Service",
  description:
    "Fast and reliable taxi service in the city. Book a taxi now and enjoy your ride.",
  keywords: [
    "Taxi",
    "Surat Taxi",
    "Ahemdabad Taxi",
    "Intercity Taxi",
    "Airport Taxi",
    "Best Taxi Service",
    "Cab",
    "Surat Cab",
  ],
  openGraph: {
    type: "website",
    url: "https://www.gooneway.in/",
    title: "Gayatri Taxi Service",
    description:
      "Fast and reliable taxi service in the city. Book a taxi now and enjoy your ride.",
    images: [
      {
        url: "/images/site-preview-img.png",
        alt: "Gayatri Taxi Service",
      },
    ],
  },
  twitter: {
    title: "Gayatri Taxi Service",
    description:
      "Fast and reliable taxi service in the city. Book a taxi now and enjoy your ride.",
    images: ["/images/site-preview-img.png"],
  },
  robots: "index, follow",
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
