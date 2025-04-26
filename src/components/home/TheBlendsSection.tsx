
import React from 'react';
import { Link } from 'react-router-dom';

const BlendCard = ({ name, description, image, alt }: { name: string; description: string; image: string; alt: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      <img src={image} alt={alt} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-chai-brown-dark mb-2">{name}</h3>
        <p className="text-chai-brown mb-4">{description}</p>
        <Link to="/blends" className="text-chai-orange font-medium hover:text-chai-orange-light inline-flex items-center">
          Discover more
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const TheBlendsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">🍵 The Blends</h2>
          <p className="section-subtitle">Chai for every mood, every memory.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlendCard 
            name="Karachi Kadak" 
            description="Bold, brisk, and buzzing with energy. The perfect morning kick-starter or midday pick-me-up." 
            image="/public/lovable-uploads/62b35be7-4aa5-4329-be51-880fe3457700.png"
            alt="Karachi Kadak Chai"
          />
          <BlendCard 
            name="Lahori Masala" 
            description="Spiced to perfection with a desi flair. Rich with cardamom, cinnamon and cloves for a true Pakistani experience." 
            image="/public/lovable-uploads/57e3d15b-bf50-48bf-980c-d0b0f033300c.png"
            alt="Lahori Masala Chai"
          />
          <BlendCard 
            name="Islamabad Light Roast" 
            description="Smooth, calm, and contemplative. A gentler brew perfect for quiet evenings and thoughtful conversations." 
            image="/public/lovable-uploads/96f24c07-b73f-4a98-a4d8-5b16130c9b72.png"
            alt="Islamabad Light Roast Chai"
          />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-chai-brown italic mb-8">Find your flavor, find your baithak.</p>
          <Link to="/blends" className="btn-primary">View All Our Blends</Link>
        </div>
      </div>
    </section>
  );
};

export default TheBlendsSection;
