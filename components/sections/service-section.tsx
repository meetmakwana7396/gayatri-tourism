import React from "react";
import { Car, RotateCcw, ArrowRight, Plane, Users, Clock } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfer",
      description:
        "Professional and timely airport transportation service with flight tracking and meet-and-greet options. Spacious vehicles ensure comfortable travel with luggage storage.",
    },
    {
      icon: ArrowRight,
      title: "One-Way Trip",
      description:
        "Reliable point-to-point transportation for any destination within the city. Professional drivers navigate the best routes for efficient travel time.",
    },
    {
      icon: RotateCcw,
      title: "Round Trip",
      description:
        "Convenient two-way transportation with the same driver for both journeys. Flexible waiting times and scheduled pickup for return journey.",
    },
    {
      icon: Users,
      title: "Business Travel Cab Services",
      description:
        "Spacious vans and minibuses available for large groups or families. Comfortable seating with extra space for luggage and equipment.",
    },
    {
      icon: Clock,
      title: "Hourly Hire",
      description:
        "Flexible hourly booking service with dedicated driver for multiple stops. Perfect for shopping, meetings, or sightseeing at your own pace.",
    },
    {
      icon: Car,
      title: "City Tour",
      description:
        "Customized city exploration with knowledgeable local drivers as guides. Visit popular attractions and discover hidden gems around the city.",
    },
  ];

  return (
    <section className="sm:py-20 py-14 bg-gray-50">
      <div className="items-center container space-y-10">
        <h2 className="sm:font-bold font-semibold text-4xl">
          Our{" "}
          <span className="after:block after:-mt-3.5 after:bg-yellow-500/60 after:w-full after:h-3 inline-block">
            <span className="relative text-black">Services</span>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="max-w-sm p-4 rounded-lg duration-200 flex flex-col items-center text-center space-y-6"
            >
              <div className="text-black bg-yellow-500/60 rounded-md p-2">
                <service.icon className="size-8" />
              </div>
              <h3 className="font-semibold text-xl">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
