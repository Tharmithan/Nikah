import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { Shirt } from 'lucide-react';

export const DressCodeSection: React.FC = () => {
  const paletteColors = [
    { name: 'Emerald', hex: '#0F382C' },
    { name: 'Champagne', hex: '#D4AF37' },
    { name: 'Ivory', hex: '#F4ECE1' },
    { name: 'Sage', hex: '#8A9A86' },
    { name: 'Midnight', hex: '#1F2421' },
  ];

  return (
    <section id="dress-code" className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1]/60 to-[#FAF7F2] overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/40 shadow-luxury w-full flex flex-col items-center">
          
          {/* Top Icon */}
          <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center mb-4 text-[#0F382C] shadow-sm">
            <Shirt className="w-5 h-5" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
            {weddingConfig.dressCode.title}
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#0F382C] font-bold mt-1 tracking-wider">
            {weddingConfig.dressCode.code}
          </h3>

          <p className="font-cormorant text-base sm:text-lg text-[#2C332E]/90 mt-3 max-w-lg leading-relaxed">
            {weddingConfig.dressCode.description}
          </p>

          {/* Color Inspiration Swatches */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8A6412] font-semibold mb-3">
              Suggested Color Palette
            </span>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
              {paletteColors.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-1.5 group">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-[10px] text-[#2C332E]/70 font-medium">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-cormorant italic text-xs sm:text-sm text-[#8A6412] mt-6">
            {weddingConfig.dressCode.note}
          </p>

        </div>

      </div>
    </section>
  );
};
