import React from 'react';
import ContactFormBlock from '../components/ContactFormBlock';
import ContactMap from '../components/ContactMap';
import ContactFAQs from '../components/ContactFAQs';
import contactHeroImg from '../assets/contactHeroImg2.png';

export default function ContactPage() {
  return (
    <section className="w-full bg-[#f8fafd] pb-12 md:pb-20 font-sans tracking-wide">
      
      {/* Edge-to-edge full width Contact Hero Banner */}
      <div className="w-full h-[280px] md:h-[420px] overflow-hidden bg-gray-50 relative group flex justify-center items-center border-b border-gray-100 mb-12">
        <img 
          src={contactHeroImg} 
          alt="GDGC GGV Contact Banner" 
          className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.005]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.insertAdjacentHTML('afterend', '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-sm font-bold text-gray-400">Community Gallery Banner Asset</div>');
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        <ContactFormBlock />
       
        <ContactFAQs />
        <ContactMap />
        
      </div>
    </section>
  );
}