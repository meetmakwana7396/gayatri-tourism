"use client";

import React from "react";
import { Phone, Send } from "lucide-react";

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

    if (isMobile) {
      // WhatsApp mobile deep link
      window.location.href = "https://wa.me/1234567890";
    } else {
      // Fallback to web WhatsApp
      window.open("https://wa.me/1234567890", "_blank");
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-6">
      {/* Phone Icon */}
      <button
        onClick={handlePhoneClick}
        className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center 
                   shadow-lg hover:bg-blue-600 transition-all 
                   animate-bounce hover:animate-none"
        aria-label="Call Us"
      >
        <Phone size={32} />
      </button>

      {/* WhatsApp Icon */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center 
                   shadow-lg hover:bg-green-600 transition-all 
                   animate-bounce hover:animate-none"
        aria-label="WhatsApp Us"
      >
        <Send size={32} />
      </button>
    </div>
  );
};

export default ContactIcons;
