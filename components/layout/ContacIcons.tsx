"use client";

import React from "react";
import { Phone } from "lucide-react";
import IconWhatsapp from "../icons/icon-whatsapp";

const ContactIcons = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleWhatsAppClick = () => {
    // Detect mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const message =
      "Hey, I need your help. I'm in need of a ride to the nearest taxi station. Can you help me?";
    if (isMobile) {
      // WhatsApp mobile deep link
      window.location.href = `https://wa.me/9265857732?text=${message}`;
    } else {
      // Fallback to web WhatsApp
      window.open(`https://wa.me/9265857732?text=${message}`, "_blank");
    }
  };

  return (
    <div className="">
      {/* Phone Icon */}
      <button
        onClick={handlePhoneClick}
        className="bg-blue-500 text-white size-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all fixed bottom-8 right-8 z-50"
        aria-label="Call Us"
      >
        <div className="inset-0 absolute bg-blue-500 animate-ping duration-1000 rounded-full" />

        <Phone fill="white" size={24} stroke="1" />
      </button>

      {/* WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white size-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all fixed bottom-8 left-8 z-50"
        aria-label="WhatsApp Us"
      >
        <div className="inset-0 absolute bg-green-500 hover:bg-green-600 animate-ping duration-1000 rounded-full" />
        <IconWhatsapp className="size-6" />
      </button>
    </div>
  );
};

export default ContactIcons;
