import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 px-4 sm:px-6 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#E9DFC8] overflow-hidden">
      
      {/* Background Islamic Pattern Accent */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Grand Closing Islamic Arch Container */}
        <div className="w-full p-8 sm:p-14 rounded-t-[140px] sm:rounded-t-[180px] rounded-b-3xl bg-white/80 backdrop-blur-md border border-[#D4AF37]/50 shadow-luxury flex flex-col items-center">
          
          {/* Top Crescent Finial */}
          <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center mb-6 shadow-sm">
            <Sparkles className="w-5 h-5 text-[#C5A059]" />
          </div>

          <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-[#0F382C] max-w-xl leading-relaxed">
            “With love in our hearts and gratitude to Allah, we begin our forever.”
          </p>

          <p className="font-cormorant text-base sm:text-lg text-[#2C332E]/80 mt-4">
            Thank you for celebrating with us.
          </p>

          {/* Gold Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-8 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
            <span className="text-[#C5A059] text-sm">❖</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
          </div>

          {/* Couple Sign-off */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-[#0F382C] uppercase">
            {weddingConfig.groomName} & {weddingConfig.brideName}
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#8A6412] font-semibold mt-3">
            24 • 10 • 2026
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-10 px-6 py-2.5 rounded-full border border-[#D4AF37]/60 bg-[#FAF7F2] hover:bg-white text-[11px] uppercase tracking-widest text-[#0F382C] flex items-center gap-2 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Back to Top</span>
          </button>

        </div>

        {/* Copyright / Credits */}
        <div className="mt-12 flex flex-col items-center gap-2">
          <p className="text-[11px] uppercase tracking-widest text-[#8A6412]/80">
            The Royal Muslim Wedding Invitation • {weddingConfig.weddingDisplayDate}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#2C332E]/60">
            <span>Crafted with barakah & love</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
          </div>
        </div>

      </div>
    </footer>
  );
};
