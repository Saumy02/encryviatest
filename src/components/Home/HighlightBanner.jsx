

// import React, { useState } from 'react';

// const HighlightBanner = ({ slides }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   if (!slides || !Array.isArray(slides) || slides.length === 0) {
//     return null;
//   }

//   return (
//     <section className="relative py-16 px-4 text-white flex flex-col items-center overflow-hidden">
//       <div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto pb-4">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`flex flex-col items-center text-center p-4 flex-shrink-0 transition-all duration-300 ease-in-out transform ${
//               hoveredIndex === index ? 'scale-105' : hoveredIndex !== null ? 'scale-95' : ''
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div
//               className={`rounded-full overflow-hidden flex items-center justify-center bg-gray-800 shadow-xl mb-4 transition-all duration-300 ease-in-out ${
//                 hoveredIndex === index
//                   ? 'w-[280px] h-[440px] sm:w-[288px] sm:h-[456px]'
//                   : 'w-[200px] h-[320px] sm:w-[238px] sm:h-[377px]'
//               }`}
//             >
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://placehold.co/288x456/2A2A2A/FFFFFF?text=Image";
//                 }}
//               />
//             </div>
//             <p className="text-xl font-semibold">{slide.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HighlightBanner;



import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HighlightBanner = ({ slides }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Animation variants for scroll reveal + zoom pop-in
  const cardVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: (i) => ({
      scale: [1.2, 1], // Zoom in and settle
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  if (!slides || !Array.isArray(slides) || slides.length === 0) return null;

  return (
    <section
      ref={ref}
      className="relative py-16 px-4 text-white flex flex-col items-center overflow-hidden"
    >
      <div className="flex flex-wrap justify-center items-start gap-8 max-w-7xl mx-auto pb-4">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 flex-shrink-0"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            whileHover={{ scale: 1.08 }} // 👈 Hover zoom-in
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <div className="rounded-full overflow-hidden flex items-center justify-center bg-gray-800 shadow-xl mb-4 w-[238px] h-[377px]">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/288x456/2A2A2A/FFFFFF?text=Image';
                }}
              />
            </div>
            <p className="text-xl font-semibold">{slide.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightBanner;


