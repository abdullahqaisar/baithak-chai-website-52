
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BlendCard = ({ name, description, image, details }: { 
  name: string; 
  description: string; 
  image: string; 
  details: { 
    strength: string; 
    profile: string;
    ingredients: string[];
    pairsWith: string[];
  } 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img src={image} alt={name} className="w-full h-72 md:h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-chai-brown-dark mb-2">{name}</h3>
          <p className="text-chai-brown mb-4">{description}</p>
          
          <div className="mb-4">
            <span className="inline-block bg-chai-cream text-chai-brown-dark text-sm px-3 py-1 rounded-full mr-2 mb-2">
              Strength: {details.strength}
            </span>
            <span className="inline-block bg-chai-cream text-chai-brown-dark text-sm px-3 py-1 rounded-full mb-2">
              {details.profile}
            </span>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-chai-brown-dark mb-1">Ingredients:</h4>
            <ul className="text-sm text-chai-brown">
              {details.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-1">• {ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-chai-brown-dark mb-1">Pairs well with:</h4>
            <div className="flex flex-wrap">
              {details.pairsWith.map((item, index) => (
                <span key={index} className="inline-block bg-chai-orange/10 text-chai-brown-dark text-xs px-2 py-1 rounded mr-2 mb-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlendsPage = () => {
  const blends = [
    {
      name: "Karachi Kadak",
      description: "Bold, brisk, and buzzing with energy. The perfect morning kick-starter or midday pick-me-up.",
      image: "/lovable-uploads/21abbafe-b493-4f69-a93a-a238911bfe9b.png",
      details: {
        strength: "Strong",
        profile: "Bold & Robust",
        ingredients: ["Premium CTC Black Tea", "Fresh Ginger", "Cardamom", "Cloves"],
        pairsWith: ["Paratha", "Biscuits", "Samosa", "Morning Conversations"]
      }
    },
    {
      name: "Lahori Masala",
      description: "Spiced to perfection with a desi flair. Rich with cardamom, cinnamon and cloves for a true Pakistani experience.",
      image: "/lovable-uploads/153c8739-6daa-4a2d-a738-28e7f7018905.png",
      details: {
        strength: "Medium-Strong",
        profile: "Rich & Aromatic",
        ingredients: ["Premium Assam Tea", "Green Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Star Anise"],
        pairsWith: ["Pakora", "Jalebi", "Rainy Days", "Family Gatherings"]
      }
    },
    {
      name: "Islamabad Light Roast",
      description: "Smooth, calm, and contemplative. A gentler brew perfect for quiet evenings and thoughtful conversations.",
      image: "/lovable-uploads/dadc8bf4-2fc3-4618-ab12-1b6e7eab683a.png",
      details: {
        strength: "Mild-Medium",
        profile: "Smooth & Delicate",
        ingredients: ["Premium Darjeeling Tea", "Light Touch of Cardamom", "Saffron", "Rose Petals"],
        pairsWith: ["Cookies", "Cake", "Evening Reflections", "Book Reading"]
      }
    },
    {
      name: "Peshawar Kahwa",
      description: "A green tea blend with nuts and spices, inspired by the traditional Pashtun hospitality.",
      image: "/public/lovable-uploads/bf101037-1e7a-49f7-a59b-d5450a158ea4.png",
      details: {
        strength: "Medium",
        profile: "Nutty & Aromatic",
        ingredients: ["Premium Green Tea", "Almonds", "Cardamom", "Cinnamon", "Saffron"],
        pairsWith: ["Dried Fruits", "Nuts", "Cultural Discussions", "After Dinner"]
      }
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-wide">
          <section className="mb-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chai-brown-dark mb-4">🍵 The Blends</h1>
              <p className="text-xl text-chai-brown max-w-2xl mx-auto">
                Chai for every mood, every memory. Explore our signature flavors, each designed to match a different moment in your day.
              </p>
            </div>
            
            <div className="space-y-12">
              {blends.map((blend, index) => (
                <BlendCard 
                  key={index}
                  name={blend.name}
                  description={blend.description}
                  image={blend.image}
                  details={blend.details}
                />
              ))}
            </div>
          </section>
          
          <section className="mb-16">
            <div className="bg-chai-cream rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-chai-brown-dark mb-4">Brewing the Perfect Cup</h2>
              <p className="text-lg text-chai-brown mb-6">
                Each blend has its own character, but all deserve proper brewing to unlock their full potential.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4 text-chai-orange">1</div>
                  <h3 className="font-bold mb-2 text-chai-brown-dark">The Right Ratio</h3>
                  <p className="text-chai-brown">2 teaspoons of tea leaves per cup of water. Adjust to taste as needed.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4 text-chai-orange">2</div>
                  <h3 className="font-bold mb-2 text-chai-brown-dark">Fresh Ingredients</h3>
                  <p className="text-chai-brown">Always use fresh water and ingredients. Add milk and sugar as desired.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4 text-chai-orange">3</div>
                  <h3 className="font-bold mb-2 text-chai-brown-dark">Patience Pays</h3>
                  <p className="text-chai-brown">Let it brew for 3-5 minutes. Good chai takes time. Don't rush the process.</p>
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

export default BlendsPage;
