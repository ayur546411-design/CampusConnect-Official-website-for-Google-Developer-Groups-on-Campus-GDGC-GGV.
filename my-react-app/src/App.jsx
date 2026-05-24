import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage'; // <-- 1. Import your new modular Events page

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Page layout rendering router logic
  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />; 
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App;