import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData, googleRatingInfo } from '../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative bg-brand-deep border-t border-white/10 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>REAL VERIFIED CUSTOMER REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            YOUR SATISFACTION & OUR PROMISE
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            OUR CUSTOMERS SHARE THEIR EXPERIENCES WITH OUR CCTV & ACCESS CONTROL INSTALLATIONS.
          </p>

          {/* Google 5-Star Rating Badge */}
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-2xl glass-card border border-white/15 shadow-xl mt-4">
            <img src={googleRatingInfo.googleBadgeUrl} alt="Google Reviews" className="h-6" />
            <div className="flex items-center space-x-1">
              <span className="text-base font-extrabold text-white">{googleRatingInfo.rating}</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-400 ml-1">({googleRatingInfo.totalReviews}+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div 
          className="mt-12 max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative p-8 sm:p-12 rounded-3xl glass-card border border-brand-cyan/30 shadow-2xl shadow-brand-cyan/10">
            <Quote className="w-16 h-16 text-brand-cyan/20 absolute top-6 right-8 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating Stars & Time Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(activeReview.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {activeReview.time}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-xl text-slate-200 font-medium italic leading-relaxed">
                  "{activeReview.comment}"
                </p>

                {/* User Info & Avatar */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-cyan shadow-md"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(activeReview.name)}&background=00A8EE&color=fff`;
                    }}
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base font-bold text-white">{activeReview.name}</h4>
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <p className="text-xs text-slate-400 font-normal">{activeReview.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/5">
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-brand-cyan' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-cyan/20 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-cyan/20 border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
