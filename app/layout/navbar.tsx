'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/page/jasa-install-windows', label: 'Install Windows' },
  { href: '/page/jasa-install-macbook', label: 'Install Macbook' },
  { href: '/page/jasa-install-mac-os-laptop-jadul', label: 'Install Macbook Tua' },
  { href: '/page/jasa-install-linux-distro', label: 'Install Linux' },
  { href: '/page/jasa-maintenance-laptop', label: 'Jasa Maintenance' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors text-xs xl:text-sm whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* WhatsApp Button */}
          <Link 
            href={WHATSAPP_LINK}
            target="_blank"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] transition-colors text-white px-4 py-2 rounded-full font-medium text-sm shadow-[0_0_15px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">0896-6008-1616</span>
            <span className="md:hidden">WhatsApp</span>
          </Link>

          {/* Hamburger Button (mobile only) */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}</span>
            {/* Animated hamburger → X */}
            <span className="block w-5 h-5 relative">
              <span
                className={`absolute left-0 block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'top-[9px] rotate-45' : 'top-[3px] rotate-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`absolute left-0 block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'top-[9px] -rotate-45' : 'top-[15px] rotate-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1 border-t border-slate-800/50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* WhatsApp link inside mobile menu */}
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 mt-2 px-3 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] transition-colors text-white text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: 0896-6008-1616</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
