import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.8-2.2 2-3.4a10 10 0 0 0-2.3-2.6C16.4 5.3 15 4 11 4 7 4 5.6 5.3 4.5 6.5A10 10 0 0 0 2 9.4c.2 1.2 1 2.5 2 3.4.8.8 1.3 1.5 1.5 2.5"></path>
    <path d="M9 18h6"></path>
    <path d="M10 22h4"></path>
    <path d="M11 17v5"></path>
  </svg>
);

const LayoutGridIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const NetworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <rect x="16" y="2" width="6" height="6" rx="1"></rect>
    <rect x="2" y="16" width="6" height="6" rx="1"></rect>
    <path d="M16 8v3a1 1 0 0 0 1 1h3"></path>
    <path d="M8 16h3a1 1 0 0 1 1 1v3"></path>
    <path d="M12 12v.01"></path>
    <path d="M22 16c0 1.1-9 6-9 6s-9-4.9-9-6V8c0-1.1 9-6 9-6s9 4.9 9 6Z"></path>
  </svg>
);

const LayersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="m12.83 2.18-.3.9a4.37 4.37 0 0 0-4.65 6.36l.51.53c.8-.08 1.45-.63 1.6-1.4.3-.9-1.2-2.13-2.1-3-.8.74-1.3 1.68-1.64 2.76-.52 1.57-.96 4.41-.96 7.07 0 4.07.82 5.67 3.02 6.78.38.19.78.33 1.18.45"></path>
    <path d="M12.83 2.18c-.85-.43-1.65-.67-2.33-.67-2.73 0-5.71 1.76-7.38 5.76C1.45 10.74 1.45 15.2 5.16 20.25c.38.52.82 1.0 1.29 1.44"></path>
    <path d="m21.5 7.12-3.87-3.87a2 2 0 0 0-2.83 0L12.5 9.5l4.66 4.66 4.34-4.34a2 2 0 0 0 0-2.83Z"></path>
  </svg>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateY: -15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
    transition: {
      type: "spring",
      stiffness: 200
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

// Animated section wrapper
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px"
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

function WebDevelopment() {
  return (
    <motion.div 
      className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* Hero Section - Enhanced spacing and typography */}
      <AnimatedSection className="flex flex-col items-center justify-center py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 text-center min-h-[60vh]">
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 lg:mb-12"
            variants={textVariants}
          >
            <motion.span 
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              "
            </motion.span> 
            Our <motion.span 
              className='text-indigo-500'
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Web Development
            </motion.span> 
            <br />
            that works as hard as you do — secure, scalable, and built for growth from day one. 
            <motion.span 
              className="text-indigo-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              "
            </motion.span>
          </motion.h1>
        </motion.div>
      </AnimatedSection>

      {/* Main Content Section - Enhanced layout and spacing */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.2}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* Service Header - Enhanced visual design */}
          <motion.div 
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mx-6 text-blue-400"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Web Development Service
            </motion.h2>
            <motion.div 
              className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Main Service Image - Enhanced presentation */}
          <motion.div 
            className="w-full flex justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl w-full max-w-5xl h-96 lg:h-[500px] flex items-center justify-center text-gray-400 text-lg overflow-hidden">
              <motion.img
                src="https://placehold.co/1000x500/555555/EEEEEE?text=Web+Development+Service+Image"
                alt="Web Development Service"
                className="w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </motion.div>

          {/* Extraordinary digital products section - Enhanced layout */}
          <AnimatedSection className="space-y-16 lg:space-y-20" delay={0.3}>
            <motion.div 
              className="space-y-8 lg:space-y-12"
              variants={containerVariants}
            >
              <motion.h3 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left"
                variants={textVariants}
              >
                Extraordinary digital products
              </motion.h3>
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-5xl"
                variants={textVariants}
              >
                We play to our strengths: For over years we've been ideating, creating and
                shipping wonderful things on the internet.
              </motion.p>
            </motion.div>

            {/* Cards Grid - Enhanced spacing and presentation */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
              variants={containerVariants}
            >
              {/* Card 1 - Enhanced styling */}
              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ gap: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <LightbulbIcon className="w-8 h-8 text-indigo-400" />
                  </motion.div>
                  <h4 className="text-2xl lg:text-3xl font-bold">Vision‑driven</h4>
                </motion.div>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                  Great Technology, Designed to Grow — We build digital solutions that grow businesses.
                  Every plan, line of code, and campaign is tailored to help you simplify, secure, and scale.
                </p>
              </motion.div>

              {/* Card 2 - Enhanced styling */}
              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ gap: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <LayoutGridIcon className="w-8 h-8 text-indigo-400" />
                  </motion.div>
                  <h4 className="text-2xl lg:text-3xl font-bold">Problem‑solving Focus</h4>
                </motion.div>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                  Solving Real Business Problems — Technology should solve, not cause problems.
                  That's why we offer robust security, transparent solutions, and campaigns that deliver results.
                </p>
              </motion.div>

              {/* Card 3 - Enhanced styling */}
              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ gap: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <NetworkIcon className="w-8 h-8 text-indigo-400" />
                  </motion.div>
                  <h4 className="text-2xl lg:text-3xl font-bold">Human + Data</h4>
                </motion.div>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                  Where Data and Human Insight Converge — From cybersecurity audits to ROI-focused marketing,
                  we blend data with creativity to build solutions that work better for your business.
                </p>
              </motion.div>

              {/* Card 4 - Enhanced styling */}
              <motion.div 
                className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ gap: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <LayersIcon className="w-8 h-8 text-indigo-400" />
                  </motion.div>
                  <h4 className="text-2xl lg:text-3xl font-bold">Your Growth Partner</h4>
                </motion.div>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                  Not just an agency — EncryVia acts as an extension of your team.
                  We build, protect, and grow with transparency, speed, and your success in mind.
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Custom Websites Section - Enhanced layout and spacing */}
          <AnimatedSection className="space-y-16 lg:space-y-20" delay={0.4}>
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center"
              variants={textVariants}
            >
              Custom Websites That Do More for Your Business
            </motion.h3>
            
            <motion.div 
              className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20"
              variants={containerVariants}
            >
              {/* Image - Enhanced presentation */}
              <motion.div 
                className="flex-1 w-full flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full max-w-[365px] h-[568px] flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="https://placehold.co/365x568/555555/EEEEEE?text=Laptop+User"
                    alt="Laptop User"
                    className="w-full h-full object-cover rounded-[130px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
              
              {/* Content - Enhanced typography and spacing */}
              <motion.div 
                className="flex-1 w-full mt-16 space-y-8"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  variants={textVariants}
                >
                  We don't just throw up websites to look pretty—we build digital workhorses. Each website is handcrafted to highlight your brand, guide your users around, and deliver actual results.
                  <br /><br />
                  From mobile responsiveness to high-conversion design, we transform your site into an asset, not an address.
                </motion.p>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <h4 className="text-xl lg:text-2xl font-bold text-white">What we deliver:</h4>
                  <ul className="list-disc list-inside text-lg lg:text-xl text-gray-300 space-y-4">
                    <li>Personalized UI/UX tailored to fit your brand and objectives</li>
                    <li>Mobile-first responsive design</li>
                    <li>SEO-friendly organization with clean, scalable code</li>
                    <li>Built on WordPress, Shopify, or custom stacks as needed</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Built with Security Section - Enhanced layout */}
          <AnimatedSection className="space-y-16 lg:space-y-20" delay={0.5}>
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              variants={textVariants}
            >
              Built with security, performance, and scalability in its design
            </motion.h3>
            
            <motion.div 
              className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20"
              variants={containerVariants}
            >
              {/* Content - Enhanced typography and spacing */}
              <motion.div 
                className="flex-1 w-full space-y-8"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  variants={textVariants}
                >
                  Websites today have to face real-world pressures—from performance expectations to security threats. We code with purpose and attention, using the best tech stack to get your site to load fast, stay secure, and grow with your business.
                </motion.p>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <h4 className="text-xl lg:text-2xl font-bold text-white">How we do it:</h4>
                  <ul className="list-disc list-inside text-lg lg:text-xl text-gray-300 space-y-4">
                    <li>Enterprise-grade security features (SSL, firewalls, input validation)</li>
                    <li>Front-end and back-end optimization for quick and stable speeds</li>
                    <li>Cloud-enabled configurations and API-first integrations</li>
                    <li>Periodic maintenance and technical support plans</li>
                  </ul>
                </motion.div>
              </motion.div>
              
              {/* Image - Enhanced presentation */}
              <motion.div 
                className="flex-1 w-full flex justify-center lg:justify-end"
                variants={itemVariants}
              >
                <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full max-w-[365px] h-[568px] flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="https://placehold.co/365x568/555555/EEEEEE?text=Code+Security"
                    alt="Code Security"
                    className="w-full h-full object-cover rounded-[130px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Smarter Process Section - Enhanced layout */}
          <AnimatedSection className="space-y-16 lg:space-y-20" delay={0.6}>
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              variants={textVariants}
            >
              A Smarter Development Process That Keeps You In the Loop
            </motion.h3>
            
            <motion.div 
              className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20"
              variants={containerVariants}
            >
              {/* Image - Enhanced presentation */}
              <motion.div 
                className="flex-1 w-full flex justify-center lg:justify-start"
                variants={itemVariants}
              >
                <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full max-w-[365px] h-[568px] flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="https://placehold.co/365x568/555555/EEEEEE?text=Development+Process"
                    alt="Development Process"
                    className="w-full h-full object-cover rounded-[130px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
              
              {/* Content - Enhanced typography and spacing */}
              <motion.div 
                className="flex-1 w-full mt-16 space-y-8"
                variants={containerVariants}
              >
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300"
                  variants={textVariants}
                >
                  It's all simple, no gimmicks. We keep our development process straightforward and simple, with check-ins along the way so you're in control at every step. From the beginning through to after going live, you're part of everything—and we're accountable for every click, line, and deadline.
                </motion.p>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <h4 className="text-xl lg:text-2xl font-bold text-white">What to expect:</h4>
                  <ul className="list-disc list-inside text-lg lg:text-xl text-gray-300 space-y-4">
                    <li>Weekly progress reports and collaborative dashboards</li>
                    <li>Transparent timelines, not vague deliverables</li>
                    <li>CMS training for your staff</li>
                    <li>Post-launch support, patches, and optimization routes</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </motion.div>
      </AnimatedSection>

      {/* Superb digital offerings Section - Enhanced styling */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-t border-gray-800" delay={0.7}>
        <motion.div 
          className="max-w-5xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* Section Header - Enhanced typography */}
          <motion.div 
            className="text-center space-y-8"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              variants={textVariants}
            >
              Superb digital offerings
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-4xl mx-auto"
              variants={textVariants}
            >
              We play to our strengths: For over years we've been ideating, creating and shipping wonderful things on the internet.
            </motion.p>
          </motion.div>
          
          {/* Cards Grid - Enhanced spacing and presentation */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            variants={containerVariants}
          >
            {/* Card 1 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">Idea to Implementation</h4>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                An entire product designed in-house, from initial strategy to end product. That is, everything we do is designed with a purpose, built to the best standards.
              </p>
            </motion.div>
            
            {/* Card 2 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">Full Stack</h4>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                We have experts and generalists all under one roof, from UI development to interaction design, CMS installation and technical development.
              </p>
            </motion.div>
            
            {/* Card 3 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">Technology Neutral</h4>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                The greatest tech is the tech that does the job, in fact. We're always listening and observing, so we can recommend the perfect solution to your business problem.
              </p>
            </motion.div>
            
            {/* Card 4 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-2xl lg:text-3xl font-bold mb-2">Integrated</h4>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                We place your site at the center of your online universe, with safe API connections and automated processes in your business infrastructure.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
}

export default WebDevelopment;
