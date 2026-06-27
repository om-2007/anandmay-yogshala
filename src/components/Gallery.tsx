/// <reference types="vite/client" />

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Grid, Sparkles, Move } from 'lucide-react';

interface GalleryProps {
  activeVenture: 'anandmay' | 'skillwave';
  onBackToHome: () => void;
}

export default function Gallery({ activeVenture, onBackToHome }: GalleryProps) {
  // 1. Eagerly glob images from both subfolders in the src/gallery directory
  const yogaModules = import.meta.glob('/src/gallery/yogshala/*.{png,jpg,jpeg,webp,WebP,PNG,JPG,JPEG}', { eager: true });
  const skillwaveModules = import.meta.glob('/src/gallery/skillwave/*.{png,jpg,jpeg,webp,WebP,PNG,JPG,JPEG}', { eager: true });

  const yogaImages = Object.values(yogaModules).map((mod: any) => mod.default);
  const skillwaveImages = Object.values(skillwaveModules).map((mod: any) => mod.default);

  const isYoga = activeVenture === 'anandmay';
  let galleryImages = isYoga ? yogaImages : skillwaveImages;

  // Fallback default mock images if the selected folder is empty
  if (galleryImages.length === 0) {
    galleryImages = isYoga 
      ? [
          '/ashtanga-yoga.jpg',
          '/meditation.jpg',
          '/pranayama.jpg',
          '/sound-healing.jpg',
          '/founder.jpg'
        ]
      : [
          '/founder.jpg',
          '/mentoring-1.jpg',
          '/focus-2.jpg',
          '/coaching-3.jpg',
          '/session-4.jpg',
          '/skillwave-bg.jpg'
        ];
  }

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false);

  // Swipe gesture detection refs
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Reset zoom & pan when slide index changes
  useEffect(() => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
    setIsFullImageLoaded(false);
  }, [lightboxIdx]);

  // Keyboard navigation inside lightbox
  useEffect(() => {
    if (lightboxIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIdx(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIdx]);

  const handleNext = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((prev) => (prev! + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    if (lightboxIdx === null) return;
    setLightboxIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
  };

  // Zoom controls
  const toggleZoom = () => {
    if (zoomScale > 1) {
      setZoomScale(1);
      setPanOffset({ x: 0, y: 0 });
    } else {
      setZoomScale(2.5);
    }
  };

  // Drag to pan logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomScale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mobile Touch drag / pan logic
  const handleTouchStartPan = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoomScale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
    }
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMovePan = (e: React.TouchEvent) => {
    if (isDragging && zoomScale > 1) {
      setPanOffset({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEndPan = () => {
    setIsDragging(false);
    
    // Swipe gestures if not zoomed in
    if (zoomScale === 1) {
      const distance = touchStartX.current - touchEndX.current;
      if (Math.abs(distance) > 50) { // minimum threshold for swipe
        if (distance > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };



  // Theme constants
  const themeColor = isYoga ? '#1A3B32' : '#0F1E36';
  const accentColor = isYoga ? '#D97706' : '#3A90E3';

  return (
    <div className={`min-h-screen pt-44 pb-28 ${isYoga ? 'bg-[#F5F2ED]' : 'bg-[#FAF9F6]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title area */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase font-extrabold border shadow-xs"
            style={{ 
              backgroundColor: isYoga ? '#D97706' : '#3A90E3',
              borderColor: isYoga ? '#D97706' : '#3A90E3',
              color: '#FFFFFF' 
            }}
          >
            <Grid className="w-3.5 h-3.5 text-white" />
            <span className="text-white">Photo Archive</span>
          </div>

          <h1 className="font-serif font-bold text-3xl sm:text-4xl" style={{ color: themeColor }}>
            {isYoga ? 'Anandmay Yogshala Gallery' : 'SkillWave Action Gallery'}
          </h1>
          <div className="w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: accentColor }} />
          <p className="text-zinc-650 text-sm font-sans max-w-xl mx-auto">
            A visual documentation of daily sessions, yoga practices, career workshops, and transformation milestones guided by Abhishek Todkar Mali.
          </p>

          <div>
            <button 
              onClick={onBackToHome}
              className="text-xs font-semibold underline hover:no-underline transition-all cursor-pointer"
              style={{ color: accentColor }}
            >
              ← Back to Main Page
            </button>
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryImages.map((src, index) => (
            <GridImage key={index} src={src} index={index} onClick={() => setLightboxIdx(index)} />
          ))}
        </div>

      </div>

      {/* Lightbox full-screen overlay */}
      {lightboxIdx !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md select-none"
          onMouseUp={handleMouseUp}
        >
          {/* Top Info Bar */}
          <div className="absolute top-0 left-0 right-0 p-5 flex items-center justify-between text-white bg-gradient-to-b from-black/50 to-transparent z-30">
            <span className="text-xs font-mono tracking-wider opacity-85">
              IMAGE {lightboxIdx + 1} OF {galleryImages.length}
            </span>
            <div className="flex items-center gap-4">
              {/* Zoom indicators */}
              <button 
                onClick={toggleZoom}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Toggle zoom scale"
              >
                {zoomScale > 1 ? <ZoomOut className="w-4.5 h-4.5" /> : <ZoomIn className="w-4.5 h-4.5" />}
              </button>
              <button 
                onClick={() => setLightboxIdx(null)}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Close full preview"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Screen sized loading spinner overlay */}
          {!isFullImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-12 h-12 border-4 border-white/10 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Lightbox Image Viewport wrapper */}
          <div 
            className="w-full h-full flex items-center justify-center relative p-4 overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStartPan}
            onTouchMove={handleTouchMovePan}
            onTouchEnd={handleTouchEndPan}
          >
            {/* Viewport Image */}
            <img 
              src={galleryImages[lightboxIdx]}
              alt={`Full preview ${lightboxIdx + 1}`}
              onLoad={() => setIsFullImageLoaded(true)}
              style={{
                transform: `scale(${zoomScale}) translate(${panOffset.x / zoomScale}px, ${panOffset.y / zoomScale}px)`,
                cursor: zoomScale > 1 ? 'move' : 'default',
              }}
              className={`max-w-full max-h-full object-contain shadow-2xl transition-all duration-300 ${
                isFullImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          </div>

          {/* Zoom Instruction Floating Tip */}
          {zoomScale > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-3.5 py-1.5 rounded-full flex items-center gap-1.5 z-20 pointer-events-none border border-white/10">
              <Move className="w-3 h-3 text-[#D97706] animate-pulse" />
              <span>Drag to Pan • Click ZoomOut to reset</span>
            </div>
          )}

          {/* Navigation controls (hidden if single image) */}
          {galleryImages.length > 1 && (
            <>
              {/* Left arrow key on screen */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right arrow key on screen */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all active:scale-95 cursor-pointer z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Touch gesture swipe indicator helper */}
          <div className="absolute bottom-6 text-[10px] text-zinc-400 font-mono pointer-events-none z-10 hidden sm:block">
            Use keyboard <span className="text-white">←</span> / <span className="text-white">→</span> keys or swipe on mobile to navigate
          </div>
        </div>
      )}
    </div>
  );
}

interface GridImageProps {
  src: string;
  index: number;
  onClick: () => void;
}

const GridImage: React.FC<GridImageProps> = ({ src, index, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div 
      onClick={onClick}
      className="relative group aspect-square rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer border border-zinc-200 bg-zinc-100 transition-all duration-300"
    >
      {/* Shimmer pulse loader */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 via-zinc-100 to-zinc-200 animate-pulse bg-[length:200%_100%]" />
      )}
      <img
        src={src}
        alt={`Gallery item ${index + 1}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {/* Gallery hover shade overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
    </div>
  );
};
