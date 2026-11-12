import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Clock, ArrowRight } from 'lucide-react';

const pricingCategories = [
  { id: 'web', label: 'Web & App Development', icon: '💻' },
  { id: 'security', label: 'Cybersecurity', icon: '🛡️' },
  { id: 'seo', label: 'SEO, GEO & Ads', icon: '📈' },
];

const pricingData = {
  web: [
    {
      name: 'Startup Plan',
      tagline: 'Your first great impression online',
      price: '₹25,000 – ₹35,000',
      delivery: '7–10 day delivery',
      isPopular: false,
      features: [
        'A custom-built WordPress or Shopify site not a generic template',
        'Looks great and works smoothly on every screen size',
        'SEO groundwork laid in from day one, so you\'re not starting from zero',
        'Payments that just work secure gateway integration',
        'Store setup & brand registry, so you look established from launch',
        'Lead capture forms that actually bring you enquiries',
        'Basic on-site chat or WhatsApp integration to catch enquiries in real time'
      ]
    },
    {
      name: 'Growth Plan',
      tagline: 'Built to turn visitors into customers',
      price: 'Contact for More Info',
      delivery: '3–5 week delivery',
      isPopular: true,
      features: [
        'Advanced, thoughtfully designed UX built around how people actually browse',
        'A full e-commerce engine: cart, inventory, and support tools that scale with you',
        'Product listings optimized for search and multiple sales platforms',
        'Real analytics so you know what\'s working, not just guesses',
        'Dynamic pricing & promotions you can run without waiting on a developer',
        'Connected to the tools you already use CRM, email, payments',
        'Custom admin dashboard so your team can manage content without a developer'
      ]
    },
    {
      name: 'Enterprise Plan',
      tagline: 'A digital foundation for serious scale',
      price: 'Contact for More Info',
      delivery: '6–10+ week delivery',
      isPopular: false,
      features: [
        'Fully custom, enterprise-grade web & app architecture',
        'Dashboards that give leadership real visibility into performance',
        'End-to-end e-commerce operations orders, pricing, service, all handled',
        'Multi-platform listings managed with fast turnaround',
        'PPC and social integrations built right into the experience',
        'A dedicated technical account manager, not a support ticket queue',
        'Custom API development & third-party system integrations (ERP, CRM, logistics)'
      ]
    }
  ],
  security: [
    {
      name: 'Starter Audit',
      tagline: 'Spot vulnerabilities before attackers do',
      price: '₹25,000 – ₹40,000',
      delivery: '3–5 day turnaround',
      isPopular: false,
      features: [
        'WAPT (Web Application Penetration Testing) & OWASP Top 10 Audit',
        'Automated & manual vulnerability assessment',
        'SSL/TLS & API Endpoint security evaluation',
        'Detailed remediation PDF report with step-by-step developer fixes',
        'Re-testing scan post-patching to confirm resolution'
      ]
    },
    {
      name: 'Advanced Sentinel',
      tagline: 'Continuous security & cloud protection',
      price: 'Contact for More Info',
      delivery: 'Continuous Monitoring',
      isPopular: true,
      features: [
        'Full-stack Infrastructure & Cloud Penetration Testing (AWS/GCP/Vercel)',
        'Continuous 24/7 Threat & Vulnerability Monitoring',
        'Source Code Static & Dynamic Analysis (SAST / DAST)',
        'Real-time Slack & Email Incident Alert Triggers',
        'Compliance Auditing Support (ISO 27001, SOC2, GDPR Readiness)'
      ]
    },
    {
      name: 'Enterprise Defense',
      tagline: 'Total zero-trust military-grade security',
      price: 'Contact for More Info',
      delivery: 'Tailored Enterprise Contract',
      isPopular: false,
      features: [
        'Dedicated Red Team Penetration Testing & Social Engineering Audits',
        'Zero-Trust Architecture Implementation & Custom Secrets Vault',
        '24/7 Security Operations Center (SOC) Response & Emergency Handling',
        'Customized API & Gateway Firewall Custom Rules',
        'Direct Senior Security Engineer On-Call Access'
      ]
    }
  ],
  seo: [
    {
      name: 'Growth Booster',
      tagline: 'Fast search & paid lead engine',
      price: '₹25,000 – ₹45,000 / mo',
      delivery: '1-month minimum',
      isPopular: false,
      features: [
        'Core Technical & On-Page SEO Optimization',
        'Targeted Google Ads or Meta Lead Generation Campaign Setup',
        'Basic GEO (ChatGPT & Gemini AI Search Visibility groundwork)',
        'Monthly transparent ROI & Analytics reporting'
      ]
    },
    {
      name: 'Accelerator',
      tagline: 'Dominate Google AND AI Search Engines',
      price: 'Contact for More Info',
      delivery: 'Quarterly Growth Strategy',
      isPopular: true,
      features: [
        'Full-Spectrum SEO & Generative Engine Optimization (GEO) Dual Targeting',
        'Multi-channel Paid Ads Engine (Google Search, Display, Meta, LinkedIn)',
        'Content Creation & High-Authority Backlink Acquisition',
        'Conversion Rate Optimization (CRO) & A/B Testing',
        'Weekly Rank Tracking & Competitor Benchmarking'
      ]
    },
    {
      name: 'Dominance Retainer',
      tagline: 'Complete digital market ownership',
      price: 'Contact for More Info',
      delivery: 'Custom Growth Retainer',
      isPopular: false,
      features: [
        'Comprehensive Brand Reputation & Search Dominance Ecosystem',
        'Dedicated Performance Marketer & AI Content Strategist',
        'Advanced Multi-Touch Attribution & Custom Analytics Dashboard',
        'International & Multi-lingual SEO & Ads Scaling',
        'Priority Strategic Growth Workshops with Senior Partners'
      ]
    }
  ]
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Pick the plan that matches your stage
        </h2>
        <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Every plan is built around the same integrated ecosystem the difference is depth, coverage, and speed.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md gap-1.5 max-w-full">
          {pricingCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {pricingData[activeTab].map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-purple-950/20 border-2 border-purple-500 shadow-2xl shadow-purple-950/40'
                  : 'bg-white/[0.04] border border-white/20 hover:border-purple-400/60 shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-[10px] sm:text-xs font-extrabold rounded-full uppercase tracking-wider shadow-md">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.tagline}</p>

                {/* Price Box with Delivery Timeline */}
                <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className={`font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ${
                    plan.price === 'Contact for More Info' ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                  }`}>
                    {plan.price}
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-indigo-300 font-semibold mt-2">
                    <Clock size={14} />
                    <span>{plan.delivery}</span>
                  </div>
                </div>

                {/* Complete Feature Checklist */}
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features?.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start space-x-3 text-sm text-gray-200">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-auto pt-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-indigo-500/30'
                        : 'bg-white/10 hover:bg-indigo-600 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.price === 'Contact for More Info' ? 'Contact for More Info' : 'Get Started'}</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default React.memo(PricingSection);
