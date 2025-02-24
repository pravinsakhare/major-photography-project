import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-12">
            Let's work together to bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "/portfolio")}
              variant="outline"
              className="px-8 py-6 text-lg border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
            >
              View Portfolio
            </Button>
            <Button
              onClick={() => (window.location.href = "/book")}
              className="px-8 py-6 text-lg bg-gradient-to-r from-[#D4AF37] to-[#B59020] hover:from-[#B59020] hover:to-[#D4AF37] text-white transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CtaSection;
