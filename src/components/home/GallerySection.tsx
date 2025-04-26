
import React from 'react';
import { Link } from 'react-router-dom';

const GalleryImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className={`overflow-hidden rounded-lg shadow-md ${className || ''}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
      />
    </div>
  );
};

const GallerySection = () => {
  return (
    <section className="section-padding bg-chai-brown-light">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">📸 Chai Moments Gallery</h2>
          <p className="section-subtitle text-chai-cream">
            Real people, real sips. Snapshots of chai shared, laughter captured, and memories steeped in every cup.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <GalleryImage 
            src="/public/lovable-uploads/110d21db-9a75-4d67-a0b9-93c48deaee8a.png" 
            alt="Chai Moments 1"
            className="col-span-2 row-span-2" 
          />
          <GalleryImage 
            src="/public/lovable-uploads/c485bd56-0c13-4032-9c21-da684503d540.png" 
            alt="Chai Moments 2" 
          />
          <GalleryImage 
            src="/public/lovable-uploads/7d85d3de-e894-47ee-9e0e-f01d7e6566fc.png" 
            alt="Chai Moments 3" 
          />
          <GalleryImage 
            src="/public/lovable-uploads/57e3d15b-bf50-48bf-980c-d0b0f033300c.png" 
            alt="Chai Moments 4" 
          />
          <GalleryImage 
            src="/public/lovable-uploads/96f24c07-b73f-4a98-a4d8-5b16130c9b72.png" 
            alt="Chai Moments 5" 
          />
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
            <p className="text-xl md:text-2xl text-white font-playfair mb-3">
              Tag us with #MeriBaithak
            </p>
            <p className="text-chai-cream">
              Because every baithak is worth sharing.
            </p>
          </div>
          
          <div>
            <Link to="/gallery" className="btn-primary bg-white text-chai-brown-dark hover:bg-chai-cream">
              Visit Full Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
