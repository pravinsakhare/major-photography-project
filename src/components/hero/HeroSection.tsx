import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// Using relative path with explicit file extension
import ImageCarousel from "./ImageCarousel.tsx";

interface HeroSectionProps {
  studioName?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  studioName = "PixelFlare Studio",
  ctaText = "Book Now",
  onCtaClick = () => console.log("CTA clicked"),
}) => {
  return (
    <div className="relative w-full h-[800px] bg-black">
      <ImageCarousel
        images={[
          "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
          "https://images.unsplash.com/photo-1554080353-a576cf803bda",
          "https://images.unsplash.com/photo-1505935428862-770b6f24f629",
        ]}
        interval={5000}
        overlay={true}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-playfair mb-8 text-center"
        >
          {studioName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Button
            onClick={onCtaClick}
            className="bg-[#D4AF37] hover:bg-[#B59020] text-white px-8 py-6 text-lg rounded-none transition-colors duration-300"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-[5]"
      />
    </div>
  );
};

export default HeroSection;
