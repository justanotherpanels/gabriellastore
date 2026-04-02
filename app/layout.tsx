import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { CSPostHogProvider } from "./layout/posthog-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jasa Install Windows & Mac OS Terdekat di Semarang (Premium)",
  description: "Melayani jasa install ulang laptop segala merk. Windows 10/11, macOS, dan Distro Linux (Ubuntu). Solusi terbaik, aman data, dan khusus mahasiswa. Hubungi 0896-6008-1616.",
  keywords: ["jasa install windows 10 semarang", "jasa instalasi linux ubuntu semarang", "install ulang laptop", "install laptop mahasiswa", "jasa instal laptop murah", "kota semarang"],
  alternates: {
    canonical: "https://gabriellstore.net"
  },
  openGraph: {
    title: "Jasa Install Layanan Windows & Mac OS Semarang",
    description: "Install ulang berbagai sistem operasi di perangkat laptop Anda dengan proses profesional.",
    url: "https://gabriellstore.net",
    siteName: "Gabriel Store",
    images: [
      { url: "/banner-seo.png", width: 1200, height: 630, alt: "Jasa Install OS Semarang" }
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 selection:text-blue-200 flex flex-col">
        <CSPostHogProvider>
          <Navbar />
          {children}
          <Footer />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
