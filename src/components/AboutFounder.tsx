/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Users, Layers, Award, Sparkles, BookOpen, Clock, Heart, ShieldAlert 
} from 'lucide-react';
import { AnandmayLogo, SkillWaveLogo } from './Logos';

export default function AboutFounder() {
  const pillars = [
    {
      title: 'Mind-Body Alignment',
      desc: 'A calm mind supports a stable body. Both work together in harmony.',
      icon: Layers,
      color: 'bg-[#1A3B32]/10 text-[#1A3B32]'
    },
    {
      title: 'Ancient Wisdom, Modern Context',
      desc: 'Teachings from the Bhagavad Gita translated into practical steps relevant for today\'s demanding lifestyle.',
      icon: BookOpen,
      color: 'bg-[#D97706]/10 text-[#D97706]'
    },
    {
      title: 'Simple, Powerful Practices',
      desc: 'No over-engineered workflows. Just small, highly intentional daily shifts that generate compounding lasting change.',
      icon: Clock,
      color: 'bg-[#1A3B32]/10 text-[#1A3B32]'
    },
    {
      title: 'Holistic Wellbeing',
      desc: 'Body · Mind · Emotion · Spirit are completely integrated and addressed as one single ecosystem.',
      icon: Heart,
      color: 'bg-[#D97706]/10 text-[#D97706]'
    }
  ];

  return (
    <section id="founder" className="py-24 bg-[#F5F2ED] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Split-Layout Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Portrait Illustration Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-[#1A3B32]/10 bg-[#1A3B32]/10 flex flex-col justify-end p-6 group">
              {/* Overlay with subtle sand textures */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B32] via-[#1A3B32]/30 to-[#1A3B32]/10 z-10" />
              
              {/* Elegant portrait representing the serene yoga and life mentor Abhishek Todkar Mali */}
              <img 
                src="/founder.jpg"
                alt="Abhishek Todkar Mali"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Founder detail card inside visual container */}
              <div className="relative z-20 text-white">
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold">Your Mentor</p>
                <h3 className="font-serif font-bold text-xl leading-tight">Abhishek Todkar Mali</h3>
                <p className="text-xs text-stone-350 font-light mt-1">
                  Yoga & Life Coach  ·  International Speaker  ·  Mentor
                </p>
                
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center gap-3 text-[10px] uppercase font-mono tracking-wider text-[#D97706]">
                  <Award className="w-4 h-4" />
                  <span>Decades of living practice</span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block">The Journey</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight">
                The Founder's Story
              </h2>
            </div>

            {/* Opening Quote */}
            <div className="border-l-4 border-[#D97706] pl-6 py-1">
              <p className="font-serif italic text-xl text-[#1A3B32] leading-relaxed">
                &ldquo;Some journeys are not planned. They are guided.&rdquo;
              </p>
            </div>

            {/* Timelined paragraphs of journey */}
            <div className="space-y-6 text-zinc-700 text-sm leading-relaxed font-sans max-w-2xl">
              <p>
                From a very young age, I was blessed to grow in the presence of realised yogis and saints. Their silence, their wisdom, and their way of living shaped me deeply in ways words cannot fully capture.
              </p>
              <p>
                Yoga and the teachings of the Gita were never something I studied. They became the way I lived, thought, and understood life.
              </p>
              <p>
                As life unfolded, I stepped into the modern world as an engineer, working across countries, travelling the world. But no matter how far I went outside, the inner journey continued quietly.
              </p>
              <p>
                What I received from my Guru and this path I could not keep to myself.
              </p>
            </div>

            {/* Founding Callouts with Green accent cards */}
            <div className="p-6 rounded-2xl bg-[#1A3B32] text-white border border-[#D97706]/20 shadow-lg space-y-4 max-w-2xl">
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#D97706]">Founding Statement</p>
                <h4 className="font-serif text-lg font-bold">That is how Anandmay Yogshala was born.</h4>
              </div>
              <p className="text-xs text-stone-200 font-sans leading-relaxed">
                Not just as an organisation—but as a living space to share, to guide, and to help others experience the same clarity, peace, and inner strength.
              </p>
              
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <p className="font-serif italic text-sm text-[#D97706]">
                  &ldquo;This is not a path I chose. It is a path I was blessed to walk.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Companies & Leadership Portfolio */}
        {false && (
        <div className="mt-20 border-t border-[#1A3B32]/10 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-1">Ecosystem Leadership</span>
            <h3 className="font-serif font-bold text-2xl text-[#1A3B32]">
              Dual Initiatives & Ventures
            </h3>
            <p className="text-xs text-zinc-550 mt-2 font-sans">
              Abhishek Mali guides two highly distinct corporate ventures under an aligned professional philosophy:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Anandmay Yogshala Bento Box */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#1A3B32]/10 hover:border-[#1A3B32]/25 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex-shrink-0">
                    <AnandmayLogo className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#1A3B32] leading-none">
                      Anandmay Yogshala
                    </h4>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] block mt-1">
                      Wellness & Internal Alignment
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-zinc-700 leading-relaxed font-sans font-light">
                  Classical Hatha and Ashtanga Yoga programs, meditation courses, and 1:1 life-alignment coaching. Built on wisdom systems designed to help practitioners transition from confusion to profound purpose.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#1A3B32]/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-emerald-750 font-bold bg-[#1A3B32]/5 px-2.5 py-1 rounded-full border border-[#1A3B32]/10 uppercase">
                  Fully Integrated Below
                </span>
                <span className="text-zinc-500">YOG SE ANAND TAK</span>
              </div>
            </div>

            {/* SkillWave Bento Box (Second Company) */}
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-[#1A3B32]/10 hover:border-[#D97706]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#D97706] text-white text-[9px] uppercase font-mono font-bold py-1 px-4 rounded-bl-xl tracking-widest border-l border-b border-[#D97706]/30">
                Sister Venture
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-zinc-50 border border-zinc-200 rounded-xl">
                    <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8">
                      <rect x="12" y="58" width="12" height="26" fill="#4ADE80" />
                      <rect x="30" y="44" width="12" height="40" fill="#22C55E" />
                      <rect x="48" y="28" width="12" height="56" fill="#16A34A" />
                      <rect x="66" y="12" width="12" height="72" fill="#15803D" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-lg text-[#0F1E36] leading-none">
                      Skill<span className="text-[#3A90E3]">Wave</span>
                    </h4>
                    <span className="text-[10px] font-mono tracking-widest text-[#5A6E85] block mt-1 uppercase">
                      Step Up. Stand Out.
                    </span>
                  </div>
                </div>
                
                <p className="text-xs text-zinc-700 leading-relaxed font-sans font-light">
                  Soft skills training, technical scaling platforms, and progressive upskilling curriculum engineered to expand your career footprint, build corporate value systems, and accelerate professional growth.
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#1A3B32]/10 flex items-center justify-between text-xs">
                <a
                  href="/?mode=skillwave"
                  onClick={(e) => {
                    if (typeof window !== 'undefined') {
                      e.preventDefault();
                      const url = new URL(window.location.href);
                      url.searchParams.set('mode', 'skillwave');
                      window.history.pushState({ venture: 'skillwave' }, '', url.pathname + url.search);
                      window.dispatchEvent(new Event('popstate'));
                    }
                  }}
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 group transition-colors"
                >
                  <span>Explore SkillWave Career Mentorship</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Pillars Section Grid "What we bring to every session" */}
        <div className="mt-28 border-t border-[#1A3B32]/10 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Our Core Standards</span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A3B32]">
              What We Bring to Every Session
            </h3>
            <div className="w-10 h-0.5 bg-[#D97706] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-[#1A3B32]/10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className={`w-10 h-10 rounded-lg ${pillar.color} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#1A3B32] leading-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-zinc-650 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-[#1A3B32]/10 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
