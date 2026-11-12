import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const clientsData = [
  { 
    name: 'SKS Infosystems', 
    initials: 'SI', 
    logo: '/image/sks-logo.webp',
    role: 'Cybersecurity & IT Partner',
    stat: '100% Zero-Trust Ready',
    tag: 'Enterprise Security'
  },
  { 
    name: 'Tacitine', 
    initials: 'TC', 
    logo: '/image/tacitine-logo.webp',
    role: 'Next-Gen Firewall & Network Security',
    stat: '14,000+ Enterprises Protected',
    tag: 'Network Security'
  },
  { 
    name: 'Hindustan Franchise', 
    initials: 'HF', 
    logo: '/image/hindustan-franchise-logo.webp',
    role: 'Retail & Franchise Network',
    stat: 'Pan-India Reach',
    tag: 'Franchise Network'
  },
  { 
    name: 'ForkSkill', 
    initials: 'FS', 
    logo: '/image/forkskill-logo.webp',
    role: 'EdTech & Technical Upskilling',
    stat: 'Skill Engineering',
    tag: 'EdTech Talent'
  },
  { 
    name: 'MystikWrap', 
    initials: 'MW', 
    logo: '/image/mystikwrap-logo.webp',
    role: 'Automotive & Luxury Branding',
    stat: 'Design Excellence',
    tag: 'Automotive Brand'
  },
  { 
    name: 'EcomBizGrow', 
    initials: 'EB', 
    logo: '/image/ecombizgrow-logo.webp',
    logoBg: 'bg-black/90 border border-white/20',
    role: 'E-Commerce Optimization',
    stat: 'High-ROAS Scaling',
    tag: 'E-Commerce'
  },
  { 
    name: 'DrugIntelHub', 
    initials: 'DI', 
    logo: '/image/drugintelhub-logo.webp',
    role: 'Healthcare & AI Intelligence',
    stat: '140% Organic Growth',
    tag: 'AI Pharma'
  },
  { 
    name: 'Red Paw', 
    initials: 'RP', 
    logo: '/image/redpaw-logo.webp',
    role: 'Pet Care & NGO Platform',
    stat: 'Community Impact',
    tag: 'Community NGO'
  }
];

const ClientsSection = () => {
  // Duplicate array for infinite seamless scroll
  const marqueeClients = [...clientsData, ...clientsData];

  return (
    <div className="w-full max-w-7xl mx-auto text-white relative">
      <style>{`
        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          animation: marqueeLeftToRight 38s linear infinite;
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Moving Marquee Track - Left to Right */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center space-x-4 sm:space-x-6 w-max animate-marquee-ltr py-2">
          {marqueeClients.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[270px] sm:w-[310px] p-5 sm:p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
            >
              {/* Top Row: Logo / Initials + Tag */}
              <div className="flex items-center justify-between mb-3">
                {client.logo ? (
                  <div className={`w-12 h-12 rounded-xl ${client.logoBg || 'bg-white'} flex items-center justify-center p-1.5 shadow-md shadow-purple-500/10 group-hover:scale-105 transition-transform overflow-hidden flex-shrink-0`}>
                    <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center font-extrabold text-white text-base shadow-inner group-hover:border-purple-500/40 transition-colors flex-shrink-0">
                    {client.initials}
                  </div>
                )}

                <span className="text-[10px] font-bold text-[rgb(168,85,247)] bg-purple-500/15 border border-purple-500/25 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {client.tag}
                </span>
              </div>

              {/* Center: Client Name & Role */}
              <div className="my-1">
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[rgb(168,85,247)] transition-colors truncate">
                  {client.name}
                </h4>
                <p className="text-xs text-gray-400 font-medium line-clamp-1 mt-0.5">
                  {client.role}
                </p>
              </div>

              {/* Bottom: Stat / Metric Badge */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold truncate pr-2">
                  <CheckCircle2 size={13} className="flex-shrink-0" />
                  <span className="truncate">{client.stat}</span>
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex-shrink-0">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ClientsSection);
