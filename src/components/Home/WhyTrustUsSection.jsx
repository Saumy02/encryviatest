import React from 'react';
import { ShieldCheck, CheckCircle2, Zap, TrendingUp } from 'lucide-react';

const WhyTrustUsSection = () => (
  <section className="py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 text-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 lg:mb-12">
        Why Should You <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-pink-400">Trust Us?</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 flex justify-center items-center w-full">
          <div className="relative group w-full h-full flex items-center justify-center">
            {/* Ambient Purple Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
            <img
              src="/image/Why Should You Trust Us.webp"
              alt="Handshake - Trust EncryVia"
              className="rounded-3xl relative shadow-2xl object-cover border border-white/10 w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] max-h-[500px]"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://placehold.co/516x450/0A0A0A/FFFFFF?text=Trust+Us";
              }}
            />
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <ul className="list-none space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed text-left">
            <li className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center flex-shrink-0 text-[rgb(168,85,247)] shadow-[0_0_12px_rgba(168,85,247,0.25)] mt-0.5">
                <ShieldCheck size={20} className="text-[rgb(168,85,247)]" />
              </div>
              <span className="pt-0.5">
                We're a hands-on digital team helping businesses navigate the modern web with secure platforms, creative marketing, and data-driven strategies built around real budgets and real timelines.
              </span>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)] mt-0.5">
                <CheckCircle2 size={20} className="text-emerald-400" />
              </div>
              <span className="pt-0.5">
                Built entirely in-house by developers, data analysts, and cybersecurity specialists because real impact starts when every discipline works under one roof.
              </span>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center flex-shrink-0 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.25)] mt-0.5">
                <Zap size={20} className="text-amber-400" />
              </div>
              <span className="pt-0.5">
                Lean team, proven range: we bring hustle and creativity to every project, backed by real experience across SaaS, eCommerce, and enterprise-grade systems.
              </span>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.25)] mt-0.5">
                <TrendingUp size={20} className="text-cyan-400" />
              </div>
              <span className="pt-0.5">
                Growth-first mindset: from SEO and paid ads to secure, scalable digital products, everything we build is designed to deliver measurable, trackable results.
              </span>
            </li>
          </ul>

          <p className="text-base sm:text-lg leading-relaxed text-gray-300 italic pt-2 border-t border-white/10 text-left">
            Whether you're launching, scaling, or chasing your next big milestone, EncryVia builds for where your business is going, not just where it started.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyTrustUsSection;

