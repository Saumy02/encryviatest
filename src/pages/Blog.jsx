import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, Search, ExternalLink, Calendar, Clock, 
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import fallbackPosts from '../data/mediumPosts.json';

const categoryFilters = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Cybersecurity', match: ['security', 'cybersecurity', 'firewall', 'waf', 'dmarc'] },
  { id: 'seo', label: 'SEO & GEO', match: ['seo', 'geo', 'artificial-intelligence', 'search'] },
  { id: 'development', label: 'Web Dev', match: ['web-development', 'technology', 'clean-code', 'programming', 'code'] },
  { id: 'marketing', label: 'Marketing & Ads', match: ['digital-marketing', 'google-ads', 'marketing', 'content-strategy'] },
  { id: 'design', label: 'UI/UX', match: ['design', 'minimal-design', 'canva', 'ui-ux'] }
];

const Blog = () => {
  const [posts, setPosts] = useState(fallbackPosts || []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dynamic live fetch from Medium RSS Feed
  useEffect(() => {
    let isMounted = true;

    const fetchMediumFeed = async () => {
      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@encryvia');
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        
        if (data && data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          const livePosts = data.items.map((item) => {
            const rawContent = item.content || item.description || '';
            const imgMatch = rawContent.match(/<img[^>]+src=["']([^"']+)["']/);
            const image = item.thumbnail || (imgMatch ? imgMatch[1] : null);
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = rawContent;
            const cleanText = (tempDiv.textContent || tempDiv.innerText || '').replace(/\s+/g, ' ').trim();
            const excerpt = cleanText.length > 220 ? cleanText.slice(0, 220) + '...' : cleanText;
            
            const wordCount = cleanText.split(/\s+/).length;
            const readTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;
            const cleanHtml = rawContent.replace(/<img[^>]+stat\?event[^>]+>/g, '');

            const rawSlug = item.link && item.link.includes('@encryvia/')
              ? item.link.split('@encryvia/')[1].split('?')[0]
              : (item.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');

            return {
              title: item.title || 'Untitled Article',
              slug: rawSlug,
              pubDate: item.pubDate || new Date().toISOString(),
              link: item.link || 'https://medium.com/@encryvia',
              guid: item.guid || item.link,
              author: item.author || 'EncryVia Team',
              thumbnail: image,
              description: excerpt,
              fullContent: cleanHtml,
              categories: item.categories || [],
              readTime
            };
          });

          if (isMounted) {
            setPosts(livePosts);
          }
        }
      } catch (err) {
        console.warn('Using cached Medium articles fallback:', err);
      }
    };

    fetchMediumFeed();

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter and Search logic
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const titleMatch = (post.title || '').toLowerCase().includes(searchQuery.toLowerCase());
      const descMatch = (post.description || '').toLowerCase().includes(searchQuery.toLowerCase());
      const queryMatch = !searchQuery || titleMatch || descMatch;

      if (!queryMatch) return false;
      if (selectedCategory === 'all') return true;

      const activeFilter = categoryFilters.find(f => f.id === selectedCategory);
      if (!activeFilter || !activeFilter.match) return true;

      const postCats = (post.categories || []).map(c => c.toLowerCase());
      const titleLower = (post.title || '').toLowerCase();
      
      return activeFilter.match.some(keyword => 
        postCats.some(cat => cat.includes(keyword)) || titleLower.includes(keyword)
      );
    });
  }, [posts, searchQuery, selectedCategory]);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr.replace(' ', 'T'));
      return isNaN(d.getTime()) ? dateStr.split(' ')[0] : d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr.split(' ')[0];
    }
  };

  return (
    <>
      <SEO 
        title="Engineering & Growth Blog | EncryVia Medium Insights"
        description="Read in-depth technical guides, cybersecurity research, GEO & SEO algorithms, web performance architectures, and growth playbooks by the EncryVia engineering team."
        keywords="EncryVia blog, Medium articles, cybersecurity blog, SEO vs GEO, Google Ads 2026, web architecture, clean code, DMARC security"
        ogUrl="https://encryvia.com/blog"
      />

      <div className="min-h-screen py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-white relative overflow-x-clip max-w-full">
        
        {/* Header Hero */}
        <div className="max-w-6xl mx-auto text-center pt-8 pb-12 sm:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2"
          >
            Insights, Architecture &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">
              Cyber Research
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Deep technical breakdowns, AI search methodologies, enterprise security protocols, and performance marketing playbooks published by our core engineering team.
          </motion.p>

          {/* Medium Profile Badge CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://medium.com/@encryvia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-medium text-sm transition-all duration-300 shadow-md hover:scale-105"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              <span>Follow @encryvia on Medium</span>
              <ExternalLink size={14} className="text-gray-400" />
            </a>
          </motion.div>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-7xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
            
            {/* Compact Search Input */}
            <div className="relative w-full md:w-56 lg:w-64 flex-shrink-0">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition shadow-inner"
              />
            </div>

            {/* Category Filter Pills (Wrap seamlessly without scroll) */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 flex-1 justify-start md:justify-end">
              {categoryFilters.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Blog Content Section */}
        <div className="max-w-7xl mx-auto mb-16">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/10 rounded-3xl p-8">
              <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No Articles Found</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
                We couldn't find any articles matching your search query "{searchQuery}".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 transition shadow-md"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <>
              {/* 1. Featured Top Article Card */}
              {featuredPost && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-10 rounded-3xl bg-gradient-to-br from-purple-950/40 via-indigo-950/30 to-black/80 border border-purple-500/30 overflow-hidden shadow-2xl backdrop-blur-xl group hover:border-purple-500/60 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    
                    {/* Featured Image */}
                    {featuredPost.thumbnail && (
                      <Link 
                        to={`/blog/${featuredPost.slug}`}
                        className="lg:col-span-6 relative overflow-hidden bg-black/80 min-h-[260px] sm:min-h-[340px] flex items-center justify-center group/img block"
                      >
                        {/* Ambient Blurred Backdrop so letterboxing merges seamlessly with the card */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img 
                            src={featuredPost.thumbnail} 
                            alt="" 
                            className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
                            aria-hidden="true"
                          />
                          <div className="absolute inset-0 bg-black/40" />
                        </div>

                        {/* Full Crisp Thumbnail (No Cutoff) */}
                        <img 
                          src={featuredPost.thumbnail} 
                          alt={featuredPost.title}
                          className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                          loading="eager"
                        />
                      </Link>
                    )}

                    {/* Featured Content */}
                    <div className={`p-6 sm:p-10 flex flex-col justify-between ${featuredPost.thumbnail ? 'lg:col-span-6' : 'lg:col-span-12'}`}>
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                          <span className="flex items-center gap-1 text-[rgb(168,85,247)] font-medium">
                            <Calendar size={13} />
                            {formatDate(featuredPost.pubDate)}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <Clock size={13} />
                            {featuredPost.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="block group-hover:text-[rgb(168,85,247)] transition-colors"
                        >
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 break-words">
                            {featuredPost.title}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                          {featuredPost.description}
                        </p>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.categories.slice(0, 4).map((cat, idx) => (
                            <span 
                              key={idx} 
                              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-indigo-300 uppercase tracking-wide"
                            >
                              #{cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Read Button & Details */}
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center space-x-2.5 text-xs text-gray-400">
                          <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                            E
                          </div>
                          <span>{featuredPost.author}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5">
                          <Link
                            to={`/blog/${featuredPost.slug}`}
                            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition shadow-lg hover:scale-105"
                          >
                            <span>Read Full Article</span>
                            <ArrowRight size={14} />
                          </Link>

                          <a
                            href={featuredPost.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 text-gray-200 hover:text-white transition text-xs font-semibold shadow-md group/med"
                            title="Read on Medium"
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                            </svg>
                            <span>Read on Medium</span>
                            <ExternalLink size={12} className="text-gray-400 group-hover/med:text-white transition-colors" />
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>
                </motion.div>
              )}

              {/* 2. Regular Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {regularPosts.map((post, idx) => (
                  <motion.div
                    key={post.slug || post.guid || idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/40 p-5 sm:p-6 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      {/* Thumbnail Cover */}
                      {post.thumbnail && (
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="mb-5 rounded-2xl overflow-hidden bg-black/60 h-48 w-full relative block"
                        >
                          <img 
                            src={post.thumbnail} 
                            alt={post.title}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </Link>
                      )}

                      {/* Meta info */}
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1 text-[rgb(168,85,247)] font-medium">
                          <Calendar size={12} />
                          {formatDate(post.pubDate)}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="block group-hover:text-[rgb(168,85,247)] transition-colors"
                      >
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.description}
                      </p>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {post.categories.slice(0, 3).map((cat, cIdx) => (
                          <span 
                            key={cIdx} 
                            className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-semibold text-gray-300 border border-white/5"
                          >
                            #{cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-1.5 text-[rgb(168,85,247)] hover:text-white font-bold text-xs group/btn py-1"
                      >
                        <span>Read Story</span>
                        <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>

                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 text-gray-300 hover:text-white transition text-[11px] font-medium group/medlink"
                        title="Read on Medium"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                        <span>Read on Medium</span>
                      </a>
                    </div>

                  </motion.div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* Load More from Medium Channel Banner */}
        <div className="max-w-4xl mx-auto text-center py-10 px-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/50 to-black/80 border border-purple-500/30 backdrop-blur-xl shadow-2xl mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Looking for More Deep-Dive Articles?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            We publish continuous engineering breakdowns, algorithm tear-downs, and whitepapers directly on our official Medium channel.
          </p>
          <a
            href="https://medium.com/@encryvia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-xl hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105"
          >
            <span>Explore All Publications on Medium</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </>
  );
};

export default Blog;
