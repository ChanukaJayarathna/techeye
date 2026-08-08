import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Sparkles, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ onTriggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'CCTV Surveillance Systems',
    budget: 'LKR 100k - 250k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onTriggerToast('Please enter your Name and Phone Number');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      
      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      onTriggerToast('Quote Request Sent! Our engineers will call you within 2 hours.');

      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: 'CCTV Surveillance Systems',
        budget: 'LKR 100k - 250k',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-brand-deep border-t border-white/10 overflow-hidden">
      {/* Background Lights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24/7 Consultation & Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            GET IN TOUCH
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm">
            LET'S BUILD A SAFER, SMARTER, AND MORE CONNECTED ENVIRONMENT TOGETHER.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Form */}
          <motion.div
            className="lg:col-span-6 rounded-3xl glass-card border border-white/10 p-8 sm:p-10 shadow-2xl relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Request an Instant Quote</h3>
            <p className="text-xs text-slate-400 mb-6">Fill in your details for a free site estimate & hardware assessment.</p>

            {submittedSuccess ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-white">Thank You! Request Received</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Our certified technical team will review your inquiry and contact you at <span className="text-brand-cyan font-bold">{formData.phone || 'your phone number'}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmittedSuccess(false)}
                  className="px-6 py-2.5 text-xs font-bold bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Supun Perera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+94 7X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Required Service</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      <option>CCTV Surveillance Systems</option>
                      <option>Access Control Systems</option>
                      <option>Network Infrastructure & Cabling</option>
                      <option>Smart Door Locks & Video Intercoms</option>
                      <option>Biometric Attendance Systems</option>
                      <option>Commercial Alarm Systems</option>
                      <option>Fiber Optic & WiFi Setup</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      <option>Under LKR 100,000</option>
                      <option>LKR 100k - 250k</option>
                      <option>LKR 250k - 500k</option>
                      <option>LKR 500k - 1M+</option>
                      <option>Enterprise Custom Quote</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your property, camera count, or network requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-dark/90 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>{isSubmitting ? 'SENDING INQUIRY...' : 'SEND INQUIRY NOW'}</span>
                </button>
              </form>
            )}

          </motion.div>

          {/* Right Column: Address Details, WhatsApp & Map */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Information Box */}
            <div className="p-8 rounded-3xl glass-card border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">CONTACT INFORMATION</h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <a href="mailto:techhyeye@gmail.com" className="flex items-start space-x-3 text-slate-300 hover:text-brand-cyan transition-colors">
                  <Mail className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Email Us</div>
                    <div>techhyeye@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Telephone Lines</div>
                    <div className="flex flex-wrap gap-x-3 text-slate-300 font-mono">
                      <a href="tel:+94706063010" className="hover:text-brand-cyan">+94 70 606 3010</a>
                      <a href="tel:+94706063011" className="hover:text-brand-cyan">+94 70 606 3011</a>
                      <a href="tel:+94706063012" className="hover:text-brand-cyan">+94 70 606 3012</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Office Address</div>
                    <div>No 138/3, Suhada Mw, Katuwawala, Boralesgamuwa, Sri Lanka</div>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/94706063010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/20 transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+94706063010"
                  className="px-5 py-2.5 text-xs font-bold text-white bg-brand-cyan hover:bg-brand-blue rounded-xl transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Map Preview */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-64 shadow-2xl relative">
              <iframe
                title="TechHyEye Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.757827827823!2d79.905!3d6.845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5f1a5a1a1a%3A0x1a5a1a1a1a5a1a1a!2sBoralesgamuwa%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1600000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
