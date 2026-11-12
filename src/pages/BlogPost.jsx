import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Calendar, Clock, User, Share2, Check, ExternalLink, 
  Sparkles, BookOpen, ChevronRight, MessageSquare, ArrowRight, ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import fallbackPosts from '../data/mediumPosts.json';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState(fallbackPosts || []);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch live feed if needed, and find current post by slug or partial match
  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      let currentPosts = fallbackPosts;

      try {
        const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@encryvia');
        if (res.ok) {
          const data = await res.json();
          if (data && data.status === 'ok' && Array.isArray(data.items)) {
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
            currentPosts = livePosts;
          }
        }
      } catch (e) {
        // use cached fallback
      }

      if (!isMounted) return;
      setAllPosts(currentPosts);

      // Find matched post by exact slug or partial match
      const targetSlug = (slug || '').toLowerCase();
      const matched = currentPosts.find(p => 
        (p.slug && p.slug.toLowerCase() === targetSlug) ||
        (p.link && p.link.toLowerCase().includes(targetSlug)) ||
        ((p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(targetSlug))
      );

      setPost(matched || currentPosts[0]);
      setIsLoading(false);
    };

    loadPost();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr.replace(' ', 'T'));
      return isNaN(d.getTime()) ? dateStr.split(' ')[0] : d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateStr.split(' ')[0];
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-white px-4">
        <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-400 text-sm font-medium">Loading Article...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-white px-4 text-center">
        <BookOpen size={48} className="text-gray-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
        <p className="text-gray-400 text-sm max-w-md mb-6">The article you are looking for might have been updated or moved.</p>
        <Link to="/blog" className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Related posts (excluding current)
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.title !== post.title)
    .slice(0, 3);

  return (
    <>
      <SEO 
        title={`${post.title} | EncryVia Insights`}
        description={post.description || "Read technical architecture, cybersecurity, and digital growth insights by EncryVia."}
        keywords={post.categories ? post.categories.join(', ') : 'EncryVia blog, web development, cybersecurity'}
        ogUrl={`https://encryvia.com/blog/${post.slug}`}
      />

      <div className="min-h-screen py-4 lg:py-8 px-4 sm:px-6 lg:px-8 text-white relative overflow-x-clip max-w-full">
        
        {/* Background ambient lighting */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          
          {/* Breadcrumb & Navigation Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-4">
            <Link 
              to="/blog"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[rgb(168,85,247)] hover:text-white transition px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 shadow-sm"
            >
              <ArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>

            <div className="flex items-center space-x-2.5">
              <button
                onClick={handleShare}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-gray-300 hover:text-white transition text-xs font-semibold shadow-sm"
                title="Copy Article Link"
              >
                {copiedLink ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition text-xs font-bold shadow-lg hover:scale-105"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                <span>Read on Medium</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Main Article Container */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/[0.03] border border-white/15 p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Ambient glass glow */}
            <div className="pointer-events-none absolute inset-px rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-transparent"></div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {post.categories.map((cat, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30 uppercase tracking-wider backdrop-blur-md"
                >
                  #{cat}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight relative z-10 break-words">
              {post.title}
            </h1>

            {/* Author and Date Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-8 border-y border-white/10 text-xs sm:text-sm text-gray-300 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 border border-white/20 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                  E
                </div>
                <div>
                  <h4 className="font-bold text-white leading-tight">{post.author}</h4>
                  <p className="text-xs text-[rgb(168,85,247)] font-medium">EncryVia Research & Engineering</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-[rgb(168,85,247)]">
                  <Calendar size={14} className="text-[rgb(168,85,247)]" />
                  {formatDate(post.pubDate)}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Clock size={14} className="text-indigo-400" />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Hero Cover Image */}
            {post.thumbnail && (
              <div className="mb-10 rounded-2xl overflow-hidden border border-purple-500/30 bg-black/60 shadow-2xl relative z-10">
                <img 
                  src={post.thumbnail} 
                  alt={post.title}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}

            {/* Full Rich Text Article Body */}
            <div 
              className="blog-article-content relative z-10"
              dangerouslySetInnerHTML={{ 
                __html: (() => {
                  let html = post.fullContent || post.description || '';
                  // Remove first figure/img if it's identical to thumbnail
                  if (post.thumbnail) {
                    html = html.replace(/<figure[^>]*>\s*<img[^>]+src=["'][^"']+["'][^>]*>\s*(<figcaption>.*?<\/figcaption>)?\s*<\/figure>/i, '');
                  }
                  return html;
                })()
              }}
            />

            {/* Article Footer Consultation CTA */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/60 via-indigo-950/70 to-black/90 border border-purple-500/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative z-10">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[rgb(168,85,247)] uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-[rgb(168,85,247)]" />
                  <span>EncryVia Enterprise Advisory</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">Looking to implement these solutions for your infrastructure?</h4>
                <p className="text-xs sm:text-sm text-gray-300">Book a strategic consultation with our cybersecurity & development leads.</p>
              </div>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
            </div>

          </motion.article>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 mb-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen size={20} className="text-[rgb(168,85,247)]" />
                  <span>More Technical Stories</span>
                </h3>

                <Link to="/blog" className="text-xs sm:text-sm font-semibold text-[rgb(168,85,247)] hover:text-white flex items-center gap-1">
                  <span>View All</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel, idx) => (
                  <Link
                    key={rel.slug || idx}
                    to={`/blog/${rel.slug}`}
                    className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-purple-500/40 p-4 sm:p-5 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div>
                      {rel.thumbnail && (
                        <div className="mb-4 rounded-xl overflow-hidden bg-black/60 h-36 w-full relative">
                          <img 
                            src={rel.thumbnail} 
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="text-[11px] text-[rgb(168,85,247)] font-medium mb-2">
                        {formatDate(rel.pubDate)} · {rel.readTime}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[rgb(168,85,247)] transition line-clamp-2 leading-snug mb-3">
                        {rel.title}
                      </h4>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-indigo-400 font-semibold group-hover:text-[rgb(168,85,247)]">
                      <span>Read Story</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default BlogPost;
