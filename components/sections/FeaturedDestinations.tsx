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
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Destinations
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  height={256}
                  width={256}
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
        </div> */}

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {routes.map((route, index) => (
            <DestinationCard key={index} destination={route} />
          ))}
        </div>
      </div>
    </section>
  );
}
