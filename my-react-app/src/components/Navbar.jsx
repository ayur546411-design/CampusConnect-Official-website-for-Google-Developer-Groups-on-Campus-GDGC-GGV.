import React, { useState } from 'react';
import logo from '../assets/logo1.jpg';

export default function Navbar({ onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleJoinUs = () => {
    alert("Welcome to GDGC GGV! Redirecting to the community platform...");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 border-b border-gray-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* --- LOGO --- */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img src={logo} alt="GDGC Logo" className="h-14 w-44 object-contain rounded-sm" />
          </button>
        </div>

        {/* --- DESKTOP NAVIGATION LINKS --- */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
          <button 
            onClick={() => onNavigate('home')} 
            className={`transition-colors font-medium ${currentPage === 'home' ? 'text-blue-600' : 'hover:text-blue-600'}`}
          >
            Home
          </button>
          
          {/* About us navigation trigger action point */}
          <button 
            onClick={() => onNavigate('about')} 
            className={`transition-colors font-medium ${currentPage === 'about' ? 'text-blue-600' : 'hover:text-blue-600'}`}
          >
            About
          </button>
          
          <a href="#events" className="hover:text-blue-600 transition-colors">Events</a>
          <a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a>
          <a href="#team" className="hover:text-blue-600 transition-colors">Team</a>
          
          <button 
            onClick={handleJoinUs}
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95"
          >
            Join Us
          </button>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none p-1">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-3 font-medium text-gray-600 flex flex-col">
          <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="text-left py-1 hover:text-blue-600">Home</button>
          <button onClick={() => { onNavigate('about'); setIsOpen(false); }} className="text-left py-1 text-blue-600 font-bold">About</button>
          <a href="#events" onClick={() => setIsOpen(false)} className="py-1 hover:text-blue-600">Events</a>
          <a href="#gallery" onClick={() => setIsOpen(false)} className="py-1 hover:text-blue-600">Gallery</a>
          <a href="#team" onClick={() => setIsOpen(false)} className="py-1 hover:text-blue-600">Team</a>
          <button onClick={() => { setIsOpen(false); handleJoinUs(); }} className="w-full bg-blue-600 text-white py-2.5 rounded-full text-sm font-semibold text-center">Join Us</button>
        </div>
      </div>
    </nav>
  );
}