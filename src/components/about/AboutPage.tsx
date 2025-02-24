import React from "react";
import { motion } from "framer-motion";
import Navbar from "../navigation/Navbar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Photographer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    bio: "Award-winning photographer with 10+ years of experience",
  },
  {
    name: "Michael Chen",
    role: "Cinematographer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    bio: "Specialized in wedding and commercial videography",
  },
  {
    name: "Emma Davis",
    role: "Creative Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    bio: "Visionary leader with a passion for storytelling",
  },
];

const testimonials = [
  {
    name: "Jessica & Tom",
    text: "PixelFlare captured our wedding day perfectly. Every moment was beautifully documented.",
    role: "Wedding Clients",
  },
  {
    name: "Tech Innovations Inc.",
    text: "The commercial photography exceeded our expectations. Professional and creative team.",
    role: "Corporate Client",
  },
  {
    name: "Maria Rodriguez",
    text: "Amazing portrait session! They made me feel comfortable and the results were stunning.",
    role: "Portrait Client",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-playfair text-white mb-6">
              About PixelFlare
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Founded in 2015, PixelFlare has been at the forefront of visual
              storytelling, combining artistic vision with technical excellence
              to create stunning photography and cinematography.
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-playfair text-white text-center mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-playfair text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#D4AF37] mb-2">{member.role}</p>
                  <p className="text-white/70">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-playfair text-white text-center mb-12">
              Client Testimonials
            </h2>
            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="px-4">
                    <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10">
                      <p className="text-white/90 text-lg mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="text-[#D4AF37] font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
