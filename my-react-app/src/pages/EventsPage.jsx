import React from 'react';
import EventsHeader from '../components/EventsHeader'; // Fixed path: removed '/event'
import LiveEvent from '../components/LiveEvent';       // Fixed path: removed '/event'
import PastEvents from '../components/PastEvents';     // Fixed path: removed '/event'

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