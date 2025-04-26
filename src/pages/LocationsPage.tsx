
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LocationCard from '../components/locations/LocationCard';
import RequestLocation from '../components/locations/RequestLocation';
import { locations } from '../data/locations';

const LocationsPage = () => {
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
            <RequestLocation />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationsPage;
