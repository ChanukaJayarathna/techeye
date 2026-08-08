import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-dark/90 border border-brand-cyan/50 text-brand-cyan hover:text-white hover:bg-brand-cyan shadow-xl shadow-brand-cyan/20 transition-all duration-300 group hover:scale-110"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      
      {/* Circular Progress Ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
        <circle
          cx="20"
          cy="20"
          r="18"
          className="stroke-white/10"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          className="stroke-brand-cyan"
          strokeWidth="2"
          fill="none"
          strokeDasharray="113"
          strokeDashoffset={113 - (113 * scrollProgress) / 100}
        />
      </svg>
    </button>
  );
}
