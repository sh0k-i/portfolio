import { useState, useEffect } from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add fade-in animation after component mounts
    setTimeout(() => {
      setIsLoaded(true);
      // Add appear class to all elements with fade-in class
      document.querySelectorAll('.fade-in').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('appear');
        }, 150 * index);
      });
    }, 200);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
