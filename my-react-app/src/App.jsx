import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

function App() {
  // State tracking which section or sub-page is currently active
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      {/* Pass navigate state setter function to update views from header actions */}
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? <Home /> : <AboutPage />}
      </main>

      <Footer />
    </div>
  );
}

export default App;