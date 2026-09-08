import React, { useState, useEffect, useRef } from 'react';
import { weddingConfig } from '../weddingConfig';
import { VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  autoStartOnOpen?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStartOnOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthContextRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Initialize Web Audio Synth for soothing acoustic harp/oud ambient melody
  const startAmbientSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!synthContextRef.current) {
        synthContextRef.current = new AudioCtx();
      }

      if (synthContextRef.current.state === 'suspended') {
        synthContextRef.current.resume();
      }

      const notes = [220, 261.63, 293.66, 329.63, 392.00, 440, 523.25]; // A minor pentatonic / oriental maqam-like calm scale
      let noteIndex = 0;

      const playChime = () => {
        if (!synthContextRef.current || synthContextRef.current.state !== 'running') return;
        const ctx = synthContextRef.current;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const freq = notes[noteIndex % notes.length];
        noteIndex = (noteIndex + 1 + Math.floor(Math.random() * 2)) % notes.length;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 3.6);
      };

      playChime();
      synthIntervalRef.current = window.setInterval(playChime, 1800);
    } catch {
      // Audio synth fallback graceful handle
    }
  };

  const stopAmbientSynth = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthContextRef.current && synthContextRef.current.state === 'running') {
      synthContextRef.current.suspend();
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(weddingConfig.music.audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopAmbientSynth();
    };
  }, []);

  const toggleMusic = () => {
    setHasInteracted(true);
    if (!isPlaying) {
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Audio element blocked, use ambient Web Audio synthesizer
            startAmbientSynth();
            setIsPlaying(true);
          });
      } else {
        startAmbientSynth();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopAmbientSynth();
      setIsPlaying(false);
    }
  };

  // Optional trigger when user opens invitation
  useEffect(() => {
    if (autoStartOnOpen && !hasInteracted && !isPlaying) {
      toggleMusic();
    }
  }, [autoStartOnOpen]);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Pause Background Melody" : "Play Background Melody"}
        aria-label="Toggle background music"
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border-2 border-[#D4AF37] shadow-[0_4px_20px_rgba(212,175,55,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
      >
        {/* Animated Sound Wave Equalizer Rings */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-30 pointer-events-none" />
            <span className="absolute -inset-1.5 rounded-full border border-[#D4AF37]/40 animate-pulse pointer-events-none" />
          </>
        )}

        {/* Icon & Equalizer bars */}
        <div className="relative flex items-center justify-center text-[#0F382C]">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-5 w-5 justify-center">
              <span className="w-1 bg-[#0F382C] rounded-full animate-[bounce_0.8s_infinite_ease-in-out]" style={{ height: '70%' }} />
              <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_1.1s_infinite_ease-in-out_0.2s]" style={{ height: '100%' }} />
              <span className="w-1 bg-[#0F382C] rounded-full animate-[bounce_0.9s_infinite_ease-in-out_0.4s]" style={{ height: '50%' }} />
              <span className="w-1 bg-[#D4AF37] rounded-full animate-[bounce_1.2s_infinite_ease-in-out_0.1s]" style={{ height: '85%' }} />
            </div>
          ) : (
            <VolumeX className="w-5 h-5 text-[#8A6412] group-hover:text-[#0F382C] transition-colors" />
          )}
        </div>
      </button>

      {/* Track info tooltip (hidden on smallest screens, expands on hover) */}
      <div className="hidden sm:flex flex-col bg-[#FAF7F2]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/40 shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#0F382C]">
          <Music className="w-3 h-3 text-[#D4AF37]" />
          <span>{isPlaying ? weddingConfig.music.title : "Play Wedding Melody"}</span>
        </div>
      </div>
    </div>
  );
};
