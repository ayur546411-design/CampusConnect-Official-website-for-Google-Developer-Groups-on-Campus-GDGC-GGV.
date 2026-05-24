import React from 'react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030a10] text-[#a0aab4] py-14 px-4 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 px-4 sm:px-6 lg:px-8">
         
        <div className="flex flex-col space-y-5"> 
          <div className="flex items-center gap-2.5">
            <img 
              src={logo} 
              alt="GDG Logo" 
              className="w-7 h-7 object-contain flex-shrink-0"
            />
            <span className="text-[20px] font-semibold text-white tracking-tight">
              Google Developer Groups
            </span>
          </div>
          
          <p className="text-[15px] text-[#9099a3] max-w-[340px] leading-relaxed">
            Google Developer Groups on Campus GGV is a community of developers learning, building and growing together.
          </p>
          
          <div className="flex items-center gap-3 pt-2">
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer">X</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer">in</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer">ig</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer">yt</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer">gh</span>
          </div>
          
          <p className="text-[13px] text-[#6b7580] pt-2">
            &copy; 2024 GDGC GGV. All rights reserved.
          </p>
        </div>
 
        <div className="flex flex-col space-y-4 md:pl-16">
          <h3 className="text-[18px] font-semibold text-white tracking-tight">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-[15px] text-[#9099a3]">
            <li><a href="#about" className="hover:text-white">&gt; About GDGC GGV</a></li>
            <li><a href="#events" className="hover:text-white">&gt; Upcoming Events</a></li>
            <li><a href="#events" className="hover:text-white">&gt; Past Events</a></li>
            <li><a href="#resources" className="hover:text-white">&gt; Resources</a></li>
            <li><a href="#gallery" className="hover:text-white">&gt; Gallery</a></li>
            <li><a href="#team" className="hover:text-white">&gt; Team</a></li>
          </ul>
        </div>
 
        <div className="flex flex-col space-y-4">
          <h3 className="text-[18px] font-semibold text-white tracking-tight">
            Connect With Us
          </h3>
          <ul className="space-y-4 text-[15px] text-[#9099a3]">
            <li className="flex items-center gap-3">
              <span className="text-[#7c8894]">📞</span>
              <a href="tel:+917987834370" className="hover:text-white">+91 7987834370</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#7c8894]">📞</span>
              <a href="tel:+917610563312" className="hover:text-white">+91 7610563312</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#7c8894]">✉️</span>
              <a href="mailto:gdgcggv@gmail.com" className="hover:text-white break-all">gdgcggv@gmail.com</a>
            </li>
            <li className="flex items-start gap-3 leading-relaxed">
              <span className="text-[#7c8894] mt-0.5">📍</span>
              <span>
                GGV Campus, Koni Road,<br />
                Chhattisgarh, India
              </span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}