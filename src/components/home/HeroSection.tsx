
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-chai-brown-dark to-chai-brown pt-16">
      <div className="container-wide relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Jahan Chai, <br/>
              <span className="text-chai-orange-light">Wahan Baithak</span>
            </h1>
            <p className="text-xl md:text-2xl text-chai-cream max-w-lg">
              More than just chai—we're brewing moments worth remembering with every cup.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/blends" className="btn-primary text-center">
                Explore Our Blends
              </Link>
              <Link to="/locations" className="btn-secondary border-white text-white hover:bg-white hover:text-chai-brown-dark text-center">
                Find a Baithak Near You
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/bf101037-1e7a-49f7-a59b-d5450a158ea4.png"
                alt="Baithak Chai Cup" 
                className="max-w-md rounded-lg shadow-2xl"
              />
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-10 bg-white/30 rounded-full animate-steam"></div>
                <div className="w-1 h-8 bg-white/30 rounded-full animate-steam ml-2" style={{animationDelay: '0.3s'}}></div>
                <div className="w-1 h-12 bg-white/30 rounded-full animate-steam ml-1" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
