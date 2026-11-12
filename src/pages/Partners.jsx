import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Handshake, Award, Shield, ShieldCheck, Cloud, Server, Code, Zap, ExternalLink, CheckCircle2, Building, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const partnerCategories = [
  {
    category: "Cloud & Infrastructure Partners",
    description: "Enterprise cloud platforms powering high availability, low-latency CDN, and bulletproof deployments.",
    partners: [
      { name: "Amazon Web Services (AWS)", tier: "Cloud Infrastructure Partner", icon: Cloud, highlight: "99.99% Uptime SLA & Auto-scaling Cloud Networks" },
      { name: "Google Cloud Platform", tier: "AI & Big Data Partner", icon: Server, highlight: "Generative AI API Integrations & Global Hosting" },
      { name: "Vercel & Edge CDN", tier: "Frontend Delivery Partner", icon: Zap, highlight: "Instant Sub-second Jamstack Edge Deployment" },
      { name: "Cloudflare", tier: "Edge Security & DDoS Partner", icon: Shield, highlight: "Global WAF Protection & Zero-Trust Access" }
    ]
  },
  {
    category: "Cybersecurity & Compliance Partners",
    description: "Global security standards, threat intelligence feeds, and compliance certifiers.",
    partners: [
      { 
        name: "SKS Infosystems", 
        tier: "Cybersecurity & IT Partner", 
        logo: "/image/sks-logo.webp", 
        icon: ShieldCheck, 
        highlight: "Infrastructure Hardening, Penetration Testing & Vulnerability Audits" 
      },
      { name: "OWASP Foundation", tier: "Security Framework Contributor", icon: Shield, highlight: "Adherence to OWASP Web & API Top 10 Standards" },
      { name: "Qualys & Nessus Tools", tier: "Vulnerability Scanning Partner", icon: Award, highlight: "Automated Compliance Auditing & Penetration Tests" },
      { name: "Let's Encrypt / Digicert", tier: "SSL Certificate Partner", icon: Code, highlight: "256-Bit SSL/TLS Automated Certificate Infrastructure" }
    ]
  },
  {
    category: "Growth & Technology Alliances",
    description: "Strategic marketing platforms, analytics ecosystems, and agency networks.",
    partners: [
      { name: "Google Partner Ecosystem", tier: "Certified Search & Ads Partner", icon: ExternalLink, highlight: "High-ROAS Search, Shopping & Display Campaigns" },
      { name: "Meta Business Network", tier: "Social Growth Partner", icon: Building, highlight: "Precision Lead Generation & Audience Retargeting" },
      { name: "Semrush & Ahrefs", tier: "SEO Analytics Ecosystem", icon: Zap, highlight: "Deep Keyword Intelligence & Competitor Audit" }
    ]
  }
];

const partnershipBenefits = [
  {
    title: "Co-Built Digital Solutions",
    desc: "Combine your core offerings with EncryVia's web engineering and security auditing to deliver end-to-end client value."
  },
  {
    title: "Dedicated Technical Support",
    desc: "Direct access to our senior developers and cybersecurity engineers for joint client projects."
  },
  {
    title: "Revenue Sharing & Referrals",
    desc: "Earn attractive commission structures on client referrals for web development and security penetration testing."
  },
  {
    title: "Co-Marketing Opportunities",
    desc: "Joint webinars, case studies, and brand cross-promotion across our combined digital channels."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};

const Partners = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <SEO 
        title="Our Strategic Partners | EncryVia Technology & Security Network"
        description="Discover EncryVia's global technology, cloud, cybersecurity, and digital marketing partners driving high performance for our clients."
        keywords="EncryVia partners, AWS partner, Google Cloud partner, Cloudflare security alliance, digital agency partnerships India"
        ogUrl="https://encryvia.com/partners"
      />

      <div className="min-h-screen py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-white relative">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center pt-8 pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Partners</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We collaborate with industry leaders in cloud computing, cybersecurity standards, and performance marketing to deliver resilient, high-speed digital solutions.
          </motion.p>
        </div>

        {/* Partner Categories */}
        <div className="max-w-7xl mx-auto space-y-16 mb-20" ref={ref}>
          {partnerCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {cat.category}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">
                  {cat.description}
                </p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {cat.partners.map((partner, pIdx) => {
                  const Icon = partner.icon;
                  return (
                    <motion.div
                      key={pIdx}
                      variants={itemVariants}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-indigo-500/50 backdrop-blur-xl flex flex-col justify-between shadow-xl transition-all duration-300"
                    >
                      <div>
                        {partner.logo ? (
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1.5 border border-white/20 mb-4 overflow-hidden shadow-md">
                            <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                            {Icon && <Icon size={24} />}
                          </div>
                        )}
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
                          {partner.tier}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                          {partner.highlight}
                        </p>
                      </div>

                      <div className="flex items-center text-xs font-semibold text-emerald-400 pt-3 border-t border-white/5">
                        <CheckCircle2 size={14} className="mr-1" />
                        <span>Verified Integration</span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Why Partner With Us */}
        <div className="max-w-6xl mx-auto py-12 px-6 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-black/60 to-purple-950/40 border border-indigo-500/30 backdrop-blur-xl mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
              Why Join the EncryVia <span className="text-indigo-400">Partner Alliance</span>?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              We empower technology agencies, SaaS providers, and cloud consultants to scale faster together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipBenefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/15 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{b.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Become a partner CTA */}
          <div className="mt-12 text-center pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Partnering With EncryVia?</h3>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all inline-flex items-center space-x-2"
              >
                <span>Apply for Partnership</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
