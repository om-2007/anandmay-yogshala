/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: () => void;
  onBookClick: () => void;
}

export default function Hero({ onLearnMoreClick, onBookClick }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#F5F2ED]">
      {/* Signature Artistic Flair Sun Graphic backdrop */}
      <div className="absolute -top-24 -right-24 w-96 h-96 sun-graphic pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 rounded-full bg-[#1A3B32]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Subtle vertical text border element from the Artistic theme */}
          <div className="hidden lg:flex lg:col-span-1 h-full flex-col justify-end items-center pb-8 border-r border-[#1A3B32]/10 self-stretch min-h-[400px]">
            <div className="vertical-text text-[10px] tracking-[0.4em] font-semibold text-[#1A3B32]/50 mb-12 uppercase select-none">
              YOGA • WELLNESS • LIFE COACHING
            </div>
          </div>

          {/* Text content side */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A3B32]/5 border border-[#1A3B32]/10 text-xs text-[#1A3B32] font-mono tracking-wider uppercase ml-0 mb-[24px] mt-12">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706] animate-pulse" />
              <span>Abhishek Todkar Mali Practice</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl text-[#1A3B32] leading-[1.1] tracking-tight">
                ANANDMAY <br />
                <span className="text-[#D97706] italic font-medium font-serif">YOGSHALA</span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pt-1">
                <span className="font-serif text-lg md:text-xl font-semibold text-[#1A3B32] tracking-wide">
                  योग से आनंद तक
                </span>
                <span className="hidden sm:inline text-gray-300">|</span>
                <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 bg-[#E6E2DC]/50 py-1 px-2.5 rounded-md">
                  From Yoga — to Bliss
                </span>
              </div>
            </div>

            {/* Offerings indicator tags */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-xs font-mono font-semibold text-[#1A3B32]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                YOGA
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                WELLNESS
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                LIFE COACHING
              </span>
            </div>

            {/* Core Message Quote */}
            <div className="border-l-4 border-[#D97706] pl-5 py-2 my-1 max-w-lg">
              <p className="font-serif text-2xl lg:text-3xl text-[#1A3B32] italic leading-relaxed font-normal">
                &ldquo;आनंद isn't found. <br className="sm:hidden" /> It's uncovered.&rdquo;
              </p>
            </div>

            <p className="text-[#334E44] max-w-xl text-base leading-relaxed">
              Step into a living practice that aligns your physical body, vital breath, and life vision. Under professional, Guru-guided wisdom, discover real clarity and confidence that transforms both your inner soul and outer world.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1A3B32] hover:bg-[#255246] text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 text-[#D97706]" />
              </button>
              <button
                onClick={onLearnMoreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#1A3B32]/20 hover:border-[#1A3B32] text-[#1A3B32] hover:bg-[#1A3B32]/2 text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                Our Philosophy
              </button>
            </div>

            {/* Key benefits quick proof badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-[#1A3B32]/10 w-full max-w-xl">
              <div className="flex items-center gap-2 text-xs text-[#1A3B32]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>Small Batches (10-20/session)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A3B32]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>Bhagavad Gita Wisdom</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#1A3B32]/80">
                <CheckCircle2 className="w-4 h-4 text-[#D97706]" />
                <span>Certified Global Mentor</span>
              </div>
            </div>
          </div>

          {/* Handcrafted Visual Sunset Concept Side */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden bg-gradient-to-b from-[#113227] to-[#0A1F18] shadow-2xl p-6 border-4 border-[#D97706]/30 flex flex-col justify-between group">
              {/* Gold Grid Frame overlay */}
              <div className="absolute inset-0 border border-[#D97706]/10 rounded-2xl m-3 pointer-events-none" />
              
              {/* The premium customized vector layout depicting dunes, rising sun and person silhouette */}
              <svg 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-full h-full object-contain filter drop-shadow-lg"
              >
                {/* Sun Graphic - artistic & prominent */}
                <circle cx="200" cy="180" r="85" fill="url(#sunGlow)" />
                <circle cx="200" cy="180" r="85" stroke="#D97706" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
                <circle cx="200" cy="180" r="105" stroke="#D97706" strokeWidth="1" opacity="0.15" />
                <circle cx="200" cy="180" r="125" stroke="#D97706" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.3" />

                {/* Ray rays of wisdom */}
                <line x1="200" y1="50" x2="200" y2="20" stroke="#D97706" strokeWidth="1" opacity="0.6" />
                <line x1="330" y1="180" x2="360" y2="180" stroke="#D97706" strokeWidth="1" opacity="0.6" />
                <line x1="70" y1="180" x2="40" y2="180" stroke="#D97706" strokeWidth="1" opacity="0.6" />
                <line x1="292" y1="88" x2="313" y2="67" stroke="#D97706" strokeWidth="1" opacity="0.4" />
                <line x1="108" y1="88" x2="87" y2="67" stroke="#D97706" strokeWidth="1" opacity="0.4" />

                {/* Desert Sand Dunes shapes */}
                <path d="M-50 380 Q120 300 280 340 T450 310 V420 H-50 Z" fill="#D97706" opacity="0.15" />
                <path d="M-50 350 Q100 370 250 320 T450 365 V420 H-50 Z" fill="#D97706" opacity="0.25" />
                <path d="M-20 380 Q180 320 420 380 V420 H-20 Z" fill="#1A3B32" />

                {/* Golden sand crest highlight */}
                <path d="M-20 380 Q180 320 420 380" stroke="#D97706" strokeWidth="2.5" opacity="0.8" />

                {/* Yoga Pose Silhouette inside sun */}
                <g transform="translate(145, 145)">
                  {/* Head */}
                  <circle cx="55" cy="40" r="8" fill="#F5F2ED" opacity="0.95" />
                  
                  {/* Spine & Torso */}
                  <path d="M55 48 C55 48 50 63 48 78" stroke="#F5F2ED" strokeWidth="5.5" strokeLinecap="round" opacity="0.95" />
                  <path d="M55 48 C55 48 60 63 62 78" stroke="#F5F2ED" strokeWidth="5.5" strokeLinecap="round" opacity="0.95" />

                  {/* Arms in circular dhyana mudra / greeting expansion */}
                  <path d="M55 48 Q35 55 45 70 C48 75 52 75 55 75" stroke="#F5F2ED" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />
                  <path d="M55 48 Q75 55 65 70 C62 75 58 75 55 75" stroke="#F5F2ED" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.8" />

                  {/* Legs folded in lotus posture */}
                  <path d="M30 85 C35 78 50 78 55 79 C60 78 75 78 80 85 C83 89 77 92 55 92 C33 92 27 89 30 85 Z" fill="#F5F2ED" opacity="0.95" />
                  <path d="M30 85 Q55 94 80 85" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.8" />

                  {/* Heart Center Star */}
                  <circle cx="55" cy="56" r="2.5" fill="#D97706" />
                  <circle cx="55" cy="56" r="6.5" stroke="#D97706" strokeWidth="0.5" opacity="0.5" />
                </g>

                {/* Gradients definition */}
                <defs>
                  <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FAE6C8" />
                    <stop offset="60%" stopColor="#D97706" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Little info badge overlay in high-end design pattern */}
              <div className="bg-[#1A3B32]/90 backdrop-blur-md border border-[#D97706]/30 py-2.5 px-4 rounded-xl flex items-center justify-between pointer-events-none">
                <div>
                  <p className="text-[10px] font-mono tracking-wider text-[#D97706] uppercase">Authentic Heritage</p>
                  <p className="text-xs font-serif font-semibold text-white">Bhagavad Gita Wisdom</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
