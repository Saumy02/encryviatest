// src/components/Project/StrategicPartners.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export const partnersList = [
  {
    name: "SKS Infosystems",
    initials: "SI",
    logo: "/image/sks-logo.webp",
    category: "Cybersecurity & IT Partner",
    icon: ShieldCheck,
    highlight: "Infrastructure Hardening & Security Audits",
    gradient: "from-purple-900/40 via-indigo-900/30 to-black/60",
    borderColor: "border-purple-500/40"
  },
  {
    name: "ForkSkill",
    initials: "FS",
    logo: "/image/forkskill-logo.webp",
    category: "EdTech & Skill Engineering",
    icon: GraduationCap,
    highlight: "Technical Upskilling & Talent Engineering Hub",
    gradient: "from-indigo-900/40 via-blue-900/30 to-black/60",
    borderColor: "border-indigo-500/40"
  },
  {
    name: "MyStikWrap",
    initials: "MW",
    logo: "/image/mystikwrap-logo.webp",
    category: "Branding & Visual Engineering",
    icon: Sparkles,
    highlight: "Creative Design Systems & Visual Brand Architecture",
    gradient: "from-pink-900/40 via-purple-900/30 to-black/60",
    borderColor: "border-pink-500/40"
  },
  {
    name: "EcomBizGrow",
    initials: "EB",
    logo: "/image/ecombizgrow-logo.webp",
    logoBg: "bg-black/90 border border-white/20",
    category: "E-Commerce Growth Partner",
    icon: Building2,
    highlight: "Storefront Scaling & High-Conversion E-Commerce",
    gradient: "from-emerald-900/40 via-teal-900/30 to-black/60",
    borderColor: "border-emerald-500/40"
  }
];

const StrategicPartners = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-6 sm:py-8 px-2 sm:px-4">
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Partners & Alliances</span>
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto mt-2 leading-relaxed">
          Empowering next-generation digital ecosystems alongside certified technology leaders and enterprise innovators.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {partnersList.map((partner, idx) => {
          const Icon = partner.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`p-6 rounded-3xl bg-gradient-to-br ${partner.gradient} border ${partner.borderColor} backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {partner.logo ? (
                    <div className={`w-12 h-12 rounded-2xl ${partner.logoBg || 'bg-white'} flex items-center justify-center p-1.5 shadow-md shadow-purple-500/10 overflow-hidden`}>
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-center font-extrabold text-white text-base shadow-inner">
                      {partner.initials}
                    </div>
                  )}
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    <span>Verified</span>
                  </span>
                </div>

                <span className="text-xs font-bold text-[rgb(168,85,247)] uppercase tracking-wider block mb-1">
                  {partner.category}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">
                  {partner.name}
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed mb-4">
                  {partner.highlight}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center space-x-1.5 text-xs text-[rgb(168,85,247)] font-semibold">
                <Icon size={14} />
                <span>EncryVia Strategic Partner</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StrategicPartners;
