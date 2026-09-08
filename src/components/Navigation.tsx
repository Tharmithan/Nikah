import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { Menu, X, Share2, Sparkles, Check } from 'lucide-react';

interface NavigationProps {
  onReplayGate?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onReplayGate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'The Nikah', href: '#nikah' },
    { name: 'Details', href: '#details' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Gallery', href: '#gallery' },
  ];

  const handleShare = async () => {
    const shareData = {
      title: `The Nikah of ${weddingConfig.groomName} & ${weddingConfig.brideName}`,
      text: `Together with their families, ${weddingConfig.groomName} & ${weddingConfig.brideName} invite you to celebrate their Nikah on ${weddingConfig.weddingDisplayDate}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch {
        // clipboard write error
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(15,56,44,0.06)] border-b border-[#D4AF37]/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full border border-[#D4AF37] bg-white/70 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-sm text-[#0F382C]">
                {weddingConfig.groomName[0]} & {weddingConfig.brideName[0]}
              </span>
            </div>
            <span className="font-serif font-semibold text-lg tracking-wider text-[#0F382C] hidden sm:inline-block">
              {weddingConfig.groomName} & {weddingConfig.brideName}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 bg-white/60 px-6 py-2 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#1F2421]/80 hover:text-[#0F382C] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Share & Replay Gate & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onReplayGate && (
              <button
                onClick={onReplayGate}
                title="Re-open Royal Gateway"
                className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 bg-white/70 hover:bg-white text-[11px] uppercase tracking-wider text-[#0F382C] transition-all hover:shadow-sm cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Gate View</span>
              </button>
            )}

            <button
              onClick={handleShare}
              title="Share Invitation"
              aria-label="Share Invitation"
              className="p-2 sm:px-4 sm:py-2 rounded-full border border-[#D4AF37] bg-[#FAF7F2] hover:bg-[#F3ECE1] text-[#0F382C] flex items-center gap-2 text-xs uppercase tracking-wider font-medium shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              {shareSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="hidden sm:inline text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-[#D4AF37]/40 bg-white/70 text-[#0F382C] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 bg-[#0F382C]/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] bg-[#FAF7F2] border-l border-[#D4AF37]/40 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4 mb-6">
              <span className="font-serif text-lg font-bold text-[#0F382C]">
                {weddingConfig.groomName} & {weddingConfig.brideName}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5 text-[#0F382C]" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-base text-[#1F2421] hover:text-[#0F382C] py-2 border-b border-black/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#D4AF37]">✦</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#D4AF37]/30 flex flex-col gap-3">
            {onReplayGate && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayGate();
                }}
                className="w-full py-2.5 rounded-full border border-[#D4AF37] bg-white text-xs uppercase tracking-widest text-[#0F382C] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Re-open Gateway</span>
              </button>
            )}
            <p className="text-center font-cormorant italic text-xs text-[#8A6412]">
              {weddingConfig.weddingDisplayDate}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
