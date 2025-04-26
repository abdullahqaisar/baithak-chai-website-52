import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Mail, Calendar, Home } from 'lucide-react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chai-brown-dark text-chai-cream py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/public/lovable-uploads/ac2067d8-c76c-4656-8dbd-9c9ed5e9b9dd.png"
                alt="Baithak Chai Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
              <span className="ml-2 text-2xl font-playfair font-bold text-chai-cream">Baithak Chai</span>
            </div>
            <p className="text-sm mb-4">
              More than just chai—we're brewing moments worth remembering.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com/people/Baithak/61575539167512/?rdid=D4i77x2yuxIK4UIJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18pPvctQHZ%2F" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-chai-cream hover:text-chai-orange-light"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/baithakchaii/?igsh=aDhsaGZtczlramV4#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-chai-cream hover:text-chai-orange-light"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-chai-gold font-playfair text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-chai-orange-light">Home</Link></li>
              <li><Link to="/about" className="hover:text-chai-orange-light">Our Story</Link></li>
              <li><Link to="/blends" className="hover:text-chai-orange-light">The Blends</Link></li>
              <li><Link to="/gallery" className="hover:text-chai-orange-light">Gallery</Link></li>
              <li><Link to="/locations" className="hover:text-chai-orange-light">Our Baithaks</Link></li>
              <li><Link to="/join" className="hover:text-chai-orange-light">Join the Club</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-chai-gold font-playfair text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Home className="h-5 w-5 mr-2 text-chai-orange-light" />
                <span>Baithak Chai HQ, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-chai-orange-light" />
                <span>hello@baithakchai.pk</span>
              </li>
              <li className="flex items-center">
                <Coffee className="h-5 w-5 mr-2 text-chai-orange-light" />
                <span>Find our carts across Pakistan</span>
              </li>
              <li className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-chai-orange-light" />
                <span>Events: Follow us on social</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-chai-gold font-playfair text-xl mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">Sign up for chai-time updates and special offers</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded bg-white/10 border border-chai-orange text-white focus:outline-none focus:ring-2 focus:ring-chai-orange-light"
              />
              <button type="submit" className="w-full btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-chai-cream/20 mt-12 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Baithak Chai. All rights reserved.</p>
          <p className="mt-2">Jahan Chai, Wahan Baithak</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
