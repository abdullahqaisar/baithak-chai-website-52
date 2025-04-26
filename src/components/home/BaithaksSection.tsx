
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const LocationCard = ({ city, address, image }: { city: string; address: string; image: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={city} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-chai-brown-dark mb-2">{city}</h3>
        <div className="flex items-start mb-4">
          <MapPin className="h-5 w-5 text-chai-orange mr-2 mt-0.5" />
          <p className="text-chai-brown">{address}</p>
        </div>
        <Link to="/locations" className="text-chai-orange font-medium hover:text-chai-orange-light inline-flex items-center">
          View Details
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const BaithaksSection = () => {
  return (
    <section className="section-padding bg-chai-cream">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="section-title">🏡 Our Baithaks</h2>
          <p className="section-subtitle">
            Wherever you are, a Baithak is never far. Visit our tea carts, pop-up cafés, or partner dhabas across Pakistan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <LocationCard 
            city="Karachi"
            address="Tea Street, Boat Basin, Clifton"
            image="/public/lovable-uploads/028b0290-521d-4f8c-890c-374b9a55e2f3.png"
          />
          <LocationCard 
            city="Lahore"
            address="Food Street, Old Anarkali" 
            image="/public/lovable-uploads/c485bd56-0c13-4032-9c21-da684503d540.png"
          />
          <LocationCard 
            city="Islamabad"
            address="Blue Area, F-7 Markaz"
            image="/public/lovable-uploads/110d21db-9a75-4d67-a0b9-93c48deaee8a.png"
          />
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-chai-brown italic mb-8">Sip, sit, and stay awhile.</p>
          <Link to="/locations" className="btn-primary">Find All Locations</Link>
        </div>
      </div>
    </section>
  );
};

export default BaithaksSection;
