
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { MapPin, Phone, Clock, Coffee } from 'lucide-react';

interface BaithakLocation {
  id: number;
  city: string;
  type: 'Cart' | 'Café' | 'Partner Dhaba';
  address: string;
  phone?: string;
  hours: string;
  image: string;
  mapLink: string;
}

const LocationCard = ({ location }: { location: BaithakLocation }) => {
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

const LocationsPage = () => {
  const locations: BaithakLocation[] = [
    {
      id: 1,
      city: "Karachi",
      type: "Café",
      address: "Tea Street, Boat Basin, Clifton",
      phone: "+92-21-12345678",
      hours: "Daily, 9:00 AM - 11:00 PM",
      image: "/public/lovable-uploads/028b0290-521d-4f8c-890c-374b9a55e2f3.png",
      mapLink: "#",
    },
    {
      id: 2,
      city: "Lahore",
      type: "Cart",
      address: "Food Street, Old Anarkali", 
      hours: "Daily, 3:00 PM - 12:00 AM",
      image: "/public/lovable-uploads/c485bd56-0c13-4032-9c21-da684503d540.png",
      mapLink: "#",
    },
    {
      id: 3,
      city: "Islamabad",
      type: "Café",
      address: "Blue Area, F-7 Markaz",
      phone: "+92-51-87654321",
      hours: "Daily, 8:00 AM - 10:00 PM",
      image: "/public/lovable-uploads/110d21db-9a75-4d67-a0b9-93c48deaee8a.png",
      mapLink: "#",
    },
    {
      id: 4,
      city: "Peshawar",
      type: "Partner Dhaba",
      address: "Qissa Khwani Bazaar",
      hours: "Daily, 7:00 AM - 11:00 PM",
      image: "/public/lovable-uploads/62b35be7-4aa5-4329-be51-880fe3457700.png",
      mapLink: "#",
    },
    {
      id: 5,
      city: "Multan",
      type: "Cart",
      address: "Near Ghanta Ghar",
      hours: "Daily, 4:00 PM - 12:00 AM",
      image: "/public/lovable-uploads/57e3d15b-bf50-48bf-980c-d0b0f033300c.png",
      mapLink: "#",
    },
    {
      id: 6,
      city: "Faisalabad",
      type: "Partner Dhaba",
      address: "D-Ground Market",
      phone: "+92-41-98765432",
      hours: "Daily, 10:00 AM - 11:00 PM",
      image: "/public/lovable-uploads/96f24c07-b73f-4a98-a4d8-5b16130c9b72.png",
      mapLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chai-brown-dark mb-4">🏡 Our Baithaks</h1>
              <p className="text-xl text-chai-brown max-w-2xl mx-auto">
                Wherever you are, a Baithak is never far. Visit our tea carts, pop-up cafés, or partner dhabas across Pakistan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-chai-cream rounded-xl p-8">
              <div className="md:flex items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold text-chai-brown-dark mb-4">Looking for a Baithak in your area?</h2>
                  <p className="text-lg text-chai-brown">
                    We're expanding rapidly! Let us know if you'd like to see a Baithak Chai location in your neighborhood.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                  <a href="#request-form" className="btn-primary">Request a Location</a>
                </div>
              </div>
            </div>
          </section>
          
          <section id="request-form" className="mb-16">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8">
              <div className="text-center mb-8">
                <Coffee className="h-12 w-12 text-chai-orange mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-chai-brown-dark mb-2">Request a Baithak</h2>
                <p className="text-chai-brown">
                  Fill out the form below and we'll consider bringing a Baithak to your area.
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-chai-brown-dark mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-chai-brown-dark mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-chai-brown-dark mb-1 font-medium">Requested City/Area</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                    placeholder="City and specific area"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-chai-brown-dark mb-1 font-medium">Why would this location be perfect for Baithak Chai?</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                    placeholder="Tell us about the area, potential customers, etc."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationsPage;
