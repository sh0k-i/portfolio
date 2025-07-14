import React, { useState, useEffect } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? 'py-3 bg-dark/90 backdrop-blur-md' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center">
        <AnimateOnScroll animation="fade-in" delay={0.1} threshold={0.1}>
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="Tricia Angela Logo" className="h-14" />
          </a>
        </AnimateOnScroll>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-light hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-light hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-light hover:text-primary transition-colors">Projects</a>
          <a href="#services" className="text-light hover:text-primary transition-colors">Skills</a>
          <a href="mailto:pastranotricia@gmail.com" className="btn btn-primary">Contact Me</a>
        </nav>

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
          <div className="container py-8 flex flex-col gap-6">
            <a href="#home" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#services" className="text-xl font-medium hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="mailto:pastranotricia@gmail.com" className="btn btn-primary w-full text-center mt-4" onClick={() => setIsMenuOpen(false)}>Contact Me</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
