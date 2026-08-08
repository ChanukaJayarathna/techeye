import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, ShieldCheck, CheckCircle2, Award, Headphones, Cpu, Lock, 
  Download, Users, Wrench, Shield, ArrowRight, Camera, Key, Fingerprint, 
  Video, Wifi, Server, PhoneCall 
} from 'lucide-react';
import WorkWithExperts from '../components/WorkWithExperts';
import { assetPath } from '../utils/assetPath';

export default function AboutPage({ onOpenQuoteModal, onNavigate, onTriggerToast }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      const element = document.createElement('a');
      const file = new Blob([
        `TechHyEye (Pvt) Ltd - Corporate Profile 2026\nSmart Security & Networking Solutions\nPhone: +94 70 606 3010 / 3011 / 3012\nEmail: techhyeye@gmail.com\nAddress: No 138/3, Suhada MV, Karagampitiya, Boralesgamuwa`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'TechHyEye-Company-Profile.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      onTriggerToast('Company Profile downloaded successfully!');
    }, 800);
  };

  const coreValues = [
    {
      title: 'Integrity',
      icon: ShieldCheck,
      img: assetPath('/images/about/values/Integrity.png'),
      desc: 'Transparent pricing, 100% genuine products, and uncompromised honesty in all client interactions.'
    },
    {
      title: 'Excellence',
      icon: Award,
      img: assetPath('/images/about/values/Quality.png'),
      desc: 'Superior installation standards, cable management, and high-performance equipment selection.'
    },
    {
      title: 'Reliability',
      icon: Headphones,
      img: assetPath('/images/about/values/Innovation.png'),
      desc: 'Round-the-clock technical support, rapid emergency response, and 99.9% system uptime.'
    },
    {
      title: 'Client Focus',
      icon: Users,
      img: assetPath('/images/about/values/Customer Focus.png'),
      desc: 'Tailored solutions designed around your specific security needs, budget, and long-term goals.'
    }
  ];

  const servicesSummary = [
    { title: 'CCTV Surveillance', icon: Camera, desc: '4K IP & Analog Cameras with AI detection' },
    { title: 'Access Control', icon: Key, desc: 'Keycard, PIN & RFID door access' },
    { title: 'Biometric Attendance', icon: Fingerprint, desc: 'Facial recognition & fingerprint terminals' },
    { title: 'Video Intercoms', icon: Video, desc: 'Smart 2-way audio/video entry units' },
    { title: 'Fiber & Networking', icon: Cpu, desc: 'High-speed Cat6 & fiber optic backbones' },
    { title: 'Enterprise Wi-Fi', icon: Wifi, desc: 'Zero-deadzone mesh Wi-Fi 6 coverage' },
    { title: 'Cloud Storage', icon: Server, desc: 'Encrypted offsite NVR & video backups' },
    { title: 'PABX & IP Telephony', icon: PhoneCall, desc: 'VoIP PBX & inter-office communication' }
  ];

  const teamMembers = [
    {
      name: 'Eng. K. A. Perera',
      title: 'Chief Technology Officer',
      specialty: 'Network Architecture & Optical Fiber Systems',
      image: assetPath('/images/about/our team.jpg')
    },
    {
      name: 'M. H. R. Fernando',
      title: 'Head of Security Engineering',
      specialty: 'Commercial CCTV & AI Surveillance Integration',
      image: assetPath('/images/about/about-1.jpg')
    },
    {
      name: 'S. T. De Silva',
      title: 'Lead Systems Engineer',
      specialty: 'Biometric Access Control & PABX Networks',
      image: assetPath('/images/about/about-2.jpg')
    },
    {
      name: 'R. M. Jayasinghe',
      title: 'Technical Operations Manager',
      specialty: '24/7 Field Maintenance & Client Relations',
      image: assetPath('/images/about/What We Do.jpg')
    }
  ];

  return (
    <div className="pt-24 bg-brand-deep min-h-screen text-slate-100">
      
      {/* 1. Header Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest inline-block">
            About TechHyEye Security & IT
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            ABOUT - OUR COMMITMENT TO YOUR SAFETY AND PEACE OF MIND
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Delivering world-class security systems, AI-powered surveillance, and robust IT networking for over a decade.
          </p>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
                <Building2 className="w-4 h-4" />
                <span>Who We Are</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Pioneering Security & Technology Infrastructure in Sri Lanka
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                TechHyEye (Pvt) Ltd is a premier provider of integrated security and IT networking solutions. Established with a mission to deliver uncompromised protection and seamless connectivity, we cater to residential homes, commercial complexes, educational institutes, and large industrial facilities.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We combine top-tier hardware from global leaders with certified engineering expertise. From single-point CCTV installations to multi-site fiber optic networks and biometric access control, our solutions are engineered for long-term reliability and ease of use.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-brand-dark/90 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-brand-cyan">10+</div>
                  <div className="text-xs text-slate-400">Years Experience</div>
                </div>
                <div className="p-4 bg-brand-dark/90 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-brand-cyan">700+</div>
                  <div className="text-xs text-slate-400">Projects Completed</div>
                </div>
                <div className="p-4 bg-brand-dark/90 rounded-2xl border border-white/10">
                  <div className="text-2xl font-black text-brand-cyan">100%</div>
                  <div className="text-xs text-slate-400">Client Satisfaction</div>
                </div>
              </div>

              <button
                onClick={handleDownloadPdf}
                disabled={isDownloading}
                className="mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-xs font-bold text-white transition-all flex items-center"
              >
                <Download className="w-4 h-4 mr-2 text-brand-cyan" />
                {isDownloading ? 'Downloading Profile...' : 'Download Corporate Profile (PDF)'}
              </button>
            </div>

            {/* Right Graphic Box */}
            <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-brand-cyan via-brand-blue to-purple-600 shadow-2xl">
              <img
                src=assetPath('/images/about/about-1.jpg')
                alt="TechHyEye Team at Work"
                className="w-full h-[400px] sm:h-[450px] object-cover rounded-[22px]"
                onError={(e) => { e.target.src = assetPath('/images/hero-bg.jpg'); }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do (Curved Border Image Block & Mission) */}
      <section className="py-20 bg-brand-dark/50 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Curved Image */}
            <div className="relative rounded-[3rem] overflow-hidden border-2 border-brand-cyan/40 shadow-2xl order-2 lg:order-1">
              <img
                src=assetPath('/images/about/What We Do.jpg')
                alt="What We Do - Security Installation"
                className="w-full h-[380px] sm:h-[420px] object-cover"
                onError={(e) => { e.target.src = assetPath('/images/about/about-2.jpg'); }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card border border-white/20">
                <span className="text-xs font-bold text-brand-cyan uppercase">OUR MISSION</span>
                <p className="text-xs text-slate-200 mt-1">To empower organizations and individuals with intelligent, foolproof security and seamless digital connectivity.</p>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>What We Do</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Comprehensive Protection & High-Speed Connectivity
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We handle every stage of your security and networking lifecycle—from site assessment, system architecture design, and cable laying, to device mounting, software configuration, and long-term maintenance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-3 shrink-0" />
                  <span>Custom surveillance design with zero blind spots</span>
                </li>
                <li className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-3 shrink-0" />
                  <span>High-speed optical fiber backbones and server room setups</span>
                </li>
                <li className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-3 shrink-0" />
                  <span>Integrated access control with automated time tracking</span>
                </li>
                <li className="flex items-center text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan mr-3 shrink-0" />
                  <span>24/7 technical helpdesk & rapid on-site repair SLA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Grid */}
      <section className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 rounded-full">
              Guided By Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              OUR CORE VALUES
            </h2>
            <p className="text-slate-400 text-sm">
              The fundamental principles that guide every installation, relationship, and service we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-brand-dark/80 p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-cyan/20 to-brand-blue/20 border border-brand-cyan/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {val.img ? (
                      <img src={val.img} alt={val.title} className="w-8 h-8 object-contain" onError={(e) => e.target.style.display='none'} />
                    ) : (
                      <val.icon className="w-7 h-7 text-brand-cyan" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Support & Maintenance Section */}
      <section className="py-20 bg-gradient-to-b from-brand-dark via-slate-900 to-brand-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 rounded-full">
                SLA & Service Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Comprehensive Support & Annual Maintenance
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Security systems require continuous care to ensure uncompromised protection. We offer tailored Annual Maintenance Contracts (AMC) that guarantee quick turnaround times, regular hardware checkups, and instant firmware updates.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                  <div className="text-brand-cyan font-bold text-sm">Preventive Maintenance</div>
                  <p className="text-xs text-slate-400">Scheduled lens cleaning, cable testing, power supply checks, and storage health audits.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                  <div className="text-brand-cyan font-bold text-sm">24/7 Rapid Response</div>
                  <p className="text-xs text-slate-400">On-call emergency dispatch for critical camera or access control outages.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                  <div className="text-brand-cyan font-bold text-sm">Spare Unit Support</div>
                  <p className="text-xs text-slate-400">Immediate standby equipment replacement while repairs are being processed.</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                  <div className="text-brand-cyan font-bold text-sm">Software & Firmware</div>
                  <p className="text-xs text-slate-400">Regular system updates to patch vulnerabilities and enhance NVR performance.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/30 shadow-2xl bg-brand-dark p-2">
                <img
                  src=assetPath('/images/about/Support & Maintenance.jpg')
                  alt="Support and Maintenance"
                  className="w-full h-[400px] object-cover rounded-2xl"
                  onError={(e) => { e.target.src = assetPath('/images/hero-bg.jpg'); }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services Grid (8 Icon Feature Boxes) */}
      <section className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 rounded-full">
              Full Spectrum Capability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              OUR 8 CORE SPECIALTIES
            </h2>
            <p className="text-slate-400 text-sm">
              Explore the complete range of security and networking solutions we engineer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesSummary.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('services')}
                className="p-6 rounded-2xl bg-brand-dark/70 border border-white/10 hover:border-brand-cyan/50 hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center mb-4 group-hover:bg-brand-cyan group-hover:text-white transition-all">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="text-[11px] font-semibold text-brand-cyan flex items-center">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Our Support (High-contrast dark tech background) */}
      <section className="relative py-20 overflow-hidden bg-slate-950 border-y border-white/10">
        <div className="absolute inset-0 opacity-20">
          <img
            src=assetPath('/images/about/Why Choose Our Support Services.jpg')
            alt="Support Background"
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-bold uppercase tracking-widest">
            Unrivaled Peace of Mind
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHY CHOOSE OUR SUPPORT SERVICES?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            With TechHyEye, you are not just buying hardware; you are investing in a long-term partnership backed by 24/7 expert maintenance, fast response times, and genuine component warranties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
            <div className="p-6 bg-brand-dark/90 backdrop-blur-md rounded-2xl border border-white/15 text-left">
              <div className="text-brand-cyan font-bold text-lg mb-2">⚡ Rapid SLA Guarantee</div>
              <p className="text-xs text-slate-300">Fastest response times for critical security system failures across all major Sri Lankan districts.</p>
            </div>
            <div className="p-6 bg-brand-dark/90 backdrop-blur-md rounded-2xl border border-white/15 text-left">
              <div className="text-brand-cyan font-bold text-lg mb-2">🛡 100% Genuine Parts</div>
              <p className="text-xs text-slate-300">Direct authorized partner with top manufacturers ensuring authentic products with full warranty.</p>
            </div>
            <div className="p-6 bg-brand-dark/90 backdrop-blur-md rounded-2xl border border-white/15 text-left">
              <div className="text-brand-cyan font-bold text-lg mb-2">🛠 Expert Engineers</div>
              <p className="text-xs text-slate-300">Certified technicians skilled in complex network topologies and high-end security setups.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Team (4 Team Cards) */}
      <section className="py-20 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 rounded-full">
              Leadership & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              MEET OUR EXPERT TEAM
            </h2>
            <p className="text-slate-400 text-sm">
              The dedicated professionals behind TechHyEye's industry-leading security and networking solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-brand-dark/80 rounded-2xl border border-white/10 overflow-hidden group hover:border-brand-cyan/50 transition-all duration-300">
                <div className="h-60 overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = assetPath('/images/hero-bg.jpg'); }}
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs text-brand-cyan font-semibold">{member.title}</div>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-white/10">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Work With Experts Banner */}
      <WorkWithExperts onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />
    </div>
  );
}
