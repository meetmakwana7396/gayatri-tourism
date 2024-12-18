"use client";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] sm:pt-20 flex items-center">
      <div className="container h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content  */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-xl"
          >
            {/* <div className="border-2 border-blue-500 flex items-center justify-center shadow-blue-500/50 shadow-lg mb-4 text-xs font-bold bg-blue-500/20 w-fit text-blue-500 rounded-full py-1 px-2">
              <span className="bg-blue-500 rounded-full size-5 flex justify-center items-center mr-2">
                <Check className="text-white size-4" />
              </span>{" "}
              10+ Years of experience
            </div> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Reliable Taxi Service,{" "}
              <span className="text-yellow-400">Anytime!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover extraordinary destinations and create unforgettable
              memories. Let us guide you through the world&apos;s most
              breathtaking locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-md h-auto py-3 px-6">
                <PhoneCall className="h-5 w-5 mr-3" />
                Call on +919876543210
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
                <p className="text-sm text-gray-600">Destinations</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">1M+</h3>
                <p className="text-sm text-gray-600">Happy Travelers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl">
              <Image
                src="/images/hero-img.jpg"
                alt="Yellow Taxi in City"
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
