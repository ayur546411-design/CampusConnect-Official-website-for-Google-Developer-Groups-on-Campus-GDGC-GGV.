import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage'; // Import the unified contact page file

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutPage />;
      case 'events':
        return <EventsPage />;
      case 'gallery':
        return <ContactPage />; // Mount contact layouts directly on clicking gallery link option selection
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col justify-between">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;