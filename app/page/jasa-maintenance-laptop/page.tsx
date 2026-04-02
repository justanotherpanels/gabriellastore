import { Metadata } from 'next';
import { Wind, Thermometer, Keyboard, CheckCircle2, Shield, Zap, AlertTriangle, Settings } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Jasa Maintenance Laptop Semarang | Bersih Fan & Ganti Pasta | Gabriel Store",
  description: "Laptop panas & berisik? Layanan maintenance hardware laptop di Semarang. Pembersihan fan cooler, ganti pasta thermal processor, & bersihkan keyboard. Hanya Rp150.000.",
  keywords: ["jasa maintenance laptop semarang", "laptop panas berisik", "ganti pasta processor laptop", "bersihkan fan laptop", "servis keyboard laptop semarang", "perawatan laptop semarang"],
  alternates: {
    canonical: "https://gabriellstore.net/page/jasa-maintenance-laptop"
  },
  openGraph: {
    title: "Jasa Maintenance & Perawatan Hardware Laptop di Semarang",
    description: "Atasi laptop panas dan berisik dengan pembersihan total dan ganti pasta processor. Hanya Rp150.000 di Gabriel Store.",
    url: "https://gabriellstore.net/page/jasa-maintenance-laptop",
    siteName: "Gabriel Store",
    images: [
      {
        url: "/banner-seo.png",
        width: 1200,
        height: 630,
        alt: "Jasa Maintenance Laptop Semarang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaMaintenanceLaptop() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20jasa%20Maintenance%20Laptop%20(Laptop%20Panas/Berisik).%20`;

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
            <Thermometer className="w-4 h-4 text-amber-500" />
            Hardware Care Specialist
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Laptop <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Panas & Berisik?</span> <br className="hidden md:block" /> Jangan Dibiarkan Saja!
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Itu tandanya laptop kamu sedang tidak baik-baik saja. Pastikan performanya tetap terjaga dengan perawatan rutin hardware agar tidak terjadi kerusakan fatal pada motherboard.
          </p>
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            Booking Jadwal Maintenance
          </Link>
        </div>
      </section>

      {/* Services Detail Grid */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Apa Saja yang Kami Kerjakan?</h2>
            <p className="text-slate-400">Prosedur maintenance menyeluruh untuk kenyamanan penggunaan jangka panjang.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6">
                <Wind className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cleaning Fan Cooler</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pembersihan debu yang menyumbat kipas dan jalur udara agar sirkulasi pendinginan kembali lancar dan suara tidak berisik.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Thermometer className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ganti Pasta Thermal</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Mengganti pasta thermal processor yang sudah kering dengan pasta baru berkualitas tinggi untuk menurunkan suhu CPU secara drastis.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                <Keyboard className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cleaning Keyboard</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Pembersihan kotoran dan sela-sela keyboard agar tetap nyaman saat mengetik dan mencegah macetnya tombol.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-950 p-10 md:p-14 rounded-3xl border border-amber-500/30 flex flex-col items-center text-center transition-colors relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mb-6">
                <Settings className="w-10 h-10 text-amber-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Paket All-in Hardware Care</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">Satu harga untuk semua layanan perawatan fisik laptop Anda.</p>
              
              <div className="text-5xl font-extrabold text-white mb-10">
                Rp 150.000<span className="text-xl text-slate-500 font-medium">/unit</span>
              </div>
              
              <ul className="space-y-4 w-full text-left bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Pembersihan Total</span>
                    <span className="text-sm opacity-80">Bagian dalam dan luar laptop dibersihkan secara detail.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Pasta Thermal High-Performance</span>
                    <span className="text-sm opacity-80">Menggunakan pasta thermal dengan konduktivitas panas tinggi.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-base text-slate-300">
                  <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <span className="font-semibold text-amber-400 block">Investasi Awet:</span>
                    <span className="text-sm opacity-80">Maintenance rutin setiap 6-12 bulan dapat memperpanjang umur laptop hingga bertahun-tahun.</span>
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
