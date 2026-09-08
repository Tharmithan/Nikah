import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-islamic-pattern"
    >
      {/* Background Decorative Radial Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-[#D4AF37]/10 via-[#FAF7F2] to-[#164E3D]/5 blur-3xl pointer-events-none" />

      {/* Grand Islamic Arch Frame Container */}
      <div className="relative w-full max-w-3xl mx-auto my-auto py-12 px-6 sm:px-12 md:px-16 bg-white/70 backdrop-blur-md rounded-t-[140px] sm:rounded-t-[200px] rounded-b-3xl border border-[#D4AF37]/50 shadow-luxury flex flex-col items-center text-center">
        
        {/* Inner Arch Inset Line */}
        <div className="absolute inset-3 sm:inset-4 rounded-t-[130px] sm:rounded-t-[190px] rounded-b-2xl border border-[#D4AF37]/30 pointer-events-none" />

        {/* Top Islamic Crescent & Star Motif */}
        <div className="relative mb-6">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-b from-[#FAF7F2] to-[#EFE7D8] border border-[#D4AF37]/60 flex items-center justify-center shadow-sm">
            <svg
              className="w-6 h-6 text-[#C5A059]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.82 0 3.53-.49 5-1.35-2.99-1.04-5.14-3.88-5.14-7.22 0-4.14 3.36-7.5 7.5-7.5 1.13 0 2.19.26 3.14.73C20.67 3.93 16.63 2 12 2z" />
            </svg>
          </div>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-3" />
        </div>

        {/* Bismillah Calligraphy */}
        <div className="mb-4">
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#164E3D] font-bold tracking-wide">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#8A6412] mt-1.5 font-medium">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>

        {/* Invitation Opening Salutation */}
        <div className="my-3 max-w-lg">
          <p className="font-cormorant italic text-base sm:text-lg md:text-xl text-[#0F382C]/90">
            Together with their families
          </p>
        </div>

        {/* Bride & Groom Couple Names */}
        <div className="my-4 sm:my-6 flex flex-col items-center justify-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[#0F382C] uppercase drop-shadow-sm">
            {weddingConfig.groomName}
          </h1>
          
          <div className="flex items-center gap-4 my-2 sm:my-3">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            <span className="font-cormorant italic text-3xl sm:text-4xl text-[#C5A059] font-normal">
              &
            </span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[#0F382C] uppercase drop-shadow-sm">
            {weddingConfig.brideName}
          </h2>
        </div>

        {/* Nikah Celebration Text */}
        <div className="max-w-md my-4">
          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#2C332E] leading-relaxed">
            Request the pleasure of your company<br />
            at the celebration of their <span className="font-semibold text-[#0F382C]">Nikah</span>
          </p>
        </div>

        {/* Ornamental Gold Divider */}
        <div className="flex items-center justify-center gap-3 my-4 w-full max-w-xs">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
          <span className="text-[#C5A059] text-xs">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
        </div>

        {/* Date & Time Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-4 w-full max-w-xl">
          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2]/80 border border-[#D4AF37]/30 shadow-sm">
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0F382C]">
              24 October 2026
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2]/80 border border-[#D4AF37]/30 shadow-sm">
            <Clock className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0F382C]">
              10:30 AM
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#FAF7F2]/80 border border-[#D4AF37]/30 shadow-sm">
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0F382C]">
              Colombo, Sri Lanka
            </span>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="#rsvp"
            className="px-8 py-3 rounded-full bg-[#0F382C] hover:bg-[#164E3D] text-[#FAF7F2] font-serif text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 border border-[#D4AF37]/40"
          >
            Kindly RSVP
          </a>
          <a
            href="#nikah"
            className="px-8 py-3 rounded-full bg-white/80 hover:bg-white text-[#0F382C] font-serif text-xs uppercase tracking-[0.2em] font-semibold border border-[#D4AF37] shadow-sm hover:shadow transition-all hover:scale-105 active:scale-95"
          >
            Event Details
          </a>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-8 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#quran" aria-label="Scroll to Quran section" className="animate-bounce p-2 rounded-full text-[#8A6412]">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
