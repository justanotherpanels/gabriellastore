import { Metadata } from 'next';
import { 
  Laptop, 
  Monitor, 
  Settings2, 
  Zap, 
  ShieldCheck, 
  Download, 
  MessageCircle, 
  Cpu,
  Clock,
  ThumbsUp,
  MapPin,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jasa Install Laptop Semarang #1 | Windows, Mac & Linux | Gabriel Store",
  description: "Layanan jasa install ulang laptop segala merk di Semarang. Profesional, hemat biaya, dan terpercaya. Spesialis Windows, macOS, dan Linux untuk mahasiswa.",
  alternates: {
    canonical: "https://gabriellstore.net"
  },
  openGraph: {
    title: "Gabriel Store - Jasa Install Laptop Terbaik di Semarang",
    description: "Install ulang laptop Windows, Macbook, dan Linux Distro dengan harga mahasiswa. Hubungi kami sekarang!",
    url: "https://gabriellstore.net",
    siteName: "Gabriel Store",
    images: [
      { url: "/banner-seo.png", width: 1200, height: 630, alt: "Jasa Install Laptop Semarang" }
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function Home() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20tentang%20jasa%20install%20laptop%20di%20Semarang.%20`;

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <MapPin className="w-4 h-4" />
            Jasa Install Terbaik di Kota Semarang
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-blue-100 to-slate-300 md:leading-[1.1] mb-6">
            Bikin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Laptop Tua</span>-mu <br />
            Ngebut & Nyaman Lagi
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Spesialis jasa install sistem operasi & software di Semarang. Solusi hemat untuk mahasiswa. Kami siap melayani <strong>semua OS</strong>, <strong>semua merek</strong>, dan <strong>semua versi laptop</strong> kamu!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={WHATSAPP_LINK}
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              Konsultasi via WhatsApp
            </Link>
            <a 
              href="#layanan"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium text-lg border border-slate-700 transition-all"
            >
              Lihat Layanan Kami
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="layanan" className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Lengkap untuk Semua Kebutuhan</h2>
            <p className="text-slate-400">Dari laptop jadul sampai Macbook terbaru, kami tangani dengan profesional. Tinggal terima beres!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-blue-500/10">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Install Semua Sistem Operasi</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">Dari yang terbaru hingga versi legendaris, kami bantu instalkan agar cocok dengan spesifikasi perangkatmu.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Windows 7, 8, 10, & 11</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> macOS (Berbagai versi)</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Distro Ubuntu & Linux Lainnya</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-purple-500/10">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Laptop className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Semua Merek & Versi Laptop</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">Jangan ragu, apa pun laptopmu, kami siap kerjakan. Spesialis menangani kendala driver dan kompatibilitas.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-500" /> ASUS, Acer, Lenovo, HP</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Dell, MSI, Axioo, Zyrex</li>
                <li className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Apple MacBook (Air/Pro)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Highlight */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/20 rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="md:w-2/3 relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4" /> Solusi Mahasiswa & Laptop Tua
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Dompet Tipis? Laptop Lemot? <br className="hidden md:block"/>Kami Solusinya.</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Di Kota Semarang, mahasiswa butuh laptop yang selalu prima untuk tugas dan skripsi. Kami bantu optimalisasi laptop tua agar kembali ringan dan responsif tanpa harus menguras kantong beli baru.
              </p>
              <Link 
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Chat Sekarang <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Process */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Prosedur Layanan</h2>
          <div className="flex text-left flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center max-w-[200px] text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-blue-400">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Estimasi Waktu Jelas</h4>
              <p className="text-sm text-slate-400">Waktu pengerjaan akan diinformasikan di awal setelah pengecekan unit.</p>
            </div>
            <div className="flex flex-col items-center max-w-[200px] text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-emerald-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Penanganan Data</h4>
              <p className="text-sm text-slate-400">Tersedia opsi bantuan pemindahan/backup data sebelum instalasi dilakukan.</p>
            </div>
            <div className="flex flex-col items-center max-w-[200px] text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-4 text-purple-400">
                <Settings2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold mb-2">Kompatibilitas Driver</h4>
              <p className="text-sm text-slate-400">Driver dipasang menyesuaikan dengan spesifikasi bawaan perangkat Anda.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
