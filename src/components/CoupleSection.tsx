import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { Heart } from 'lucide-react';

export const CoupleSection: React.FC = () => {
  return (
    <section id="story" className="relative py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[#164E3D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
            The Bride & The Groom
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            {weddingConfig.coupleStory.heading}
          </h2>
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <Heart className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>
          <p className="font-cormorant italic text-lg sm:text-xl text-[#2C332E]/90 leading-relaxed">
            “{weddingConfig.coupleStory.quote}”
          </p>
        </div>

        {/* Couple Portraits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full max-w-4xl items-center">
          
          {/* Groom Card */}
          <div className="flex flex-col items-center text-center group">
            {/* Arched Photo Frame with Gold Border */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-[140px] rounded-b-2xl p-2.5 bg-gradient-to-b from-[#D4AF37] via-[#FAF7F2] to-[#D4AF37] shadow-luxury transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative w-full h-full rounded-t-[130px] rounded-b-xl overflow-hidden bg-[#E8DEC8]">
                <img
                  src={weddingConfig.coupleStory.groomImage}
                  alt={weddingConfig.groomFullName}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Groom Details */}
            <div className="mt-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
                {weddingConfig.groomTitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F382C] font-bold mt-1 tracking-wider">
                {weddingConfig.groomFullName}
              </h3>
              <p className="font-cormorant text-base sm:text-lg text-[#2C332E]/80 mt-2 max-w-xs">
                {weddingConfig.coupleStory.groomBio}
              </p>
            </div>
          </div>

          {/* Bride Card */}
          <div className="flex flex-col items-center text-center group">
            {/* Arched Photo Frame with Gold Border */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-[140px] rounded-b-2xl p-2.5 bg-gradient-to-b from-[#D4AF37] via-[#FAF7F2] to-[#D4AF37] shadow-luxury transition-transform duration-500 group-hover:-translate-y-2">
              <div className="relative w-full h-full rounded-t-[130px] rounded-b-xl overflow-hidden bg-[#E8DEC8]">
                <img
                  src={weddingConfig.coupleStory.brideImage}
                  alt={weddingConfig.brideFullName}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Bride Details */}
            <div className="mt-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
                {weddingConfig.brideTitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F382C] font-bold mt-1 tracking-wider">
                {weddingConfig.brideFullName}
              </h3>
              <p className="font-cormorant text-base sm:text-lg text-[#2C332E]/80 mt-2 max-w-xs">
                {weddingConfig.coupleStory.brideBio}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
