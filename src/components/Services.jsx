import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, ShieldCheck, Cpu, SlidersHorizontal, Sparkles } from 'lucide-react';
import { servicesData, serviceCategories } from '../data/servicesData';

export default function Services({ onSelectService, onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-24 relative bg-brand-deep border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Protection & Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            OUR PROFESSIONAL SERVICES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            APPLICABLE PLATFORMS & SOLUTIONS TAILORED UNDER ONE ROOF FOR BUSINESSES, FACTORIES & HOMES.
          </p>
        </div>

        {/* Filter Bar: Tabs & Search */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl glass-card border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Services Cards Grid (3x3) */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/15"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-52 overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Image Fallback */}
                    <div className="hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-brand-dark flex-col items-center justify-center p-4 text-center">
                      <Cpu className="w-12 h-12 text-brand-cyan mb-2" />
                      <span className="text-sm font-semibold text-white">{service.title}</span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent"></div>

                    {/* Category Tag Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-cyan/90 text-white shadow-md">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-3">
                    <div className="text-[11px] font-medium text-brand-cyan tracking-wider uppercase">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Key Features Bullet List */}
                    <ul className="pt-3 space-y-1.5 border-t border-white/10">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center text-[11px] text-slate-400">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan mr-2 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-white/5">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-brand-cyan hover:text-white flex items-center group/btn transition-colors"
                  >
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={onOpenQuoteModal}
                    className="px-3 py-1.5 text-[11px] font-bold text-white bg-white/10 hover:bg-brand-cyan/30 rounded-lg border border-white/10 transition-colors"
                  >
                    INQUIRE NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="mt-12 text-center py-16 p-8 rounded-2xl glass-card">
            <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto mb-3 animate-bounce" />
            <h4 className="text-lg font-bold text-white">No services found</h4>
            <p className="text-xs text-slate-400 mt-1">Try tweaking your search term or selecting a different category filter.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-brand-cyan text-white rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
