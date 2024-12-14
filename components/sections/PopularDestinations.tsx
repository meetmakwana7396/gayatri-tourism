"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Discover the magical sunsets and white architecture",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Experience tropical paradise and rich culture",
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Explore ancient Incan ruins and breathtaking mountains",
  }
];

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  height={256}
                  width={256}
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-lg">{destination.name}</h3>
                </div>
                <p className="text-gray-600">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}