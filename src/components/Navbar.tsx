"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Activity, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-obsidian/75 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-neon-blue to-neon-cyan p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-obsidian text-neon-cyan">
                <Activity className="h-4.5 w-4.5 animate-pulse" />
              </div>
              {/* Outer Glow */}
              <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-tr from-neon-blue to-neon-cyan opacity-40 blur-[4px]"></div>
            </div>
            <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center">
              jtacc
              <span className="text-neon-cyan font-extrabold ml-[1px] animate-pulse">.</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-cyan"
            >
              {t.navbar.features}
            </a>
            <a
              href="#integrations"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-cyan"
            >
              {t.navbar.integrations}
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-cyan"
            >
              {t.navbar.about}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-slate-300 transition-colors hover:text-neon-cyan"
            >
              {t.navbar.contact}
            </a>
          </nav>

          {/* CTA & Language Action */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center bg-[#0f1424]/60 p-0.5 rounded-lg border border-white/10 text-xs font-mono shadow-inner mr-2">
              <button
                onClick={() => setLanguage("th")}
                className={`px-2 py-1 rounded transition-all duration-200 ${
                  language === "th"
                    ? "bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                TH
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded transition-all duration-200 ${
                  language === "en"
                    ? "bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="mailto:admin@jtacc.co.th"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors mr-2"
            >
              admin@jtacc.co.th
            </a>
            
            <a
              href="tel:0986646442"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 mr-2"
            >
              <Phone className="h-4 w-4 text-neon-cyan animate-pulse" />
              098-664-6442
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:border-neon-cyan/40 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
            >
              {t.common.consultNow}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Language toggle for mobile view outside of menu for speed */}
            <div className="flex bg-[#0f1424]/60 p-0.5 rounded-lg border border-white/10 text-xs font-mono">
              <button
                onClick={() => setLanguage(language === "th" ? "en" : "th")}
                className="px-2.5 py-0.5 text-neon-cyan font-bold"
              >
                {language.toUpperCase()}
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/5 hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden border-b border-white/5 bg-obsidian/95 backdrop-blur-lg`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-4 py-3 sm:px-6">
          <a
            onClick={() => setIsOpen(false)}
            href="#features"
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-neon-cyan"
          >
            {t.navbar.features}
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#integrations"
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-neon-cyan"
          >
            {t.navbar.integrations}
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#about"
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-neon-cyan"
          >
            {t.navbar.about}
          </a>
          <a
            onClick={() => setIsOpen(false)}
            href="#contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-neon-cyan"
          >
            {t.navbar.contact}
          </a>
          
          <div className="border-t border-white/5 pt-4 pb-2 flex flex-col gap-2">
            <div className="flex justify-between items-center px-3 py-2">
              <span className="text-sm font-medium text-slate-400">Language / ภาษา</span>
              <div className="flex bg-[#0f1424]/60 p-0.5 rounded-lg border border-white/10 text-xs font-mono">
                <button
                  onClick={() => { setLanguage("th"); setIsOpen(false); }}
                  className={`px-3 py-1 rounded transition-colors ${
                    language === "th" ? "bg-neon-cyan/20 text-neon-cyan font-bold" : "text-slate-400"
                  }`}
                >
                  ไทย
                </button>
                <button
                  onClick={() => { setLanguage("en"); setIsOpen(false); }}
                  className={`px-3 py-1 rounded transition-colors ${
                    language === "en" ? "bg-neon-cyan/20 text-neon-cyan font-bold" : "text-slate-400"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
            
            <a
              onClick={() => setIsOpen(false)}
              href="mailto:admin@jtacc.co.th"
              className="block rounded-md px-3 py-2 text-center text-base font-medium text-slate-300 hover:bg-white/5"
            >
              admin@jtacc.co.th
            </a>
            
            <a
              onClick={() => setIsOpen(false)}
              href="tel:0986646442"
              className="block rounded-md px-3 py-2 text-center text-base font-medium text-slate-300 hover:bg-white/5 flex items-center justify-center gap-1.5"
            >
              <Phone className="h-4 w-4 text-neon-cyan" />
              098-664-6442
            </a>
            
            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="flex items-center justify-center gap-1.5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 py-2.5 text-center text-base font-medium text-white hover:bg-neon-cyan/20"
            >
              {t.common.consultNow}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
