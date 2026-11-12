// src/pages/ClientsAndProjects.jsx
import React, { useState, useMemo, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  ShoppingBag, 
  Globe, 
  Sparkles, 
  ExternalLink,
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';
import SEO from '../components/SEO';
import projectsData from '../data/clientsProjects.json';
import ClientsSection from '../components/Home/ClientsSection';
import StrategicPartners from '../components/Project/StrategicPartners';

const ConnectNow = lazy(() => import('../components/Home/ConnectNow'));

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Web Application':
      return Layers;
    case 'Web Development':
      return Code2;
    case 'Cyber Security':
      return ShieldCheck;
    case 'E-commerce':
      return ShoppingBag;
    default:
      return Globe;
  }
};

const getCategoryBadgeClass = (category) => {
  switch (category) {
    case 'Web Application':
      return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
    case 'Web Development':
      return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
    case 'Cyber Security':
      return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
    case 'E-commerce':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    default:
      return 'bg-gray-500/15 text-gray-300 border-gray-500/30';
  }
};

const ClientsAndProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filterCategories = [
    'All Projects',
    'Web Application',
    'Web Development',
    'Cyber Security',
    'E-commerce',
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All Projects') {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEO
        title="Clients & Projects | EncryVia Portfolio & Builds"
        description="Explore five recent builds across web applications, franchise platforms, e-commerce, and cybersecurity. Detailed client showcases, technical architecture, and results."
        keywords="EncryVia projects, our clients, client portfolio, web application development, franchise directory website, cybersecurity portfolio, e-commerce development"
        ogUrl="https://encryvia.com/clients-and-projects"
      />

      <div className="min-h-screen text-white font-sans relative pt-10 sm:pt-14 pb-20 overflow-x-hidden w-full max-w-full bg-transparent">
        {/* Ambient Glows */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[40%] -left-32 w-[420px] h-[420px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-40 -right-32 w-[420px] h-[420px] bg-purple-700/10 blur-[140px] rounded-full pointer-events-none -z-10" />

        {/* Page Hero Header */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight break-words px-2"
          >
            Clients & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Recent builds across web applications, franchise platforms, e-commerce, and cybersecurity — engineered alongside certified technology partners to deliver measurable real-world outcomes.
          </motion.p>
        </div>

        {/* 1. TOP CLIENTS & PARTNERS MARQUEE SECTION */}
        <div className="mb-12 sm:mb-16">
          <ClientsSection />
        </div>

        {/* 2. STRATEGIC ALLIANCES PARTNERS GRID */}
        <div className="mb-16 sm:mb-20">
          <StrategicPartners />
        </div>

        {/* 3. RECENT FEATURED BUILDS & CLIENT CASE STUDIES HEADER */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Featured Builds</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A granular look into which build was crafted for each client, featuring technical stacks, dual-database models, and verified project milestones.
          </p>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8"
          >
            {filterCategories.map((category) => {
              const count =
                category === 'All Projects'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === category).length;

              const isSelected = activeFilter === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-[rgb(168,85,247)] text-white border-purple-400/80 shadow-lg shadow-purple-500/30 scale-105'
                      : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12 sm:space-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const CategoryIcon = getCategoryIcon(project.category);
                const isEven = index % 2 === 1;

                return (
                  <motion.article
                    layout
                    key={project.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-3xl bg-white/[0.03] border border-white/15 hover:border-purple-500/40 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Ambient Glow Behind Card */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none rounded-full transition-opacity duration-500 group-hover:opacity-30" />

                    <div
                      className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 ${
                        isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                      }`}
                    >
                      {/* Image / Reference Visual Section */}
                      <div className="lg:w-1/2 w-full flex flex-col justify-center">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 group/img bg-[#0e0824] shadow-xl">
                          {/* Ambient Glow on Image */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-pink-600/30 rounded-2xl blur-sm opacity-30 group-hover/img:opacity-60 transition duration-500 pointer-events-none" />

                          {/* Reference Image */}
                          <div className="relative overflow-hidden aspect-[16/10] w-full bg-gradient-to-br from-[#120a2e] to-[#070314]">
                            <img
                              src={project.imageUrl}
                              alt={project.imageAlt || project.title}
                              className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 ease-out"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  'https://placehold.co/1200x750/140a33/c084fc?text=' +
                                  encodeURIComponent(project.title);
                              }}
                            />
                          </div>
                        </div>

                        {/* Badges / Tags: Client & Category below Reference Image */}
                        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-3.5">
                          {/* Client Badge */}
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-semibold shadow-sm">
                            {project.clientLogo ? (
                              <span className={`w-4 h-4 rounded-md ${project.clientLogoBg || 'bg-white'} flex items-center justify-center p-0.5 overflow-hidden flex-shrink-0 shadow-sm`}>
                                <img src={project.clientLogo} alt={project.client} className="w-full h-full object-contain" />
                              </span>
                            ) : (
                              <Building2 size={14} className="text-purple-400" />
                            )}
                            <span>Client: <strong className="text-white font-bold">{project.client}</strong></span>
                          </div>

                          {/* Category Badge */}
                          <div
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold ${getCategoryBadgeClass(
                              project.category
                            )}`}
                          >
                            <CategoryIcon size={14} />
                            <span>{project.category}</span>
                          </div>
                        </div>

                        {/* Project Timeline & Meta Info Below Image */}
                        {project.timeline && (
                          <div className="mt-3.5 grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/10 text-center text-xs text-gray-300">
                            <div>
                              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                                Started
                              </span>
                              <span className="font-semibold text-white mt-0.5 block truncate">
                                {project.timeline.started}
                              </span>
                            </div>
                            <div className="border-x border-white/10 px-1">
                              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                                Duration
                              </span>
                              <span className="font-semibold text-purple-300 mt-0.5 block truncate">
                                {project.timeline.duration}
                              </span>
                            </div>
                            <div>
                              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">
                                Completed
                              </span>
                              <span className="font-semibold text-emerald-400 mt-0.5 block truncate">
                                {project.timeline.completed}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-1/2 w-full space-y-5 text-left flex flex-col justify-between">
                        <div className="space-y-4">
                          {/* Project Title */}
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                            {project.title}
                          </h2>

                          {/* Tagline / Subtitle */}
                          {project.tagline && (
                            <p className="text-sm sm:text-base font-medium text-purple-300 italic">
                              "{project.tagline}"
                            </p>
                          )}

                          {/* Description */}
                          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Key Features */}
                          {project.keyFeatures && project.keyFeatures.length > 0 && (
                            <div className="pt-2">
                              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-300 mb-2.5 flex items-center gap-1.5">
                                <CheckCircle2 size={15} className="text-purple-400" />
                                Key Features & Deliverables:
                              </h3>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300">
                                {project.keyFeatures.map((feature, fIdx) => (
                                  <li key={fIdx} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Technologies Used Pills */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="pt-3 border-t border-white/10">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                              Technologies Used:
                            </span>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-200 hover:border-purple-500/50 hover:bg-purple-900/20 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Connect / Contact Banner */}
          <div className="mt-14 sm:mt-20">
            <Suspense fallback={null}>
              <ConnectNow compact />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientsAndProjects;
