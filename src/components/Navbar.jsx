import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, Shield, ChevronRight } from 'lucide-react';

export default function Navbar({ activePage, onNavigate, onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-brand-dark/95 border-b border-white/5 py-2 px-4 text-xs transition-all duration-300 ${isScrolled ? 'hidden md:block opacity-90' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-300">
          <div className="flex items-center space-x-6">
            <a href="tel:+94706063010" className="flex items-center hover:text-brand-cyan transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
              <span>+94 70 606 3010 / 3011 / 3012</span>
            </a>
            <a href="mailto:techhyeye@gmail.com" className="hidden sm:flex items-center hover:text-brand-cyan transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
              <span>techhyeye@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-cyan mr-1.5" />
              <span>Mon - Sun: 8:30 AM - 6:00 PM</span>
            </div>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ● 24/7 Emergency Active
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md shadow-2xl py-3 border-b border-brand-cyan/20' : 'bg-brand-deep/80 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-blue flex items-center justify-center shadow-lg shadow-brand-cyan/20 group-hover:scale-105 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-cyan rounded-full animate-ping opacity-75"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-brand-cyan font-sans">
                TechHyEye<span className="text-brand-cyan">.lk</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-widest uppercase font-medium">Smart Security & Networking</span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                    isActive ? 'text-brand-cyan font-semibold' : 'text-slate-200 hover:text-brand-cyan'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-cyan rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.02] active:scale-95 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get Free Quote
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-brand-cyan hover:bg-white/10 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[100%] bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-medium transition-colors px-3 py-2 rounded-lg ${
                  activePage === link.id ? 'bg-brand-cyan/20 text-brand-cyan' : 'text-slate-200 hover:bg-white/5 hover:text-brand-cyan'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/20"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+94706063010"
                className="flex items-center justify-center py-2.5 text-sm text-slate-300 bg-white/5 rounded-xl border border-white/10"
              >
                <Phone className="w-4 h-4 text-brand-cyan mr-2" />
                Call +94 70 606 3010
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
