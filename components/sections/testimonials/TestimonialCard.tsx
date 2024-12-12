"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  image: string;
  index: number;
}

export default function TestimonialCard({
  name,
  location,
  quote,
  image,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-sm">{name}</h4>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
          </div>
          <Quote className="h-4 w-4 text-primary mb-2" />
          <p className="text-sm text-gray-600 leading-relaxed">{quote}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
