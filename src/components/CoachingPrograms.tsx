/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, BookOpen, Clock, Heart, Users, CheckCircle, HelpCircle, UserCheck, Shield } from 'lucide-react';

interface CoachingProgramsProps {
  onSelectProgram: (programName: string, subType: string) => void;
}

export default function CoachingPrograms({ onSelectProgram }: CoachingProgramsProps) {
  const [selectedTab, setSelectedTab] = useState<'1to1' | 'parenting' | 'kids'>('1to1');
  const [activePackage, setActivePackage] = useState<number>(0);

  // Focus Category Details
  const categories = {
    '1to1': {
      title: '1:1 Private Life Coaching',
      subtitle: 'Targeted Growth & Strategic Alignment',
      desc: 'Exclusive, highly personalized sessions designed to break through anxiety, map career directions, clear decision blocks, and establish sustainable baseline habits.',
    },
    'parenting': {
      title: 'Parenting Counselling',
      subtitle: 'Building Harmonious Family Vaults',
      desc: 'Counseling targeted at bridging generational distances, clarifying communication with growing children, navigating complex teenager friction, and coaching with serene composure.',
    },
    'kids': {
      title: 'Kids & Teen Counselling',
      subtitle: 'Nurturing Potential',
      desc: 'Support modules for growing youngsters dealing with extreme digital fatigue, performance anxiety, exams distraction, peer pressure, or lack of personal direction.',
    }
  };

  const investmentPlans = [
    {
      name: 'Clarity Session',
      format: '1 Session • 60-75 mins • One-time',
      outcomes: [
        'Clear situation picture',
        'Root cause identified',
        'Decision clarity',
        'Concrete next steps'
      ],
      investment: '₹1,500',
      unit: 'per session',
      tagline: 'Single breakthrough conversation',
      isReset: false
    },
    {
      name: 'Clarity Foundation',
      format: '4 Sessions • 1 per week • 4 Weeks',
      outcomes: [
        'Understand life situation',
        'Identify limiting patterns',
        'Decision framework',
        'Simple habits configuration'
      ],
      investment: '₹5,000',
      unit: 'per session',
      tagline: 'Understand and break early loops',
      isReset: false
    },
    {
      name: 'Clarity to Confidence',
      format: '8-10 Sessions • 3-4 per month • 12 Weeks',
      outcomes: [
        'Deep mindset reset & neural shifts',
        'Emotional stability and regulation',
        'Personalized daily habit system',
        'Ultimate goal clarity & real-world practice'
      ],
      investment: '₹15,000',
      unit: 'total',
      tagline: 'Deep mindset reset and integration',
      isReset: false
    },
    {
      name: 'Life Transformation Journey',
      format: '15-18 Sessions • 2-3 per month • 24 Weeks',
      outcomes: [
        'Complete life / career mapping',
        'Belief system transformation and neural rewriting',
        'Breaking deep childhood & behavioral patterns',
        'Structured growth systems & relationship clarity'
      ],
      investment: '₹25,000',
      unit: 'total',
      tagline: 'Not just a program. It is a life reset.',
      isReset: true
    }
  ];

  return (
    <section id="coaching" className="py-24 bg-[#EFECE6] border-t border-[#1A3B32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#D97706] font-bold block">Internal Alignment Coaching</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A3B32] leading-tight">
              Life Coaching & Counselling Programs
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed font-sans font-light">
              At Anandmay Yogshala, our coaching programmes help individuals overcome confusion, stress, self-doubt, and lack of direction. Through structured one-on-one guidance, practical tools, and personalised support, we help you gain clarity, build confidence, make better decisions, and create meaningful progress in both personal and professional life.
            </p>
            <p className="text-sm font-semibold text-[#1A3B32]">
              Whether you need a single breakthrough conversation or a complete life transformation journey, every programme is designed to create lasting change—not temporary motivation.
            </p>

            {/* Visual Tagline Accent Block */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1A3B32]/10">
              <div className="text-xs font-semibold text-[#1A3B32] font-sans">
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Stage 01</p>
                From clarity to confidence
              </div>
              <div className="text-xs font-semibold text-[#1A3B32] font-sans">
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Stage 02</p>
                From confusion to purpose
              </div>
              <div className="text-xs font-semibold text-[#1A3B32] font-sans">
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Stage 03</p>
                From surviving to thriving
              </div>
            </div>
          </div>

          {/* Golden Quote Block */}
          <div className="lg:col-span-4 bg-[#1A3B32] p-8 rounded-[24px] text-white shadow-xl flex flex-col justify-between border border-[#D97706]/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#D97706]/10 pointer-events-none" />

            <div className="space-y-4">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#D97706] font-semibold">Core Realization</span>
              <p className="font-serif italic text-lg leading-relaxed text-stone-100">
                &ldquo;When the mind becomes clear, life begins to align.&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-stone-400 font-mono">
              ANANDMAY METHOD
            </div>
          </div>
        </div>

        {/* 1. Interactive Tab Switcher for types */}
        <div className="mb-16">
          <div className="flex bg-[#1A3B32]/5 p-1 rounded-full border border-[#1A3B32]/10 max-w-2xl mx-auto mb-8">
            <button
              onClick={() => setSelectedTab('1to1')}
              className={`flex-1 py-3 text-center rounded-full font-mono text-xs uppercase cursor-pointer transition-all duration-200 ${selectedTab === '1to1' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-650 hover:text-[#1A3B32]'
                }`}
            >
              1:1 Life Coaching
            </button>
            <button
              onClick={() => setSelectedTab('parenting')}
              className={`flex-1 py-3 text-center rounded-full font-mono text-xs uppercase cursor-pointer transition-all duration-200 ${selectedTab === 'parenting' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-650 hover:text-[#1A3B32]'
                }`}
            >
              Parenting Counselling
            </button>
            <button
              onClick={() => setSelectedTab('kids')}
              className={`flex-1 py-3 text-center rounded-full font-mono text-xs uppercase cursor-pointer transition-all duration-200 ${selectedTab === 'kids' ? 'bg-[#1A3B32] text-white font-bold' : 'text-zinc-650 hover:text-[#1A3B32]'
                }`}
            >
              Kids & Teen Support
            </button>
          </div>

          {/* Dynamic Tab Panel Display */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-[#1A3B32]/10 shadow-xs p-8 max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold">
                Program Category
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#1A3B32]">
                {categories[selectedTab].title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                {categories[selectedTab].subtitle}
              </p>
              <p className="text-sm text-zinc-700 leading-relaxed font-sans">
                {categories[selectedTab].desc}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#1A3B32]/5 text-[#1A3B32] flex items-center justify-center border border-[#1A3B32]/10">
                <UserCheck className="w-6 h-6 text-[#D97706]" />
              </div>
              <span className="text-[10px] font-mono uppercase text-zinc-500 font-semibold tracking-wider">Coach-on-Record</span>
              <span className="text-xs font-serif font-semibold text-[#1A3B32]">Abhishek T. M.</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Investment Card Grid */}
        <div className="border-t border-[#1A3B32]/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif font-bold text-2xl text-[#1A3B32]">Life Coaching Investment Matrix</h3>
            <p className="text-xs text-zinc-500 font-sans mt-2">
              Select any package below to inspect the key outcomes & features before applying:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentPlans.map((plan, idx) => (
              <div
                key={plan.name}
                onClick={() => setActivePackage(idx)}
                className={`flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 relative cursor-pointer ${plan.isReset
                  ? 'bg-[#1A3B32] text-white border-[#D97706]/30 shadow-md ring-2 ring-[#D97706]/40'
                  : activePackage === idx
                    ? 'bg-white border-[#1A3B32] shadow-md ring-1 ring-[#1A3B32]'
                    : 'bg-white/80 backdrop-blur-md border-[#1A3B32]/10 hover:border-[#1A3B32] shadow-xs'
                  }`}
              >
                {plan.isReset && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-[#D97706] text-white font-mono text-[9px] uppercase tracking-widest font-extrabold shadow-sm">
                    Recommended Reset
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-semibold block mb-1 ${plan.isReset ? 'text-[#D97706]' : 'text-[#D97706]'}`}>
                      {plan.format}
                    </span>
                    <h4 className="font-serif font-bold text-lg leading-tight">{plan.name}</h4>
                  </div>

                  <p className={`text-xs font-serif italic ${plan.isReset ? 'text-stone-300' : 'text-zinc-500'}`}>
                    &ldquo;{plan.tagline}&rdquo;
                  </p>

                  <div className={`pb-3 border-b ${plan.isReset ? 'border-white/10' : 'border-[#1A3B32]/10'}`}>
                    <span className="font-serif font-bold text-2xl">{plan.investment}</span>
                    <span className="text-[10px] font-mono ml-1">{plan.unit}</span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#D97706] font-bold block">Key Outcomes:</span>
                    <ul className="space-y-1.5">
                      {plan.outcomes.map((out, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2 text-[11px] leading-tight">
                          <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${plan.isReset ? 'text-[#D97706]' : 'text-[#D97706]'}`} />
                          <span className={plan.isReset ? 'text-stone-200' : 'text-zinc-650'}>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProgram('coaching', `${categories[selectedTab].title} - ${plan.name}`);
                    }}
                    className={`w-full py-2.5 rounded-xl font-sans text-xs tracking-wider uppercase font-semibold transition-colors cursor-pointer ${plan.isReset
                      ? 'bg-[#D97706] text-white hover:bg-[#b86100]'
                      : 'bg-[#1A3B32]/5 text-[#1A3B32] hover:bg-[#1A3B32]/10'
                      }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
