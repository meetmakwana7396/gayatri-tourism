"use client";

import FeatureCard from "./features/FeatureCard";
import { features } from "./features/FeatureData";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Travelers Choose{" "}
              <span className="text-primary">Gayatri Tourism</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We're dedicated to creating extraordinary travel experiences that
              go beyond the ordinary. Our commitment to excellence, attention to
              detail, and passion for travel make us the preferred choice for
              adventurers worldwide.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">50k+</p>
                <p className="text-sm text-gray-600">Happy Travelers</p>
              </div>
              <div className="w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-sm text-gray-600">Destinations</p>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}
