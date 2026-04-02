import { Metadata } from 'next';
import { Monitor, Laptop, Zap, CheckCircle2, AlertCircle, Cpu } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Jasa Install macOS MacBook & iMac Lama (Jadul) Semarang | Semua Versi",
  description: "Punya MacBook atau iMac keluaran lama (2008-2020)? Kami spesialis jasa install macOS Sequoia, Sonoma, Ventura, hingga Mojave di Semarang.",
  keywords: ["jasa install macbook tua semarang", "upgrade os macbook jadul", "install macos mojave catalina", "jasa install macos monterey", "servis macbook lama semarang", "install imac 2008 2020"],
  alternates: {
    canonical: "https://gabriellstore.net/page/jasa-install-mac-os-laptop-jadul"
  },
  openGraph: {
    title: "Jasa Install macOS Untuk MacBook & iMac Lama di Semarang",
    description: "Spesialis install macOS terbaru untuk MacBook dan iMac tua Anda. Harga mulai Rp150rb-Rp250rb.",
    url: "https://gabriellstore.net/page/jasa-install-mac-os-laptop-jadul",
    siteName: "Gabriel Store",
    images: [
      { url: "/banner-seo.png", width: 1200, height: 630, alt: "Jasa Install OS MacBook Jadul Semarang" }
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaInstallMacOsJadul() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20jasa%20install%20macOS%20di%20Macbook%20Tua.%20`;

  const osList = [
    "macOS Sequoia",
    "macOS Sonoma",
    "macOS Ventura",
    "macOS Monterey",
    "macOS Big Sur",
    "macOS Catalina",
    "macOS Mojave"
  ];

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
            <Cpu className="w-4 h-4 text-emerald-400" />
            Spesialis Apple Mac Tua
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Bikin <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">MacBook Tua</span> Kamu <br className="hidden md:block" /> Pakai OS Terbaru!
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Menerima jasa install OS terbaru di MacBook & iMac tua kamu. Jangan biarkan Mac jadul kamu cuma jadi pajangan, pangkas keterbatasan dengan OS yang lebih *up-to-date*!
          </p>
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            Pesan Jadwal Instalasi Sekarang
          </Link>
        </div>
      </section>

      {/* Pricing & Compatibility Grid */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Pricing Card: Macbook */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center hover:border-slate-600 transition-colors">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <Laptop className="w-8 h-8 text-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Seri MacBook</h3>
              <p className="text-slate-400 mb-6">Model Tahun 2008 - 2020</p>
              <div className="text-4xl font-extrabold text-white mb-8">
                Rp 150.000<span className="text-lg text-slate-500 font-medium">/unit</span>
              </div>
              <ul className="space-y-3 w-full text-left bg-slate-900 p-6 rounded-2xl">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  Instalasi macOS pilihan
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  Pengecekan kompatibilitas patch
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 opacity-60">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  Harga tidak termasuk software tambahan
                </li>
              </ul>
            </div>

            {/* Pricing Card: iMac */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center hover:border-slate-600 transition-colors">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6">
                <Monitor className="w-8 h-8 text-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Seri iMac</h3>
              <p className="text-slate-400 mb-6">Model Tahun 2008 - 2020</p>
              <div className="text-4xl font-extrabold text-white mb-8">
                Rp 250.000<span className="text-lg text-slate-500 font-medium">/unit</span>
              </div>
              <ul className="space-y-3 w-full text-left bg-slate-900 p-6 rounded-2xl">
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  Instalasi macOS pilihan
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  Pengecekan kompatibilitas patch
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-300 opacity-60">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  Harga tidak termasuk software tambahan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OS Compatibility List */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <Zap className="absolute top-10 right-10 w-32 h-32 text-slate-800/50 -z-10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Daftar Sistem Operasi yang Mendukung</h2>
            <p className="text-slate-400 mb-8">Pilih macOS yang ingin dipasang pada perangkat lawas Anda (bergantung kompatibilitas unit):</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {osList.map((os, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 text-slate-200 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  {os}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-start gap-4 p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-200">
              <AlertCircle className="w-6 h-6 shrink-0 mt-1" />
              <div className="text-sm leading-relaxed">
                <strong className="block mb-1">Penting Diketahui:</strong>
                Biaya jasa instalasi di atas murni untuk instalasi Sistem Operasi dan <strong>tidak termasuk harga instalasi software tambahan/aplikasi pihak ketiga</strong>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
