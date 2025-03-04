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
  // Wedding Category
  {
    id: "1",
    title: "Sunset Beach Wedding",
    category: "weddings",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    description: "Romantic couple during a sunset beach ceremony",
    date: "2024-03-15",
  },
  {
    id: "2",
    title: "Bride Preparation",
    category: "weddings",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?w=800&q=80",
    description: "Elegant bride getting ready for her special day",
    date: "2024-02-28",
  },
  {
    id: "3",
    title: "Luxury Wedding Reception",
    category: "weddings",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    description: "Sophisticated wedding reception with exquisite decor",
    date: "2024-01-20",
  },

  // Fashion Category
  {
    id: "4",
    title: "Urban Fashion Editorial",
    category: "fashion",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    description: "Stylish model posing in an urban setting",
    date: "2024-02-20",
  },
  {
    id: "5",
    title: "Runway Collection",
    category: "fashion",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    description: "Vibrant fashion runway showcase",
    date: "2024-03-05",
  },
  {
    id: "6",
    title: "Creative Editorial",
    category: "fashion",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    description: "Artistic fashion editorial with unique styling",
    date: "2024-02-10",
  },

  // Corporate Category
  {
    id: "7",
    title: "Executive Meeting",
    category: "corporate",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    description: "Professional business meeting in modern boardroom",
    date: "2024-01-10",
  },
  {
    id: "8",
    title: "Entrepreneur Portrait",
    category: "corporate",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    description: "Entrepreneur working in a contemporary office space",
    date: "2024-02-15",
  },
  {
    id: "9",
    title: "Team Collaboration",
    category: "corporate",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    videoUrl: "https://example.com/video.mp4",
    description: "Dynamic team collaboration in a creative coworking space",
    date: "2024-03-12",
  },

  // Events Category
  {
    id: "10",
    title: "Music Festival",
    category: "events",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    description: "Lively music concert with an energetic crowd",
    date: "2024-03-10",
  },
  {
    id: "11",
    title: "Birthday Celebration",
    category: "events",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    description: "Vibrant birthday celebration with elegant decorations",
    date: "2024-01-25",
  },
  {
    id: "12",
    title: "Business Conference",
    category: "events",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    videoUrl: "https://example.com/conference.mp4",
    description: "Professional business conference with keynote speakers",
    date: "2024-02-05",
  },

  // Drone Category
  {
    id: "13",
    title: "City Skyline Aerial",
    category: "drone",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    videoUrl: "https://example.com/drone.mp4",
    description: "Breathtaking aerial view of a metropolitan skyline",
    date: "2024-03-01",
  },
  {
    id: "14",
    title: "Mountain Landscape",
    category: "drone",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Scenic landscape with mountains and winding rivers",
    date: "2024-02-18",
  },
  {
    id: "15",
    title: "Beach Wedding Aerial",
    category: "drone",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=800&q=80",
    description: "Top-down view of an elegant beach wedding setup",
    date: "2024-03-20",
  },

  // Films Category
  {
    id: "16",
    title: "Cinematic Drama Scene",
    category: "films",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    videoUrl: "https://example.com/film.mp4",
    description: "Dramatic scene from an award-winning short film",
    date: "2024-02-15",
  },
  {
    id: "17",
    title: "Behind The Scenes",
    category: "films",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=800&q=80",
    description: "Director and camera crew during a film production",
    date: "2024-01-30",
  },
  {
    id: "18",
    title: "Vintage Film Portrait",
    category: "films",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1517940310602-26535839fe84?w=800&q=80",
    description: "Artistic portrait with vintage film aesthetics",
    date: "2024-03-08",
  },
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
  // Add animation styles
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 1s ease-out;
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 3s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory,
  );

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <Button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.value ? "bg-gradient-to-r from-[#D4AF37] to-[#B59020] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]" : "bg-white/10 text-white/70 hover:bg-white/20"}`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
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
                      fetchPriority={index < 6 ? "high" : "auto"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-sm">
                      <h3 className="text-white text-xl font-playfair mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {item.description}
                      </p>
                      {item.type === "video" && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37]/90 p-4 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-110">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-black/95 border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.7)]">
                  {item.type === "image" ? (
                    <img
                      src={item.thumbnail.replace("w=800", "w=1200")}
                      alt={item.title}
                      className="w-full h-auto rounded-lg"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-video rounded-lg overflow-hidden bg-black/50 border border-[#D4AF37]/30">
                      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="bg-[#D4AF37]/90 p-6 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.5)] animate-pulse">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                        <p className="text-white/70 font-medium">
                          Click to play video
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
    </div>
  );
};

export default PortfolioGrid;
