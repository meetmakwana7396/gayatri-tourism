"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Discover whitewashed buildings and stunning sunsets",
    priceRange: "$1,200 - $2,500",
    image: "/images/destination-1.jpg",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    description: "Experience ancient temples and traditional culture",
    priceRange: "$2,000 - $3,500",
    image: "/images/destination-2.jpg",
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    description: "Explore the ancient Incan citadel",
    priceRange: "$1,800 - $3,000",
    image: "/images/destination-3.jpg",
  },
  {
    id: 4,
    name: "Maldives",
    description: "Relax in overwater bungalows in paradise",
    priceRange: "$3,000 - $5,000",
    image: "/images/destination-4.jpg",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group">
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold">{destination.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary font-medium">
                    {destination.priceRange}
                  </span>
                  <Button variant="outline" size="sm">
                    View Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
