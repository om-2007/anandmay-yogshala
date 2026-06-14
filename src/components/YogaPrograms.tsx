/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Dribbble, Flame, Compass, Wind, Anchor, Target, Music, 
  Clock, Users, AlertCircle, RefreshCw, HelpCircle,
  Brain, Activity
} from 'lucide-react';

type Category = 'Asana' | 'Pranayama & Mudra' | 'Mind & Reset';

interface Practice {
  name: string;
  sub: string;
  desc: string;
  details: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  image: string;
  category: Category;
}

export default function YogaPrograms() {
  const [selectedPractice, setSelectedPractice] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<Category>('Asana');

  const practices: Practice[] = [
    {
      name: 'Hatha Yoga',
      sub: 'Foundational Postures',
      desc: 'Focus on conscious alignment, deep stability, holding asanas, and somatic body awareness.',
      details: 'Hatha yoga is the foundation of all physical yoga. In our sessions, we emphasize spinal length, weight balance, and clean skeletal alignment. Ideal for developing physical discipline, correcting posture, and building raw strength from the feet up.',
      icon: Anchor,
      accent: 'border-[#1A3B32]/10 bg-[#1A3B32]/10 text-[#1A3B32]',
      image: '/hatha-yoga.jpg',
      category: 'Asana'
    },
    {
      name: 'Ashtanga Yoga',
      sub: 'Dynamic Strength Sequencing',
      desc: 'Structured sequences focusing on muscular stamina, core endurance, and static posture controls.',
      details: 'This is a dynamic, structured sequencing style designed to heat the body, release muscular tension, and build deep stamina. Every stretch is coordinated with continuous flow, refining body architecture and cardiovascular response.',
      icon: Flame,
      accent: 'border-[#D97706]/20 bg-[#D97706]/10 text-[#D97706]',
      image: '/ashtanga-yoga.jpg',
      category: 'Asana'
    },
    {
      name: 'Vinyasa Yoga',
      sub: 'Breath-Linked Posture Flow',
      desc: 'A synchronized fluid flow connecting breath to physical transitions and creative coordination.',
      details: 'Vinyasa coordinates fluid postures with rhythmic breath, creating a meditative, continuous dance. This practice trains spatial coordination, joint flexibility, and cardiac pacing, inducing deep emotional release.',
      icon: Compass,
      accent: 'border-[#D97706]/20 bg-[#D97706]/10 text-[#D97706]',
      image: '/vinyasa-yoga.jpg',
      category: 'Asana'
    },
    {
      name: 'Pranayama',
      sub: 'Nervous System Biohacking',
      desc: 'Breath exercises targeted to modulate vital energy currents, and regulate mental pacing.',
      details: 'Pranayama is the science of breath regulation. Learn techniques like Anulom Vilom, Kapalbhati, and Bhastrika to regulate oxygen saturation, shift your autonomic nervous system from high-stress to rest, and clear immediate anxiety.',
      icon: Wind,
      accent: 'border-[#1A3B32]/10 bg-[#1A3B32]/15 text-[#1A3B32]',
      image: '/pranayama.jpg',
      category: 'Pranayama & Mudra'
    },
    {
      name: 'Bandhas & Mudras',
      sub: 'Internal Energetic Seals',
      desc: 'Using physical muscular locks and delicate finger seals to focus internal kinetic currents.',
      details: 'Bandhas (Mula, Uddiyana, Jalandhara) represent core muscular locks that contain and redirect pranic energy, stabilizing posture structures. Combined with mudras (hand gestures), they train micro-attention and assist deep brain focus.',
      icon: Target,
      accent: 'border-[#1A3B32]/10 bg-[#1A3B32]/10 text-[#1A3B32]',
      image: '/bandhas-mudras.jpg',
      category: 'Pranayama & Mudra'
    },
    {
      name: 'Meditation & Mind Training',
      sub: 'Active Mental Pacing',
      desc: 'Structured neuro-training techniques to cultivate calm observation, rejecting simple sitting still.',
      details: 'We do not ask you to simply "stop thinking." We provide active, progressive mental tools grounded in Dharana (focused concentration). Learn to step back from wild emotional thoughts, analyze mind states objectively, and find calm.',
      icon: Users,
      accent: 'border-[#D97706]/20 bg-[#D97706]/10 text-[#D97706]',
      image: '/meditation.jpg',
      category: 'Mind & Reset'
    },
    {
      name: 'Sound Healing',
      sub: 'Organic Nervous System Reset',
      desc: 'Somatic frequency acoustic sessions to fully relax the physical body and brain waves.',
      details: 'High-frequency acoustic vibrations from Himalayan singing bowls are built directly into selected relaxation units. These sound waves prompt a deep neurological reset, promoting effortless parasympathetic recovery and peaceful restorative rest.',
      icon: Music,
      accent: 'border-[#1A3B32]/20 bg-[#1A3B32]/10 text-[#1A3B32]',
      image: '/sound-healing.jpg',
      category: 'Mind & Reset'
    }
  ];  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    const firstInCat = practices.findIndex(p => p.category === cat);
    if (firstInCat !== -1) {
      setSelectedPractice(firstInCat);
    }
  };

  const categories: { name: Category; label: string; sub: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { name: 'Asana', label: 'Asana', sub: 'Body & Stability', icon: Activity },
    { name: 'Pranayama & Mudra', label: 'Pranayama & Mudra', sub: 'Breath & Energy', icon: Wind },
    { name: 'Mind & Reset', label: 'Mind & Reset', sub: 'Meditation & Sound Reset', icon: Brain }
  ];

  return (
    <section id="practices" className="py-12 lg:py-16 bg-[#EFECE6] border-t border-[#1A3B32]/10 relative overflow-hidden">
      {/* Immersive Background Image of selected practice */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={practices[selectedPractice].image} 
          alt={practices[selectedPractice].name} 
          className="w-full h-full object-cover transition-all duration-1000"
          style={{ objectPosition: 'center' }}
        />
        {/* Responsive Cream overlays: Solid/vertical fade on mobile, side-fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFECE6]/95 via-[#EFECE6]/85 to-[#EFECE6]/95 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#EFECE6]/92 via-[#EFECE6]/75 to-transparent" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-b from-[#EFECE6]/10 via-transparent to-[#EFECE6]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split-Screen Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Practice Narratives (lg:col-span-7) */}
          <div className="lg:col-span-7 text-left space-y-5">
            {(() => {
              const practice = practices[selectedPractice];
              const IconComp = practice.icon;
              return (
                <div className="space-y-4">
                  {/* Section Title merged inside left narrative column */}
                  <div className="space-y-1 pb-3 border-b border-[#1A3B32]/10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block">
                      Our Curated Methods
                    </span>
                    <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#1A3B32] tracking-tight">
                      Practices Covered
                    </h2>
                    <p className="text-xs text-zinc-650 font-sans leading-normal">
                      Each session moves through breath, body, and awareness in a sequence designed for all levels.
                    </p>
                  </div>

                  {/* Category and Practice Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-[#1A3B32]/10 text-[#1A3B32] px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold border border-[#1A3B32]/15">
                    <IconComp className="w-3 h-3 text-[#D97706]" />
                    <span>{practice.category} Practice</span>
                  </div>

                  {/* Practice Name */}
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A3B32] tracking-tight transition-all duration-300">
                    {practice.name}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-xs font-mono text-[#D97706] font-bold uppercase tracking-wider -mt-2.5">
                    {practice.sub}
                  </p>

                  {/* Core Description Paragraphs */}
                  <div className="text-xs sm:text-sm text-zinc-750 font-normal leading-relaxed">
                    <p>{practice.details}</p>
                  </div>

                  {/* Practice Quote box */}
                  <div className="bg-[#EFECE6]/80 border-l-4 border-[#D97706] p-3.5 rounded-r-xl border-y border-r border-[#1A3B32]/10 max-w-2xl shadow-xs">
                    <p className="font-serif italic text-xs sm:text-sm text-[#1A3B32] leading-relaxed">
                      &ldquo;{practice.desc}&rdquo;
                    </p>
                  </div>

                  {/* Highlight standard boxes as compact inline tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1A3B32]/10">
                    <span className="text-[10px] font-semibold text-[#1A3B32] bg-white/40 px-2.5 py-1 rounded-md border border-[#1A3B32]/10 shadow-xs">All Skill Levels</span>
                    <span className="text-[10px] font-semibold text-[#D97706] bg-amber-50/40 px-2.5 py-1 rounded-md border border-[#D97706]/20 shadow-xs">Gita Grounded Context</span>
                    <span className="text-[10px] font-semibold text-[#1A3B32] bg-white/40 px-2.5 py-1 rounded-md border border-stone-200 shadow-xs">Somatic Alignment</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Right Column: Floating control selector card (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#1A3B32] text-white p-5 sm:p-6 rounded-[2rem] shadow-xl border border-white/10 relative overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#D97706]/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                
                {/* Category Switching Pills */}
                <div className="flex bg-black/25 p-1 rounded-xl border border-white/5">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.name;
                    // Format category name for small tabs
                    const shortLabel = cat.name === 'Pranayama & Mudra' ? 'Pranayama' : cat.name === 'Mind & Reset' ? 'Mind' : 'Asana';
                    return (
                      <button
                        key={cat.name}
                        onClick={() => handleCategoryChange(cat.name)}
                        className={`flex-1 py-1.5 text-[10px] sm:text-xs uppercase font-mono tracking-wider font-extrabold rounded-lg text-center cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#D97706] text-white shadow-md' 
                            : 'text-stone-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {shortLabel}
                      </button>
                    );
                  })}
                </div>

                {/* Card Title Header (Compact) */}
                <div className="text-center pt-1">
                  <span className="text-[9px] uppercase font-mono text-[#D97706] tracking-widest block font-bold">
                    Select Practice Flow
                  </span>
                  <h4 className="font-serif font-bold text-base text-white mt-0.5">
                    {activeCategory} Traditions
                  </h4>
                </div>

                {/* Sub-practice List selection list (Compact padding) */}
                <div className="space-y-1.5">
                  {practices
                    .map((p, idx) => ({ ...p, originalIndex: idx }))
                    .filter(p => p.category === activeCategory)
                    .map((practice) => {
                      const IconComp = practice.icon;
                      const isSelected = selectedPractice === practice.originalIndex;
                      return (
                        <button
                          key={practice.originalIndex}
                          onClick={() => setSelectedPractice(practice.originalIndex)}
                          className={`w-full p-2.5 rounded-xl border transition-all duration-300 text-left flex items-center gap-3 cursor-pointer group ${
                            isSelected
                              ? 'bg-white/10 border-[#D97706] text-white shadow-xs'
                              : 'bg-transparent border-white/10 text-stone-300 hover:bg-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className={`p-1.5 rounded-lg transition-transform duration-300 ${
                            isSelected
                              ? 'bg-[#D97706]/20 text-[#D97706]'
                              : 'bg-white/5 text-white border border-white/5 group-hover:scale-105'
                          }`}>
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-serif font-bold text-xs sm:text-sm leading-tight text-white">{practice.name}</h5>
                            <p className="text-[9px] text-stone-400 font-sans truncate mt-0.5">{practice.sub}</p>
                          </div>
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Inquire CTA Button */}
              <div className="pt-4 border-t border-white/10 mt-5">
                <a 
                  href="https://wa.me/919623846669?text=Hello%20Abhishek,%20I%20am%20interested%20in%20the%20Yoga%20programs%20at%20Anandmay%20Yogshala."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#D97706] hover:bg-[#c26a05] text-white text-center rounded-xl text-xs uppercase font-mono tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Inquire directly on WhatsApp</span>
                  <span className="font-sans font-light">&gt;</span>
                </a>
              </div>
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
