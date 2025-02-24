import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navigation/Navbar";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Cinematography",
    description:
      "Professional video production for events, commercials, and documentaries",
    icon: "🎥",
    features: [
      "4K Video Production",
      "Drone Aerial Footage",
      "Professional Sound Recording",
      "Color Grading",
      "Multiple Camera Angles",
    ],
    price: "Starting at $1,999",
  },
  {
    title: "Photoshoots",
    description:
      "Studio and location photography for portraits, products, and events",
    icon: "📸",
    features: [
      "High-Resolution Images",
      "Professional Lighting",
      "Multiple Outfit Changes",
      "Digital Image Files",
      "Print Release",
    ],
    price: "Starting at $499",
  },
  {
    title: "Editing",
    description: "Expert post-production services for photos and videos",
    icon: "✨",
    features: [
      "Advanced Retouching",
      "Color Correction",
      "Special Effects",
      "Quick Turnaround",
      "Revision Rounds",
    ],
    price: "Starting at $299",
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
