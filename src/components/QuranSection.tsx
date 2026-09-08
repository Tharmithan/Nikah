import React from 'react';
import { weddingConfig } from '../weddingConfig';

export const QuranSection: React.FC = () => {
  return (
    <section
      id="quran"
      className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF7F2] overflow-hidden"
    >
      {/* Sacred Star Geometric Overlay */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Ornamental Top Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center bg-white/60 shadow-sm">
            <span className="text-[#C5A059] text-sm">✦</span>
          </div>
          <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Card with Islamic Arch Top */}
        <div className="relative w-full p-8 sm:p-12 md:p-16 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/40 shadow-luxury">
          
          {/* Subtle Corner Florals */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/50 rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/50 rounded-br-lg pointer-events-none" />

          {/* Arabic Calligraphy */}
          <p
            dir="rtl"
            className="font-arabic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0F382C] leading-[2.2] sm:leading-[2.4] font-semibold mb-8 text-center drop-shadow-sm"
          >
            {weddingConfig.quranVerse.arabic}
          </p>

          {/* Gold Inset Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8" />

          {/* English Translation */}
          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-[#1F2421]/90 max-w-2xl mx-auto leading-relaxed">
            {weddingConfig.quranVerse.translation}
          </p>

          {/* Surah Reference Tag */}
          <div className="mt-8 inline-block">
            <span className="px-5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 font-serif text-xs uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
              {weddingConfig.quranVerse.surah}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
