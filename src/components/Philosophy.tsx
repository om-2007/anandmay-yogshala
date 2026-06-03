/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Compass, BookOpen } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-[#F5F2ED] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Visual quote accent column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-3">Our Creed</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight leading-tight mb-8">
              The Path BACK <br />to Yourself
            </h2>
            
            {/* Opening prominent quote */}
            <div className="relative p-8 rounded-2xl bg-[#1A3B32] text-white shadow-xl overflow-hidden border border-[#D97706]/20">
              {/* Subtle design element */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#D97706]/10 pointer-events-none" />
              <Quote className="w-10 h-10 text-[#D97706] opacity-40 mb-4" />
              <blockquote className="font-serif italic text-xl md:text-2xl text-stone-100 leading-relaxed relative z-10">
                &ldquo;Yoga is not just a practice. It is the path back to yourself.&ldquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-px w-6 bg-[#D97706]"></span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#D97706]">Anandmay Core Philosophy</span>
              </div>
            </div>

            {/* Timeless wisdom seal */}
            <div className="mt-8 flex items-center gap-4 p-4 rounded-xl border border-[#1A3B32]/10 bg-white/50 backdrop-blur-md">
              <div className="w-10 h-10 rounded-lg bg-[#F5F2ED] flex items-center justify-center text-[#D97706]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-serif font-bold text-[#1A3B32]">Bhagavad Gita Guidance</p>
                <p className="text-[10px] text-zinc-500 font-sans">Anchored in centuries of lived spiritual context</p>
              </div>
            </div>
          </div>

          {/* Deep narrative text column */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6 text-[#1A3B32]/90">
              {/* Pillar Paragraph 1 */}
              <p className="text-lg leading-relaxed font-sans font-light drop-shadow-xs">
                At <span className="font-semibold text-[#1A3B32]">Anandmay Yogshala</span>, we believe every person deserves to live with clarity, calm, and purpose. And that true transformation begins within.
              </p>
              <p className="text-base leading-relaxed text-zinc-700 font-sans font-light">
                Through yoga and life coaching, we work at the deepest level aligning your body, mind, breath, and purpose so that every area of your life begins to reflect the clarity and calm you cultivate inside.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-[#1A3B32]/10 space-y-6">
              <div className="flex items-center gap-2 text-[#D97706]">
                <Compass className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs uppercase font-mono tracking-wider font-bold text-[#1A3B32]">Timeless Alignment</span>
              </div>
              
              {/* Pillar Paragraph 2 */}
              <p className="text-base leading-relaxed text-zinc-700 font-sans">
                Rooted in the timeless wisdom of the <span className="font-semibold text-[#1A3B32]">Bhagavad Gita</span> and grounded in practical, real-world guidance, we support your growth across every dimension—physical, mental, emotional, and spiritual.
              </p>
              <p className="text-base leading-relaxed text-zinc-700 font-sans">
                This is not just a yoga practice. This is not just coaching. It is a complete path back to yourself. Because when your inner world is aligned, your outer world naturally follows.
              </p>

              <div className="pt-4 border-t border-[#1A3B32]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-[#D97706]">Reinforcement</p>
                  <p className="font-serif font-bold text-[#1A3B32] text-lg">योग से आनंद तक</p>
                </div>
                <div className="text-xs italic text-zinc-500 font-sans">
                  (From Yoga — to Bliss)
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base text-zinc-700 leading-relaxed font-sans">
                Rooted in the timeless wisdom of the Bhagavad Gita and guided by decades of living practice, we unite the body, mind, and breath. The result is not just physical wellbeing—it is a complete inner transformation.
              </p>

              {/* Elab and Closing Quote */}
              <div className="border-l-4 border-[#1A3B32] pl-6 py-2 my-2">
                <p className="font-serif italic text-xl md:text-2xl text-[#1A3B32] leading-relaxed">
                  &ldquo;When your inner world is aligned, your outer world naturally follows.&ldquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
