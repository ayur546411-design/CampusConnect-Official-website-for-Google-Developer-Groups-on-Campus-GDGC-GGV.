import React from 'react';

// 1. IMPORT YOUR IMAGES HERE
// Make sure to add a 'feature4.png' to your assets folder for the new Community First card!
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';

export default function Features() {
  return (
    <section id="about" className="py-20 w-full bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {/* Left Decorative Arrow element using pure CSS/Tailwind */}
          <div className="flex items-center gap-0.5 opacity-80">
            <span className="w-2 h-2 rounded-sm bg-[#ea4335] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#4285f4] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#34a853] rotate-45 block"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-wider text-[#232324] uppercase text-center font-sans">
         WHAT WE DO
          </h2>

          {/* Right Decorative Arrow element */}
          <div className="flex items-center gap-0.5 opacity-80">
            <span className="w-2 h-2 rounded-sm bg-[#34a853] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#4285f4] rotate-45 block"></span>
            <span className="w-2 h-2 rounded-sm bg-[#ea4335] rotate-45 block"></span>
          </div>
        </div>

        {/* --- FEATURE CARDS GRID --- */}
        {/* Changed to a 4-column layout on large screens to fit the new card perfectly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Events & Workshops */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col">
            {/* Image resized to fit as a banner inside the card */}
            <div className="w-full h-40 mb-6 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src={feature1} 
                alt="Events and Workshops graphic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-sm font-black text-gray-300">01</span> 
              Events & Workshops
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
              Hands-on tech bootcamps, speaker sessions, and tech fests designed to scale your technical insights and industry knowledge.
            </p>
          </div>

          {/* Card 2: Learning & Growth */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col">
            <div className="w-full h-40 mb-6 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src={feature2} 
                alt="Learning and Growth graphic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-sm font-black text-gray-300">02</span> 
              Learning & Growth
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
              Structured learning pathways targeting real-world application building, peer-to-peer mentoring, and collaborative guidance.
            </p>
          </div>

          {/* Card 3: Projects & Innovation */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col">
            <div className="w-full h-40 mb-6 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src={feature3} 
                alt="Projects and Innovation graphic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-sm font-black text-gray-300">03</span> 
              Projects & Innovation
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
              Hacking global scale solutions like the Google Solutions Challenge to crack localized or regional problems through teamwork.
            </p>
          </div>

          {/* Card 4: Community First (NEW) */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col">
            <div className="w-full h-40 mb-6 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src={feature4} 
                alt="Community First graphic" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-sm font-black text-gray-300">04</span> 
              Community First
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow">
              Fostering an inclusive and welcoming environment where students collaborate, share knowledge, and build lifelong networks.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}