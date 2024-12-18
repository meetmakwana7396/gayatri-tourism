"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Activity } from "lucide-react";
import Image from "next/image";

const tours = [
  {
    id: 1,
    name: "Greek Islands Hopping",
    duration: "10 Days",
    difficulty: "Easy",
    price: 2499,
    image: "/images/destination-1.jpg",
  },
  {
    id: 2,
    name: "Mount Fuji Trek",
    duration: "5 Days",
    difficulty: "Moderate",
    price: 1899,
    image: "/images/destination-2.jpg",
  },
  {
    id: 3,
    name: "Safari Adventure",
    duration: "7 Days",
    difficulty: "Easy",
    price: 3299,
    image: "/images/destination-3.jpg",
  },
  {
    id: 4,
    name: "Amazon Expedition",
    duration: "8 Days",
    difficulty: "Challenging",
    price: 2799,
    image: "/images/destination-4.jpg",
  },
];

export default function PopularTours() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="sm:py-20 py-14 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Popular Tours</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tours.map((tour) => (
            <Card
              key={tour.id}
              className="min-w-[300px] snap-start overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                  height={192}
                  width={192}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">{tour.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    {tour.difficulty}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-primary font-bold">${tour.price}</div>
                  <Button size="sm">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
