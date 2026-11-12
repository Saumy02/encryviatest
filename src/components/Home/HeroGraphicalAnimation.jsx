import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { 
  Code2, Sparkles, Lock, CheckCircle2, TrendingUp, 
  ChevronLeft, ChevronRight, Zap, ShieldCheck, Cpu
} from "lucide-react";
import shield3d from "/image/shield_3d.webp";

// =============================================================================
// 1. 3D Canvas Spherical Particle Constellation Engine
// =============================================================================
const ParticleCanvas3D = ({ mouseX, mouseY }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth || 360);
    let height = (canvas.height = canvas.offsetHeight || 500);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || 360;
      height = canvas.height = canvas.offsetHeight || 500;
    };
    window.addEventListener("resize", onResize);

    const numPoints = 80;
    const radius = Math.min(width, height) * 0.42;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = Math.sqrt(Math.PI * numPoints) * theta;

      points.push({
        baseX: radius * Math.sin(theta) * Math.cos(phi),
        baseY: radius * Math.sin(theta) * Math.sin(phi),
        baseZ: radius * Math.cos(theta),
        size: Math.random() * 1.8 + 1.0,
        color: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#38bdf8" : "#fb7185"
      });
    }

    let rotX = 0;
    let rotY = 0;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      const mY = mouseY ? mouseY.get() || 0 : 0;
      const mX = mouseX ? mouseX.get() || 0 : 0;
      const targetSpeedX = 0.002 + mY * 0.000004;
      const targetSpeedY = 0.003 + mX * 0.000004;

      rotX += targetSpeedX;
      rotY += targetSpeedY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      const projectedPoints = [];
      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 360;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        let y2 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        const scale = fov / (fov + z2);
        const x2d = x1 * scale + centerX;
        const y2d = y2 * scale + centerY;
        const alpha = Math.max(0.12, Math.min(0.85, (z2 + radius) / (2 * radius)));

        projectedPoints.push({ x: x2d, y: y2d, scale, alpha, color: p.color, size: p.size * scale, z: z2 });
      }

      // Constellation connection lines
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 55) {
            const lineAlpha = (1 - dist / 55) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Render points
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-45 z-0" />;
};

// =============================================================================
// 2. Individual Reusable Satellite Cards
// =============================================================================

// Card 0: Web & App Engineering (BUILD)
const WebEngineeringCard = ({ isActive, isMobile = false }) => (
  <div className="w-full select-none cursor-default">
    <div className={`relative p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#0d0920]/92 via-[#060412]/95 to-[#020108]/98 backdrop-blur-2xl transition-all duration-300 border ${
      isActive
        ? "border-purple-400/60 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_24px_rgba(168,85,247,0.22)]"
        : "border-white/[0.08] hover:border-purple-400/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
    }`}>
      {/* Specular hairline top reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent pointer-events-none" />

      {/* Header Row: Node ID + Speed Gauge */}
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-400/30 flex items-center justify-center flex-shrink-0">
            <Code2 size={12} />
          </div>
          <span className="text-[7.5px] font-mono font-bold tracking-widest text-[rgb(168,85,247)] uppercase truncate">
            NODE 01 // BUILD
          </span>
        </div>

        <span className="text-[7.5px] sm:text-[8px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          100 SPEED
        </span>
      </div>

      {/* Main Title: Full card width, NEVER truncated */}
      <h4 className="text-[12.5px] sm:text-[13px] font-bold text-white tracking-tight leading-tight mb-2">
        Web & App Engineering
      </h4>

      {/* Modern Developer Terminal / IDE Console */}
      <div className="relative w-full rounded-xl bg-black/90 border border-white/[0.08] p-2 sm:p-2.5 flex flex-col space-y-1.5 overflow-hidden shadow-inner">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-1">
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[7.5px] font-mono text-[rgb(168,85,247)] font-semibold">
              AppEngine.tsx
            </span>
            <span className="text-[6.5px] font-mono px-1 rounded bg-white/[0.06] text-white/50">
              v2.4
            </span>
          </div>
        </div>

        {/* Monospace Command & Edge Deploy Status */}
        <div className="font-mono text-[8px] sm:text-[8.5px] space-y-0.5">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[rgb(168,85,247)] font-bold">$</span>
            <span className="text-white/90 font-medium">vite build --prod</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold truncate">
            <CheckCircle2 size={10} className="flex-shrink-0" />
            <span>Deployed in 0.38s (Edge)</span>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex items-center justify-between pt-0.5 gap-1 text-[7px] sm:text-[7.5px] font-mono">
          <span className="px-1.5 py-0.5 rounded bg-purple-950/50 border border-purple-500/20 text-[rgb(168,85,247)]">
            React 19
          </span>
          <span className="px-1.5 py-0.5 rounded bg-purple-950/50 border border-purple-500/20 text-[rgb(168,85,247)]">
            Vite PWA
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 font-medium">
            Edge SSR
          </span>
        </div>
      </div>

      {/* Latency & Hydration Telemetry */}
      <div className="flex items-center justify-between text-[7px] sm:text-[7.5px] font-mono text-white/50 pt-1.5 px-0.5">
        <span className="flex items-center gap-1">
          <Zap size={8} className="text-amber-400" />
          Sub-second TTFB
        </span>
        <span className="text-[rgb(168,85,247)]/80">0ms Hydration</span>
      </div>
    </div>
  </div>
);

