
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Mail, Calendar, Home } from 'lucide-react';

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
              <a href="#" className="text-chai-cream hover:text-chai-orange-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="text-chai-cream hover:text-chai-orange-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="text-chai-cream hover:text-chai-orange-light">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
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
