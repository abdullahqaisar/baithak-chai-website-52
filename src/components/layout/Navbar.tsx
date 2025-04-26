
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, CoffeeIcon, MapPin, Images, Info } from 'lucide-react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"

const navLinks = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/blends", icon: CoffeeIcon, label: "Our Blends" },
  { to: "/locations", icon: MapPin, label: "Locations" },
  { to: "/gallery", icon: Images, label: "Gallery" },
  { to: "/about", icon: Info, label: "About Us" },
];

const Navbar = () => {
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
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button className="p-2">
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                <div className="flex justify-end mb-4">
                  <DrawerClose asChild>
                    <button className="p-2">
                      <X size={24} />
                    </button>
                  </DrawerClose>
                </div>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.to}
                      to={link.to} 
                      className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <link.icon size={24} />
                      <span className="text-lg">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