// Card 1: SEO, GEO & AI Growth (GROW)
const SeoGrowthCard = ({ isActive, isMobile = false }) => (
  <div className="w-full select-none cursor-default">
    <div className={`relative p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#160818]/92 via-[#0b030e]/95 to-[#040106]/98 backdrop-blur-2xl transition-all duration-300 border ${
      isActive
        ? "border-rose-400/60 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_24px_rgba(244,63,94,0.22)]"
        : "border-white/[0.08] hover:border-rose-400/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
    }`}>
      {/* Specular hairline top reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent pointer-events-none" />

      {/* Header Row: Node ID + AI Traffic Pill */}
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-400/30 flex items-center justify-center flex-shrink-0">
            <Sparkles size={12} />
          </div>
          <span className="text-[7.5px] font-mono font-bold tracking-widest text-rose-400 uppercase truncate">
            NODE 02 // GROW
          </span>
        </div>

        <span className="text-[7.5px] sm:text-[8px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 flex items-center gap-1 flex-shrink-0">
          <TrendingUp size={9} className="text-emerald-400" />
          +140% AI
        </span>
      </div>

      {/* Main Title: Full card width, NEVER truncated */}
      <h4 className="text-[12.5px] sm:text-[13px] font-bold text-white tracking-tight leading-tight mb-2">
        SEO, GEO & AI Growth
      </h4>

      {/* Generative Engine Optimization (GEO) Visual Benchmark */}
      <div className="relative w-full rounded-xl bg-black/90 border border-white/[0.08] p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden shadow-inner h-[82px] sm:h-[88px]">
        {/* Top benchmark status */}
        <div className="relative z-10 flex items-center justify-between text-[7px] font-mono text-white/50 border-b border-white/[0.06] pb-1">
          <span>AI Search Visibility</span>
          <span className="text-rose-300 font-semibold flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-rose-400 animate-ping" />
            Realtime GEO
          </span>
        </div>

        {/* 3 Refined Benchmark Columns */}
        <div className="relative z-10 grid grid-cols-3 gap-1.5 items-end pt-0.5">
          {/* Bar 1: Perplexity */}
          <div className="flex flex-col items-center">
            <span className="text-[6.5px] font-mono text-white/60 mb-0.5">#3 · 74%</span>
            <div className="w-full h-7 sm:h-8 bg-white/[0.04] rounded-t flex items-end p-0.5">
              <motion.div
                animate={{ height: ["65%", "80%", "65%"] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full rounded-t bg-gradient-to-t from-purple-950 via-rose-900 to-rose-400/80"
              />
            </div>
            <span className="text-[6.5px] font-mono text-white/50 mt-0.5 truncate">Perplexity</span>
          </div>

          {/* Bar 2: Gemini */}
          <div className="flex flex-col items-center">
            <span className="text-[6.5px] font-mono text-rose-200 mb-0.5">#2 · 88%</span>
            <div className="w-full h-7 sm:h-8 bg-white/[0.04] rounded-t flex items-end p-0.5">
              <motion.div
                animate={{ height: ["78%", "92%", "78%"] }}
                transition={{ duration: 2.4, delay: 0.25, repeat: Infinity, ease: "easeInOut" }}
                className="w-full rounded-t bg-gradient-to-t from-rose-950 via-rose-600 to-pink-300"
              />
            </div>
            <span className="text-[6.5px] font-mono text-white/70 mt-0.5 truncate">Gemini AI</span>
          </div>

          {/* Bar 3: EncryVia #1 */}
          <div className="flex flex-col items-center">
            <span className="text-[7px] font-mono font-bold text-amber-300 mb-0.5 flex items-center gap-0.5">
              ★ 99% #1
            </span>
            <div className="w-full h-7 sm:h-8 bg-white/[0.04] rounded-t flex items-end p-0.5">
              <motion.div
                animate={{ height: ["90%", "100%", "90%"] }}
                transition={{ duration: 2.4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full rounded-t bg-gradient-to-t from-rose-600 via-pink-500 to-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.5)] border-t border-amber-200"
              />
            </div>
            <span className="text-[7px] font-mono font-bold text-amber-200 mt-0.5 truncate">Top Ranked</span>
          </div>
        </div>
      </div>

      {/* Sub-footer status */}
      <div className="flex items-center justify-between text-[7px] sm:text-[7.5px] font-mono text-white/50 pt-1.5 px-0.5">
        <span>Generative Citations</span>
        <span className="text-rose-300/80">LLM Authority A+</span>
      </div>
    </div>
  </div>
);

// Card 2: Cybersecurity & WAPT Sentinel (SECURE)
const CybersecurityCard = ({ isActive, isMobile = false }) => (
  <div className="w-full select-none cursor-default">
    <div className={`relative p-3 sm:p-3.5 rounded-2xl bg-gradient-to-br from-[#05170f]/92 via-[#020c07]/95 to-[#010503]/98 backdrop-blur-2xl transition-all duration-300 border ${
      isActive
        ? "border-emerald-400/60 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_24px_rgba(16,185,129,0.22)]"
        : "border-white/[0.08] hover:border-emerald-400/30 shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
    }`}>
      {/* Specular hairline top reflection */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none" />

      {/* Header Row: Node ID + Threat Status Gauge */}
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center flex-shrink-0">
            <ShieldCheck size={12} />
          </div>
          <span className="text-[7.5px] font-mono font-bold tracking-widest text-emerald-400 uppercase truncate">
            NODE 03 // SECURE
          </span>
        </div>

        <span className="text-[7.5px] sm:text-[8px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          0 THREATS
        </span>
      </div>

      {/* Main Title: Full card width, matching Web & SEO */}
      <h4 className="text-[12.5px] sm:text-[13px] font-bold text-white tracking-tight leading-tight mb-2 truncate">
        Cybersecurity & WAPT Sentinel
      </h4>

      {/* Modern Developer Terminal / Sentinel Security Console */}
      <div className="relative w-full rounded-xl bg-black/90 border border-white/[0.08] p-2 sm:p-2.5 flex flex-col space-y-1.5 overflow-hidden shadow-inner">
        {/* Animated Scanner Laser Sweep */}
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-emerald-400/[0.07] to-transparent pointer-events-none"
        />

        {/* Terminal Titlebar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.06] pb-1">
          <div className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[7.5px] font-mono text-emerald-400 font-semibold">
              SentinelShield.sh
            </span>
            <span className="text-[6.5px] font-mono px-1 rounded bg-white/[0.06] text-white/50">
              v3.2
            </span>
          </div>
        </div>

        {/* Monospace Command & Security Audit Status */}
        <div className="relative z-10 font-mono text-[8px] sm:text-[8.5px] space-y-0.5">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-white/90 font-medium">sentinel audit --wapt</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold truncate">
            <CheckCircle2 size={10} className="flex-shrink-0" />
            <span>0 Vulnerabilities (Hardened)</span>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="relative z-10 flex items-center justify-between pt-0.5 gap-1 text-[7px] sm:text-[7.5px] font-mono">
          <span className="px-1.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20 text-emerald-300">
            OWASP Top 10
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20 text-emerald-300">
            AES-256 GCM
          </span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-200 font-medium">
            Audit Grade A+
          </span>
        </div>
      </div>

      {/* Security Telemetry Readout */}
      <div className="flex items-center justify-between text-[7px] sm:text-[7.5px] font-mono text-white/50 pt-1.5 px-0.5">
        <span className="flex items-center gap-1">
          <Lock size={8} className="text-emerald-400" />
          24/7 Threat Shield
        </span>
        <span className="text-emerald-300/80">Zero-Day Protected</span>
      </div>
    </div>
  </div>
);

// =============================================================================
// 3. Central Holographic Engine Core Component
// =============================================================================
const EngineCore = ({ activeNode, setActiveNode, isCompact = false }) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Outer Gyroscope Rings Container */}
      <div className="relative flex items-center justify-center">
        {/* Orbital SVG Gyroscope Rings */}
        <div className={`absolute ${isCompact ? "w-44 h-44 sm:w-48 sm:h-48" : "w-52 h-52 sm:w-56 sm:h-56"} pointer-events-none`}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border border-purple-500/20 border-dashed relative flex items-center justify-center"
          >
            <div className="absolute -top-1 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
            <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
          </motion.div>
        </div>

        {/* Secondary Clockwise Precision Ring */}
        <div className={`absolute ${isCompact ? "w-36 h-36 sm:w-40 sm:h-40" : "w-44 h-44 sm:w-48 sm:h-48"} pointer-events-none`}>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border border-cyan-400/20 relative flex items-center justify-center"
          >
            <div className="absolute -left-1 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_6px_#f43f5e]" />
            <div className="absolute -right-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
          </motion.div>
        </div>

        {/* Circular Holographic Obsidian Core Orb - Strictly Constrained Dimensions */}
        <motion.div
          animate={{ 
            scale: [0.985, 1.02, 0.985],
            boxShadow: [
              "0 0 30px rgba(168,85,247,0.3), inset 0 0 20px rgba(168,85,247,0.2)",
              "0 0 50px rgba(168,85,247,0.5), inset 0 0 30px rgba(99,102,241,0.3)",
              "0 0 30px rgba(168,85,247,0.3), inset 0 0 20px rgba(168,85,247,0.2)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: isCompact ? "148px" : "176px", height: isCompact ? "148px" : "176px" }}
          className="relative rounded-full bg-gradient-to-b from-[#140b2e]/90 via-[#070414]/95 to-black/98 p-[1.5px] border border-purple-400/45 backdrop-blur-3xl flex flex-col items-center justify-between py-2.5 overflow-hidden flex-shrink-0"
        >
          {/* Glass Bevel Highlight */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent rounded-t-full pointer-events-none" />

          {/* Radial Energy Sweep Beam inside Core */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/20 to-transparent pointer-events-none"
          />

          {/* Top Status Pill: System Online */}
          <div className="relative z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/75 border border-purple-400/35 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[7px] sm:text-[7.5px] font-mono font-bold text-[rgb(168,85,247)] tracking-wider">
              ENCRYVIA
            </span>
          </div>

          {/* Central 3D Floating Shield Logo - STRICTLY CONSTRAINED */}
          <div 
            style={{ width: isCompact ? "64px" : "78px", height: isCompact ? "64px" : "78px" }}
            className="relative flex items-center justify-center z-10 flex-shrink-0"
          >
            {/* Core Radial Flare Backlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/35 via-pink-500/25 to-indigo-500/35 blur-md animate-pulse" />

            {/* Vertical Holographic Laser Scan Blade */}
            <motion.div
              animate={{ y: [-18, 18, -18] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-12 sm:w-14 h-0.5 bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_8px_#67e8f9] z-20 pointer-events-none"
            />

            {/* 3D Shield Logo - STRICT MAX SIZE */}
            <img 
              src={shield3d} 
              alt="Encryvia 3D Emblem" 
              style={{ maxWidth: isCompact ? "64px" : "78px", maxHeight: isCompact ? "64px" : "78px" }}
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.85)] drop-shadow-[0_0_25px_rgba(99,102,241,0.45)]"
            />
          </div>

          {/* Bottom Engine Core Label */}
          <div className="relative z-20">
            <span className="text-[7px] sm:text-[8px] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-pink-200 tracking-[0.2em] uppercase block drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              ENGINE CORE
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Executive Segmented Dock (BUILD / SECURE / GROW) */}
      <div className="rounded-full bg-slate-950/85 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex items-center p-1 mt-2.5 z-30">
        <button 
          onClick={() => setActiveNode(0)}
          className={`px-3 py-1 rounded-full text-[8px] sm:text-[8.5px] font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
            activeNode === 0 
              ? "bg-purple-500/25 border border-purple-400/60 text-[rgb(168,85,247)] shadow-[0_0_12px_rgba(168,85,247,0.35)] scale-105" 
              : "text-white/60 hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeNode === 0 ? "bg-purple-400 animate-pulse" : "bg-purple-500/40"}`} />
          <span>BUILD</span>
        </button>

        <button 
          onClick={() => setActiveNode(2)}
          className={`px-3 py-1 rounded-full text-[8px] sm:text-[8.5px] font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
            activeNode === 2 
              ? "bg-emerald-500/25 border border-emerald-400/60 text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.35)] scale-105" 
              : "text-white/60 hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeNode === 2 ? "bg-emerald-400 animate-pulse" : "bg-emerald-500/40"}`} />
          <span>SECURE</span>
        </button>

        <button 
          onClick={() => setActiveNode(1)}
          className={`px-3 py-1 rounded-full text-[8px] sm:text-[8.5px] font-mono font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
            activeNode === 1 
              ? "bg-rose-500/25 border border-rose-400/60 text-rose-200 shadow-[0_0_12px_rgba(244,63,94,0.35)] scale-105" 
              : "text-white/60 hover:text-white hover:bg-white/[0.04]"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${activeNode === 1 ? "bg-rose-400 animate-pulse" : "bg-rose-500/40"}`} />
          <span>GROW</span>
        </button>
      </div>
    </div>
  );
};

// Sequence order for cycle and pagination: 0 (BUILD), 2 (SECURE), 1 (GROW)
const NODE_SEQUENCE = [0, 2, 1];

// =============================================================================
// 4. Main HeroGraphicalAnimation Component
// =============================================================================
const HeroGraphicalAnimation = () => {
  const [activeNode, setActiveNode] = useState(0); // 0: Web (BUILD), 1: SEO (GROW), 2: Security (SECURE)
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt physics for deep 3D perspective on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [2, -2]), { stiffness: 80, damping: 28 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-2, 2]), { stiffness: 80, damping: 28 });

  // Touch swipe support for mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleNext = useCallback(() => {
    setActiveNode((prev) => {
      const idx = NODE_SEQUENCE.indexOf(prev);
      return NODE_SEQUENCE[(idx + 1) % NODE_SEQUENCE.length];
    });
  }, []);

  const handlePrev = useCallback(() => {
    setActiveNode((prev) => {
      const idx = NODE_SEQUENCE.indexOf(prev);
      return NODE_SEQUENCE[(idx - 1 + NODE_SEQUENCE.length) % NODE_SEQUENCE.length];
    });
  }, []);

  // Auto-cycle through nodes smoothly every 4.2 seconds when not interacted
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 4200);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const onTouchStart = (e) => {
    setIsHovered(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    setIsHovered(false);
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 40) {
        handleNext(); // swiped left
      } else if (distance < -40) {
        handlePrev(); // swiped right
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div 
      className="relative w-full max-w-xl lg:max-w-2xl mx-auto select-none overflow-hidden lg:overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      {/* ===================================================================== */}
      {/* MOBILE & TABLET RESPONSIVE LAYOUT (< 1024px)                          */}
      {/* ===================================================================== */}
      <div 
        className="flex lg:hidden flex-col items-center justify-center w-full px-2 py-4 relative min-h-[520px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Background Particle Engine & Ambient Glow for Mobile */}
        <ParticleCanvas3D mouseX={mouseX} mouseY={mouseY} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.55, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] max-w-[85vw] max-h-[85vw] rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-cyan-500/25 blur-[70px] sm:blur-[90px]"
          />
        </div>

        {/* 1. Mobile Central Engine Core */}
        <div className="relative z-20">
          <EngineCore activeNode={activeNode} setActiveNode={setActiveNode} isCompact={true} />
        </div>

        {/* 2. Dynamic Glowing Laser Conduit */}
        <div className="relative flex flex-col items-center py-2.5 sm:py-3 z-20">
          <motion.div 
            className="w-0.5 h-6 sm:h-8 rounded-full"
            animate={{
              background: activeNode === 0
                ? "linear-gradient(to bottom, #c084fc, #a855f7)"
                : activeNode === 2
                ? "linear-gradient(to bottom, #34d399, #10b981)"
                : "linear-gradient(to bottom, #fb7185, #f43f5e)",
              boxShadow: activeNode === 0
                ? "0 0 12px #c084fc"
                : activeNode === 2
                ? "0 0 12px #34d399"
                : "0 0 12px #fb7185"
            }}
            transition={{ duration: 0.35 }}
          />
          <motion.div 
            className="w-2 h-2 rounded-full -mt-1"
            animate={{
              backgroundColor: activeNode === 0 ? "#c084fc" : activeNode === 2 ? "#34d399" : "#fb7185",
              scale: [1, 1.35, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* 3. Mobile Active Satellite Showcase Card */}
        <div className="w-full max-w-[340px] sm:max-w-md mx-auto relative z-30">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full"
            >
              {activeNode === 0 && <WebEngineeringCard isActive={true} isMobile={true} />}
              {activeNode === 1 && <SeoGrowthCard isActive={true} isMobile={true} />}
              {activeNode === 2 && <CybersecurityCard isActive={true} isMobile={true} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4. Navigation Controls & Pagination Indicators */}
        <div className="flex items-center justify-between w-full max-w-[340px] sm:max-w-md mt-3.5 px-2 relative z-20">
          <button
            onClick={handlePrev}
            aria-label="Previous service"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 text-white/80 hover:text-white flex items-center justify-center transition active:scale-95"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Interactive Pagination Pills */}
          <div className="flex items-center space-x-2">
            {NODE_SEQUENCE.map((nodeId) => {
              const isSelected = activeNode === nodeId;
              const colorClass = 
                nodeId === 0 ? "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" :
                nodeId === 2 ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" :
                "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]";

              return (
                <button
                  key={nodeId}
                  onClick={() => setActiveNode(nodeId)}
                  aria-label={`Switch to node ${nodeId}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isSelected ? `w-7 ${colorClass}` : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next service"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/50 text-white/80 hover:text-white flex items-center justify-center transition active:scale-95"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Subtle swipe hint */}
        <p className="text-[8.5px] text-white/50 font-medium mt-1.5 tracking-wider uppercase font-mono">
          Tap or swipe to explore
        </p>
      </div>

      {/* ===================================================================== */}
      {/* DESKTOP 3D CONSTELLATION STAGE (>= 1024px)                            */}
      {/* ===================================================================== */}
      <div className="hidden lg:flex items-center justify-center w-full h-[670px] relative perspective-[1600px]">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Layer 0: 3D Particle Canvas */}
          <ParticleCanvas3D mouseX={mouseX} mouseY={mouseY} />

          {/* Ambient Multi-Tone Nebular Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.6, 0.35],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-cyan-500/25 blur-[100px]"
            />

            {/* 3D Spatial Grid Floor */}
            <div 
              className="absolute bottom-2 w-[95%] h-52 rounded-[50%] bg-gradient-to-t from-purple-950/40 via-indigo-950/15 to-transparent blur-[2px] opacity-70 border border-purple-500/20"
              style={{ transform: "rotateX(72deg) scale(1.18)" }}
            />
          </div>

          {/* 3D High-Speed Optical Conduits (SVG Vector Flow) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 660 670"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="laser3dPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
                <stop offset="60%" stopColor="#a855f7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="laser3dRose" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb7185" stopOpacity="1" />
                <stop offset="60%" stopColor="#f43f5e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="laser3dEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="60%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
              </linearGradient>

              <filter id="glow3d" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Conduit 1: Center -> Web (Top Left) */}
            <path
              id="pathWeb"
              d="M 265 260 C 225 215, 185 185, 155 155"
              fill="none"
              stroke="url(#laser3dPurple)"
              strokeWidth={activeNode === 0 ? "2.8" : "1.2"}
              strokeOpacity={activeNode === 0 ? 0.95 : 0.25}
              strokeDasharray={activeNode === 0 ? "none" : "4 4"}
              filter={activeNode === 0 ? "url(#glow3d)" : "none"}
              className="transition-all duration-400"
            />
            {activeNode === 0 && (
              <circle r="3" fill="#c084fc" filter="url(#glow3d)">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 265 260 C 225 215, 185 185, 155 155" />
              </circle>
            )}

            {/* Conduit 2: Center -> SEO (Top Right) */}
            <path
              id="pathSeo"
              d="M 395 260 C 435 215, 475 185, 505 155"
              fill="none"
              stroke="url(#laser3dRose)"
              strokeWidth={activeNode === 1 ? "2.8" : "1.2"}
              strokeOpacity={activeNode === 1 ? 0.95 : 0.25}
              strokeDasharray={activeNode === 1 ? "none" : "4 4"}
              filter={activeNode === 1 ? "url(#glow3d)" : "none"}
              className="transition-all duration-400"
            />
            {activeNode === 1 && (
              <circle r="3" fill="#fb7185" filter="url(#glow3d)">
                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 395 260 C 435 215, 475 185, 505 155" />
              </circle>
            )}

            {/* Conduit 3: Center -> Security (Bottom Center with generous clearance) */}
            <path
              id="pathSec"
              d="M 330 428 L 330 482"
              fill="none"
              stroke="url(#laser3dEmerald)"
              strokeWidth={activeNode === 2 ? "2.8" : "1.2"}
              strokeOpacity={activeNode === 2 ? 0.95 : 0.25}
              strokeDasharray={activeNode === 2 ? "none" : "4 4"}
              filter={activeNode === 2 ? "url(#glow3d)" : "none"}
              className="transition-all duration-400"
            />
            {activeNode === 2 && (
              <circle r="3" fill="#34d399" filter="url(#glow3d)">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M 330 428 L 330 482" />
              </circle>
            )}

            {/* Node Sockets at endpoints */}
            <circle cx="155" cy="155" r={activeNode === 0 ? "4.5" : "2.5"} fill="#c084fc" className={activeNode === 0 ? "animate-ping" : "opacity-40"} />
            <circle cx="505" cy="155" r={activeNode === 1 ? "4.5" : "2.5"} fill="#fb7185" className={activeNode === 1 ? "animate-ping" : "opacity-40"} />
            <circle cx="330" cy="482" r={activeNode === 2 ? "4.5" : "2.5"} fill="#34d399" className={activeNode === 2 ? "animate-ping" : "opacity-40"} />
          </svg>

          {/* Desktop Center Engine Core - elevated to give bottom card plenty of room */}
          <motion.div
            style={{ translateZ: 30 }}
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 flex flex-col items-center justify-center -translate-y-10"
          >
            <EngineCore activeNode={activeNode} setActiveNode={setActiveNode} isCompact={false} />
          </motion.div>

          {/* Satellite 1: Top Left - Web & App (BUILD) */}
          <motion.div
            style={{ translateZ: 25 }}
            animate={{ 
              y: [0, -2, 0],
              scale: activeNode === 0 ? 1.02 : 1
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3 left-0 z-30 w-[240px]"
            onMouseEnter={() => setActiveNode(0)}
          >
            <WebEngineeringCard isActive={activeNode === 0} />
          </motion.div>

          {/* Satellite 2: Top Right - SEO & AI Growth (GROW) */}
          <motion.div
            style={{ translateZ: 25 }}
            animate={{ 
              y: [0, 2, 0],
              scale: activeNode === 1 ? 1.02 : 1
            }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-3 right-0 z-30 w-[240px]"
            onMouseEnter={() => setActiveNode(1)}
          >
            <SeoGrowthCard isActive={activeNode === 1} />
          </motion.div>

          {/* Satellite 3: Bottom Center - Cybersecurity (SECURE) - Dedicated wrapper prevents Framer Motion transform overwrite */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-[240px]">
            <motion.div
              style={{ translateZ: 25 }}
              animate={{ 
                y: [0, 2, 0],
                scale: activeNode === 2 ? 1.02 : 1
              }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full"
              onMouseEnter={() => setActiveNode(2)}
            >
              <CybersecurityCard isActive={activeNode === 2} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(HeroGraphicalAnimation);
