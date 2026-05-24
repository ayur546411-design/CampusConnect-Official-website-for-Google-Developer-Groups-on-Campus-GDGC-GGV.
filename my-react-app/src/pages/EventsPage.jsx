import React from 'react';
import EventsHeader from '../components/EventsHeader'; 
import LiveEvent from '../components/LiveEvent';       
import PastEvents from '../components/PastEvents';    

export default function EventsPage() {
  return (
    <section className="w-full bg-white pt-6 pb-16 md:pb-24 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <EventsHeader />
        <LiveEvent />
        <PastEvents />
        
      </div>
    </section>
  );
}