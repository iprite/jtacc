"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden bg-[#090d16]/30 border-t border-white/5">
      {/* Ambient glowing radial lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[500px] bg-neon-cyan/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[300px] bg-neon-purple/5 blur-[100px] rounded-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-cyan flex items-center justify-center gap-1.5 animate-pulse-slow">
            <Sparkles className="h-4 w-4" /> {t.contactSection.pill}
          </h2>
          <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {t.contactSection.title}
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.contactSection.desc}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info cards (Left col, span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Phone Card */}
            <a
              href="tel:0986646442"
              className="group relative block rounded-2xl border border-white/5 bg-obsidian-light/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/40 hover:bg-obsidian-light/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.05)]"
            >
              <div className="absolute -inset-px -z-10 rounded-[15px] bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-25"></div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-neon-cyan/10 text-neon-cyan flex items-center justify-center border border-neon-cyan/20 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">{t.contactSection.cardPhoneTitle}</span>
                  <span className="text-lg font-bold text-white mt-1 block group-hover:text-neon-cyan transition-colors">098-664-6442</span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:admin@jtacc.co.th"
              className="group relative block rounded-2xl border border-white/5 bg-obsidian-light/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-neon-blue/40 hover:bg-obsidian-light/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)]"
            >
              <div className="absolute -inset-px -z-10 rounded-[15px] bg-gradient-to-r from-neon-indigo to-neon-blue opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-25"></div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center border border-neon-blue/20 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">{t.contactSection.cardEmailTitle}</span>
                  <span className="text-base font-bold text-white mt-1 block group-hover:text-neon-blue transition-colors">admin@jtacc.co.th</span>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="relative rounded-2xl border border-white/5 bg-obsidian-light/40 p-6 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-neon-purple/10 text-neon-purple flex items-center justify-center border border-neon-purple/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">{t.contactSection.cardLocationTitle}</span>
                  <span className="text-sm font-semibold text-slate-200 mt-1 block leading-relaxed">{t.contactSection.cardLocationDesc}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact form card (Right col, span 7) */}
          <div className="lg:col-span-7 relative">
            <div className="h-full rounded-2xl border border-white/10 bg-obsidian-light/50 p-6 sm:p-8 backdrop-blur-lg flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">{t.contactSection.formName} *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-[#080b13] border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">{t.contactSection.formPhone} *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formState.phone}
                      onChange={e => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-[#080b13] border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">{t.contactSection.formEmail} *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-[#080b13] border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">{t.contactSection.formMessage}</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-[#080b13] border border-white/10 rounded-lg py-2.5 px-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-[10px] text-slate-500">* {language === "th" ? "จำเป็นต้องระบุข้อมูล" : "Required fields"}</p>
                  
                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-neon-blue to-neon-cyan px-6 py-3 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-102 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                  >
                    {loading ? (
                      <span className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        {t.contactSection.formSubmit}
                        <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Success Banner */}
              {submitted && (
                <div className="absolute inset-4 rounded-xl bg-[#0c101c] border border-emerald-500/20 p-6 flex flex-col items-center justify-center text-center backdrop-blur-md animate-fade-in">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mb-3 animate-bounce" />
                  <h4 className="text-sm font-bold text-white mb-2">{language === "th" ? "ส่งข้อมูลสำเร็จ!" : "Message Sent!"}</h4>
                  <p className="text-xs text-slate-400 max-w-xs">{t.contactSection.formSuccess}</p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
