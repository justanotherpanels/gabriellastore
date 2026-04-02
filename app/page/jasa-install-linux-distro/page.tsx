import { Metadata } from 'next';
import { Terminal, Cpu, CheckCircle2, Monitor, AlertCircle, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Jasa Install Linux Distro Semarang (Ubuntu, Linux Mint, Zorin, Kali) | Gabriel Store",
  description: "Layanan profesional jasa install Linux di Semarang untuk semua distro: Ubuntu, Linux Mint, Zorin OS, hingga Kali Linux. Support semua merek laptop dengan harga terjangkau.",
  keywords: ["jasa install linux semarang", "install ubuntu semarang", "install linux mint semarang", "jasa install zorin os", "jasa install kali linux semarang", "install linux laptop lama", "gabriel store linux"],
  alternates: {
    canonical: "https://gabriellstore.net/page/jasa-install-linux-distro"
  },
  openGraph: {
    title: "Jasa Install Linux Distro Profesional di Semarang",
    description: "Ubah laptopmu jadi lebih powerfull dengan Linux! Support Ubuntu, Mint, Zorin, Kali, dan distro lainnya. Semua merek laptop dilayani.",
    url: "https://gabriellstore.net/page/jasa-install-linux-distro",
    siteName: "Gabriel Store",
    images: [
      {
        url: "/banner-seo.png",
        width: 1200,
        height: 630,
        alt: "Jasa Install Linux Distro Semarang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function JasaInstallLinuxDistro() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20jasa%20install%20Linux%20Distro.%20`;

  const distros = [
    { name: "Ubuntu", desc: "Populer & Stabil" },
    { name: "Linux Mint", desc: "Mirip Windows, Ringan" },
    { name: "Zorin OS", desc: "Aesthetic & Modern" },
    { name: "Kali Linux", desc: "Cyber Security & Testing" },
    { name: "Manjaro", desc: "Rolling Release, Terbaru" },
    { name: "Debian", desc: "Sangat Stabil untuk Server" }
  ];

  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium mb-8">
            <Terminal className="w-4 h-4 text-orange-400" />
            Open Source Specialist
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Ganti ke <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Linux</span> Sekarang, <br className="hidden md:block" /> Performa Jadi Lebih Maksimal!
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Punya laptop lemot? Ingin belajar coding atau sekedar mau privasi lebih? Linux adalah solusinya. Kami bantu install <strong>semua distro Linux</strong> pilihanmu di <strong>semua tipe laptop</strong>.
          </p>
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            Konsultasi Linux & Cek Kompatibilitas
          </Link>
        </div>
      </section>

      {/* Distro Grid */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Distro Linux Pilihan</h2>
            <p className="text-slate-400">Pilih distro yang paling cocok dengan seleramu dan spesifikasi hardware-mu.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {distros.map((distro, index) => (
              <div key={index} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center hover:border-orange-500/50 transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Shield className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{distro.name}</h3>
                <p className="text-xs text-slate-500">{distro.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Advantages */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Kenapa Install Linux di Gabriel Store?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Optimasi Driver</h4>
                    <p className="text-slate-400 text-sm">Pastikan WiFi, Sound, dan Graphic Driver berjalan lancar di Linux.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Dual Boot (Opsi)</h4>
                    <p className="text-slate-400 text-sm">Ingin tetap ada Windows-nya? Bisa kita bantu dual boot dengan aman.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Semua Merek Laptop</h4>
                    <p className="text-slate-400 text-sm">Support ASUS, Acer, Dell, HP, Lenovo, Thinkpad, dan lainnya.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-8 md:p-12 rounded-3xl border border-orange-500/30 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-2">Biaya Instalasi</h3>
              <p className="text-slate-400 mb-8 font-medium">Bebas Virus & Sangat Ringan</p>
              
              <div className="text-5xl font-extrabold text-white mb-10">
                Rp 100.000<span className="text-xl text-slate-500 font-medium">/unit</span>
              </div>
              
              <Link 
                href={WHATSAPP_LINK}
                target="_blank"
                className="block w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-bold transition-all"
              >
                Booking Jadwal Install
              </Link>
              <p className="mt-6 text-xs text-slate-500 italic">Murni jasa instalasi distro Linux (Open Source).</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
