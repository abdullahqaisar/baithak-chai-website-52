
import React from 'react';
import { Link } from 'react-router-dom';

const OurStorySection = () => {
  return (
    <section className="section-padding bg-chai-cream">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="section-title text-chai-brown-dark">
            🧡 Our Story
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-chai-brown-dark mb-4">
              "Born from the warmth of everyday conversations."
            </h3>
            <p className="text-chai-brown mb-6 leading-relaxed">
              Baithak Chai is a tribute to the timeless desi ritual of sitting down with a cup of chai and good company. From corner dhabas to cozy verandahs, we don't just brew tea—we brew moments worth remembering.
            </p>
            <p className="text-chai-brown mb-8 leading-relaxed">
              Our journey began with a simple idea: to celebrate the chai culture that brings people together. Every cup we serve carries the essence of connection, conversation, and comfort that defines the Pakistani chai experience.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Read Our Full Story
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="/public/lovable-uploads/9ef2f9d3-0c89-4390-beab-0e030160522f.png"
              alt="Our Story" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
