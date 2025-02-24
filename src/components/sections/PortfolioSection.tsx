import React from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Wedding Photography",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  },
  {
    id: 2,
    title: "Commercial Video",
    image: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67",
  },
  {
    id: 3,
    title: "Portrait Session",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
  },
  {
    id: 4,
    title: "Event Coverage",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
];

const PortfolioSection = () => {
  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair text-white mb-6">
            Best Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Explore our portfolio of stunning photography and cinematography
            work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <h3 className="text-white text-xl font-playfair">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black/95 border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => (window.location.href = "/portfolio")}
            className="bg-[#D4AF37] hover:bg-[#B59020] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 rounded-md"
          >
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSection;
