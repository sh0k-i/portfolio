import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Channel Automation',
      category: 'frontend',
      image: '/images/chau.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://channel-automation.netlify.app',
      description: 'A stunning, modern landing page featuring rich interactive elements and captivating animations. Built with attention to detail, this project showcases smooth transitions, dynamic visual effects, and an engaging user experience that brings the brand to life.'
    },
    {
      id: 2,
      title: 'Hotel Booking',
      category: 'fullstack',
      image: '/images/quickStay.jpg',
      tags: ['React', 'Vite', 'JavaScript', 'Tailwind'],
      link: 'https://hotel-booking-quickstay.netlify.app',
      description: 'A sample hotel booking full stack app with an elegant and simple UI. This application demonstrates a streamlined reservation process with intuitive room selection, date picking, and booking confirmation features.'
    },
    {
      id: 3,
      title: 'Threads',
      category: 'ecommerce',
      image: '/images/threads.jpg',
      tags: ['React', 'Vite', 'JavaScript', 'Tailwind'],
      link: 'https://threads-ecommerce.netlify.app',
      description: 'Sample ecommerce website for apparels. Featuring an intuitive, simple, and clean UI that enhances the shopping experience with seamless navigation and elegant product displays.'
    },
    {
      id: 4,
      title: 'Cura',
      category: 'fullstack',
      image: '/images/cura.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://cura-appointment.netlify.app',
      description: 'A sophisticated full-stack healthcare platform designed to streamline the appointment scheduling process for clinics. Features a sleek, intuitive interface that enhances the patient experience while providing powerful administrative tools for healthcare providers.'
    },
    {
      id: 5,
      title: 'Home Project Partners',
      category: 'web app',
      image: '/images/hpp.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://homeprojectpartners.com',
      description: 'An innovative pseudo-aggregator web application that intelligently connects homeowners with local renovation experts. With partnerships spanning over 40+ home improvement companies across the United States, this platform uses location-based matching to create meaningful connections between clients and trusted professionals.'
    },
    {
      id: 6,
      title: 'Fixr',
      category: 'frontend',
      image: '/images/fixr.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://fixr-demo.netlify.app',
      description: 'A specialized appointment scheduling solution for the home improvement industry. This modern web application simplifies the booking process with an elegant, responsive interface, allowing service providers to manage their schedule efficiently while giving homeowners a seamless experience when arranging home improvements.'
    },
    {
      id: 7,
      title: 'Converge 2025 Event',
      category: 'fullstack',
      image: '/images/converge2025.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://events.channelautomation.com',
      description: 'A comprehensive event management platform featuring a polished landing page and automated backend registration flow with SMS and email notifications. Includes a powerful dashboard for managing registration approvals, streamlining the entire event coordination process.'
    },
    {
      id: 8,
      title: 'Buyerfound.ai',
      category: 'fullstack',
      image: '/images/buyerfound.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://buyerfound.netlify.app',
      description: 'An intelligent lead generation platform with a sleek landing page and automated backend registration system. Features multi-channel notifications via SMS, email, and Slack integration to ensure seamless communication and lead management.'
    },
    {
      id: 9,
      title: 'Yu Law Website',
      category: 'web app',
      image: '/images/yulaw.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://yu-law.netlify.app',
      description: 'A custom-designed law firm website featuring bespoke UI/UX tailored to the client\'s brand identity. Includes an automated contact flow system to streamline client inquiries and enhance the firm\'s digital presence.'
    }
  ];
  
  // All projects are displayed without filtering
  
  return (
    <section id="projects" className="section bg-accent">
      <div className="container">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Projects</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my portfolio of web applications and full-stack development projects.
            </p>
          </div>
        </AnimateOnScroll>
        
        {/* Removed filter buttons section */}
        
        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <AnimateOnScroll 
              key={project.id} 
              animation="fade-in" 
              delay={0.2 * (index % 3)} 
              threshold={0.1}
            >
              <div className="group relative bg-gradient-to-br from-dark/80 to-dark/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
                {/* Card inner content with padding */}
                <div className="p-5">
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-xl aspect-video mb-5 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-500">
                    {/* Project image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark overlay with gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 btn btn-primary py-2.5 px-5"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  
                  {/* Category badge removed */}
                  
                  {/* Project title */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-gray-800/50 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-gray-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View link */}
                  <div className="pt-2 border-t border-gray-800/50">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-primary hover:text-primary-600 text-sm font-medium transition-colors duration-300"
                    >
                      Visit Website
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Subtle gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={0.3} threshold={0.2}>
          <div className="text-center mt-12">
            <a href="mailto:pastranotricia@gmail.com" className="btn btn-primary">
              Let's Work Together
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Projects;
