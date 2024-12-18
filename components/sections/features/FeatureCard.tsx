"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-neutral-200 rounded-2xl"> 
        <CardContent className="sm:p-8 p-6 sm:space-y-6 space-y-4">
          <div className="sm:size-12 size-10 rounded-full  flex items-center ring-2 ring-offset-2 ring-amber-500 justify-center">
            <Icon className="sm:size-6 size-5 text-black" />
          </div>
          <h3 className="sm:text-2xl text-xl font-semibold">{title}</h3>
          <p className="text-gray-600 text-lg sm:leading-relaxed leading-normal">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
