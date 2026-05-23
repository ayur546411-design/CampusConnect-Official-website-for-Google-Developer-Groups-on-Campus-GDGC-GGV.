import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutMission from '../components/AboutMission';
// import AboutPillars from '../components/AboutPillars';

export default function AboutPage() {
  return (
    // Changed -mt-4 to a gentle pt-6 for a clean, little bit of margin below the navbar
    <section className="w-full bg-white pt-6 pb-16 md:pb-24 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Your format-matched PDF header */}
        <AboutHeader />
        
        <AboutMission />
        {/* <AboutPillars /> */}
        
      </div>
    </section>
  );
}