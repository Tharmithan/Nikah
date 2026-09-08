import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { Clock, Sparkles } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(weddingConfig.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0F382C] via-[#0D2E24] to-[#0A241C] text-[#FAF7F2] border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
      
      {/* Subtle Star & Gold Sparkle Accents */}
      <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-20">
        <Sparkles className="w-24 h-24 text-[#D4AF37]" />
      </div>

      <div className="relative flex flex-col items-center text-center z-10">
        
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#EAD9B8] font-semibold">
            The Countdown
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#FAF7F2] mb-8">
          Counting Down to Forever
        </h3>

        {timeLeft.isPast ? (
          <div className="py-6 px-10 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37] text-center">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              Today is the day!
            </p>
            <p className="font-cormorant italic text-lg text-[#EAD9B8] mt-1">
              May Allah bless this union with eternal love and happiness.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3 sm:gap-6 w-full max-w-2xl">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-[#FAF7F2]/10 border border-[#D4AF37]/40 backdrop-blur-md shadow-inner"
              >
                <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#E5C378] tracking-wider">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#EAD9B8]/80 mt-2 font-medium">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="font-cormorant italic text-sm sm:text-base text-[#EAD9B8]/90 mt-8">
          InshaAllah on {weddingConfig.weddingDisplayDate}
        </p>

      </div>
    </div>
  );
};
