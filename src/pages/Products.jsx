import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Sparkles, ArrowRight, CheckCircle2, X
} from 'lucide-react';
import SEO from '../components/SEO';

const productsData = [
  {
    id: 'mailcryvia-suite',
    name: 'MailCryVia Professional Suite',
    badge: 'Email Marketing & Outreach Platform',
    tagline: 'Enterprise Email Marketing, Deliverability & High-Volume Automation Engine',
    description: 'An end-to-end professional email marketing platform engineered for precision campaign creation, dynamic contact list segmentation, automated drip sequences, high-deliverability SMTP relay infrastructure (99.9% Uptime SLA, 24ms Response), and real-time open & click-through analytics.',
    image: '/mailcryvia_dashboard.webp',
    features: [
      'Precision Campaign Builder & Template Management',
      'Smart Contact List Segmentation & Dynamic {{first_name}} Personalization',
      'Real-Time Open Rate (OR) & Click-Through Rate (CTR) Tracking',
      'High-Deliverability SMTP Infrastructure with 99.9% Uptime SLA (24ms latency)',
      'Automated Drip Workflows & Engagement Analytics Engine'
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'SMTP Relay Engine', 'Analytics Pipeline'],
    status: 'Live & Enterprise Ready',
    gradient: 'from-purple-900/40 via-indigo-900/50 to-black/85',
    borderColor: 'border-purple-500/50'
  },
  {
    id: 'adcryvia-intelligence',
    name: 'AdcryVia – Ads Intelligence Platform',
    badge: 'Ads Intelligence & Analytics',
    tagline: 'A Privacy-First Ads Analytics Platform Built for Google & Meta Ads Exports',
    description: 'A privacy-first ads analytics platform built to turn raw Google Ads and Meta Ads exports into clear, decision-ready insight. Upload an Excel workbook or CSV, choose the right sheet and header row, and AdcryVia re-analyzes the report without changing a single source value. Covers executive overview, campaign, audience and creative analysis, a built-in profit calculator (ROAS, ROI, CAC and break-even), automatic currency detection and conversion, and print-ready reports, all processed locally in the browser so client data never leaves the device.',
    image: '/adcryvia_dashboard.webp',
    features: [
      'Google Ads & Meta Ads Report Analysis: Upload .xlsx or CSV exports, select the sheet and header row, and analyze hierarchical reports without altering source values.',
      'Campaign, Audience & Creative Analysis: Dedicated views for performance by campaign, audience segment and ad creative, with an Executive Overview for a fast top-line read.',
      'Profit Studio & Action Plan: Calculate ROAS, ROI, CAC and break-even, then turn the findings into a prioritised action plan.',
      'Accuracy Guardrails: Parent and child rows remain visible, campaign totals are chosen separately from other analysis levels, and reported metrics are kept apart from calculated ones, preventing misleading summaries.',
      'Local-Only Processing: Reports are analyzed in the browser, with up to two saved locally and no source workbook uploaded to AdcryVia.',
      'Multi-Currency & Multi-Language Support: Detects the report\'s source currency and converts to the display currency (INR by default), with a language selector for reporting.',
      'Reports & Exports: Explore all underlying data and export or print client-ready reports.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'ReactJs'],
    status: 'Live & Enterprise Ready',
    gradient: 'from-indigo-900/40 via-purple-900/50 to-black/85',
    borderColor: 'border-purple-500/50'
  },
  {
    id: 'fincryvia-finance',
    name: 'FincryVia – Personal & Business Finance Platform',
    badge: 'Finance & Billing',
    tagline: 'Personal & Business Finance Management, GST Tools & Tax-Ready Billing Platform',
    description: 'A finance management platform that brings income, expenses, bills and tax-ready billing into one dashboard. Track every transaction, keep an eye on upcoming bills, and see where money is going through analytics that cover savings rate, average monthly income and expenses, net change, cash flow over time and your biggest expenses. Built-in GST tools and an Invoice Studio handle Indian tax and billing needs, while a currency converter, import and export, and light and dark modes make it practical for everyday use.',
    image: '/fincryvia_dashboard.webp',
    features: [
      'Advanced Financial Analytics: Savings rate, average monthly income and expense, transaction count and net change, viewable by period (for example the last 6 months).',
      'Income vs Expense Visualisation: Monthly income-versus-expense charts, an income-expense split and a cash flow timeline that make spending patterns easy to read at a glance.',
      'Transaction & Bill Management: Record and categorise transactions, track bills, and see your top five biggest expenses.',
      'GST Tools & Invoice Studio: Built-in GST calculation tools and an invoice builder for tax and billing workflows.',
      'Multi-Currency Converter: Switch the display currency (INR by default) and convert between currencies.',
      'Import / Export: Bring in existing financial data and export it for reporting or record-keeping.',
      'Light & Dark Appearance: A clean interface that switches between light and dark themes.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    status: 'Live & Enterprise Ready',
    gradient: 'from-purple-950/40 via-violet-900/50 to-black/85',
    borderColor: 'border-purple-500/50'
  }
];

const innovationsRoadmap = [
  {
    phase: 'Q3 2026',
    title: 'Autonomous AI Pentesting Suite',
    desc: 'Self-learning AI agent that simulates ethical hacker payloads to test cloud web applications in sandbox environments.'
  },
  {
    phase: 'Q4 2026',
    title: 'Unified EncryVia Cloud Hub',
    desc: 'One single dashboard managing site analytics, security health, lead conversion pipelines, and server health.'
  },
  {
    phase: 'Q1 2027',
    title: 'EncryVia Edge Defender',
    desc: 'Distributed DDoS mitigation and Web Application Firewall (WAF) rule engine built directly into our hosting infrastructure.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Products = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <SEO 
        title="Our Innovations & Products | MailCryVia, AdcryVia & FincryVia by EncryVia"
        description="Explore EncryVia's proprietary innovations: MailCryVia email marketing engine, AdcryVia privacy-first ads analytics, and FincryVia personal & business finance platform."
        keywords="MailCryVia, AdcryVia, FincryVia, finance platform, ads intelligence platform, privacy-first ads analytics, email marketing automation, EncryVia innovations"
        ogUrl="https://encryvia.com/innovations"
      />

      <div className="min-h-screen py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-white relative overflow-x-clip max-w-full">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center pt-8 pb-12 sm:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2"
          >
            Our Innovations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Products</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            We don't just use modern technology; we engineer proprietary tools, email automation suites, and privacy-first ads intelligence platforms to give your business an unfair advantage.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="max-w-6xl mx-auto mb-20" ref={ref}>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-10 sm:gap-14"
          >
            {productsData.map((prod) => (
              <motion.div
                key={prod.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`rounded-3xl bg-gradient-to-br ${prod.gradient} border ${prod.borderColor} p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300`}
              >
                <div>
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 break-words">
                    {prod.name}
                  </h3>
                  <p className="text-indigo-300 text-sm sm:text-base font-semibold mb-6 leading-normal">
                    {prod.tagline}
                  </p>

                  {/* Dashboard Image Preview */}
                  {prod.image && (
                    <div 
                      className="mb-8 rounded-2xl overflow-hidden border border-purple-500/40 bg-black/80 shadow-2xl group/img relative cursor-pointer"
                      onClick={() => setSelectedProduct(prod)}
                    >
                      <img 
                        src={prod.image} 
                        alt={`${prod.name} Dashboard UI`}
                        className="w-full h-auto max-h-[440px] sm:max-h-[520px] object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.02]"
                      />
                    </div>
                  )}

                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mb-8">
                    <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[rgb(168,85,247)] mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      Key Capabilities & Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {prod.features.map((feat, idx) => {
                        const parts = feat.split(': ');
                        return (
                          <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-200 bg-white/[0.02] p-3 sm:p-4 rounded-xl border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-[rgb(168,85,247)] flex-shrink-0 mt-0.5" />
                            <div>
                              {parts.length > 1 ? (
                                <>
                                  <span className="font-bold text-white">{parts[0]}: </span>
                                  <span className="text-gray-300 font-normal">{parts.slice(1).join(': ')}</span>
                                </>
                              ) : (
                                <span className="font-medium text-gray-200">{feat}</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group py-1"
                    >
                      <span>Request Demo / Access</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </button>
                    <Link to="/contact" className="w-full sm:w-auto">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl text-sm font-bold hover:from-purple-500 hover:to-indigo-500 transition shadow-lg shadow-purple-600/30 text-center"
                      >
                        Inquire Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Innovation R&D Roadmap */}
        <div className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-xl mb-16 overflow-hidden">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              R&D Innovation <span className="text-indigo-400">Roadmap</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
              Upcoming technological breakthroughs currently in active development at EncryVia Labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {innovationsRoadmap.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 hover:border-indigo-500/40 transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-indigo-400 uppercase tracking-widest block mb-2">
                    {item.phase}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-4xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 bg-gray-950 border border-purple-500/40 rounded-3xl text-white shadow-2xl relative my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-end mb-4">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1.5 break-words">{selectedProduct.name}</h3>
                <p className="text-[rgb(168,85,247)] text-xs sm:text-sm font-semibold mb-4">{selectedProduct.tagline}</p>

                {selectedProduct.image && (
                  <div className="mb-6 rounded-2xl overflow-hidden border border-purple-500/40 bg-black shadow-2xl">
                    <img 
                      src={selectedProduct.image} 
                      alt={`${selectedProduct.name} Dashboard`}
                      className="w-full h-auto object-contain max-h-[500px]"
                    />
                  </div>
                )}

                <p className="text-gray-300 text-xs sm:text-base leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>

                <div className="space-y-4 mb-6">
                  <h4 className="text-xs font-bold text-[rgb(168,85,247)] uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    Key Capabilities & Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProduct.features.map((feat, idx) => {
                      const parts = feat.split(': ');
                      return (
                        <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-200 bg-white/[0.03] p-2.5 rounded-lg border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-[rgb(168,85,247)] flex-shrink-0 mt-0.5" />
                          <div>
                            {parts.length > 1 ? (
                              <>
                                <span className="font-bold text-white">{parts[0]}: </span>
                                <span className="text-gray-300 font-normal">{parts.slice(1).join(': ')}</span>
                              </>
                            ) : (
                              <span>{feat}</span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <Link 
                    to="/contact" 
                    onClick={() => setSelectedProduct(null)}
                    className="block w-full py-3 sm:py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white font-bold rounded-xl hover:from-purple-500 hover:to-indigo-500 transition shadow-lg text-xs sm:text-base"
                  >
                    Request Early Access & Enterprise Trial
                  </Link>
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="w-full py-2 sm:py-2.5 bg-white/10 text-gray-300 font-semibold rounded-xl hover:bg-white/20 transition text-xs sm:text-sm"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;
