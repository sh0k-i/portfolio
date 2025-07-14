import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Footer = () => {
  return (
    <footer className="pt-20 pb-6 bg-dark">
      <div className="container">
        {/* Footer main content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Personal Info */}
          <AnimateOnScroll animation="fade-in">
            <div>
              <a href="#" className="flex items-center mb-6">
                <img src="/logo.png" alt="Tricia Angela Logo" className="h-14" />
              </a>
              
              <p className="text-gray-400 mb-4">
                Full-Stack Developer and AI Automation Specialist dedicated to creating elegant, efficient, and powerful web applications.
              </p>
              
              {/* Social links removed */}
            </div>
          </AnimateOnScroll>
          
          {/* Quick Links */}
          <AnimateOnScroll animation="fade-in" delay={0.2} threshold={0.1}>
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Me</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
                <li><a href="mailto:pastranotricia@gmail.com" className="text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </AnimateOnScroll>
          
          {/* Technical Skills */}
          <AnimateOnScroll animation="fade-in" delay={0.3} threshold={0.1}>
            <div>
              <h3 className="text-lg font-bold mb-6">Technical Skills</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-400">Frontend Development</span></li>
                <li><span className="text-gray-400">Backend Development</span></li>
                <li><span className="text-gray-400">AI & Machine Learning</span></li>
                <li><span className="text-gray-400">Cloud Architecture</span></li>
                <li><span className="text-gray-400">DevOps & CI/CD</span></li>
              </ul>
            </div>
          </AnimateOnScroll>
          
          {/* Contact */}
          <AnimateOnScroll animation="fade-in" delay={0.4} threshold={0.1}>
            <div>
              <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-4">
                Have a project in mind or want to learn more about my work? Feel free to reach out directly.
              </p>
              <a href="mailto:pastranotricia@gmail.com" className="flex items-center gap-2 mb-2 group">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-primary transition-colors">pastranotricia@gmail.com</span>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Copyright */}
        <AnimateOnScroll animation="fade-in" delay={0.2} threshold={0.1}>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Tricia Angela. All rights reserved.</p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
};

export default Footer;
