import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      period: "March 2025 - Present",
      title: "Co-founder and Lead Frontend Developer",
      company: "LegalTendr",
      description: "Design and implement the UI/UX for a startup matching lawyers and clients in the Philippines. Lead development of an intuitive platform that streamlines legal consultations and service bookings."
    },
    {
      id: 2,
      period: "January 2025 - Present",
      title: "Web Developer and AI Automations Developer",
      company: "Channel Automation",
      description: "Responsible for full-stack web development, API integrations, and implementing AI automation solutions. Developed scalable applications connecting various platforms through robust API architectures while creating intelligent automation workflows."
    },
    {
      id: 3,
      period: "October 2024 - January 2025",
      title: "Web Developer Intern",
      company: "Channel Automation",
      description: "Internship focused on web development projects."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container">
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A timeline of my professional journey and career highlights.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <AnimateOnScroll 
                key={exp.id} 
                animation={index % 2 === 0 ? "slide-in-right" : "slide-in-left"}
                delay={0.2 * index}
                threshold={0.15}
              >
                <div 
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-accent p-6 rounded-xl shadow-lg">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-3">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="md:w-1/2"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
