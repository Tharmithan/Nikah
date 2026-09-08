import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="relative py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
              Venue & Location
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            How to Get There
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Venue Information and Map Card */}
        <div className="w-full rounded-3xl bg-white/95 border border-[#D4AF37]/50 shadow-luxury overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Details Column */}
          <div className="lg:w-2/5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/5">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center text-[#0F382C] mb-6 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
                Celebration Venue
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F382C] font-bold mt-2">
                {weddingConfig.venueName}
              </h3>

              <p className="font-cormorant italic text-base text-[#8A6412] font-semibold mt-1">
                {weddingConfig.venueHall}
              </p>

              <p className="text-sm text-[#2C332E]/80 mt-4 leading-relaxed">
                {weddingConfig.address}
                <br />
                {weddingConfig.cityCountry}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-black/5 flex flex-col gap-3">
              <a
                href={weddingConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#0F382C] hover:bg-[#164E3D] text-[#FAF7F2] font-serif text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Get Directions</span>
              </a>

              <a
                href={weddingConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[11px] uppercase tracking-wider text-[#8A6412] hover:text-[#0F382C] flex items-center justify-center gap-1 mt-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Interactive Map Frame */}
          <div className="lg:w-3/5 h-[340px] sm:h-[400px] lg:h-auto min-h-[350px] relative bg-[#E8DEC8]">
            <iframe
              src={weddingConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Map"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
