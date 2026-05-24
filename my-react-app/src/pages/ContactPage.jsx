import React from 'react';
import ContactFormBlock from '../components/ContactFormBlock';
import ContactMap from '../components/ContactMap';
import ContactFAQs from '../components/ContactFAQs';

export default function ContactPage() {
  return (
    <section className="w-full bg-[#f8fafd] py-12 md:py-20 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        <ContactFormBlock />
        <ContactMap />
        <ContactFAQs />   
      </div>
    </section>
  );
}