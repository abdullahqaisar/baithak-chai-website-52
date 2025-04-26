
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, CoffeeIcon, MapPin, Images, Info } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/blends", icon: CoffeeIcon, label: "Our Blends" },
  { to: "/locations", icon: MapPin, label: "Locations" },
  { to: "/gallery", icon: Images, label: "Gallery" },
  { to: "/about", icon: Info, label: "About Us" },
];

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/baithak-logo.png" 
            alt="Baithak Chai Logo" 
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-dark-purple">Baithak Chai</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="flex items-center space-x-2 hover:text-primary-purple"
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 flex items-center justify-center">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <link.icon size={24} />
                      <span className="text-lg">{link.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
