import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Hotel Booking',
      category: 'fullstack',
      image: '/images/quickStay.jpg',
      tags: ['React', 'Vite', 'JavaScript', 'Tailwind'],
      link: 'https://hotel-booking-quickstay.netlify.app',
      description: 'A sample hotel booking full stack app with an elegant and simple UI. This application demonstrates a streamlined reservation process with intuitive room selection, date picking, and booking confirmation features.'
    },
    {
      id: 2,
      title: 'Threads',
      category: 'ecommerce',
      image: '/images/threads.jpg',
      tags: ['React', 'Vite', 'JavaScript', 'Tailwind'],
      link: 'https://threads-ecommerce.netlify.app',
      description: 'Sample ecommerce website for apparels. Featuring an intuitive, simple, and clean UI that enhances the shopping experience with seamless navigation and elegant product displays.'
    },
    {
      id: 3,
      title: 'Cura',
      category: 'fullstack',
      image: '/images/cura.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://cura-appointment.netlify.app',
      description: 'A sophisticated full-stack healthcare platform designed to streamline the appointment scheduling process for clinics. Features a sleek, intuitive interface that enhances the patient experience while providing powerful administrative tools for healthcare providers.'
    },
    {
      id: 4,
      title: 'Home Project Partners',
      category: 'web app',
      image: '/images/hpp.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://homeprojectpartners.com',
      description: 'An innovative pseudo-aggregator web application that intelligently connects homeowners with local renovation experts. With partnerships spanning over 40+ home improvement companies across the United States, this platform uses location-based matching to create meaningful connections between clients and trusted professionals.'
    },
    {
      id: 5,
      title: 'Fixr',
      category: 'frontend',
      image: '/images/fixr.jpg',
      tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
      link: 'https://fixr-demo.netlify.app',
      description: 'A specialized appointment scheduling solution for the home improvement industry. This modern web application simplifies the booking process with an elegant, responsive interface, allowing service providers to manage their schedule efficiently while giving homeowners a seamless experience when arranging home improvements.'
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll 
              key={project.id} 
              animation="fade-in" 
              delay={0.2 * (index % 3)} 
              threshold={0.1}
            >
              <div className="card overflow-hidden group">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary py-2 px-4 text-sm">
                      View Project
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit Website</a>
                  <span className="text-gray-400 capitalize">{project.category}</span>
                </div>
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
