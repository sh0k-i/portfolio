import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Skills = () => {
  const skills = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
        </svg>
      ),
      title: 'Programming Languages',
      description: 'Proficient in C for system-level programming, Python for automation and data analysis, and Node.js for building scalable server-side applications.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
      ),
      title: 'Search Engine Optimization',
      description: 'Implementing technical SEO strategies, optimizing site structure, improving page speed, and creating search-friendly content to increase organic traffic and visibility.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
      title: 'Frontend Frameworks',
      description: 'Expert in React for building interactive UIs, Laravel for PHP-based web applications, Vercel for seamless deployments, and Next.js for server-side rendering and static site generation.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      ),
      title: 'AI Automation',
      description: 'Implementing intelligent workflow automation using trigger.dev for event-driven applications and n8n for creating advanced, customized automation workflows without code.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: 'Database Technologies',
      description: 'Working with SQL, PostgreSQL, Supabase for backend-as-a-service, Firebase for real-time applications, and MySQL for traditional relational database management.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11a9 9 0 0 1 9 9"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <circle cx="5" cy="19" r="1"></circle>
        </svg>
      ),
      title: 'API Integrations',
      description: 'Expertise in integrating with Google APIs, Lead Perfection for sales management, Zapier for cross-platform automation, and numerous other common third-party services.'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-accent">
      <div className="container">
        <AnimateOnScroll animation="fade-in" threshold={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Tech Skills</h2>
            <p className="text-gray-300">
              I specialize in these key technical areas, combining them to create robust, intelligent solutions.
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <AnimateOnScroll 
              key={index} 
              animation="slide-up" 
              delay={0.1 * index} 
              threshold={0.1}
            >
              <div className="bg-dark p-8 rounded-2xl hover:bg-dark/80 transition-all duration-300">
                <div className="bg-primary/20 p-4 rounded-xl w-16 h-16 flex items-center justify-center text-primary mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                <p className="text-gray-300">{skill.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        {/* CTA Banner */}
        <AnimateOnScroll animation="fade-in" delay={0.3} threshold={0.2}>
          <div className="mt-20 bg-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 rounded-full filter blur-[120px] -z-10"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Looking for a Technical Collaborator?</h3>
                <p className="text-gray-300 mb-6 md:mb-0">
                  I'm always interested in challenging projects that push the boundaries of what's possible with modern tech.
                </p>
              </div>
              <AnimateOnScroll animation="slide-in-right" delay={0.5} threshold={0.2}>
                <div className="flex justify-start md:justify-end">
                  <a href="mailto:pastranotricia@gmail.com" className="btn btn-primary">
                    Get in Touch
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Skills;
