"use client";

import FeatureCard from "./features/FeatureCard";
import { features } from "./features/FeatureData";

export default function WhyChooseUs() {
  return (
    <section className="sm:py-20 py-14 bg-gray-50">
      <div className="items-center container space-y-10">
        <h2 className="sm:font-bold font-semibold text-4xl">
          Why Choose{" "}
          <span className="after:block after:-mt-3.5 after:bg-yellow-500/60 after:w-full after:h-3 inline-block">
            <span className="relative text-black">Us?</span>
          </span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
