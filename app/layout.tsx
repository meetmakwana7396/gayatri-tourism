import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Parkinsans } from "next/font/google";
import Script from "next/script";

const parkinSans = Parkinsans({
  subsets: ["latin"],
  display: "swap",
});

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
    url: process.env.NEXT_PUBLIC_APP_URL,
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
  other: {
    "format-detection": "telephone=yes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: process.env.NEXT_PUBLIC_APP_URL,
  name: "Gayatri Taxi Service",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
    contactType: "Customer service",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(parkinSans.className, "!scroll-pt-[500px]")}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
