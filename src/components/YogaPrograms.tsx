/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Dribbble, Flame, Compass, Wind, Anchor, Target, Music, 
  Clock, Users, AlertCircle, RefreshCw, HelpCircle 
} from 'lucide-react';

interface Practice {
  name: string;
  sub: string;
  desc: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  image: string;
}

export default function YogaPrograms() {
  const [selectedPractice, setSelectedPractice] = useState<number>(0);

  const practices: Practice[] = [
    {
      name: 'Hatha Yoga',
      sub: 'Foundational Postures',
      desc: 'Focus on conscious alignment, deep stability, holding asanas, and somatic body awareness.',
      details: 'Hatha yoga is the foundation of all physical yoga. In our sessions, we emphasize spinal length, weight balance, and clean skeletal alignment. Ideal for developing physical discipline, correcting posture, and building raw strength from the feet up.',
      icon: Anchor,
      accent: 'border-[#1A3B32]/10 bg-[#1A3B32]/10 text-[#1A3B32]',
      image: '/assets/practices/hatha-yoga.jpg'
    },
    {
      name: 'Ashtanga Yoga',
      sub: 'Dynamic Strength Sequencing',
      desc: 'Structured sequences focusing on muscular stamina, core endurance, and static posture controls.',
      details: 'This is a dynamic, structured sequencing style designed to heat the body, release muscular tension, and build deep stamina. Every stretch is coordinated with continuous flow, refining body architecture and cardiovascular response.',
      icon: Flame,
      accent: 'border-[#D97706]/20 bg-[#D97706]/10 text-[#D97706]',
      image: '/assets/practices/ashtanga-yoga.jpg'
    },
    {
      name: 'Vinyasa Yoga',
      sub: 'Breath-Linked Posture Flow',
      desc: 'A synchronized fluid flow connecting breath to physical transitions and creative coordination.',
      details: 'Vinyasa coordinates fluid postures with rhythmic breath, creating a meditative, continuous dance. This practice trains spatial coordination, joint flexibility, and cardiac pacing, inducing deep emotional release.',
      icon: Compass,
      accent: 'border-[#D97706]/20 bg-[#D97706]/10 text-[#D97706]',
      image: '/assets/practices/vinyasa-yoga.jpg'
    },
    {
      name: 'Pranayama',
      sub: 'Nervous System Biohacking',
      desc: 'Breath exercises targeted to modulate vital energy currents, and regulate mental pacing.',
      details: 'Pranayama is the science of breath regulation. Learn techniques like Anulom Vilom, Kapalbhati, and Bhastrika to regulate oxygen saturation, shift your autonomic nervous system from high-stress to rest, and clear immediate anxiety.',
      icon: Wind,
      accent: 'border-[#1A3B32]/10 bg-[#1A3B32]/15 text-[#1A3B32]',
      image: '/assets/practices/pranayama.jpg'
    },
    {
      name: 'Bandhas & Mudras',
      sub: 'Internal Energetic Seals',
      desc: 'Using physical muscular locks and delicate finger seals to focus internal kinetic currents.',
      details: 'Bandhas (Mula, Uddiyana, Jalandhara) represent core muscular locks that contain and redirect pranic energy, stabilizing posture structures. Combined with mudras (hand gestures), they train micro-attention and assist deep brain focus.',
      icon: Target,
      accent: 'border-[#1A3B32]/10 bg-[#1A3B32]/10 text-[#1A3B32]',
      image: '/assets/practices/bandhas-mudras.jpg'
    },
    {
      name: 'Meditation & Mind Training',
      sub: 'Active Mental Pacing',
      desc: 'Structured neuro-training techniques to cultivate calm observation, rejecting simple sitting still.',
      details: 'We do not ask you to simply "stop thinking." We provide active, progressive mental tools grounded in Dharana (focused concentration). Learn to step back from wild emotional thoughts, analyze mind states objectively, and find calm.',
      icon: Users,
      accent: 'border-[#D97706]/20 bg-[#D97706]/10 text-[#D97706]',
      image: '/assets/practices/meditation.jpg'
    },
    {
      name: 'Sound Healing',
      sub: 'Organic Nervous System Reset',
      desc: 'Somatic frequency acoustic sessions to fully relax the physical body and brain waves.',
      details: 'High-frequency acoustic vibrations from Himalayan singing bowls are built directly into selected relaxation units. These sound waves prompt a deep neurological reset, promoting effortless parasympathetic recovery and peaceful restorative rest.',
      icon: Music,
      accent: 'border-[#1A3B32]/20 bg-[#1A3B32]/10 text-[#1A3B32]',
      image: '/assets/practices/sound-healing.jpg'
    }
  ];

  return (
    <section id="practices" className="py-24 bg-[#EFECE6] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-8 border-b border-[#1A3B32]/10">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Our Curated Methods</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight">
              Yoga & Holistic Health
            </h2>
            <div className="w-12 h-1 bg-[#D97706] mt-4 rounded-full" />
          </div>
          <div className="lg:col-span-7 space-y-4 text-sm text-[#1A3B32]">
            <p className="font-semibold text-base text-[#1A3B32]">
              The sessions here are structured, but not rigid. Each class moves through breath, body, and awareness in a sequence designed for all levels.
            </p>
            <p className="text-zinc-700 leading-relaxed font-sans">
              Practices draw from Hatha, Ashtanga, and Vinyasa traditions, combined with Pranayama breath work, Bandhas, Mudras, and guided meditation. Sound healing is woven into certain sessions. The combination is intentional—physical mobility, nervous system regulation, and mental training, all in one hour.
            </p>
          </div>
        </div>

        {/* Practices Covered Interactive Grid */}
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-[#1A3B32] mb-4 lg:mb-0">
              Practices Covered
            </h3>
            <span className="text-xs text-zinc-500 font-mono italic">
              *Click any practice tab to inspect active details & core benefits
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Practices list selectors */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {practices.map((practice, index) => {
                const IconComp = practice.icon;
                const isSelected = selectedPractice === index;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedPractice(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#D97706] shadow-sm ring-1 ring-[#D97706]'
                        : 'bg-white/60 border-[#1A3B32]/10 hover:border-[#1A3B32] text-zinc-500 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${practice.accent}`}>
                        <IconComp className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-[#1A3B32]">{practice.name}</h4>
                        <p className="text-[10px] text-zinc-500 font-sans mt-0.5">{practice.sub}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected practice detailed display card */}
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#1A3B32]/10 shadow-xs flex flex-col justify-between">
              {(() => {
                const practice = practices[selectedPractice];
                const IconComp = practice.icon;
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#1A3B32]/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${practice.accent}`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-mono tracking-widest text-[#D97706]">Focus Tradition</p>
                          <h4 className="font-serif font-bold text-lg text-[#1A3B32]">{practice.name}</h4>
                        </div>
                      </div>
                    </div>

                    {/* Beautiful, Serene Image for Practice */}
                    <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-xs border border-[#1A3B32]/10">
                      <img 
                        src={practice.image} 
                        alt={practice.name} 
                        referrerPolicy="no-referrer"
                        className="w-full h-auto transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A3B32]/25 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="space-y-4">
                      <p className="font-serif italic text-[#1A3B32] text-base font-medium">
                        &ldquo;{practice.desc}&rdquo;
                      </p>
                      <p className="text-sm text-zinc-700 leading-relaxed font-sans font-light">
                        {practice.details}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1A3B32]/10">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 font-bold block mb-2">Practice Standard</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] font-sans font-medium text-[#1A3B32] bg-[#1A3B32]/10 px-2.5 py-1 rounded-full border border-[#1A3B32]/10">All Skill Levels</span>
                        <span className="text-[10px] font-sans font-medium text-[#D97706] bg-[#D97706]/10 px-2.5 py-1 rounded-full border border-[#D97706]/10">Gita Grounded</span>
                        <span className="text-[10px] font-sans font-medium text-[#1A3B32] bg-[#1A3B32]/5 px-2.5 py-1 rounded-full">Somatic Reset</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Batch timings area */}
        <div id="programs" className="mt-28 border-t border-[#1A3B32]/10 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Weekly Schedule</span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A3B32]">
              Batch Timings
            </h3>
            <div className="w-10 h-0.5 bg-[#D97706] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Batch Morning Card */}
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-[24px] border border-[#1A3B32]/10 shadow-xs flex flex-col justify-between hover:border-[#1A3B32] transition-colors duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono bg-[#1A3B32]/10 text-[#1A3B32] font-bold px-2.5 py-1 rounded-full border border-[#1A3B32]/10">Morning Program</span>
                    <h4 className="font-serif font-bold text-lg text-[#1A3B32] mt-3">Morning Discipline Program</h4>
                  </div>
                  <Clock className="w-6 h-6 text-[#D97706] opacity-70" />
                </div>
                
                <div className="space-y-2 border-t border-[#1A3B32]/10 pt-4">
                  <div className="flex justify-between items-center text-sm font-sans">
                    <span className="text-zinc-500">Days:</span>
                    <span className="font-semibold text-[#1A3B32]">Mon – Wed – Fri</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-sans">
                    <span className="text-zinc-500">Time:</span>
                    <span className="font-mono font-bold text-[#1A3B32]">6:30 – 7:30 AM</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                  Begin your day aligned. Focused on physical posture holding, nervous system activation, and clarity that charges the remainder of your week.
                </p>
              </div>
            </div>

            {/* Batch Evening Card */}
            <div className="bg-[#1A3B32] p-8 rounded-[24px] text-white shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D97706]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono bg-[#D97706]/20 text-[#D97706] font-bold px-2.5 py-1 rounded-full border border-[#D97706]/20">Evening Program</span>
                    <h4 className="font-serif font-bold text-lg text-white mt-3">Evening Transformation Program</h4>
                  </div>
                  <Clock className="w-6 h-6 text-[#D97706]" />
                </div>
                
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center text-sm font-sans">
                    <span className="text-stone-300">Days:</span>
                    <span className="font-semibold text-white">Mon – Wed – Fri</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-sans">
                    <span className="text-stone-300">Time:</span>
                    <span className="font-mono font-bold text-[#D97706]">7:30 – 8:30 PM</span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed font-sans">
                  Decompress and shift outwards to inwards. Ideal for deep somatic sound healing elements, slow stretches, and releasing complex workplace fatigue.
                </p>
              </div>
            </div>
          </div>

          {/* Schedule disclaimer badge */}
          <div className="mt-10 max-w-xl mx-auto flex gap-4 p-4 rounded-xl bg-amber-50/50 border border-[#D97706]/20 text-stone-600 text-xs text-left leading-normal items-start">
            <AlertCircle className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
            <p className="font-sans font-light">
              <span className="font-semibold text-stone-800 uppercase tracking-wide text-[10px] mr-1 block sm:inline">Design Restriction:</span> 
              Batches are kept small by design (ten to twenty participants per session max). This guarantees individual guidance and posture correction directly from Coach Abhishek, ensuring you do not disappear into the back row.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
