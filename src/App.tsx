import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Integrations from "@/components/Integrations";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// Single React island for the whole page. Language state lives in React
// Context, so the entire interactive tree is hydrated together.
export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="flex-1 w-full bg-obsidian text-slate-100 font-sans">
        {/* Hero & Dashboard Preview */}
        <Hero />

        {/* Bento Grid Core Capabilities */}
        <BentoGrid />

        {/* Integrations Infinite Marquee */}
        <Integrations />

        {/* Contact Form & Info */}
        <Contact />

        {/* Customer Testimonials */}
        <Testimonials />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
