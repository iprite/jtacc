"use client";

import React from "react";
import { Sparkles, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
  rating: number;
}

const TESTIMONIALS_TH: Testimonial[] = [
  {
    quote: "ก่อนหน้านี้ บัญชีบริษัทต้องเสียเวลาเดือนละกว่า 15 ชั่วโมงในการทำเอกสารและกระทบยอดเงินสด ตอนนี้ทุกอย่างเกิดขึ้นอัตโนมัติในพื้นหลังพร้อมการรับรองความถูกต้องจาก CPA มืออาชีพ ความเร็วของระบบน่าทึ่งมาก",
    author: "คุณณัฐภรณ์ ส.",
    role: "ประธานเจ้าหน้าที่บริหาร & ผู้ร่วมก่อตั้ง",
    company: "Lumina Paytech",
    avatarInitials: "ณส",
    rating: 5,
  },
  {
    quote: "ที่ปรึกษา AI ตอบคำถามภาษีและวิเคราะห์ความปลอดภัยทางการเงินได้เร็วมาก ผมถามเรื่องค่าภาษีสะสมแล้วได้รับรายงาน PDF ออกมาใน 10 วินาที เหมือนมี CFO ส่วนตัวอยู่ใน Slack ตลอด 24 ชั่วโมง",
    author: "คุณวรุตม์ ก.",
    role: "ผู้ก่อตั้ง",
    company: "Siam Logistics AI",
    avatarInitials: "วก",
    rating: 5,
  },
  {
    quote: "งานภาษีและ e-tax invoice เคยเป็นเรื่องปวดหัวสำหรับทีมเรา jtacc เชื่อมข้อมูลการรับชำระเงินของ Stripe ตรงเข้ากับฐานระบบของกรมสรรพากรโดยตรง รวดเร็ว ปลอดภัย และไร้ข้อผิดพลาด",
    author: "คุณโชติกา พ.",
    role: "ผู้อำนวยการฝ่ายปฏิบัติการ",
    company: "OmniChannel SG",
    avatarInitials: "ชพ",
    rating: 5,
  },
  {
    quote: "การรับประกันความถูกต้องโดยผู้ตรวจสอบบัญชีรับอนุญาต (CPA) ช่วยให้เรามั่นใจและโอนบัญชีทั้งหมดมาใช้ jtacc ความรวดเร็วในการประมวลผลด้วย AI และการคุ้มครองตามเกณฑ์กฎหมายคือสิ่งที่ดีที่สุด",
    author: "คุณปฏิภาณ ม.",
    role: "ผู้ก่อตั้งร่วม",
    company: "FinVerse Studio",
    avatarInitials: "ปม",
    rating: 5,
  },
];

const TESTIMONIALS_EN: Testimonial[] = [
  {
    quote: "Before jtacc, our bookkeeping took 15 hours a month of manual export. Now, it happens continuously in the background, checked by a certified CPA. The speed is unbelievable.",
    author: "Nattaporn S.",
    role: "CEO & Co-founder",
    company: "Lumina Paytech",
    avatarInitials: "NS",
    rating: 5,
  },
  {
    quote: "The AI Chat advisor is a game-changer. I asked about our tax liabilities and got a detailed PDF breakdown ready for filing in 10 seconds. It feels like having a CFO on Slack 24/7.",
    author: "Warut K.",
    role: "Founder",
    company: "Siam Logistics AI",
    avatarInitials: "WK",
    rating: 5,
  },
  {
    quote: "Tax compliance and e-tax invoices were a mess for our team. jtacc synchronized our stripe payments with the Revenue Department (กรมสรรพากร) instantly. No manual errors.",
    author: "Chotika P.",
    role: "Head of Operations",
    company: "OmniChannel SG",
    avatarInitials: "CP",
    rating: 5,
  },
  {
    quote: "The Human-in-the-loop guarantee gave us the confidence to switch from a traditional firm. The speed of AI matched with CPA liability protection is the perfect combination.",
    author: "Patiphan M.",
    role: "Co-Founder",
    company: "FinVerse Studio",
    avatarInitials: "PM",
    rating: 5,
  },
];

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];
  const list = language === "th" ? TESTIMONIALS_TH : TESTIMONIALS_EN;

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#090d16]/20 border-t border-white/5">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-1/4 -translate-y-1/2 -z-10 h-[300px] w-[500px] bg-neon-purple/5 blur-[90px] rounded-full"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-neon-cyan flex items-center justify-center gap-1.5 animate-pulse-slow">
            <Sparkles className="h-4 w-4" /> {t.testimonials.pill}
          </h2>
          <p className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            {t.testimonials.title}
          </p>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.testimonials.desc}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((testimonial, idx) => (
            <div
              key={idx}
              className="glassmorphism glassmorphism-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[1px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-obsidian flex items-center justify-center text-xs font-bold text-slate-200">
                    {testimonial.avatarInitials}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{testimonial.author}</p>
                  <p className="text-[10px] text-slate-400">
                    {testimonial.role}, <span className="text-neon-cyan font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
