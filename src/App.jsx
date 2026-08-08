import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

export default function App() {
  // Initialize page state based on URL hash if present
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreFillService, setQuotePreFillService] = useState('');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'services', 'projects', 'blog', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = `#${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName = '') => {
    if (typeof serviceName === 'string') {
      setQuotePreFillService(serviceName);
    } else {
      setQuotePreFillService('');
    }
    setQuoteModalOpen(true);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="min-h-screen bg-brand-deep text-slate-100 font-sans selection:bg-brand-cyan selection:text-white">
      {/* Top Header / Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page Content */}
      <main className="min-h-[80vh]">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onSelectService={setSelectedService}
            onTriggerToast={triggerToast}
            onOpenVideoModal={() => setVideoModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onTriggerToast={triggerToast}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activePage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
            onTriggerToast={triggerToast}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={handleNavigate} onTriggerToast={triggerToast} />

      {/* Interactive Modals & Utilities */}
      <QuoteModal
        isOpen={quoteModalOpen}
        initialService={quotePreFillService}
        onClose={() => setQuoteModalOpen(false)}
        onTriggerToast={triggerToast}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <ScrollToTop />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
