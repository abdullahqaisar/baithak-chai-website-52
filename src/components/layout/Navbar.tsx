
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/public/lovable-uploads/ac2067d8-c76c-4656-8dbd-9c9ed5e9b9dd.png"
            alt="Baithak Chai Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <span className="ml-2 text-2xl font-playfair font-bold text-chai-brown-dark">Baithak Chai</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-chai-brown-dark hover:text-chai-orange font-medium">
            Home
          </Link>
          <Link to="/about" className="text-chai-brown-dark hover:text-chai-orange font-medium">
            Our Story
          </Link>
          <Link to="/blends" className="text-chai-brown-dark hover:text-chai-orange font-medium">
            The Blends
          </Link>
          <Link to="/gallery" className="text-chai-brown-dark hover:text-chai-orange font-medium">
            Gallery
          </Link>
          <Link to="/locations" className="text-chai-brown-dark hover:text-chai-orange font-medium">
            Our Baithaks
          </Link>
        </div>

        <Link to="/join" className="hidden md:block btn-primary">
          Join the Club
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-chai-brown-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-chai-brown-dark hover:text-chai-orange font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-chai-brown-dark hover:text-chai-orange font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </Link>
            <Link
              to="/blends"
              className="text-chai-brown-dark hover:text-chai-orange font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              The Blends
            </Link>
            <Link
              to="/gallery"
              className="text-chai-brown-dark hover:text-chai-orange font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/locations"
              className="text-chai-brown-dark hover:text-chai-orange font-medium p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Baithaks
            </Link>
            <Link
              to="/join"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Join the Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
