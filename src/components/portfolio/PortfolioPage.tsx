import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navigation/Navbar";
import PortfolioGrid from "./PortfolioGrid";

const PortfolioPage = () => {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Explore our diverse collection of photography and cinematography
              work
            </p>
          </motion.div>

          <PortfolioGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
