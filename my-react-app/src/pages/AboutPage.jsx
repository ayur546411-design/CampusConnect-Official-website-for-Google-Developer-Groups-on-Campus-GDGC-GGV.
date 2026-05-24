import React from 'react';
import AboutHeader from '../components/AboutHeader';
import AboutMission from '../components/AboutMission';

export default function AboutPage() {
  return (
    <section className="w-full bg-white pt-6 pb-16 md:pb-24 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        <AboutHeader />
        
        <AboutMission />
        
      </div>
    </section>
  );
}