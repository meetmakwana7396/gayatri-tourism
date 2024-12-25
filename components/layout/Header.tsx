"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import CallUsButton from "../call-us-button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between sm:py-8 py-6",
            isScrolled && "py-4"
          )}
        >
          <div className="flex items-center gap-2 text-primary">
            {/* <Plane className="h-6 w-6" /> */}
            <span className="sm:text-3xl text-xl font-extrabold">
              GAYATRI TOURISM
            </span>
          </div>

          <div className="sm:block hidden">
            <CallUsButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
