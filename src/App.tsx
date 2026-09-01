import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { EnquiryModal } from './components/EnquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SecurityPage } from './pages/SecurityPage';
import { HousekeepingPage } from './pages/HousekeepingPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { WhySSVPage } from './pages/WhySSVPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);
  const [enquiryDefaultService, setEnquiryDefaultService] = useState<string>('Security Services');

  // Handle URL Hash or Path Routing
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase().replace('#', '');

      if (hash) {
        if (hash === 'about') setCurrentPage('about');
        else if (hash === 'services') setCurrentPage('services');
        else if (hash === 'security') setCurrentPage('security');
        else if (hash === 'housekeeping') setCurrentPage('housekeeping');
        else if (hash === 'infrastructure' || hash === 'infra') setCurrentPage('infrastructure');
        else if (hash === 'industries') setCurrentPage('industries');
        else if (hash === 'why-ssv' || hash === 'why') setCurrentPage('why-ssv');
        else if (hash === 'contact') setCurrentPage('contact');
        else setCurrentPage('home');
      } else if (path.includes('about')) {
        setCurrentPage('about');
      } else if (path.includes('security')) {
        setCurrentPage('security');
      } else if (path.includes('housekeeping')) {
        setCurrentPage('housekeeping');
      } else if (path.includes('infrastructure') || path.includes('infra')) {
        setCurrentPage('infrastructure');
      } else if (path.includes('services')) {
        setCurrentPage('services');
      } else if (path.includes('industries')) {
        setCurrentPage('industries');
      } else if (path.includes('why-ssv') || path.includes('why')) {
        setCurrentPage('why-ssv');
      } else if (path.includes('contact')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (service?: string) => {
    if (service) setEnquiryDefaultService(service);
    setIsEnquiryOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={navigateTo} onOpenEnquiry={() => handleOpenEnquiry('Corporate Services')} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} onOpenEnquiry={handleOpenEnquiry} />;
      case 'security':
        return <SecurityPage onOpenEnquiry={handleOpenEnquiry} />;
      case 'housekeeping':
        return <HousekeepingPage onOpenEnquiry={handleOpenEnquiry} />;
      case 'infrastructure':
        return <InfrastructurePage onOpenEnquiry={handleOpenEnquiry} />;
      case 'industries':
        return <IndustriesPage onOpenEnquiry={handleOpenEnquiry} />;
      case 'why-ssv':
        return <WhySSVPage onOpenEnquiry={() => handleOpenEnquiry('Consultation & Audit')} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} onOpenEnquiry={handleOpenEnquiry} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-gotham text-[#001423]">
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <MobileActionBar onOpenEnquiry={() => handleOpenEnquiry()} />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultService={enquiryDefaultService}
      />
    </div>
  );
}
