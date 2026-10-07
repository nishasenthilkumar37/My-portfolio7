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
  ArrowRight
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
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6B1F32', '#B9828F', '#E8D8C8', '#FFF9F2']
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-12 w-full overflow-hidden bg-[#F7F0E6]">
      {/* Background ambient accents */}
      <div className="ambient-glow-circle w-[650px] h-[650px] top-[10%] right-[-150px] bg-gradient-to-bl from-[#E8D8C8]/70 to-transparent" />
      <div className="ambient-glow-circle w-[600px] h-[600px] bottom-[-100px] left-[-100px] bg-gradient-to-tr from-[#B9828F]/15 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================
            1. CINEMATIC "LET'S WORK TOGETHER" HERO CALLOUT
        ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-burgundy rounded-3xl p-8 sm:p-14 border border-[#B9828F]/40 bg-[#FFF9F2] text-center mb-20 shadow-md relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F0E6] border border-[#B9828F]/30 text-[#6B1F32] text-xs font-mono-code uppercase tracking-widest mb-6 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B9828F]" />
            <span>07 // Collaboration & Inquiry</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display text-[#3B2929] mb-6 tracking-tight">
            Have an idea? <br />
            <span className="burgundy-gradient-text">Let's build something beautiful.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#3B2929]/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need a bespoke portfolio, responsive web redesign, brand landing page, or dynamic React front-end, I am ready to collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${OWNER_INFO.email}`}
              onMouseEnter={() => soundFX.playHover()}
              className="btn-primary px-8 py-4 text-xs font-mono-code uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Let's Work Together</span>
            </a>

            <button
              onClick={handleCopyEmail}
              onMouseEnter={() => soundFX.playHover()}
              className="btn-secondary px-6 py-4 text-xs font-mono-code uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#6B1F32]" />}
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
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#3B2929] mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Feel free to reach out directly via email or connect with me on LinkedIn.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-5 rounded-2xl glass-panel border border-[#E8D8C8] bg-[#FFF9F2] flex items-center justify-between group hover:border-[#B9828F] transition-colors shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6B1F32]/10 text-[#6B1F32] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-gray-500 uppercase font-semibold">Direct Email</div>
                    <a
                      href={`mailto:${OWNER_INFO.email}`}
                      className="text-sm font-semibold text-[#3B2929] group-hover:text-[#6B1F32] transition-colors"
                    >
                      {OWNER_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#F7F0E6] hover:bg-[#E8D8C8] text-[#6B1F32] transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl glass-panel border border-[#E8D8C8] bg-[#FFF9F2] flex items-center gap-3.5 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#B9828F]/15 text-[#6B1F32] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-code text-gray-500 uppercase font-semibold">Location</div>
                  <div className="text-sm font-semibold text-[#3B2929]">{OWNER_INFO.location}</div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={OWNER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                className="p-5 rounded-2xl glass-panel border border-[#E8D8C8] bg-[#FFF9F2] flex items-center justify-between group hover:border-[#B9828F] transition-colors block shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#6B1F32]/10 text-[#6B1F32] flex items-center justify-center">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-gray-500 uppercase font-semibold">Professional Network</div>
                    <div className="text-sm font-semibold text-[#3B2929] group-hover:text-[#6B1F32] transition-colors">
                      Nisha Senthil Kumar
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-[#6B1F32] transition-all" />
              </a>

            </div>

            <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#E8D8C8] text-xs text-[#6B1F32] font-mono-code font-semibold">
              ⚡ Typical response time: Within 24 hours
            </div>
          </motion.div>

          {/* Right 7 Cols: Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-[#E8D8C8] bg-[#FFF9F2] shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#6B1F32]/10 text-[#6B1F32] border border-[#6B1F32]/30 flex items-center justify-center text-2xl mb-2 font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-bold font-display text-[#3B2929]">
                  Message Prepared & Sent!
                </h3>
                <p className="text-sm text-[#3B2929]/80 max-w-md leading-relaxed">
                  Thank you for reaching out, <strong className="text-[#6B1F32]">{formData.name}</strong>. I will get back to you shortly at <strong className="text-[#B9828F]">{formData.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Web Design Project', message: '' });
                  }}
                  className="btn-secondary mt-4 px-6 py-2.5 text-xs font-mono-code transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-xs font-mono-code text-[#6B1F32] uppercase tracking-wider mb-2 font-bold">
                  Send a Direct Message
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono-code text-[#3B2929] block mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F0E6] border text-sm text-[#3B2929] placeholder-gray-400 focus:outline-none transition-all ${
                        errors.name ? 'border-rose-500' : 'border-[#E8D8C8] focus:border-[#6B1F32]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-600 font-mono-code mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-mono-code text-[#3B2929] block mb-1.5 font-medium">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-[#F7F0E6] border text-sm text-[#3B2929] placeholder-gray-400 focus:outline-none transition-all ${
                        errors.email ? 'border-rose-500' : 'border-[#E8D8C8] focus:border-[#6B1F32]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-600 font-mono-code mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="text-xs font-mono-code text-[#3B2929] block mb-1.5 font-medium">
                    Project Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F7F0E6] border border-[#E8D8C8] text-sm text-[#3B2929] focus:outline-none focus:border-[#6B1F32] transition-all cursor-pointer"
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
                    <label className="text-xs font-mono-code text-[#3B2929] font-medium">
                      Message *
                    </label>
                    <span className="text-[10px] font-mono-code text-gray-500">
                      {formData.message.length} chars
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your project goals, timeline, or design requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-[#F7F0E6] border text-sm text-[#3B2929] placeholder-gray-400 focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-rose-500' : 'border-[#E8D8C8] focus:border-[#6B1F32]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-600 font-mono-code mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => soundFX.playHover()}
                  className="btn-primary w-full py-4 text-xs font-mono-code uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
