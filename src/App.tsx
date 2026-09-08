import React, { useState } from 'react';
import { TajMahalGate } from './components/TajMahalGate';
import { Navigation } from './components/Navigation';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetalsCanvas } from './components/FloatingPetalsCanvas';
import { HeroSection } from './components/HeroSection';
import { QuranSection } from './components/QuranSection';
import { CoupleSection } from './components/CoupleSection';
import { WeddingDetails } from './components/WeddingDetails';
import { TimelineSection } from './components/TimelineSection';
import { FamilySection } from './components/FamilySection';
import { DressCodeSection } from './components/DressCodeSection';
import { RsvpSection } from './components/RsvpSection';
import { LocationSection } from './components/LocationSection';
import { HashtagSection } from './components/HashtagSection';
import { GallerySection } from './components/GallerySection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  const [gateOpen, setGateOpen] = useState(false);
  const [startMusicTrigger, setStartMusicTrigger] = useState(false);

  const handleOpenInvitation = () => {
    setGateOpen(true);
    setStartMusicTrigger(true);
  };

  const handleReplayGate = () => {
    setGateOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2421] relative overflow-x-hidden selection:bg-[#D4AF37]/30 selection:text-[#0F382C]">
      {/* 1. Cinematic Taj Mahal 3D Opening Gate Experience */}
      <TajMahalGate isOpen={gateOpen} onOpen={handleOpenInvitation} />

      {/* 2. Floating Ambient Flower Petals & Gold Sparkles */}
      <FloatingPetalsCanvas />

      {/* 3. Floating Navigation & Music Player */}
      <Navigation onReplayGate={handleReplayGate} />
      <MusicPlayer autoStartOnOpen={startMusicTrigger} />

      {/* 4. Main Invitation Storyline */}
      <main className="relative z-10">
        <HeroSection />
        <QuranSection />
        <CoupleSection />
        <WeddingDetails />
        <TimelineSection />
        <FamilySection />
        <DressCodeSection />
        <RsvpSection />
        <LocationSection />
        <HashtagSection />
        <GallerySection />
      </main>

      {/* 5. Closing Arch & Footer */}
      <FooterSection />
    </div>
  );
};

export default App;
