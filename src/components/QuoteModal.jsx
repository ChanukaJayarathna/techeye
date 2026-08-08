import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuoteModal({ isOpen, initialService, onClose, onTriggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'CCTV Surveillance Systems',
    propertyType: 'Commercial Office',
    message: ''
  });

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onTriggerToast('Please enter your Name and Phone Number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {
        console.error(err);
      }
      onTriggerToast('Quote Request Submitted! We will call you back within 2 hours.');
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl glass-card border border-brand-cyan/40 p-6 sm:p-8 shadow-2xl overflow-hidden bg-brand-dark"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center shadow-lg shadow-brand-cyan/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Get a Free Instant Quote</h3>
              <p className="text-xs text-slate-400">Zero obligation site audit & hardware recommendation.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Nimal Perera"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-brand-deep border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Hotline *</label>
                <input
                  type="tel"
                  required
                  placeholder="+94 7X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-deep border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Property Type</label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-deep border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-cyan"
                >
                  <option>Commercial Office</option>
                  <option>Factory / Warehouse</option>
                  <option>Private Residence / Villa</option>
                  <option>Retail Store / Mall</option>
                  <option>Hotel / Apartment Complex</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Service Required</label>
              <input
                type="text"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 bg-brand-deep border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-cyan"
                placeholder="e.g. Commercial & Residential CCTV Systems"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Brief Description (Optional)</label>
              <textarea
                rows={2}
                placeholder="Mention camera count, area size, or specific requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-brand-deep border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
            >
              <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
              <span>{isSubmitting ? 'SUBMITTING REQUEST...' : 'SUBMIT FREE QUOTE REQUEST'}</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
