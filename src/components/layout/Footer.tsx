import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-purple text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/baithak-logo.png" 
              alt="Baithak Chai Logo" 
              className="h-16 w-16 object-contain"
            />
            <span className="text-2xl font-bold">Baithak Chai</span>
          </div>
          
          <p className="text-gray-300">Jahan Chai, Wahan Baithak - More than just chai, we're brewing moments worth remembering.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-purple">Home</Link></li>
              <li><Link to="/blends" className="hover:text-primary-purple">Our Blends</Link></li>
              <li><Link to="/locations" className="hover:text-primary-purple">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary-purple">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-purple">Gallery</Link></li>
              <li><Link to="/join" className="hover:text-primary-purple">Join Club</Link></li>
            </ul>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-purple"><Facebook /></a>
            <a href="#" className="hover:text-primary-purple"><Instagram /></a>
            <a href="#" className="hover:text-primary-purple"><Twitter /></a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-700 text-center">
        <p>&copy; 2025 Baithak Chai. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
