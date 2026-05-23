import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Events from "../components/Events"; // <-- 1. Uncomment this
// import Gallery from "../components/Gallery";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <Events /> {/* <-- 2. Add this back */}
      <Features />
      
      {/* <Gallery />
        <Footer /> 
      */}
    </div>
  );
};

export default Home;