import React from 'react';
import logo from '../assets/logo.png';

export default function Footer({ onNavigate }) {
  const handleNavigate = (page, elementId) => {
    if (!onNavigate) return;
    onNavigate(page);
    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 180);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="w-full bg-[#030a10] text-[#a0aab4] py-14 px-4 font-sans tracking-wide relative overflow-hidden">
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
            The Google Developer Groups on Campus GGV is a community of learners, builders and innovators.
          </p>
          
          <div className="flex items-center gap-3 pt-2">
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:border-white transition-colors">X</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:border-white transition-colors">in</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:border-white transition-colors">ig</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:border-white transition-colors">yt</span>
            <span className="w-9 h-9 rounded-full border border-[#404850] flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:border-white transition-colors">gh</span>
          </div>
          
          <p className="text-[13px] text-[#6b7580] pt-2">
            &copy; 2024 GDGC GGV. All rights reserved.
          </p>
        </div>
 
        <div className="flex flex-col space-y-4 md:pl-16">
          <h3 className="text-[18px] font-semibold text-white tracking-tight">
            Quick Links
          </h3>
          <ul className="space-y-3.5 text-[15px] text-[#9099a3] flex flex-col items-start">
            <li><button onClick={() => handleNavigate('home')} className="hover:text-white bg-transparent border-none cursor-pointer text-left text-[15px] font-normal text-[#9099a3] focus:outline-none">&gt; Home</button></li>
            <li><button onClick={() => handleNavigate('about')} className="hover:text-white bg-transparent border-none cursor-pointer text-left text-[15px] font-normal text-[#9099a3] focus:outline-none">&gt; About</button></li>
            <li><button onClick={() => handleNavigate('events')} className="hover:text-white bg-transparent border-none cursor-pointer text-left text-[15px] font-normal text-[#9099a3] focus:outline-none">&gt; Upcoming Events</button></li>
            <li><button onClick={() => handleNavigate('events', 'past-events')} className="hover:text-white bg-transparent border-none cursor-pointer text-left text-[15px] font-normal text-[#9099a3] focus:outline-none">&gt; Past Events</button></li>
            <li><button onClick={() => handleNavigate('organizers')} className="hover:text-white bg-transparent border-none cursor-pointer text-left text-[15px] font-normal text-[#9099a3] focus:outline-none">&gt; Organizers</button></li>
            <li><button onClick={() => handleNavigate('organizers')} className="hover:text-white bg-transparent border-none cursor-pointer text-left text-[15px] font-normal text-[#9099a3] focus:outline-none">&gt; Team</button></li>
          </ul>
        </div>
 
        <div className="flex flex-col space-y-4 relative pr-16">
          <h3 className="text-[18px] font-semibold text-white tracking-tight">
            Help & Support
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
          
          {/* Flower Stalk SVG */}
          <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block opacity-90 select-none">
            <svg className="w-16 h-36" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Stem */}
              <path d="M30 110 C30 80, 25 50, 32 10" stroke="#137333" strokeWidth="2" strokeLinecap="round" />
              {/* Leaves / Buds */}
              {/* Right Leaf 1 */}
              <path d="M30 90 C45 85, 48 70, 38 65 C32 75, 30 85, 30 90 Z" fill="#ea4335" />
              <circle cx="45" cy="70" r="2" fill="#4285f4" />
              {/* Left Leaf 1 */}
              <path d="M30 80 C15 75, 12 60, 22 55 C28 65, 30 75, 30 80 Z" fill="#fbbc05" />
              <circle cx="15" cy="62" r="2.5" fill="#ea4335" />
              {/* Right Leaf 2 */}
              <path d="M31 60 C45 55, 45 40, 35 38 C30 45, 31 55, 31 60 Z" fill="#34a853" />
              {/* Left Leaf 2 */}
              <path d="M31 50 C18 45, 18 30, 27 28 C31 35, 31 45, 31 50 Z" fill="#ea4335" />
              <circle cx="18" cy="35" r="2" fill="#fbbc05" />
              {/* Top Buds */}
              <path d="M32 25 C38 18, 38 8, 32 5 C28 10, 30 20, 32 25 Z" fill="#fbbc05" />
              <circle cx="32" cy="2" r="2" fill="#ea4335" />
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
}