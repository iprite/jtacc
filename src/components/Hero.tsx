"use client";

import React from "react";
import { ArrowRight, Sparkles, Check, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-30"></div>
      <div className="absolute inset-0 -z-10 line-grid opacity-20"></div>

      {/* Radial neon glow blobs */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-neon-cyan/10 blur-[80px] rounded-full animate-glow-pulse"></div>
      <div className="absolute top-1/3 left-1/4 -z-10 h-[300px] w-[500px] -translate-y-1/2 bg-neon-blue/10 blur-[90px] rounded-full"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* AI Banner Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-3 py-1 text-xs font-semibold text-neon-cyan animate-pulse-slow">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.pill}
          </div>

          {/* Headline */}
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            {t.hero.title1}{" "}
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-white bg-clip-text text-transparent animate-text-shine bg-[length:200%_auto] pb-1">
              {t.hero.title2}
            </span>{" "}
            {t.hero.title3}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg md:text-xl leading-relaxed">
            {t.hero.subheadline}
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Consult Now */}
            <a
              href="#contact"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-102"
            >
              {t.common.consultNow}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            {/* Call Direct */}
            <a
              href="tel:0986646442"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <Phone className="h-3.5 w-3.5 text-neon-cyan fill-none animate-pulse" />
              098-664-6442
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-neon-cyan" />
              {t.hero.trust1}
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-neon-cyan" />
              {t.hero.trust2}
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-neon-cyan" />
              {t.hero.trust3}
            </div>
          </div>

          {/* Visual Dashboard Preview Container */}
          <div className="w-full">
            <DashboardPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
