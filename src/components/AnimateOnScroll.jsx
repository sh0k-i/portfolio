import { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';

const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0,
  duration = 1,
  threshold = 0.1
}) => {
  const [ref, isInView] = useInView({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationStyle = {
    opacity: hasAnimated ? 1 : 0,
    transform: animation.includes('slide-up') && !hasAnimated ? 'translateY(30px)' : 'none',
    transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      style={animationStyle}
      className={`${hasAnimated ? animation : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
