"use client";

import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonials } from "./testimonials/TestimonialData";

export default function Testimonials() {
  return (
    <section className="sm:py-20 py-14">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600">
            Real experiences from our valued adventurers around the world
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] mb-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="break-inside-avoid mb-6">
              <TestimonialCard
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                image={testimonial.image}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}