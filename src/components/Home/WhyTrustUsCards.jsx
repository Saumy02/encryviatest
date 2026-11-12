import React from 'react';
import { motion } from 'framer-motion';

const cardsData = [
  {
    title: "Growth-First Mindset",
    description: "Markets shift, and so do your customers. Our strategies are built to move with you, not lock you into a plan that stops making sense in six months."
  },
  {
    title: "Empathy With Clients",
    description: "Before we build anything, we listen. Your challenges aren't generic, so your solution shouldn't be either."
  },
  {
    title: "We've Been Where You Are",
    description: "EncryVia started by solving the exact problems early-stage founders face that's shaped everything about how we work today."
  },
  {
    title: "Scaling Up, Not Just Launching",
    description: "Launch day is exciting, but it's day one, not the finish line. We stick around to help you grow past it."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const WhyTrustUsCards = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Why businesses choose us for growth
        </h2>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
      >
        {cardsData.map((card, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default React.memo(WhyTrustUsCards);
