
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <section className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chai-brown-dark mb-4">🧡 Our Story</h1>
            </div>
            
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-xl font-medium text-chai-brown-dark">
                "Born from the warmth of everyday conversations."
              </p>
              
              <p>
                Baithak Chai is a tribute to the timeless desi ritual of sitting down with a cup of chai and good company. From corner dhabas to cozy verandahs, we don't just brew tea—we brew moments worth remembering.
              </p>
              
              <p>
                Our journey began in 2019 when three friends—Asad, Laila, and Omar—found themselves regularly gathering around a steaming pot of chai, discussing everything from politics to poetry. These gatherings, these "baithaks," became the highlight of their weeks.
              </p>
              
              <p>
                They realized that chai wasn't just a beverage in Pakistani culture; it was the silent facilitator of connections, the warm embrace during difficult conversations, and the celebratory toast during happy moments.
              </p>
              
              <h2>From Passion to Purpose</h2>
              
              <p>
                What started as a small cart in Lahore's bustling Food Street has now grown into multiple locations across Pakistan. Our mission remains unchanged: to preserve and promote the authentic chai experience that brings people together.
              </p>
              
              <p>
                We source our tea leaves ethically from the best gardens in the region, and our recipes have been perfected through generations of chai wisdom. Every blend tells a story, and every Baithak location is designed to foster connection.
              </p>
              
              <h2>Our Philosophy</h2>
              
              <p>
                At Baithak Chai, we believe that:
              </p>
              
              <ul>
                <li>Great chai deserves great company</li>
                <li>Conversations over chai can change perspectives</li>
                <li>Traditional brewing methods yield the most authentic flavors</li>
                <li>Every cup should transport you to a place of comfort</li>
              </ul>
              
              <p>
                Today, Baithak Chai stands as more than just a chai brand—it's a movement to reclaim the art of connection in an increasingly disconnected world.
              </p>
              
              <p>
                So whether you visit one of our locations or brew our packaged blends at home, remember that you're not just drinking chai; you're participating in a tradition that spans generations and transcends boundaries.
              </p>
              
              <p className="text-xl font-bold text-chai-orange">
                Because wherever there's chai, there's baithak. And wherever there's baithak, there's magic.
              </p>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-chai-cream rounded-xl p-8 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-chai-brown-dark mb-4">Our Commitment</h2>
              <p className="text-lg text-chai-brown mb-4">
                We're committed to ethical sourcing, sustainable practices, and supporting local communities. Every cup of Baithak Chai contributes to a better future.
              </p>
              <a href="#" className="btn-primary inline-block">Learn About Our Values</a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
