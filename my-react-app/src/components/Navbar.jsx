import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ onNavigate, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleJoinUs = () => {
    handleNavigate('join');
  };

  const handleNavigate = (page, elementId) => {
    onNavigate(page);
    setIsOpen(false);
    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 180);
    } else {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 border-b border-gray-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none bg-transparent border-none"
            aria-label="Go to Home"
          >
            <img
              src={logo}
              alt="GDGC Logo"
              className="h-11 w-36 sm:h-14 sm:w-44 object-contain rounded-sm"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.insertAdjacentHTML(
                  'afterend',
                  '<span class="text-blue-600 font-bold text-xl">GDGC</span> <span class="text-gray-700 font-bold text-xl">GGV</span>'
                );
              }}
            />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-7 font-medium text-gray-600">

          <button
            onClick={() => handleNavigate('home')}
            className={`transition-colors font-medium bg-transparent border-none cursor-pointer ${
              currentPage === 'home'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavigate('about')}
            className={`transition-colors font-medium bg-transparent border-none cursor-pointer ${
              currentPage === 'about'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavigate('events')}
            className={`transition-colors font-medium bg-transparent border-none cursor-pointer ${
              currentPage === 'events'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600'
            }`}
          >
            Upcoming Events
          </button>

          <button
            onClick={() => handleNavigate('organizers')}
            className={`transition-colors font-medium bg-transparent border-none cursor-pointer ${
              currentPage === 'organizers'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600'
            }`}
          >
            Organizers
          </button>

          <button
            onClick={() => handleNavigate('contact')}
            className={`transition-colors font-medium bg-transparent border-none cursor-pointer ${
              currentPage === 'contact'
                ? 'text-blue-600 font-semibold'
                : 'hover:text-blue-600'
            }`}
          >
            Contact
          </button>

          <button
            onClick={handleJoinUs}
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm active:scale-95 cursor-pointer ml-2"
          >
            Join Us
          </button>

        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600 focus:outline-none p-1 bg-transparent border-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

      </div>

      <div
        className={`md:hidden bg-white border-b border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[380px] opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 font-medium text-gray-600 flex flex-col items-start">

          <button
            onClick={() => handleNavigate('home')}
            className={`w-full text-left py-1 bg-transparent border-none ${
              currentPage === 'home'
                ? 'text-blue-600 font-bold'
                : 'hover:text-blue-600'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavigate('about')}
            className={`w-full text-left py-1 bg-transparent border-none ${
              currentPage === 'about'
                ? 'text-blue-600 font-bold'
                : 'hover:text-blue-600'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavigate('events')}
            className={`w-full text-left py-1 bg-transparent border-none ${
              currentPage === 'events'
                ? 'text-blue-600 font-bold'
                : 'hover:text-blue-600'
            }`}
          >
            Upcoming Events
          </button>

          <button
            onClick={() => handleNavigate('organizers')}
            className={`w-full text-left py-1 bg-transparent border-none ${
              currentPage === 'organizers'
                ? 'text-blue-600 font-bold'
                : 'hover:text-blue-600'
            }`}
          >
            Organizers
          </button>

          <button
            onClick={() => handleNavigate('contact')}
            className={`w-full text-left py-1 bg-transparent border-none ${
              currentPage === 'contact'
                ? 'text-blue-600 font-bold'
                : 'hover:text-blue-600'
            }`}
          >
            Contact
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              handleJoinUs();
            }}
            className="w-full bg-blue-600 text-white py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm text-center cursor-pointer"
          >
            Join Us
          </button>

        </div>
      </div>
    </nav>
  );
}