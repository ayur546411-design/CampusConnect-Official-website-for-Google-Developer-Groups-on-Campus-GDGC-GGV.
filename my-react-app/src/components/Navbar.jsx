import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* --- LOGO & BRANDING --- */}
        <div className="flex items-center space-x-3">
          <a href="#home" className="flex space-x-1 font-bold text-xl tracking-tight cursor-pointer">
            <span className="text-blue-600">G</span>
            <span className="text-red-500">D</span>
            <span className="text-yellow-500">G</span>
            <span className="text-green-600">C</span>
            <span className="text-gray-700 ml-1">GGV</span>
          </a>
        </div>

        {/* --- DESKTOP NAVIGATION LINKS --- */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#events" className="hover:text-blue-600 transition-colors">Events</a>
          <a href="#team" className="hover:text-blue-600 transition-colors">Team</a>
          
          {/* --- CALL TO ACTION BUTTON --- */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm">
            Join Us
          </button>
        </div>

        {/* --- MOBILE MENU BUTTON (Optional scale-up for later) --- */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
      </div>
    </nav>
  );
}