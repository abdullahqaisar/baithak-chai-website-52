
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import OurStorySection from '../components/home/OurStorySection';
import TheBlendsSection from '../components/home/TheBlendsSection';
import GallerySection from '../components/home/GallerySection';
import BaithaksSection from '../components/home/BaithaksSection';
import JoinClubSection from '../components/home/JoinClubSection';

const Index = () => {
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
