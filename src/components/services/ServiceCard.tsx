import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features,
  price,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-lg backdrop-blur-sm hover:from-white/15 hover:to-white/10 transition-all duration-300 border border-white/10"
    >
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-2xl font-playfair text-white mb-4">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>

      <div className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center text-white/80">
            <span className="text-[#D4AF37] mr-2">✓</span>
            {feature}
          </div>
        ))}
      </div>

      <div className="text-2xl font-playfair text-white mb-6">{price}</div>

      <Button
        className="w-full bg-[#D4AF37] hover:bg-[#B59020] text-white transition-colors duration-300"
        onClick={() => (window.location.href = "/contact")}
      >
        Book Now
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
