"use client";

import { useState, useEffect } from "react";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "Tours", href: "/tours" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

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

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary"
                )}
              >
                {item.label}
              </a>
            ))}
          </div> */}
          <Button className="text-md h-auto py-3 px-6 sm:block hidden">
            <div className="flex items-center justify-center">
              <PhoneCall className="h-5 w-5 mr-3" />
              Call on +919876543210
            </div>
          </Button>

          {/* Mobile Navigation */}
          {/* <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button> */}
        </nav>

        {/* Mobile Menu */}
        {/* {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-2">
              <Button className="w-full">Book Now</Button>
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
}
