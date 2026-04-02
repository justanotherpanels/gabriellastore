import { Metadata } from 'next';
import { Laptop, Cpu, CheckCircle2, Monitor, AlertCircle, Wrench } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Jasa Install MacBook Stuck Logo / Crash / No Bootable Semarang | Rp180rb",
  description: "Layanan jas install ulang MacBook bermasalah seperti stuck logo Apple, crash system, dan no bootable device di Semarang. Murni install OS dengan harga terjangkau Rp180.000.",
  keywords: ["jasa install macbook semarang", "macbook stuck logo apple", "macbook blinking folder", "macbook no bootable device", "install ulang macbook", "jasa servis macbook crash", "macbook apple silicon intel"],
  alternates: {
    canonical: "https://gabriellstore.net/page/jasa-install-macbook"
  },
  openGraph: {
    title: "Jasa Perbaikan & Install MacBook (Stuck/Crash) | Semarang",
    description: "MacBook stuck logo atau folder tanda seru? Kami bantu install ulang OS murni dengan harga Rp.180.000.",
    url: "https://gabriellstore.net/page/jasa-install-macbook",
    siteName: "Gabriel Store",
    images: [
      {
        url: "/banner-seo.png",
        width: 1200,
        height: 630,
        alt: "Jasa Install MacBook Semarang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaInstallMacbook() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20jasa%20install%20perbaikan%20macOS%20di%20Macbook.%20`;

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
            <Wrench className="w-4 h-4 text-red-400" />
            Solusi MacBook Error / Rusak OS
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            MacBook Kamu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">Stuck Logo</span> <br className="hidden md:block" /> atau Crash System?
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Menyelamatkan MacBook yang mengalami kendala sistem seperti <strong>Stuck Logo Apple</strong>, <strong>Sering Crash</strong>, dan <strong>No Bootable Device (Logo Folder Tanda Tanya)</strong> dengan instalasi murni yang aman.
          </p>
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            Konsultasi Sekarang
          </Link>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Main Pricing Card */}
            <div className="bg-slate-950 p-10 md:p-14 rounded-3xl border border-red-500/30 flex flex-col items-center text-center hover:border-red-500/50 transition-colors relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                <Laptop className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Instalasi OS Murni</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">Layanan khusus pemulihan kendala error (stuck, no bootable, crash) via Recovery / Configurator.</p>
              
              <div className="text-5xl font-extrabold text-white mb-10">
                Rp 180.000<span className="text-xl text-slate-500 font-medium">/unit</span>
              </div>
              
              <ul className="space-y-4 w-full text-left bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Perbaikan Stuck Logo Apple / No Boot</span>
                    <span className="text-sm opacity-80">Mengatasi error booting yang menghalangi sistem macOS untuk nyala.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Clean Install macOS</span>
                    <span className="text-sm opacity-80">Instalasi ulang dari awal (Fresh Install) agar performa seperti baru pabrik.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <AlertCircle className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-amber-400 block">Ketentuan Harga:</span>
                    <span className="text-sm opacity-80">Murni hanya biaya pengerjaan instalasi OS (tanpa install software tambahan lainnya).</span>
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
