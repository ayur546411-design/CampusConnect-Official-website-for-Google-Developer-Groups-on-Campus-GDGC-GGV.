import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050c14] text-gray-300 py-16 px-4 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* --- COLUMN 1: BRANDING & SOCIALS --- */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 font-black text-2xl bg-gray-900/50 px-3 py-1.5 rounded-xl border border-gray-800">
              <span className="text-[#4285f4]">&lt;</span>
              <span className="text-[#ea4335]">g</span>
              <span className="text-[#fbbc04]">d</span>
              <span className="text-[#34a853]">g</span>
              <span className="text-[#4285f4]">/</span>
              <span className="text-[#34a853]">&gt;</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wide">Google Developer Groups</span>
          </div>
          
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Google Developer Groups on Campus GGV is a community of developers learning, building and growing together.
          </p>
          
          <div className="flex items-center gap-3 pt-2">
            {/* X / Twitter */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
              <span className="font-extrabold text-sm">X</span>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#4285f4] hover:border-[#4285f4] transition-all">
              <Linkedin size={18} />
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#ea4335] hover:border-[#ea4335] transition-all">
              <Instagram size={18} />
            </a>
            {/* YouTube */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#ff0000] hover:border-[#ff0000] transition-all">
              <Youtube size={18} />
            </a>
            {/* GitHub - Standardized inline SVG to prevent dependency errors */}
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-gray-500 pt-4">&copy; 2024 GDGC GGV. All rights reserved.</p>
        </div>

        {/* --- COLUMN 2: QUICK LINKS --- */}
        <div className="flex flex-col space-y-4 md:pl-12">
          <h3 className="text-lg font-bold text-white tracking-wide">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#about" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600" /> About GDGC GGV
              </a>
            </li>
            <li>
              <a href="#events" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600" /> Upcoming Events
              </a>
            </li>
            <li>
              <a href="#events" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600" /> Past Events
              </a>
            </li>
            <li>
              <a href="#resources" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600" /> Resources
              </a>
            </li>
            <li>
              <a href="#gallery" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600" /> Gallery
              </a>
            </li>
            <li>
              <a href="#team" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <ChevronRight size={14} className="text-gray-600" /> Team
              </a>
            </li>
          </ul>
        </div>

        {/* --- COLUMN 3: CONNECT WITH US --- */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-white tracking-wide">Connect With Us</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <Phone size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <a href="tel:+917987834370" className="hover:text-white transition-colors">+91 7987834370</a>
            </li>
            
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <Phone size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <a href="tel:+917610563312" className="hover:text-white transition-colors">+91 7610563312</a>
            </li>
            
            <li className="flex items-start gap-3 text-sm text-gray-400">
              <Mail size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <a href="mailto:gdgcggv@gmail.com" className="hover:text-white transition-colors break-all">gdgcggv@gmail.com</a>
            </li>
            
            <li className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
              <MapPin size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
              <span>GGV Campus, Koni Road,<br />Chhattisgarh, India</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}