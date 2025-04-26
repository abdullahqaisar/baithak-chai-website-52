
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chai-brown-dark text-chai-cream py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/baithak-logo.png" 
              alt="Baithak Chai Logo" 
              className="h-16 w-16 object-contain"
            />
            <span className="text-2xl font-bold text-chai-cream">Baithak Chai</span>
          </div>
          
          <p className="text-chai-cream/80">Jahan Chai, Wahan Baithak - More than just chai, we're brewing moments worth remembering.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-4 text-chai-orange-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-chai-orange transition-colors">Home</Link></li>
              <li><Link to="/blends" className="hover:text-chai-orange transition-colors">Our Blends</Link></li>
              <li><Link to="/locations" className="hover:text-chai-orange transition-colors">Locations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-chai-orange-light">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-chai-orange transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-chai-orange transition-colors">Gallery</Link></li>
              <li><Link to="/join" className="hover:text-chai-orange transition-colors">Join Club</Link></li>
            </ul>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-chai-orange-light">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-chai-cream hover:text-chai-orange transition-colors"><Facebook /></a>
            <a href="#" className="text-chai-cream hover:text-chai-orange transition-colors"><Instagram /></a>
            <a href="#" className="text-chai-cream hover:text-chai-orange transition-colors"><Twitter /></a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-chai-brown text-center">
        <p className="text-chai-cream/70">&copy; 2025 Baithak Chai. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
