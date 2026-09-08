import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { UserCheck, HeartHandshake, Sparkles, UtensilsCrossed, Clock } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#0F382C]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#0F382C]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0F382C]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#0F382C]" />;
      default:
        return <Clock className="w-5 h-5 text-[#0F382C]" />;
    }
  };

  return (
    <section id="timeline" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF7F2] overflow-hidden">
      
      {/* Background Star Texture */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
            Order of Events
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            Wedding Timeline
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-cormorant italic text-base sm:text-lg text-[#2C332E]/80 mt-3">
            Join us for an auspicious day of blessings, prayers, and celebratory fellowship.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative w-full max-w-2xl">
          
          {/* Central Connecting Gold Line */}
          <div className="absolute top-4 bottom-4 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />

          <div className="flex flex-col gap-10 sm:gap-14">
            {weddingConfig.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node / Icon */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-[#FAF7F2] border-2 border-[#D4AF37] flex items-center justify-center shadow-md">
                    {getIcon(item.icon)}
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-40px)] ${
                      isEven ? 'sm:text-right' : 'sm:text-left'
                    }`}
                  >
                    <div className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-[#D4AF37]/40 shadow-luxury hover:border-[#D4AF37] transition-all duration-300 group">
                      
                      {/* Time Badge */}
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#0F382C] text-[#FAF7F2] text-xs font-semibold tracking-wider mb-2 shadow-sm">
                        {item.time}
                      </span>

                      <h3 className="font-serif text-xl font-bold text-[#0F382C] mt-1 group-hover:text-[#C5A059] transition-colors">
                        {item.title}
                      </h3>

                      <p className="font-cormorant italic text-sm text-[#8A6412] font-semibold mt-0.5">
                        {item.subtitle}
                      </p>

                      <p className="text-xs text-[#2C332E]/80 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
