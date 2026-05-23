import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Events from "../components/Events";
import Gallery from "../components/Gallery"; // <-- 1. Uncomment this line!
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Events />
      <Features />
      <Gallery /> {/* <-- 2. Add this right here! */}
      
      {/* Leaving just the Footer hidden for this round
      <Footer /> 
      */}
    </div>
  );
};

export default Home;