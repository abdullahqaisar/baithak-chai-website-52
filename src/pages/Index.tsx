
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import OurStorySection from '../components/home/OurStorySection';
import TheBlendsSection from '../components/home/TheBlendsSection';
import GallerySection from '../components/home/GallerySection';
import BaithaksSection from '../components/home/BaithaksSection';
import JoinClubSection from '../components/home/JoinClubSection';

const Index = () => {
  // Preload critical images
  useEffect(() => {
    const criticalImages = [
      '/public/lovable-uploads/bf101037-1e7a-49f7-a59b-d5450a158ea4.png',
      '/public/lovable-uploads/7d85d3de-e894-47ee-9e0e-f01d7e6566fc.png',
      '/public/lovable-uploads/9ef2f9d3-0c89-4390-beab-0e030160522f.png',
      '/public/lovable-uploads/ac2067d8-c76c-4656-8dbd-9c9ed5e9b9dd.png'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OurStorySection />
      <TheBlendsSection />
      <GallerySection />
      <BaithaksSection />
      <JoinClubSection />
      <Footer />
    </div>
  );
};

export default Index;
