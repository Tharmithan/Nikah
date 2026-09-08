import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../weddingConfig';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const images = weddingConfig.gallery;

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Camera className="w-4 h-4 text-[#C5A059]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#8A6412] font-semibold">
              Precious Moments
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0F382C] font-bold mt-2 tracking-wide">
            Our Memories
          </h2>
          <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto mt-4" />
          <p className="font-cormorant italic text-base sm:text-lg text-[#2C332E]/80 mt-3">
            Glimpses of love, tradition, and cherished milestones leading to our forever.
          </p>
        </div>

        {/* Responsive Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {images.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#E8DEC8] border border-[#D4AF37]/40 shadow-luxury cursor-pointer aspect-4/3 sm:aspect-square"
            >
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C]/80 via-[#0F382C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  {img.category}
                </span>
                <h4 className="font-serif text-lg font-bold mt-1">
                  {img.title}
                </h4>
                <div className="mt-3 flex items-center gap-2 text-xs text-[#FAF7F2]/90">
                  <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Click to view full photo</span>
                </div>
              </div>

              {/* Gold Corner Inset */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#071813]/95 backdrop-blur-md flex items-center justify-center p-4 select-none animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-[#D4AF37]/50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-[#D4AF37]/40"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-[#D4AF37]/40"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 sm:p-3 rounded-2xl bg-[#FAF7F2] border-2 border-[#D4AF37] shadow-2xl overflow-hidden max-h-[75vh]">
              <img
                src={images[activeImageIndex].url}
                alt={images[activeImageIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 text-center text-white">
              <h4 className="font-serif text-xl font-bold">
                {images[activeImageIndex].title}
              </h4>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-1">
                {images[activeImageIndex].category} • {activeImageIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
