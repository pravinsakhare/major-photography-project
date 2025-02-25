import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Category =
  | "all"
  | "weddings"
  | "fashion"
  | "corporate"
  | "events"
  | "drone"
  | "films";

interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  type: "image" | "video";
  thumbnail: string;
  videoUrl?: string;
  description: string;
  date: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Elegant Beach Wedding",
    category: "weddings",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    description: "Beautiful beachfront ceremony at sunset",
    date: "2024-03-15",
  },
  {
    id: "2",
    title: "Summer Fashion Collection",
    category: "fashion",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
    description: "Summer 2024 fashion campaign shoot",
    date: "2024-02-20",
  },
  {
    id: "3",
    title: "Corporate Brand Video",
    category: "corporate",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    videoUrl: "https://example.com/video.mp4",
    description: "Brand story and company culture showcase",
    date: "2024-01-10",
  },
  {
    id: "4",
    title: "City Aerial Tour",
    category: "drone",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1576036424372-d66049a81ce5",
    videoUrl: "https://example.com/drone.mp4",
    description: "Stunning aerial footage of the city skyline",
    date: "2024-03-01",
  },
  {
    id: "5",
    title: "Music Festival Highlights",
    category: "events",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea",
    description: "Annual summer music festival coverage",
    date: "2024-03-10",
  },
  {
    id: "6",
    title: "Short Film - 'Echoes'",
    category: "films",
    type: "video",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    videoUrl: "https://example.com/film.mp4",
    description: "Award-winning short film production",
    date: "2024-02-15",
  },
  // Add more items as needed
];

const categories: { value: Category; label: string; icon: string }[] = [
  { value: "all", label: "All Work", icon: "🎨" },
  { value: "weddings", label: "Weddings", icon: "📸" },
  { value: "fashion", label: "Fashion", icon: "👗" },
  { value: "corporate", label: "Corporate", icon: "👔" },
  { value: "events", label: "Events", icon: "🎉" },
  { value: "drone", label: "Drone Shots", icon: "🚁" },
  { value: "films", label: "Short Films", icon: "🎬" },
];

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [visibleItems, setVisibleItems] = useState(6);

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory,
  );

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, filteredItems.length));
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.value ? "bg-[#D4AF37] text-white" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredItems.slice(0, visibleItems).map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg">
                    <motion.img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-playfair mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {item.description}
                      </p>
                      {item.type === "video" && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/90 p-4 rounded-full">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-black/95 border-white/10">
                  {item.type === "image" ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/50">
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-white/70">
                          Video preview placeholder
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="mt-4">
                    <h3 className="text-2xl font-playfair text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/70">{item.description}</p>
                    <p className="text-white/50 text-sm mt-2">{item.date}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleItems < filteredItems.length && (
        <div className="text-center mt-8">
          <Button
            onClick={handleLoadMore}
            className="bg-[#D4AF37] hover:bg-[#B59020] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;
