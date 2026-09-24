import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'drinks', label: 'Drinks & Juices' },
    { id: 'desserts', label: 'Desserts & Falooda' },
    { id: 'savories', label: 'Savories & Chaat' },
    { id: 'atmosphere', label: 'Atmosphere' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="flex flex-col w-full bg-[#FAF8F5] min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="bg-white border-b border-[#E7E2DA] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#E31B23] block mb-2">
            Visual Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#18181B] tracking-tight mb-4">
            See. Taste. Experience Jaidi.
          </h1>
          <p className="text-base text-[#52525B] max-w-xl mx-auto">
            A visual glimpse into our cold-pressed fruit elixirs, layered dessert faloodas, savory chaat, and vibrant night atmosphere in Sector CCA.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => {
              const isSelected = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-[#E31B23] text-white shadow-xs font-semibold'
                      : 'bg-[#FAF8F5] text-[#52525B] hover:text-[#18181B] border border-[#E7E2DA]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL MASONRY / ASYMMETRIC GRID */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => {
              // Asymmetric height styling for an editorial look
              const isTall = idx % 3 === 1;

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-[#ECE8E1] border border-[#E7E2DA] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isTall ? 'sm:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF4A52] block mb-1">
                        {item.categoryLabel}
                      </span>
                      <h3 className="font-serif font-bold text-lg leading-tight text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Footer Statement */}
          <div className="mt-20 py-16 px-8 rounded-3xl bg-white border border-[#E7E2DA] text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E31B23] block mb-2">
              Ready for Fresh Refreshment?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#18181B] mb-4">
              Taste What You See Today
            </h2>
            <p className="text-sm text-[#52525B] leading-relaxed mb-6 max-w-lg mx-auto">
              Every photograph represents dishes and drinks prepared fresh in our kitchen every single evening in DHA Phase 4, Lahore.
            </p>
            <button
              onClick={() => onNavigate('menu')}
              className="px-7 py-3.5 rounded-full bg-[#E31B23] text-white font-medium text-xs tracking-wider uppercase hover:bg-[#C8102E] transition-all inline-flex items-center gap-2"
            >
              <span>Explore Menu Items</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/25 flex items-center justify-center transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/25 flex items-center justify-center transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Modal Main Content Container */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl bg-black">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded-2xl"
              />
            </div>

            <div className="mt-4 text-center max-w-xl text-white">
              <span className="text-xs uppercase tracking-widest text-[#E31B23] font-semibold block mb-1">
                {currentItem.categoryLabel}
              </span>
              <h3 className="font-serif font-bold text-2xl mb-1">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70">
                {currentItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
