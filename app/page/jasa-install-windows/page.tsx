import { Metadata } from 'next';
import { Laptop, Cpu, CheckCircle2, Monitor, AlertCircle, Shield, Zap } from 'lucide-react';
import Link from 'next/link';


export const metadata: Metadata = {
  title: "Jasa Install Ulang Windows 7/8/10/11 Semarang | Gabriel Store",
  description: "Layanan profesional jasa install ulang Windows segala versi (7, 8, 10, 11) di Semarang. Support semua merek laptop dengan harga terjangkau Rp100.000.",
  keywords: ["jasa install windows semarang", "install ulang windows 10", "install windows 11 semarang", "jasa install laptop semarang", "servis laptop semarang", "gabriel store windows"],
  alternates: {
    canonical: "https://gabriellstore.net/page/jasa-install-windows"
  },
  openGraph: {
    title: "Jasa Install Ulang Windows (7, 8, 10, 11) di Semarang",
    description: "Laptop lemot? Install ulang saja! Support semua versi Windows dan semua merek laptop. Harga hanya Rp100.000.",
    url: "https://gabriellstore.net/page/jasa-install-windows",
    siteName: "Gabriel Store",
    images: [
      {
        url: "/banner-seo.png",
        width: 1200,
        height: 630,
        alt: "Jasa Install Windows Semarang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaInstallWindows() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20jasa%20install%20ulang%20Windows.%20`;

  const windowsVersions = [
    { name: "Windows 11", desc: "Terbaru & Modern" },
    { name: "Windows 10", desc: "Stabil & Populer" },
    { name: "Windows 8.1", desc: "Ringan" },
    { name: "Windows 7", desc: "Klasik & Kompatibel" }
  ];

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
            <Cpu className="w-4 h-4 text-blue-400" />
            Windows OS Specialist
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Laptop Lemot? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Install Ulang</span> <br className="hidden md:block" /> Saja Agar Kembali Kencang!
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Menyediakan jasa install ulang Windows 7, 8, 10, dan 11 untuk <strong>semua merek laptop</strong>. Solusi terbaik untuk laptop yang lemot, terkena virus, atau bermasalah pada sistemnya.
          </p>
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            Pesan Jadwal Install Sekarang
          </Link>
        </div>
      </section>

      {/* OS Grid */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Versi Windows Tersedia</h2>
            <p className="text-slate-400">Pilih versi Windows yang paling sesuai dengan spesifikasi laptop Anda.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {windowsVersions.map((win, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <Monitor className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{win.name}</h3>
                <p className="text-xs text-slate-500">{win.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-950 p-10 md:p-14 rounded-3xl border border-blue-500/30 flex flex-col items-center text-center transition-colors relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
                <Laptop className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Biaya Instalasi Windows</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">Instalasi OS murni, cepat, dan stabil untuk semua laptop & PC.</p>
              
              <div className="text-5xl font-extrabold text-white mb-10">
                Rp 100.000<span className="text-xl text-slate-500 font-medium">/unit</span>
              </div>
              
              <ul className="space-y-4 w-full text-left bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Instalasi Clean (Bersih)</span>
                    <span className="text-sm opacity-80">Menghapus bug dan virus di sistem lama.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Optimasi Driver</span>
                    <span className="text-sm opacity-80">Pengecekan driver agar hardware berfungsi normal.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-amber-400 block">Ketentuan Harga:</span>
                    <span className="text-sm opacity-80">Murni biaya jasa instalasi OS Windows saja (tanpa install software tambahan lainnya).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
