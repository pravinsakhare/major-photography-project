import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Navbar from "../navigation/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl font-playfair text-white mb-6">
                Get in Touch
              </h2>
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B59020] hover:from-[#B59020] hover:to-[#D4AF37] text-white transition-all duration-300 transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-playfair text-white mb-4">
                  Visit Us
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1631234567890!5m2!1sen!2sus"
                  className="w-full h-64 rounded-lg"
                  loading="lazy"
                />
              </div>

              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-playfair text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, href: "#" },
                    { Icon: Instagram, href: "#" },
                    { Icon: Twitter, href: "#" },
                    { Icon: Youtube, href: "#" },
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
