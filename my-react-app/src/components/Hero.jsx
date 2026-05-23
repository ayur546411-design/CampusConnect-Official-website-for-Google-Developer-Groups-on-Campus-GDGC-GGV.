import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero.png';

// 1. IMPORT YOUR NEW IMAGE HERE
// Make sure the file name exactly matches what is in your assets folder
import bottomImage from '../assets/bottom-image.png'; 

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white pt-8 pb-12 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- MAIN HERO CONTENT --- */}
        <div className="w-full relative min-h-[500px]">
          <img 
            src={heroBg} 
            alt="GDGC Community Illustration" 
            className="w-full h-auto max-h-[85vh] object-contain object-right"
          />

          {/* --- EXACTLY POSITIONED TEXT OVERLAY --- */}
          <div className="absolute top-0 left-0 pt-8 sm:pt-12 md:pt-16 lg:pt-24 z-10 w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold uppercase leading-[1.05] mb-5 tracking-tight">
              <div className="text-[#ea4335]">CODING <span className="text-[#202124]">THE</span></div>
              <div className="text-[#4285f4]">FUTURE</div>
              <div className="text-[#34a853]">ROOTED IN</div>
              <div className="text-[#fbbc04]">INNOVATION</div>
            </h1>
            
            <div className="flex items-center gap-1.5 mb-6">
              <span className="w-10 h-[3px] bg-[#fbbc04] rounded-full"></span>
              <span className="text-[#34a853] text-[10px] leading-none">◆</span>
              <span className="w-1.5 h-[3px] bg-[#fbbc04] rounded-full"></span>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium mb-8 max-w-[90%] leading-snug">
              Empowering students to learn, build, innovate and grow together as a community.
            </p>

            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 lg:px-6 lg:py-3.5 bg-[#188038] hover:bg-[#105c26] text-white text-base lg:text-lg font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
              Join the Community
              <ChevronRight className="w-5 h-5" />
            </button>
            
          </div>
        </div>
        
        {/* --- NEW BOTTOM IMAGE SECTION --- */}
        {/* mt-16 adds space above it, flex & justify-center centers it */}
        <div className="mt-16 flex justify-center items-center w-full">
          <img 
            src={bottomImage} 
            alt="Additional Hero Graphic" 
            className="w-full h-16 sm:h-14 object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}