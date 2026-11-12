// src/pages/Services.jsx
import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import SEO from '../components/SEO';

const ConnectNow = lazy(() => import('../components/Home/ConnectNow'));

const servicesData = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web & App Development',
    badge: 'Engineering & Architecture',
    tagline: 'Scalable Platforms That Look Exceptional & Perform Flawlessly',
    description:
      'We engineer fast, responsive, and secure digital products. From high-converting SaaS dashboards and tailored eCommerce engines to seamless mobile apps, every line of code is crafted for performance, rock-solid security, and business growth.',
    features: [
      'Custom Full-Stack Web Applications & SaaS Dashboards',
      'Native & Cross-Platform Mobile Apps (iOS & Android)',
      'Ultra-Fast Jamstack, Next.js / React Architecture',
      'Robust REST & GraphQL APIs with High Availability',
      'Modern UI/UX Design Systems & Core Web Vitals Optimization',
    ],
    imageUrl: '/image/Web_dev/WEB_Development.webp',
    imageAlt: 'Web & App Development at EncryVia',
    link: '/services/web-and-app-development',
    ctaText: 'Explore Web & App Development',
    accentColor: 'from-blue-500 via-indigo-500 to-purple-500',
    cardBorder: 'border-blue-500/30 hover:border-blue-400/60',
    icon: Code2,
  },
  {
    id: 'cybersecurity',
    number: '02',
    title: 'Cybersecurity & Auditing',
    badge: 'Offensive Security & VAPT',
    tagline: 'Proactive Enterprise Defense Built In — Not Bolted On',
    description:
      'Protect your digital assets, sensitive data, and brand trust with offensive penetration testing (VAPT), continuous vulnerability assessments, and OWASP Top 10 audits before attackers can strike.',
    features: [
      'Vulnerability Assessment & Penetration Testing (VAPT)',
      'OWASP Top 10 Web Application & API Security Audits',
      'Cloud Infrastructure & Server Security Hardening',
      'Source Code Review & Zero-Day Threat Mitigation',
      'Executive Compliance & Detailed Technical Remediation Reports',
    ],
    imageUrl: '/image/CyberSecurity/Security.webp',
    imageAlt: 'Cybersecurity and WAPT Audits at EncryVia',
    link: '/services/cybersecurity',
    ctaText: 'Explore Cybersecurity',
    accentColor: 'from-purple-500 via-fuchsia-500 to-indigo-500',
    cardBorder: 'border-purple-500/30 hover:border-purple-400/60',
    icon: ShieldCheck,
  },
  {
    id: 'seo-geo-ads',
    number: '03',
    title: 'SEO, GEO & AI-Powered Ads',
    badge: 'Next-Gen Search & AI Discovery',
    tagline: 'Discovered by Both Google and Modern AI Engines (ChatGPT & Perplexity)',
    description:
      'Search has changed forever. We combine technical SEO, high-ROI paid ads, and pioneering Generative Engine Optimization (GEO) so your business dominates conventional search results while being cited as the top recommendation in AI answers.',
    features: [
      'Generative Engine Optimization (GEO) for ChatGPT & Perplexity',
      'Technical, On-Page & Semantic Entity SEO',
      'Data-Driven Google Ads & Multi-Channel PPC Campaigns',
      'High-Converting Landing Page & Funnel Optimization',
      'AI-Era Brand Authority & Zero-Click Search Dominance',
    ],
    imageUrl: '/image/SEO_page/SEO_GEO.webp',
    imageAlt: 'SEO, GEO and AI-Powered Ads at EncryVia',
    link: '/services/seo-geo-and-ads',
    ctaText: 'Explore SEO, GEO & Ads',
    accentColor: 'from-pink-500 via-purple-500 to-indigo-500',
    cardBorder: 'border-pink-500/30 hover:border-pink-400/60',
    icon: TrendingUp,
  },
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services | Web Development, Cybersecurity & AI SEO - EncryVia"
        description="Explore EncryVia's core services: Web & App Development, Offensive Cybersecurity Audits (VAPT), and AI-driven SEO, GEO & Paid Ads."
        keywords="EncryVia services, web development, cybersecurity, penetration testing, SEO and GEO, AI marketing, digital solutions India"
        ogUrl="https://encryvia.com/services"
      />

      <div className="min-h-screen relative pt-10 sm:pt-14 pb-20 text-white font-sans overflow-x-hidden w-full max-w-full bg-transparent">
        {/* Ambient Purple / Indigo Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[45%] -left-32 w-[400px] h-[400px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-40 -right-32 w-[400px] h-[400px] bg-purple-700/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        {/* Page Hero Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight md:whitespace-nowrap px-2"
          >
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Services</span> Built For Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            We unite cutting-edge web & mobile engineering, proactive cybersecurity auditing, and next-generation AI search optimization under one roof to accelerate your digital advantage.
          </motion.p>
        </div>

        {/* Services Showcase List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            const Icon = service.icon;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl bg-white/[0.03] border ${service.cardBorder} backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 overflow-hidden group`}
              >
                {/* Subtle Card Background Glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${service.accentColor} opacity-5 blur-3xl pointer-events-none rounded-full transition-opacity duration-500 group-hover:opacity-15`} />

                <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}>
                  
                  {/* Service Visual Preview */}
                  <div className="lg:w-1/2 w-full flex justify-center items-center">
                    <Link
                      to={service.link}
                      aria-label={`View details for ${service.title}`}
                      className="relative block w-full overflow-hidden rounded-2xl group/img"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-indigo-600/30 to-pink-600/40 rounded-2xl blur-md opacity-30 group-hover/img:opacity-70 transition duration-500 pointer-events-none" />
                      <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full bg-purple-950/20">
                        <img
                          src={service.imageUrl}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/800x600/1e1035/ffffff?text=' + encodeURIComponent(service.title);
                          }}
                        />
                        {/* Hover Overlay with View Prompt */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600/90 text-white font-semibold text-sm shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                            Explore Service <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Service Text & Features Details */}
                  <div className="lg:w-1/2 w-full space-y-5 text-left">
                    {/* Service Title */}
                    <Link to={service.link} className="block group/title">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover/title:text-transparent group-hover/title:bg-clip-text group-hover/title:bg-gradient-to-r group-hover/title:from-purple-300 group-hover/title:via-indigo-200 group-hover/title:to-pink-300 transition-all duration-300">
                        {service.title}
                      </h2>
                    </Link>

                    {/* Tagline / Hook */}
                    <p className="text-sm sm:text-base font-medium text-purple-300/90 italic">
                      "{service.tagline}"
                    </p>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Highlights / Features */}
                    <div className="pt-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                        Key Capabilities:
                      </p>
                      <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-gray-300">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Primary Link Button to Service Page */}
                    <div className="pt-3">
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}

          {/* Bottom Connect / Contact Banner */}
          <div className="mt-12 sm:mt-16">
            <Suspense fallback={null}>
              <ConnectNow compact />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
