"use client";

import DestinationCard from "./destinations/destination-card";

const routes = [
  { from: "Surat", to: "Ahmedabad", bg: "/images/ahemdabad.jpeg" },
  { from: "Ahmedabad", to: "Vadodara", bg: "/images/vadodara1.jpeg" },
  { from: "Surat", to: "Mumbai", bg: "/images/mumbai.jpeg" },
  { from: "Surat", to: "Jaipur", bg: "/images/jaipur.jpeg" },
  { from: "Ahmedabad", to: "Udaipur", bg: "/images/udaipur.jpeg" },
  { from: "Surat", to: "Anand", bg: "/images/anand.jpeg" },
  { from: "Rajkot", to: "Surat", bg: "/images/surat.jpg" },
  { from: "Mehsana", to: "Surat", bg: "/images/mehsana.jpeg" },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20">
      <div className="container space-y-10">
        {/* <h2 className="text-4xl font-bold mb-12">Featured Destinations</h2> */}
        <h2 className="font-bold text-4xl">
          Featured{" "}
          <span className="after:block after:-mt-3.5 after:bg-yellow-500/60 after:w-full after:h-3 inline-block">
            <span className="relative text-black">Destinations</span>
          </span>
        </h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {routes.map((route, index) => (
            <DestinationCard key={index} destination={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
