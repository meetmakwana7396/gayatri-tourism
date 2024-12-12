"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import ContactIcons from "../layout/ContacIcons";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] pt-20 flex items-center">
      <div className="container h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Reliable Taxi Service,{" "}
              <span className="text-yellow-400">Anytime!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover extraordinary destinations and create unforgettable
              memories. Let us guide you through the world's most breathtaking
              locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="bg-primary text-white">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <Button className="text-md h-auto py-3 px-6">
                <PhoneCall className="h-5 w-5 mr-3" />
                Call on +919876543210
              </Button>
              <Button variant="outline" className="text-md h-auto py-3 px-6">
                View Popular Tours
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

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl">
              <img
                src="/images/hero-img.jpg"
                alt="Yellow Taxi in City"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">4.9</span>
                </div>
                <div>
                  <p className="font-medium">Excellent Rating</p>
                  <p className="text-sm text-gray-600">From 10k+ Reviews</p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
