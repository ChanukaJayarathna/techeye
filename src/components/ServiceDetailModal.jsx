import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onOpenQuoteModal }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl glass-card border border-brand-cyan/40 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Image Banner */}
          <div className="relative h-56 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6 overflow-hidden bg-slate-950">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-4 left-6 sm:left-8">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-brand-cyan text-white shadow-md mb-2 inline-block">
                {service.badge}
              </span>
              <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-brand-cyan uppercase tracking-wider mb-3">Key Technical Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 rounded-xl"
              >
                Close Window
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuoteModal();
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg hover:shadow-brand-cyan/30 transition-all flex items-center"
              >
                <span>REQUEST SERVICE QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
