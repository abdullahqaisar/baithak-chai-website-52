
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Coffee, Gift, Calendar, Check } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-chai-orange mb-4">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-chai-brown-dark">{title}</h3>
      <p className="text-chai-brown">{description}</p>
    </div>
  );
};

const JoinPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    howHeard: '',
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        howHeard: '',
        agreeTerms: false,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chai-brown-dark mb-4">🌟 Join the Baithak Club</h1>
              <p className="text-xl text-chai-brown max-w-2xl mx-auto">
                For those who believe chai is more than just a drink. Become part of our community and enjoy exclusive benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <BenefitCard 
                icon={<Coffee className="h-8 w-8" />} 
                title="Exclusive Discounts" 
                description="Enjoy special pricing on all our signature blends, merchandise, and in-store purchases. Members save up to 15% on every order." 
              />
              <BenefitCard 
                icon={<Gift className="h-8 w-8" />} 
                title="Baithak-themed Merch" 
                description="Get first access to our limited edition merchandise including cups, kettles, and apparel. Plus, receive a welcome gift when you join!" 
              />
              <BenefitCard 
                icon={<Calendar className="h-8 w-8" />} 
                title="Community Events" 
                description="Receive early invitations to our chai tastings, cultural gatherings, and special events. Connect with fellow chai enthusiasts." 
              />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-chai-brown-dark mb-6">Why Join Our Club?</h2>
                    
                    <ul className="space-y-4">
                      <li className="flex">
                        <Check className="h-6 w-6 text-chai-orange mr-3 flex-shrink-0" />
                        <span>Monthly chai subscription with rotating blends</span>
                      </li>
                      <li className="flex">
                        <Check className="h-6 w-6 text-chai-orange mr-3 flex-shrink-0" />
                        <span>Members-only pricing on all products</span>
                      </li>
                      <li className="flex">
                        <Check className="h-6 w-6 text-chai-orange mr-3 flex-shrink-0" />
                        <span>Birthday rewards and special occasion gifts</span>
                      </li>
                      <li className="flex">
                        <Check className="h-6 w-6 text-chai-orange mr-3 flex-shrink-0" />
                        <span>Early access to seasonal and limited edition blends</span>
                      </li>
                      <li className="flex">
                        <Check className="h-6 w-6 text-chai-orange mr-3 flex-shrink-0" />
                        <span>Invitation to member-exclusive tasting sessions</span>
                      </li>
                      <li className="flex">
                        <Check className="h-6 w-6 text-chai-orange mr-3 flex-shrink-0" />
                        <span>Free shipping on orders over Rs. 1000</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 p-4 bg-chai-cream/40 rounded-lg">
                      <p className="text-chai-brown-dark font-medium">
                        "Joining the Baithak Club was one of the best decisions I've made. The community is warm and the chai is exceptional!"
                      </p>
                      <p className="text-chai-brown mt-2 italic">— Ayesha K., Member since 2022</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 bg-chai-cream p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-chai-brown-dark mb-6">Sign Up Today</h3>
                    
                    {isSubmitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <h4 className="text-xl font-medium text-green-800 mb-2">Welcome to the Baithak Club!</h4>
                        <p className="text-green-700 mb-4">Thank you for joining our community of chai enthusiasts. Check your email for confirmation and your welcome details.</p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="btn-primary bg-green-600 hover:bg-green-700"
                        >
                          Sign Up Another Member
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-chai-brown-dark mb-1 font-medium">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-chai-brown-dark mb-1 font-medium">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-chai-brown-dark mb-1 font-medium">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                            placeholder="Your Phone Number"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="city" className="block text-chai-brown-dark mb-1 font-medium">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                            placeholder="Your City"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="howHeard" className="block text-chai-brown-dark mb-1 font-medium">How did you hear about us?</label>
                          <select
                            id="howHeard"
                            name="howHeard"
                            value={formData.howHeard}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-chai-brown/20 focus:outline-none focus:ring-2 focus:ring-chai-orange"
                            required
                          >
                            <option value="">Select an option</option>
                            <option value="social">Social Media</option>
                            <option value="friend">Friend or Family</option>
                            <option value="event">At an Event</option>
                            <option value="store">Visited a Store</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="agreeTerms"
                              name="agreeTerms"
                              type="checkbox"
                              checked={formData.agreeTerms}
                              onChange={handleCheckboxChange}
                              className="w-4 h-4 text-chai-orange focus:ring-chai-orange border-chai-brown/20 rounded"
                              required
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="agreeTerms" className="text-chai-brown">
                              I agree to receive promotional emails and SMS from Baithak Chai. I have read and agree to the Terms of Service and Privacy Policy.
                            </label>
                          </div>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinPage;
