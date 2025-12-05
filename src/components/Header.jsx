import React, { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { NavBar } from './ui/tubelight-navbar';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Navigation items for tubelight navbar
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: Code },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur py-2 shadow-lg' : 'bg-transparent py-3'
      }`}
    >
      <div className="container flex justify-between items-center">
        <AnimateOnScroll animation="fade-in" delay={0.1} threshold={0.1}>
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="Tricia Angela Logo" className="h-14" />
          </a>
        </AnimateOnScroll>

        {/* Desktop Navigation - Tubelight Navbar */}
        <div className="hidden md:block">
          <NavBar 
            items={navItems} 
            className="relative z-10 sm:top-auto top-0 bottom-auto mb-0 pt-0"
          />
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-light p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-dark/95 backdrop-blur-md z-40 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="container py-8 flex flex-col">
            {/* Mobile Tubelight Navbar */}
            <div className="md:hidden flex items-center justify-center mb-8">
              <NavBar 
                items={navItems.map(item => ({
                  ...item,
                  url: item.url,
                  onClick: () => setIsMenuOpen(false)
                }))}
                className="relative z-10 top-auto bottom-auto left-0 transform-none mb-0 pt-0 w-full"
              />
            </div>
            
            {/* Additional Contact Button */}
            <div className="mt-6 flex justify-center">
              <a href="mailto:pastranotricia@gmail.com" className="btn btn-primary w-full max-w-xs text-center" onClick={() => setIsMenuOpen(false)}>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
