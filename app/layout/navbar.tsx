import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

export default function Navbar() {
  const WHATSAPP_NUMBER = "6289660081616";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20min,%20saya%20mau%20tanya%20tentang%20jasa%20install%20laptop%20di%20Semarang.%20`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Logo Jasa Install Laptop Semarang" 
            width={200} 
            height={50} 
            className="h-10 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors text-xs xl:text-sm">Home</Link>
          <Link href="/page/jasa-install-macbook" className="hover:text-white transition-colors text-xs xl:text-sm whitespace-nowrap">Install Macbook</Link>
          <Link href="/page/jasa-install-mac-os-laptop-jadul" className="hover:text-white transition-colors text-xs xl:text-sm whitespace-nowrap">Install Macbook Tua</Link>
          <Link href="/page/jasa-install-linux-distro" className="hover:text-white transition-colors text-xs xl:text-sm whitespace-nowrap">Install Linux</Link>
        </nav>

        <Link 
          href={WHATSAPP_LINK}
          target="_blank"
          className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] transition-colors text-white px-4 py-2 rounded-full font-medium text-sm shadow-[0_0_15px_rgba(37,211,102,0.3)]"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden md:inline">0896-6008-1616</span>
          <span className="md:hidden">WhatsApp</span>
        </Link>
      </div>
    </header>
  );
}
