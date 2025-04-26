
import React, { useState } from 'react';
import { Coffee, Gift, Calendar } from 'lucide-react';

const JoinClubSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setName('');
    }, 1500);
  };

  return (
    <section 
      className="section-padding relative"
      style={{
        background: `linear-gradient(rgba(80, 45, 22, 0.85), rgba(80, 45, 22, 0.85)), url('/public/lovable-uploads/62b35be7-4aa5-4329-be51-880fe3457700.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container-wide">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-chai-brown-dark mb-6">🌟 Join the Baithak Club</h2>
              <p className="text-chai-brown mb-8">
                For those who believe chai is more than just a drink. Become part of our community and enjoy exclusive benefits.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Coffee className="h-6 w-6 text-chai-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-chai-brown-dark">Exclusive Discounts</h3>
                    <p className="text-chai-brown">Special pricing on our signature blends and merchandise</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Gift className="h-6 w-6 text-chai-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-chai-brown-dark">Baithak-themed Merch</h3>
                    <p className="text-chai-brown">First access to our limited edition merchandise</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Calendar className="h-6 w-6 text-chai-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-chai-brown-dark">Community Events</h3>
                    <p className="text-chai-brown">Early invites to chai tastings and cultural gatherings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-chai-cream p-8 md:p-12">
              <h3 className="text-2xl font-bold text-chai-brown-dark mb-6">Sign Up Now</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h4 className="text-xl font-medium text-green-800 mb-2">Thank you for joining!</h4>
                  <p className="text-green-700">Welcome to the Baithak Club! Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-chai-brown-dark mb-1 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn-primary flex justify-center items-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Join the Club"
                      )}
                    </button>
                  </div>
                </form>
              )}
              
              <p className="mt-6 text-sm text-chai-brown text-center">
                By joining, you'll receive our newsletter. Don't worry, we respect your privacy and won't spam you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinClubSection;
