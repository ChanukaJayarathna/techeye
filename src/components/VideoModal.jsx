import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Shield } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl rounded-3xl glass-card border border-brand-cyan/40 p-4 shadow-2xl overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-white/10 flex items-center justify-center">
            {/* Embedded Demo Video / Presentation Player */}
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
              title="TechHyEye CCTV Security Demo Video"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="p-4 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-brand-cyan" />
              <span className="font-semibold text-white">TechHyEye 4K AI Camera Technology Showcase</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20"
            >
              Close Player
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
