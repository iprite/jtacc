"use client";

import React from "react";
import { CreditCard, DollarSign, FileText, ShoppingBag, Landmark, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

interface IntegrationItem {
  name: string;
  categoryKey: "globalPayouts" | "bankConnection" | "revenueDept" | "directBank" | "ecommerce" | "infraCost" | "compliance" | "usageMetrics" | "officialGateway" | "crossBorder";
  icon: React.ReactNode;
}

const INTEGRATIONS_LIST_1: IntegrationItem[] = [
  { name: "Stripe", categoryKey: "globalPayouts", icon: <CreditCard className="h-5 w-5 text-indigo-400" /> },
  { name: "Plaid", categoryKey: "bankConnection", icon: <Landmark className="h-5 w-5 text-emerald-400" /> },
  { name: "กรมสรรพากร API", categoryKey: "revenueDept", icon: <FileText className="h-5 w-5 text-neon-cyan" /> },
  { name: "Kasikorn Bank", categoryKey: "directBank", icon: <Landmark className="h-5 w-5 text-green-500" /> },
  { name: "Shopify", categoryKey: "ecommerce", icon: <ShoppingBag className="h-5 w-5 text-lime-400" /> },
  { name: "Siam Commercial Bank", categoryKey: "directBank", icon: <Landmark className="h-5 w-5 text-purple-500" /> },
];

const INTEGRATIONS_LIST_2: IntegrationItem[] = [
  { name: "AWS Billing", categoryKey: "infraCost", icon: <Database className="h-5 w-5 text-amber-500" /> },
  { name: "E-Tax Invoice", categoryKey: "compliance", icon: <FileText className="h-5 w-5 text-cyan-400" /> },
  { name: "OpenAI Platform", categoryKey: "usageMetrics", icon: <Database className="h-5 w-5 text-sky-400" /> },
  { name: "Bangkok Bank", categoryKey: "directBank", icon: <Landmark className="h-5 w-5 text-blue-500" /> },
  { name: "Wise", categoryKey: "crossBorder", icon: <DollarSign className="h-5 w-5 text-teal-400" /> },
  { name: "Revenue Department", categoryKey: "officialGateway", icon: <FileText className="h-5 w-5 text-neon-cyan" /> },
];

export default function Integrations() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="integrations" className="relative py-20 overflow-hidden border-y border-white/5 bg-[#090d16]/30">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[250px] w-[600px] bg-neon-cyan/5 blur-[80px] rounded-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-cyan">{t.integrations.pill}</h2>
          <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {t.integrations.title}
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.integrations.desc}
          </p>
        </div>
      </div>

      {/* Marquees */}
      <div className="flex flex-col gap-6 w-full overflow-hidden">
        
        {/* Row 1: Scrolling Right to Left */}
        <div className="flex w-[200%] gap-6 animate-marquee">
          {/* Double list for continuous effect */}
          {[...INTEGRATIONS_LIST_1, ...INTEGRATIONS_LIST_1].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex w-[280px] shrink-0 items-center gap-4 rounded-xl border border-white/5 bg-obsidian-light/40 p-4 backdrop-blur-md transition-colors hover:border-neon-cyan/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">{item.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{t.integrations[item.categoryKey]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling Left to Right */}
        <div className="flex w-[200%] gap-6 animate-marquee-reverse">
          {/* Double list for continuous effect */}
          {[...INTEGRATIONS_LIST_2, ...INTEGRATIONS_LIST_2].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex w-[280px] shrink-0 items-center gap-4 rounded-xl border border-white/5 bg-obsidian-light/40 p-4 backdrop-blur-md transition-colors hover:border-neon-blue/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                {item.icon}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">{item.name}</p>
                <p className="text-[10px] text-slate-400 truncate">{t.integrations[item.categoryKey]}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
