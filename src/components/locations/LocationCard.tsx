
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { BaithakLocation } from '@/types/locations';

interface LocationCardProps {
  location: BaithakLocation;
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
      <img 
        src={location.image} 
        alt={`Baithak Chai ${location.city}`} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-chai-brown-dark">{location.city}</h3>
          <span className={`inline-block text-xs px-3 py-1 rounded-full ${
            location.type === 'Cart' 
              ? 'bg-chai-orange text-white' 
              : location.type === 'Café' 
                ? 'bg-chai-brown-dark text-white' 
                : 'bg-chai-cream text-chai-brown-dark'
          }`}>
            {location.type}
          </span>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex">
            <MapPin className="h-5 w-5 text-chai-orange mr-2" />
            <p className="text-chai-brown">{location.address}</p>
          </div>
          
          {location.phone && (
            <div className="flex">
              <Phone className="h-5 w-5 text-chai-orange mr-2" />
              <p className="text-chai-brown">{location.phone}</p>
            </div>
          )}
          
          <div className="flex">
            <Clock className="h-5 w-5 text-chai-orange mr-2" />
            <p className="text-chai-brown">{location.hours}</p>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <a 
            href={location.mapLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-chai-orange font-medium hover:text-chai-orange-light inline-flex items-center"
          >
            Get Directions
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
