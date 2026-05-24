import React, { useState } from 'react';

export default function ContactFAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Who can join GDGC GGV?",
      a: "Any student enrolled at Guru Ghasidas Vishwavidyalaya, regardless of their branch, major, or current coding skill level. Beginners are completely welcome!"
    },
    {
      q: "Are workshops and certification training tracks free?",
      a: "Yes! All official community core sessions, speaker programs, hackathons, and study jams are completely free of charge."
    },
    {
      q: "How can I participate in the annual Google Solution Challenge?",
      a: "We host comprehensive internal briefing info sessions at the beginning of the spring season where we help you form teams, choose project ideas, and map out your solution guidelines."
    },
    {
      q: "What technical tracks do you focus on?",
      a: "Our community tracks run across Cloud Infrastructure Frameworks, Machine Learning/AI Systems, Native Mobile Development (Android/Kotlin), and Modern Web Development stacks."
    }
  ];

  return (
    <div className="w-full space-y-6 text-left max-w-4xl mx-auto pt-6">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-3xl font-black text-[#202124] tracking-tight">Frequently Asked Questions</h3>
        <div className="w-12 h-1 bg-[#34a853] mx-auto rounded-full"></div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-[#202124] text-base md:text-lg hover:bg-gray-50/50 transition-colors cursor-pointer outline-none select-none"
              >
                <span>{faq.q}</span>
                <span className={`text-xl transition-transform duration-200 text-[#4285f4] ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-40 border-t border-gray-50' : 'max-h-0'
              }`}>
                <p className="p-6 text-[#5f6368] text-[15px] leading-relaxed font-normal bg-gray-50/20">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}