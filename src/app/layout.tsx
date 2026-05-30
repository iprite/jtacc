import type { Metadata } from "next";
import { Noto_Sans_Thai, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const notoThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jtacc | AI-First Accounting Firm for Modern Businesses | บริษัทบัญชี AI-First ยุคใหม่",
  description: "Automate 99% of bookkeeping, tax compliance, and financial intelligence with jtacc. Next-generation autonomous AI agents backed by expert human CPA oversight. / จัดการบัญชี ภาษี และวิเคราะห์การเงินอัตโนมัติด้วย AI และผู้สอบบัญชี CPA",
  keywords: [
    "AI accounting", "automated bookkeeping", "tax compliance AI", "startup bookkeeping", 
    "autonomous financial agents", "jtacc", "บัญชี AI", "ทำบัญชีอัตโนมัติ", "ยื่นภาษีสตาร์ทอัพ", "กรมสรรพากร"
  ],
  authors: [{ name: "jtacc Inc." }],
  openGraph: {
    title: "jtacc | AI-First Accounting for Modern Businesses",
    description: "Automate bookkeeping, tax compliance, and financial intelligence using autonomous AI agents with expert human review.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoThai.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
