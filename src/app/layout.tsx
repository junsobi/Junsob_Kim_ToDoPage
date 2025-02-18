import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kanban Todo",
  description: "Kanban-style Todo list",
  keywords: ["Kanban", "Todo", "Task Management", "Next.js", "Zustand"],
  authors: [{ name: "Junsob Kim", url: "https://junsob.kim" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn("antialiased bg-gray-50 text-gray-900", inter.variable)}
      >
        {children}
      </body>
    </html>
  );
}
