"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SearchFilters from "./SearchFilters";
import CallUsButton from "../call-us-button";

export default function Hero() {
  return (
    <section className="sm:min-h-[calc(100vh-5rem)] pt-24 sm:pt-32 flex items-center">
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
              Your City,
              <br /> Your Journey,{" "}
              <span className="after:block after:-mt-6 after:bg-yellow-500/60 after:w-full after:h-6 inline-block">
                Our Wheels.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Making your daily city travels easy and comfortable, from home to
              office and beyond 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CallUsButton />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] "
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
        <SearchFilters />
      </div>
    </section>
  );
}
