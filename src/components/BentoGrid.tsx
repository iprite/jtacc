"use client";

import React from "react";
import { Sparkles, RefreshCcw, Check, MessageSquare, LineChart, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function BentoGrid() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="features" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-[400px] w-[400px] bg-neon-blue/5 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 -z-10 h-[300px] w-[500px] bg-neon-purple/5 blur-[90px] rounded-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-cyan flex items-center gap-1.5 animate-pulse-slow">
            <Sparkles className="h-4 w-4" /> {t.bento.pill}
          </h2>
          <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl leading-tight">
            {t.bento.sectionTitle}
          </p>
          <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed">
            {t.bento.sectionDesc}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: 24/7 Autonomous Bookkeeping (Large span 2 cols on tablet/desktop) */}
          <div className="md:col-span-2 glassmorphism glassmorphism-hover rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative group">
            {/* Visual scan animation */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-scan"></div>
            
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-neon-cyan/10 text-neon-cyan flex items-center justify-center border border-neon-cyan/20">
                  <RefreshCcw className="h-5 w-5 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.bento.card1Title}</h3>
                  <p className="text-xs text-slate-400">{t.bento.card1Subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-xl">
                {t.bento.card1Desc}
              </p>
            </div>

            {/* Visual simulation block */}
            <div className="mt-8 bg-black/40 border border-white/5 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-white/5">
                <span>{t.bento.card1Feed}</span>
                <span className="text-neon-cyan font-mono flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-ping"></span>
                  {t.bento.card1Listening}
                </span>
              </div>
              <div className="space-y-2">
                {/* Simulated matching transaction */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">Bank Debit</span>
                    <span className="text-xs text-slate-200">GCP Cloud Compute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-200">-$342.10</span>
                    <span className="text-[10px] bg-neon-cyan/15 text-neon-cyan px-1.5 py-0.5 rounded font-mono">Matched to Hosting</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">Stripe Payout</span>
                    <span className="text-xs text-slate-200">Weekly Customer Payout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-200">+$24,590.00</span>
                    <span className="text-[10px] bg-neon-cyan/15 text-neon-cyan px-1.5 py-0.5 rounded font-mono">Matched to Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AI Tax Prediction (Square card) */}
          <div className="glassmorphism glassmorphism-hover rounded-2xl p-6 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center border border-neon-blue/20">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.bento.card2Title}</h3>
                  <p className="text-xs text-slate-400">{t.bento.card2Subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {t.bento.card2Desc}
              </p>
            </div>

            {/* Simulated graph / savings card */}
            <div className="mt-6 bg-gradient-to-br from-neon-blue/5 to-neon-cyan/5 border border-white/5 rounded-xl p-4">
              <div className="flex justify-between items-center text-xs mb-3">
                <span className="text-slate-400">{t.bento.card2Savings}</span>
                <span className="text-neon-cyan font-bold">+$12,480.00</span>
              </div>
              {/* Simple horizontal visual bar chart */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                    <span>{t.bento.card2Threshold}</span>
                    <span>84%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full" style={{ width: "84%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Instant Financial Intelligence (Square card) */}
          <div className="glassmorphism glassmorphism-hover rounded-2xl p-6 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-neon-purple/10 text-neon-purple flex items-center justify-center border border-neon-purple/20">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.bento.card3Title}</h3>
                  <p className="text-xs text-slate-400">{t.bento.card3Subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {t.bento.card3Desc}
              </p>
            </div>

            {/* Chat prompt mockup */}
            <div className="mt-6 bg-black/40 border border-white/5 rounded-xl p-3.5 space-y-2 text-xs">
              <div className="text-slate-400 italic">{t.bento.card3Prompt}</div>
              <div className="text-neon-cyan font-medium border-l border-neon-cyan/30 pl-2 leading-relaxed">
                {t.bento.card3Reply}
              </div>
            </div>
          </div>

          {/* Card 4: Human-in-the-Loop Guarantee (Large span 2 cols on tablet/desktop) */}
          <div className="md:col-span-2 glassmorphism glassmorphism-hover rounded-2xl p-6 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-neon-indigo/10 text-neon-indigo flex items-center justify-center border border-neon-indigo/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.bento.card4Title}</h3>
                  <p className="text-xs text-slate-400">{t.bento.card4Subtitle}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {t.bento.card4Desc}
              </p>
            </div>

            {/* CPA Checkpoints list */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="border border-white/5 bg-[#0f1424]/60 p-3 rounded-lg flex items-start gap-2">
                <Check className="h-4 w-4 text-neon-cyan mt-0.5 shrink-0" />
                <div className="text-[11px] leading-relaxed">
                  <span className="font-semibold text-slate-200 block">{t.bento.card4Check1Title}</span>
                  <span className="text-slate-400 text-[10px]">{t.bento.card4Check1Desc}</span>
                </div>
              </div>
              
              <div className="border border-white/5 bg-[#0f1424]/60 p-3 rounded-lg flex items-start gap-2">
                <Check className="h-4 w-4 text-neon-cyan mt-0.5 shrink-0" />
                <div className="text-[11px] leading-relaxed">
                  <span className="font-semibold text-slate-200 block">{t.bento.card4Check2Title}</span>
                  <span className="text-slate-400 text-[10px]">{t.bento.card4Check2Desc}</span>
                </div>
              </div>

              <div className="border border-white/5 bg-[#0f1424]/60 p-3 rounded-lg flex items-start gap-2">
                <Check className="h-4 w-4 text-neon-cyan mt-0.5 shrink-0" />
                <div className="text-[11px] leading-relaxed">
                  <span className="font-semibold text-slate-200 block">{t.bento.card4Check3Title}</span>
                  <span className="text-slate-400 text-[10px]">{t.bento.card4Check3Desc}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
