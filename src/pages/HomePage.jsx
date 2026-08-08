import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Camera, Key, Fingerprint, Video, Cpu, Wifi, Server, PhoneCall, Star } from 'lucide-react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import WorkWithExperts from '../components/WorkWithExperts';
import ContactSection from '../components/ContactSection';
import { servicesData } from '../data/servicesData';

export default function HomePage({ onNavigate, onOpenQuoteModal, onSelectService, onTriggerToast, onOpenVideoModal }) {
  const serviceIcons = {
    'cctv-systems': Camera,
    'access-control': Key,
    'biometric-attendance': Fingerprint,
    'smart-intercoms': Video,
    'fiber-networking': Cpu,
    'wireless-wifi': Wifi,
    'cloud-storage': Server,
    'pabx-telephony': PhoneCall,
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} onOpenVideoModal={onOpenVideoModal} />

      {/* 2. Quick Services Overview Cards */}
      <section className="py-20 bg-brand-deep relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 rounded-full">
              Our Core Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Comprehensive Security & IT Solutions
            </h2>
            <p className="text-slate-400 text-sm">
              Delivering high-performance surveillance, access control, and networking infrastructure for commercial, industrial, and residential properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, idx) => {
              const IconComp = serviceIcons[service.id] || Camera;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-brand-dark/80 border border-white/10 rounded-2xl p-6 hover:border-brand-cyan/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mb-4 group-hover:bg-brand-cyan group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-3 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      onSelectService(service);
                      onNavigate('services');
                    }}
                    className="inline-flex items-center text-xs font-semibold text-brand-cyan hover:text-white transition-colors pt-2 border-t border-white/10"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg hover:shadow-brand-cyan/30 transition-all inline-flex items-center space-x-2"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Animated Statistics */}
      <Metrics />

      {/* 4. Why Choose Us & Google Rating Banner */}
      <WhyChooseUs onOpenQuoteModal={onOpenQuoteModal} />

      {/* Google Reviews Badge Banner */}
      <section className="py-8 bg-brand-dark/90 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center space-x-2">
            <div className="flex text-amber-400 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-white text-lg">5.0 / 5.0</span>
          </div>
          <span className="hidden sm:inline text-slate-500">•</span>
          <p className="text-sm text-slate-300">
            Rated by <strong className="text-white">700+ satisfied clients</strong> for high reliability and exceptional after-sales support in Sri Lanka.
          </p>
        </div>
      </section>

      {/* 5. Testimonials */}
      <Testimonials />

      {/* 6. Work With Experts Banner */}
      <WorkWithExperts onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />

      {/* 7. Quick Contact Section */}
      <ContactSection onTriggerToast={onTriggerToast} />
    </div>
  );
}
