import React from "react";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Features from "../components/Features";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Events />
      <Features />
      <Gallery />
    </div>
  );
};

export default Home;