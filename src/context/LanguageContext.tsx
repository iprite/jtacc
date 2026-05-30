"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "th" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("th"); // Default to Thai for localized presence

  // Load language from query parameter, local storage, or navigator language on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Check URL parameters (highest priority, good for SEO indexing)
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "th" || urlLang === "en") {
        setLanguageState(urlLang as Language);
        localStorage.setItem("jtacc-lang", urlLang);
        return;
      }

      // 2. Check local storage
      const cachedLang = localStorage.getItem("jtacc-lang");
      if (cachedLang === "th" || cachedLang === "en") {
        setLanguageState(cachedLang as Language);
        return;
      }

      // 3. Check browser settings
      const browserLang = navigator.language.startsWith("th") ? "th" : "en";
      setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("jtacc-lang", lang);
      
      // Update the URL parameter without reloading the page (helps with SEO and sharing links)
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.pushState({}, "", url.toString());
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
