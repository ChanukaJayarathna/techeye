import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, BookOpen, X, SlidersHorizontal } from 'lucide-react';
import WorkWithExperts from '../components/WorkWithExperts';
import { blogData, blogCategories } from '../data/blogData';
import { assetPath } from '../utils/assetPath';

export default function BlogPage({ onOpenQuoteModal, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState(null);

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 bg-brand-deep min-h-screen text-slate-100">
      
      {/* 1. Header Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-brand-dark via-slate-900 to-brand-dark border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold uppercase tracking-widest inline-block">
            Insights & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BLOG / RESOURCES
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Latest articles, technical guides, and industry news on CCTV surveillance, access control, and network infrastructure.
          </p>
        </div>
      </section>

      {/* 2. Top Bar Search & Category Filters */}
      <section className="py-8 bg-brand-dark/60 sticky top-[72px] z-30 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Buttons */}
            <div className="flex items-center space-x-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-brand-cyan to-brand-blue text-white shadow-lg shadow-brand-cyan/20'
                      : 'text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Field */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles & guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-brand-deep border border-white/15 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-brand-cyan transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vertical Blog Feed */}
      <section className="py-16 bg-brand-deep">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-dark/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-brand-cyan/40 transition-all flex flex-col md:flex-row group"
            >
              {/* Cover Image */}
              <div className="md:w-5/12 relative h-64 md:h-auto bg-slate-950 overflow-hidden shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => { e.target.src = assetPath('/images/hero-bg.jpg'); }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-brand-cyan text-white shadow-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Summary */}
              <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-xs text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-brand-cyan transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setActivePost(post)}
                    className="inline-flex items-center text-xs font-bold text-brand-cyan hover:text-white transition-colors group/btn"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[11px] text-slate-500 font-mono">5 min read</span>
                </div>
              </div>
            </motion.article>
          ))}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 p-8 rounded-3xl glass-card">
              <SlidersHorizontal className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No articles found</h3>
              <p className="text-xs text-slate-400 mt-1">Try searching for a different keyword or resetting your filter.</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 text-xs font-semibold bg-brand-cyan text-white rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Full Article Modal Reader */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-3xl w-full bg-brand-dark border border-white/20 rounded-3xl overflow-hidden p-6 sm:p-10 my-8 shadow-2xl space-y-6">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/10 rounded-full w-9 h-9 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan">
                {activePost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {activePost.title}
              </h2>
              <div className="flex items-center space-x-4 text-xs text-slate-400 pt-1">
                <span>By {activePost.author}</span>
                <span>•</span>
                <span>{activePost.date}</span>
              </div>
            </div>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <img
                src={activePost.image}
                alt={activePost.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = assetPath('/images/hero-bg.jpg'); }}
              />
            </div>

            <div
              className="text-sm text-slate-300 leading-relaxed space-y-4 prose-invert"
              dangerouslySetInnerHTML={{ __html: activePost.content }}
            ></div>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <button
                onClick={() => {
                  const title = activePost.title;
                  setActivePost(null);
                  onOpenQuoteModal(`Inquiry from Blog: ${title}`);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl shadow-lg hover:shadow-brand-cyan/30"
              >
                Inquire About Security Upgrades
              </button>
              <button
                onClick={() => setActivePost(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Work With Experts Banner */}
      <WorkWithExperts onOpenQuoteModal={onOpenQuoteModal} onNavigate={onNavigate} />
    </div>
  );
}
