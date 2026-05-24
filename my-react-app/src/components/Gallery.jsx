import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import photo1 from '../assets/gallary1.jpg';
import photo2 from '../assets/gallary2.jpg';
import photo3 from '../assets/gallary3.jpg';

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  const extraPhotos = [photo2, photo3, photo1];

  return (
    <section id="gallery" className="w-full bg-[#f8f9fa] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-[#fcf3e6] rounded-[2.5rem] border border-[#f5e3cc] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-0.5 opacity-80 rotate-180">
              <span className="w-2 h-2 rounded-sm bg-[#ea4335] rotate-45 block"></span>
              <span className="w-2 h-2 rounded-sm bg-[#4285f4] rotate-45 block"></span>
              <span className="w-2 h-2 rounded-sm bg-[#34a853] rotate-45 block"></span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black tracking-widest text-[#202124] uppercase text-center">
              SNEAK PEEK
            </h2>

            <div className="flex items-center gap-0.5 opacity-80">
              <span className="w-2 h-2 rounded-sm bg-[#34a853] rotate-45 block"></span>
              <span className="w-2 h-2 rounded-sm bg-[#4285f4] rotate-45 block"></span>
              <span className="w-2 h-2 rounded-sm bg-[#ea4335] rotate-45 block"></span>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-between gap-4">

            {!isExpanded && (
              <button className="absolute left-2 sm:-left-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all text-gray-700 active:scale-95">
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 sm:px-4">

              <div className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-sm bg-gray-100">
                <img
                  src={photo1}
                  alt="Community session"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-sm bg-gray-100">
                <img
                  src={photo2}
                  alt="Workshop presentation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-sm bg-gray-100">
                <img
                  src={photo3}
                  alt="Team discussions"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

            {!isExpanded && (
              <button className="absolute right-2 sm:-right-4 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-md hover:bg-gray-50 transition-all text-gray-700 active:scale-95">
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 sm:px-4 transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded
                ? 'mt-6 max-h-96 opacity-100 scale-100'
                : 'max-h-0 opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {extraPhotos.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full h-56 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-sm bg-gray-100"
              >
                <img
                  src={imgSrc}
                  alt={`Extra event capture ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {!isExpanded && (
            <div className="flex items-center justify-center gap-2 mt-8 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c4c7c5] cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-[#1a73e8] cursor-pointer"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#c4c7c5] cursor-pointer"></span>
            </div>
          )}

          <div className={`w-full flex justify-center ${isExpanded ? 'mt-10' : ''}`}>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-10 py-3 bg-[#137333] hover:bg-[#0f5b28] text-white font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {isExpanded ? 'Show Less' : 'View More'}
            </button>
          </div>

          <div className="absolute bottom-2 left-2 pointer-events-none opacity-40 sm:opacity-100 hidden sm:block text-2xl">
            🌱🌻
          </div>

          <div className="absolute bottom-2 right-2 pointer-events-none opacity-40 sm:opacity-100 hidden sm:block text-2xl">
            🌻🌱
          </div>

        </div>

      </div>
    </section>
  );
}