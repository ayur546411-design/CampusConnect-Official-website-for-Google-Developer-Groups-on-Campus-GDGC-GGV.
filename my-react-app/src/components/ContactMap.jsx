import React from 'react';

export default function ContactMap() {
  return (
    <div className="w-full space-y-4 text-left">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-[#202124]">Find Us on Campus</h3>
        <p className="text-sm text-[#5f6368]">Drop by during our office hours or scheduled community syncs.</p>
      </div>
      
      <div className="w-full h-[350px] md:h-[425px] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm bg-white p-2">
        <iframe 
          title="GGV Campus Map Pin Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s0x3a280b2715555555%3A0x8898ee8c79294246!2sGuru+Ghasidas+Vishwavidyalaya!5m2!1sen!2sin"
          className="w-full h-full rounded-[1.5rem] border-0"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}