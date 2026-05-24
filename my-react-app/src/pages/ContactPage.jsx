import React from 'react';
import ContactFormBlock from '../components/ContactFormBlock';
import ContactMap from '../components/ContactMap';
import ContactFAQs from '../components/ContactFAQs';

export default function ContactPage() {
  return (
    // Changed py-12 md:py-20 to pt-2 pb-12 md:pt-4 md:pb-20 to eliminate top margins
    <section className="w-full bg-[#f8fafd] pt-2 pb-12 md:pt-4 md:pb-20 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        <ContactFormBlock />
       
        <ContactFAQs />
         <ContactMap />
        
      </div>
    </section>
  );
}