
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CoffeeIcon, MapPin, Images, Info } from 'lucide-react';

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
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:text-primary-purple">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/blends" className="flex items-center space-x-2 hover:text-primary-purple">
            <CoffeeIcon size={20} />
            <span>Our Blends</span>
          </Link>
          <Link to="/locations" className="flex items-center space-x-2 hover:text-primary-purple">
            <MapPin size={20} />
            <span>Locations</span>
          </Link>
          <Link to="/gallery" className="flex items-center space-x-2 hover:text-primary-purple">
            <Images size={20} />
            <span>Gallery</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-2 hover:text-primary-purple">
            <Info size={20} />
            <span>About Us</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
