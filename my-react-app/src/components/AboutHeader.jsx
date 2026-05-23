import React from 'react';
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.jpg'; // <-- Importing your second image asset

export default function AboutHeader() {
  return (
    <div className="w-full flex flex-col space-y-12 font-sans tracking-wide m-0 p-0">
      
      {/* --- TOP ROW: SPLIT TEXT & IMAGE 1 --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT SIDE: TEXT CONTENT WITH INCREASED FONT SIZES */}
        <div className="lg:col-span-7 space-y-5 text-left">
          {/* PDF Block: WHAT WE DO */}
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md inline-block">
            WHAT WE DO
          </span>
          
          {/* PDF Block: About GDGC GGV (Increased text size) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#202124] tracking-tight leading-tight">
            About GDGC GGV
          </h2>
          
          <div className="w-20 h-1.5 bg-[#ea4335] rounded-full mb-6"></div>
          
          {/* PDF Block: Description Strings (Increased from text-base to text-lg/xl) */}
          <div className="space-y-5 text-lg md:text-xl text-[#5f6368] leading-relaxed font-normal max-w-2xl">
            <p>
              Google Developer Groups on Campus (GDGC) Guru Ghasidas Vishwavidyalaya is 
              an official university-based community group for students interested in 
              Google developer technologies.
            </p>
            <p className="font-semibold text-[#202124] text-xl md:text-2xl leading-snug">
              We are a community of student developers and innovators working together to learn, 
              build and create impact.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE 1 (about1.png) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 bg-gray-50 p-2">
            <img 
              src={about1} 
              alt="About GDGC GGV layout" 
              className="w-full h-auto object-cover rounded-[2rem] max-h-[420px]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<div class="w-full h-64 flex items-center justify-center bg-gray-100 font-bold text-gray-400">about1.png</div>');
              }}
            />
          </div>
        </div>

      </div>

      {/* --- BOTTOM ROW: IMAGE 2 (about2.jpg) PLACED AT THE END OF HEADER --- */}
      <div className="w-full rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 bg-gray-50 p-2 mt-4">
        <img 
          src={about2} 
          alt="About GDGC GGV Showcase Banner" 
          className="w-full h-auto object-contain max-h-125 rounded-[2rem]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML('afterend', '<div class="w-full h-48 flex items-center justify-center bg-gray-100 font-bold text-gray-400">about2.jpg</div>');
          }}
        />
      </div>

    </div>
  );
}