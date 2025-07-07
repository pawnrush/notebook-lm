'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import PresentationSlides from '@/components/PresentationSlides';
import Resources from '@/components/Resources';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'presentation':
        return <PresentationSlides />;
      case 'resources':
        return <Resources />;
      case 'about':
        return <About />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container mx-auto px-4">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

