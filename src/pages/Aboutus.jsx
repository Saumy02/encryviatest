
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// SVG Icons for the cards (simplified versions)
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

// Helper component to animate a string of text character by character.
// It generates and stores random transform values for each character
// to simulate a "falling" effect on hover.
const AnimatedText = ({ text, isAnimating, baseClassName, onMouseEnter, onMouseLeave }) => {
  // useRef is used to store the randomly generated transform properties for each character.
  // This ensures that the random values are generated only once per character
  // when the component mounts (or text changes) and persist across re-renders,
  // making the animation consistent for each hover/unhover cycle.
  const charTransformData = useRef([]);

  // useEffect hook to initialize or re-initialize random transform values.
  // This runs once when the component mounts and again if the 'text' prop changes.
  useEffect(() => {
    charTransformData.current = text.split('').map(() => ({
      // Random horizontal translation (x-axis) between -50px and 50px for a slight drift.
      x: Math.random() * 100 - 50, // Range: -50 to +50

      // Random vertical translation (y-axis) downwards, between 50px and 150px.
      // This creates the primary "falling" motion.
      y: Math.random() * 100 + 50, // Range: +50 to +150

      // Random rotation in degrees between -360 and 360 degrees for a subtle spin.
      rotate: Math.random() * 720 - 360, // Range: -360 to +360

      // Random scale factor between 0.5 and 0.8.
      // Characters shrink slightly as they fall into the distance.
      scale: Math.random() * 0.3 + 0.5, // Range: 0.5 to 0.8

      // Random delay for each character's animation start, between 0 and 0.3 seconds.
      // This adds to the chaotic "falling" effect, making them drop at slightly different times.
      delay: Math.random() * 0.3, // Max delay for falling out
    }));
  }, [text]); // Dependency array: re-run if 'text' prop changes.

  // Define the maximum possible random delay used for character animation.
  // This value is crucial for correctly calculating the reversed delay during reassembly.
  const MAX_ANIMATION_DELAY = 0.3; // Should match the max value in Math.random() * 0.3 above.

  return (
    // Wrap the mapped characters in a span to attach hover handlers to the entire text segment.
    <span
      className={`inline-block whitespace-nowrap ${baseClassName}`} // Use inline-block to allow hover on whole segment, whitespace-nowrap to prevent line breaks
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Map over each character in the text to create individual span elements. */}
      {text.split('').map((char, charIndex) => {
        // Retrieve the pre-generated random transform data for the current character.
        // Fallback to default values if data isn't ready (e.g., during initial render before useEffect).
        const transform = charTransformData.current[charIndex] || { x: 0, y: 0, rotate: 0, scale: 1, delay: 0 };

        return (
          <span
            key={charIndex} // Unique key for React list rendering.
            className={`char-span`} // Apply base class for char-span only
            style={{
              // Conditional transformation:
              // If 'isAnimating' (hovered) is true, apply the random falling transform.
              // If 'isAnimating' is false (not hovered), reset to 'none' (original position/size).
              transform: isAnimating
                ? `translate(${transform.x}px, ${transform.y}px) rotate(${transform.rotate}deg) scale(${transform.scale})`
                : 'none',

              // Conditional opacity:
              // If 'isAnimating' (hovered) is true, fade out completely (opacity 0).
              // If 'isAnimating' is false (not hovered), stay fully visible (opacity 1).
              opacity: isAnimating ? 0 : 1,

              // Transition duration: How long the animation takes for each character.
              // Set to 0.7 seconds for a noticeable falling speed.
              transitionDuration: '0.7s',

              // Conditional transition delay:
              // On hover ('isAnimating' true): use the random delay, making characters fall chaotically.
              // On unhover ('isAnimating' false): use a reversed random delay. This ensures characters that
              // started falling later will return faster, creating a fluid "un-falling" effect.
              transitionDelay: isAnimating
                ? `${transform.delay}s`
                : `${(MAX_ANIMATION_DELAY - transform.delay)}s`,
            }}
          >
            {/* Render a non-breaking space for actual spaces to maintain layout. */}
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
};

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

function OurTeam() { // Renamed from App to OurTeam
  // State to track which part of the H3 (section 3) is currently being hovered over.
  const [hoveredH3PartIndex, setHoveredH3PartIndex] = useState(null); // Reverted to track individual parts.

  // Define the structure of the heading for the animated text in Section 3 (H3).
  // Now broken into parts for individual animation.
  const animatedH3HeadingParts = [
    { type: 'text', content: 'Built with ' },
    { type: 'span', content: 'Security', className: 'text-purple-400' },
    { type: 'text', content: ', ' },
    { type: 'span', content: 'Speed', className: 'text-purple-400' },
    { type: 'text', content: ', and ' },
    { type: 'span', content: 'Salability', className: 'text-purple-400'},
    {type: 'text', content: 'in Mind'}
  ];

  return (
    <motion.div 
      className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Link to Google Fonts to import the 'Inter' font. */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      {/* Custom CSS for the animation and font styling. */}
      <style>
        {`
          /* Apply the 'Inter' font family to elements with 'font-inter' class. */
          .font-inter {
            font-family: 'Inter', sans-serif;
          }

          /* Base styles for each individual character span. */
          .char-span {
            display: inline-block; /* Essential for applying transforms and transitions. */
            transition-property: opacity, transform;
            will-change: opacity, transform;
            transition-timing-function: ease-out; /* Smooth transition timing */
          }

          /* Tailwind's 'purple-400' color definition. */
          .text-purple-400 {
            color: #c084fc;
          }
          /* Tailwind's 'blue-400' color definition. */
          .text-blue-400 {
            color: #60a5fa;
          }
        `}
      </style>

      {/* First section: Hero Text - Enhanced spacing and typography */}
      <AnimatedSection className="flex items-center justify-center py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
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
              " Who We Are: 
            </motion.span>
            A startup digital team blending creative hustle and data‑driven precision to build secure, scalable solutions.
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

      {/* Second section: Tailored Websites - Enhanced layout and spacing */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.2}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* "About Us" heading with lines - Enhanced visual design */}
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
              About Encryvia
            </motion.h2>
            <motion.div 
              className="flex-grow border-t border-gray-600 max-w-xs lg:max-w-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Main title for this section - Enhanced typography */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center max-w-5xl mx-auto">
            Tailored Websites That Work Harder for Your Business
          </h3>

          {/* New structure for this section: Image then Text, both centered - Enhanced spacing */}
          <div className="flex flex-col items-center gap-16 lg:gap-20">
            
            {/* Image Placeholder - Centered, larger resolution - Enhanced presentation */}
            <div className="w-full flex justify-center">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]" style={{ maxWidth: '1195px', height: '568px' }}>
                <img src="https://placehold.co/1195x568/555555/EEEEEE?text=Tailored+Websites+Image" alt="Tailored Websites Image" className="w-full h-full object-cover rounded-[130px]" />
              </div>
            </div>

            {/* Description Text - Now below the image and centered - Enhanced typography and spacing */}
            <div className="w-full max-w-4xl text-center mx-auto space-y-12">
              
              {/* Top Paragraph - Enhanced spacing */}
              <div className="space-y-8">
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
                  At Encryvia, we believe technology should solve problems—not create new ones. That's why we focus on purpose-driven solutions, crafted with precision and always keeping people at the heart of what we build—whether it's code, campaigns, or cybersecurity protocols.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
                  By deeply understanding how businesses grow and adapt in real-world markets, we design and deliver digital tools that are more than just websites, dashboards, or ads—they become engines of growth. They simplify complex workflows, protect what matters most, and scale effortlessly as your business evolves.
                </p>
              </div>

              {/* What we deliver - Two Column List - Enhanced layout */}
              <div className="space-y-8">
                <h4 className="text-xl lg:text-2xl font-bold text-white">What we deliver:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 text-left text-lg lg:text-xl text-gray-300">
                  <ul className="list-disc list-inside space-y-4">
                    <li>✅ 100% in-house team of developers, analysts, and cybersecurity experts</li>
                    <li>🧠 Decades of combined experience spanning SaaS platforms, eCommerce sites, and enterprise-grade systems</li>
                    <li>📊 Results-first mindset focused on ROI and measurable impact, not vanity metrics</li>
                    <li>🛡 Trusted by startups, SMEs, and global brands for reliable and scalable digital solutions</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-4">
                    <li>🚀 Agile approach that adapts to your business as it grows, ensuring long-term success</li>
                    <li>💡 Seamless integration of web development, cybersecurity, and marketing strategies under one roof</li>
                    <li>🤝 Commitment to transparent communication, so you're always informed at every stage</li>
                  </ul>
                </div>
              </div>

              {/* Vision & Mission - Enhanced spacing and typography */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h4 className="text-2xl lg:text-3xl font-bold">Our <span className='text-indigo-500 bold'>Vision</span></h4>
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    To empower businesses with digital products that combine security, usability, and measurable growth so they can compete confidently in any market.
                  </p>
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl lg:text-3xl font-bold">Our <span className='text-indigo-500 bold'> Mission</span></h2>
                  <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                    To deliver end-to-end digital solutions—web development, cybersecurity, and marketing—that are crafted in-house, performance-driven, and tailored to real business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Third section: Security, Speed, and Scalability - Enhanced layout */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.3}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* Title for this section with the new animation - Enhanced typography */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left mb-12 lg:mb-16 cursor-pointer font-inter">
            {animatedH3HeadingParts.map((part, partIndex) => {
              if (part.type === 'text' || part.type === 'span') {
                return (
                  <AnimatedText
                    key={partIndex}
                    text={part.content}
                    isAnimating={hoveredH3PartIndex === partIndex}
                    baseClassName={part.className || ''}
                    onMouseEnter={() => setHoveredH3PartIndex(partIndex)}
                    onMouseLeave={() => setHoveredH3PartIndex(null)}
                  />
                );
              }
              return null;
            })}
          </h3>

          {/* Content layout - Enhanced spacing and alignment */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20">
            
            {/* Description Text - Left-aligned, vertically centered - Enhanced typography */}
            <div className="flex-1 w-full text-center lg:text-left">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
                Modern websites face real-world pressure—from performance expectations to
                security threats. We code with purpose and precision, using the right tech
                stack to ensure your site runs fast, stays secure, and grows with your
                business.
              </p>
            </div>

            {/* Image/Card Placeholder - Maintained size and corner radius, right-aligned - Enhanced presentation */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden transition-transform duration-500 hover:scale-105" style={{ maxWidth: '559px', height: '568px' }}>
                <img src="https://placehold.co/559x568/555555/EEEEEE?text=Code+Security" alt="Code Security" className="w-full h-full object-cover rounded-[130px]" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Fourth section: A Smarter Development Process - Enhanced layout */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.4}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* Title for this section - Enhanced typography */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left mb-12 lg:mb-16">
            A Smarter Development Process That Keeps You In the Loop
          </h3>

          {/* Content layout - Enhanced spacing and alignment */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20">
            
            {/* Image Placeholder - Left-aligned, original size/radius - Enhanced presentation */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden transition-transform duration-500 hover:scale-105" style={{ maxWidth: '559px', height: '568px' }}>
                <img src="https://placehold.co/559x568/555555/EEEEEE?text=Development+Process" alt="Development Process" className="w-full h-full object-cover rounded-[130px]" />
              </div>
            </div>

            {/* Description Text - Right-aligned and vertically centered - Enhanced typography and spacing */}
            <div className="flex-1 w-full text-center lg:text-right space-y-8">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300">
                No mystery, no black box. We run a lean, transparent development cycle
                with built-in checkpoints so you stay in control at every stage. From
                kick-off to post-launch support, you're part of the process—and we're
                accountable for every click, line, and deadline.
              </p>
              
              <div className="space-y-6">
                <h4 className="text-xl lg:text-2xl font-bold text-white">What to expect:</h4>
                <ul className="list-disc list-inside text-lg lg:text-xl text-gray-300 space-y-4 text-center lg:text-right">
                  <li>Weekly progress shared dashboards</li>
                  <li>Clear timelines, no vague deliveries</li>
                  <li>CMS training for your team</li>
                  <li>Post-launch support, updates, and optimization packs</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* New section for the large image placeholder above "Extraordinary digital products" - Enhanced presentation */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 relative z-10" delay={0.5}>
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
        >
          <div className="w-full flex justify-center">
            <div className="bg-gray-800 rounded-[140px] p-6 shadow-2xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden transition-transform duration-500 hover:scale-[1.02]" style={{ maxWidth: '1203px', height: '630px' }}>
              <img src="https://placehold.co/1203x630/555555/EEEEEE?text=Extraordinary+Products+Image" alt="Extraordinary Products Image Placeholder" className="w-full h-full object-cover rounded-[130px]" />
            </div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Fifth section: Extraordinary Digital Products Cards - Enhanced layout and spacing */}
      <AnimatedSection className="py-20 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8" delay={0.6}>
        <motion.div 
          className="max-w-7xl mx-auto space-y-16 lg:space-y-20"
          variants={containerVariants}
        >
          
          {/* Section header - Enhanced typography */}
          <div className="space-y-8">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-left">
              Extraordinary digital products
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-5xl">
              We play to our strengths: For over years we've been ideating, creating and
              shipping wonderful things on the internet.
            </p>
          </div>

          {/* Cards grid - Enhanced spacing and presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-4">
                <LightbulbIcon className="w-8 h-8 text-indigo-400" />
                <h4 className="text-2xl lg:text-3xl font-bold">Vision‑driven</h4>
              </div>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                Great Technology, Designed to Grow — We build digital solutions that grow businesses.
                Every plan, line of code, and campaign is tailored to help you simplify, secure, and scale.
              </p>
            </motion.div>

            {/* Card 2 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-4">
                <LayoutGridIcon className="w-8 h-8 text-indigo-400" />
                <h4 className="text-2xl lg:text-3xl font-bold">Problem‑solving Focus</h4>
              </div>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                Solving Real Business Problems — Technology should solve, not cause problems.
                That's why we offer robust security, transparent solutions, and campaigns that deliver results.
              </p>
            </motion.div>

            {/* Card 3 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-4">
                <NetworkIcon className="w-8 h-8 text-indigo-400" />
                <h4 className="text-2xl lg:text-3xl font-bold">Human + Data</h4>
              </div>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                Where Data and Human Insight Converge — From cybersecurity audits to ROI-focused marketing,
                we blend data with creativity to build solutions that work better for your business.
              </p>
            </motion.div>

            {/* Card 4 - Enhanced styling */}
            <motion.div 
              className="bg-gray-800 rounded-2xl p-8 lg:p-10 shadow-2xl flex flex-col items-start space-y-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-4">
                <LayersIcon className="w-8 h-8 text-indigo-400" />
                <h4 className="text-2xl lg:text-3xl font-bold">Your Growth Partner</h4>
              </div>
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                Not just an agency — EncryVia acts as an extension of your team.
                We build, protect, and grow with transparency, speed, and your success in mind.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
}

export default OurTeam;
