import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Award, Users, Headset, MapPin, Star } from 'lucide-react';

export default function Metrics() {
  const metrics = [
    {
      id: 1,
      icon: Star,
      value: '10+',
      label: 'Years Experience',
      subtext: 'Proven Track Record in Sri Lanka'
    },
    {
      id: 2,
      icon: Wrench,
      value: '700+',
      label: 'Installations',
      subtext: 'Successfully Completed Projects'
    },
    {
      id: 3,
      icon: Award,
      value: '100%',
      label: 'Customer Satisfaction',
      subtext: 'Uncompromising Quality Standard'
    },
    {
      id: 4,
      icon: Users,
      value: '500+',
      label: 'Loyal Clients',
      subtext: 'Commercial & Residential Spaces'
    },
    {
      id: 5,
      icon: Headset,
      value: '24/7',
      label: 'After-Sales Support',
      subtext: 'Round-the-Clock Emergency Help'
    },
    {
      id: 6,
      icon: MapPin,
      value: 'Island+',
      label: 'Island Wide Service',
      subtext: 'Nationwide Deployment Reach'
    }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-brand-dark via-slate-950 to-brand-dark border-t border-white/10 overflow-hidden">
      {/* CCTV Line Art / Grid Background Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-bold text-brand-cyan uppercase tracking-widest">
            PROVEN TRACK RECORD & EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            OUR RESULTS & IMPACT
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            COMPLETE SECURITY AND COMMUNICATION SOLUTIONS DELIVERED UNDER ONE ROOF.
          </p>
        </div>

        {/* 6 Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-brand-cyan/50 text-center space-y-3 hover:scale-105 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-cyan/20 to-brand-blue/20 border border-brand-cyan/30 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:bg-brand-cyan transition-all">
                <m.icon className="w-6 h-6 text-brand-cyan group-hover:text-white transition-colors" />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan">
                {m.value}
              </div>

              <div className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                {m.label}
              </div>

              <div className="text-[10px] text-slate-400 line-clamp-2">
                {m.subtext}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
