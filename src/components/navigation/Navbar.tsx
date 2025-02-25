import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  isScrolled?: boolean;
  logo?: string;
  links?: Array<{ href: string; label: string }>;
}

const Navbar = ({
  isScrolled = false,
  logo = "PixelFlare",
  links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(isScrolled);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"} transition-all duration-500`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className="text-white font-playfair text-2xl font-bold tracking-wider hover:text-[#D4AF37] transition-all duration-300"
            whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
          >
            {logo}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {links.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <NavigationMenuLink
                        href={link.href}
                        className="relative px-4 py-2 text-white/90 hover:text-white transition-all duration-300 font-medium tracking-wide text-sm
                          after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#D4AF37]
                          after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => navigate("/book")}
                className="relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B59020] text-white px-6 py-2.5 rounded-full font-medium
                  shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]
                  transition-all duration-300 transform"
              >
                Book Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 border-l border-[#D4AF37]/20 backdrop-blur-xl"
              >
                <nav className="flex flex-col gap-6 mt-8">
                  <AnimatePresence>
                    {links.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          onClick={() => handleNavigation(link.href)}
                          className="text-white/90 hover:text-white transition-all duration-300 text-lg font-medium tracking-wide block
                            hover:translate-x-2 hover:text-[#D4AF37] cursor-pointer"
                        >
                          {link.label}
                        </a>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: links.length * 0.1 }}
                    >
                      <Button
                        onClick={() => handleNavigation("/book")}
                        className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B59020] text-white mt-4
                          hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300"
                      >
                        Book Now
                      </Button>
                    </motion.div>
                  </AnimatePresence>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
