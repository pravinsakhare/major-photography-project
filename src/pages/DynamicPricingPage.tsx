import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import DynamicPricingSection from "@/components/pricing/DynamicPricingSection";

const DynamicPricingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white mb-6">
              Photography Services & Pricing
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Choose the perfect package for your photography and cinematography
              needs
            </p>
          </motion.div>
          <DynamicPricingSection />
        </div>
      </div>
    </div>
  );
};

export default DynamicPricingPage;
