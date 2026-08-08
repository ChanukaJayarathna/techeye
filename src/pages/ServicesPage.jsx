import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Search, SlidersHorizontal } from 'lucide-react';
import WorkWithExperts from '../components/WorkWithExperts';
import { servicesData, serviceCategories } from '../data/servicesData';
import { assetPath } from '../utils/assetPath';

export default function ServicesPage({ onOpenQuoteModal, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.fullDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 bg-brand-deep min-h-screen text-slate-100">
      
      {/* 1. Header Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest inline-block">
            Comprehensive Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            OUR SERVICES
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            End-to-end security, surveillance, and networking systems engineered with cutting-edge technology for maximum reliability.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search Bar */}
      <section className="py-8 bg-brand-dark/60 sticky top-[72px] z-30 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/20'
                      : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-brand-deep border border-white/15 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
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
        </div>
      </section>

      {/* 3. Detailed Service Blocks */}
      <section className="py-16 bg-brand-deep space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {filteredServices.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-brand-dark/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl hover:border-brand-cyan/30 transition-all"
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  
                  {/* Photo Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] group shadow-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.target.src = assetPath('/images/hero-bg.jpg'); }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-80"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-cyan text-white">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text & Features Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-brand-cyan uppercase tracking-widest">
                        {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* 6-Point Feature Grid */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features & Capabilities:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start space-x-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                            <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span className="text-xs text-slate-200 font-medium">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => onOpenQuoteModal(service.title)}
                        className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:scale-105 transition-all flex items-center space-x-2"
                      >
                        <span>Inquire Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="px-6 py-3 text-xs font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
                      >
                        Schedule Free Consultation
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}

          {filteredServices.length === 0 && (
            <div className="text-center py-20 p-8 rounded-3xl glass-card">
              <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No matching services found</h3>
              <p className="text-xs text-slate-400 mt-1">Please try clearing your search or selecting a different category.</p>
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

      {/* 4. Work With Experts Banner */}
      <WorkWithExperts onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />
    </div>
  );
}
