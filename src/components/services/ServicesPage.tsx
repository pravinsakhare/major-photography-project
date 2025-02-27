import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navigation/Navbar";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Cinematography",
    description:
      "Professional video production for events, commercials, and documentaries",
    icon: "🎥",
    image: "https://images.unsplash.com/photo-1540655037529-dec987208707",
    features: [
      "4K Video Production",
      "Drone Aerial Footage",
      "Professional Sound Recording",
      "Color Grading",
      "Multiple Camera Angles",
    ],
    price: "Starting at $1,999",
    duration: "1-3 days",
    testimonial:
      "The cinematography team captured our event perfectly! - Sarah J.",
    popular: false,
  },
  {
    title: "Event Coverage",
    description:
      "Comprehensive photography and video for weddings, corporate events, and concerts",
    icon: "🎉",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    features: [
      "Full-Day Coverage",
      "Multiple Photographers",
      "Same-Day Preview Images",
      "Online Gallery",
      "Custom Album Design",
    ],
    price: "Starting at $2,499",
    duration: "1 day",
    testimonial:
      "Our wedding photos exceeded our expectations! - Michael & Emma",
    popular: true,
  },
  {
    title: "Commercial & Branding",
    description:
      "Professional imagery for products, services, and brand identity",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    features: [
      "Product Photography",
      "Brand Identity Shoots",
      "Marketing Materials",
      "Social Media Content",
      "Commercial Usage Rights",
    ],
    price: "Starting at $1,499",
    duration: "1-2 days",
    testimonial:
      "The product photos boosted our sales significantly! - Tech Innovations Inc.",
    popular: false,
  },
  {
    title: "Portrait & Fashion",
    description:
      "Stunning portraits for individuals, families, and fashion models",
    icon: "👤",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    features: [
      "Studio or Location Shoots",
      "Professional Styling",
      "Multiple Outfit Changes",
      "Retouching & Editing",
      "Digital & Print Options",
    ],
    price: "Starting at $499",
    duration: "2-4 hours",
    testimonial:
      "My portfolio looks amazing after our shoot! - Jessica T., Model",
    popular: true,
  },
  {
    title: "Aerial Photography",
    description:
      "Breathtaking drone footage and photography for unique perspectives",
    icon: "🚁",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384",
    features: [
      "FAA Licensed Pilots",
      "4K Drone Footage",
      "Aerial Mapping",
      "Real Estate Overviews",
      "Event Aerial Coverage",
    ],
    price: "Starting at $799",
    duration: "2-3 hours",
    testimonial:
      "The aerial shots of our property were stunning! - Luxury Homes LLC",
    popular: false,
  },
  {
    title: "Post-Production",
    description: "Expert editing and enhancement for photos and videos",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb",
    features: [
      "Advanced Retouching",
      "Color Correction",
      "Video Editing",
      "Special Effects",
      "Quick Turnaround",
    ],
    price: "Starting at $299",
    duration: "3-7 days",
    testimonial:
      "The editing transformed our raw footage into art! - Creative Agency",
    popular: false,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="pt-20">
        <motion.div
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white mb-6">
              Our Services
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Elevate your visual content with our professional photography and
              cinematography services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white/90 text-lg mb-4">
                Trusted by 500+ Clients Worldwide
              </p>
              <div className="flex justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => (window.location.href = "/pricing")}
                  className="bg-[#D4AF37] hover:bg-[#B59020] text-white transition-all duration-300"
                >
                  View Packages
                </Button>
                <Button
                  onClick={() => (window.location.href = "/contact")}
                  variant="outline"
                  className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
