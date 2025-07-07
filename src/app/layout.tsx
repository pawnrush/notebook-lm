import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotebookLM for Special Education Teachers - Interactive Training",
  description: "A comprehensive 75-minute interactive training that teaches special education teachers how to use AI tools ethically and effectively for IEPs, BIPs, administrative tasks, and differentiated instruction.",
  keywords: "NotebookLM, Special Education, AI, IEP, BIP, Teacher Training, Educational Technology",
  authors: [{ name: "NotebookLM Training Team" }],
  openGraph: {
    title: "NotebookLM for Special Education Teachers",
    description: "Empowering special education teachers with ethical AI tools",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

