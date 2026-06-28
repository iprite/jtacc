"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, TrendingUp, Sparkles, MessageSquare, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/constants/translations";

interface Transaction {
  id: string;
  merchant: string;
  amount: string;
  category: string;
  status: "Pending" | "AI Matched" | "CPA Approved";
  confidence: number;
}

export default function DashboardPreview() {
  const { language } = useLanguage();
  const t = translations[language];

  // Helper translations for statuses
  const statusTranslation = (status: string) => {
    if (status === "CPA Approved") return t.dashboard.cpaApproved;
    if (status === "AI Matched") return t.dashboard.matched;
    return "Pending";
  };

  const INITIAL_TRANSACTIONS: Transaction[] = [
    { id: "1", merchant: "Stripe Transfer", amount: "+$12,450.00", category: language === "th" ? "รายได้" : "Revenue", status: "CPA Approved", confidence: 100 },
    { id: "2", merchant: "AWS Cloud Infrastructure", amount: "-$1,240.50", category: language === "th" ? "คลาวด์เซิร์ฟเวอร์" : "Hosting", status: "AI Matched", confidence: 99 },
    { id: "3", merchant: "Google Workspace Office", amount: "-$120.00", category: language === "th" ? "ซอฟต์แวร์" : "Software", status: "AI Matched", confidence: 98 },
    { id: "4", merchant: "Facebook Ads Inc.", amount: "-$3,500.00", category: language === "th" ? "การตลาด" : "Marketing", status: "Pending", confidence: 85 },
  ];

  const MERCHANTS = [
    { merchant: "OpenAI API Fees", amount: "-$842.20", category: language === "th" ? "ปัญญาประดิษฐ์" : "AI Compute", status: "AI Matched" as const, confidence: 99 },
    { merchant: "GitHub Enterprise", amount: "-$450.00", category: language === "th" ? "เครื่องมือพัฒนา" : "Software", status: "AI Matched" as const, confidence: 97 },
    { merchant: "Figma Professional", amount: "-$96.00", category: language === "th" ? "การออกแบบ" : "Design Tools", status: "AI Matched" as const, confidence: 99 },
    { merchant: "Customer Receipt #1092", amount: "+$4,800.00", category: language === "th" ? "รายได้" : "Revenue", status: "AI Matched" as const, confidence: 96 }
  ];

  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [activeTab, setActiveTab] = useState<"cashflow" | "ledger" | "chat">("cashflow");
  const [agentStatus, setAgentStatus] = useState("Idle");
  
  const [chatLog, setChatLog] = useState<{ sender: "user" | "ai"; text: string }[]>([]);

  // Update initial chat log based on active language
  useEffect(() => {
    setChatLog([
      { sender: "user", text: t.dashboard.chatInitialUser },
      { sender: "ai", text: t.dashboard.chatInitialAI }
    ]);
    setTransactions(INITIAL_TRANSACTIONS);
  }, [language]);

  const [userInput, setUserInput] = useState("");

  // Simulated AI agent working in the background
  useEffect(() => {
    const interval = setInterval(() => {
      setAgentStatus("Auditing");
      
      setTimeout(() => {
        setTransactions(prev => {
          const hasPending = prev.some(t => t.status === "Pending");
          if (hasPending) {
            return prev.map(t => t.status === "Pending" ? { ...t, status: "AI Matched" as const, confidence: 97 } : t);
          } else {
            const randIdx = Math.floor(Math.random() * MERCHANTS.length);
            const template = MERCHANTS[randIdx];
            const newT: Transaction = {
              id: Date.now().toString(),
              ...template
            };
            return [newT, ...prev.slice(0, 3)];
          }
        });
        setAgentStatus("Reconciled");
        
        setTimeout(() => {
          setAgentStatus("Idle");
        }, 1500);
      }, 2000);
      
    }, 8500);

    return () => clearInterval(interval);
  }, [language]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMsg = userInput;
    setChatLog(prev => [...prev, { sender: "user", text: userMsg }]);
    setUserInput("");
    setAgentStatus("Analyzing Financials");

    setTimeout(() => {
      let reply = "";
      if (userMsg.toLowerCase().includes("tax") || userMsg.toLowerCase().includes("save") || userMsg.includes("ภาษี") || userMsg.includes("ลดหย่อน")) {
        reply = t.dashboard.chatReplyTax;
      } else if (userMsg.toLowerCase().includes("cash") || userMsg.toLowerCase().includes("burn") || userMsg.includes("เงิน") || userMsg.includes("กระแสเงินสด")) {
        reply = t.dashboard.chatReplyCash;
      } else {
        reply = t.dashboard.chatReplyDefault;
      }
      setChatLog(prev => [...prev, { sender: "ai", text: reply }]);
      setAgentStatus("Idle");
    }, 1500);
  };

  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl rounded-2xl border border-white/10 bg-obsidian-light/60 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      {/* Outer gradient glow effect */}
      <div className="absolute -inset-px -z-10 rounded-[18px] bg-gradient-to-r from-neon-cyan/20 via-neon-indigo/30 to-neon-purple/20 opacity-70"></div>
      
      {/* Dashboard container */}
      <div className="rounded-[14px] bg-[#0c101c] overflow-hidden border border-white/5">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-white/5 bg-[#090d16] px-4 py-3 gap-2">
          <div className="flex items-center gap-3">
            {/* Window dot decorations */}
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
            </div>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Cpu className={`h-3.5 w-3.5 ${agentStatus !== "Idle" ? "text-neon-cyan animate-spin" : "text-slate-400"}`} />
              {t.dashboard.agentStatus}
              <span className={`font-semibold ${agentStatus !== "Idle" ? "text-neon-cyan" : "text-slate-300"}`}>
                {agentStatus === "Idle" && t.dashboard.statusIdle}
                {agentStatus === "Auditing" && t.dashboard.statusAuditing}
                {agentStatus === "Reconciled" && t.dashboard.statusReconciled}
                {agentStatus === "Analyzing Financials" && t.dashboard.statusAnalyzing}
              </span>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-[#0f1424] p-0.5 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveTab("cashflow")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === "cashflow"
                  ? "bg-gradient-to-r from-neon-blue to-neon-cyan text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.dashboard.tabCashflow}
            </button>
            <button
              onClick={() => setActiveTab("ledger")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === "ledger"
                  ? "bg-gradient-to-r from-neon-blue to-neon-cyan text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.dashboard.tabLedger}
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                activeTab === "chat"
                  ? "bg-gradient-to-r from-neon-blue to-neon-cyan text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t.dashboard.tabAdvisor}
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          
          {/* Main Visualizer Area */}
          <div className="lg:col-span-8 p-6 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-between">
            {activeTab === "cashflow" && (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">{t.dashboard.operatingBalance}</h4>
                      <p className="text-3xl font-bold text-white mt-1">$245,000.00</p>
                    </div>
                    <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full text-xs font-medium border border-green-500/20">
                      <TrendingUp className="h-3 w-3" />
                      {t.dashboard.momGrowth}
                    </div>
                  </div>
                  
                  {/* Visual Chart */}
                  <div className="relative h-44 w-full mt-4">
                    <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Grid lines */}
                      <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                      
                      {/* Gradient Fill under path */}
                      <path
                        d="M0 100 Q 50 85, 100 90 T 200 45 T 300 35 T 400 15 L 400 120 L 0 120 Z"
                        fill="url(#chartGlow)"
                      />
                      
                      {/* Line Path */}
                      <path
                        d="M0 100 Q 50 85, 100 90 T 200 45 T 300 35 T 400 15"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                      
                      {/* Dot highlighter */}
                      <circle cx="400" cy="15" r="4.5" fill="#00F0FF" className="animate-ping" />
                      <circle cx="400" cy="15" r="3" fill="#ffffff" />
                      
                      {/* Linear gradient for stroke */}
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#00F0FF" />
                      </linearGradient>
                    </svg>
                  </div>
                </div>

                {/* Substats */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4 mt-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">{t.dashboard.monthlyBurn}</span>
                    <p className="text-sm font-semibold text-white mt-0.5">$18,450.00</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">{t.dashboard.runway}</span>
                    <p className="text-sm font-semibold text-neon-cyan mt-0.5">13.2 {t.common.months}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">{t.dashboard.unmatched}</span>
                    <p className="text-sm font-semibold text-white mt-0.5">{t.dashboard.unmatchedItem}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ledger" && (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.dashboard.ledgerTitle}</h4>
                      <p className="text-xs text-slate-400">{t.dashboard.ledgerSubtitle}</p>
                    </div>
                    <Sparkles className="h-4 w-4 text-neon-cyan animate-pulse" />
                  </div>

                  {/* Simulated Matching Panel */}
                  <div className="space-y-3">
                    <div className="bg-white/5 border border-white/5 p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-[#10b981]/15 text-[#10b981] flex items-center justify-center text-xs font-bold">ET</div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">{t.dashboard.etaxTitle}</p>
                          <p className="text-[10px] text-slate-400">{t.dashboard.etaxDoc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-white">+$3,450.00</p>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">{t.dashboard.matched} (99%)</span>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/5 p-3 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-[#3b82f6]/15 text-[#3b82f6] flex items-center justify-center text-xs font-bold">SP</div>
                        <div>
                          <p className="text-xs font-semibold text-slate-200">{t.dashboard.stripeTitle}</p>
                          <p className="text-[10px] text-slate-400">{t.dashboard.stripeDesc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-white">+$12,450.00</p>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">{t.dashboard.cpaApproved}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center text-xs text-slate-400">
                  <span>{t.dashboard.reconciliationCycle}</span>
                  <a href="#features" className="text-neon-cyan hover:underline font-medium">{t.dashboard.configureRules}</a>
                </div>
              </div>
            )}

            {activeTab === "chat" && (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{t.dashboard.chatTitle}</h4>
                  <p className="text-xs text-slate-400 mb-4">{t.dashboard.chatSubtitle}</p>
                </div>

                {/* Dialog Mock */}
                <div className="space-y-4 max-h-[220px] overflow-y-auto no-scrollbar mb-4">
                  {chatLog.map((chat, idx) => (
                    <div key={idx} className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-lg p-2.5 text-xs leading-relaxed ${
                          chat.sender === "user"
                            ? "bg-[#18233C] text-slate-100 rounded-br-none border border-white/5"
                            : "bg-[#090d16] text-neon-cyan rounded-bl-none border border-neon-cyan/20"
                        }`}
                      >
                        {chat.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Form Input */}
                <form onSubmit={handleSendMessage} className="relative mt-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={e => setUserInput(e.target.value)}
                    placeholder={t.dashboard.chatPlaceholder}
                    className="w-full bg-[#080b13] border border-white/10 rounded-lg py-2.5 pl-3 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan"
                  />
                  <button type="submit" className="absolute right-2.5 top-3 text-neon-cyan hover:text-white transition-colors">
                    <MessageSquare className="h-3.5 w-3.5" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Panel: Transaction Feed Stream */}
          <div className="lg:col-span-4 p-6 bg-[#080c14]/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{t.dashboard.liveActivity}</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                </span>
              </div>

              {/* Transactions stream */}
              <div className="space-y-3.5">
                {transactions.map(tItem => (
                  <div key={tItem.id} className="relative flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-200 truncate max-w-[130px]">{tItem.merchant}</span>
                      <span className="text-[10px] text-slate-500">{tItem.category}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-200 block">{tItem.amount}</span>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <span
                          className={`text-[9px] font-mono ${
                            tItem.status === "CPA Approved"
                              ? "text-emerald-400"
                              : tItem.status === "AI Matched"
                              ? "text-neon-cyan"
                              : "text-yellow-500"
                          }`}
                        >
                          {statusTranslation(tItem.status)} ({tItem.confidence}%)
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Human checkmark overlay card */}
            <div className="mt-6 bg-[#0f1526]/80 border border-white/10 rounded-lg p-3">
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-[1px] flex items-center justify-center">
                  <div className="h-full w-full rounded-full bg-obsidian flex items-center justify-center text-[9px] font-bold text-white">CPA</div>
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-semibold text-slate-200">{t.dashboard.cpaVerified}</p>
                  <p className="text-[9px] text-slate-400">{t.dashboard.cpaName}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
