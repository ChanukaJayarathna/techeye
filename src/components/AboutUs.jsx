import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, ShieldCheck, ArrowRight, Building2, Check } from 'lucide-react';
import { assetPath } from '../utils/assetPath';

export default function AboutUs({ onOpenQuoteModal, onTriggerToast }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      // Create mock PDF download link
      const element = document.createElement('a');
      const file = new Blob([
        `TechHyEye (Pvt) Ltd - Company Profile 2026\nSmart Security & Networking Solutions\nPhone: +94 70 606 3010\nWebsite: https://techhyeye.lk`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'TechHyEye-Company-Profile.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      onTriggerToast('Company Profile downloaded successfully!');
    }, 1000);
  };

  const differentiators = [
    'Complete end-to-end security & IT networking under one roof',
    'Custom engineered layouts for domestic, commercial & industrial spaces',
    'Rapid 24/7 technical emergency response & after-sales support contracts',
    'Certified engineers with 10+ years of high-end hardware integration experience',
    'Transparent pricing with 100% genuine manufacturer warranties'
  ];

  return (
    <section id="about" className="py-24 relative bg-brand-deep border-t border-white/10 overflow-hidden">
      {/* Radial Background Light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Curved Feature Imagery */}
          <motion.div
            className="lg:col-span-6 relative space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-brand-cyan via-brand-blue to-purple-600 shadow-2xl shadow-brand-cyan/20">
              <div className="relative rounded-[22px] overflow-hidden bg-brand-dark aspect-[4/3] sm:aspect-[16/10]">
                <img
                  src={assetPath('/images/about/about-1.jpg')}
                  alt="TechHyEye Technician Security Camera Installation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = assetPath('/images/hero-bg.jpg');
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 p-4 rounded-2xl glass-card border border-white/20 shadow-xl max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan font-black text-xl">
                      10+
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Years Experience</div>
                      <div className="text-[11px] text-slate-300">Trusted Nationwide in Sri Lanka</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image Overlay Card */}
            <div className="hidden sm:grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 h-32">
                <img
                  src={assetPath('/images/about/about-2.jpg')}
                  alt="IP Camera Technology"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-4 rounded-2xl glass-card border border-white/10 flex flex-col justify-center">
                <div className="text-2xl font-black text-white">700+</div>
                <div className="text-xs text-slate-300">Projects Successfully Executed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Company Overview & Differentiators */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
              <Building2 className="w-3.5 h-3.5" />
              <span>ABOUT TECHHYEYE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              WHO WE ARE
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              TechHyEye provides end-to-end IT and security solutions, combining strategic planning with advanced technologies to enhance business performance. We deliver reliable, cost-effective services with a commitment to sustainability and exceptional support.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              At TechHyEye, we're dedicated to providing innovative and reliable solutions for both domestic and industrial clients in Sri Lanka. With a wide range of services under one roof, we're your one-stop destination for all your security and network needs.
            </p>

            {/* Checkmark Differentiator Bullet List */}
            <div className="space-y-2.5 pt-2">
              {differentiators.map((diff, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-brand-cyan" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{diff}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: PDF Download & Quote */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="px-6 py-3 text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-all flex items-center group"
              >
                <Download className={`w-4 h-4 mr-2 text-brand-cyan ${isDownloading ? 'animate-bounce' : 'group-hover:-translate-y-0.5 transition-transform'}`} />
                <span>{isDownloading ? 'Downloading PDF...' : 'Download Company Profile PDF'}</span>
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:scale-105 transition-all flex items-center"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
