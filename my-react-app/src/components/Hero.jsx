import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroBg from '../assets/hero.png';
 

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="w-full bg-white pb-12 overflow-hidden font-sans relative min-h-[550px] sm:min-h-[600px] lg:min-h-[680px] flex flex-col justify-between">
      
      {/* Scope Style for premium motion animations and dropshadow visibility */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes lineGrow {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 3rem;
            opacity: 1;
          }
        }
        @keyframes dotScale {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-hero-text {
          opacity: 0;
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-hero-line {
          opacity: 0;
          animation: lineGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-hero-dot {
          opacity: 0;
          animation: dotScale 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .hero-text-shadow {
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.35), 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        .hero-subtext-shadow {
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5), 0 4px 18px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      {/* Full-bleed absolute background illustration covering the entire hero section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <img 
          src={heroBg} 
          alt="GDGC GGV Community Background" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Premium responsive contrast gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent md:from-black/60 md:via-black/25 md:to-transparent"></div>
      </div>

      {/* Main Content Area overlaying the background */}
      <div className="relative z-10 flex-grow flex items-center w-full">
        <div className="w-full pl-6 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-28 pr-6 text-left py-12">
          
          <div className="max-w-md sm:max-w-lg lg:max-w-2xl space-y-6">
            
            <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-extrabold uppercase leading-[1.05] tracking-tight hero-text-shadow">
              <div className="text-[#ea4335] animate-hero-text [animation-delay:150ms]">CODING <span className="text-white">THE</span></div>
              <div className="text-[#4285f4] animate-hero-text [animation-delay:250ms]">FUTURE</div>
              <div className="text-[#34a853] animate-hero-text [animation-delay:350ms]">ROOTED IN</div>
              <div className="text-[#fbbc04] animate-hero-text [animation-delay:450ms]">INNOVATION</div>
            </h1>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[3px] bg-[#fbbc05] rounded-full animate-hero-line [animation-delay:550ms]"></span>
              <span className="w-1.5 h-1.5 bg-[#34a853] rounded-full animate-hero-dot [animation-delay:700ms]"></span>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white font-extrabold leading-relaxed animate-hero-text [animation-delay:600ms] hero-subtext-shadow max-w-2xl">
              Empowering students to learn, build, innovate and grow together as a community.
            </p>

            <div className="pt-2 animate-hero-text [animation-delay:750ms]">
              <button 
                onClick={() => onNavigate && onNavigate('join')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#137333] hover:bg-[#105c26] text-white text-base lg:text-lg font-bold rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Join the Community</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Full-bleed edge-to-edge pattern banner */}
      <div className="mt-4 flex justify-center items-center w-full relative z-10">
        <img 
          src={heroBg && null /* placeholder removed for simplicity */}
          alt="" 
          className="hidden"
        />
      </div>

    </section>
  );
}