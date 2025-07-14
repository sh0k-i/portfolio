import React, { useState } from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <AnimateOnScroll animation="fade-in">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80" 
                  alt="Developer coding" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Experience badge */}
              <AnimateOnScroll animation="fade-in" delay={0.3} threshold={0.2}>
                <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Specialization</p>
                      <p className="font-bold text-2xl">Full-Stack Dev</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
          
          {/* Content Column */}
          <AnimateOnScroll animation="fade-in" delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h2>
              
              <p className="text-gray-300 mb-4">
                I craft digital experiences that users love and businesses rely on. As a full-stack developer, I focus on building intuitive, visually compelling interfaces that solve real problems. I thrive on transforming complex ideas into seamless applications, using modern tools to create clean, accessible frontends.
              </p>
              
              <p className="text-gray-300 mb-8">
                Beyond the interface, I build practical AI automations that streamline workflows and eliminate tedious tasks. I adapt quickly to new technologies and frameworks, ensuring my solutions are both effective and forward-looking. My strength lies in making technology work for people – clearly, elegantly, and efficiently.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <AnimateOnScroll animation="slide-up" delay={0.3}>
                  <div className="flex items-center gap-3">
                    <div className="text-primary text-xl font-bold">✓</div>
                    <p>Full-Stack Development</p>
                  </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll animation="slide-up" delay={0.4}>
                  <div className="flex items-center gap-3">
                    <div className="text-primary text-xl font-bold">✓</div>
                    <p>AI Integration</p>
                  </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll animation="slide-up" delay={0.5}>
                  <div className="flex items-center gap-3">
                    <div className="text-primary text-xl font-bold">✓</div>
                    <p>Responsive Web Design</p>
                  </div>
                </AnimateOnScroll>
                
                <AnimateOnScroll animation="slide-up" delay={0.6}>
                  <div className="flex items-center gap-3">
                    <div className="text-primary text-xl font-bold">✓</div>
                    <p>Workflow Automation</p>
                  </div>
                </AnimateOnScroll>
              </div>
              
              <AnimateOnScroll animation="fade-in" delay={0.7}>
                <a href="mailto:pastranotricia@gmail.com" className="btn btn-primary">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
