"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-4 sm:py-20 py-14" id="about-us">
      <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          {/* <div className="w-full md:w-1/2"> */}
          <Image
            src="/images/about-us-img.jpg"
            alt="About Us"
            className="w-full sm:h-[600px] h-[300px] rounded-lg shadow-lg object-cover"
            width={600}
            height={400}
          />
        </motion.div>

        {/* Text Container */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="sm:font-bold font-semibold text-4xl mb-10">
            About{" "}
            <span className="after:block after:-mt-3.5 after:bg-yellow-500/60 after:w-full after:h-3 inline-block">
              <span className="relative text-black">Gayatri Taxi Service</span>
            </span>
          </h2>{" "}
          <p className="text-gray-600 text-xl leading-relaxed mb-4">
            At Gayatri Taxi Service, your journey is our priority. We offer safe, reliable,
            and comfortable transportation with a fleet of well-maintained brand
            new cars and professional drivers with excellent communication
            skills to make your experience pleasant and smooth.
          </p>
          <p className="text-gray-600 text-xl leading-relaxed mb-4">
            Whether it&apos;s a quick local ride, an airport transfer, or a
            long-distance trip, we ensure timely and hassle-free service
            tailored to your needs. We are working with all major cities of like
            Ahmedabad, Surat, Jaipur, Udaipur, Mumbai, and more. We offer
            Outstation taxi bookings services, One way Cab hire services, and
            Corporate car rental services In Gujarat, India.
          </p>
          <p className="text-gray-600 text-xl leading-relaxed mb-4">
            Go One Way Your Taxi Cab Service Partner!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
