import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SEO from '../SEO';

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

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px"
  });

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
};

const CyberSecurity = () => {
  return (
    <>
      <SEO
        title="Cybersecurity Services India | EncryVia Security"
        description="Advanced cybersecurity & threat protection. 24/7 monitoring, penetration testing & network security. 99.9% uptime SLA. Starting ₹22,000."
        keywords="cybersecurity services India, penetration testing services, network security solutions, 24/7 security monitoring, threat protection services, cybersecurity company India, security audit services"
        ogUrl="https://encryvia.com/cybersecurity"
      />

      <motion.div
        className="min-h-screen text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <AnimatedSection className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-16 md:pb-20 text-center">
          <motion.div className="relative z-10 max-w-5xl mx-auto" variants={containerVariants}>
            <motion.h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6"
              variants={textVariants}
            >
              <motion.span
                className="text-indigo-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 18 }}
              >
              </motion.span>
              Our <motion.span
                className="text-indigo-500"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                Cybersecurity
              </motion.span> for startups & SMEs — proactive audits, 24/7 managed protection, and peace of mind baked into your stack.
              <motion.span
                className="text-indigo-500"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 18 }}
              >
              </motion.span>
            </motion.h1>
          </motion.div>
        </AnimatedSection>

        {/* Service Header */}
        <AnimatedSection className="py-8 md:py-8 px-4 sm:px-6 lg:px-8" delay={0.1}>
          <motion.div
            className="flex items-center justify-center max-w-7xl mx-auto"
            variants={itemVariants}
          >
            <motion.div
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mx-4 sm:mx-6 text-indigo-400"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280 }}
            >
              Cyber-Security Service
            </motion.h2>
            <motion.div
              className="flex-grow border-t border-gray-700/60 max-w-[160px] sm:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.div>
        </AnimatedSection>

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
                    src="../image/CyberSecurity/Cybersecurity.webp"
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
        <AnimatedSection className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30" delay={0.2}>
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
                  text: "Security begins with visibility. Each interaction starts with a thorough risk assessment—no guesswork. Next, we deploy real-world defenses based on your digital infrastructure, not theory."
                },
                {
                  title: "Tech-Agnostic, Risk-Centric",
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                  text: "Whether you host WordPress or custom cloud stacks, our security is optimized for your unique risk profile. We don't impose tools—we select the appropriate ones for your platform, workflows, and threat environment."
                },
                {
                  title: "Comprehensive Coverage",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 4.016A11.955 11.955 0 002 12c0 2.909 1.023 5.669 2.876 7.765L12 22l7.124-2.235A11.955 11.955 0 0022 12c0-2.909-1.023-5.669-2.876-7.765z",
                  text: "Our solution protects all levels of defense—network, data, individuals, and policies. We offer security planning, threat identification, vulnerability patching, and response planning integrated into a single system.",
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
        {[
          {
            title: "Everyday Protection Embedded within Your Digital Stack",
            imageAlt: "Digital Stack Protection",
            imageUrl: "../image/CyberSecurity/Security.webp",
            listTitle: "Included:",
            points: [
              "Threat and vulnerability analyses",
              "Penetration testing & firewall configuration",
              "Secure DNS, SPF/DKIM/DMARC email protocols",
              "Scheduled risk reporting and patch plans"
            ],
            paragraph: "Cybersecurity isn't a plug-in. It's infrastructure. At Encryvia, we bake security into the foundation—at your sites, APIs, and operations. Our audits are deeper than surface scans. We measure real-world risk and fill in the gaps most agencies miss."
          },
          {
            title: "Enterprise-Class Defense Without the Complexity",
            imageAlt: "Enterprise Defense System",
            imageUrl: "../image/CyberSecurity/Enterprise.webp",
            listTitle: "Capabilities:",
            points: [
              "Network hardening and endpoint protection",
              "Encrypted data and backup infrastructure",
              "User security and access control regulations",
              "24/7 monitoring (optional in high-risk environments)"
            ],
            paragraph: "We apply the same business principles—but at scale for expanding businesses. That is, multi-tiered security, threat monitoring in real time, and best practices implementation without the hefty price tag or red tape."
          },
          {
            title: "Security Culture: It's Not Just Code",
            imageAlt: "Security Culture Training",
            imageUrl: "../image/CyberSecurity/Everyday_Protection.webp",
            listTitle: "Support Includes:",
            points: [
              "Staff training in phishing/social engineering",
              "Policy deployment packages (BYOD, password hygiene, etc.)",
              "Regular audits with executive-level reporting",
              "Compliance documentation (GDPR, HIPAA, etc.)"
            ],
            paragraph: "Most attacks start with a human click. That's why our security service is accompanied by training, policy templates, and hands-on assistance for your internal team. Because security shouldn't break when you scale—it should scale with you."
          }
        ].map((section, idx) => (
          <AnimatedSection
            key={idx}
            className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
            delay={0.25 + idx * 0.06}
          >
            <motion.div
              className="max-w-7xl mx-auto space-y-8 md:space-y-10"
              variants={containerVariants}
            >
              {/* Section Title */}
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white text-center"
                variants={textVariants}
              >
                {section.title}
              </motion.h3>

              {/* Content Layout - Image and Text in One Line */}
              <div className={`flex flex-col items-stretch justify-center gap-8 lg:gap-12 ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                {/* Image Container - Equal width */}
                <motion.div
                  className="lg:w-2/6 w-full flex justify-center "
                  variants={imageVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="relative w-full max-w-md lg:max-w-full rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-3xl blur-2xl -z-10" />
                    <div className="rounded-3xl border border-cyan-400/30 overflow-hidden aspect-square">
                      <img
                        src={section.imageUrl}
                        alt={section.imageAlt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/600x600/4F46E5/ffffff?text=Cybersecurity";
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content - Equal width, vertically centered */}
                <motion.div
                  className="lg:w-1/2 w-full text-center lg:text-left space-y-6 flex flex-col justify-center"
                  variants={containerVariants}
                >
                  <motion.p
                    className="text-base sm:text-lg lg:text-xl leading-8 text-gray-300"
                    variants={textVariants}
                  >
                    {section.paragraph}
                  </motion.p>

                  {/* List */}
                  <motion.div
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-700/50 space-y-3"
                    variants={itemVariants}
                  >
                    <h4 className="text-lg lg:text-xl font-bold text-indigo-400">
                      {section.listTitle}
                    </h4>
                    <ul className="space-y-2.5">
                      {section.points.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                        >
                          <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>
    </>
  );
};

export default CyberSecurity;
