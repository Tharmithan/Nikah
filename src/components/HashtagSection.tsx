import React, { useState } from 'react';
import { weddingConfig } from '../weddingConfig';
import { Hash, Copy, Check, Camera } from 'lucide-react';

export const HashtagSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(weddingConfig.weddingHashtag);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF7F2] overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-white/80 backdrop-blur-sm border border-[#D4AF37]/40 shadow-luxury w-full flex flex-col items-center">
          
          <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D4AF37]/60 flex items-center justify-center mb-4 text-[#0F382C] shadow-sm">
            <Camera className="w-5 h-5" />
          </div>

          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
            Social & Memories
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#0F382C] font-bold mt-1">
            Celebrate With Us
          </h3>

          <p className="font-cormorant italic text-base text-[#2C332E]/80 mt-2 max-w-md">
            Tag your photos and joyful moments on social media using our official wedding hashtag
          </p>

          {/* Hashtag Display & Copy Button */}
          <div className="mt-6 flex items-center gap-3 bg-[#FAF7F2] px-6 py-3.5 rounded-full border border-[#D4AF37] shadow-sm">
            <Hash className="w-5 h-5 text-[#C5A059]" />
            <span className="font-serif text-lg sm:text-xl font-bold text-[#0F382C] tracking-wide">
              {weddingConfig.weddingHashtag}
            </span>
            <button
              onClick={handleCopy}
              className="ml-2 p-2 rounded-full hover:bg-white text-[#0F382C] transition-all cursor-pointer"
              title="Copy Hashtag"
              aria-label="Copy Hashtag"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-700" />
              ) : (
                <Copy className="w-4 h-4 text-[#C5A059] hover:text-[#0F382C]" />
              )}
            </button>
          </div>

          {copied && (
            <p className="text-xs text-emerald-800 font-medium mt-2 animate-fadeIn">
              ✓ Hashtag copied to clipboard!
            </p>
          )}

        </div>

      </div>
    </section>
  );
};
