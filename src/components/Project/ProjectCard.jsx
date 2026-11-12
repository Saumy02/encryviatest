import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    direction,
    category,
    technologies,
    liveUrl,
    githubUrl,
    completedDate
  } = project;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.02,
      y: -4,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div
      className="w-full max-w-7xl mx-auto"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`flex flex-col ${direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
        
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          whileHover="hover"
          variants={imageVariants}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-gray-700/50 group-hover:border-indigo-500/40 transition-colors duration-300">
              <div className="relative rounded-xl overflow-hidden bg-gray-900/60 shadow-inner">
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  className="w-full h-auto block rounded-xl object-contain transition-transform duration-500 ease-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/4F46E5/ffffff?text=Project+Image";
                  }}
                />
                
                {/* Subtle sheen/gradient on hover that does NOT obscure the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

                {/* Overlay with quick actions - ONLY rendered when liveUrl exists */}
                {liveUrl && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium shadow-lg transition-colors duration-300"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </motion.a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: direction === 'right' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
          {/* Category & Client Badge */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1.5">
              <Tag size={16} className="text-indigo-400" />
              <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30">
                {category}
              </span>
            </div>
            {project.client && (
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
                Client: {project.client}
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {description}
          </motion.p>

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50 hover:bg-gray-600/50 hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-semibold"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ExternalLink size={18} />
                View Project
              </motion.a>
            )}
          </motion.div>

          {/* Completion Date */}
          {completedDate && (
            <motion.div
              className="flex items-center gap-2 pt-2 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Calendar size={16} />
              <span>Completed: {completedDate}</span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
