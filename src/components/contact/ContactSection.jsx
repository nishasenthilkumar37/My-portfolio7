import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { soundFX } from '../../utils/soundEffects';
import { OWNER_INFO } from '../../data/portfolioData';
import { LinkedInIcon } from '../ui/Icons';
import {
  Sparkles,
  Send,
  Mail,
  MapPin,
  Copy,
  Check,
  MessageSquare,
  User,
  ArrowRight,
  Heart
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Design Project',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(OWNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      soundFX.playHover();
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    soundFX.playWhoosh();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFX.playSuccess();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e6c88b', '#f4a6b8', '#64dfdf', '#ffffff']
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="ambient-glow-circle w-[650px] h-[650px] top-[10%] right-[-150px] bg-gradient-to-bl from-[#e6c88b]/15 to-transparent" />
      <div className="ambient-glow-circle w-[600px] h-[600px] bottom-[-100px] left-[-100px] bg-gradient-to-tr from-[#64dfdf]/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================
            1. CINEMATIC "LET'S WORK TOGETHER" HERO CALLOUT
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-gold rounded-3xl p-8 sm:p-14 border border-[#e6c88b]/40 text-center mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12121c] border border-[#e6c88b]/30 text-[#e6c88b] text-xs font-mono-code uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 // Collaboration & Inquiry</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-white mb-6 tracking-tight">
            Have an idea? <br />
            <span className="gold-gradient-text">Let's build something beautiful.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need a bespoke portfolio, responsive web redesign, brand landing page, or dynamic React front-end, I am ready to collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${OWNER_INFO.email}`}
              onMouseEnter={() => soundFX.playHover()}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#e6c88b] via-[#f3d9a2] to-[#c89d53] text-[#0a0a10] font-bold text-xs font-mono-code uppercase tracking-wider flex items-center gap-2.5 shadow-[0_0_30px_rgba(230,200,139,0.4)] hover:shadow-[0_0_45px_rgba(230,200,139,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Let's Work Together</span>
            </a>

            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => soundFX.playHover()}
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs font-mono-code uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#e6c88b]" />}
              <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
            </button>
          </div>
        </motion.div>

        {/* ========================================================
            2. DIRECT CONTACT INFO & VALIDATED FORM GRID
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left 5 Cols: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Feel free to reach out directly via email or connect with me on LinkedIn.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between group hover:border-[#e6c88b]/40 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#e6c88b]/10 text-[#e6c88b] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-gray-400 uppercase">Direct Email</div>
                    <a
                      href={`mailto:${OWNER_INFO.email}`}
                      className="text-sm font-medium text-white group-hover:text-[#e6c88b] transition-colors"
                    >
                      {OWNER_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#f4a6b8]/10 text-[#f4a6b8] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-gray-400 uppercase">Location</div>
                  <div className="text-sm font-medium text-white">{OWNER_INFO.location}</div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={OWNER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                className="p-5 rounded-2xl glass-panel border border-white/10 flex items-center justify-between group hover:border-[#64dfdf]/40 transition-colors block"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#64dfdf]/10 text-[#64dfdf] flex items-center justify-center">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-gray-400 uppercase">Professional Network</div>
                    <div className="text-sm font-medium text-white group-hover:text-[#64dfdf] transition-colors">
                      Nisha Senthil Kumar
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-[#64dfdf] transition-all" />
              </a>

            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 font-mono-code">
              ⚡ Typical response time: Within 24 hours
            </div>
          </motion.div>

          {/* Right 7 Cols: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-2xl mb-2">
                  ✓
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Message Prepared & Sent!
                </h3>
                <p className="text-sm text-gray-300 max-w-md leading-relaxed">
                  Thank you for reaching out, <strong className="text-[#e6c88b]">{formData.name}</strong>. I will get back to you shortly at <strong className="text-[#64dfdf]">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Web Design Project', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono-code text-white transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-mono-code text-[#e6c88b] uppercase tracking-wider mb-2">
                  Send a Direct Message
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-code text-gray-300 block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                        errors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#e6c88b]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 font-mono-code mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-mono-code text-gray-300 block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                        errors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#e6c88b]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 font-mono-code mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="text-xs font-mono-code text-gray-300 block mb-1.5">
                    Project Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-white/10 text-sm text-white focus:outline-none focus:border-[#e6c88b] transition-all cursor-pointer"
                  >
                    <option value="Web Design Project">Responsive Web Design</option>
                    <option value="Landing Page Design">Landing Page Design</option>
                    <option value="Portfolio Website">Portfolio Website Development</option>
                    <option value="React Front-End Development">React Front-End Development</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Other Inquiry">Other Collaboration</option>
                  </select>
                </div>

                {/* Message Box */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-mono-code text-gray-300">
                      Message *
                    </label>
                    <span className="text-[10px] font-mono-code text-gray-400">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project goals, timeline, or design requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-sm text-white placeholder-gray-500 focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#e6c88b]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 font-mono-code mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => soundFX.playHover()}
                  className="w-full py-4 rounded-xl bg-[#e6c88b] hover:bg-[#f0d59e] text-[#0a0a10] font-bold text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(230,200,139,0.3)] transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
