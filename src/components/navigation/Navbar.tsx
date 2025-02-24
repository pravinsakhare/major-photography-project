import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${scrolled ? "bg-black/95 shadow-lg" : "bg-transparent"} transition-all duration-500 border-b border-white/5`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="text-white font-playfair text-2xl font-bold tracking-wider hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-105 hover:tracking-widest"
          >
            {logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {links.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`relative px-3 py-2 text-white transition-all duration-300 font-medium tracking-wide
                        ${link.label === "Contact Us" ? "hover:text-[#D4AF37]" : ""}
                        ${link.label === "About Us" ? 'after:content-[""] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full' : ""}
                        ${!["Contact Us", "About Us"].includes(link.label) ? "hover:text-white/70" : ""}
                      `}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="relative overflow-hidden bg-gradient-to-r from-[#D4AF37] to-[#B59020] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300
                transform hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#B59020] before:to-[#D4AF37]
                before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                after:absolute after:inset-[1px] after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#B59020]
                after:rounded-full after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100
                isolate"
              onClick={() => (window.location.href = "/contact")}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#D4AF37]"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 border-l border-[#D4AF37]/20 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <nav className="flex flex-col gap-6 mt-8">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`relative text-white transition-all duration-300 text-lg font-montserrat tracking-wide transform hover:translate-x-2
                        ${link.label === "Contact Us" ? "hover:text-[#D4AF37]" : ""}
                        ${link.label === "About Us" ? "hover:border-b-2 hover:border-[#D4AF37] pb-1" : ""}
                        ${!["Contact Us", "About Us"].includes(link.label) ? "hover:text-white/70" : ""}
                      `}
                    >
                      {link.label}
                    </a>
                  ))}
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
