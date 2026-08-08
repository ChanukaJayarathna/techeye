import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ArrowRight, Video, Sparkles, Cpu, Eye, Wifi } from 'lucide-react';
import { partnersData } from '../data/partnersData';
import { assetPath } from '../utils/assetPath';

export default function Hero({ onOpenQuoteModal, onOpenVideoModal }) {
  const hotspots = [
    { id: 1, title: '4K AI Motion Sensor', desc: 'Real-time human & vehicle detection', top: '28%', left: '35%', icon: Cpu },
    { id: 2, title: 'Night Vision IR', desc: 'Full-color thermal illumination up to 50m', top: '48%', left: '68%', icon: Eye },
    { id: 3, title: 'Cloud & Mesh Sync', desc: 'Instant encrypted remote access', top: '72%', left: '42%', icon: Wifi },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-brand-deep via-brand-dark to-brand-deep">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Next-Gen Security & Networking Infrastructure</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              SMART SECURITY & <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-blue-400 to-brand-blue text-glow">
                NETWORKING SOLUTIONS
              </span> <br />
              FOR MODERN SPACES
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              High-performance surveillance, biometric access control, structured fiber cabling, and smart automation for total commercial and residential protection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.03] transition-all flex items-center group"
              >
                GET FREE QUOTE
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-brand-cyan/50 rounded-xl transition-all flex items-center"
              >
                VIEW OUR SERVICES
              </a>

              <button
                onClick={onOpenVideoModal}
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-brand-cyan flex items-center space-x-2 group transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-brand-cyan fill-brand-cyan ml-0.5" />
                </div>
                <span>Watch Tech Demo</span>
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Enterprise Grade</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs text-slate-300 font-medium">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
                <span className="text-xs text-slate-300 font-medium">10+ Yrs Trust</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Graphic Showcase with Hotspots */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Glowing Backdrop Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-1 bg-gradient-to-tr from-brand-cyan/40 via-brand-blue/30 to-purple-500/20 shadow-2xl shadow-brand-cyan/20">
              <div className="relative rounded-[22px] overflow-hidden bg-brand-dark/90 border border-white/10 aspect-[4/3] sm:aspect-square flex items-center justify-center">
                
                {/* Hero Camera Image */}
                <img 
                  src=assetPath('/images/hero-bg.jpg') 
                  alt="Modern Security IP Camera System" 
                  className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback Graphic */}
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-brand-dark p-6 text-center">
                  <Video className="w-20 h-20 text-brand-cyan animate-pulse mb-4" />
                  <span className="text-xl font-bold text-white">4K AI Smart Surveillance Camera</span>
                </div>

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>

                {/* Hotspot Markers */}
                {hotspots.map((hs) => (
                  <div
                    key={hs.id}
                    className="absolute group z-20 cursor-pointer"
                    style={{ top: hs.top, left: hs.left }}
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="w-5 h-5 bg-brand-cyan/40 rounded-full animate-ping absolute"></span>
                      <div className="w-4 h-4 bg-brand-cyan rounded-full border-2 border-white flex items-center justify-center shadow-lg shadow-brand-cyan/50">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Tooltip Card */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block w-48 p-3 rounded-xl bg-brand-dark/95 border border-brand-cyan/50 shadow-2xl backdrop-blur-lg z-30 transition-all pointer-events-none text-left">
                      <div className="flex items-center space-x-2 text-brand-cyan font-semibold text-xs mb-1">
                        <hs.icon className="w-3.5 h-3.5" />
                        <span>{hs.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight">{hs.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-card border-white/15 flex items-center justify-between shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                    <div>
                      <div className="text-xs font-bold text-white">Live System Status</div>
                      <div className="text-[10px] text-emerald-400 font-medium">100% Operational & Cloud Synced</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 bg-brand-cyan/20 text-brand-cyan rounded-md border border-brand-cyan/30">
                    AI POWERED
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Brand Partner Logo Ticker Carousel */}
      <div className="mt-16 border-y border-white/10 bg-brand-dark/60 py-6 overflow-hidden backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
            OFFICIAL HARDWARE & TECHNOLOGY PARTNERS
          </span>
        </div>
        
        <div className="relative w-full overflow-hidden flex">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center min-w-full">
            {[...partnersData, ...partnersData].map((p, idx) => (
              <div key={idx} className="inline-flex items-center space-x-3 opacity-75 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="h-8 max-w-[130px] object-contain invert brightness-200" />
                ) : (
                  <span className="text-lg font-bold text-slate-300 tracking-wider font-sans">{p.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
