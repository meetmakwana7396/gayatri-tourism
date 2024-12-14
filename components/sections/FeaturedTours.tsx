"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import Image from "next/image";

const tours = [
  {
    id: 1,
    title: "Mediterranean Cruise",
    duration: "7 Days",
    groupSize: "Up to 20",
    rating: 4.9,
    price: 1299,
    image: "https://images.unsplash.com/photo-1566375638555-f04392189a48"
  },
  {
    id: 2,
    title: "African Safari",
    duration: "5 Days",
    groupSize: "Up to 12",
    rating: 4.8,
    price: 1599,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
  },
  {
    id: 3,
    title: "Japanese Culture Tour",
    duration: "10 Days",
    groupSize: "Up to 15",
    rating: 4.9,
    price: 2299,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
  }
];

export default function FeaturedTours() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4">{tour.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {tour.groupSize}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    {tour.rating}
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${tour.price}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}