import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, ChevronDown, HelpCircle, Shield, Code, TrendingUp, Sparkles, 
  Rocket, ArrowRight, CheckCircle2, Phone, Copy, Check
} from 'lucide-react';
import SEO from '../components/SEO';
import faqsData from '../data/enhancedFaqs.json';

const faqCategories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'geo-seo', label: 'GEO & SEO (AI Search)', icon: TrendingUp },
  { id: 'cyber', label: 'Cybersecurity & WAPT', icon: Shield },
  { id: 'ppc', label: 'PPC & Growth Ads', icon: Rocket },
  { id: 'webdev', label: 'Web & App Architecture', icon: Code },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openId, setOpenId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const location = useLocation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const kebab = (s) => {
    return 'q-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleCopyLink = (id) => {
    const origin = window.location.origin;
    const url = `${origin}/faq#${id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedId(id);
        window.history.replaceState(null, '', `/faq#${id}`);
        setTimeout(() => setCopiedId(null), 2000);
      }).catch(() => {
        fallbackCopy(url, id);
      });
    } else {
      fallbackCopy(url, id);
    }
  };

  const fallbackCopy = (url, id) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      window.history.replaceState(null, '', `/faq#${id}`);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  // Flatten all FAQs with IDs
  const allFaqs = useMemo(() => {
    const list = [];
    faqsData.forEach(cat => {
      cat.faqs.forEach((faq, idx) => {
        const id = kebab(faq.question);
        list.push({
          ...faq,
          id,
          categoryId: cat.id,
          categoryTitle: cat.title,
          index: idx + 1
        });
      });
    });
    return list;
  }, []);

  // Filter FAQs by search & category
  const filteredFaqs = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return allFaqs.filter(faq => {
      const matchesCat = activeCategory === 'all' || faq.categoryId === activeCategory;
      if (!matchesCat) return false;
      if (!q) return true;

      const qMatch = faq.question.toLowerCase().includes(q);
      const rawMatch = (faq.rawAnswerHtml || '').toLowerCase().includes(q);
      return qMatch || rawMatch;
    });
  }, [allFaqs, searchTerm, activeCategory]);

  const toggleAccordion = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  // Handle URL hash deep-linking (e.g. /faq#q-what-is-...)
  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.replace('#', ''));
      const targetFaq = allFaqs.find(f => f.id === targetId);
      if (targetFaq) {
        if (activeCategory !== 'all' && activeCategory !== targetFaq.categoryId) {
          setActiveCategory('all');
        }
        if (searchTerm) {
          setSearchTerm('');
        }
      }
      setOpenId(targetId);
      const timer = setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location.hash, allFaqs]);

  // Dynamic JSON-LD Schema
  const faqJsonLd = useMemo(() => {
    const questions = allFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: (faq.rawAnswerHtml || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      }
    }));

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questions,
      about: {
        '@type': 'Organization',
        name: 'EncryVia Digital Solutions',
        url: 'https://www.encryvia.com'
      }
    };
  }, [allFaqs]);

  return (
    <>
      <SEO 
        title="Web • Security • SEO & AI FAQ | EncryVia Digital Solutions"
        description="Authoritative, AI-ready FAQs covering Generative Engine Optimization (GEO), technical SEO, cybersecurity auditing, PPC campaigns, and modern web development."
        keywords="EncryVia FAQ, GEO optimization, generative engine optimization FAQ, cybersecurity FAQ, web development India, SEO pricing India, AI search marketing, zero-click optimization"
        ogUrl="https://encryvia.com/faq"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen py-8 lg:py-12 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden font-sans">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-600/15 blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-10">
          
          {/* ========================================================================= */}
          {/* 1. HERO HEADER                                                            */}
          {/* ========================================================================= */}
          <div className="text-center pt-4 pb-4 space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Web • Security • <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">SEO & AI FAQ</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Everything you need to know about Generative Engine Optimization (GEO), zero-trust cybersecurity auditing, PPC ad management, and full-stack web engineering.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 max-w-xl mx-auto relative"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[rgb(168,85,247)]" />
                <input
                  type="search"
                  placeholder="Search questions, GEO, entity schema, cybersecurity, stack..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setOpenId(null);
                  }}
                  className="w-full pl-12 pr-24 py-4 rounded-2xl bg-black/60 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition shadow-xl backdrop-blur-xl text-sm sm:text-base"
                />
                {searchTerm && (
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setOpenId(null);
                    }}
                    className="absolute right-4 text-xs font-semibold text-gray-300 hover:text-white px-2.5 py-1 bg-white/10 rounded-lg transition"
                  >
                    Clear
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* 2. CATEGORY SELECTOR TABS & CONTROLS                                       */}
          {/* ========================================================================= */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {faqCategories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                const count = cat.id === 'all' 
                  ? allFaqs.length 
                  : (faqsData.find(c => c.id === cat.id)?.faqs.length || 0);

                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenId(null);
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/40'
                        : 'bg-black/40 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon size={15} />
                    <span>{cat.label}</span>
                    <span className="text-[11px] opacity-70">({count})</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Expand / Collapse and Count bar */}
            <div className="flex items-center justify-between text-xs text-gray-400 px-2 max-w-4xl mx-auto">
              <span>Showing <strong className="text-[rgb(168,85,247)] font-semibold">{filteredFaqs.length}</strong> questions</span>
              {openId && (
                <button 
                  onClick={() => setOpenId(null)} 
                  className="hover:text-[rgb(168,85,247)] transition underline text-[rgb(168,85,247)]"
                >
                  Collapse
                </button>
              )}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 3. ACCORDIONS LIST                                                        */}
          {/* ========================================================================= */}
          <div className="max-w-4xl mx-auto min-h-[400px]" ref={ref}>
            {filteredFaqs.length > 0 ? (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4"
              >
                {filteredFaqs.map((faq) => {
                  const id = faq.id;
                  const isOpen = openId === id;

                  return (
                    <motion.div
                      key={id}
                      id={id}
                      variants={itemVariants}
                      className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-purple-950/40 border-purple-500/50 shadow-2xl shadow-purple-950/60 ring-1 ring-purple-500/30'
                          : 'bg-black/50 border-white/10 hover:border-purple-500/30 hover:bg-black/60'
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[rgb(168,85,247)] transition-colors duration-200 pr-4 flex items-center gap-3">
                          <span className="text-[rgb(168,85,247)] text-xs font-mono opacity-60">#{faq.index}</span>
                          <span>{faq.question}</span>
                        </span>
                        <div
                          className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[rgb(168,85,247)] border border-white/10 group-hover:border-purple-400/40 flex-shrink-0 transition-transform duration-300 ease-out ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <div 
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 pt-1 text-gray-300 border-t border-white/5 space-y-4">
                            {/* Paragraphs */}
                            {faq.paragraphs && faq.paragraphs.length > 0 && faq.paragraphs.map((p, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-sm sm:text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: p }}
                              />
                            ))}

                            {/* Bullets */}
                            {faq.bullets && faq.bullets.length > 0 && (
                              <ul className="space-y-2.5 pt-1">
                                {faq.bullets.map((b, bIdx) => (
                                  <li 
                                    key={bIdx}
                                    className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-gray-200"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                                    <span dangerouslySetInnerHTML={{ __html: b }} />
                                  </li>
                                ))}
                              </ul>
                            )}

                            {/* Hint / Validation Note */}
                            {faq.hint && (
                              <div className="p-3.5 rounded-xl bg-emerald-950/40 border-l-4 border-emerald-400 text-emerald-200 text-xs sm:text-sm font-medium mt-3 flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span dangerouslySetInnerHTML={{ __html: faq.hint }} />
                              </div>
                            )}

                            {/* Category footer & Copy Link */}
                            <div className="pt-3 flex items-center justify-between border-t border-white/10 text-xs">
                              <span className="text-gray-400 font-mono text-[11px]">
                                Category: {faq.categoryTitle}
                              </span>

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopyLink(faq.id);
                                }}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-300 border border-white/10 hover:border-purple-400/30 transition text-xs font-medium group/btn"
                                title="Copy direct link to this question"
                              >
                                {copiedId === faq.id ? (
                                  <>
                                    <Check size={13} className="text-emerald-400" />
                                    <span className="text-emerald-400 font-semibold">Link Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy size={13} className="group-hover/btn:text-purple-300 transition" />
                                    <span>Copy Link</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="text-center py-16 p-8 rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-xl">
                <HelpCircle className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">No matching questions found</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Try searching for keywords like "GEO", "OWASP", "PPC", "Zero Trust", or "Lighthouse".
                </p>
                <button
                  onClick={() => { setSearchTerm(''); setActiveCategory('all'); setOpenId(null); }}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* 4. CALL TO ACTION BOTTOM BANNER                                           */}
          {/* ========================================================================= */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-purple-950/60 via-indigo-950/80 to-slate-950/90 border border-purple-500/30 p-8 sm:p-10 backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 text-[rgb(168,85,247)] text-xs font-bold border border-purple-500/30">
                <Sparkles size={14} className="text-purple-400" />
                <span>Ready to execute?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Have a unique technical requirement?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl">
                Talk directly with our core engineering team for custom web architecture, penetration audits, or AI marketing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl transition flex items-center justify-center gap-2">
                  <span>Schedule Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <a href="tel:+916390215426" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition flex items-center justify-center gap-2">
                  <Phone size={16} />
                  <span>Call Direct</span>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default FAQ;
