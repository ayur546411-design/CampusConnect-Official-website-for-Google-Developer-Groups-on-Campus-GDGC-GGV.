import React from 'react';
import EventsHeader from '../components/EventsHeader';
import LiveEvent from '../components/LiveEvent';
import PastEvents from '../components/PastEvents';
import eventHero from '../assets/event hero.png';

export default function EventsPage() {
  return (
    <section className="w-full bg-white pb-16 md:pb-24 font-sans tracking-wide">
      
      {/* Edge-to-edge full width Events Hero Banner */}
      <div className="w-full h-auto overflow-hidden bg-gray-50 relative group flex justify-center items-center border-b border-gray-100 mb-12">
        <img
          src={eventHero}
          alt="GDGC GGV Events Banner"
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.005]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML('afterend', `
              <div class="w-full h-64 flex flex-col items-center justify-center bg-gray-50 border-b border-dashed border-gray-200 text-gray-400 p-6">
                <svg class="w-16 h-16 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-sm font-bold uppercase tracking-wider">Events Hero Banner Asset</span>
              </div>
            `);
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <EventsHeader />
        <LiveEvent />
        <PastEvents />
      </div>
    </section>
  );
}