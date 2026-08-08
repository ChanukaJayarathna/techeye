import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldAlert, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-3 px-5 py-3 rounded-2xl bg-brand-dark/95 border border-brand-cyan/50 shadow-2xl shadow-brand-cyan/20 backdrop-blur-xl text-white text-xs font-semibold"
      >
        <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-2 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
