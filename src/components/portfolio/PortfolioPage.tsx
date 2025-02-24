import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../navigation/Navbar";

type Category = "all" | "photography" | "cinematography" | "editing";

const projects = [
  {
    id: 1,
    title: "Wedding Photography",
    category: "photography",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  },
  {
    id: 2,
    title: "Commercial Video",
    category: "cinematography",
    image: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67",
  },
  {
    id: 3,
    title: "Portrait Retouching",
    category: "editing",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e",
  },
  // Add more projects as needed
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        <motion.div
          className="container mx-auto px-4 py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair text-white text-center mb-16">
            Our Portfolio
          </h1>

          <div className="flex justify-center gap-4 mb-12">
            {["all", "photography", "cinematography", "editing"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as Category)}
                  className={`px-6 py-2 rounded-full transition-colors ${selectedCategory === category ? "bg-[#D4AF37] text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ),
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
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
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
