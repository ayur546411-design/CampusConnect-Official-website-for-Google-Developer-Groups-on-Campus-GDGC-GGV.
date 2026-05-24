import React from 'react';

export default function EventsHeader() {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="text-sm font-bold uppercase tracking-widest text-[#ea4335] bg-[#ea4335]/10 px-3 py-1.5 rounded-md inline-block">
        OUR EVENTS
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-[#202124] tracking-tight mt-3 mb-4">
        Explore & Connect
      </h2>
      <div className="w-16 h-1 bg-[#4285f4] mx-auto rounded-full mb-6"></div>
      <p className="text-lg text-[#5f6368] leading-relaxed">
        Join our interactive sessions, hackathons, and speaker workshops to sharpen your 
        technical stack and design real solutions alongside peer innovators.
      </p>
    </div>
  );
}