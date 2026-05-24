import React, { useState } from 'react';
import faqArtImg from '../assets/faq.png'; 

export default function ContactFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is GDGC GGV?",
      a: "GDGC GGV is a student developer community at Guru Ghasidas Vishwavidyalaya focused on learning, innovation, and collaboration in technology.",
      icon: "👥",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      textColor: "text-[#202124] group-hover:text-emerald-600",
      activeAccent: "border-l-emerald-500 bg-emerald-50/[0.15]"
    },
    {
      q: "Who can join GDGC GGV?",
      a: "Any student interested in technology, coding, design, or innovation can join the community regardless of experience level.",
      icon: "👤",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      textColor: "text-[#202124] group-hover:text-blue-600",
      activeAccent: "border-l-blue-500 bg-blue-50/[0.15]"
    },
    {
      q: "What kind of events do you organize?",
      a: "We organize workshops, hackathons, coding competitions, tech talks, and networking sessions with industry experts.",
      icon: "📅",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      textColor: "text-[#202124] group-hover:text-amber-600",
      activeAccent: "border-l-amber-500 bg-amber-50/[0.15]"
    }
  ];

  return (
    <div className="w-full space-y-8 pt-4 font-sans tracking-wide">
      
      {/* --- TOP FAQ HEADER BADGE --- */}
      <div className="flex items-center justify-center">
        <div className="bg-white border border-gray-100 shadow-sm rounded-full px-6 py-2 flex items-center space-x-3">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest">
            Common Inquiries • FAQ
          </h3>
        </div>
      </div>

      {/* --- CORE SECTION PANEL CONTAINER --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">
        
        {/* ================= LEFT COLUMN: SOLID FIXED CONTAINER IMAGE ================= */}
        <div className="lg:col-span-5 flex w-full min-h-[340px] md:min-h-full">
          <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative group p-0">
            <img 
              src={faqArtImg} 
              alt="FAQ Traditional Artwork Accent Illustration" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full min-h-[300px] bg-amber-50/40 flex items-center justify-center text-sm font-bold text-amber-600/50">Decorative Accent Artwork</div>');
              }}
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE ACCORDIONS ================= */}
        <div className="lg:col-span-7 space-y-4 w-full flex flex-col justify-center">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                  isOpen 
                    ? `shadow-md border-transparent ${faq.activeAccent} translate-y-[-2px]` 
                    : 'border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md'
                }`}
              >
                {/* Accordion Toggle Trigger Button */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left group cursor-pointer outline-none select-none transition-colors"
                >
                  <div className="flex items-center space-x-4 w-full pr-2">
                    {/* Rounded Category Badge Container */}
                    <div className={`w-12 h-12 rounded-xl ${faq.iconBg} ${faq.iconColor} flex items-center justify-center flex-shrink-0 text-xl font-bold shadow-sm transition-transform duration-300 group-hover:scale-105`}>
                      {faq.icon}
                    </div>
                    
                    {/* Title Details Box */}
                    <div className="flex-1">
                      <h4 className={`text-base md:text-lg font-bold tracking-tight leading-snug transition-colors duration-200 ${
                        isOpen ? faq.iconColor : faq.textColor
                      }`}>
                        {faq.q}
                      </h4>
                    </div>
                  </div>

                  {/* Drop Indicator Chevron Pin Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-white shadow-sm rotate-180' : 'bg-gray-50 group-hover:bg-gray-100'
                    }`}>
                      <svg 
                        className={`w-4 h-4 transition-colors duration-300 ${isOpen ? faq.iconColor : 'text-gray-400'}`}
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Expandable Hidden Context Panel Area */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pl-[4.5rem] text-[#5f6368] text-sm md:text-base leading-relaxed font-normal antialiased">
                    <div className="w-full h-px bg-gray-100/70 mb-4"></div>
                    {faq.a}
                  </div>
                </div>

              </div>
            );
          })}

          {/* Extended View More Action Trigger Button */}
          <div className="text-left pl-2 pt-1">
            <button 
              onClick={() => alert("Redirecting to the extended global developer repository knowledge hub...")}
              className="text-[#4285f4] hover:text-blue-700 font-bold text-sm tracking-wide inline-flex items-center gap-2 group transition-all cursor-pointer"
            >
              <span className="relative">
                View more FAQs
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4285f4] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </span>
              <span className="transform transition-transform duration-200 group-hover:translate-x-1">➔</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}