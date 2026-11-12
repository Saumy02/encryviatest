import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code2, Sparkles, User, Briefcase, Camera } from 'lucide-react';

const teamMembers = [
  // Top Row (3 Members)
  {
    name: "Prince Thakur",
    role: "CEO & CMO",
    category: "Executive Leadership & Growth",
    experienceTag: "Executive Leadership",
    badgeColor: "from-purple-500 to-indigo-600",
    rolePillBg: "bg-purple-950/60 text-purple-300 border-purple-500/40",
    accentGlow: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
    image: "/image/team/prince-thakur.webp",
    initials: "PT",
    bio: "Leads EncryVia's executive direction, cross-channel marketing architecture, and global brand positioning. Combines deep expertise in growth marketing, client acquisition strategy, and executive management to drive scalable business velocity."
  },
  {
    name: "Rahul Kumar",
    role: "MD & Co-Founder",
    category: "Operations & Governance",
    experienceTag: "Co-Founder & Strategy",
    badgeColor: "from-amber-500 to-orange-600",
    rolePillBg: "bg-amber-950/60 text-amber-300 border-amber-500/40",
    accentGlow: "group-hover:border-amber-500/50 group-hover:shadow-amber-500/10",
    image: "/image/team/rahul-kumar.webp",
    initials: "RK",
    bio: "Oversees corporate governance, organizational strategy, and strategic industry partnerships. Focuses on enterprise client success, operational excellence, and steering EncryVia's multidisciplinary digital service delivery."
  },
  {
    name: "Saumy Bharti",
    role: "CISO",
    category: "Cybersecurity & Defense",
    experienceTag: "Cyber Defense & WAPT",
    badgeColor: "from-emerald-500 to-teal-600",
    rolePillBg: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40",
    accentGlow: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
    image: "/image/team/saumy-bharti.webp",
    initials: "SB",
    bio: "Directs enterprise cybersecurity governance, offensive penetration testing (WAPT), zero-trust infrastructure defense, and compliance frameworks. Ensures military-grade security posture across all client platforms."
  },
  // Bottom Row (2 Members)
  {
    name: "Ajay Pratap Singh",
    role: "CTO (Development)",
    category: "Technology & Engineering",
    experienceTag: "Core Architecture",
    badgeColor: "from-blue-500 to-cyan-600",
    rolePillBg: "bg-blue-950/60 text-blue-300 border-blue-500/40",
    accentGlow: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
    image: "/image/team/ajay-pratap-singh.webp",
    initials: "AS",
    bio: "Leads full-stack software engineering, cloud systems architecture, and core development roadmaps. Spearheads the development unit to engineer hardened, high-performance web applications and enterprise platforms."
  },
  {
    name: "Rohan Kumar",
    role: "ATO (Development)",
    category: "Technology Operations & Delivery",
    experienceTag: "Agile Operations",
    badgeColor: "from-violet-500 to-purple-600",
    rolePillBg: "bg-violet-950/60 text-violet-300 border-violet-500/40",
    accentGlow: "group-hover:border-violet-500/50 group-hover:shadow-violet-500/10",
    image: "/image/team/rohan-kumar.webp",
    initials: "RK",
    bio: "Drives advanced technology operations, frontend performance engineering, and agile sprint execution. Focuses on seamless code integration, deployment workflows, and building ultra-responsive user interfaces."
  }
];

// Reusable Team Member Card Component
const TeamCard = ({ member }) => {
  const [imageError, setImageError] = useState(false);
  const hasValidImage = member.image && !imageError;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex flex-col justify-between h-full rounded-3xl bg-[#0c0d21]/80 hover:bg-[#0f1129]/95 backdrop-blur-xl border border-white/10 ${member.accentGlow} p-5 sm:p-6 transition-all duration-300 shadow-xl`}
    >
      {/* Card Header & Photo Area */}
      <div>
        <div className="relative w-full aspect-[4/4.7] rounded-2xl overflow-hidden bg-gradient-to-b from-[#181a3d] via-[#10122c] to-[#08091a] border border-white/10 mb-5 flex items-center justify-center">
          {/* Actual Photo (if provided) OR High-Fidelity Modern Placeholder */}
          {hasValidImage ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
              {/* Subtle tech background circle glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)]" />
              
              {/* Initials Monogram Avatar */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-white/[0.05] to-white/[0.12] border-2 border-white/20 flex flex-col items-center justify-center shadow-inner group-hover:border-purple-400/50 transition-colors duration-300 mb-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-wider">
                  {member.initials}
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-widest font-mono">
                  EncryVia
                </span>
              </div>

              {/* Photo placeholder hint */}
              <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-gray-400 font-mono">
                <Camera className="w-3 h-3 text-gray-400" />
                <span>Photo Placeholder</span>
              </div>
            </div>
          )}

          {/* Bottom gradient fade for smooth transition to card body */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0c0d21] to-transparent pointer-events-none" />
        </div>

        {/* Member Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-white text-center tracking-tight mb-2">
          {member.name}
        </h3>

        {/* Member Role Pill Badge */}
        <div className="flex justify-center mb-4">
          <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-semibold border ${member.rolePillBg} tracking-wide`}>
            {member.role}
          </span>
        </div>

        {/* Normal Experience & Role Bio Line */}
        <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

const ManagementTeam = () => {
  const topRow = teamMembers.slice(0, 3);
  const bottomRow = teamMembers.slice(3, 5);

  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-500">Team</span>
          </h2>

          {/* Subtitle Paragraph */}
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            EncryVia's leadership team brings together seasoned engineering, cybersecurity defense, and digital growth specialists committed to building hardened, scalable, and high-performance digital products.
          </p>
        </div>

        {/* Row 1: 3 Cards (Prince Thakur, Rahul Kumar, Saumy Bharti) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {topRow.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        {/* Row 2: 2 Cards Centered (Ajay Pratap Singh, Rohan Kumar) */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8 max-w-6xl mx-auto mt-6 lg:mt-8">
          {bottomRow.map((member) => (
            <div key={member.name} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.333rem)]">
              <TeamCard member={member} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManagementTeam;
