import React from 'react';
import { motion } from 'framer-motion';

// Shared animation variants aligned with OurServices card style
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  },
  hover: {
    scale: 1.02,
    rotate: 0.25,
    transition: { type: 'spring', stiffness: 260, damping: 20 }
  }
};

const mediaVariants = (from = 'left') => ({
  hidden: {
    opacity: 0,
    x: from === 'left' ? -40 : 40,
    rotate: from === 'left' ? -1 : 1,
    filter: 'blur(6px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 140, damping: 20 }
  },
  hover: { scale: 1.03 }
});

const textVariants = (from = 'right') => ({
  hidden: {
    opacity: 0,
    x: from === 'left' ? -30 : 30,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 18 }
  }
});

const CyberSecurity = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-start min-h-screen p-2 text-white font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top Section */}
      <motion.section className="flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 text-center min-h-[calc(100vh-80px)]" variants={containerVariants}>
        <motion.div className="relative z-10 max-w-4xl mx-auto" variants={textVariants()}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <span className="text-indigo-500 font-bold">"</span> Our <span className="text-indigo-500">Cybersecurity</span> for startups & SMEs — proactive audits, 24/7 managed protection, and peace of mind baked into your stack. <span className="text-indigo-500 font-bold">"</span>
          </motion.h1>
        </motion.div>
      </motion.section>

      {/* Middle Section */}
      <motion.div className="flex flex-col items-center max-w-4xl w-full mt-4 px-4 mb-12" variants={containerVariants}>
        <motion.div className="flex items-center justify-center w-full mb-8" variants={textVariants('left')}>
          <div className="w-4 h-4 rounded-full bg-white mx-2"></div>
          <div className="flex-grow h-px bg-gray-500"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-500 whitespace-nowrap mx-4">
            Cyber-Security Service
          </h2>
          <div className="flex-grow h-px bg-gray-500"></div>
          <div className="w-4 h-4 rounded-full bg-white mx-2"></div>
        </motion.div>

        <motion.img
          src="../image/CyberSecurity/Cybersecurity.png"
          alt="Cyber Security Display"
          className="rounded-xl shadow-lg h-[400px] w-full max-w-2xl mx-auto border-2 border-cyan-700/50 object-cover"
          variants={mediaVariants('right')}
          whileHover={{ scale: 1.03, rotate: 0.3 }}
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src =
              "https://placehold.co/700x400/0a0a0a/ffffff?text=Image+Not+Found";
          }}
        />
      </motion.div>

      {/* Real-Time Protection Section */}
      <motion.div className="max-w-5xl w-full px-4 text-center mb-10" variants={containerVariants}>
        <motion.h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-White mb-4 leading-tight" variants={textVariants()}>
          Confident Cybersecurity, No Compromises
        </motion.h2>
        <motion.p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto" variants={textVariants()}>
          We don't overpromise or oversimplify. Our cybersecurity offerings are grounded in real-world situations and tested response. From audits to endpoint protection, we protect the infrastructure that keeps your business running.
        </motion.p>
      </motion.div>

      {/* Four Feature Blocks */}
      <motion.div className="max-w-5xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-10 text-left mb-10" variants={containerVariants}>
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
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 shadow-xl flex flex-col items-start border border-gray-700/50 hover:border-indigo-500/30 transition-colors duration-300"
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
              <h3 className="text-xl font-bold text-white">{block.title}</h3>
            </div>
            <div className="text-gray-300 text-base leading-relaxed mb-4">
              {block.text}
            </div>
            {block.features && (
              <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
                {block.features.map((feature, i) => (
                  <li key={i} className="text-sm">{feature}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>

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
        <motion.div key={idx} className="max-w-6xl mt-8 w-full px-4 text-center mb-16" variants={containerVariants}>
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-12"
            variants={textVariants()}
          >
            {section.title}
          </motion.h2>

          <div className={`flex flex-col items-center gap-12 lg:gap-16 ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <motion.div
              className="lg:w-1/2 flex justify-center"
              variants={mediaVariants(idx % 2 === 1 ? 'right' : 'left')}
              whileHover={{ scale: 1.02, rotate: idx % 2 === 1 ? -1 : 1 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={section.imageUrl}
                  alt={section.imageAlt}
                  className="relative z-10 rounded-3xl shadow-2xl h-[300px] lg:h-[400px] w-full max-w-md border-2 border-cyan-400/30 object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x300/0a0a0a/ffffff?text=Image+Not+Found";
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 text-left flex flex-col justify-center space-y-6"
              variants={textVariants(idx % 2 === 1 ? 'left' : 'right')}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed text-justify">
                {section.paragraph}
              </p>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-indigo-400 mb-4">{section.listTitle}</h3>
                <ul className="space-y-3">
                  {section.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-base sm:text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Custom CSS */}
      <style jsx>{`
        .font-inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </motion.div>
  );
};

export default CyberSecurity;
