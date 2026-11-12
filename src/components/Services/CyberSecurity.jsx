import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';
import SEO from '../SEO';

const ConnectNow = lazy(() => import('../Home/ConnectNow'));

// Simplified animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 20
    }
  },
  hover: {
    scale: 1.01,
    y: -3,
    boxShadow: "0 10px 30px rgba(99,102,241,0.15)"
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Clean section wrapper ensuring content is always immediately visible
const AnimatedSection = ({ children, className = "" }) => (
  <section className={className}>
    {children}
  </section>
);

const CyberSecurity = () => {
  return (
    <>
      <SEO
        title="Cybersecurity Services India | EncryVia Security"
        description="Advanced cybersecurity & threat protection. 24/7 monitoring, penetration testing & network security. 99.9% uptime SLA. Starting ₹22,000."
        keywords="cybersecurity services India, penetration testing services, network security solutions, 24/7 security monitoring, threat protection services, cybersecurity company India, security audit services"
        ogUrl="https://encryvia.com/cybersecurity"
      />

      <div className="min-h-screen text-white relative overflow-hidden bg-transparent">
        {/* Hero Section - Always directly visible */}
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 sm:pb-16 text-center">
          <div className="relative z-10 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2 mb-4">
              Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Security</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Proactive vulnerability audits, penetration testing (WAPT), and 24/7 security monitoring engineered to protect your critical digital assets.
            </p>
          </div>
        </section>

        {/* Main Image and Description in One Container */}
        <AnimatedSection className="py-12 md:py-16 px-4 sm:px-6 lg:px-8" delay={0.15}>
          <motion.div
            className="max-w-6xl mx-auto"
            variants={containerVariants}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Main Image - Left Side */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center"
                variants={imageVariants}
                whileHover={{ scale: 1.01 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl w-full aspect-[16/9] flex items-center justify-center overflow-hidden border border-gray-700/50">
                  <img
                    src="/image/CyberSecurity/Cybersecurity.webp"
                    alt="Cyber Security Display"
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/1200x675/4F46E5/ffffff?text=Cybersecurity";
                    }}
                  />
                </div>
              </motion.div>

              {/* Description - Right Side */}
              <motion.div
                className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
                variants={containerVariants}
              >
                <motion.h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                  variants={textVariants}
                >
                  Confident Cybersecurity, No Compromises
                </motion.h3>
                <motion.p
                  className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                  variants={textVariants}
                >
                  We don't overpromise or oversimplify. Our cybersecurity offerings are grounded in real-world situations and tested response. From audits to endpoint protection, we protect the infrastructure that keeps your business running.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Four Feature Blocks */}
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8" delay={0.2}>
          <motion.div
            className="max-w-7xl mx-auto space-y-10 md:space-y-14"
            variants={containerVariants}
          >
            {/* Cards Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8"
              variants={containerVariants}
            >
              {[
                {
                  title: "Audit to Action",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  text: "Security begins with visibility. Each interaction starts with a thorough risk assessment no guesswork. Next, we deploy real-world defenses based on your digital infrastructure, not theory."
                },
                {
                  title: "Tech-Agnostic, Risk-Centric",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                  text: "Whether you host WordPress or custom cloud stacks, our security is optimized for your unique risk profile. We don't impose tools we select the appropriate ones for your platform, workflows, and threat environment."
                },
                {
                  title: "Comprehensive Coverage",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.016A11.955 11.955 0 002 12c0 2.909 1.023 5.669 2.876 7.765L12 22l7.124-2.235A11.955 11.955 0 0022 12c0-2.909-1.023-5.669-2.876-7.765z",
                  text: "Our solution protects all levels of defense network, data, individuals, and policies. We offer security planning, threat identification, vulnerability patching, and response planning integrated into a single system.",
                  features: [
                    "Risk Assessments",
                    "Firewall and Network Hardening",
                    "Encryption & Secure Storage",
                    "Staff Awareness & Policy Templates"
                  ]
                },
                {
                  title: "Connected and Vigilant",
                  icon: "M3.055 11H5.06a4.002 4.002 0 013.921 3.491L9 14.5m1.5-.5a.5.5 0 00-1 0v1a.5.5 0 001 0V14zm0-3a.5.5 0 00-1 0v1a.5.5 0 001 0V11zm-4-3a.5.5 0 00-1 0v1a.5.5 0 001 0V8zM3 11a9 9 0 0118 0M3 11v2m18-2v2",
                  text: "Security is not independent. We integrate threat monitoring with your hosting, email, and other business applications. From real-time alerts to systems that prevent breaches, our protection adapts and evolves with your online presence.",
                  features: [
                    "DNS and Email Security",
                    "Web App Firewall",
                    "24/7 Monitoring (optional)",
                    "Monthly Reporting with Recommendations"
                  ]
                }
              ].map((block, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-6 md:p-8 shadow-xl hover:border-white/30 transition-colors duration-300 group"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <svg
                        className="w-6 h-6 text-blue-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={block.icon} />
                      </svg>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                      {block.title}
                    </h3>
                  </div>
                  <div className="text-gray-300 text-sm sm:text-base lg:text-lg leading-7 mb-4">
                    {block.text}
                  </div>
                  {block.features && (
                    <ul className="space-y-2 mt-4">
                      {block.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Detailed Service Sections */}
        <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-2 sm:pb-4">
          {[
            {
              slug: "penetration-testing",
              badge: "OFFENSIVE SECURITY",
              title: "Penetration Testing",
              imageAlt: "Penetration Testing",
              imageUrl: "/image/CyberSecurity/Security.webp",
              listTitle: "Testing Methodologies:",
              points: [
                "Black-box, grey-box, and white-box penetration testing",
                "OWASP Top 10 web & API exploitation assessments",
                "Zero-day vulnerability discovery & proof-of-concept validation",
                "Detailed executive risk summary and developer fix guides"
              ],
              paragraph: "Simulate real-world cyberattacks before malicious hackers strike. Our certified ethical hackers perform comprehensive penetration testing across web applications, mobile platforms, and internal networks to uncover critical vulnerabilities and deliver actionable remediation roadmaps."
            },
            {
              slug: "network-defense",
              badge: "INFRASTRUCTURE HARDENING",
              title: "Network Defense",
              imageAlt: "Network Defense System",
              imageUrl: "/image/CyberSecurity/Enterprise.webp",
              listTitle: "Defense Capabilities:",
              points: [
                "Next-Gen Firewall (NGFW) & perimeter hardening",
                "Zero-Trust Network Access (ZTNA) and segment isolation",
                "DDoS mitigation and encrypted VPN architectures",
                "Continuous traffic anomaly monitoring & intrusion prevention"
              ],
              paragraph: "Harden your perimeter and internal corporate networks against unauthorized intrusions, malware, and ransomware. We deploy multi-layered firewall architectures, intrusion detection (IDS/IPS), and zero-trust network access (ZTNA) to safeguard sensitive infrastructure."
            },
            {
              slug: "security-audits",
              badge: "COMPLIANCE & GOVERNANCE",
              title: "Security Audits",
              imageAlt: "Security Audits & Compliance",
              imageUrl: "/image/CyberSecurity/Everyday_Protection.webp",
              listTitle: "Audit Scope:",
              points: [
                "Cloud infrastructure & server hardening audits (AWS, GCP, Azure)",
                "Regulatory compliance alignment (ISO 27001, SOC 2, CERT-In)",
                "Employee security hygiene & phishing simulation audits",
                "Comprehensive vulnerability reporting with severity scoring"
              ],
              paragraph: "Gain complete visibility into your organization's risk posture with end-to-end security audits. We evaluate infrastructure configurations, access policies, data retention practices, and compliance standards to keep your business certified and resilient."
            },
            {
              slug: "web-application-security",
              badge: "APPLICATION RESILIENCE",
              title: "Web Application Security",
              imageAlt: "Web Application Security",
              imageUrl: "/image/CyberSecurity/Cybersecurity.webp",
              listTitle: "App Security Controls:",
              points: [
                "Web Application Firewall (WAF) rule tuning & deployment",
                "Secure code review & dependency vulnerability scanning",
                "API security, rate limiting, and JWT/OAuth hardening",
                "Secure session management & data encryption at rest and in transit"
              ],
              paragraph: "Bake robust defenses directly into your web applications, APIs, and microservices. We protect customer data, authentication flows, and payment pipelines from SQL injection, cross-site scripting (XSS), CSRF, and broken access controls."
            }
          ].map((section, idx) => (
            <AnimatedSection
              key={idx}
              delay={0.15 + idx * 0.08}
            >
              <div className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column (Balanced 5/12 width) */}
                  <motion.div
                    className="w-full lg:w-5/12 flex justify-center"
                    variants={imageVariants}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="relative w-full max-w-md lg:max-w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-2xl sm:rounded-3xl blur-xl -z-10" />
                      <div className="rounded-2xl sm:rounded-3xl border border-purple-400/30 overflow-hidden aspect-[4/3] sm:aspect-square bg-gray-900/40">
                        <img
                          src={section.imageUrl}
                          alt={section.imageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=Cybersecurity";
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Column (Balanced 7/12 width) */}
                  <motion.div
                    className="w-full lg:w-7/12 space-y-6 text-left"
                    variants={containerVariants}
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                      {section.title}
                    </h2>

                    <motion.p
                      className="text-base sm:text-lg leading-relaxed text-gray-300"
                      variants={textVariants}
                    >
                      {section.paragraph}
                    </motion.p>

                    {section.listTitle && section.points && section.points.length > 0 && (
                      <motion.div
                        className="bg-white/[0.03] hover:bg-white/[0.05] backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/15 hover:border-[rgba(168,85,247,0.5)] space-y-3.5 shadow-xl transition-all duration-300"
                        variants={itemVariants}
                      >
                        <h4 className="text-base sm:text-lg font-bold text-[rgb(168,85,247)] flex items-center gap-2">
                          <Sparkles size={18} className="text-purple-400" />
                          <span>{section.listTitle}</span>
                        </h4>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {section.points.map((point, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start gap-3 text-gray-300 text-xs sm:text-sm md:text-base leading-snug"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-[rgb(168,85,247)] rounded-full mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Compact Connect Now Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1 sm:mt-2 lg:mt-3 mb-4 sm:mb-6 lg:mb-8">
          <Suspense fallback={null}>
            <ConnectNow compact />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
