import React from "react";
import Image from "next/image";

const cars = [
  { id: 3, name: "Swift Dezire", image: "/images/swift-dezire.webp", seats: 5 },
  {
    id: 2,
    name: "Innnova Crysta",
    image: "/images/innova-crysta.webp",
    seats: 7,
  },
  { id: 4, name: "Innova", image: "/images/innova.avif", seats: 7 },
  {
    id: 1,
    name: "Maruti Ertiga",
    image: "/images/maruti-ertiga.webp",
    seats: 7,
  },
];

const CarSection: React.FC = () => {
  return (
    <section className="sm:py-20 py-14 bg-gray-50" id="rides">
      <div className="items-center container space-y-20">
        <div className="">
          <h2 className="sm:font-bold mb-4 font-semibold text-center text-4xl">
            Choose Your{" "}
            <span className="after:block after:-mt-3.5 after:bg-yellow-500/60 after:w-full after:h-3 inline-block">
              <span className="relative text-black">Ride</span>
            </span>
          </h2>
          <p className="text-gray-600 text-center">
            Choose your ride according to your need and comfort.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-10 gap-6 max-w-4xl mx-auto">
          {cars.map((car) => (
            <div key={car.id} className="flex flex-col gap-4">
              <Image
                src={car.image}
                alt={car.name}
                width={300}
                height={200}
                className="h-full bg-gray-500 w-full shadow"
              />
              <div className="space-y-2 text-center">
                <h3 className="font-medium text-xl">{car.name}</h3>
                <p>{car.seats} Seater</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarSection;
