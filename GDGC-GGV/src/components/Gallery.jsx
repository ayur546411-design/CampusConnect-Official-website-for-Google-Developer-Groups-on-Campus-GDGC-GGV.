import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import photo1 from '../assets/gallary1.jpg';
import photo2 from '../assets/gallary2.jpg';
import photo3 from '../assets/gallary3.jpg';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const teams = [
    {
      id: 0,
      name: "UI/UX Team",
      color: "text-[#1a73e8]", // blue
      image: photo2,
    },
    {
      id: 1,
      name: "webDev Team",
      color: "text-[#ea4335]", // red
      image: photo3,
    },
    {
      id: 2,
      name: "AI-DS Team",
      color: "text-[#fbbc05]", // orange/yellow
      image: photo1,
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + teams.length) % teams.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % teams.length);
  };

  const getCardClass = (index) => {
    const diff = (index - activeIndex + teams.length) % teams.length;

    if (diff === 0) {
      // Center focused card
      return "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] sm:w-[60%] md:w-[50%] lg:w-[42%] aspect-[4/3] z-20 scale-100 opacity-100 border-4 border-white shadow-2xl rounded-3xl transition-all duration-500 ease-in-out pointer-events-auto";
    } else if (diff === 2) {
      // Left card peeking
      return "absolute left-[0%] sm:left-[4%] md:left-[8%] lg:left-[10%] top-1/2 -translate-y-1/2 w-[46%] sm:w-[40%] md:w-[36%] lg:w-[34%] aspect-[4/3] z-10 scale-[0.76] sm:scale-[0.82] opacity-50 lg:opacity-60 rounded-3xl border-4 border-white/70 shadow-md transition-all duration-500 ease-in-out cursor-pointer origin-left hover:opacity-85 pointer-events-auto";
    } else {
      // Right card peeking
      return "absolute right-[0%] sm:right-[4%] md:right-[8%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[46%] sm:w-[40%] md:w-[36%] lg:w-[34%] aspect-[4/3] z-10 scale-[0.76] sm:scale-[0.82] opacity-50 lg:opacity-60 rounded-3xl border-4 border-white/70 shadow-md transition-all duration-500 ease-in-out cursor-pointer origin-right hover:opacity-85 pointer-events-auto";
    }
  };

  return (
    <section id="gallery" className="w-full bg-[#f8f9fa] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Soft Peach/Beige Rounded Container */}
        <div className="bg-[#fcf3e6] rounded-[2.5rem] border border-[#f5e3cc] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">

          {/* SNEAK PEEK Header with custom colorful floral branch SVGs */}
          <div className="flex items-center justify-center gap-4 mb-10 select-none">
            {/* Left Leaf Branch */}
            <div className="opacity-95">
              <svg className="w-8 h-5 rotate-180" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8 C12 6, 14 2, 10 1 C8 3, 8 6, 8 8 Z" fill="#ea4335" />
                <path d="M16 10 C20 8, 22 4, 18 3 C16 5, 16 8, 16 10 Z" fill="#34a853" />
                <path d="M24 12 C28 10, 30 6, 26 5 C24 7, 24 10, 24 12 Z" fill="#fbbc05" />
              </svg>
            </div>

            <h2 className="text-2xl md:text-3xl font-black tracking-widest text-[#202124] uppercase text-center font-sans">
              SNEAK PEEK
            </h2>

            {/* Right Leaf Branch */}
            <div className="opacity-95">
              <svg className="w-8 h-5" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8 C12 6, 14 2, 10 1 C8 3, 8 6, 8 8 Z" fill="#ea4335" />
                <path d="M16 10 C20 8, 22 4, 18 3 C16 5, 16 8, 16 10 Z" fill="#34a853" />
                <path d="M24 12 C28 10, 30 6, 26 5 C24 7, 24 10, 24 12 Z" fill="#fbbc05" />
              </svg>
            </div>
          </div>

          {/* Interactive 3D Cover Flow Slider */}
          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] flex items-center justify-between">

            {/* Prev Navigation Button */}
            <button 
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all text-gray-700 active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slider Container */}
            <div className="relative w-full h-full overflow-hidden pointer-events-none">
              {teams.map((team, idx) => {
                const diff = (idx - activeIndex + teams.length) % teams.length;
                const isLeft = diff === 2;
                const isRight = diff === 1;

                return (
                  <div
                    key={team.id}
                    onClick={() => {
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                    className={getCardClass(idx)}
                  >
                    <div className="w-full h-full relative group">
                      <img
                        src={team.image}
                        alt={`${team.name} team representation`}
                        className="w-full h-full object-cover rounded-[1.2rem]"
                      />
                      {/* Floating White Pill Label at the bottom of the card */}
                      <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 sm:px-8 py-2 sm:py-3 rounded-[1.8rem] shadow-lg border border-gray-100 whitespace-nowrap font-bold text-xs sm:text-sm select-none transition-all duration-300 ${
                        diff === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none lg:opacity-100 lg:scale-100'
                      }`}>
                        <span className={team.color}>{team.name}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Navigation Button */}
            <button 
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all text-gray-700 active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-3.5 mt-8">
            {teams.map((team, idx) => (
              <span 
                key={team.id}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  activeIndex === idx ? 'w-7 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-[#c4c7c5] hover:bg-gray-400'
                }`}
              ></span>
            ))}
          </div>

          {/* Bottom Left Corner Floral Vector Art Drawing */}
          <div className="absolute bottom-0 left-0 pointer-events-none w-20 h-28 hidden sm:block">
            <svg className="w-full h-full" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Green stems */}
              <path d="M 15 120 C 15 90, 20 70, 42 45" stroke="#137333" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 15 120 C 25 105, 32 95, 38 75" stroke="#137333" strokeWidth="2" strokeLinecap="round" />
              {/* Green leaves */}
              <path d="M 28 85 C 38 80, 42 70, 34 62 C 28 70, 28 78, 28 85 Z" fill="#34a853" />
              <path d="M 32 68 C 42 62, 45 52, 38 45 C 32 52, 32 60, 32 68 Z" fill="#34a853" />
              {/* Orange/Yellow Flowers */}
              <circle cx="42" cy="45" r="9" fill="#fbbc05" />
              <circle cx="42" cy="45" r="4" fill="#ea4335" />
              <circle cx="38" cy="75" r="6" fill="#ea4335" />
              <circle cx="38" cy="75" r="2.5" fill="#fbbc05" />
            </svg>
          </div>

          {/* Bottom Right Corner Floral Vector Art Drawing */}
          <div className="absolute bottom-0 right-0 pointer-events-none w-20 h-28 hidden sm:block">
            <svg className="w-full h-full" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Green stems */}
              <path d="M 65 120 C 65 90, 60 70, 38 45" stroke="#137333" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 65 120 C 55 105, 48 95, 42 75" stroke="#137333" strokeWidth="2" strokeLinecap="round" />
              {/* Green leaves */}
              <path d="M 52 85 C 42 80, 38 70, 46 62 C 52 70, 52 78, 52 85 Z" fill="#34a853" />
              <path d="M 48 68 C 38 62, 35 52, 42 45 C 48 52, 48 60, 48 68 Z" fill="#34a853" />
              {/* Orange/Yellow Flowers */}
              <circle cx="38" cy="45" r="9" fill="#fbbc05" />
              <circle cx="38" cy="45" r="4" fill="#ea4335" />
              <circle cx="42" cy="75" r="6" fill="#ea4335" />
              <circle cx="42" cy="75" r="2.5" fill="#fbbc05" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}