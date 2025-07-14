import { useEffect, useRef } from 'react';
import AnimateOnScroll from './AnimateOnScroll';
import { Component as EtherealShadow } from "./ui/etheral-shadow";

const Hero = () => {
  const circularTextRef = useRef(null);
  
  useEffect(() => {
    // Function to create the circular text animation
    const createCircularText = () => {
      if (!circularTextRef.current) return;
      
      const text = "Full-Stack Dev · AI Automation Specialist · Web Developer · ";
      const characters = text.split('');
      const degree = 360 / characters.length;
      
      circularTextRef.current.innerHTML = '';
      
      characters.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.position = 'absolute';
        span.style.transform = `rotate(${i * degree}deg)`;
        span.style.transformOrigin = '0 100px'; // Adjust radius here
        circularTextRef.current.appendChild(span);
      });
    };
    
    createCircularText();
    window.addEventListener('resize', createCircularText);
    
    return () => {
      window.removeEventListener('resize', createCircularText);
    };
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-24 overflow-hidden">
      {/* Ethereal Shadow Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <EtherealShadow
          color="rgba(128, 128, 128, 1)" 
          animation={{ scale: 80, speed: 70 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Full-Stack Dev <br />
              <span className="text-primary">+ AI Automation Specialist</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Crafting intuitive, visually compelling interfaces & practical AI automations – adapting quickly to make technology work for people.  
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a href="mailto:pastranotricia@gmail.com" className="btn border border-white/20 hover:bg-white/10">
                Contact Me
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-1">10+</h4>
                <p className="text-sm text-gray-400">Tech Stack Proficiencies</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-1">20+</h4>
                <p className="text-sm text-gray-400">Projects completed</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center fade-in">
            {/* Circular rotating text */}
            <div className="absolute w-[200px] h-[200px] transform rotate-animation" ref={circularTextRef}></div>
            
            {/* Hero image container */}
            <div className="w-full aspect-square max-w-md rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Developer at work" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Skills card */}
            <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Tech Stack</p>
                  <p className="font-bold">React & Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-[120px]"></div>
      
      {/* Transition gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-dark z-20"></div>
    </section>
  );
};

export default Hero;
