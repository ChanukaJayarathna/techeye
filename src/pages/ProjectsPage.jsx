import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ExternalLink, Layers, ShieldCheck, Building, Box, Wrench } from 'lucide-react';
import WorkWithExperts from '../components/WorkWithExperts';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage({ onOpenQuoteModal, onNavigate }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="pt-24 bg-brand-deep min-h-screen text-slate-100">
      
      {/* 1. Header Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest inline-block">
            Our Portfolio & Case Studies
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            OUR PROJECT - SUCCESSFUL SECURITY & IT PROJECTS
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our featured deployments across commercial complexes, industrial parks, retail chains, and luxury estates in Sri Lanka.
          </p>
        </div>
      </section>

      {/* 2. Detailed Case Studies List */}
      <section className="py-16 bg-brand-deep">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-brand-dark/90 border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-brand-cyan/40 transition-all shadow-2xl space-y-6"
            >
              {/* Header Title and Badges */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-1">
                    CASE STUDY #{idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {project.title}
                  </h2>
                </div>

                <button
                  onClick={() => onOpenQuoteModal(`Project Inquiry: ${project.title}`)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg shadow-brand-cyan/20 hover:scale-105 transition-all self-start lg:self-center"
                >
                  Request Similar Solution
                </button>
              </div>

              {/* 4 Detail Badges */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                    <Building className="w-4 h-4 text-brand-cyan" />
                    <span>Client / Venue</span>
                  </div>
                  <div className="font-semibold text-sm text-white">{project.client}</div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                    <Layers className="w-4 h-4 text-brand-cyan" />
                    <span>Project Type</span>
                  </div>
                  <div className="font-semibold text-sm text-white">{project.type}</div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                    <Box className="w-4 h-4 text-brand-cyan" />
                    <span>Units / Scale</span>
                  </div>
                  <div className="font-semibold text-sm text-white">{project.units}</div>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                    <Wrench className="w-4 h-4 text-brand-cyan" />
                    <span>Scope of Work</span>
                  </div>
                  <div className="font-semibold text-sm text-white truncate" title={project.scope}>
                    {project.scope}
                  </div>
                </div>
              </div>

              {/* Description & Key Deliverables */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Technical Highlights:</h4>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-3 gap-3">
                    {project.images.map((imgUrl, iIdx) => (
                      <div 
                        key={iIdx}
                        className="group relative rounded-xl overflow-hidden aspect-square border border-white/10 bg-slate-900 cursor-pointer"
                        onClick={() => setSelectedProject({ ...project, currentImg: imgUrl })}
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} photo ${iIdx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => { e.target.src = '/images/hero-bg.jpg'; }}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox / Image Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-brand-dark border border-white/20 rounded-2xl overflow-hidden p-6 space-y-4">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold text-white pr-8">{selectedProject.title}</h3>
            <div className="max-h-[70vh] overflow-hidden rounded-xl bg-black flex items-center justify-center">
              <img src={selectedProject.currentImg} alt="Enlarged Project View" className="max-h-[65vh] w-auto object-contain" />
            </div>
          </div>
        </div>
      )}

      {/* 3. Work With Experts Banner */}
      <WorkWithExperts onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />
    </div>
  );
}
