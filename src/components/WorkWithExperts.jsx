import React from 'react';
import { Shield, PhoneCall, ArrowRight } from 'lucide-react';

export default function WorkWithExperts({ onOpenQuoteModal, onNavigate }) {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark border-y border-white/10">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-900/90 to-brand-dark/90 p-8 sm:p-12 rounded-3xl border border-brand-cyan/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              <span>Certified Security Specialists</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              WORK WITH EXPERTS FOR YOUR PEACE OF MIND
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Ready to upgrade your home or commercial security? Contact our certified engineering team for a free site survey and a tailored solution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-blue-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/50 hover:scale-105 transition-all flex items-center justify-center space-x-2"
            >
              <span>GET FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-brand-cyan mr-1" />
              <span>CONTACT US</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
