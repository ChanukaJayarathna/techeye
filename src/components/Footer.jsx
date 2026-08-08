import React, { useState } from 'react';
import { Shield, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, MessageSquare, Send } from 'lucide-react';

export default function Footer({ onNavigate, onTriggerToast }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    onTriggerToast('Subscribed to TechHyEye Security Newsletter!');
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 text-left focus:outline-none group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center shadow-lg shadow-brand-cyan/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-sans">
                TechHyEye<span className="text-brand-cyan">.lk</span>
              </span>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              At TechHyEye, we're committed to providing, comprehensive electronic security system solutions that safeguard your home or business with cutting-edge IP cameras, biometric access, and fiber networks.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Subscribe to Tech Updates</span>
              <form onSubmit={handleSubscribe} className="flex max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2 bg-brand-deep border border-white/10 rounded-l-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-brand-cyan hover:bg-brand-blue text-white rounded-r-xl text-xs font-bold transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-cyan/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-cyan/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-brand-cyan/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://wa.me/94706063010" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-emerald-500/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-cyan transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-brand-cyan transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-brand-cyan transition-colors">Projects</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-brand-cyan transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-cyan transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">CCTV Systems</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">Access Control Systems</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">Biometric Attendance</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">Smart Video Intercoms</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">Fiber & Networking</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">Wi-Fi Solutions</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-brand-cyan transition-colors text-left">PABX & IP Telephony</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                <a href="mailto:techhyeye@gmail.com" className="hover:text-white">techhyeye@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                <span>+94 70 606 3010 / 3011 / 3012</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                <span>No 138/3, Suhada MV, Karagampitiya, Boralesgamuwa</span>
              </div>
              <div className="flex items-start space-x-2 pt-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Working Hours:</div>
                  <div>Monday - Sunday: 8:30 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 TechHyEye (Pvt) Ltd. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}
