import React from 'react';
import AnimateOnScroll from './AnimateOnScroll';

const Contact = () => {

  return (
    <section id="contact" className="section bg-dark">
      <div className="container">
        <AnimateOnScroll animation="fade-in" threshold={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-primary">Touch</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in working together or have a project in mind? I'd love to hear from you!
            </p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="slide-up" delay={0.2} threshold={0.1}>
          <div className="flex flex-col items-center justify-center max-w-xl mx-auto bg-accent rounded-2xl p-12">
            {/* Email Contact */}
            <div className="text-center mb-8">
              <AnimateOnScroll animation="fade-in" delay={0.3} threshold={0.1}>
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in" delay={0.4} threshold={0.1}>
                <h3 className="text-2xl font-bold mb-2">Email Me</h3>
                <p className="text-gray-400 mb-8">The best way to reach me is through email. I'll get back to you as soon as possible.</p>
              </AnimateOnScroll>
            </div>
            
            {/* CTA Button */}
            <AnimateOnScroll animation="fade-in" delay={0.5} threshold={0.1}>
              <a 
                href="mailto:pastranotricia@gmail.com" 
                className="btn btn-primary btn-lg"
              >
                Send an Email
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
