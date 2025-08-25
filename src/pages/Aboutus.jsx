
import React, { useState, useRef, useEffect } from 'react';
// import TeamMemberCard from '../components/TeamMemberCard'; Isko import nhi kiya hai

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
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-indigo-900">
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

      {/* First section: Hero Text */}
      <section className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 min-h-[50vh]">
        <div className="relative z-10 max-w-4xl mx-auto text-left">
          {/* H1 Title reverted to original structure */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-indigo-500">" Who We Are: </span> A startup digital team blending creative hustle and data‑driven precision to build secure, scalable solutions.
            <span className="text-indigo-500">"</span>
          </h1>
        </div>
      </section>

      {/* Second section: Tailored Websites */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* "About Us" heading with lines */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow border-t border-gray-600"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mx-4 text-blue-400">About Encryvia</h2>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Main title for this section */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center mb-12 max-w-3xl mx-auto">
            Tailored Websites That Work Harder for Your Business
          </h3>

          {/* New structure for this section: Image then Text, both centered */}
          <div className="flex flex-col items-center gap-12">
            {/* Image Placeholder - Centered, larger resolution */}
            <div className="w-full flex justify-center">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden" style={{ maxWidth: '1195px', height: '568px' }}>
                <img src="https://placehold.co/1195x568/555555/EEEEEE?text=Tailored+Websites+Image" alt="Tailored Websites Image" className="w-full h-full object-cover rounded-[130px]" />
              </div>
            </div>

            {/* Description Text - Now below the image and centered */}
     <div className="w-full max-w-3xl text-center mx-auto">
  {/* Top Paragraph */}
  <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
    At Encryvia, we believe technology should solve problems—not create new ones. That’s why we focus on purpose-driven solutions, crafted with precision and always keeping people at the heart of what we build—whether it’s code, campaigns, or cybersecurity protocols.
    <br /><br />
    By deeply understanding how businesses grow and adapt in real-world markets, we design and deliver digital tools that are more than just websites, dashboards, or ads—they become engines of growth. They simplify complex workflows, protect what matters most, and scale effortlessly as your business evolves.
  </p>

  {/* What we deliver - Two Column List */}
  <h4 className="text-xl font-bold text-white mb-3">What we deliver:</h4>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-lg text-gray-300 mb-8">
    <ul className="list-disc list-inside space-y-2">
      <li>✅ 100% in-house team of developers, analysts, and cybersecurity experts</li>
      <li>🧠 Decades of combined experience spanning SaaS platforms, eCommerce sites, and enterprise-grade systems</li>
      <li>📊 Results-first mindset focused on ROI and measurable impact, not vanity metrics</li>
      <li>🛡 Trusted by startups, SMEs, and global brands for reliable and scalable digital solutions</li>
    </ul>
    <ul className="list-disc list-inside space-y-2">
      <li>🚀 Agile approach that adapts to your business as it grows, ensuring long-term success</li>
      <li>💡 Seamless integration of web development, cybersecurity, and marketing strategies under one roof</li>
      <li>🤝 Commitment to transparent communication, so you’re always informed at every stage</li>
    </ul>
  </div>

  {/* Vision & Mission */}
  <div className="mt-10 space-y-6">
    <div>
      <h4 className="text-2xl font-bold">Our <span className='text-indigo-500 bold'>Vision</span></h4>
      <p className="text-lg text-gray-300">
        To empower businesses with digital products that combine security, usability, and measurable growth so they can compete confidently in any market.
      </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold ">Our <span className='text-indigo-500 bold'> Mission</span></h2>
      <p className="text-lg text-gray-300">
        To deliver end-to-end digital solutions—web development, cybersecurity, and marketing—that are crafted in-house, performance-driven, and tailored to real business needs.
      </p>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Third section: Security, Speed, and Scalability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title for this section with the new animation */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left mb-12 cursor-pointer font-inter">
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

          {/* Adjusted to lg:items-center for vertical middle alignment of items */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
            {/* Description Text - Left-aligned, vertically centered */}
            <div className="flex-1 w-full text-center lg:text-left">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                Modern websites face real-world pressure—from performance expectations to
                security threats.  We code with purpose and precision, using the right tech
                stack to ensure your site runs fast, stays secure, and grows with your
                business.
              </p>
            </div>

            {/* Image/Card Placeholder - Maintained size and corner radius, right-aligned */}
            <div className="flex-1 w-full flex justify-center lg:justify-end">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden" style={{ maxWidth: '559px', height: '568px' }}>
                <img src="https://placehold.co/559x568/555555/EEEEEE?text=Code+Security" alt="Code Security" className="w-full h-full object-cover rounded-[130px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth section: A Smarter Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title for this section */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left mb-12">
            A Smarter Development Process That Keeps You In the Loop
          </h3>

          {/* Reverted to side-by-side layout, image left, text right, text content middle-right */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
            {/* Image Placeholder - Left-aligned, original size/radius */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden" style={{ maxWidth: '559px', height: '568px' }}>
                <img src="https://placehold.co/559x568/555555/EEEEEE?text=Development+Process" alt="Development Process" className="w-full h-full object-cover rounded-[130px]" />
              </div>
            </div>

            {/* Description Text - Right-aligned and vertically centered */}
            <div className="flex-1 w-full text-center lg:text-right">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
                No mystery, no black box.  We run a lean, transparent development cycle
                with built-in checkpoints so you stay in control at every stage.  From
                kick-off to post-launch support, you're part of the process—and we're
                accountable for every click, line, and deadline.
              </p>
              <h4 className="text-xl font-bold text-white mb-3">What to expect:</h4>
              <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 text-center lg:text-right">
                <li>Weekly progress shared dashboards</li>
                <li>Clear timelines, no vague deliveries</li>
                <li>CMS training for your team</li>
                <li>Post-launch support, updates, and optimization packs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New section for the large image placeholder above "Extraordinary digital products" */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="w-full flex justify-center mb-16 mt-8">
            <div className="bg-gray-800 rounded-[140px] p-6 shadow-xl w-full flex items-center justify-center text-gray-400 text-lg overflow-hidden" style={{ maxWidth: '1203px', height: '630px' }}>
              <img src="https://placehold.co/1203x630/555555/EEEEEE?text=Extraordinary+Products+Image" alt="Extraordinary Products Image Placeholder" className="w-full h-full object-cover rounded-[130px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Fifth section: Extraordinary Digital Products Cards */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left mb-6">
      Extraordinary digital products
    </h3>
    <p className="text-lg sm:text-xl leading-relaxed text-gray-300 max-w-4xl mb-12">
      We play to our strengths: For over years we've been ideating, creating and
      shipping wonderful things on the internet.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <LightbulbIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Vision‑driven</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Great Technology, Designed to Grow — We build digital solutions that grow businesses.
          Every plan, line of code, and campaign is tailored to help you simplify, secure, and scale.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <LayoutGridIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Problem‑solving Focus</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Solving Real Business Problems — Technology should solve, not cause problems.
          That’s why we offer robust security, transparent solutions, and campaigns that deliver results.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <NetworkIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Human + Data</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Where Data and Human Insight Converge — From cybersecurity audits to ROI-focused marketing,
          we blend data with creativity to build solutions that work better for your business.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-xl flex flex-col items-start">
        <div className="flex items-center gap-3">
          <LayersIcon className="w-6 h-6 text-indigo-400" />
          <h4 className="text-2xl font-bold">Your Growth Partner</h4>
        </div>
        <p className="text-gray-300 text-lg mt-3">
          Not just an agency — EncryVia acts as an extension of your team.
          We build, protect, and grow with transparency, speed, and your success in mind.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  
  );
}

export default OurTeam;
