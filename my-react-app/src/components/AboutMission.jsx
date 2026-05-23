import React from 'react';
import mission1 from '../assets/mission1.png';
import mission2 from '../assets/mission2.png';
import mission3 from '../assets/mission3.png';

export default function AboutMission() {
  const steps = [
    {
      id: "01",
      title: "Events & Workshops",
      description: "We organize engaging events, technical talks, coding sessions, and hands-on workshops to help students explore new technologies, improve their skills, and connect with the developer community.",
      badgeColor: "text-[#0f5132] bg-[#e8f5e9]",
      borderColor: "border-[#c3e6cb]",
      textColor: "text-[#137333]",
      illustration: mission1,
      icon: (
        <svg className="w-8 h-8 text-[#137333]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 5V3m12 2V3M4 11h16M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      isReversed: false
    },
    {
      id: "02",
      title: "Learning & Growth",
      description: "Participate in interactive sessions, mentorship programs, and collaborative activities designed to enhance creativity, teamwork, and practical knowledge in modern technologies.",
      badgeColor: "text-[#084298] bg-[#e7f1ff]",
      borderColor: "border-[#b6d4fe]",
      textColor: "text-[#1a73e8]",
      illustration: mission2,
      icon: (
        <svg className="w-8 h-8 text-[#1a73e8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      isReversed: true
    },
    {
      id: "03",
      title: "Projects & Innovation",
      description: "Work on real-world projects, build innovative solutions, and collaborate with peers to transform ideas into impactful applications that solve meaningful problems.",
      badgeColor: "text-[#664d03] bg-[#fff3cd]",
      borderColor: "border-[#ffe69c]",
      textColor: "text-[#b06000]",
      illustration: mission3,
      icon: (
        <svg className="w-8 h-8 text-[#b06000]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      isReversed: false
    }
  ];

  return (
    <div className="w-full flex flex-col space-y-8 py-6 font-sans tracking-wide">
      
      {steps.map((step, idx) => (
        <div 
          key={idx} 
          className="w-full bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch min-h-65"
        >
          {/* --- LEFT SIDE: INNER DECORATIVE STRIP --- */}
          <div className={`hidden sm:flex w-24 items-center justify-center p-4 border-r border-gray-50 bg-gray-50/40 ${
            step.isReversed ? 'md:order-3 md:border-r-0 md:border-l' : ''
          }`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${step.badgeColor} ${step.borderColor}`}>
              {step.icon}
            </div>
          </div>

          {/* --- CENTER: TEXT CONTENT BLOCK --- */}
          <div className={`flex-1 p-8 md:p-10 flex flex-col justify-center space-y-2 ${
            step.isReversed ? 'md:order-2' : ''
          }`}>
            <span className={`text-3xl font-black block tracking-tight ${step.textColor}`}>
              {step.id}
            </span>
            <h3 className="text-2xl font-bold text-[#202124]">
              {step.title}
            </h3>
            <div className="w-10 h-0.5 bg-gray-300 rounded-full my-1"></div>
            <p className="text-[#5f6368] text-[16px] leading-relaxed font-normal">
              {step.description}
            </p>
          </div>

          {/* --- RIGHT: INCREASED SIZE HIGH-INTENSITY IMAGE PANEL --- */}
          <div className={`w-full md:w-[50%] bg-white p-6 md:p-8 flex items-center justify-center border-t md:border-t-0 border-gray-50 ${
            step.isReversed ? 'md:order-1 md:border-r border-gray-100' : 'md:border-l border-gray-100'
          }`}>
            <img 
              src={step.illustration} 
              alt={step.title} 
              className="w-full max-h-65 object-contain filter contrast-[1.25] saturate-[1.50] transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML('afterend', '<div class="text-sm font-bold text-gray-300">Image Asset</div>');
              }}
            />
          </div>

        </div>
      ))}

    </div>
  );
}