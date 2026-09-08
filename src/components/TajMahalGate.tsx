import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { Sparkles, KeyRound } from 'lucide-react';

interface TajMahalGateProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const TajMahalGate: React.FC<TajMahalGateProps> = ({ onOpen, isOpen }) => {
  const [animating, setAnimating] = useState(false);
  const [fullyEntered, setFullyEntered] = useState(false);
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate star field
    const newStars = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 1,
      delay: Math.random() * 4,
    }));
    setStars(newStars);
  }, []);

  const handleOpenGate = () => {
    if (animating || isOpen) return;
    setAnimating(true);
    onOpen();

    // After animation sequence completes (3.6s), mark as fully entered
    setTimeout(() => {
      setFullyEntered(true);
    }, 3600);
  };

  if (fullyEntered && isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none transition-opacity duration-1000 ${
        fullyEntered ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{
        perspective: '1400px',
        backgroundColor: '#071510', // Deep midnight emerald
      }}
    >
      {/* Dynamic Starfield & Night Sky */}
      <div className="absolute inset-0 bg-radial-at-c from-[#0D2E24] via-[#071813] to-[#040C09]">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-amber-100 animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Ambient Moon Glow Behind the Gateway */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-b from-[#F9E8B2]/20 via-[#D4AF37]/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Floating Petals Canvas / Background Embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-300/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Camera Movement Container */}
      <div
        className={`relative w-full h-full flex flex-col items-center justify-center transition-all duration-[3600ms] ease-out transform-style-3d ${
          animating ? 'scale-[2.6] translate-y-[20%] opacity-0' : 'scale-100 translate-y-0 opacity-100'
        }`}
      >
        {/* Taj Mahal Gateway Structure */}
        <div className="relative w-[92vw] max-w-[620px] md:max-w-[760px] h-[85vh] max-h-[820px] flex flex-col items-center justify-between">
          
          {/* Outer Mughal Arch Surround & Domes Silhouette */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Ornamental Crescent Finial */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E5C378] shadow-[0_0_12px_#E5C378]" />
              <div className="w-0.5 h-6 bg-gradient-to-b from-[#E5C378] to-transparent" />
            </div>

            {/* Left Minaret / Carved Pillar */}
            <div className="absolute left-0 top-6 bottom-0 w-8 md:w-12 bg-gradient-to-r from-[#EDE6DB] via-[#FAF7F2] to-[#D8CEBF] rounded-t-lg shadow-2xl border-r border-[#C5A059]/40 flex flex-col justify-between items-center py-4">
              <div className="w-6 md:w-9 h-4 bg-[#D4AF37]/30 rounded border border-[#C5A059]/50" />
              <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent" />
              <div className="w-6 md:w-9 h-6 bg-[#D4AF37]/20 rounded-b border-t border-[#C5A059]/50" />
            </div>

            {/* Right Minaret / Carved Pillar */}
            <div className="absolute right-0 top-6 bottom-0 w-8 md:w-12 bg-gradient-to-l from-[#EDE6DB] via-[#FAF7F2] to-[#D8CEBF] rounded-t-lg shadow-2xl border-l border-[#C5A059]/40 flex flex-col justify-between items-center py-4">
              <div className="w-6 md:w-9 h-4 bg-[#D4AF37]/30 rounded border border-[#C5A059]/50" />
              <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent" />
              <div className="w-6 md:w-9 h-6 bg-[#D4AF37]/20 rounded-b border-t border-[#C5A059]/50" />
            </div>
          </div>

          {/* Main Gate Arch Frame */}
          <div className="relative w-full h-full px-7 md:px-12 pt-5 pb-8 flex flex-col items-center">
            
            {/* Upper Mughal Header & Arch Spandrel with Floral Arabesque Inlay */}
            <div className="w-full bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#E9DFCF] rounded-t-[70px] md:rounded-t-[100px] border-t-2 border-x-2 border-[#D4AF37]/60 p-4 md:p-6 shadow-[0_25px_50px_rgba(0,0,0,0.5)] flex flex-col items-center">
              
              {/* Islamic Calligraphy Plaque */}
              <div className="w-full max-w-md py-2 px-4 rounded-full bg-emerald-950/20 border border-[#D4AF37]/40 backdrop-blur-sm text-center mb-3">
                <p className="font-arabic text-lg md:text-2xl text-[#C99E32] tracking-wider font-semibold">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#A68026] mt-0.5">
                  Bismillahir Rahmanir Raheem
                </p>
              </div>

              {/* Arch Cornice Line */}
              <div className="w-full flex items-center justify-center gap-3">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                <span className="text-xs uppercase tracking-[0.3em] text-[#0F382C] font-semibold">
                  The Royal Nikah
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
              </div>
            </div>

            {/* Symmetrical 3D Double Doors Portal */}
            <div className="relative w-full flex-1 bg-[#0A1C15] overflow-hidden rounded-b-lg border-x-2 border-b-2 border-[#D4AF37]/60 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)] perspective-1500 flex">
              
              {/* Inner Courtyard Light Burst (Visible when gates open) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF5DC] via-[#FAF7F2] to-[#E8DEC8] p-6 text-center z-0">
                <div className="w-24 h-24 rounded-full bg-[#D4AF37]/20 blur-xl absolute" />
                <Sparkles className="w-10 h-10 text-[#D4AF37] animate-spin-slow mb-3" />
                <p className="font-cormorant italic text-lg text-[#0F382C]">Welcome to the celebration</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#0F382C] font-bold tracking-widest mt-1">
                  {weddingConfig.groomName} & {weddingConfig.brideName}
                </h3>
              </div>

              {/* Left Door Panel */}
              <div
                className={`w-1/2 h-full bg-gradient-to-br from-[#FAF7F2] via-[#EFE7D8] to-[#DDD2C0] border-r border-[#C5A059]/70 relative z-10 gate-door-left shadow-2xl flex flex-col justify-between p-3 md:p-6 ${
                  animating ? 'open' : ''
                }`}
              >
                {/* Marble Inlay Geometric Box */}
                <div className="w-full h-full border border-[#D4AF37]/50 rounded-tl-[40px] p-2 flex flex-col justify-between bg-white/40">
                  <div className="border border-[#D4AF37]/30 h-full w-full rounded-tl-[30px] p-3 flex flex-col justify-between">
                    {/* Left Floral Arch Corner */}
                    <div className="text-right">
                      <div className="w-6 h-6 border-t-2 border-r-2 border-[#C5A059]/60 rounded-tr-lg inline-block" />
                    </div>

                    {/* Left Gate Center Monogram */}
                    <div className="text-center my-auto">
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full border border-[#C5A059]/60 bg-[#FAF7F2] flex items-center justify-center shadow-inner">
                        <span className="font-serif text-xl md:text-2xl text-[#0F382C] font-bold">
                          {weddingConfig.groomName[0]}
                        </span>
                      </div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#0F382C] mt-2 font-semibold">
                        {weddingConfig.groomName}
                      </p>
                    </div>

                    {/* Left Handle */}
                    <div className="flex justify-end pr-1">
                      <div className="w-3 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] shadow-md border border-amber-200" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Door Panel */}
              <div
                className={`w-1/2 h-full bg-gradient-to-bl from-[#FAF7F2] via-[#EFE7D8] to-[#DDD2C0] border-l border-[#C5A059]/70 relative z-10 gate-door-right shadow-2xl flex flex-col justify-between p-3 md:p-6 ${
                  animating ? 'open' : ''
                }`}
              >
                {/* Marble Inlay Geometric Box */}
                <div className="w-full h-full border border-[#D4AF37]/50 rounded-tr-[40px] p-2 flex flex-col justify-between bg-white/40">
                  <div className="border border-[#D4AF37]/30 h-full w-full rounded-tr-[30px] p-3 flex flex-col justify-between">
                    {/* Right Floral Arch Corner */}
                    <div className="text-left">
                      <div className="w-6 h-6 border-t-2 border-l-2 border-[#C5A059]/60 rounded-tl-lg inline-block" />
                    </div>

                    {/* Right Gate Center Monogram */}
                    <div className="text-center my-auto">
                      <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full border border-[#C5A059]/60 bg-[#FAF7F2] flex items-center justify-center shadow-inner">
                        <span className="font-serif text-xl md:text-2xl text-[#0F382C] font-bold">
                          {weddingConfig.brideName[0]}
                        </span>
                      </div>
                      <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#0F382C] mt-2 font-semibold">
                        {weddingConfig.brideName}
                      </p>
                    </div>

                    {/* Right Handle */}
                    <div className="flex justify-start pl-1">
                      <div className="w-3 h-10 rounded-full bg-gradient-to-l from-[#D4AF37] to-[#AA7C11] shadow-md border border-amber-200" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Arch Base Plinth */}
            <div className="w-full h-4 bg-gradient-to-r from-[#D8CEBF] via-[#FAF7F2] to-[#D8CEBF] rounded-b border-t border-[#C5A059]/50 shadow-lg" />
          </div>

          {/* Invitation Title Above / Overlay */}
          <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none px-4 w-full">
            <span className="inline-block px-3 py-1 rounded-full bg-[#0F382C]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#E5C378] mb-2 font-medium">
              The Wedding Of
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-bold tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {weddingConfig.groomName} <span className="text-[#D4AF37] font-cormorant italic font-normal">&</span> {weddingConfig.brideName}
            </h2>
            <p className="text-[#EAD9B8] font-cormorant italic text-sm md:text-lg mt-1 drop-shadow-md">
              {weddingConfig.weddingDisplayDate}
            </p>
          </div>

          {/* Open Invitation Glassmorphic Button */}
          <div className={`relative z-30 mb-2 transition-all duration-500 ${animating ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
            <button
              onClick={handleOpenGate}
              className="group relative px-8 md:px-12 py-3.5 md:py-4 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#0F382C] border-2 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-3 cursor-pointer"
            >
              <KeyRound className="w-4 h-4 text-[#C5A059] group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-serif text-sm md:text-base font-bold tracking-[0.25em] uppercase">
                Open Invitation
              </span>
              <Sparkles className="w-4 h-4 text-[#C5A059] animate-pulse" />
            </button>
            <p className="text-center text-[#EAD9B8]/80 text-[11px] uppercase tracking-[0.2em] mt-2 font-medium animate-pulse">
              Tap to enter
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
