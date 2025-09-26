import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index, totalServices }) => {
  const isOdd = index % 2 !== 0;

  // Variants for consistent animations across all cards
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98, filter: 'blur(6px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 120, damping: 18, delay: 0.08 + i * 0.08 }
    })
  };

  const imageVariants = {
    initial: { opacity: 0, x: isOdd ? 40 : -40, rotate: isOdd ? 2 : -2 },
    enter: { opacity: 1, x: 0, rotate: 0, transition: { type: 'spring', stiffness: 180, damping: 20 } }
  };

  const textVariants = {
    initial: { opacity: 0, x: isOdd ? -30 : 30 },
    enter: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 180, damping: 20, delay: 0.1 } }
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-center w-full my-10 md:my-20 group`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      custom={index}
    >
      <div className={`flex flex-col md:flex-row items-center w-full ${isOdd ? 'md:flex-row-reverse' : ''}`}>
        {/* Text */}
        <motion.div
          className={`md:w-5/12 flex flex-col items-center text-center md:items-start p-4 rounded-lg ${isOdd ? 'md:text-right md:items-end' : 'md:text-left'}`}
          initial="initial"
          whileInView="enter"
          viewport={{ once: true, amount: 0.4 }}
          variants={textVariants}
        >
          <motion.h3 className="text-2xl font-bold mb-2" whileHover={{ scale: 1.03 }}>
            {service.title}
          </motion.h3>
          <motion.p className="text-gray-400 text-sm mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            {service.description}
          </motion.p>
          <motion.button
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.15)' }}
            whileTap={{ scale: 0.97 }}
          >
            View More
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div className={`md:w-5/12 flex justify-center p-4`} initial="initial" whileInView="enter" viewport={{ once: true, amount: 0.4 }} variants={imageVariants}>
          <motion.img
            src={service.imageUrl}
            alt={service.title}
            className="rounded-2xl shadow-lg w-full max-w-xs h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x200/0A0A0A/FFFFFF?text=Image+Error'; }}
            whileHover={{ scale: 1.03, rotate: 0.5 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          />
        </motion.div>
      </div>

      {/* Timeline dots and lines (unchanged) */}
      <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-700"></div>
        {index % 2 === 0 ? (
          <div className="absolute right-full w-60 h-1 bg-gray-700 top-1/2 transform -translate-y-1/2 -mr-2"></div>
        ) : (
          <div className="absolute left-full w-60 h-1 bg-gray-700 top-1/2 transform -translate-y-1/2 -ml-2"></div>
        )}
      </div>
      <div className="md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center h-full">
        {index > 0 && <div className="absolute top-0 w-1 h-[calc(50%_-_12px)] bg-gray-700"></div>}
        <div className="w-6 h-6 bg-white rounded-full border-4 border-gray-700 z-10"></div>
        {index < totalServices - 1 && <div className="absolute bottom-0 w-1 h-[calc(50%_-_12px)] bg-gray-700"></div>}
      </div>
    </motion.div>
  );
};

export default ServiceCard;