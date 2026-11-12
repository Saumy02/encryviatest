import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  User, 
  AtSign, 
  PhoneCall, 
  Copy, 
  Check, 
  HelpCircle, 
  ChevronDown,
  Lock,
  Zap,
  Globe
} from 'lucide-react';
import SEO from '../components/SEO';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const serviceTopics = [
  { label: '🌐 Web & App Dev', value: 'I am interested in Web Development services.' },
  { label: '🛡️ Cybersecurity & Audit', value: 'I need a Cybersecurity audit or WAPT consulting.' },
  { label: '🚀 SEO, GEO & AI Growth', value: 'I want to improve my SEO and AI Search Rankings.' },
  { label: '💼 General Inquiry', value: 'I have a general question about EncryVia services.' }
];

const faqs = [
  {
    q: "How fast will I receive a response after submitting?",
    a: "We guarantee a response within 24 hours. For urgent inquiries, you can also reach us directly via phone or WhatsApp."
  },
  {
    q: "What is your pricing model for new projects?",
    a: "Our integrated web development, cybersecurity, and digital marketing packages start from ₹25,000. We also create customized proposals tailored to your specific scope."
  },
  {
    q: "Are my project details and ideas kept confidential?",
    a: "100% Yes. We respect client privacy and are happy to execute a standard Non-Disclosure Agreement (NDA) prior to discussing sensitive project details."
  },
  {
    q: "Do you work with international clients outside India?",
    a: "Yes! We work with clients across India, North America, Europe, and the Middle East, offering global SEO, international web architecture, and remote cybersecurity monitoring."
  }
];

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    number: '',
    messages: ''
  });
  const [activeTopic, setActiveTopic] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Quick Action State
  const [copiedField, setCopiedField] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectTopic = (topic) => {
    setActiveTopic(topic.label);
    setFormData(prev => ({
      ...prev,
      messages: prev.messages ? `${topic.value}\n\n${prev.messages}` : topic.value
    }));
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://encryvia-backend.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          number: formData.number,
          messages: formData.messages
        })
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', number: '', messages: '' });
      setActiveTopic('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Contact EncryVia | Free Quote & Consultation"
        description="Get your free consultation for web development, cybersecurity or SEO services. Call, email or WhatsApp. 24-hour response time guaranteed."
        keywords="web development consultation, cybersecurity quote, SEO services contact, digital agency India, free website quote, IT services consultation, EncryVia contact"
        ogUrl="https://encryvia.com/contact"
      />

      <div className="min-h-screen text-white relative overflow-hidden pt-12 pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Glowing Background Halos */}
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-[130px]" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-[130px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-pink-600/15 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-16 lg:space-y-20">

          {/* ========================================================================= */}
          {/* 1. HERO BANNER HEADER                                                     */}
          {/* ========================================================================= */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-6 pt-6 sm:pt-10"
          >
            {/* Main Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl mx-auto"
            >
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">Connect</span> and Build Together
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Have a project in mind or just want to learn more? Talk to our web, security, or marketing team today. We're here to help you achieve your goals.
            </motion.p>
          </motion.div>

          {/* ========================================================================= */}
          {/* 2. MAIN SECTION: FORM & WHY CONNECT SIDE-BY-SIDE                          */}
          {/* ========================================================================= */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side (5 cols): Narrative, Services List & Direct Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="lg:col-span-5 space-y-6 flex flex-col"
            >
              {/* Security & Privacy Assurance Pill */}
              <motion.div 
                variants={fadeInUp}
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-4 text-emerald-300 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={22} />
                </div>
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-white block">100% Confidential & Secure</span>
                  <span>Strict NDA compliance. We never share your contact or business data.</span>
                </div>
              </motion.div>

              {/* Card 1: Narrative & Services */}
              <motion.div 
                variants={scaleIn}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-purple-950/20 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden flex-1 flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-[rgb(168,85,247)] flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white">Stay Connected with Us</h2>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Got SEO, GEO, AI Optimization, International Search Strategies, Web Design, or Marketing issues? Looking for partnership opportunities? Reach out we're here to help you beat those web goals.
                </p>

                {/* How We Can Help Box */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-sm font-extrabold text-[rgb(168,85,247)] tracking-wider uppercase flex items-center gap-2">
                    <Zap size={14} className="text-amber-400" />
                    <span>How We Can Help:</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      "SEO consulting and competitor analysis",
                      "Guidelines for international SEO & web design",
                      "Backing for your online marketing plan",
                      "Professional guidance on cyber security issues"
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ x: 6 }}
                        className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
                      >
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 size={12} />
                        </div>
                        <span className="text-sm text-gray-200 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-gray-400 border-t border-white/10">
                  <Clock size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>We answer all questions within 24 hours. Your goals and privacy are our priorities.</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side (7 cols): Interactive Glass Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleIn}
              className="lg:col-span-7 flex flex-col"
            >
              <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/80 via-purple-950/60 to-slate-950/90 border border-indigo-500/30 shadow-[0_20px_50px_rgba(79,70,229,0.25)] backdrop-blur-2xl relative flex flex-col justify-between h-full">
                
                {/* Header */}
                <div className="mb-6 space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                    <span>Send Us a Message</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </h3>
                  <p className="text-sm text-gray-300">
                    Fill out the form below and our team will get back to you with a free consultation and quote.
                  </p>
                </div>

                {/* Quick Topic Selection Pills */}
                <div className="mb-6 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[rgb(168,85,247)]">
                    Select Your Topic / Interest (Optional):
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                    {serviceTopics.map((topic, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectTopic(topic)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold text-left transition-all duration-300 border ${
                          activeTopic === topic.label
                            ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
                            : 'bg-white/[0.04] text-gray-300 border-white/10 hover:border-purple-400/40 hover:bg-white/[0.08]'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Full Name <span className="text-pink-400">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-3.5 text-[rgb(168,85,247)]" />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.05] text-white placeholder-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 text-sm disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Email Address <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <AtSign size={18} className="absolute left-4 top-3.5 text-[rgb(168,85,247)]" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.05] text-white placeholder-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 text-sm disabled:opacity-50"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="number" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                        Phone Number <span className="text-pink-400">*</span>
                      </label>
                      <div className="relative">
                        <PhoneCall size={18} className="absolute left-4 top-3.5 text-[rgb(168,85,247)]" />
                        <input
                          id="number"
                          name="number"
                          type="tel"
                          placeholder="10-digit mobile number"
                          value={formData.number}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length > 10) value = value.slice(0, 10);
                            handleInputChange({ target: { name: 'number', value } });
                          }}
                          required
                          disabled={isSubmitting}
                          pattern="\d{10}"
                          title="Please enter a valid 10-digit phone number"
                          className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.05] text-white placeholder-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 text-sm disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 flex-1 flex flex-col">
                    <label htmlFor="messages" className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Message / Project Details
                    </label>
                    <textarea
                      id="messages"
                      name="messages"
                      rows={5}
                      placeholder="Tell us about your project requirements, timeline, or any specific questions..."
                      value={formData.messages}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full flex-1 min-h-[140px] px-4 py-3 rounded-2xl bg-white/[0.05] text-white placeholder-gray-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 text-sm disabled:opacity-50 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !formData.fullName || !formData.email || !formData.number}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-base shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Submitting Your Inquiry...
                      </span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </motion.button>

                  {/* Status Toast */}
                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`text-center p-4 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 ${
                          submitStatus === 'success'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <>
                            <CheckCircle2 size={18} />
                            <span>Message sent successfully! Our team will get back to you soon.</span>
                          </>
                        ) : (
                          <span>❌ Something went wrong. Please check all required fields and try again.</span>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>

          </div>

          {/* ========================================================================= */}
          {/* 3. CONTACT DIRECTORY CARDS & VISUAL INFOGRAPHIC                           */}
          {/* ========================================================================= */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-10"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Communication</span> Channels
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                Connect directly with our headquarters or regional representatives via phone, email, or office visit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Card 1: Office Address */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition">
                    <MapPin size={24} />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-purple-500/20 text-[rgb(168,85,247)] border border-purple-500/30">
                    HEADQUARTED
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-[rgb(168,85,247)] transition">Office Address</h3>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">
                    39/B Dwarka Expressway, Opposite Royal Oak International School, New Palam Vihar Phase 1, Gurugram, Haryana - 122017, India
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Phone Numbers */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-indigo-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition">
                    <Phone size={24} />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    DIRECT CALL
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition">Phone Numbers</h3>
                  
                  <div className="space-y-1.5">
                    {['+91 8796051145', '+91 6390215426'].map((num, i) => (
                      <div key={i} className="flex items-center justify-between text-sm text-gray-300">
                        <a href={`tel:${num.replace(/\s/g, '')}`} className="hover:text-indigo-300 transition font-semibold">
                          {num}
                        </a>
                        <button 
                          type="button" 
                          onClick={() => handleCopy(num, `phone-${i}`)}
                          className="text-gray-400 hover:text-white p-1 rounded transition"
                          title="Copy Phone Number"
                        >
                          {copiedField === `phone-${i}` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Email Addresses */}
              <motion.div 
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl space-y-4 hover:border-pink-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-300 border border-pink-500/30 flex items-center justify-center group-hover:scale-110 transition">
                    <Mail size={24} />
                  </div>
                  <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    24/7 EMAIL
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition">Email Addresses</h3>
                  
                  <div className="space-y-1.5">
                    {['info@encryvia.com', 'sales@encryvia.com'].map((email, i) => (
                      <div key={i} className="flex items-center justify-between text-sm text-gray-300">
                        <a href={`mailto:${email}`} className="hover:text-pink-300 transition font-semibold">
                          {email}
                        </a>
                        <button 
                          type="button" 
                          onClick={() => handleCopy(email, `email-${i}`)}
                          className="text-gray-400 hover:text-white p-1 rounded transition"
                          title="Copy Email Address"
                        >
                          {copiedField === `email-${i}` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* 4. VISUAL SHOWCASE & MOBILE PHONE ILLUSTRATION                            */}
          {/* ========================================================================= */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            className="relative rounded-3xl bg-gradient-to-r from-purple-950/60 via-indigo-950/80 to-slate-950/90 border border-purple-500/20 overflow-hidden p-8 sm:p-12 shadow-2xl"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  <Globe size={14} />
                  <span>GLOBAL DIGITAL AGENCY</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Ready to Transform Your Digital Infrastructure?
                </h3>

                <p className="text-gray-300 text-base leading-relaxed">
                  Whether you need a high-performance web application, full cybersecurity audit, or AI search engine growth, our unified team delivers end-to-end execution under one roof.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="tel:+918796051145"
                    className="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg hover:shadow-purple-500/40 transition-all flex items-center gap-2"
                  >
                    <Phone size={16} />
                    <span>Call Us Directly</span>
                  </a>
                  <a 
                    href="mailto:sales@encryvia.com"
                    className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
                  >
                    <Mail size={16} />
                    <span>Send Email Inquiry</span>
                  </a>
                </div>
              </div>

              {/* Right Side Illustration */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="relative w-full max-w-sm">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl animate-pulse" />
                  <img
                    src="/image/Contact_US/mobilicon.webp"
                    alt="Encryvia Mobile Contact Visual"
                    className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl border border-white/10"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/image/Contact_US/ContactUS.webp";
                    }}
                  />
                </div>
              </div>

            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* 5. FREQUENTLY ASKED QUESTIONS (ACCORDION)                                 */}
          {/* ========================================================================= */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8 max-w-4xl mx-auto pt-4"
          >
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white flex items-center justify-center gap-2">
                <HelpCircle size={28} className="text-[rgb(168,85,247)]" />
                <span>Frequently Asked Questions</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Quick answers to common questions before reaching out.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-purple-950/40 border-purple-500/40 shadow-lg shadow-purple-950/30'
                        : 'bg-white/[0.04] border-white/10 hover:border-purple-500/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left font-bold text-white flex items-center justify-between gap-4 hover:text-[rgb(168,85,247)] transition-colors duration-200"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      <ChevronDown 
                        size={20} 
                        className={`text-[rgb(168,85,247)] transition-transform duration-300 ease-out flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    <div 
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default Contact;
