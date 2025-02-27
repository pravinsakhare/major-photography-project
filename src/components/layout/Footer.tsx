import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Newsletter subscription");
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Branding */}
          <div className="space-y-6 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-playfair text-white">PixelFlare</h2>
              <p className="text-[#D4AF37] text-sm mt-1 italic">
                Capturing moments, creating memories
              </p>
            </motion.div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium photography and cinematography services for those who
              demand excellence. We transform ordinary moments into
              extraordinary visual stories.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] text-white/80 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 10px rgba(212, 175, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - Two Columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Company Info Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Company Info
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]"></span>
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/pricing", label: "Pricing" },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block text-white/70 hover:text-[#D4AF37] transition-all duration-200 hover:translate-x-1"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Services Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]"></span>
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "/services#photography", label: "Photography" },
                  { href: "/services#videography", label: "Videography" },
                  { href: "/services#editing", label: "Editing" },
                  { href: "/services#wedding", label: "Wedding Shoots" },
                ].map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block text-white/70 hover:text-[#D4AF37] transition-all duration-200 hover:translate-x-1"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6 lg:col-span-1">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Stay Updated
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]"></span>
              </h4>
              <p className="text-white/70 text-sm">
                Subscribe to receive exclusive offers and photography tips.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 pr-12 rounded-full focus:border-[#D4AF37] focus:ring-[#D4AF37]/20 transition-all duration-300"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D4AF37] to-[#B59020] text-white p-1.5 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </form>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold text-white relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#D4AF37]"></span>
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:info@pixelflare.com"
                  className="flex items-center text-white/70 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@pixelflare.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-white/70 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (234) 567-890
                </a>
                <a
                  href="https://wa.me/1234567890"
                  className="flex items-center text-white/70 hover:text-[#D4AF37] transition-colors duration-200"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} PixelFlare. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/sitemap", label: "Sitemap" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
