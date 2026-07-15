import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Events from "../components/Events";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import teamBanner from "../assets/the team.jpeg";
import { X } from "lucide-react";

const Home = ({ onNavigate }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after a brief delay for a premium entrance feel
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative">
      <Hero onNavigate={onNavigate} />
      <Events />
      <Features />
      <Gallery />

      {/* Premium Popup Banner */}
      {showPopup && (
        <div 
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full border border-gray-100/50 animate-scale-in cursor-default"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/55 hover:bg-black/80 text-white flex items-center justify-center transition-all border-none cursor-pointer focus:outline-none shadow-md hover:scale-105 active:scale-95"
              aria-label="Close Announcement"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Banner Image only */}
            <div className="w-full relative overflow-hidden bg-gray-900 flex justify-center items-center">
              <img
                src={teamBanner}
                alt="GDGC GGV Core Team Banner"
                className="w-full h-auto object-contain max-h-[80vh] block"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;