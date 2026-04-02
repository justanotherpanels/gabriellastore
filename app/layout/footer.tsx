import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Footer() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20tentang%20jasa%20install%20laptop%20di%20Semarang.%20`;

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden mt-auto">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-900/20 blur-[100px] -z-10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Tunggu Apalagi? Perbaiki Laptopmu Hari Ini!</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Hubungi kami sekarang untuk tanya-tanya gratis. Jangan biarkan laptop lemot mengganggu produktivitasmu di Semarang.</p>
        
        <Link 
          href={WHATSAPP_LINK}
          target="_blank"
          className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-[0_0_40px_rgba(37,211,102,0.3)] mb-20"
        >
          <MessageCircle className="w-7 h-7" />
          WhatsApp: 0896-6008-1616
        </Link>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Gabriel Store. Hak Cipta Dilindungi.</p>
          <p>Jasa Install Windows & Mac OS Semarang Terbaik.</p>
        </div>
      </div>
    </footer>
  );
}
