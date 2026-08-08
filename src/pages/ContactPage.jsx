import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import WorkWithExperts from '../components/WorkWithExperts';

export default function ContactPage({ onOpenQuoteModal, onNavigate, onTriggerToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    service: 'General Inquiry'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onTriggerToast) {
        onTriggerToast('Message sent successfully! Our team will contact you shortly.');
      }
    }, 1000);
  };

  return (
    <div className="pt-24 bg-brand-deep min-h-screen text-slate-100">
      
      {/* 1. Header Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest inline-block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CONTACT US - LET'S BUILD A SAFER, SMARTER ENVIRONMENT TOGETHER
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Have questions about a new installation, system upgrade, or emergency support? Our security specialists are here 24/7 to assist.
          </p>
        </div>
      </section>

      {/* 2. 4 Quick Info Cards */}
      <section className="py-12 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email Card */}
            <div className="p-6 bg-brand-dark/90 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</h3>
                <a href="mailto:techhyeye@gmail.com" className="text-sm font-semibold text-white hover:text-brand-cyan transition-colors block break-all">
                  techhyeye@gmail.com
                </a>
                <p className="text-[11px] text-slate-500">Quick response within 2 hours</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 bg-brand-dark/90 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Hotline</h3>
                <a href="tel:+94706063010" className="text-xs font-semibold text-white hover:text-brand-cyan transition-colors block">
                  +94 70 606 3010
                </a>
                <a href="tel:+94706063011" className="text-xs font-semibold text-slate-300 hover:text-brand-cyan transition-colors block">
                  +94 70 606 3011 / 3012
                </a>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-brand-dark/90 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Our Location</h3>
                <p className="text-xs font-semibold text-white leading-snug">
                  No 138/3, Suhada MV, Karagampitiya, Boralesgamuwa
                </p>
                <p className="text-[11px] text-slate-500">Western Province, Sri Lanka</p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 bg-brand-dark/90 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</h3>
                <p className="text-xs font-semibold text-white">
                  Monday - Sunday
                </p>
                <p className="text-xs text-brand-cyan font-semibold">8:30 AM - 6:00 PM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Form Section & Map Widget */}
      <section className="py-16 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 bg-brand-dark/90 border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6"
            >
              <div>
                <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-1">
                  Send A Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Request Information or Consultation
                </h2>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-lg font-bold text-white">Thank You!</h3>
                  <p className="text-xs text-slate-300">
                    Your inquiry has been received. Our team will get back to you within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', phone: '', email: '', message: '', service: 'General Inquiry' });
                    }}
                    className="px-6 py-2 text-xs font-semibold bg-white/10 text-white rounded-xl hover:bg-white/20"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nimal Perera"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-deep border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="070 606 3010"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-deep border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-brand-deep border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-deep border border-white/10 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-brand-cyan transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="CCTV Systems">Commercial & Residential CCTV</option>
                      <option value="Access Control">Access Control Systems</option>
                      <option value="Biometric Attendance">Biometric Attendance Systems</option>
                      <option value="Video Intercoms">Smart Video Intercoms</option>
                      <option value="Fiber & Networking">Fiber Optic & Network Infrastructure</option>
                      <option value="Enterprise Wi-Fi">Wireless & Wi-Fi Enterprise Solutions</option>
                      <option value="Cloud Storage">Cloud Storage & Backup</option>
                      <option value="PABX Systems">PABX & IP Telephony</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Tell us about your property type, required coverage, or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-deep border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-brand-cyan transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-sm font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Right: Interactive Map Location Widget & Direct Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Map Container */}
              <div className="bg-brand-dark/90 border border-white/10 rounded-3xl overflow-hidden p-2 shadow-2xl">
                <div className="w-full h-80 rounded-2xl overflow-hidden relative bg-slate-900">
                  <iframe
                    title="TechHyEye Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.428589718425!2d79.9000!3d6.8400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a5078f44d15%3A0x2ff259cfcb00f282!2sBoralesgamuwa%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Direct Emergency Contact Box */}
              <div className="bg-gradient-to-tr from-brand-cyan/15 to-brand-blue/15 border border-brand-cyan/30 p-6 rounded-3xl space-y-3">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-6 h-6 text-brand-cyan" />
                  <span className="font-bold text-white text-base">Direct Hotline & WhatsApp Support</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Need immediate technical assistance or emergency support for an installed system? Contact our hotline directly:
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="tel:+94706063010"
                    className="px-4 py-2 bg-brand-cyan text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-colors inline-flex items-center"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    +94 70 606 3010
                  </a>
                  <a
                    href="https://wa.me/94706063010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Work With Experts Banner */}
      <WorkWithExperts onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />
    </div>
  );
}
