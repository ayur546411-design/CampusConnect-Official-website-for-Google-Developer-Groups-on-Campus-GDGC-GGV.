import React from 'react';
import liveEventImg from '../assets/solution.jpg'; 

export default function LiveEvent() {
  
  const handleRegisterNow = () => {
    alert("Redirecting to the official Google Solution Challenge Registration platform...");
  };

  const handleLearnMore = () => {
    alert("Opening Google Solution Challenge Guidelines and Resource Hub...");
  };

  return (
    <div className="w-full space-y-6">
      <h3 className="text-2xl font-bold text-[#202124] flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ea4335] animate-ping"></span>
        Live / Upcoming Event
      </h3>

      {/* --- MASTER CONTAINER COMPONENT (COLOR UPDATED) --- */}
      {/* Changed bg-white to bg-[#f8fafd] and updated the border tint */}
      <div className="w-full bg-[#f8fafd] rounded-[2rem] border border-blue-100/80 shadow-sm overflow-hidden flex flex-col lg:flex-row items-stretch">
        
        {/* --- BANNER IMAGING --- */}
        <div className="w-full lg:w-[55%] bg-gray-50 flex items-center justify-center p-4 min-h-[300px]">
          <img 
            src={liveEventImg} 
            alt="Google Solution Challenge Info Session Banner" 
            className="w-full h-auto max-h-[360px] object-contain rounded-xl filter contrast-[1.05]"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.insertAdjacentHTML('afterend', '<div class="text-sm font-bold text-gray-300">Event Image Asset</div>');
            }}
          />
        </div>

        {/* --- CONTENT DETAILS --- */}
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-gray-100/70">
          <div className="space-y-3">
            <span className="text-sm font-bold text-[#34a853] tracking-wide uppercase">
              Global Hackathon Track
            </span>
            <h4 className="text-3xl font-black text-[#202124] leading-tight">
              Google Solution Challenge Info Session
            </h4>
            <p className="text-[#5f6368] text-base leading-relaxed">
              Learn how to build a solution to one or more of the United Nations 17 Sustainable 
              Development Goals using Google technology. Find out about timeline strategies, 
              submission guidelines, and global mentorship opportunities.
            </p>
          </div>

          {/* Meta Info Indicators */}
          <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-200/50 py-4 my-2 text-sm text-[#3c4043]">
            <div className="flex items-center gap-2">
              <span className="text-lg">📅</span>
              <span>May 28, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">⏰</span>
              <span>04:00 PM onwards</span>
            </div>
          </div>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button 
              onClick={handleLearnMore}
              className="flex-1 sm:flex-none text-center bg-white hover:bg-gray-50 text-gray-800 font-bold px-6 py-3.5 rounded-xl transition-all active:scale-95 cursor-pointer border border-gray-200 shadow-sm"
            >
              Learn More
            </button>
            <button 
              onClick={handleRegisterNow}
              className="flex-1 sm:flex-none text-center bg-[#4285f4] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              Register Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}