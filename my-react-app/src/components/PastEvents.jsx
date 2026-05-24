import React from 'react';

// --- IMPORT TRACK ILLUSTRATION IMAGES ---
import cloudCampaignImg from '../assets/cloud1.png'; 
import aithonImg from '../assets/aithon.png';

// --- IMPORT ALL 8 PAST SEASONS EVENT GALLERY PHOTOS ---
import gallery1 from '../assets/past_gallery1.jpg';
import gallery2 from '../assets/past_gallery2.jpg';
import gallery3 from '../assets/past_gallery3.jpg';
import gallery4 from '../assets/past_gallery4.jpg';
import gallery5 from '../assets/past_gallery5.jpg';
import gallery6 from '../assets/past_gallery6.jpg';
import gallery7 from '../assets/gallary2.jpg';
import gallery8 from '../assets/gallary1.jpg';

export default function PastEvents() {
  // Data for the horizontal split track section
  const trackEvents = [
    {
      title: "Google Cloud Campaign",
      category: "Cloud Track",
      description: "Our initiative focused on mastering cloud fundamentals and mapping methodologies, locking cloud fundamentals and deployment strategies. This series provides hands-on workshop environments.",
      image: cloudCampaignImg,
      bgColor: "bg-[#e8f5e9]", 
      accentColor: "border-l-[#34a853]"
    },
    {
      title: "AIthon",
      category: "AI Track",
      description: "A collaborative development intensive focused on building innovative artificial intelligence solutions, human-AI collaboration, and neural networks engaging a dynamic workshop environment.",
      image: aithonImg,
      bgColor: "bg-[#fff9e6]", 
      accentColor: "border-l-[#fbbc05]"
    }
  ];

  // Data for the 8-card UI gallery grid
  const pastSessions = [
    { date: "12 Mar 2024", type: "Tech Talk", image: gallery1 },
    { date: "28 Feb 2024", type: "Workshop", image: gallery2 },
    { date: "20 Feb 2024", type: "Hackathon", image: gallery3 },
    { date: "15 Feb 2024", type: "Seminar", image: gallery4 },
    { date: "08 Feb 2024", type: "Coding Session", image: gallery5 },
    { date: "01 Feb 2024", type: "Workshop", image: gallery6 },
    { date: "25 Jan 2024", type: "Tech Talk", image: gallery7 },
    { date: "18 Jan 2024", type: "GDG Orientation", image: gallery8 }
  ];

  return (
    <div className="w-full space-y-16 pt-6 font-sans tracking-wide text-left">
      
      {/* ================= SECTION 1: CAMPAIGNS & TRACKS SPLIT GRID ================= */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#202124]">
          Past Events
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {trackEvents.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[200px] group hover:shadow-md transition-shadow duration-300"
            >
              {/* Text metadata content box */}
              <div className={`flex-1 p-6 md:p-8 flex flex-col justify-center space-y-2 border-l-8 ${item.accentColor}`}>
                <h4 className="text-2xl font-black text-[#202124] tracking-tight">
                  {item.title}
                </h4>
                <span className="text-xs font-bold text-[#5f6368] tracking-widest uppercase block">
                  {item.category}
                </span>
                <p className="text-sm text-[#5f6368] leading-relaxed font-normal mt-2">
                  {item.description}
                </p>
              </div>

              {/* Integrated Vector Image Block */}
              <div className={`w-full sm:w-[35%] ${item.bgColor} p-6 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-gray-50`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="max-w-full max-h-[140px] object-contain filter contrast-[1.20] saturate-[1.40] transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION 2: 8-CARD COMPREHENSIVE SEASONS GALLERY ================= */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight">
            Past Seasons Memories
          </h3>
          <div className="w-12 h-1 bg-[#4285f4] rounded-full"></div>
        </div>

        {/* Responsive layout grid grid system matching your exact UI screenshot setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {pastSessions.map((session, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300"
            >
              {/* Top Image Frame */}
              <div className="w-full h-48 bg-gray-50 overflow-hidden relative">
                <img 
                  src={session.image} 
                  alt={`${session.type} visual window`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[0.98] contrast-[1.02]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-50 text-xs text-gray-400 font-bold">Past Session Photo</div>');
                  }}
                />
              </div>

              {/* Bottom Info Stripe Strip */}
              <div className="p-4 bg-white flex items-center justify-start space-x-2 text-sm text-[#202124] font-semibold border-t border-gray-50">
                {/* Calendar Inline SVG Icon */}
                <svg 
                  className="w-4 h-4 text-[#5f6368] flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                
                <span className="text-[#3c4043] whitespace-nowrap text-xs sm:text-sm">
                  {session.date}
                </span>
                
                <span className="text-gray-300 font-normal">•</span>
                
                <span className="text-[#5f6368] font-medium truncate text-xs sm:text-sm">
                  {session.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}