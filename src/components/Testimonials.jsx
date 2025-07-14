import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Jessica Thompson',
      position: 'CEO, Innovate Tech',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      content: 'Working with GrowthRevolution transformed our business completely. Their strategic approach and innovative solutions helped us increase our customer base by 40% in just six months.',
    },
    {
      id: 2,
      name: 'Michael Johnson',
      position: 'Marketing Director, Global Retail',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      content: 'The team at GrowthRevolution provided exactly what we needed – a clear strategy with actionable insights. Their attention to detail and commitment to our success was impressive.',
    },
    {
      id: 3,
      name: 'Sarah Williams',
      position: 'Founder, Creative Studios',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      content: 'I was blown away by the creativity and technical expertise that GrowthRevolution brought to our rebranding project. They truly understand the balance between aesthetics and functionality.',
    }
  ];
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section bg-accent">
      <div className="container">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-primary">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto fade-in">
          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-dark p-8 md:p-12 shadow-lg">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-opacity duration-500 absolute inset-0 flex flex-col md:flex-row gap-8 items-center p-8 md:p-12 ${
                    activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-primary/40" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8v6a6 6 0 01-6 6H4v6h6a12 12 0 0012-12V8h-12zm20 0v6a6 6 0 01-6 6h0v6h6a12 12 0 0012-12V8h-12z" />
                      </svg>
                    </div>
                    <blockquote className="text-xl mb-6">{testimonial.content}</blockquote>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-primary w-6' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Client logos */}
          <div className="mt-16">
            <p className="text-center text-sm text-gray-500 mb-8">TRUSTED BY LEADING COMPANIES</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
              {/* Placeholder for client logos - in a real project, replace with actual logos */}
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="h-12 flex items-center">
                  <div className="bg-gray-400/10 w-24 h-8 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
