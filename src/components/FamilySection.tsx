import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { Sparkles, Users } from 'lucide-react';

export const FamilySection: React.FC = () => {
  return (
    <section id="family" className="relative py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      
      {/* Decorative Gold Elements */}
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
              Honoring Our Parents
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            {weddingConfig.families.heading}
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-cormorant italic text-base sm:text-lg text-[#2C332E]/90 mt-3 leading-relaxed">
            “{weddingConfig.families.intro}”
          </p>
        </div>

        {/* Families Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl">
          
          {/* Groom Family Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#D4AF37]/40 shadow-luxury flex flex-col items-center text-center relative overflow-hidden group hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 flex items-center justify-center mb-4 text-[#C5A059]">
              <Sparkles className="w-5 h-5" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
              {weddingConfig.families.groomFamilyTitle}
            </span>

            <h3 className="font-serif text-2xl text-[#0F382C] font-bold mt-2">
              {weddingConfig.families.groomParents}
            </h3>

            <p className="font-cormorant text-sm sm:text-base text-[#2C332E]/80 mt-3 max-w-xs leading-relaxed">
              {weddingConfig.families.groomFamilyNote}
            </p>

            <div className="w-16 h-[1px] bg-[#D4AF37]/40 mt-6" />
          </div>

          {/* Bride Family Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/90 border border-[#D4AF37]/40 shadow-luxury flex flex-col items-center text-center relative overflow-hidden group hover:border-[#D4AF37] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/50 flex items-center justify-center mb-4 text-[#C5A059]">
              <Sparkles className="w-5 h-5" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
              {weddingConfig.families.brideFamilyTitle}
            </span>

            <h3 className="font-serif text-2xl text-[#0F382C] font-bold mt-2">
              {weddingConfig.families.brideParents}
            </h3>

            <p className="font-cormorant text-sm sm:text-base text-[#2C332E]/80 mt-3 max-w-xs leading-relaxed">
              {weddingConfig.families.brideFamilyNote}
            </p>

            <div className="w-16 h-[1px] bg-[#D4AF37]/40 mt-6" />
          </div>

        </div>

      </div>
    </section>
  );
};
