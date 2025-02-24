import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navigation/Navbar";
import HeroSection from "./hero/HeroSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import FeaturesSection from "./sections/FeaturesSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import CtaSection from "./sections/CtaSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </motion.main>
    </div>
  );
};

export default Home;
