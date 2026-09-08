import React from 'react';
import { weddingConfig } from '../weddingConfig';
import { CountdownTimer } from './CountdownTimer';
import { Calendar, Clock, MapPin, Navigation, CalendarPlus } from 'lucide-react';

export const WeddingDetails: React.FC = () => {
  // Generate Google Calendar Link
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`The Nikah of ${weddingConfig.groomName} & ${weddingConfig.brideName}`);
    const details = encodeURIComponent(`Nikah ceremony celebration at ${weddingConfig.venueName}, ${weddingConfig.address}.`);
    const location = encodeURIComponent(`${weddingConfig.venueName}, ${weddingConfig.address}, ${weddingConfig.cityCountry}`);
    // 20261024T050000Z (10:30 AM SL time is UTC+5:30 -> 05:00 UTC)
    const dates = '20261024T050000Z/20261024T100000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <section id="nikah" className="relative py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      
      {/* Background Decorative Floral Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
            Sacred Union Ceremony
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            The Nikah
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-[#C5A059] mt-2 font-medium">
            {weddingConfig.weddingIslamicDate}
          </p>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Live Countdown Timer */}
        <CountdownTimer />

        {/* Event Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-5xl mt-6">
          
          {/* Date Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/90 border border-[#D4AF37]/40 shadow-luxury group hover:border-[#D4AF37] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center mb-6 text-[#0F382C] group-hover:scale-110 group-hover:bg-[#0F382C] group-hover:text-[#FAF7F2] transition-all duration-300 shadow-sm">
              <Calendar className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
              The Date
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#0F382C] font-bold mt-2">
              {weddingConfig.weddingDisplayDate}
            </h3>
            <p className="font-cormorant italic text-sm text-[#2C332E]/80 mt-2">
              {weddingConfig.weddingIslamicDate}
            </p>
            <div className="mt-6 pt-4 border-t border-black/5 w-full">
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0F382C] hover:text-[#C5A059] transition-colors"
              >
                <CalendarPlus className="w-3.5 h-3.5" />
                <span>Add to Calendar</span>
              </a>
            </div>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/90 border border-[#D4AF37]/40 shadow-luxury group hover:border-[#D4AF37] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center mb-6 text-[#0F382C] group-hover:scale-110 group-hover:bg-[#0F382C] group-hover:text-[#FAF7F2] transition-all duration-300 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
              The Time
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#0F382C] font-bold mt-2">
              {weddingConfig.weddingTime}
            </h3>
            <p className="font-cormorant italic text-sm text-[#2C332E]/80 mt-2">
              Reception follows until {weddingConfig.weddingEndTime}
            </p>
            <div className="mt-6 pt-4 border-t border-black/5 w-full">
              <span className="text-xs uppercase tracking-wider font-medium text-[#8A6412]">
                Please arrive on time
              </span>
            </div>
          </div>

          {/* Venue Card */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/90 border border-[#D4AF37]/40 shadow-luxury group hover:border-[#D4AF37] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center mb-6 text-[#0F382C] group-hover:scale-110 group-hover:bg-[#0F382C] group-hover:text-[#FAF7F2] transition-all duration-300 shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A6412] font-semibold">
              The Venue
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#0F382C] font-bold mt-2">
              {weddingConfig.venueName}
            </h3>
            <p className="font-cormorant text-sm text-[#2C332E]/80 mt-2">
              {weddingConfig.venueHall}, {weddingConfig.address}
            </p>
            <div className="mt-6 pt-4 border-t border-black/5 w-full">
              <a
                href={weddingConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#0F382C] hover:text-[#C5A059] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
