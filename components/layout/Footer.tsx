import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  // MapPin,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
];

const quickLinks = [
  { label: "About Us", href: "#about-us" },
  { label: "Services", href: "#services" },

];

export default function Footer() {
  return (
    <footer className="bg-yellow-500 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GoOneWay</h3>
            <p className="text-black mb-4">
              Curating unforgettable travel experiences across the globe.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-black hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black hover:underline decoration-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-black">
                <Mail className="h-5 w-5 shrink-0" />
                <span>gooneway.support@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              {/* <div className="flex items-center gap-2 text-black">
                <MapPin className="h-5 w-5" />
                <span>123 Travel Street, Adventure City</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-black pt-8 text-left text-black">
          <p>
            &copy; {new Date().getFullYear()} GoOneWay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
