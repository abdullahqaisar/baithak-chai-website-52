
import React from 'react';
import { Coffee } from 'lucide-react';

const RequestLocation = () => {
  return (
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
  );
};

export default RequestLocation;
