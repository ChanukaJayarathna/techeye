import React from 'react';
import { motion } from 'framer-motion';
import { Award, Headset, ShieldCheck, Cpu, DollarSign, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'Certified Professionals',
      desc: 'Trained and certified technicians ensuring precise installation, clean wire management, and full configuration for every setup.'
    },
    {
      id: 2,
      icon: Headset,
      title: '24/7 Technical Support',
      desc: 'Round-the-clock technical assistance and fast on-site emergency dispatch whenever you need it, ensuring zero downtime.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Enterprise Grade Gear',
      desc: 'Top-tier hardware sourced directly from world-leading security brands (Hikvision, Axis, Dahua, Ubiquiti) with full warranty coverage.'
    },
    {
      id: 4,
      icon: Cpu,
      title: 'Custom Tailored Solutions',
      desc: 'Custom engineered security, intercom, and networking layouts tailored precisely to your property size and operational budget.'
    },
    {
      id: 5,
      icon: DollarSign,
      title: 'Transparent Pricing',
      desc: 'Best value for money in Sri Lanka with no hidden costs, detailed upfront quotations, and flexible payment packages.'
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-brand-dark via-brand-deep to-brand-dark border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why TechHyEye</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHY CHOOSE US
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            We deliver excellence in every project with certified expertise, premium hardware, and unwavering commitment to your peace of mind.
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl glass-card border border-white/10 hover:border-brand-cyan/50 hover:scale-[1.02] transition-all duration-300 group flex flex-col justify-between ${
                idx === 3 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-blue/20 border border-brand-cyan/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-cyan transition-all">
                  <feat.icon className="w-7 h-7 text-brand-cyan group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-brand-cyan font-semibold">
                <span>Guaranteed Standard</span>
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              </div>
            </motion.div>
          ))}

          {/* CTA Card Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-cyan/20 via-brand-blue/30 to-brand-dark border border-brand-cyan/40 shadow-2xl flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest">GET STARTED TODAY</span>
              <h3 className="text-2xl font-extrabold text-white">Need a Custom Security Design?</h3>
              <p className="text-xs text-slate-200">
                Contact our expert security engineers for a free site audit and customized quote within 24 hours.
              </p>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="mt-6 w-full py-3 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg hover:shadow-brand-cyan/30 hover:scale-[1.02] transition-all"
            >
              REQUEST FREE SITE VISIT
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
