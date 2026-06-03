/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, Eye, Zap, Shield, Target, Sun, Flame, 
  RefreshCw, CheckCircle, ArrowRightLeft 
} from 'lucide-react';

interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  from: string;
  to: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function Transformation() {
  const [activeCard, setActiveCard] = useState<string | null>('clarity');

  const transformations: TransformationItem[] = [
    {
      id: 'clarity',
      title: 'Clarity over Confusion',
      subtitle: 'Aligning Decisions',
      from: 'Overthinking & decision paralysis in career or relationships.',
      to: 'A crystal-clear picture of your true values and next concrete steps.',
      desc: 'Through structured introspection and Gita wisdom, get out of your own head and see exactly what path needs to be walked.',
      icon: Eye,
      color: '#D97706'
    },
    {
      id: 'calm',
      title: 'Calm over Chaos',
      subtitle: 'Nervous System Regulation',
      from: 'Constant fight-or-flight, anxiety, and high-impact stress loops.',
      to: 'An internal anchor of peace that remains steady regardless of outside noise.',
      desc: 'Breath-linked slow flows, Pranayama techniques, and mudras regulate your vagus nerve to establish sustainable peace.',
      icon: Compass,
      color: '#1A3B32'
    },
    {
      id: 'confidence',
      title: 'Confidence over Self-Doubt',
      subtitle: 'Building Strength',
      from: 'Limiting belief frameworks, anxiety about outcomes, and impostor syndromes.',
      to: 'Unshakeable belief in your capacity, rooted in deep self-knowledge.',
      desc: 'Grounded counseling unlocks the core of self-limiting patterns and replaces them with realistic, proven confidence.',
      icon: Shield,
      color: '#D97706'
    },
    {
      id: 'focus',
      title: 'Focus over Distraction',
      subtitle: 'Mental Endurance',
      from: 'Restless mind, infinite digital fatigue, and scattered schedules.',
      to: 'Laser-sharp cognitive attention and depth of attention on your immediate work.',
      desc: 'Using dharana (mind training) practices to calm the sensory mind and structure daily working habits that block out noise.',
      icon: Target,
      color: '#1A3B32'
    },
    {
      id: 'energy',
      title: 'Energy over Exhaustion',
      subtitle: 'Vitality Restoration',
      from: 'Chronic physical fatigue, emotional burnout, and standard low mornings.',
      to: 'A dynamic pool of natural pranic energy, vitality, and physical lightness.',
      desc: 'Complete metabolic stimulation via dedicated Hatha sequences, pranayama, and personalized plant-based dietary integration.',
      icon: Flame,
      color: '#D97706'
    },
    {
      id: 'purpose',
      title: 'Purpose over Uncertainty',
      subtitle: 'Existential Direction',
      from: 'Feeling stuck, surviving on autopilot, and wondering "what next?"',
      to: 'Waking up with sharp intent, feeling aligned to a higher vision.',
      desc: '1:1 mentorship matches yogic science with professional goals to map out a legacy framework that feels deeply meaningful.',
      icon: Sun,
      color: '#1A3B32'
    }
  ];

  return (
    <section className="py-24 bg-[#EFECE6] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">Real Outcomes</span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] tracking-tight">
            Your Transformation
          </h2>
          <div className="w-12 h-1 bg-[#D97706] mx-auto my-4 rounded-full" />
          <p className="text-zinc-700 font-sans text-base">
            These are the real shifts our students and clients experience when they commit to alignment. Click on any dimension below to inspect the shift:
          </p>
        </div>

        {/* Interactive transformation switcher layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            {transformations.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeCard === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCard(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#1A3B32] border-[#1A3B32] text-white shadow-md translate-x-2'
                      : 'bg-white/70 border-[#1A3B32]/10 hover:border-[#1A3B32] text-[#1A3B32] hover:bg-white/90'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-[#D97706] text-white' : 'bg-[#1A3B32]/5 text-[#1A3B32]'}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-semibold text-sm leading-none">{item.title}</h4>
                      <p className={`text-[10px] mt-1 ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRightLeft className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#D97706]' : 'text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Interactive display area */}
          <div className="lg:col-span-2">
            {transformations.map((item) => {
              if (item.id !== activeCard) return null;
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.id}
                  className="bg-white/80 border border-[#1A3B32]/10 rounded-2xl p-8 shadow-sm h-full flex flex-col justify-between backdrop-blur-md"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#1A3B32]/10 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#1A3B32] text-[#D97706] flex items-center justify-center">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706]">Focus Area</span>
                          <h3 className="font-serif font-bold text-xl text-[#1A3B32]">{item.title}</h3>
                        </div>
                      </div>
                      <span className="text-xs uppercase font-mono bg-[#1A3B32]/5 text-[#1A3B32] py-1 px-3 rounded-full font-bold">
                        {item.subtitle}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-xl bg-orange-50/40 border border-orange-100/50">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block mb-2">The Challenge</span>
                        <p className="text-sm text-zinc-700 font-sans leading-relaxed">
                          {item.from}
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-green-50/40 border border-green-100/50">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-[#1A3B32] font-bold block mb-2">The Alignment</span>
                        <p className="text-sm font-sans font-medium text-[#1A3B32] leading-relaxed">
                          {item.to}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-zinc-700 leading-relaxed font-sans font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#1A3B32]/10 flex items-center justify-between text-xs text-zinc-500">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#D97706]" />
                      Proven methodology through practice
                    </span>
                    <span className="font-serif italic font-medium text-[#D97706]">Anandmay Yogshala</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Disclaimer Block */}
        <div className="mt-12 bg-[#F5F2ED] border border-[#1A3B32]/10 rounded-xl p-5 text-center">
          <p className="text-xs text-zinc-500 italic max-w-2xl mx-auto">
            <span className="font-semibold text-zinc-700 not-italic uppercase tracking-widest text-[9.5px] mr-1">Disclaimer:</span> 
            These are not promises. They are outcomes experienced by real people, through consistent practice.
          </p>
        </div>
      </div>
    </section>
  );
}
