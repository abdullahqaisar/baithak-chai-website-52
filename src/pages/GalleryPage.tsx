
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  location: string;
}

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'moments' | 'baithaks'>('all');
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "/public/lovable-uploads/110d21db-9a75-4d67-a0b9-93c48deaee8a.png",
      alt: "Family enjoying chai",
      caption: "Sunday gatherings are better with chai",
      location: "Karachi"
    },
    {
      id: 2,
      src: "/public/lovable-uploads/c485bd56-0c13-4032-9c21-da684503d540.png",
      alt: "Friends laughing over chai",
      caption: "When stories and chai flow together",
      location: "Lahore"
    },
    {
      id: 3,
      src: "/public/lovable-uploads/7d85d3de-e894-47ee-9e0e-f01d7e6566fc.png",
      alt: "Father and daughter with chai",
      caption: "Making memories, one cup at a time",
      location: "Islamabad"
    },
    {
      id: 4,
      src: "/public/lovable-uploads/62b35be7-4aa5-4329-be51-880fe3457700.png",
      alt: "Chai cups",
      caption: "Our signature blends",
      location: "Baithak Café"
    },
    {
      id: 5,
      src: "/public/lovable-uploads/96f24c07-b73f-4a98-a4d8-5b16130c9b72.png",
      alt: "Tea preparation",
      caption: "The art of brewing",
      location: "Multan"
    },
    {
      id: 6,
      src: "/public/lovable-uploads/028b0290-521d-4f8c-890c-374b9a55e2f3.png",
      alt: "Tea cart",
      caption: "Spreading chai love in every corner",
      location: "Peshawar"
    },
    {
      id: 7,
      src: "/public/lovable-uploads/57e3d15b-bf50-48bf-980c-d0b0f033300c.png",
      alt: "Chai and books",
      caption: "Perfect companions",
      location: "Baithak Reading Corner"
    },
    {
      id: 8,
      src: "/public/lovable-uploads/bf101037-1e7a-49f7-a59b-d5450a158ea4.png",
      alt: "Steaming chai cup",
      caption: "The comfort in every cup",
      location: "Faisalabad"
    },
  ];
  
  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : activeTab === 'moments' 
      ? galleryItems.filter(item => !item.location.includes("Baithak"))
      : galleryItems.filter(item => item.location.includes("Baithak"));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chai-brown-dark mb-4">📸 Chai Moments Gallery</h1>
              <p className="text-xl text-chai-brown max-w-2xl mx-auto">
                Real people, real sips. Snapshots of chai shared, laughter captured, and memories steeped in every cup.
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeTab === 'all'
                      ? 'bg-chai-orange text-white'
                      : 'bg-white text-chai-brown-dark hover:bg-chai-orange/10'
                  }`}
                  onClick={() => setActiveTab('all')}
                >
                  All Photos
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === 'moments'
                      ? 'bg-chai-orange text-white'
                      : 'bg-white text-chai-brown-dark hover:bg-chai-orange/10'
                  }`}
                  onClick={() => setActiveTab('moments')}
                >
                  Chai Moments
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeTab === 'baithaks'
                      ? 'bg-chai-orange text-white'
                      : 'bg-white text-chai-brown-dark hover:bg-chai-orange/10'
                  }`}
                  onClick={() => setActiveTab('baithaks')}
                >
                  Our Baithaks
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-64 object-cover" 
                  />
                  <div className="p-4">
                    <p className="font-medium text-chai-brown-dark">{item.caption}</p>
                    <p className="text-sm text-chai-brown">📍 {item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-chai-brown-light text-white rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Share Your #MeriBaithak Moments</h2>
              <p className="text-lg text-chai-cream mb-6">
                Tag us in your chai moments on social media and become part of our gallery.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-chai-cream hover:text-chai-orange-light">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="text-chai-cream hover:text-chai-orange-light">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-chai-cream hover:text-chai-orange-light">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
