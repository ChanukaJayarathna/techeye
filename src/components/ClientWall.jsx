import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sparkles } from 'lucide-react';
import { clientsData } from '../data/clientsData';

export default function ClientWall() {
  return (
    <section className="py-20 relative bg-brand-dark border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NATIONWIDE ENTERPRISE TRUST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            OUR TRUSTED CLIENTS
          </h2>

          <p className="text-xs sm:text-sm text-slate-400">
            PROUD TO PROTECT AND CONNECT SRI LANKA'S LEADING CORPORATIONS, INSTITUTIONS AND RESIDENCES.
          </p>
        </div>

        {/* Client Logo Grid Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clientsData.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="p-4 rounded-2xl glass-card border border-white/10 hover:border-brand-cyan/50 flex items-center justify-center h-24 hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center text-center">
                <Building2 className="w-6 h-6 text-slate-500 mb-1" />
                <span className="text-[10px] text-slate-400 font-medium">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
